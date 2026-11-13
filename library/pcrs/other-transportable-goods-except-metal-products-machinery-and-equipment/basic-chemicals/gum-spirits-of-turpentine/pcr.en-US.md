---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.gum-spirits-of-turpentine
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Gum spirits of turpentine from steam-distilled tapped pine oleoresin

## 1. Scope and Applicability

This PCR covers one manufacturing route: whole gum spirits of turpentine obtained by preparation and steam distillation of tapped oleoresin from living Pinus trees, oil/water separation, sodium-chloride-bed dehydration and bulk storage/loading. It covers the supplied mixture, not an isolated alpha-pinene, beta-pinene or resin-acid component. FAO and EPA distinguish this route from stump solvent extraction, destructive distillation and kraft sulphate recovery (fao-gum-1995; epa-gum-1976). Actual site equipment, materials, quality and supplier references must be recorded; neither a historical plant observation nor a generic flow identity specifies a recipe.

Exclude tall oil and its fractions, sulphate/wood/destructively distilled turpentine, solvent extraction of stumps, fractionation into pure terpene chemicals, formulated cleaners, pine oil, rosin derivatives and activated minerals. Gum rosin is a real co-product of the covered operation, with its own physical outlet and burden share, not a second independently authored PCR. Use the native whole-turpentine flow only with the actual gum origin, grade and provider. Its broad identity does not prove the route, quality, chemical composition or a supplier inventory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.gum-spirits-of-turpentine |
| classification_refs | CPC 3.0 34400; narrower product and route boundary |
| covered_products | Whole gum spirits of turpentine from steam-distilled tapped living-pine oleoresin with salt-bed dehydration |
| excluded_products | Wood/sulphate turpentine; tall oil; pure terpenes; pine oil; formulations; rosin derivatives |
| representative_product | Bulk whole turpentine accepted to actual supplier/grade specification |
| production_route | Preparation/filtering/washing; steam distillation/oil-water separation; sodium-chloride-bed dehydration; storage/loading |
| market_state | Whole liquid mixture, bulk at production gate, excluding transport tare |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply whole gum spirits of turpentine for subsequent use or processing |
| How much | 1 kg accepted net whole product |
| How well | Meet actual origin, lot, composition, moisture and buyer grade specification, with complete acceptance evidence |
| How long or cycle | One production campaign and its accepted cohort; no downstream service-life claim |
| reference_flow_link | accepted_turpentine |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | turpentine `eaf4b5df-7efb-4594-bf42-d78974276fc2` |
| Reference flow property | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) |
| Reference unit group | Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66) |
| Reference unit | kg |
| Required qualifiers | gum_origin; pinus_species; actual_grade; supplied_composition; water_and_nonvolatile_basis; supplier_reference; production_site_and_period; bulk_gate; unique_first_acceptance_Q; full_stock_and_return_cohort; actual_steam_state; allocation_and_coproducts |

Each ASCII qualifier key must be populated with corresponding evidence in the actual data package; a missing qualifier leaves the reference incomplete. The native broad flow name and Mass/kg chain do not supply actual provider or quality evidence.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_reference | accepted_turpentine | Mass | kg | Use whole accepted net product mass; exclude tare and collect with cp_gate. Do not substitute dry oil, pinene content or resin acids. |
| common_denominator | all inventory rows | Row-declared property | kg; kWh; MJ | All inventory amounts and collection normalization are per 1 kg reference flow; normalize_inventory divides individual attributable campaign totals by cp_gate locked Q. |
| phase_basis | pine_oleoresin; purchased_turpentine; oxalic_acid; diatomaceous_earth; filter_cloth; sodium_chloride; direct_steam; indirect_steam; process_water; cooling_water; raw_drum_tare_in; rosin_drum_in; accepted_turpentine; gum_rosin; raw_drum_return; rosin_drum_delivered; offgrade_turpentine; indirect_condensate_return; cooling_water_out; filter_cake; wash_wastewater; still_aqueous; dryer_brine; used_filter_cloth; cleaning_wastewater; steel_drum_scrap; alpha_pinene_air; beta_pinene_air; limonene_air; water_vapour | Mass | kg | Preserve measured wet mass, moisture, dry constituents and analytical basis; internal phase recycle adds no external exchange or Q; volume conversion requires measured density and temperature. |
| utility_state | direct_steam; indirect_steam; indirect_condensate_return; electricity | Provider-matched property | kg; kWh; MJ | Meter gross steam supply and actual return separately; injected water enters the physical water ledger; link actual states/provider reference without subtracting return from supply. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole tapped oleoresin received at plant; actual externally supplied utilities and materials |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Gum spirits of turpentine narrower subset of CPC 3.0 34400 |
| recursive_input_rule | Pair internal recycled oil/muck/WIP links; retain actual upstream burdens for external supplies, with no evidence-free recursive truncation |
| upstream_dataset_requirement | Actual tapping/collection/transport oleoresin provider; real materials, steam, electricity, water and residual-treatment producers with matched quantity/state references |
| disclosure | Actual site/period/equipment, cohort/stock inheritance, recycled versus purchased oil, all outlets and allocation; combustion, wood extraction and sulphate recovery excluded |

