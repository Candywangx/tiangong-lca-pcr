---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anthraquinone-hydrogen-peroxide-solution
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Anthraquinone-process hydrogen peroxide aqueous solution

## 1. Scope and Applicability

This PCR addresses industrial aqueous hydrogen peroxide manufactured by the alkylanthraquinone autoxidation (AO) cycle, from reagent/utility receipt through purification, any required concentration or dilution, storage and bulk dispatch. The executable reference is a nominal 30% by-mass aqueous grade. The category identity concerns the manufacturing route and aqueous peroxide, rather than the customer use or classification label. Other concentrations require verified concentration-specific reference identities and matching quantities before using this implementation; they do not automatically justify a new PCR. [jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure]

Exclude phosphides, carbides, hydrides, nitrides, azides, silicides, borides, organic peroxides, direct hydrogen/oxygen synthesis, electrochemical manufacture, formulated cleaning/disinfection blends and downstream peroxide use. Pharmaceutical/electronic/propellant certification is outside the ordinary industrial-grade implementation. The BREF is a 2017 EU large-volume continuous-production reference; its legal capacity scope, historic cases, plant-specific data, operating settings and BAT applicability conditions are not universal recipes, emission factors, yields, purities or energy defaults. This PCR contains inventory and measurement requirements, not synthesis or operating instructions.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.anthraquinone-hydrogen-peroxide-solution |
| classification_refs | CPC 3.0:34280; narrower proposed scope relation, not an accepted mapping |
| covered_products | AO-route industrial hydrogen peroxide in water; selected nominal 30 wt-% bulk grade |
| excluded_products | Other CPC34280 compounds and excluded routes/blends in section 1 |
| representative_product | Hydrogen peroxide (30%) |
| production_route | Cyclic carrier hydrogenation and oxidation; water extraction; purification; actual concentration/dilution and stabilisation; dispatch |
| market_state | Aqueous industrial bulk solution, measured at producer dispatch gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specified industrial peroxide reagent as aqueous solution |
| How much | 1 kg accepted complete aqueous solution |
| How well | Nominal 30% H2O2 by mass; actual assay, impurity/stabiliser profile and purchaser acceptance specification disclosed |
| How long or cycle | One declared production and dispatch reporting period, including relevant start-up/shutdown and replacement cycles |
| reference_flow_link | peroxide_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | AO route; site/period; SKU and nominal grade; actual H2O2 mass fraction w; declared additives/impurities fraction a; complete solution mass excluding tare; purchaser acceptance/tolerance; upstream reagent and utility providers; working-liquid components and gas composition; treatment/receiving compartments; bulk delivery boundary |

