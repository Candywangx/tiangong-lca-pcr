---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.undiluted-ethylene-oxide-sterilant-can-filling
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Nominally undiluted ethylene oxide sterilant in crimp-sealed cans

## 1. Scope and Applicability

This method covers whole nominally undiluted ethylene oxide sterilant, CAS75-21-8, in single-use crimp-sealed cans. The source-defined physical route includes received liquefied EO, actual nitrogen-assisted transfer, pneumatic filling, crimp sealing, reclamation inventory, weight/leak inspection, protective-cap/carton packing and first acceptance. The actual on-site catalytic abator and reclamation units remain included physical operations. They may be genuinely separately modeled producers with qualified interfaces or explicitly expanded inventories, never a generic disposal substitution or burden-free cutoff. The Accra Pac investigation establishes its historical operations; current manufacturer label/SDS establish a finished commercial substance, not the identity of that contract plant or its present supplier. No electric, gas-fired or steam-heated variant is invented from an equipment name or another facility. Actual producer qualification remains a study obligation; source/method contradictions remain holds. Carrier blends, glass ampoules, on-site EO synthesis and clinical sterilization service are excluded. Complete actual EO, nitrogen, utility, article, asset and treatment production burdens remain included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.undiluted-ethylene-oxide-sterilant-can-filling |
| classification_refs | CPC 3.0 34666; narrower product and route boundary |
| covered_products | Whole nominally undiluted EO sterilant in crimp-sealed cans with evidenced filling, reclamation and on-site control interfaces |
| excluded_products | Industrial bulk-intermediate supply; EO/diluent blends; glass ampoules; clinical sterilization service; chemical synthesis; unqualified generic disposal or unmodeled abatement |
| representative_product | Actual single-use EO can, with source-specific nominal contents and measured net acceptance mass |
| production_route | Liquid receipt/transfer → fill/crimp → recovery and vapor control → weight/leak inspection → packing and acceptance |
| market_state | Ready-use sealed cartridge; whole liquid/vapor contents net of all packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the specified whole EO sterilant; no sterilized-device equivalence |
| How much | 1kg net whole contents at first acceptance |
| How well | Actual documented substance, assay basis, seal/weight release and qualified configuration; no efficacy or purity default |
| How long or cycle | One manufacture and first-acceptance event, with original-cohort later services distinguished |
| reference_flow_link | finished_eo |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole nominally undiluted EO and CAS75-21-8; actual supplier and assay convention; liquefied contents and measured impurities/headspace; single-use crimp-sealed can configuration; actual nitrogen and pneumatic transfer; actual on-site reclamation/control units and qualified linked-producer interfaces; complete upstream EO and utility burdens; fixed first-acceptance gate and unique cohort; raw/WIP/FG/reclamation and inherited histories; complete package/cylinder tare and returns; actual receivers and compatible provider units; site and period and original Q0 services; proposed narrower classification inference; distinct drive-air and respirator-air grades and purposes with measured state and complete actual producer/exhaust histories |

Every qualifier must be declared in the actual data package; missing qualifiers leave its reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| whole_mass | finished_eo | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted gross mass minus measured can/closure/cap/carton tare in the same configuration; retain whole contents including actual impurities and headspace components. Nominal fill is not a count-to-mass conversion. |
| composition_basis | bulk_eo; returned_eo; finished_eo | Actual analytical convention | % | Keep nominal100% separate from measured analytical fractions and their wet/dry or liquid/vapor bases. No pure-EO equivalent denominator, sum-of-known-impurities closure of unknowns, or default carrier mass. |
| gas_phase | nitrogen; oxygen_uptake; eo_air; co2_air; co_air; water_air; nitrogen_air | Actual state and composition | kg | Convert volume only with measured state/composition and compatible method; preserve raw standard/actual and dry/wet records. Gas rate integrates once; phase change is not a new chemical source. |
| electric_demand | electricity | Electrical energy | kWh | Retain actual metered electrical demand including preheat, ventilation and compressors. Heat recovery internal to the oxidizer is not another imported heat or an export credit. |
| provider_interface_state | abator_gas_transfer; reclamation_liquid_transfer | Distinct phase-specific volume and mass | m3; kg | Preserve actual whole gas-mixture volume and liquid-mixture mass separately with phase/composition/T/P/wet-dry/actual-standard basis; conversion to actual native provider units needs an evidenced compatible mapping, never a pure-EO or gas-density default. |
| air_supply_state | compressed_drive_air; respirator_breathing_air | Actual whole-air volume and state | m3 | Measure drive air and respirator breathing air separately, with actual/standard and dry/wet volume, T/P, humidity, composition, actual grade and paired provider reference conditions. No pressure/flow/grade/density default; integrate rates once and preserve physical totals separately from compatible provider demand. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received liquefied EO, nitrogen, articles and electric utility with complete real upstream burdens |
| starting_condition_role | Foreground physical start, not a burden-free cutoff |
| product_classification_scope | CPC3.0 34666; narrower; explicit inference |
| recursive_input_rule | Bulk EO is an actual input; returns/reclamation preserve original histories and do not earn new first acceptance |
| upstream_dataset_requirement | Compatible actual chemical/utility/article/asset/treatment providers and evidenced demand, without duplicate embedded histories |
| disclosure | Actual whole product, route/heat configuration, assay basis, provider units, stocks, full final outlets and cohort genealogy |

This method covers whole nominally undiluted ethylene oxide sterilant, CAS75-21-8, in single-use crimp-sealed cans. The source-defined physical route includes received liquefied EO, actual nitrogen-assisted transfer, pneumatic filling, crimp sealing, reclamation inventory, weight/leak inspection, protective-cap/carton packing and first acceptance. The actual on-site catalytic abator and reclamation units remain included physical operations. They may be genuinely separately modeled producers with qualified interfaces or explicitly expanded inventories, never a generic disposal substitution or burden-free cutoff. The Accra Pac investigation establishes its historical operations; current manufacturer label/SDS establish a finished commercial substance, not the identity of that contract plant or its present supplier. No electric, gas-fired or steam-heated variant is invented from an equipment name or another facility. Actual producer qualification remains a study obligation; source/method contradictions remain holds. Carrier blends, glass ampoules, on-site EO synthesis and clinical sterilization service are excluded. Complete actual EO, nitrogen, utility, article, asset and treatment production burdens remain included.

The bound Product is Ethylene Oxide / 环氧乙烷, with CAS75-21-8, a Mass reference and at-plant production-mix context. Its comment describes gas/liquid states and includes sterilization use; it declares no fixed purity, route or geography. Preserve native CPC35499 countermetadata. Admission is the actual complete carrier-free commercial sterilant on net contents mass, with documented supplier, chemical identity, assay convention and phase; packaging is a separate physical ledger. Neither a carrier-containing EO/CO2 mixture, another oxide, an elementary emission nor an empty cartridge can inherit this Product reference. Manufacturer label/SDS declarations of100% identify the nominally undiluted substance, not analytical purity exactly1, a zero-impurity result or a dose. Record actual EO, dissolved/headspace nitrogen, water and other constituents on their reported bases. A chemical identity UUID does not select a background provider or amount.