The foreground is one aggregate with separately metered stage ledgers: (a) receive/net-weigh gum, melt/dilute with traced recycled turpentine, condition/filter/wash and return muck as actually installed; (b) distil with separate indirect and injected steam, trap entrainment, condense and separate aqueous/oil phases, discharge whole rosin; (c) pass the oil through the actual salt dryer and account for brine/retained oil; (d) store, accept and bulk-load. Unused conditional rows require evidence of non-use, never an assumed zero. Additional actual filter media, chemicals, packaging components, species or outlets require separate atomic cards and review of their physical fate. No source case quantities, yields, temperatures, pressures, times, dose or purity ranges are adopted (fao-gum-1995; epa-gum-1976).

This route uses externally supplied electricity and water steam from real linked producers. Onsite boilers, fuel combustion, flaring and thermal VOC destruction are outside this bounded foreground. An actual installation using them cannot hide their fuel or emissions inside an unidentified heat input: extend and review the model with each real fuel, combustion air/oxygen, water, emitted species, ash and useful-heat interface, or use a complete separately modelled actual utility/treatment producer with matching transfer references. Direct discharge to environmental water and external captured-gas treatment likewise require the actual receiver/medium and complete links.

Before allocation, reconcile each stage on whole wet mass: opening stock + actual external receipts + paired internal receipts = closing stock + actual external physical outlets + paired internal transfers. Reconcile water separately, including supplied gum moisture, live steam, washing water, salt-bed water, condensate, liquid discharge, product moisture, evaporation and retained stocks. For every measured constituent/element X use S0_X + I_X + G_X = S1_X + O_X + C_X, where S0_X/S1_X are opening/closing constituent stock, I_X/O_X are actual inputs/outputs and G_X/C_X are actual generation/consumption; elements have no chemical generation/consumption, while reactive species require documented terms. Record any real oxidation/degradation instead of assuming a pure C10H16 formula. GC peak-area percentages are not automatically whole-product mass fractions. Unknown fractions, water and nonvolatile matter remain explicit; no unmeasured remainder becomes alpha-pinene. Technical wastes retain their whole mixed-stream mass and analytical constituent loads without double-counting those loads as extra exchanges.

Lock Q = sum of net mass at unique actual first acceptance events for the declared cohort and gate. Repeated QC, returns, dilution-oil recycle, re-distillation and reacceptance do not create another event. Q is whole accepted product, not dry terpene mass, pinene content, gross tank throughput, dispatched mass or a second external physical output. Partition this original accepted mass basis among disjoint states at the observation cutoff: final external delivery after recorded returns, held finished stock, quarantine, rework/WIP, external downgrade/disposal, sampling and irreversible post-acceptance losses. Trace returned or reworked portions by parent event so a gram has only one current destination; external additions and their burdens stay separate. Do not restore lost original mass into a surviving remainder and also count it as loss. Only when there are no other post-gate exits, losses or held states may Q = delivery + new finished-stock increment be used. Otherwise use the complete disjoint state reconciliation; an unclosed origin/stock bridge blocks a complete dataset. Later storage/loading services for this cohort retain original Q.

Cover raw, WIP, dilution-oil and accepted-product opening/closing stocks and their actual cohorts. Opening WIP carries inherited foreground work and material history; do not model it as burden-free new gum. Carry embedded supplier burdens once, append only new work, and never duplicate earlier melting/distillation already included in a provider. Retained internal oil/muck has physical transfer and stock history, not an extra purchased input or a residual zero-credit outlet. Purchased startup oil and old accepted stock are traced separately from newly recovered gum-derived material. A complete inventory requires consistent inherited and current provider bases, not merely a net-period material purchase total.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| gum_turpentine | Gum preparation, distillation/separation, salt drying and gate delivery aggregate | required | Actual living-pine gum origin and external-utility route defined here | foreground | per 1 kg reference flow |

### Process: Gum spirits of turpentine manufacture (`gum_turpentine`)

#### Inputs

##### Product flows

###### Tapped pine oleoresin (`pine_oleoresin`)

Whole received gum from living Pinus trees, including its measured water, terpene oil, resin and entrained debris. Weigh net contents apart from drum tare. Require the actual tapping/collection supplier, wood species, transport and allocated upstream inventory; do not replace the gum with pure resin acid or assign it zero burden.

- Selected flow: Tapped pine oleoresin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### turpentine (`purchased_turpentine`)

Conditional external makeup/startup dilution oil of the same gum origin and whole-mixture quality. Internal recycled heads/tails or prior product are not purchases. Match actual supplier reference, origin and composition; purchased oil incorporated into output retains its embodied burden and is not new pine-derived production.