Declare all required qualifiers in dataset metadata or equivalent process/product records. This is a declared mass reference, not a universal comparison of bleaching/disinfection performance. The solution includes active peroxide, carrier water and any verified additives; a concentration figure does not specify quality or manufacturing energy. The selected flow declares a primary Mass coefficient of 1.0 and a 30% aqueous identity; this coefficient is not an assay or a provider-process quantity convention. Confirm the actual lot CoA, weight-percent convention and net weighing record. For every linked supplier or consumer interface, document whether the native process exchange is kg complete solution or kg active H2O2. An active-only amount equals the sum of actual lot solution masses times their measured peroxide fractions; it cannot be linked as the same numerical quantity of whole solution. A generic peroxide flow without concentration cannot prove a 30% whole-solution interface, and a 50% textile-mill supply retains its concentration, location and receiving interface. Customer use examples do not restrict this reference to textile bleaching. [evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_solution | peroxide_product | Mass | kg | Define Q as the sum of measured net masses of accepted complete solution lots produced over the matched period, counting each accepted lot once. Reconcile production, dispatches, opening/closing finished-product stocks, rejection and rework; exclude purchased same-category material from new synthesis and avoid counting reworked lots twice. Every inventory row uses per 1 kg reference flow. Active mass A = sum(lot solution mass × lot w); carrier water W = sum(lot mass × (1 − w − a)). Verify non-overlapping measured fractions and their mass closure. A and W are composition accounts, not additional reference-product outputs. |
| mu_solution_inputs | aqueous chemical inputs | Mass | kg | Record full supplied solution and its measured assay separately; convert active-only supplier data only with declared concentration, water and background boundary. Do not add carrier water twice. |
| mu_circulation | working solution and catalyst | Mass | kg | Keep opening/closing component stocks, receipts, external recovered returns, exports, degradation, internal circulation and measured losses separately. Internal recovery does not create a negative external input or eliminate actual losses. |
| mu_gases | gas exchanges | Mass / Volume | kg / m3 | Gas volume needs stated T, absolute P, humidity, composition and compressibility plus provider reference conditions; derive mass from measured or supplier-verified conditions. No database secondary coefficient is assumed to be density. |
| mu_energy | electricity_in; steam_in | Net calorific value / Mass | MJ / kg | Electricity: measured kWh × 3.6 = MJ in the verified energy unit group; the native NCV label does not describe combustion of electricity. Steam kg, state enthalpy and provider heat reference remain separate. Derive ordinary-water enthalpies from measured absolute P, T and phase/dryness with a traceable IAPWS-IF97 implementation inside its validity domain. Saturation P/T alone does not establish wet-steam dryness. Account for every condensate/vent/drain/export and energy stock change; agree the heat-control boundary and losses. Neither NCV nor GCV in a native energy property proves net delivered steam heat. [iapws-if97-2012] |
| mu_emissions | air/water species | Mass | kg | Integrate species concentration × compatible gas/liquid flow × duration across matched periods. FID mg C is not kg of any specific solvent without speciation and an explicit carbon-to-species conversion. COD/TOC are treatment indicators, not automatically species emissions; avoid duplicate total/component loads. |
| mu_input_attribution | product inputs | Mass / Volume / Energy | row unit | Use the named protocol to reconcile physical receipts, store and in-use stocks, stage issues and unused returns before deriving the matched-period input numerator. Record actual service-life attribution for catalyst, adsorbent, filter, reusable container and maintenance supplies separately from full physical quantities and from co-product burden allocation. Do not divide an unadjusted purchase invoice by Q. [jrc-ilcd-general-guide-2010] |
| mu_species_balance | p_ao | Mass | kg | Maintain whole-phase mass and each molecular species ledger separately. Species can form or be consumed; H2O2 is not conserved through synthesis or decomposition. Reconcile conserved elemental C/H/N/O and other actual elements from verified molecular formulas and measured mixture fractions. Account for H2, O2, N2, carrier water, dissolved gas, steam/condensate, net reaction-formed or consumed water and all physical fates. No default yield, excess-air fraction, peroxide destruction fraction or decomposition rate is supplied. [jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010] |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received hydrogen, declared working-liquid make-up components, catalysts, water and utilities with upstream production evidence |
| starting_condition_role | foreground_start |
| product_classification_scope | AO peroxide subset of CPC34280; not all chemicals under the leaf |
| recursive_input_rule | Purchased peroxide or externally processed same-category solution needs a verified upstream dataset; never model its manufacture as zero or count it again as new synthesis |
| upstream_dataset_requirement | Compatible route, grade, concentration/reference quantity, geography/year, utility state and waste treatment for every supplied/received exchange |
| disclosure | Actual process graph, control volumes, supplier boundaries, internal reuse, effluent destination, recovery, exclusions and missing identity/quantity links |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_ao | p_ao | Include the actual hydrogenation/oxidation/extraction loop, working-solution drying/reversion, catalyst recovery, purification, any concentration/dilution and stabilisation, storage/dispatch, cooling and emission control. Stage meters and physical transfers must remain available even with the combined foreground unit. | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |
| sb_utilities | p_ao | Purchased water, compressed air and steam link to upstream supply; site generation requires separate real inputs and emissions. This implementation assumes externally supplied steam and no on-site combustion. A combustion route needs a separately evidenced utility module, each fuel and every relevant elementary emission before dataset completion. | jrc-lvoc-hydrogen-peroxide-2017 |
| sb_destination | p_ao | Separate external waste transfers from direct emissions after included treatment. Record phase separation, recovered organic phases, water reuse and actual residual discharge. Extend the treatment unit with its own atomic reagents, energy, sludge and emissions when treatment is on site; do not hide it inside a removal-efficiency assumption. | jrc-lvoc-hydrogen-peroxide-2017 |
| sb_actual_recipe | p_ao | The listed quinone, solvent and treatment-agent alternatives are conditional accounting examples, not a prescribed working-liquid formulation. Before completeness, add one atomic row for each actual stabiliser, additional carrier/solvent, catalyst support supply, cooling chemical, cleaning chemical, packaging component, waste and emitted species not represented here. Verify their physical identities and amount bases. Bulk dispatch excludes container tare from product mass; packaging and transport are added if inside the declared boundary. | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_ao | Integrated AO peroxide solution manufacture and bulk dispatch | required | Verified AO route and selected 30% aqueous grade | foreground | peroxide_product |

Physical graph: reagent receipt → hydrogenation → oxidation → water extraction → purification → actual concentration/dilution and stabilisation → storage/dispatch. The extracted organic working phase returns through drying/reversion to hydrogenation; catalyst capture returns catalyst internally where applicable. Condensers/adsorbers recover solvent and condensate; external losses and treatment transfers remain visible. Keep each internal link at the same quantity at its sending and receiving ends. These stages are metered within p_ao so intermediate and finished peroxide do not create two reference-UUID product outputs.

For each stage, retain the measured whole working-liquid phase and its component composition as linked physical records. Record each actual added anthraquinone, hydroquinone make-up, solvent and stabiliser as its own atomic exchange; a working-liquid total is not one pure ingredient or an undocumented background recipe. Follow individual recovered organic fractions, aqueous fractions, interfacial rag, purge, degradation products and residues to internal reuse, stock, external recovery, waste or actual receiving compartment. A purchased formulated catalyst or genuinely supplied mixture retains its whole supplied identity and component assay; component accounting must not duplicate its upstream acquisition. Internal recovered material is a transfer, while actual external recovered supply or sale requires a distinct qualified exchange and provider/receiver boundary.

Process air and reagent hydrogen are whole supplied carriers with measured humidity and impurities; do not equate their quantities to dry O2 or pure H2 species. Decompose them only in the physical component ledger and, where appropriate, elementary resource/emission rows, without duplicating the purchased carrier background. Dissolved gas in working liquid and product, aerosol water, condensate stocks and returned water remain in the same-period mass/element accounts. Actual CO2, CH4 and other carbon-containing releases retain species and fossil/biogenic producer origin even when a chosen impact method does not characterize them. Add an atomic exchange for each actual container/packaging material, cleaning/passivation chemical, maintenance consumable and purchased service within the declared boundary, using its real quantity unit and service log; packaging tare, catalyst kg and service-hours are different quantities. [jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010]

### Process: Integrated AO manufacture (`p_ao`)

#### Inputs

##### Product flows

###### Hydrogen gas (`hydrogen_in`)

Purchased reagent hydrogen: retain actual producer, purity, impurities, moisture and supply route; recycled or dissolved hydrogen is tracked internally. A coal-based methanol-to-ethylene product identity is eligible as an input supplier only when the actual producer and that hard route are documented, with a matching kg-H2 or whole-gas convention, gas state and upstream boundary. It is not this peroxide output reference or a generic hydrogen substitution. No producer route is chosen merely because a native record exists.

- Selected flow: Hydrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Compressed air (`air_in`)

Only purchased compressed process air. Measure supplier-compatible pressure, temperature, humidity and volume basis; include supplier compression once. On-site compressed ambient air instead uses resource rows and site compressor electricity.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Purchased gaseous oxygen (`oxygen_in`)

Only actual oxygen or oxygen-enrichment supply. Record purity and gas reference conditions; do not use an elementary resource as a purchased product.

- Selected flow: Purchased gaseous oxygen
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### nitrogen (`nitrogen_in`)

Only documented gaseous N2 tank blanketing or inert-gas supply. The selected broad product identity confirms nitrogen and a kg reference, while its native record leaves CAS, phase, purity and producer route unspecified. Verify actual gaseous state and supplier composition before linking a background. A bottling-line-specific identity cannot be substituted without that actual receiving interface.

- Selected flow: nitrogen `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Deionised water (`water_in`)

Delivered deionised extraction, dilution or cleaning water from the selected ion-exchange or reverse-osmosis pure-water supply; meter uses separately. A distillation-only provider is not proved by this hard route even though the general comment mentions distillation. Count water retained in the delivered solution and water leaving as condensate or effluent separately in the physical ledger.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Process Water (`water_cooling`)

Only delivered treated process water for cooling make-up or other documented utility use. Record quality and treatment; do not also count its upstream natural-water extraction inside this foreground.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Alternating current (`electricity_in`)

Only the native CN 1–35 kV grid-average consumption mix delivered to the user. A different geography, voltage or dedicated supply requires its own compatible identity and provider; this row does not establish a global mix. Meter compressors, circulation, separation, purification and treatment by stage; provider geography/year and actual voltage must match.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Purchased process steam (`steam_in`)

Meter delivered steam mass and condensate returns with pressure, gauge/absolute convention, temperature and phase/quality. Separately calculate net delivered heat using supplier-compatible enthalpy boundaries. No pressure-specific or MJ-only identity is assumed.

- Selected flow: Purchased process steam
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### 2-Ethylanthraquinone (`quinone_in`)

Only this measured carrier when actually used. Other alkylanthraquinones require their own rows; record gross circulation, replenishment, stock change and degradation independently.

- Selected flow: 2-Ethylanthraquinone
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Xylene (`xylene_in`)

Only actual mixed-isomer xylene solvent; record isomer composition, impurities, fossil/biogenic provenance and supplier. This row is net external supplied material, not the mass circulating each cycle.

- Selected flow: Xylene `55dcefce-e5b7-492d-9f02-5bd5a70c94a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Tris(2-ethylhexyl) phosphate (`phosphate_in`)

Only this actual polar solvent. Tributyl phosphate and bis(2-ethylhexyl) phosphoric acid are different substances and cannot replace it.

- Selected flow: Tris(2-ethylhexyl) phosphate
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Supported palladium hydrogenation catalyst (`catalyst_in`)

Actual formulated catalyst, including its measured carrier and palladium loading; do not report catalyst mass as pure palladium. Separate fresh purchases, external regenerated returns and internal recovery.

- Selected flow: Supported palladium hydrogenation catalyst
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Activated alumina reversion agent (`alumina_in`)

Only actual solid reversion agent. Ordinary alumina with uncertain activation or contradictory CAS is not accepted. Other reversion agents need separate identities.

- Selected flow: Activated alumina reversion agent
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Aqueous sodium hydroxide solution (`caustic_in`)

Only documented alkaline reversion, cleaning or treatment. Weigh complete supplied solution and assay NaOH; dry 95–98% caustic is not this solution.

- Selected flow: Aqueous sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Aqueous nitric acid solution (`nitric_in`)

Only documented nitric-acid use. Record actual solution concentration and purpose; neither the 40% candidate nor general commercial concentrations supply a default.

- Selected flow: Aqueous nitric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Activated carbon (`carbon_in`)

Only actual activated-carbon adsorbent, with feedstock, grade and wet/dry basis. Record bed replacement over service life and regeneration separately; the broad identity does not select a carbon feedstock or capacity.

- Selected flow: Activated carbon `5cad53b5-252a-4e2f-8197-8be465707405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Industrial cation-exchange purification resin (`resin_cation_in`)

Only actual cation resin; declare polymer, functional group, ionic form and moisture. A therapeutic resin description does not verify industrial purification identity.

- Selected flow: Industrial cation-exchange purification resin
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Industrial anion-exchange purification resin (`resin_anion_in`)

Only actual anion resin; retain polymer, ionic form and particle grade. A 50-micrometre chromatography record is not a generic industrial resin.

- Selected flow: Industrial anion-exchange purification resin
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Glass-fibre filter cartridge with polypropylene core (`filter_in`)

Only this actual consumable cartridge design. Weigh the complete cartridge and verify bill of materials; stainless-steel-core designs need a distinct row. No replacement frequency is prescribed.

- Selected flow: Glass-fibre filter cartridge with polypropylene core
- Flow property / unit: Mass / kg
- Amount rule: Matched-period input quantity from the named protocol after stock reconciliation and any documented service-life attribution, divided by Q kg accepted complete solution; retain full physical external quantities separately. An absent conditional input requires evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### Elementary flows

###### ground water (`water_ground`)

Only direct groundwater abstraction within the foreground, for the declared well, location and period; keep withdrawal, return and consumption separate.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### river water (`water_river`)

Only direct river-water abstraction within the foreground. Do not duplicate groundwater or upstream water already represented by a purchased water dataset.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### oxygen (`oxygen_resource`)

Only oxygen in ambient air taken into an on-site compressor; measure intake composition. Do not also count the same oxygen as purchased compressed air or purchased oxygen.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### dinitrogen (`nitrogen_resource`)

Only dinitrogen in ambient air taken into an on-site compressor, with actual intake composition; purchased process air has its own upstream resource inventory.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


#### Outputs

##### Product flows

###### Hydrogen peroxide (30%) (`peroxide_product`)

Accepted nominal 30% aqueous solution at the dispatch gate. The measured complete solution includes water and actual declared additives, excludes tanker/container tare, and is not pure H2O2 mass.

- Selected flow: Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### Waste flows

###### AO process wastewater containing working-solution organics (`wastewater_out`)

Only wastewater exported to external treatment, including actual phase, water content and peroxide/organic load; do not label untreated wastewater as a direct freshwater emission.

- Selected flow: AO process wastewater containing working-solution organics
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Caustic tar from working-solution reversion (`tar_out`)

Only actual separated alkaline organic residue; determine water, solvent, degraded quinone and inorganic contents and receiver. It is neither kraft black liquor nor a recovered saleable solvent.

- Selected flow: Caustic tar from working-solution reversion
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Spent activated alumina reversion agent (`alumina_out`)

Actual spent agent with retained solvent and quinone, measured as complete wet material; retain receiver acceptance and metal/mineral composition. Cement use is not automatically a co-product credit.

- Selected flow: Spent activated alumina reversion agent
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Spent supported palladium hydrogenation catalyst (`catalyst_out`)

External catalyst regeneration/recovery transfer, including measured support and contamination; track metal recovery and returned catalyst separately, without an assumed recovery yield.

- Selected flow: Spent supported palladium hydrogenation catalyst
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### spent activated carbon (`carbon_out`)

Actual exported spent activated carbon, with adsorbed solvent, water, feedstock and receiver treatment; internal steam-regenerated carbon is not an external waste.

- Selected flow: spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Spent industrial cation-exchange resin (`resin_cation_out`)

Actual exported spent cation resin; declare ionic form, moisture, peroxide and organic contamination and receiver. Do not assume general non-hazardous waste.

- Selected flow: Spent industrial cation-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Spent industrial anion-exchange resin (`resin_anion_out`)

Actual exported spent anion resin; keep it separate from spent cation resin with its own composition, wet/dry basis and receiver acceptance.

- Selected flow: Spent industrial anion-exchange resin
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Spent glass-fibre filter cartridge with polypropylene core (`filter_out`)

Only the used matching cartridge, with entrained catalyst/working solution and receiving treatment; filter residue alone is not the complete cartridge.

- Selected flow: Spent glass-fibre filter cartridge with polypropylene core
- Flow property / unit: Mass / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


##### Elementary flows

###### hydrogen (`hydrogen_air`)

Measured hydrogen vented across the outdoor-air boundary; distinguish purge from internal recycle, and track all relevant operating events.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### hydrogen peroxide (`peroxide_air`)

Actual H2O2 air release from storage, handling or process vents, measured as H2O2 species mass, not solution aerosol total mass; keep contained spills in the waste/water ledger.

- Selected flow: hydrogen peroxide `4d9a8790-3ddd-11dd-9237-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### xylene (all isomers) (`xylene_air`)

Only measured xylene isomers actually present in the solvent; sum isomers once, without also adding a total-xylene or total-VOC duplicate.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### tris(2-ethylhexyl)phosphate (`phosphate_air`)

Only measured tris(2-ethylhexyl)phosphate emitted to outdoor air when this solvent is used. A low vapour pressure is not proof of zero loss.

- Selected flow: tris(2-ethylhexyl)phosphate `fe0acd60-3ddc-11dd-a05d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### methane (fossil) (`methane_air`)

Only fossil methane impurity actually reaching outdoor air from the hydrogen source; confirm source origin and speciation. Biogenic methane, if present, requires its own flow and remains in LCI.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### dinitrogen (`nitrogen_air`)

Actual outdoor dinitrogen vented with process air or documented blanketing; keep physical nitrogen balance even when its impact characterization is absent.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### oxygen (`oxygen_air`)

Actual O2 reaching immediate outdoor unspecified air, measured in kg species by the matched gas-flow/composition record. Distinguish excess feed oxygen, dissolved oxygen stock change and oxygen formed by actual peroxide decomposition; no default destruction fraction or source-derived excess-air ratio applies. Reconcile the same-period O2 numerator with Q accepted whole product and laboratory timestamps. Do not use a resource, soil, water or long-term emission identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### water vapour (`water_evap`)

Actual evaporation across the outdoor-air boundary from cooling and other included water uses; internal evaporator condensate recovery is not an atmospheric release.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### Water (`water_return`)

Actual H2O returned directly to a freshwater body in the native m3 reference, with location and temperature. Convert measured water-species kg using traceable state-compatible water density; a whole contaminated effluent mass or volume is not automatically the same H2O quantity. Keep separately measured contaminant species in their own receiving-compartment rows, and exported wastewater in the waste ledger; retain the paired physical bulk discharge and composition record without duplicating water.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### hydrogen peroxide (`peroxide_water`)

Actual residual H2O2 reaching freshwater after included treatment, measured as species mass. Treatment destruction of peroxide is not a positive peroxide release.

- Selected flow: hydrogen peroxide `08a91e70-3ddc-11dd-94a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### xylene (all isomers) (`xylene_water`)

Only residual xylene isomers reaching freshwater after treatment; do not assign the untreated export load as a direct environmental release.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad96-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


###### tris(2-ethylhexyl)phosphate (`phosphate_water`)

Only residual tris(2-ethylhexyl)phosphate reaching freshwater after treatment when used; do not substitute tributyl phosphate or phosphorus-equivalent mass.

- Selected flow: tris(2-ethylhexyl)phosphate `fe0acd60-3ddc-11dd-a061-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured external row quantity over the declared period divided by Q kg accepted complete solution; document absent conditional flows with evidence, not an assumed zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvoc-hydrogen-peroxide-2017`; `evonik-hydrogen-peroxide-brochure`


## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| al_physical | p_ao | Retain unallocated physical material, water, hydrogen/oxygen and solvent-component balances independently of allocated environmental burdens. Internal recycle is not a saleable co-product. Never multiply measured physical outputs by an allocation share. | jrc-lvoc-hydrogen-peroxide-2017 |
| al_shared | p_ao | Use measured stage/campaign consumption and subdivision to avoid allocation of shared utility and treatment burdens where possible. Any remaining allocation must follow the declared study goal and modelling framework, demonstrate determining physical causality where available, document other justified criteria when it is unavailable, measured shares summing to one and sensitivity. A generic mass, sales-price or stoichiometric share is not supplied by this PCR. Physical amounts remain unallocated. | jrc-ilcd-general-guide-2010 |
| al_recovery | p_ao | A saleable recovered solvent, catalyst metal or exported useful heat needs measured quality, receiver demand and a compatible treatment boundary. Resolve multifunctionality under the declared goal and modelling framework, with subdivision first where applicable; allocation and system expansion are not free interchangeable choices. Demonstrate actual substitution and uncertainty when system expansion is justified. Do not combine a recovered-material credit with a second avoided-treatment credit for the same operation. Waste destinations alone establish no credit. | jrc-ilcd-general-guide-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | p_ao | peroxide_product | batch dispatch and laboratory acceptance | lot_id; gross/tare/net solution mass; w; additive/impurity fraction a; SKU; acceptance specification; opening/closing product stocks; timestamp | Calibrated mass meter/weighbridge and lot-specific validated peroxide assay; independently measure declared additives and impurities. Reconcile production, dispatch, rework and stock change. | kg; mass fraction | Each lot and reporting-period stock count | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_materials | p_ao | material inputs | receipts, stage issues and stock/component balance | row_id; CAS/formula/grade; producer and route; whole supplied mass; assay/moisture; fresh/recovered origin; store and in-use opening/closing stocks; unused exports/returns; stage issues; degradation; replacement dates; actual service totals and reporting-period share; upstream convention | Weigh receipts and stage issues with calibrated instruments and actual supplier CoA. Reconcile store opening + receipts + unused returns = store closing + stage issues + unused exports, retaining documented other transfers. Keep in-use charges and physical loss/transformation balances separately. Attribute short-lived consumed inputs to the matched production period; for catalyst/adsorbent/filter charges serving several periods, document the actual usage/service relationship and allocate the charge across its evidenced service totals, with all period shares summing to one. An uncompleted service life remains an explicit estimate with evidence and sensitivity. Do not alter full physical receipts/stocks/emissions by these attribution shares, or confuse them with co-product burden allocation. | kg; mass fraction | Each receipt/issue and replacement; period stock count | Matched production period; actual service coverage disclosed | Same producer control volume; supplier interfaces retained | per 1 kg reference flow | Calibrations; actual CoA; stock and service logs; uncertainty; jrc-ilcd-general-guide-2010 |
| cp_gases | p_ao | gas inputs and air resources | gas meters and composition measurements | row_id; source; T; absolute P; humidity; composition; compressibility; supplier reference conditions; volume/mass; stage; period | Calibrated matched-basis gas metering with actual composition and supplier conditions; ambient-air intake O2/N2 resources use the same intake record, while purchased gas uses its own provider dataset. | kg; m3; gas state | Continuous totals plus representative composition samples | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_energy | p_ao | electricity_in; steam_in | submeters, steam state and supplier boundary | stage; electricity kWh; steam kg; absolute/gauge P and atmospheric reference; T; phase/dryness; each condensate/vent/drain/export; stocks; enthalpy source/version/region; provider gross/net heat convention; losses; shaft work; kinetic/potential terms; timestamps | Use calibrated electricity, steam and all outlet meters with matched timestamps. Verify ordinary-water state enthalpy through IAPWS-IF97 or traceable supplier state-property measurement; wet steam needs actual dryness. Close the declared energy balance including non-return condensate, stocks, losses and work before linking provider heat. A generic MJ, GCV/NCV label or steam pressure alone is insufficient; keep any unclosed heat interface incomplete. | kWh; MJ; kg; kJ/kg | Continuous metering and each state change | Same matched production period | Declared utility control volume and provider boundary | per 1 kg reference flow | iapws-if97-2012; original meters and provider evidence |
| cp_water | p_ao | water exchanges | water control volumes | source/destination; volume/mass; temperature/density evidence; extraction/dilution/cooling/cleaning use; internal recirculation; evaporation; solution-retained water; stocks; period | Calibrated intake/return/use meters and traceable density for mass-volume conversion; calculate evaporation only from a closed measured water balance with uncertainty and distinguish blowdown from vapour. | kg; m3 | Continuous totals and stock reconciliation | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_waste | p_ao | waste outputs | transfer and receiving acceptance | row_id; wet mass; dry fraction; solvent/peroxide/metal composition; receiver; treatment/recovery route; shipment; paired regenerated return; timestamp | Weigh and characterize each separate external waste shipment; verify receiver acceptance, actual treatment and regeneration records. Do not combine resin types or catalyst and residue masses. | kg; mass fraction | Each transfer and regeneration cycle | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_air | p_ao | air emissions | channelled and fugitive species monitoring | outlet/species; concentration; mass or carbon basis; gas flow and T/P/wet-dry basis; duration; adsorption cycle; start-up/shutdown; fugitive survey; origin; uncertainty | Representative species analysis and compatible gas-flow measurements integrated over full adsorption/regeneration and operating cycles; FID total carbon is a screening record until separately speciated. Retain measurements below detection with method/limits, not fabricated zeros. | kg; species concentration; m3; time | Continuous or representative sampled full cycles, plus event/fugitive records | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_effluent | p_ao | freshwater species outputs | final discharge and treatment performance | outlet; receiving body; final flow; species concentrations; peroxide destruction; separate COD/TOC/TSS; organic phase recovery; treatment inputs/residues; sample dates | Flow-weighted final-discharge sampling with species-specific validated analysis and actual treatment measurements; untreated export data stays in the external waste transfer record. | kg; species concentration; m3 | Flow-weighted sampling across the complete period and process events | Same declared period including relevant operating and replacement cycles | Same producer control volume; supplier/receiver boundaries stated | per 1 kg reference flow | Calibrations; original records; method QA; timestamps; balance residual and uncertainty; actual specification |
| cp_balance | p_ao | molecular species and conserved elements | linked whole-phase and component accounts | stage/link; whole wet phase mass; species/CAS/formula; assays; dissolved gases; stocks; formation/consumption; net formed/consumed water; recovered organic/aqueous/rag fractions; purge; actual receiver; carbon origin; timestamps | Match physical sending/receiving quantities, representative gas/liquid/solid assays and stock counts by stage and period. Retain measured or evidence-based reaction extents and uncertainties; unresolved speciation is an explicit residual, never an invented balancing exchange. Link oxygen laboratory results to the gas numerator and accepted whole-product Q of the same period. | kg; species mol; elemental kg | Matched period, sampling cycles and events | Same production and stock period | Same physical producer boundary and actual receiving fates | per 1 kg reference flow | Actual lab methods, formulas/CoA, stock/transfer records; jrc-lvoc-hydrogen-peroxide-2017; jrc-ilcd-general-guide-2010 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalise | all inventory rows | inventory amount = matched-period protocol numerator / Q; Q is the accepted complete solution mass in kg from cp_product. Inputs use protocol stock/service attribution where applicable, while external output/resource quantities retain the matched physical boundary. Reference product output = 1 kg. Use row numerator units unchanged and retain the unallocated physical ledger. | cp_product; row collection protocol | row unit per 1 kg reference flow | jrc-ilcd-general-guide-2010; evonik-hydrogen-peroxide-brochure |
| calc_composition | peroxide_product | A = sum(m_lot × w_lot); W = sum(m_lot × (1 − w_lot − a_lot)); additives/impurities = sum(m_lot × a_lot). Check their sum against complete solution mass before allocation. Concentration-weighted active-normalised supplementary burdens use A, explicitly separated from the mandatory Q-based inventory. | cp_product | separate active/water/additive physical accounts | evonik-hydrogen-peroxide-brochure |
| calc_component_balance | quinone_in; xylene_in; phosphate_in; catalyst_in | opening component stock + external receipts + actual formation = closing component stock + external transfers + measured emissions + measured conversion/destruction; internal transfers cancel at the aggregated boundary. Record gross circulation separately. Replenishment alone is not total solvent emissions. | cp_materials; cp_waste; cp_air; cp_effluent | component residual and documented uncertainty | jrc-lvoc-hydrogen-peroxide-2017 |
| calc_energy | electricity_in; steam_in | Electrical energy (MJ) = measured kWh × 3.6. Only for a mass-matched indirect circuit with no stock change, other outlets or work, delivered heat (MJ) = sum(m × (h_steam − h_condensate)) / 1000 minus measured boundary heat loss, with kg and kJ/kg. Otherwise close the full measured energy balance with all inlet/outlet enthalpy, energy stocks, work and relevant kinetic/potential terms before deriving heat. Actual wet-steam enthalpy = (1 − dryness) × saturated-liquid enthalpy + dryness × saturated-vapour enthalpy at the measured saturation state. No fixed steam-to-MJ factor or GCV/NCV equivalence is provided. | cp_energy | separate electricity MJ, steam kg and verified delivered heat MJ | iapws-if97-2012; jrc-lvoc-hydrogen-peroxide-2017 |
| calc_emission | air and freshwater outputs | Species mass = sum(compatible species concentration × matched flow volume × period duration), with explicit dimensional conversion. Reconcile point sources, fugitive sources and treatment residuals without duplicating captured/reused material or total-C indicators. | cp_air; cp_effluent | kg per species and receiving compartment | jrc-lvoc-hydrogen-peroxide-2017 |
| calc_species_elements | p_ao | For species i: opening + external input + actual formation = closing + external output + actual consumption; internal transfers cancel. For a conserved element e: opening elemental mass + external elemental input = closing elemental mass + external elemental output, using verified formula fractions and measured mixture composition. Total physical mass has no reaction generation/destruction term. Track peroxide synthesis, degradation, decomposition and net water formation/consumption explicitly; stoichiometry describes an evidenced reaction extent, never an assumed plant yield or destruction fraction. | cp_balance; cp_product; cp_materials; cp_gases; cp_water; cp_waste; cp_air; cp_effluent | separate molecular, elemental and whole-mass residuals with uncertainty | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure; jrc-ilcd-general-guide-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify name, CAS where relevant, full qualifiers, route, reference property and provider quantity separately. Blank UUID means pending identity; a successful search does not establish background dataset compatibility. | actual direct record and supplier metadata |
| dq_mass | p_ao | Reconcile solution composition, water, H/O and each actual solvent/carrier component; retain unexplained residual with uncertainty and investigated causes, not a balancing fabricated exchange. | cp_product; cp_materials; cp_gases; cp_water |
| dq_completeness | p_ao | A conditional row may be absent only with actual route evidence. Missing stabiliser, treatment reagent/sludge, other working-liquid species or event emissions requires atomic extensions and blocks a complete dataset. | actual recipe/CoA, process graph and monitoring coverage |
| dq_time | all inventory rows | Match production, utilities, material replacement, waste and emission records; document period/service-life attribution, analytical detection limits, missing data and uncertainty. No historic BREF amount is a gap-filling default. | original collected records and uncertainty report |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| val_reference | peroxide_product | Require exactly one linked reference-product output, full solution mass, nominal 30% grade and actual assay/acceptance. Active-only mass or unverified route/grade identity fails applicability. | evonik-hydrogen-peroxide-brochure |
| val_denominator | all inventory rows | Require positive Q and per 1 kg reference flow in inventory, protocol aggregation and bilingual rules. Any supplemental per-active-kg result must disclose A and is not the mandatory reference inventory. | evonik-hydrogen-peroxide-brochure |
| val_balance | p_ao | Check unallocated physical balances and same-quantity internal transfers before burden allocation; retain losses, water retained in solution, degradation and actual emissions. Do not assume theoretical stoichiometry is measured yield. | jrc-lvoc-hydrogen-peroxide-2017 |
| val_species | p_ao | Check elementary species, origin, medium/submedium and mass definition. Outdoor unspecified air identities are not indoor or long-term flows; freshwater discharge is not water extraction. Retain biogenic CO2/CH4 if present with separate origin-specific rows regardless of a chosen GHG reporting convention. Do not combine nested particulate fractions or total/component emissions. | jrc-lvoc-hydrogen-peroxide-2017 |
| val_readiness | all inventory rows | Unresolved identity, provider quantity, recipe, steam enthalpy or treatment/monitoring coverage is explicit incompleteness for the affected dataset. This authored method does not establish scientific approval or approve substituting incompatible UUIDs. | jrc-lvoc-hydrogen-peroxide-2017; evonik-hydrogen-peroxide-brochure |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Verified industrial AO peroxide solution supply at declared producer gate |
| allowed_use | Same route, concentration/solution quantity and stated grade when all required qualifiers and missing links are resolved |
| excluded_use | Other CPC34280 compounds, excluded manufacturing routes, active-only or concentration-incompatible backgrounds, and unproved specialty certifications |
| required_metadata | AO process graph; site/year; supplier route; actual assay/additives; full-solution reference; physical and allocated accounts; treatment/receiving media; all protocol IDs |
| required_quality_disclosure | Actual measurement methods, representativeness, detection limits, missing identities and provider compatibility, balance residuals, allocation and uncertainty |
| update_trigger | Changed working-liquid composition, peroxide grade, route, supplier utility basis, recovery/treatment, emission evidence or production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvoc-hydrogen-peroxide-2017 | official_guidance | European Commission JRC109279, LVOC BREF (2017), DOI 10.2760/77304. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf | Sections 12.2, 12.3.1–12.3.6 and 13.11; printed pp.549–564 and 627–628 (PDF586–601 and664–665): AO boundaries, actual solvent/catalyst options, water/air/waste and heat-recovery measurement needs. Scope/application limitations retained; historical values, operating parameters, BAT-AELs and single-site values are not inventory defaults. |
| evonik-hydrogen-peroxide-brochure | handbook | Evonik, Hydrogen Peroxide – Leadership through innovation, undated acquired brochure. https://products.evonik.com/assets/95/41/Evonik_Hydrogen_Peroxide_Brochure_EN_Asset_2439541.pdf | PDF pp.14–19,21: producer AO process, aqueous solution versus pure species, grades/concentration and dispatch state. Manufacturer-specific grade claims are not universal acceptance specifications; salt-free solution property tables do not establish actual density or energy. |
| jrc-ilcd-general-guide-2010 | official_guidance | European Commission JRC48157, EUR24708EN, DOI 10.2788/38479, ILCD Handbook: General guide for Life Cycle Assessment – Detailed guidance, first edition (2010). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Sections 7.4.2.5–7.4.2.11 (printed pp.197–214, PDF217–234) and 7.9.1–7.9.3 (printed pp.254–265, PDF274–285): stock/composition and operation-cycle records, matched raw-data/reference scaling, quality checks, goal-dependent multifunctionality, subdivision, physical causality and service attribution. Supports accounting methods, not this producer's recipe, measured quantities or scientific approval. |
| iapws-if97-2012 | official_guidance | IAPWS R7-97(2012), Revised Release on the IAPWS Industrial Formulation 1997 for the Thermodynamic Properties of Water and Steam. https://iapws.org/technical-guidance/release/IF97-Rev.download | Sections 1–3, 5–8 and 12 (PDF pp.3–35,46–48): ordinary-water state enthalpy, liquid/vapour/saturation regions, reference convention and uncertainty. Use only valid measured states and dryness with a verified implementation; does not establish actual steam conditions, supplier heat convention or a universal kg-to-MJ factor. |