The proposed narrower CPC3.0 34666 relation is an explicit classification inference, not a current official ruling. Current CPC Introduction paragraphs50–51 and55 require HS terms/notes and the most specific applicable category. HS2022 Chapter 38 subheading Note 1 names oxirane/ethylene oxide for3808.52/.59 only when the goods first satisfy heading38.08 form, packing and function. Dedicated ready-use sterilant cans meet the evidenced form/function case; ordinary bulk industrial EO is excluded. Historical CPC2.1 explicitly links34666 to HS2007 3808.50, while disinfectants34664 link to3808.94. The current CPC3 notes/title pages do not supply a repaired correspondence: their hazardous-substance list is actually misplaced under34647 on page166, and34666 on page167 is title-only. Do not silently relocate that text or classify every hazardous chemical here. Root classification acceptance and mapping remain separate.

Fix first acceptance after completed filling, sealing, weight/leak quality release and the declared finished packing configuration. Independently sum unique accepted whole-contents net masses into Q and lock each original cohort. Gross dispatch, return, rework, retest and repeat release do not create a second event. Reconcile Q on the original acceptance basis against disjoint net externally retained delivery, every actual on-site accepted state, irreversible losses and other terminal dispositions. Returned-inspection and returned-rework stocks are states, not new output. Retain original accepted material lost by evaporation or leakage once and do not restore it into the surviving contents. Added material or contamination is a separate physical input; any genuinely new unaccepted addition needs distinct genealogy rather than counting the old parcel again. Old-cohort services use original Q0. Zero or unknown Q retains raw totals and an unresolved normalized result.

Maintain complete physical stocks and transfers for received liquid EO, supply-cylinder heels/headspace, delivery lines, filler holdup, reclamation tank, unaccepted cans, accepted finished goods, returns and all packaging/asset fleets. A reclamation-tank transfer is neither new procurement nor an automatic emission, sale or waste credit; trace its actual later disposition. Carry own inherited foreground/WIP burdens once into their released cohort and retain closing unaccepted WIP history with WIP. Provider aggregate inventories and expanded/embedded representations of the same upstream boundary are alternatives, not additive histories. Trace manufactured EO to its actual supplier and upstream route; the ACC direct ethylene-oxidation description is route context, not proof of a particular supplier footprint. An unspecified provider, utility origin or inherited amount remains unresolved rather than zero.

Keep can bodies, crimp closures, protective plastic caps and cartons as distinct actual articles, with measured tare, receipts, installation, delivery, return, scrap and closing stocks. Where actual purchased articles are printed or labeled, retain their embedded upstream burdens; do not add imaginary separate ink or resin purchases. Actual on-site printing/labelling needs its concrete additional material/energy interfaces before a study claims coverage. Delivered packaging is an explicit physical output distinct from net sterilant. EO and nitrogen supply cylinders retain their complete arriving/returning tare, serial genealogy and residual contents separately. A reused cylinder is not newly manufactured for every fill and its return is not a coproduct credit. For catalysts, inlet filters and filler seals, keep actual new receipts, unused/in-service/retired masses and physical removals, together with the service/burden history. Compatible provider demand may have a different unit from the physical fleet ledger. Convert only with measured dimensions/mass and documented compatible service histories; do not invent a lifetime, per-item mass or causal share.

Separate physical liquid transfer and evaporation from chemical reaction. Filling does not justify creating reaction water or conserving all EO through the oxidizer. The complete-oxidation identity C2H4O + (5/2)O2 → 2CO2 + 2H2O is an elemental check, not an assumed destruction efficiency, yield or emission factor. Measure actual EO inlet/outlet, CO2, CO, water phases, captured material and relevant other products; retain independent total mass and C/H/O balances, nitrogen stocks and phase changes. Maintain separate ledgers for actual oxygen uptake and ventilation carrier-air throughput. Preserve gross inlet/exhaust air, ambient CO2/humidity/inert constituents and actual nitrogen feed/stock/product/waste/outlet components in a physical ledger; do not invent emissions by counting unchanged ambient carrier gas again or assume nitrogen padding has zero mass. Preserve exothermic heat and actual preheat/fan/compressor and other source-qualified utility demand without imaginary heat export or duplicate imported heat.

For liquid-quality evidence retain actual supplier certificates, sampling phase, batch, method edition, raw results and uncertainty. GOST7568-2018 sections7.1–7.8 describe liquefied-EO sampling and specified impurity methods; its7.3 purity is100 minus a specified impurity sum, not direct proof that every unmeasured constituent is EO. Its water reference uses the full applicable Fischer method in GOST14870-77; loss on drying is not a selective EO-water method. Nitrogen padding and other noncondensables/additional impurities cannot silently disappear from the analytical basis. Use the source method only within its actual matrix/impurity scope; unknown additional species or an essential unestablished method keep the affected composition/balance unresolved. Manufacturer nominal100% and Andersen’s separate ampoule certificate statement supply no default purity for these cans. This PCR supplies environmental accounting, not a clinical release specification or operational filling recipe. Dissolved inert gas and any other actual constituent outside the specified impurity sum require separate complete composition evidence and a demonstrably applicable method; the by-difference result cannot close them as EO.

Vapor-phase EO, CO2, CO and water measurements use the complete applicable extractive FTIR procedure and Protocol/addendum in EPA Method320, with actual reference spectra, blanks, moisture/CO2 interference evaluation, dynamic spikes, recovery, transport losses, condensation, uncertainty and time coverage. EPA Method18 supplies a separate GC route only where its applicability and compound-specific identity/calibration, preservation and recovery conditions are met; it excludes compounds that polymerize before analysis. A hydrocarbon alarm calibrated for another propellant is not an EO concentration measurement, as the Accra Pac investigation demonstrates. Source method editions are not a claim of present legal approval. Actual/standard gas volume, wet/dry basis, temperature, pressure and composition must be compatible with concentration and flow; integrate a rate once and never add another time multiplier to an integrated volume. Workplace concentration alone is not a final emission load. Unknown method/matrix relations remain unresolved; a check pass never establishes them. Method320 covers IR-active vapor analytes with actual applicable spectra and spike/recovery qualification; it is neither a bulk-liquid EO assay nor a blanket nitrogen/oxygen method. Nitrogen, oxygen and any non-IR-active actual constituents need separately applicable composition/flow evidence.