- Selected flow: turpentine `eaf4b5df-7efb-4594-bf42-d78974276fc2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### Oxalic acid (`oxalic_acid`)

Only the actually used oxalic acid product for metal-ion/colour control. Measure supplied mass, hydrate form, purity and any solution water separately in the constituent ledger. Laboratory recipes and historical dosage are not plant defaults.

- Selected flow: Oxalic acid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### Diatomaceous earth filter aid (`diatomaceous_earth`)

Conditional actual filter aid, with supplier treatment/grade and moisture. Record its destination in wet filter cake and losses. Do not infer an activated-mineral manufacturing route from the classification leaf.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### Cotton filter cloth (`filter_cloth`)

Conditional actual cotton medium only; record replacement mass, service interval and retained oil. A different installed medium requires its own atomic material card rather than relabelling cotton.

- Selected flow: Cotton filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### Sodium chloride drying salt (`sodium_chloride`)

Actual rock-salt bed replenishment for turpentine dehydration; record purity, moisture, opening/closing bed stock and brine removal. Do not infer complete water removal or zero salt entrainment from the existence of a dryer.

- Selected flow: Sodium chloride drying salt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_material; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: fao-gum-1995; epa-gum-1976

###### Direct-injection water steam (`direct_steam`)

Gross external live steam actually injected into gum transfer, washing or distillation. Record each meter, pressure convention, temperature and dryness; injected water enters process mass and condensed water, not an indirect return. Require the real linked steam producer and supply enthalpy/reference basis.

- Selected flow: Direct-injection water steam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utility; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utility
- Sources: fao-gum-1995; epa-gum-1976

###### Indirect-heating water steam (`indirect_steam`)

Gross steam crossing coils/jackets for melting, distillation or storage. Meter separately from live steam and keep the actual supplier basis; never subtract condensate mass from this gross input.

- Selected flow: Indirect-heating water steam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utility; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utility
- Sources: fao-gum-1995; epa-gum-1976

###### Supplied process water (`process_water`)

External liquid water for washing and cleaning. Meter each intake and distinguish reused still water, condensate and emulsion water, which are internal unless they cross the declared boundary. Convert volume only with the measured density/state.

- Selected flow: Supplied process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Supplied cooling water (`cooling_water`)

Conditional external once-through cooling supply or measured makeup to the installed recirculating system. Declare which interface is used; gross circulation is not fresh withdrawal. Capture provider treatment and pumping boundaries.

- Selected flow: Supplied cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Purchased electricity (`electricity`)

Meter actual pumps, agitation, filtration, condenser/dryer and bulk storage/loading power. Bind the real voltage, grid/provider, geography and period; retain kWh here and convert only against the linked provider reference (1 kWh = 3.6 MJ).

- Selected flow: Purchased electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utility; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utility
- Sources: fao-gum-1995; epa-gum-1976

###### Steel oleoresin transport drum (`raw_drum_tare_in`)

Conditional physical incoming steel drum tare associated with the gum receipt, separate from gum net mass. Trace ownership, reuse and previously embedded container service; a full incoming tare is not automatically new drum manufacture.

- Selected flow: Steel oleoresin transport drum
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: fao-gum-1995; epa-gum-1976

###### Steel gum-rosin drum (`rosin_drum_in`)

Actual new or service-attributed steel drum used for the co-produced rosin. Record each drum and lid mass, reuse history and supplier burden. Additional nonsteel components require separate cards.

- Selected flow: Steel gum-rosin drum
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: fao-gum-1995; epa-gum-1976

#### Outputs

##### Product flows

###### turpentine (`accepted_turpentine`)

1 kg whole accepted net gum spirits of turpentine at the bulk production gate, excluding tare. Q is fixed from unique actual first-acceptance events; this normalized reference is a declaration of production basis, not an extra physical shipment beside the batch mass ledger.

- Selected flow: turpentine `eaf4b5df-7efb-4594-bf42-d78974276fc2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_gate
- Sources: fao-gum-1995; epa-gum-1976

###### Gum rosin (`gum_rosin`)

Whole actual nonvolatile co-product remaining after gum distillation, with accepted grade, water/foreign matter and net mass apart from its drum. Preserve its physical destination and embodied constituents before burden allocation. It is neither pure resin acids nor tall-oil/wood rosin.

- Selected flow: Gum rosin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_process; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_process
- Sources: fao-gum-1995; epa-gum-1976

###### Returned steel oleoresin transport drum (`raw_drum_return`)

Conditional actual empty drum tare returned to its owner. Match incoming drum identifiers, retained gum, damaged stock and scrap; it creates no extra PCR reference product, co-function or automatic avoided-steel credit.

- Selected flow: Returned steel oleoresin transport drum
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: fao-gum-1995; epa-gum-1976

###### Delivered steel gum-rosin drum (`rosin_drum_delivered`)

Physical steel drum and steel lid leaving with the rosin co-product, separate from net rosin. Match the input/stock/tare ledger. This transfer is packaging, not additional rosin or a second co-product entitlement.

- Selected flow: Delivered steel gum-rosin drum
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: fao-gum-1995; epa-gum-1976

###### Off-grade gum turpentine for external reprocessing (`offgrade_turpentine`)

Conditional actual external oil stream with identified receiver, quality, measured mass and economic/waste status. Internal heads/tails and rework remain in the internal ledger. An off-grade stream is not the accepted reference and must not also be counted as an air loss.

- Selected flow: Off-grade gum turpentine for external reprocessing
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_process; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_process
- Sources: fao-gum-1995; epa-gum-1976

###### Returned indirect steam condensate (`indirect_condensate_return`)

Conditional actual water returned to the external steam provider, with paired mass, pressure, temperature, contamination and acceptance evidence. Distinguish it from the aqueous distillate; heat recovery requires measured supply/return enthalpy and the provider convention.

- Selected flow: Returned indirect steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_utility; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utility
- Sources: fao-gum-1995; epa-gum-1976

##### Waste flows

###### Discharged cooling water (`cooling_water_out`)

Conditional single actual cooling outlet stream to a documented off-unit treatment or return receiver. Match the stated once-through/makeup interface and evaporative loss. A direct environmental discharge requires actual medium/species cards and reviewed scope, not this technical-stream identity.

- Selected flow: Discharged cooling water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Wet pine-oleoresin filter cake (`filter_cake`)

One actual cake containing removed bark/dirt, spent filter aid, precipitated oxalates and retained resin/oil/water as present. Measure wet mass and constituent basis; do not add the same constituents again as separate exported pure products. Link actual treatment.

- Selected flow: Wet pine-oleoresin filter cake
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_process; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_process
- Sources: fao-gum-1995; epa-gum-1976

###### Pine-oleoresin wash wastewater (`wash_wastewater`)

External spent wash phase after measured internal recycling, including actual soluble acid, organic load and suspended solids. Reprocessed muck is internal; only actual discarded muck goes into this stream or its own physically separate card.

- Selected flow: Pine-oleoresin wash wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Separated aqueous turpentine-still condensate (`still_aqueous`)

Actual external aqueous condensate after oil separation and internal reuse. Measure retained oil, water and destination. Water sent back to wash gum is a paired internal link, not both exported wastewater and fresh process-water input.

- Selected flow: Separated aqueous turpentine-still condensate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Spent turpentine-dryer sodium chloride brine (`dryer_brine`)

One actual salt-bed liquor stream, with measured wet mass, water, dissolved salt and entrained oil. Keep its origin separate from wash water; if physically merged, meter the contributions and book the receiver link once.

- Selected flow: Spent turpentine-dryer sodium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Used oil-contaminated cotton filter cloth (`used_filter_cloth`)

Conditional discarded actual cotton medium with oil/water retention and treatment manifest. Reusable cloth remaining onsite is stock; retained oil is not also counted in cake or fugitive emissions.

- Selected flow: Used oil-contaminated cotton filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_process; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_process
- Sources: fao-gum-1995; epa-gum-1976

###### Oily equipment-cleaning wastewater (`cleaning_wastewater`)

Actual segregated cleaning/spill-recovery water routed to external treatment. Record recovered oil returned to process, remaining wet mass and organic load. No detergent or solvent is assumed; any actual chemical requires its own atomic input and fate.

- Selected flow: Oily equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_water; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: fao-gum-1995; epa-gum-1976

###### Discarded steel transport drum (`steel_drum_scrap`)

Conditional actually discarded steel tare with measured oil residue and documented recycler/treatment. A drum cannot appear both as intact return and scrap; preserve actual reuse/service allocation separately from physical mass.

- Selected flow: Discarded steel transport drum
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_pack; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: fao-gum-1995; epa-gum-1976

##### Elementary flows

###### Alpha-pinene to outdoor air (`alpha_pinene_air`)

Conditional measured alpha-pinene escaping actual preparation, condenser, tank and loading vents/fugitives. Use matrix-valid speciation and matched gas conditions; it is neither total turpentine loss nor a proxy for unidentified VOC.

- Selected flow: Alpha-pinene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_air; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: fao-gum-1995; epa-gum-1976

###### Beta-pinene to outdoor air (`beta_pinene_air`)

Conditional actual beta-pinene release, quantified independently with location, air subcompartment and monitoring coverage. Product beta-pinene concentration alone is not a fugitive emission factor.

- Selected flow: Beta-pinene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_air; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: fao-gum-1995; epa-gum-1976

###### Limonene to outdoor air (`limonene_air`)

Conditional actual limonene release only where confirmed in the supplied gum and vent. Other detected compounds require their own species cards, not addition to this named species.

- Selected flow: Limonene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_air; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: fao-gum-1995; epa-gum-1976

###### Water vapour to outdoor air (`water_vapour`)

Actual water lost in venting or cooling evaporation, distinct from returned condensate and discharged liquid streams. Determine wet/dry gas basis and water balance; do not set evaporation to zero just to close the ledger.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable exchange per 1 kg reference flow from cp_air; divide the campaign amount by locked Q.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: fao-gum-1995; epa-gum-1976

## 7. Allocation and Co-product Handling