A rejected filled can, spent seal, filter or catalyst cell exported as one contaminated object retains its full receiver mass Qt, including substrate, retained EO/liquor/solids and water once. Nested tare and contaminants are not additional external wastes unless physically separated before the boundary. Retain actual receiver, transferred quantity and compatible treatment provider once. Separate that physical event from compatible non-overlapping cohort service demands A; the cohort demands must sum to actual modeled provider demand, while original Q or Q0 remains the denominator. Do not make a shared10kg physical export into2.5kg after25% attribution or charge10kg again to every cohort. These are arithmetic counterexamples, not site quantities or allocation defaults. Unknown causal shares/provider-unit mappings remain unknown. Unexpected liquid clean-up, wastewater, combustion or extra emissions require explicit complete atomic interfaces before a study claims coverage; source accident water is not a routine operating coefficient.

For each actual on-site abator/reclamation unit retain the complete primary unit identity, physical location and boundary; measured liquid/gas transfers with phase, composition, temperature, pressure, wet/dry and actual/standard basis; raw/WIP/recovered stocks; and actual native provider reference property/unit. Keep its complete actual fuel, air/oxygen, water, utility, catalyst/filter, reaction, final species, heat input/output and waste inventories once. Source facts do not establish an available qualified provider dataset. If modeled through a genuinely qualified producer aggregate, use the measured compatible non-overlapping demand and do not add its embedded utility/emission/history inventory again. If expanded, retain every concrete actual input and output instead of adding a second aggregate. Unknown provider-unit conversion, actual heater/interface, inherited history or causal share remains unresolved. A gas-volume transfer is a physical mixture interface, not a generic disposal factor, product credit or an assumed mass of pure EO. Full same-site physical ledgers remain visible under either representation. The separate Elmhurst electric-treatment example is counter-context demonstrating a specific configuration, never proof of the heater in the Accra Pac filling unit. AccraPac Exhibit5 specifically includes the inlet filter, heat exchanger, catalyst beds, return duct and fan. Retain those complete actual components, maintenance/replacement and inherited histories, physical heat transfers and their real utility interfaces once under the selected representation. Diagram labels air, water and CO2 do not establish complete conversion, zero residual EO or an electric-only heat source.

The pneumatically driven EO pump and supplied-air respirator require two distinct whole-air Product inputs: compressed drive air and supplied respirator breathing air. Electricity or a compressor description does not replace either measured air quantity. Keep each actual supply grade and purpose, complete receipt/production, storage/header/hose holdup, use, leakage and exhaust ledgers with measured actual/standard and dry/wet volume, temperature, pressure, humidity, composition and time. Drive air cannot substitute for breathing air; no air-quality grade, pressure, flow or conditioning recipe is supplied here. Qualify the actual on-site or external air producer and compatible reference unit. Retain all real compression, conditioning, cooling, filter, oil, condensate, heat, utility, loss and asset/maintenance/inherited burdens once through either a genuinely qualified aggregate or the complete concrete expanded inventory. Do not invent an oil-free/oil-lubricated, electrical or other configuration, assume an available qualified dataset, or double-add embedded compressor electricity and conditioning history. Include every actual chemical, cooling, condensate, filter/oil waste and other interface under that qualified representation before a study claims complete coverage. Reconcile purpose-specific air exhaust with the full GasHouse/abator physical gas mixture and every actual other exit; do not assume all supplied air reaches the abator. Preserve gross introduced air and its nitrogen/oxygen/water components separately from actual resource-oxygen uptake and separately supplied nitrogen. Unchanged ambient carrier components are not duplicate elementary emissions or a second pure nitrogen/oxygen purchase. Actual component changes, gas/liquid transfers and other exits require evidence. Complete physical air totals remain distinct from compatible non-overlapping provider/cohort demand; raw demand enters the sole normalize operation once with original Q or Q0. Unknown essential state/grade/provider-unit or causal relations remain unresolved. Supply-to-device, device-exhaust and room-to-abator records are successive internal handoffs of the same physical air. Cancel those handoffs in consolidation instead of treating every stage as a new external receipt or outlet. Retain real stocks, leaks and other exits separately; differently conditioned volumes are not additive before an evidenced state conversion.

`epa-accrapac-2000`; `solventum-sds-2025`; `solventum-label-2026`; `nydec-electric-abator-2007`; `acc-eo-2023`; `gost-eo-2018`; `gost-water-1977`; `epa-method320-2019`; `epa-method18-2025`; `un-cpc3-intro`; `un-cpc3-notes`; `un-cpc21-2015`; `wco-hs38-2022`

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| can_fill_control | EO can filling, acceptance and included on-site vapor control | required | Complete Section5 admission | foreground | finished_eo |

### Process: EO can filling, acceptance and included on-site vapor control (`can_fill_control`)

#### Inputs

##### Product flows

###### Ethylene Oxide (`bulk_eo`)

Whole received undiluted liquid with actual supplier/assay and supply-cylinder residuals. The physical receipt is distinct from any inherited own material; no pure-equivalent conversion.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Ethylene Oxide (`returned_eo`)

Actual externally returned undiluted contents retain original acceptance/cohort history; tare is separate. Contaminated mixtures cannot use this Product identity.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cohort`
- Sources: `solventum-label-2026`; `epa-accrapac-2000`

###### Nitrogen for EO liquid transfer (`nitrogen`)

Measure actual supplied nitrogen and pressure/phase/composition; preserve cylinder/headspace/product/waste/emission stocks. It is not a sterilant carrier recipe.

- Selected flow: Nitrogen for EO liquid transfer
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Electricity (`electricity`)

Actual filling and other source-qualified electrical demand. Retain full on-site producer demand once; do not duplicate electricity already embedded in a qualified abator/reclamation aggregate.

- Selected flow: Electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `epa-accrapac-2000`; `nydec-electric-abator-2007`

###### EO cartridge can body (`can_body`)

Measure this actual whole article, supplier composition and tare; reconcile unused, installed, delivered, returned and scrapped articles. No assumed resin/metal grade or separate embedded printing purchase.

- Selected flow: EO cartridge can body
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-accrapac-2000`; `solventum-label-2026`

###### EO cartridge crimp closure (`crimp_closure`)

Measure this actual whole article, supplier composition and tare; reconcile unused, installed, delivered, returned and scrapped articles. No assumed resin/metal grade or separate embedded printing purchase.

- Selected flow: EO cartridge crimp closure
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-accrapac-2000`; `solventum-label-2026`

###### EO cartridge protective plastic cap (`protective_cap`)

Measure this actual whole article, supplier composition and tare; reconcile unused, installed, delivered, returned and scrapped articles. No assumed resin/metal grade or separate embedded printing purchase.

- Selected flow: EO cartridge protective plastic cap
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-accrapac-2000`; `solventum-label-2026`

###### EO cartridge shipping carton (`carton`)

Measure this actual whole article, supplier composition and tare; reconcile unused, installed, delivered, returned and scrapped articles. No assumed resin/metal grade or separate embedded printing purchase.

- Selected flow: EO cartridge shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-accrapac-2000`; `solventum-label-2026`

###### Reusable EO supply cylinder (`bulk_cylinder`)

Retain complete physical receipt/fleet/return or removal mass and actual article identity. Compatible attributed producer/service demand is separately evidenced; neither full replacement every batch nor an invented lifetime is allowed.

- Selected flow: Reusable EO supply cylinder
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `nydec-electric-abator-2007`; `acc-eo-2023`

###### EO catalytic oxidizer catalyst-cell assembly (`catalyst_cell`)

Retain complete physical receipt/fleet/return or removal mass and actual article identity. Compatible attributed producer/service demand is separately evidenced; neither full replacement every batch nor an invented lifetime is allowed.

- Selected flow: EO catalytic oxidizer catalyst-cell assembly
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `nydec-electric-abator-2007`; `acc-eo-2023`

###### EO oxidizer inlet-filter assembly (`inlet_filter`)

Retain complete physical receipt/fleet/return or removal mass and actual article identity. Compatible attributed producer/service demand is separately evidenced; neither full replacement every batch nor an invented lifetime is allowed.

- Selected flow: EO oxidizer inlet-filter assembly
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `nydec-electric-abator-2007`; `acc-eo-2023`

###### PTFE-encapsulated EO filler seal (`filler_seal`)

Retain complete physical receipt/fleet/return or removal mass and actual article identity. Compatible attributed producer/service demand is separately evidenced; neither full replacement every batch nor an invented lifetime is allowed.

- Selected flow: PTFE-encapsulated EO filler seal
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `nydec-electric-abator-2007`; `acc-eo-2023`

###### Reusable nitrogen supply cylinder (`nitrogen_cylinder`)

The actual nitrogen cylinder shown in the filling-system source is a distinct physical fleet. Keep complete receipt/tare/residual gas/stock/return genealogy and separate compatible supplier-service history; do not charge a new cylinder at every nitrogen draw.

- Selected flow: Reusable nitrogen supply cylinder
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Compressed air for pneumatic EO pump drive (`compressed_drive_air`)

Measure this distinct actual whole drive-air supply, actual grade, volume basis, state/composition and provider unit; retain full physical receipt/stock/use/exhaust and compatible producer histories once. kWh or nitrogen is not its quantity; trace the actual exhaust into GasHouse/abator or other real exits.

- Selected flow: Compressed air for pneumatic EO pump drive
- Flow property / unit: Volume / m3
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-accrapac-2000`

###### Supplied breathing air for EO filling operator respirator (`respirator_breathing_air`)

Measure this distinct actual whole respirator-air supply and documented purpose/grade, actual/standard wet/dry volume, T/P/humidity/composition and compatible provider demand; retain all physical stocks, losses, actual exhaust destinations and complete production/conditioning histories once. No drive-air substitution or quality/pressure/flow default.

- Selected flow: Supplied breathing air for EO filling operator respirator
- Flow property / unit: Volume / m3
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-accrapac-2000`

##### Elementary flows

###### Oxygen taken from atmosphere for EO oxidation (`oxygen_uptake`)

Determine actual net oxygen uptake with measured component and elemental balance; retain gross carrier-air records separately. No assumed complete conversion or standard air density.

- Selected flow: Oxygen taken from atmosphere for EO oxidation
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `epa-method320-2019`

#### Outputs

##### Product flows

###### Ethylene Oxide (`finished_eo`)

The sole reference output is1kg net whole accepted undiluted sterilant; packaging and pure-active-equivalent mass are excluded. Q is unique first acceptance, not gross dispatch.

- Selected flow: Ethylene Oxide `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cohort`
- Sources: `solventum-label-2026`; `solventum-sds-2025`; `epa-accrapac-2000`

###### Delivered EO cartridge can body (`delivered_can_body`)

Explicit actual delivered tare/stock transfer of this article; no second functional output, manufacturing credit or subtraction from net contents. Returns and late packing retain original cohort.

- Selected flow: Delivered EO cartridge can body
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `solventum-label-2026`; `epa-accrapac-2000`

###### Delivered EO cartridge crimp closure (`delivered_closure`)

Explicit actual delivered tare/stock transfer of this article; no second functional output, manufacturing credit or subtraction from net contents. Returns and late packing retain original cohort.

- Selected flow: Delivered EO cartridge crimp closure
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `solventum-label-2026`; `epa-accrapac-2000`

###### Delivered EO cartridge protective plastic cap (`delivered_cap`)

Explicit actual delivered tare/stock transfer of this article; no second functional output, manufacturing credit or subtraction from net contents. Returns and late packing retain original cohort.

- Selected flow: Delivered EO cartridge protective plastic cap
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `solventum-label-2026`; `epa-accrapac-2000`

###### Delivered EO cartridge shipping carton (`delivered_carton`)

Explicit actual delivered tare/stock transfer of this article; no second functional output, manufacturing credit or subtraction from net contents. Returns and late packing retain original cohort.

- Selected flow: Delivered EO cartridge shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `solventum-label-2026`; `epa-accrapac-2000`

###### Returned EO supply cylinder (`returned_cylinder`)

Keep full actual returned tare and serial/heel genealogy; residual EO is separately nested or a separate actual material transfer, never an automatic loss/credit.

- Selected flow: Returned EO supply cylinder
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### EO-contaminated ventilation gas to on-site catalytic abator (`abator_gas_transfer`)

Record measured whole gas-mixture transfer, actual state/composition and matched receiving unit; it is an internal included producer interface with no cofunction or disposal credit. Convert to producer demand only with actual compatible native units.

- Selected flow: EO-contaminated ventilation gas to on-site catalytic abator
- Flow property / unit: Volume / m3
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_interface`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Recovered liquid EO transfer to on-site reclamation tank (`reclamation_liquid_transfer`)

Retain the actual liquid-mixture mass, composition, inherited history and receiving stock; no automatic sale, new purchase, pure-EO identity or recycling credit is asserted. Actual later disposition must be traced.

- Selected flow: Recovered liquid EO transfer to on-site reclamation tank
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Returned nitrogen supply cylinder (`returned_nitrogen_cylinder`)

Keep actual complete returned tare/residual gas and ownership/serial history independently of nitrogen consumption and modeled service demand; no automatic manufacturing credit.

- Selected flow: Returned nitrogen supply cylinder
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

##### Waste flows

###### Rejected filled EO cartridges (`rejected_cans`)

Record the actual complete contaminated object and receiver quantity once, including retained contents/water. Nested substrate and contamination are not extra waste exports; preserve physical Qt and separate compatible cohort demands.

- Selected flow: Rejected filled EO cartridges
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Spent EO oxidizer catalyst-cell assembly (`spent_cell`)

Record the actual complete contaminated object and receiver quantity once, including retained contents/water. Nested substrate and contamination are not extra waste exports; preserve physical Qt and separate compatible cohort demands.

- Selected flow: Spent EO oxidizer catalyst-cell assembly
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Spent EO oxidizer inlet-filter assembly (`spent_filter`)