Keep whole physical mass, water, elemental/species and internal-transfer ledgers intact. For the declared attributional inventory, first subdivide dedicated operations where measured; then apply demonstrated determining physical causality per burden, and use comparable actual gate revenue for only the inseparable remainder (jrc-ilcd-2010). Turpentine versus rosin mass proportions alone do not establish heat causality. Record all actual economic cofunctions and their stock/grade/value, including off-grade product if truly sold; waste treatment remains a burden with a real receiver. Allocate actual rosin packaging to its function without manufacturing a packaging cofunction. Recycled internal oil is no cofunction, no avoided product and no additional Q. Do not erase physical species or waste outputs by multiplying them away to obtain closure; allocation is a separate burden ledger. No default co-product ratio, price, displacement or residual credit is prescribed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | gum_turpentine | reference and stock cohort | acceptance_mass_ledger | lot; actual first-acceptance event id/time; net mass; gross/tare; grade/origin; stock state; dispatch; return/rework parent; original-acceptance mass basis | Calibrated weighing or traceable tank volume with measured density and temperature; pair laboratory acceptance and uniquely identified event; follow every later state to one disjoint destination. | kg | every first acceptance and every subsequent state change | whole declared campaign and full selected cohort history through stated observation cutoff | actual gum distillation site, grade and bulk gate; identify opening accepted stock separately | per 1 kg reference flow | scale calibration; event uniqueness; COA; tank state/density; parent links; full stock/disposition reconciliation; Lock Q as sum of unique first-acceptance net kg; normalized values per 1 kg reference flow; no reacceptance or gross-loop increment. |
| cp_material | gum_turpentine | individual external materials | receipt_consumption_record | individual SKU and chemical; supplier; origin/grade; net wet mass; water/assay; opening/closing stock; receipt/return; stage; upstream reference and amount basis | Weigh individual lots and reconcile stock withdrawals; obtain complete supplier product and upstream inventory records; use documented matrix-valid analysis with sample, calibration, recovery, uncertainty and units. | kg | each receipt, charge, return and stock survey | same production campaign and inherited source history | each actual material interface and contributing supplier | per 1 kg reference flow | invoices; weigh tickets; assay method/version; stock bridge; provider completeness and nonduplicate burden record; Individual attributable net external material amount per 1 kg reference flow; internal recycled oil is excluded from purchases and kept in cp_process. |
| cp_process | gum_turpentine | stages, coproducts and residuals | stage_mass_species_record | stage/batch; wet mass; composition; raw/WIP/FG opening/closing stock; dilution oil; heads/tails; muck; rosin; off-grade; residues; destinations; inherited burden history | Weigh all external outlets and paired internal transfers; sample each physical phase representatively; retain complete matrix-valid water/organic/species or elemental analysis procedure, calibration and uncertainty; reconcile wet/dry analytical basis explicitly. | kg | each batch/transfer/disposition and stock boundary | entire cohort including opening WIP and all reprocessing cycles | preparation, distillation/condensation, dehydration, storage/loading in the one aggregate | per 1 kg reference flow | batch tickets; phase samples; paired meters; stock/constituent closure and residual receiver records; Each attributable external outlet per 1 kg reference flow; paired internal transfers cancel once, not all gross circulation. |
| cp_water | gum_turpentine | individual water interfaces | water_phase_record | intake/outlet id; measured wet mass/volume/density/T; water fraction; COD/TOC; suspended solids; salt/acid/oil; recycle; stock; receiver; cooling scheme | Meter each physically separate stream; use proportional representative samples and calibrated matrix-valid analyses; trace all merges and actual receiver treatment; distinguish process from noncontact cooling. | kg | each batch/drain plus continuous intake where installed | whole campaign including cleaning, startup and shutdown | actual wash, still-water, dryer, cleaning and cooling interfaces | per 1 kg reference flow | meter calibrations; density/state; water/salt/organic closure; treatment manifests and provider reference; Each individual external wet-stream amount per 1 kg reference flow; merged receiving link once; internal water reuse paired and cancelled. |
| cp_utility | gum_turpentine | electricity and two separate steam interfaces | utility_supply_return_record | meter/stage; gross electricity kWh; direct steam kg; indirect steam kg; return condensate kg; T/P convention/dryness; enthalpy; provider reference; service/stock attribution | Calibrated submetering or documented equipment load/time backed by measured use; paired steam supply/return metering; verify real producer inventory and delivered reference without duplicating included distribution. | kWh; kg; MJ | continuous meters and each supplier settlement | whole campaign and separate later storage services | external utility boundary at actual supply/return meters | per 1 kg reference flow | meter records; pressure convention; steam quality; enthalpy source; supplier lifecycle scope and reconciliation; Each gross supplied utility and actual condensate return separately per 1 kg reference flow; match provider unit/reference; later cohort services use original Q. |
| cp_air | gum_turpentine | each actual released species | species_release_record | vent/fugitive id; species; measured concentration and gas flow; wet/dry basis; T/P; time; capture/retained oil; actual medium; water evaporation; uncertainty | Use a documented complete sampling/analytical method valid for each species and matrix, with calibrated response, blanks/recovery, detection limit and time coverage; reconcile actual vent plus fugitive outlets with retained/captured material. | kg | representative monitored runs plus all abnormal events | campaign operating modes, idle storage and loading | actual preparation, condenser, dryer, tanks and transfer release points | per 1 kg reference flow | complete methods; chromatograms/calibration; gas state/time; source coverage; mass/species reconciliation; Each individual actually released species per 1 kg reference flow; no total-VOC-to-single-species substitution and no capture/emission overlap. |
| cp_pack | gum_turpentine | individual container component | tare_ownership_transfer_record | drum id; steel body/lid tare; contents gross/net; ownership; receipts; opening/closing stock; return; delivered tare; scrap; contamination; reuse counts; embedded service | Weigh matching empty/full containers; reconcile each component and unique transfer; obtain service/manufacture burden and actual receiver records, avoiding duplicate supply already inside gum provider. | kg | each container transfer, replacement and stock survey | full campaign plus inherited reuse history | raw-gum drums and actual rosin drums/lids; bulk turpentine tare excluded | per 1 kg reference flow | paired weigh tickets; component stock bridge; ownership/reuse evidence; delivery/return/scrap manifests; Each physical tare and separately attributed packaging service per 1 kg reference flow; no net-product or cofunction duplication. |
| cp_allocation | gum_turpentine | burden attribution | causality_revenue_record | stage-specific burden; physical cause; actual cofunction quantity; accepted sales/stock grade; comparable gate prices; revenue period; residual stream/waste status; selected attributional model | Subdivide measured dedicated operations first; test determining physical causality per exchange; for inseparable remainder use documented actual comparable gate revenue under the declared attributional model; retain sensitivity and all physical flows. | kg; currency; fraction | each campaign and material market/grade change | same campaign with representative disclosed price averaging | actual aggregate and all economic cofunctions at equivalent gate | per 1 kg reference flow | submetering; causal assessment; price invoices; coproduct stock valuations; sensitivity; no residual-credit assumption; Attributable burden per 1 kg reference flow; allocation shares sum to one only over actual cofunctions; no allocation of physical atoms away. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_inventory | all inventory rows | Divide each attributable campaign exchange by locked accepted net Q to express it per 1 kg reference flow. Keep physical totals separately and apply the declared burden allocation only to the burden ledger. | individual measured exchange; locked Q; cp_gate; applicable individual protocol | individual normalized exchange per 1 kg reference flow | fao-gum-1995; epa-gum-1976; jrc-ilcd-2010 |
| accepted_cohort | accepted_turpentine | Lock Q = sum of net mass at unique actual first acceptance events for the declared cohort and gate. Repeated QC, returns, dilution-oil recycle, re-distillation and reacceptance do not create another event. Q is whole accepted product, not dry terpene mass, pinene content, gross tank throughput, dispatched mass or a second external physical output. Partition this original accepted mass basis among disjoint states at the observation cutoff: final external delivery after recorded returns, held finished stock, quarantine, rework/WIP, external downgrade/disposal, sampling and irreversible post-acceptance losses. Trace returned or reworked portions by parent event so a gram has only one current destination; external additions and their burdens stay separate. Do not restore lost original mass into a surviving remainder and also count it as loss. Only when there are no other post-gate exits, losses or held states may Q = delivery + new finished-stock increment be used. Otherwise use the complete disjoint state reconciliation; an unclosed origin/stock bridge blocks a complete dataset. Later storage/loading services for this cohort retain original Q. | unique actual acceptance records; net weighings; state/parent history; cp_gate | locked Q and complete disjoint original-mass disposition bridge | fao-gum-1995 |
| stage_conservation | all inventory rows | Before allocation, reconcile each stage on whole wet mass: opening stock + actual external receipts + paired internal receipts = closing stock + actual external physical outlets + paired internal transfers. Reconcile water separately, including supplied gum moisture, live steam, washing water, salt-bed water, condensate, liquid discharge, product moisture, evaporation and retained stocks. For every measured constituent/element X use S0_X + I_X + G_X = S1_X + O_X + C_X, where S0_X/S1_X are opening/closing constituent stock, I_X/O_X are actual inputs/outputs and G_X/C_X are actual generation/consumption; elements have no chemical generation/consumption, while reactive species require documented terms. Record any real oxidation/degradation instead of assuming a pure C10H16 formula. GC peak-area percentages are not automatically whole-product mass fractions. Unknown fractions, water and nonvolatile matter remain explicit; no unmeasured remainder becomes alpha-pinene. Technical wastes retain their whole mixed-stream mass and analytical constituent loads without double-counting those loads as extra exchanges. | actual stage wet/constituent stock and transfers; cp_process; cp_water; cp_air; cp_material | unallocated physical closure with uncertainty and unresolved residuals | fao-gum-1995; epa-gum-1976 |
| utility_reference | direct_steam; indirect_steam; indirect_condensate_return; electricity | Preserve gross supply and actual return separately. Match kg steam state and supplier reference; determine useful heat from actual measured supply/return enthalpy, losses and injection fate. Convert electrical kWh to MJ only by 3.6 MJ/kWh if the matched provider requires MJ. | metered gross supplies and returns; states; provider basis; cp_utility | matched utility exchanges and nonduplicate heat burden | fao-gum-1995; epa-gum-1976 |
| burden_allocation | all inventory rows | Keep whole physical mass, water, elemental/species and internal-transfer ledgers intact. For the declared attributional inventory, first subdivide dedicated operations where measured; then apply demonstrated determining physical causality per burden, and use comparable actual gate revenue for only the inseparable remainder (jrc-ilcd-2010). Turpentine versus rosin mass proportions alone do not establish heat causality. Record all actual economic cofunctions and their stock/grade/value, including off-grade product if truly sold; waste treatment remains a burden with a real receiver. Allocate actual rosin packaging to its function without manufacturing a packaging cofunction. Recycled internal oil is no cofunction, no avoided product and no additional Q. Do not erase physical species or waste outputs by multiplying them away to obtain closure; allocation is a separate burden ledger. No default co-product ratio, price, displacement or residual credit is prescribed. | measured dedicated burdens; determining causes; all cofunction quantities and gate values; cp_allocation | explicit allocation shares and sensitivity separate from physical ledgers | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify actual gum origin, species, supplied whole-mixture state and grade; link each selected identity and real provider at the same property/unit/reference. A family name or classification is insufficient. | supplier traceability; complete direct identity and provider records; actual acceptance specification |
| mass_and_cohort | all inventory rows | Require positive locked Q, calibrated net measurements, complete raw/WIP/FG/return cohorts and disjoint post-gate origin closure; no duplicate first acceptance. | cp_gate; cp_process; cp_material; cp_pack; event/stock audit |
| analytical_basis | all inventory rows | Retain complete actual sample handling and matrix-valid method/version, mass versus volume units, moisture, calibrated response/recovery, blanks and uncertainty. Product species composition is measured, not inferred from a pure formula, source example or uncorrected peak areas. No numerical grade threshold is prescribed here. | cp_material; cp_process; cp_air; actual lab procedures/results and lot COA |
| completeness | all inventory rows | Record every actual chemical, utility, packaging component, mixed waste and released species atomically. Missing identity or site quantity is disclosed and prevents claiming a populated complete dataset for that row; an absent essential method/physical interface blocks applicable readiness. | site walkdown; complete PFD and meter list; supplier/treatment links; explicit non-use evidence |
| coverage | all inventory rows | Cover startup, normal runs, downtime, cleaning, loading, off-grade, spills and actual uncertainty during the declared period; disclose historical-source and site specificity. Do not import FAO/EPA case values as current industry ranges. | all eight protocols; operating-mode/time and sampling coverage; data gap log |

## 9. Validation Rules

Check the complete units and conditions below, rather than isolated rule IDs.

1. Confirm actual living-pine gum provenance and the exact steam-distillation/salt-drying route, whole liquid mixture state, actual grade/provider and all ASCII qualifiers. Reject wood, sulphate, destructive-distillation, tall-oil, isolated-pinene and formulation substitutions.

2. Lock Q = sum of net mass at unique actual first acceptance events for the declared cohort and gate. Repeated QC, returns, dilution-oil recycle, re-distillation and reacceptance do not create another event. Q is whole accepted product, not dry terpene mass, pinene content, gross tank throughput, dispatched mass or a second external physical output. Partition this original accepted mass basis among disjoint states at the observation cutoff: final external delivery after recorded returns, held finished stock, quarantine, rework/WIP, external downgrade/disposal, sampling and irreversible post-acceptance losses. Trace returned or reworked portions by parent event so a gram has only one current destination; external additions and their burdens stay separate. Do not restore lost original mass into a surviving remainder and also count it as loss. Only when there are no other post-gate exits, losses or held states may Q = delivery + new finished-stock increment be used. Otherwise use the complete disjoint state reconciliation; an unclosed origin/stock bridge blocks a complete dataset. Later storage/loading services for this cohort retain original Q.

3. Before allocation, reconcile each stage on whole wet mass: opening stock + actual external receipts + paired internal receipts = closing stock + actual external physical outlets + paired internal transfers. Reconcile water separately, including supplied gum moisture, live steam, washing water, salt-bed water, condensate, liquid discharge, product moisture, evaporation and retained stocks. For every measured constituent/element X use S0_X + I_X + G_X = S1_X + O_X + C_X, where S0_X/S1_X are opening/closing constituent stock, I_X/O_X are actual inputs/outputs and G_X/C_X are actual generation/consumption; elements have no chemical generation/consumption, while reactive species require documented terms. Record any real oxidation/degradation instead of assuming a pure C10H16 formula. GC peak-area percentages are not automatically whole-product mass fractions. Unknown fractions, water and nonvolatile matter remain explicit; no unmeasured remainder becomes alpha-pinene. Technical wastes retain their whole mixed-stream mass and analytical constituent loads without double-counting those loads as extra exchanges.