Record the actual complete contaminated object and receiver quantity once, including retained contents/water. Nested substrate and contamination are not extra waste exports; preserve physical Qt and separate compatible cohort demands.

- Selected flow: Spent EO oxidizer inlet-filter assembly
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

###### Spent EO filler seal (`spent_seal`)

Record the actual complete contaminated object and receiver quantity once, including retained contents/water. Nested substrate and contamination are not extra waste exports; preserve physical Qt and separate compatible cohort demands.

- Selected flow: Spent EO filler seal
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-accrapac-2000`; `acc-eo-2023`

##### Elementary flows

###### Ethylene oxide to air (`eo_air`)

Use actual compound-specific final outlet load and phase, time coverage and measured background/component corrections. Do not convert a hydrocarbon alarm or total VOC into this species, assume complete oxidation, or count unchanged ambient carrier again.

- Selected flow: Ethylene oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `solventum-sds-2025`; `epa-method320-2019`

###### Carbon dioxide to air (`co2_air`)

Use actual compound-specific final outlet load and phase, time coverage and measured background/component corrections. Do not convert a hydrocarbon alarm or total VOC into this species, assume complete oxidation, or count unchanged ambient carrier again.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `solventum-sds-2025`; `epa-method320-2019`

###### Carbon monoxide to air (`co_air`)

Use actual compound-specific final outlet load and phase, time coverage and measured background/component corrections. Do not convert a hydrocarbon alarm or total VOC into this species, assume complete oxidation, or count unchanged ambient carrier again.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `solventum-sds-2025`; `epa-method320-2019`

###### Water vapour to air (`water_air`)

Use actual compound-specific final outlet load and phase, time coverage and measured background/component corrections. Do not convert a hydrocarbon alarm or total VOC into this species, assume complete oxidation, or count unchanged ambient carrier again.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `solventum-sds-2025`; `epa-method320-2019`

###### Nitrogen to air from supplied nitrogen (`nitrogen_air`)

Use actual compound-specific final outlet load and phase, time coverage and measured background/component corrections. Do not convert a hydrocarbon alarm or total VOC into this species, assume complete oxidation, or count unchanged ambient carrier again.

- Selected flow: Nitrogen to air from supplied nitrogen
- Flow property / unit: Mass / kg
- Amount rule: Evidenced attributable amount per1kg reference flow; retain the separate complete physical ledger and actual compatible provider demand.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `epa-accrapac-2000`; `solventum-sds-2025`; `epa-method320-2019`

## 7. Allocation and Co-product Handling

No second functional product or recycling credit is created by reclamation, packaging, returned cylinders or waste. Preserve complete physical transfers independently of attributed burdens. Separate dedicated records first; shared services require documented causal measurements and compatible provider units. Cohort service vectors must be disjoint and exhaust actual provider demand; unknown shares remain unresolved. Keep unaccepted WIP burdens with WIP and later services with original Q0. Do not partition an actual contaminated-object export into imaginary component exports.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | can_fill_control | Material receipts/issues and raw/WIP stocks | foreground_record | supplier; batch; identity; assay method/basis; net/gross/tare; phase; opening/closing cylinder/line/filler/reclamation stocks; internal transfers; own inherited burden; provider boundary | Reconcile calibrated mass records and source-compatible chemical certificates with full stock genealogy; retain whole amounts and nested constituents, never duplicate a purchase. Aggregation conditions: actual complete physical amounts; attributable current/cohort burden once / positive independent Q | kg | Each receipt/issue and cutoff; every failed/reworked batch | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | weighing calibration; certificates/method editions; stock and provider boundary reconciliations |
| cp_cohort | can_fill_control | Reference acceptance and later cohort states | foreground_record | unique event; cohort; actual net contents; first release gate; acceptance time; gross dispatch/returns; net retained delivery; accepted on-site states; accepted-material loss; terminal disposition; original Q0; added material genealogy | Independently weigh and lock unique first acceptance after the declared configuration passes actual QA; reconcile the complete original-basis bridge without repeat release. Aggregation conditions: unique accepted whole net mass Q; disjoint original-basis bridge; old-cohort service / original positive Q0 | kg | Every acceptance/state change and cutoff | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | release and scale evidence; complete event/return/stock links; no nominal-count conversion |
| cp_pack | can_fill_control | Packaging inputs, deliveries and stocks | foreground_record | article ID; supplier composition; measured individual/batch tare; receipts; unused/installed/finished stock; delivered/returned/scrapped quantities; cohort; preprinted embedded boundary | Weigh distinct complete can bodies, closures, protective caps and cartons; reconcile each physical input/output and stock separately from net sterilant and inherited/provider burden. Aggregation conditions: full physical article bridge; compatible attributable article demand / positive original cohort Q | kg | Every batch/transfer and cutoff | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | tare calibration; article BOM; delivery/return/scrap documents; embedded printing non-overlap |
| cp_assets | can_fill_control | Supply cylinders, catalyst/filter/seal physical fleets and services | foreground_record | actual item/serial and mass/dimensions; opening/new/in-service/unused/retired/returned stocks; residual contents; ownership; service dates/loads; provider native unit; inherited foreground; disjoint cohort demand; unknown shares | Maintain complete physical fleet/tare separately from provider demand. Convert count/mass/service only through actual measured item data and compatible evidenced histories; retain unresolved mappings instead of a default life. Aggregation conditions: physical fleet bridge independent of disjoint attributable producer/service vector / original positive Q or Q0 | kg | Every acquisition/service/removal/return and cutoff | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | item weighing and BOM; provider-unit proof; full service history and unresolved-share disclosure |
| cp_utility | can_fill_control | Electrical production and service demand | foreground_record | meter boundaries/readings; compressor/breathing-air/fan/filler/preheat/control loads; startup/shutdown/idle/failure periods; shared causal driver; provider unit and origin; cohort/original Q0 | Read calibrated meters over the complete route and actual failed/idle operations, assign only supported disjoint demand and retain external generation burdens; verify complete actual source-defined producer interfaces before normalization. Aggregation conditions: attributable delivered kWh / positive original Q; old service / Q0; no duplicate compressor or imported heat | kWh | Each meter interval and complete campaign | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | meter calibration; configuration and energy-interface proof; real generation and causal allocation records |
| cp_gas | can_fill_control | Nitrogen, oxygen, phase/component stocks and final vapor loads | foreground_record | gas/phase and outlet ID; measured flow/time; actual/standard/dry/wet basis; T/P/composition; inlet/outlet/background; EO/CO2/CO/H2O; nitrogen feed/heels/headspace/product/waste; reference spectra; spikes/recovery; condensation; uncertainty; carbon origin | Use the complete applicable EPA320/Protocol procedure or qualified EPA18 alternative and actual state-compatible flow measurements; retain independent elemental/phase and carrier-air ledgers. An unqualified alarm, nominal purity or whole-room concentration is not a source load. Aggregation conditions: integrate compatible compound-specific concentration times flow once; component/oxygen balances; disjoint attributable load / original positive Q | kg | Continuous/representative complete event coverage including startup/failure and stocks | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | full spectra/chromatograms/calibration/spikes and recovery; sampling/flow state; limits and unassigned species disclosed |
| cp_waste | can_fill_control | Complete contaminated-object receiver transfers and cohort treatment demand | foreground_record | event/receiver; full Qt; nested substrate/EO/liquor/solids/water; actual separate components; holding stocks; treatment identity/unit; actual provider demand; disjoint A by original cohort; original Q/Q0; unknown causal shares | Weigh the actual whole transferred object and verify receiver/treatment records once. Preserve full raw physical transfer separately from compatible modeled service demands; nested components are not extra exports or added treatment demands. Aggregation conditions: full physical Qt once; sum disjoint compatible cohort A equals actual provider demand; normalize each A by original positive Q or Q0 | kg | Every waste creation/holding/transfer and cutoff | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | receiver scales/manifests; component balance; provider-unit compatibility and non-overlap proof |
| cp_interface | can_fill_control | Included on-site gas-producer interface | foreground_record | source and receiving unit IDs; complete primary unit boundary; whole gas volume/time; phase/T/P/composition/wet-dry/actual-standard basis; EO mass nested; actual provider reference unit; compatible demand; aggregate/expanded non-overlap; inherited stock history | Measure and reconcile the actual source-defined whole mixture at both ends; preserve raw volume and component ledgers. Qualify a real same-site producer including its full fuel/air/O2/water/utility/species/heat/waste inventory once; no generic disposal or available qualified dataset is assumed. Aggregation conditions: whole physical source-gas volume once; compatible non-overlapping actual provider demand / original positive Q or Q0 | m3 | Every transfer interval including startup/abnormal operations | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | paired meters/state/spectra and component records; complete qualified provider body/reference-unit proof; non-overlap and full physical history |
| cp_air | can_fill_control | Separate compressed drive-air and supplied respirator-air records | foreground_record | air stream/purpose and actual quality-grade evidence; producer/site/boundary; meter and interval; complete gross supplied/used/leaked volumes; actual/standard and wet/dry bases; T/P/humidity/composition; header/hose/storage stocks; exhaust/GasHouse/abator/other exits; provider native unit and conversion; actual compression/conditioning/cooling/filter/oil/condensate/heat/loss inventories; inherited and disjoint cohort demand | Read calibrated purpose-specific air meters and actual supplier/producer records over complete startup, normal, idle, failure and shutdown periods. Reconcile each physical air ledger with actual state-compatible receiver/exhaust records; qualify complete real air-production and conditioning burdens once. Maintain raw quantities and compatible provider-demand vectors separately, without double charging embedded compressor electricity or invented grade/route conversions. Aggregation conditions: separate whole physical air balances; convert only to actual compatible producer units; disjoint raw cohort demand enters normalize once using original Q or Q0 | m3 | Each distinct air-meter interval and transfer, including failed/idle periods and cutoffs | Complete declared campaign plus all opening/closing and inherited histories | Actual filling/control site and linked external producer/receiver interfaces | per 1 kg reference flow | purpose/grade certificates; calibrated meters and actual gas-state/composition evidence; paired supply/exhaust/stock records; complete actual provider inventories/reference units and inherited non-overlap |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance | finished_eo | Q is the independent sum of unique first-accepted net whole-content masses. Lock original cohorts; no gross-loop or nominal-can-count substitution. | cp_cohort | Q | solventum-label-2026 |
| postgate | finished_eo; returned_eo | Reconcile Q to disjoint original-basis retained external delivery, all on-site accepted states, irreversible loss and terminal disposition. Track additions separately. | cp_cohort; cp_material | original_cohort_bridge | epa-accrapac-2000 |
| normalize | all inventory rows | Divide only the evidenced attributable exchange/service amount by the same independent positive Q; old-cohort later service uses original positive Q0. Preserve complete raw physical totals separately; unknown basis or causal share remains unresolved. | cp_material; cp_cohort; cp_pack; cp_assets; cp_utility; cp_gas; cp_waste; cp_interface; cp_air | per_reference_inventory | epa-accrapac-2000 |
| package_bridge | can_body; crimp_closure; protective_cap; carton; delivered_can_body; delivered_closure; delivered_cap; delivered_carton | For each physical article reconcile opening plus actual receipts and returns against closing stocks, installed/delivered transfers and actual scrap once; net contents exclude all tare. | cp_pack; cp_cohort | article_bridge | solventum-label-2026 |
| asset_history | bulk_cylinder; returned_cylinder; nitrogen_cylinder; returned_nitrogen_cylinder; catalyst_cell; inlet_filter; filler_seal | Reconcile the full physical fleet and residual contents independently of compatible disjoint provider/service demands. No invented item mass/lifetime and no new manufacturing at every use. | cp_assets; cp_cohort | fleet_and_service_vectors | acc-eo-2023 |
| gas_load | nitrogen; oxygen_uptake; eo_air; co2_air; co_air; water_air; nitrogen_air | Integrate actual compatible concentration and flow once; retain gas-state and background corrections, phase stocks and elemental balances. Complete oxidation is a reaction check, not an assumed conversion/factor. | cp_gas; cp_material | qualified_component_load | epa-method320-2019 |
| whole_waste | rejected_cans; spent_cell; spent_filter; spent_seal | Full receiver Qt is one physical event; nested components add no exports. Sum compatible non-overlapping cohort treatment demands to actual provider demand, with each demand using original Q/Q0. | cp_waste; cp_assets; cp_cohort | whole_transfer_and_attributed_treatment | epa-accrapac-2000 |
| air_supply_balance | compressed_drive_air; respirator_breathing_air | For each purpose reconcile complete raw air supply, storage/header/hose changes, actual use, leaks and all final exhaust/other exits on compatible measured state and composition. Use and exhaust are successive internal handoffs that cancel on consolidation, not additional external sinks. Volumes at different conditions are not additive without an evidenced state conversion. Integrate a measured rate once; do not multiply an integrated volume by time. Preserve separate raw gross volume and compatible producer demand; only evidenced disjoint cohort demand is passed to normalize once. Qualified aggregate versus expanded producer utility/conditioning/waste histories are alternatives. Track actual air exhaust into the GasHouse/abator mixture and other real exits, without counting unchanged carrier nitrogen/oxygen/water as additional elementary emissions. | cp_air; cp_cohort; cp_utility; cp_gas; cp_interface; cp_waste; cp_assets | raw_air_balances_and_provider_vectors | epa-accrapac-2000 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | finished_eo; bulk_eo | Admit the actual complete undiluted substance and documented assay/phase/provider; no carrier-mixture or component proxy and no analytical purity1 from nominal label. | Full native body, supplier label/SDS/certificate, complete applicable method context |
| route | all inventory rows | Evidence full actual on-site/upstream units and source-defined phase/composition/utility interfaces; source cases are distinct and no default heater or efficacy is inferred. | Equipment/utility records and complete primary source context |
| cohorts | all inventory rows | Independent Q, complete postgate bridge and original Q0 later service with all physical and inherited stocks preserved. | cp_cohort; cp_material; cp_assets |
| analysis | eo_air; co2_air; co_air; water_air; oxygen_uptake | Actual full method/matrix qualification, species identity, recovery, state/time compatibility and uncertainty; no alarm or total-VOC substitution. | cp_gas; epa-method320-2019; epa-method18-2025 |
| waste | rejected_cans; spent_cell; spent_filter; spent_seal | One actual whole transfer, compatible receiver/provider unit, disjoint treatment vectors; unknown shares remain unknown. | cp_waste; cp_assets |
| context | all inventory rows | Preserve complete bilingual normative conditions, exact names, source types/references/uses and all literal/typed protocol fields; scientific/study qualification remains separate. | Complete Markdown and current generated projection with source spans |
| air_supply | compressed_drive_air; respirator_breathing_air | Demonstrate two distinct actual whole-air supplies and their grades/purposes, complete measured state-specific physical ledgers, actual exhaust destinations and compatible full producer burdens once; kWh records cannot replace air quantities. Unknown air-grade/provider-unit or essential measurement relations remain unresolved. | cp_air; cp_utility; cp_gas; cp_interface; cp_assets; cp_waste |

## 9. Validation Rules

Reject any study that lacks the whole native/product/supplier/grade admission or uses a carrier mixture with the EO UUID; nominal100% cannot establish analytical purity or overwrite a hard native field.

Fix first acceptance after completed filling, sealing, weight/leak quality release and the declared finished packing configuration. Independently sum unique accepted whole-contents net masses into Q and lock each original cohort. Gross dispatch, return, rework, retest and repeat release do not create a second event. Reconcile Q on the original acceptance basis against disjoint net externally retained delivery, every actual on-site accepted state, irreversible losses and other terminal dispositions. Returned-inspection and returned-rework stocks are states, not new output. Retain original accepted material lost by evaporation or leakage once and do not restore it into the surviving contents. Added material or contamination is a separate physical input; any genuinely new unaccepted addition needs distinct genealogy rather than counting the old parcel again. Old-cohort services use original Q0. Zero or unknown Q retains raw totals and an unresolved normalized result.

Keep can bodies, crimp closures, protective plastic caps and cartons as distinct actual articles, with measured tare, receipts, installation, delivery, return, scrap and closing stocks. Where actual purchased articles are printed or labeled, retain their embedded upstream burdens; do not add imaginary separate ink or resin purchases. Actual on-site printing/labelling needs its concrete additional material/energy interfaces before a study claims coverage. Delivered packaging is an explicit physical output distinct from net sterilant. EO and nitrogen supply cylinders retain their complete arriving/returning tare, serial genealogy and residual contents separately. A reused cylinder is not newly manufactured for every fill and its return is not a coproduct credit. For catalysts, inlet filters and filler seals, keep actual new receipts, unused/in-service/retired masses and physical removals, together with the service/burden history. Compatible provider demand may have a different unit from the physical fleet ledger. Convert only with measured dimensions/mass and documented compatible service histories; do not invent a lifetime, per-item mass or causal share.

Separate physical liquid transfer and evaporation from chemical reaction. Filling does not justify creating reaction water or conserving all EO through the oxidizer. The complete-oxidation identity C2H4O + (5/2)O2 → 2CO2 + 2H2O is an elemental check, not an assumed destruction efficiency, yield or emission factor. Measure actual EO inlet/outlet, CO2, CO, water phases, captured material and relevant other products; retain independent total mass and C/H/O balances, nitrogen stocks and phase changes. Maintain separate ledgers for actual oxygen uptake and ventilation carrier-air throughput. Preserve gross inlet/exhaust air, ambient CO2/humidity/inert constituents and actual nitrogen feed/stock/product/waste/outlet components in a physical ledger; do not invent emissions by counting unchanged ambient carrier gas again or assume nitrogen padding has zero mass. Preserve exothermic heat and actual preheat/fan/compressor and other source-qualified utility demand without imaginary heat export or duplicate imported heat.

Vapor-phase EO, CO2, CO and water measurements use the complete applicable extractive FTIR procedure and Protocol/addendum in EPA Method320, with actual reference spectra, blanks, moisture/CO2 interference evaluation, dynamic spikes, recovery, transport losses, condensation, uncertainty and time coverage. EPA Method18 supplies a separate GC route only where its applicability and compound-specific identity/calibration, preservation and recovery conditions are met; it excludes compounds that polymerize before analysis. A hydrocarbon alarm calibrated for another propellant is not an EO concentration measurement, as the Accra Pac investigation demonstrates. Source method editions are not a claim of present legal approval. Actual/standard gas volume, wet/dry basis, temperature, pressure and composition must be compatible with concentration and flow; integrate a rate once and never add another time multiplier to an integrated volume. Workplace concentration alone is not a final emission load. Unknown method/matrix relations remain unresolved; a check pass never establishes them. Method320 covers IR-active vapor analytes with actual applicable spectra and spike/recovery qualification; it is neither a bulk-liquid EO assay nor a blanket nitrogen/oxygen method. Nitrogen, oxygen and any non-IR-active actual constituents need separately applicable composition/flow evidence.

A rejected filled can, spent seal, filter or catalyst cell exported as one contaminated object retains its full receiver mass Qt, including substrate, retained EO/liquor/solids and water once. Nested tare and contaminants are not additional external wastes unless physically separated before the boundary. Retain actual receiver, transferred quantity and compatible treatment provider once. Separate that physical event from compatible non-overlapping cohort service demands A; the cohort demands must sum to actual modeled provider demand, while original Q or Q0 remains the denominator. Do not make a shared10kg physical export into2.5kg after25% attribution or charge10kg again to every cohort. These are arithmetic counterexamples, not site quantities or allocation defaults. Unknown causal shares/provider-unit mappings remain unknown. Unexpected liquid clean-up, wastewater, combustion or extra emissions require explicit complete atomic interfaces before a study claims coverage; source accident water is not a routine operating coefficient.

The pneumatically driven EO pump and supplied-air respirator require two distinct whole-air Product inputs: compressed drive air and supplied respirator breathing air. Electricity or a compressor description does not replace either measured air quantity. Keep each actual supply grade and purpose, complete receipt/production, storage/header/hose holdup, use, leakage and exhaust ledgers with measured actual/standard and dry/wet volume, temperature, pressure, humidity, composition and time. Drive air cannot substitute for breathing air; no air-quality grade, pressure, flow or conditioning recipe is supplied here. Qualify the actual on-site or external air producer and compatible reference unit. Retain all real compression, conditioning, cooling, filter, oil, condensate, heat, utility, loss and asset/maintenance/inherited burdens once through either a genuinely qualified aggregate or the complete concrete expanded inventory. Do not invent an oil-free/oil-lubricated, electrical or other configuration, assume an available qualified dataset, or double-add embedded compressor electricity and conditioning history. Include every actual chemical, cooling, condensate, filter/oil waste and other interface under that qualified representation before a study claims complete coverage. Reconcile purpose-specific air exhaust with the full GasHouse/abator physical gas mixture and every actual other exit; do not assume all supplied air reaches the abator. Preserve gross introduced air and its nitrogen/oxygen/water components separately from actual resource-oxygen uptake and separately supplied nitrogen. Unchanged ambient carrier components are not duplicate elementary emissions or a second pure nitrogen/oxygen purchase. Actual component changes, gas/liquid transfers and other exits require evidence. Complete physical air totals remain distinct from compatible non-overlapping provider/cohort demand; raw demand enters the sole normalize operation once with original Q or Q0. Unknown essential state/grade/provider-unit or causal relations remain unresolved. Supply-to-device, device-exhaust and room-to-abator records are successive internal handoffs of the same physical air. Cancel those handoffs in consolidation instead of treating every stage as a new external receipt or outlet. Retain real stocks, leaks and other exits separately; differently conditioned volumes are not additive before an evidenced state conversion.

Require all atomic flows and full physical/interface/provider histories before declaring a study complete. Unknown essential methods, unknown causal shares and unknown provider-unit mappings remain unresolved; neither finite check success nor source registration grants scientific approval.

`epa-accrapac-2000`; `solventum-sds-2025`; `solventum-label-2026`; `nydec-electric-abator-2007`; `acc-eo-2023`; `gost-eo-2018`; `gost-water-1977`; `epa-method320-2019`; `epa-method18-2025`; `un-cpc3-intro`; `un-cpc3-notes`; `un-cpc21-2015`; `wco-hs38-2022`

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | The admitted whole EO can-filling route with complete declared site/cohort/provider interfaces |
| excluded_use | Clinical efficacy/cycle guidance, legal permission, chemical synthesis, carrier blends, glass ampoules and unqualified heater/control variants |
| required_metadata | whole nominally undiluted EO and CAS75-21-8; actual supplier and assay convention; liquefied contents and measured impurities/headspace; single-use crimp-sealed can configuration; actual nitrogen and pneumatic transfer; actual on-site reclamation/control units and qualified linked-producer interfaces; complete upstream EO and utility burdens; fixed first-acceptance gate and unique cohort; raw/WIP/FG/reclamation and inherited histories; complete package/cylinder tare and returns; actual receivers and compatible provider units; site and period and original Q0 services; proposed narrower classification inference; distinct drive-air and respirator-air grades and purposes with measured state and complete actual producer/exhaust histories |
| required_quality_disclosure | Actual sources/editions/limits, supplier assay and matrix proof, physical stocks, independent Q/Q0, full waste/packaging and provider units, unknowns and separate classification/scientific/study states |
| update_trigger | Changed whole formulation, supplier grade/route, package, reference gate, heater/control configuration, methods or previously unresolved causal/provider relation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-accrapac-2000 | official_guidance | US EPA550-R-00-001, September2000, Accra Pac investigation; https://archive.epa.gov/emergencies/docs/chem/web/pdf/accrapac.pdf | Actual1997 filling/recovery/can-reject/control route, complete figures and failure counterevidence; no source operating numbers as defaults. Separate actual pneumatic drive-air and supplied respirator breathing-air inputs and full gas-mixture/exhaust boundary. |
| solventum-sds-2025 | handbook | Solventum10-3495-8, Singapore v8.00, 3June2025; https://cdmsweb.3m.com/ingredientcommunication/file/Media/Gda_PMsUtv8 | Whole nominally undiluted substance/CAS/liquefied state and conditional decomposition; not analytical purity1 or a current supply permission. |
| solventum-label-2026 | official_guidance | Manufacturer submitted label104667-1, 19May2026 with EPA2June2026 letter; https://www3.epa.gov/pesticides/chem_search/ppls/104667-00001-20260602.pdf | Real finished single-use cartridge identity, nominal contents, plastic cap and packing; no clinical cycle/performance or global legal claim. |
| nydec-electric-abator-2007 | official_guidance | NYDEC Elmhurst permit review, 10July2007, equipment description; https://extapps.dec.ny.gov/data/dar/afs/permits/prr_263010006500002_r1_0.pdf | Independent actual electric-abatement counter-context; never a heater default for the filling case. |
| acc-eo-2023 | handbook | ACC Ethylene Oxide Product Stewardship Guidance Manual2023; https://www.americanchemistry.com/content/download/12874/file/Ethylene-Oxide-Product-Stewardship-Manual-%282023%29.pdf | Actual upstream direct-oxidation route context, EO reactions, gas solubility, inventories and vent/effluent boundaries; no default factors or operating recipe. |
| gost-eo-2018 | standard | GOST7568-2018, 2019official edition, third-party full mirror; https://meganorm.ru/Data2/1/4293729/4293729137.pdf | Liquefied EO sampling and bounded impurity/quality analytical conventions; by-difference purity limitations. |
| gost-water-1977 | standard | GOST14870-77, 2005edition; https://meganorm.ru/Data2/1/4294836/4294836879.pdf | Full Fischer water method referenced by EO standard, including applicability and blank/calibration; no drying-loss substitution. |
| epa-method320-2019 | standard | EPA Method320 and complete Protocol/addendum, 14January2019 publisher PDF; https://www.epa.gov/sites/default/files/2019-06/documents/method_320.pdf | Compound-specific vapor analysis with full conditioning/interference/spike/uncertainty context; not automatic matrix qualification. |
| epa-method18-2025 | standard | EPA Method18, 1April2025 publisher PDF; https://www.epa.gov/system/files/documents/2025-04/m-18-04012025_0.pdf | Conditional source-gas GC alternative, full method exclusions and recovery; not a workplace-to-stack conversion. |
| un-cpc3-intro | official_guidance | UNSD CPC Version3.0 Introduction, paragraphs50–51/55; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Introduction.pdf | Current HS-based interpretation principles, not a repaired leaf ruling. |
| un-cpc3-notes | official_guidance | UNSD CPC3.0 Explanatory Notes30June2025, pages166–167; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact frozen title and misplaced-list anomaly; no silent reassignment. |
| un-cpc21-2015 | official_guidance | UNSD CPC Version2.1, historical HS2007 relation, printed285; https://unstats.un.org/unsd/classifications/unsdclassifications/cpcv21.pdf | Historical explicit34666/3808.50 context distinguished from current inference. |
| wco-hs38-2022 | standard | WCO HS2022 Chapter38, heading38.08 and note1; https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/0638_2022e.pdf | Actual supplied form/function and named oxirane exception; not all bulk EO or all dangerous chemicals. |