4. Cover raw, WIP, dilution-oil and accepted-product opening/closing stocks and their actual cohorts. Opening WIP carries inherited foreground work and material history; do not model it as burden-free new gum. Carry embedded supplier burdens once, append only new work, and never duplicate earlier melting/distillation already included in a provider. Retained internal oil/muck has physical transfer and stock history, not an extra purchased input or a residual zero-credit outlet. Purchased startup oil and old accepted stock are traced separately from newly recovered gum-derived material. A complete inventory requires consistent inherited and current provider bases, not merely a net-period material purchase total.

5. This route uses externally supplied electricity and water steam from real linked producers. Onsite boilers, fuel combustion, flaring and thermal VOC destruction are outside this bounded foreground. An actual installation using them cannot hide their fuel or emissions inside an unidentified heat input: extend and review the model with each real fuel, combustion air/oxygen, water, emitted species, ash and useful-heat interface, or use a complete separately modelled actual utility/treatment producer with matching transfer references. Direct discharge to environmental water and external captured-gas treatment likewise require the actual receiver/medium and complete links.

6. Keep whole physical mass, water, elemental/species and internal-transfer ledgers intact. For the declared attributional inventory, first subdivide dedicated operations where measured; then apply demonstrated determining physical causality per burden, and use comparable actual gate revenue for only the inseparable remainder (jrc-ilcd-2010). Turpentine versus rosin mass proportions alone do not establish heat causality. Record all actual economic cofunctions and their stock/grade/value, including off-grade product if truly sold; waste treatment remains a burden with a real receiver. Allocate actual rosin packaging to its function without manufacturing a packaging cofunction. Recycled internal oil is no cofunction, no avoided product and no additional Q. Do not erase physical species or waste outputs by multiplying them away to obtain closure; allocation is a separate burden ledger. No default co-product ratio, price, displacement or residual credit is prescribed.

7. Reconcile each container material: opening tare + actual receipts = closing tare + delivered tare + returned tare + scrap/loss, with retained oil separate. Match rosin packaging output to its actual incoming container/service basis. Tare flows are physical transfers, not reference production, added cofunctions or automatic credits.

8. Each of the eight collection protocols must be populated with actual records for its applicable interfaces. Quantities, sample method/version, state conversions, real provider/treatment references, non-use evidence, all actual chemicals and species, uncertainty and complete period coverage must be reviewable. Unknown essential method, unmatched provider, unclosed mass/stock/species or missing physical interface prevents a complete applicable dataset. Mechanical consistency checks do not establish scientific approval or actual site completeness.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Gum turpentine manufacturing background with matching origin, grade, reference and complete inventory |
| allowed_use | Collect/build an actual site-, period-, cohort- and declared-boundary whole-product inventory |
| excluded_use | Whole-leaf coverage, other routes, pure components, default recipes/yields/emission factors, evidence-free zero burdens or substitution credits |
| required_metadata | All qualifier keys; original Q and state/stock bridge; actual atomic exchanges/methods; upstream/treatment references; physical and allocated burden ledgers; uncertainty/source applicability |
| required_quality_disclosure | Pending identities/quantities, actual method/provider evidence, historical-source limits and uncovered operations; method guidance is not a populated or scientifically approved dataset |
| update_trigger | Changed origin/species/grade, operation/chemical, salt bed or water recycling, steam state/provider, actual release/outlet, stock/acceptance rule, cofunction or allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| fao-gum-1995 | official_guidance | FAO, Gum naval stores: turpentine and rosin from pine resin, Non-Wood Forest Products 2 (1995), Introduction pp.1-2; Chapter 3 pp.24-27, Figure 2 p.25; Appendix 2 pp.43-45. https://www.fao.org/4/v6460e/v6460e.pdf | Gum/wood/sulphate route distinction; actual preparation, recycled dilution oil/muck, distillation, phase separation, salt drying, bulk storage and whole-mixture quality context. Historical case doses, yields, equipment conditions, trade grades and composition examples are excluded as defaults. |
| epa-gum-1976 | official_guidance | US EPA, Development Document for Interim Final Effluent Limitations, Guidelines and Proposed New Source Performance Standards for the Gum and Wood Chemicals Manufacturing Point Source Category, EPA 440/1-76/060b (April 1976), Figure IV-2 p.38 and Subcategory B p.39; wastewater discussion pp.53-54. https://19january2025snapshot.epa.gov/sites/default/files/2019-12/documents/gum-wood-chemicals-mfg_dd_1976.pdf | Independent observed gum-route operations and three distinct wastewater origins: gum wash, still aqueous condensate and salt-dryer brine; actual plant variation/reuse. Adjacent wood extraction route and historical discharge quantities/limits are not adopted. |
| jrc-ilcd-2010 | official_guidance | JRC, ILCD Handbook, General Guide - Detailed Guidance, first edition March 2010, sections 7.9.3.1-2 pp.257-258 (PDF277-278). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Declared attributional burden hierarchy: subdivision, determining physical causality, then actual market-value criterion for inseparable remaining burdens. No default shares or prices. |
