---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.mechanical-wood-pulp-semi-chemical-wood-pulp
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Peroxide-bleached softwood CTMP, flash-dried market pulp

## 1. Scope and Applicability

This category covers virgin softwood sodium-sulphite chemithermomechanical pulp (CTMP), with pressurised disc refining, washing and screening, downstream alkaline hydrogen-peroxide bleaching, flash drying and baled market delivery. Declare species, impregnation chemistry, bleach sequence, brightness, freeness, shives and final moisture. It is a production unit; equal pulp mass does not establish equal papermaking performance. [jrc-pulp-paper-bref-2015, §§5.1.5–5.1.7; rottneros-ctmp-route-2023, p.23.]

Exclude SGW/PGW groundwood, unimpregnated RMP/TMP, alkaline-peroxide chip-pretreatment APMP, atmospheric CMP, NSSC with partial digestion/recovery, hardwood and non-wood pulp, kraft/sulphite chemical pulp, dissolving pulp, recovered fibre, unbleached or slush-only sale, and downstream papermaking. The reference record’s broad CTMP identity is used only within this physical subset; its APMP synonym is not scope permission. Commercial evidence confirms heated chemical pretreatment, disc refining and dried/baled CTMP; a historical bleach-plant case corroborates washing/bleaching but supplies no transferable recipe or percentage improvement. [rottneros-ctmp-route-2023; valmet-ctmp-bleach-2016.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.mechanical-wood-pulp-semi-chemical-wood-pulp |
| classification_refs | CPC 3.0 32113; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Peroxide-bleached sodium-sulphite softwood CTMP, flash-dried bales |
| excluded_products | Groundwood; TMP; APMP; CMP; NSSC; hardwood/non-wood/recycled/chemical/dissolving pulp; paper |
| representative_product | Specified bleached softwood CTMP bale at mill gate |
| production_route | Delivered chips → impregnation → pressurised refining → washing/screening and reject refining → peroxide bleaching → flash drying → baling |
| market_state | Dried baled market pulp; actual dry fraction and packaging declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide specified CTMP papermaking fibre at mill gate |
| How much | 1 kg oven-dry accepted pulp solids, excluding packaging |
| How well | Declared species, CTMP/peroxide route, brightness, freeness and shive acceptance; no universal quality threshold |
| How long or cycle | One accepted production and delivery cycle; no downstream service life assigned |
| reference_flow_link | pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Chemi-mech pulp `f5ac1d57-f7e5-464b-9dd2-0d05eb7c1d4d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Wood species/origin; Na2SO3 pretreatment; pressurised refiner; downstream H2O2 bleaching and chemical forms; brightness/freeness/shives; flash dryer heating route; final dry matter/lot method; oven-dry reference and supplier/background mass convention; packaging tare; matched cohort and stock change; water source/receiver; wastewater route; energy supply/heat recovery and enthalpy boundaries; allocation and uncertainty; geography/time |

Required qualifiers must appear in dataset metadata or equivalent process/reference notes. The UUID proves the CTMP product identity only. Its Mass/kg property does not prove oven-dry, air-dry, saleable or wet mass. Establish quantity/background compatibility independently before completing links. BREF ADt means 90% dry solids: 1 ADt corresponds to 900 kg dry pulp by that reporting convention; do not impose 90% on measured bales. ISO 638-1 scope covers solid-sample dry matter under its volatility limitation and excludes slush/saleable-lot mass; ISO 4119 covers stock concentration, not saleable slush mass. Record the actual lot sampling method and do not claim full standard conformance from a public scope page. [jrc-pulp-paper-bref-2015, Glossary; iso638-dry-matter-scope; iso4119-stock-scope.]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| dry_reference | reference product | Mass | kg | 1 kg accepted oven-dry pulp solids; measure net bale mass and representative dry fraction with cp_reference. Packaging and retained water are separate. |
| suspension_basis | cp_water; cp_reference | Mass | kg | Keep fibre-stock consistency, total dry matter and dissolved solids distinct. Pair stock mass/flow with representative concentration; validate sensors against gravimetric samples. No fixed consistency. [iso4119-stock-scope; iso638-dry-matter-scope.] |
| chemical_basis | cp_chem | Mass | kg | Delivered formulation, active species, carrier water and supplier reference basis remain distinct; hydration and concentration are measured. Match hard grade restrictions of each selected identity before use. |
| heat_basis | steam | Gross calorific value | MJ | Retain supplier-reference quantity and a separate measured net enthalpy account; GCV/MJ alone proves no net-delivery convention. Unknown conversion remains pending. cp_heat is mandatory. |
| volume_basis | chips | Volume | m3 | Measure supplier-compatible chip solid/bulk volume and packing with cp_chips. Reconcile measured wet/dry mass; no generic density or inferred secondary mass coefficient. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Clean delivered softwood chips at receiving gate; utilities and chemicals at their declared supply interfaces |
| starting_condition_role | Upstream/background handover, not burden-free wood or heat |
| product_classification_scope | CPC 3.0 32113; narrower CTMP subset |
| recursive_input_rule | Purchased same-category pulp is not fresh chips; retain upstream production and separately declare blending/reprocessing. It is outside this virgin-chip route unless a reviewed extension establishes the mixture. |
| upstream_dataset_requirement | Match forestry/chipping/allocation and incoming transport, chemicals, delivered electricity, steam generation/distribution, water treatment and external waste treatment. Check provider reference units/states and loss boundaries before linking. |
| disclosure | Record external/on-site wastewater treatment, purchased heat boundary, internal heat/water reuse, storage, rejects and all missing exchanges. No zero-chemical, zero-effluent or universal yield assumption. |

Aggregate receiving, impregnation, refining/reject refining, washing, bleaching, dewatering, flash drying, baling and on-site wastewater treatment when present as one foreground unit. Maintain separately metered stages and physical links. Internally reused steam, pulp, filtrate and recovered fibres are not extra purchased inputs or a second saleable pulp output. Drying here is indirect steam-heated air/steam drying; on-site fuel-fired boilers, direct-fired dryers, chemical recovery and exported heat require a separately reviewed extension with atomic fuels, combustion emissions and supply/output identities. They cannot disappear from a dataset that actually operates them. Heat generation outside this declared foreground stays in the linked provider. Incoming transport must be covered once in supplier/upstream service data with measured route/load/distance, not silently omitted. [jrc-pulp-paper-bref-2015, §§5.1.5,5.2.2.7,5.3.9.]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ctmp | Aggregate bleached market CTMP manufacture | required | Within the specified chemical/species/drying route | Receiving → impregnation/refining → washing/screening → bleaching → drying/baling; treatment branch and utilities included | 1 kg oven-dry reference flow |

Physical process graph: chip wash/impregnation → pressurised main and reject refiners → staged washing/screens → peroxide bleach → dewatering/flash dryer → bale. Refiner steam recovery supplies measured internal heat users; counter-current filtrate returns to identified washing stages; final purge goes to internal or external treatment. Keep both endpoints of each fibre/water/steam link equal before allocation and retain opening/closing stock. Record each washing-stage consistency, dissolved solids and temperature independently; the BREF diagram is illustrative, not an instruction to clone one mill’s four washes. [jrc-pulp-paper-bref-2015, Fig.5.4.]

### Process: Aggregate CTMP manufacture (`ctmp`)

#### Inputs

##### Product flows

###### Wood Chip (`chips`)

Clean virgin softwood chips delivered for sodium-sulphite CTMP. Retain species, bark, contamination, wet mass and dry wood mass. Volume/m3 identity does not define solid or bulk volume: record measured volume, packing and supplier reference convention. A missing conversion blocks the background link, not the physical chip identity.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable exchange from cp_chips divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chips`
- Sources: `jrc-pulp-paper-bref-2015`

###### Alternating current (`electricity`)

Purchased grid-average medium-voltage alternating current, 1–35 kV, to user. Source geography is CN; verify actual site/provider region, year, consumption mix, voltage and delivery/loss boundary before background use. Sum refining, reject refining, pumps, bleaching, drying fans, packing and applicable wastewater-treatment meters; reconcile gross site intake and auxiliaries. Other voltage/generation routes require matching rows. Native Net calorific value/MJ is the electrical-energy chain, not fuel or heat: metered kWh×3.6, without subtracting recovered heat.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_energy divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process heat from steam (`steam`)

Purchased industrial-boiler steam heat for preheating, bleaching and steam-heated flash drying. This record references Gross calorific value, not a proven net delivered-heat convention. Keep physical steam mass, pressure, temperature, quality, inlet/outlet enthalpy and condensate return separately. Use the provider-reference MJ only after its definition and conversion from the measured heat account are documented; otherwise quantity/background compatibility remains pending.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable exchange from cp_heat divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `jrc-pulp-paper-bref-2015`

###### Process Water (`water`)

Treated process-water make-up crosses the supply boundary. Meter actual additions and retain treatment/source and temperature-dependent density when converting volume to kg. Recirculated filtrate and recovered condensate are internal transfers, not fresh water purchases. Direct natural-water abstraction requires separate source-compartment elementary input rows and treatment inventory.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_water divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium sulfite (`sulfite`)

Na2SO3 impregnation reagent, CAS 7757-83-7; not bisulphite, metabisulphite or dithionite. Record delivered form, hydration, purity, solution mass and active charge separately. Supplier kg basis must match the actual form; neither the charge nor a fixed recipe is prescribed.

- Selected flow: Sodium sulfite `4fbdce66-c23d-4890-b16e-d53c39afa224`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium hydroxide (`naoh`)

Industrial sodium hydroxide record has 95%–98% purity. It is usable only for a matching purchased grade; diluted liquor must be reconciled to delivered reagent with measured concentration, preparation water and stocks. Other supplied concentrations require a different verified identity. Sum pretreatment and bleaching purchases without counting internal recirculation twice.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Hydrogen peroxide (`peroxide`)

H2O2 oxidative bleaching reagent. The broad record does not define aqueous concentration or a supplier kg convention. Measure solution mass and assay; keep active H2O2 and carrier water distinct. Match provider reference quantity before linking; do not assume 50% solution or copy a database concentration as a recipe.

- Selected flow: Hydrogen peroxide `c566e036-2e0c-4f44-b4c2-08dc00af93c2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sodium silicate aqueous solution (`silicate`)

Sodium silicate aqueous solution for peroxide stabilisation, specified Na2O/SiO2 ratio and solids. The candidate describes solution but also >99.5% purity; delivered-solution versus dry-solute mass remains unresolved. No UUID is adopted until formula, modulus, concentration and supplier quantity agree.

- Selected flow: Sodium silicate aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Diethylenetriaminepentaacetic acid (`dtpa`)

Conditional DTPA acid chelation, CAS 67-43-6, only when actual supplied acid form, assay and provider reference basis agree. Record delivered mass, acid-equivalent mass, carrier water and impurities separately; no pentasodium-DTPA or EDTA substitution. The official Chinese baseName 二乙基三胺五乙酸 is a source naming defect; preserve its selected display while the correct chemical description is diethylenetriaminepentaacetic acid (二乙烯三胺五乙酸), governed by concordant EN/CAS. Source/provider naming clarification remains pending, not silently corrected. Other actual chelants require their own atomic row and fate.

- Selected flow: Diethylenetriaminepentaacetic acid `5b7e28d9-6a87-47e1-b39b-4f195313d652`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Sulfuric acid (`acid`)

Conditional sulphuric acid pH adjustment. The selected record specifies 93%–98% supplied acid; keep supplied mass and active H2SO4 separate. Verify actual grade and delivery basis, and measure neutralisation rather than assume a charge. Alternative neutralisation chemicals require their own rows.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Kraft wrapping sheet (`wrap`)

Conditional actual externally purchased uncoated kraft wrapping sheet, not a bag, wet pulp or an internally diverted pulp output. Weigh supplied sheets and record grammage, wood/fibre blend, virgin/recycled fraction, moisture, any surface treatment, stock and supplier grade/gate. Broad uncoated packaging-paper names/synonyms support this physical subset with no coating or manufacturing-route restriction; source CPC32129 wood-free graphic-paper classification differs from the packaging name and requires unresolved provider/source clarification. No exact kraft recipe or background claim. Coated/laminated material requires a compatible separate identity; own-pulp wrapping stays an internal diversion with one reference output.

- Selected flow: Uncoated printing, writing and packaging paper `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_pack divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Baling wire (`wire`)

Iron or steel baling wire actually consumed, excluding its tare from pulp net reference mass. Verify actual composition, coating, gauge, stock-adjusted mass and supplier route/gate; no generic steel recipe or one-use equipment assumption. Raw name/comment explicitly include binding paper bales despite isolated CPC42946 fencing-wire classification; retain unresolved source/provider classification clarification, without claiming all metadata verified.

- Selected flow: Baling wire `56ddb6db-1bf1-4c3c-b3db-bb00063774a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_pack divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-pulp-paper-bref-2015`

###### Urea (`urea`)

Conditional solid urea nutrient for on-site biological wastewater treatment. This record covers synthesis from ammonia and carbon dioxide and agricultural-grade material with industrial uses. Use only matching purchased purity; retain nitrogen and reagent mass separately and track supplied carbon origin. No nutrient ratio is prescribed.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

###### Orthophosphoric acid aqueous solution (`phosphoric`)

Conditional actual purchased 85% aqueous orthophosphoric acid, H3PO4 CAS7664-38-2, for on-site biological phosphorus dosing only when supplier assay and the source two-step furnace-process/at-plant gate match. The 85% grade is a conditional source-identity limit, not a default site concentration, dose or nutrient ratio; other actual grades/routes require a compatible different identity before linking. Weigh whole as-supplied solution and retain active acid/P, carrier water and stocks separately without duplicate pure-acid/water purchases. Provider wet/dry reference basis remains verified separately. No untreated Prayon weak-acid intermediate or contradictory anhydrous/85%-solution record is generalised to this reagent.

- Selected flow: 85% Phosphoric Acid `d0671bdc-bd18-4089-bac0-7d4058782ae8`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_chem divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chem`
- Sources: `jrc-pulp-paper-bref-2015`

#### Outputs

##### Product flows

###### Chemi-mech pulp (`pulp`)

One accepted finished bleached softwood CTMP output, containing 1 kg oven-dry pulp solids exclusive of wrapping and wire. Retain actual bale wet mass, dry fraction and product quality. There is no separate market output for the internal unbleached/wet stock.

- Selected flow: Chemi-mech pulp `f5ac1d57-f7e5-464b-9dd2-0d05eb7c1d4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `jrc-pulp-paper-bref-2015`; `iso638-dry-matter-scope`; `rottneros-ctmp-route-2023`

##### Waste flows

###### Untreated CTMP wash and bleach wastewater (`ww`)

Conditional actual untreated CTMP wash and peroxide-bleach wastewater handed to external treatment only when treatment is outside this foreground. Broad Waste liquid explicitly includes industrial wastewater and has no opposed originating process or treatment route; it does not establish actual composition or treatment compatibility. Native Mass/kg requires measured whole wet handover mass, or measured volume×actual effluent density at the handover state; retain volume, water/dry suspended/dissolved solids, COD/BOD/N/P/chelants, temperature, stocks and receiver/provider separately. Do not use water density by default or record oxygen-demand indicators as bulk liquid mass. On-site final freshwater carrier/pollutant outputs belong to a different branch; do not count both for the same external handover/treatment. No recovered-fibre fluting, manganese, municipal or treated-water substitution.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual whole wet wastewater handover mass from cp_effluent, measured directly or as matched V_m3×rho_kg/m3, divided by accepted oven-dry pulp solids D in kg. Retain volume, composition and stocks separately; no default density or pollutant-load substitution.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### CTMP coarse fibre screening rejects (`rejects`)

Actual separately purged CTMP coarse fibre/shive screening rejects, as collected with water, dissolved impregnation/bleach chemicals, mineral contamination and measured component dry masses/carbon. Broad industrial Waste solid includes discarded process material with no paper-only, clean-wood or treatment restriction. Measure wet dispatch and dry fraction, classify contamination/status and document actual recipient/treatment/provider reference basis. Rejects returned to main/reject refining are internal recirculation; only final external purge is an exchange. Keep distinct from both sludge rows despite the shared broad UUID; no clean sawmill-offcut/municipal/chlorine waste, default destination or avoided credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Primary fibrous CTMP wastewater sludge (`primary_sludge`)

Actual separately removed primary fibrous sludge from on-site CTMP wastewater clarification: captured fibres/wood organics, inorganic solids, process chemicals and water in measured proportions. Broad Waste solid explicitly includes industrial wastewater-treatment sludge; it is not a claim that the paper-production-only sludge record includes this independent CTMP pulp mill. Weigh its own wet transport mass and dry solids, moisture, carbon, contaminants, dewatering/stock and recipient/treatment/provider basis. Keep primary origin and mass separate from biological excess sludge and screening rejects even when all use one broad locator. No sludge blend, generic dry fraction, clean recovered-fibre identity or disposal/energy credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

###### Excess biological CTMP wastewater sludge (`bio_sludge`)

Actual separately removed excess biological biomass sludge from on-site CTMP wastewater treatment, with measured organic biomass/non-biogenic additives/inorganic solids/water and chemical contamination. Broad industrial Waste solid includes wastewater-treatment sludge without a hard process/treatment restriction. Record its own wet dispatch, dry solids, moisture, carbon origin, dewatering/stocks, actual recipient and provider/treatment convention. Retained or returned activated sludge is internal; the primary fibrous sludge and screen rejects remain separate rows/physical amounts despite one broad UUID. No inferred paper-mill recipe, disposal route, recycled-content or energy credit.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass / kg
- Amount rule: Actual attributable exchange from cp_waste divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-pulp-paper-bref-2015`

##### Elementary flows

###### Liquid water carrier in final freshwater discharge (`freshwater_out`)

Conditional actual liquid H2O carrier after on-site foreground treatment, emitted to the declared freshwater receiver, CAS7732-18-5. This Volume/m3 emission is separate from process-water purchase, natural-resource abstraction and air water vapour. Measure water-component mass from matched final effluent mass/composition and use documented water density at discharge temperature to express water volume; whole mixed-effluent volume is not blindly pure water. Keep COD/BOD/TSS/TN/TP and species in separate overlapping load accounts, not summed as water masses. For the same external wastewater handover/treatment branch, omit this direct output and downstream provider discharges; document each real split flow rather than count the same water twice.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual final discharged H2O component mass / documented water density at discharge temperature / accepted oven-dry pulp solids D; matched cp_effluent and cp_water records, with stocks and discharge branch. No default density, whole-effluent or external-treatment duplication.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### chemical oxygen demand (`cod`)

COD oxygen-demand indicator in actual final discharge to fresh water, after any foreground treatment. Record method and dissolved/suspended coverage; kg is oxygen-equivalent demand, not carbon mass.

- Selected flow: chemical oxygen demand `08a91e70-3ddc-11dd-97ed-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### biological oxygen demand (`bod`)

Biological oxygen-demand indicator in final discharge to fresh water. State BOD5 or other duration and test method; the generic identity does not determine the laboratory duration. Do not add BOD and COD as disjoint organic masses.

- Selected flow: biological oxygen demand `08a91e70-3ddc-11dd-97de-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### Suspended solids to fresh water (`tss`)

Suspended solids in final freshwater discharge; the only retrieved suspended-solids identity specifies water-unspecified, so no UUID is adopted for this declared freshwater emission. Do not substitute dissolved solids. Measure dry filter residue by a documented method.

- Selected flow: Suspended solids to fresh water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### nitrogen, total (excluding N2) (`tn`)

Total nitrogen excluding molecular N2 in final freshwater effluent; kg N. Distinguish organic/inorganic nitrogen and urea/chelant sources; an inorganic-N assay is not total N. Retain constituent speciation where known without duplicate impact totals.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### phosphorus, total (`tp`)

Total phosphorus in final freshwater effluent; kg P, not kg phosphate. Keep chemical/species analysis when available; this sum indicator cannot hide a high-impact constituent or be summed again with its constituent phosphorus.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### N-carboxymethyliminobis(ethylenenitrilo)tetra(acetic acid) (`dtpa_out`)

Conditional DTPA acid-equivalent in final freshwater effluent, CAS 67-43-6. Analyse its fate; do not presume complete destruction or that all input is emitted. Resolve salt-equivalent conversions and its contribution within total nitrogen/COD.

- Selected flow: N-carboxymethyliminobis(ethylenenitrilo)tetra(acetic acid) `39fbf165-c4f4-4c79-aea5-cfc3a73bd86b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_effluent divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-pulp-paper-bref-2015`

###### methanol (`methanol`)

Conditional methanol emitted to outdoor air from chip handling, refining, vents or drying after actual controls. Measure component-specific release; total organic carbon and humid-gas FID response are not methanol mass.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### acetic acid (`acetic`)

Conditional acetic acid emitted to outdoor air, CAS 64-19-7. Analyse or use a documented site source model with matched steam/water conditions; no generic VOC factor becomes an acid emission.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### pin-2(3)-ene (`pinene`)

Conditional alpha-pinene (CAS 80-56-8; no enantiomer restriction) emitted to outdoor air. Resolve component speciation; all terpenes cannot be assigned to alpha-pinene and stereospecific records are not interchangeable.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5) (`pmfine`)

Conditional emitted particulate matter within PM2.5 from chip handling and dryer exhaust after controls. Captured fibre is a recovered material/waste, not an air release. Match aerosol diameter method, source and operating hours.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (PM2.5 - PM10) (`pmmid`)

Conditional emitted particles in the disjoint PM2.5–PM10 interval. With matched nested observations, derive this as PM10 minus PM2.5; never sum the PM10 cumulative measurement and the derived interval.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### particles (> PM10) (`pmcoarse`)

Conditional emitted particles larger than PM10. Derive total emitted dust minus PM10 only for matched methods and source coverage; unknown size distribution remains pending. No sawmill PTE or boiler factor is transferred.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (biogenic) (`co2bio`)

Biogenic CO2 actually released by on-site treatment of wood-derived organic material. Retain it in LCI even if an impact-accounting convention reports only fossil CO2. Separate dissolved carbon, solids, product carbon and actual gas release; do not force an unclosed carbon balance into this row.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### carbon dioxide (fossil) (`co2fossil`)

Conditional fossil CO2 from non-biogenic carbon actually converted on site, including synthetic urea carbon only when its origin and fate are evidenced. Purchased steam generation emissions stay in the upstream supplier dataset, never duplicated here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### methane (biogenic) (`ch4`)

Conditional biogenic methane actually released from on-site wastewater handling; includes anaerobic pockets or storage where evidenced, not an assumed anaerobic treatment system. Captured gas transfers and oxidised gas have separate physical fates.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### nitrous oxide (`n2o`)

Conditional N2O emission from nitrogen conversion in on-site wastewater treatment where measured or evidenced. It is not NOx, NO or NO2; keep molecular N2O kg and sampling coverage explicit.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_air divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-pulp-paper-bref-2015`

###### water vapour (`evap`)

Water vapour actually leaving the aggregate foreground through flash drying and other vents. Reconcile incoming moisture, supplied water/steam, condensate, effluent and bale moisture; distinguish vapour from entrained droplets. It is not water-resource uptake.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable exchange from cp_water divided by accepted oven-dry pulp solids D in kg. Retain unmatched/absent evidence explicitly, never replace missing data with zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-pulp-paper-bref-2015`

## 7. Allocation and Co-product Handling

Maintain the unallocated whole-mass/element, reactive-component and enthalpy accounts defined in physical_balances independently from the allocated environmental-burden ledger. Stage metering and subdivision take priority: exclusive pulp burdens stay with pulp; shared utilities/treatment are assigned by measured physical demand or causal pollutant load with documented residuals and uncertainty. Internal recovered heat/fibre is reuse, not a co-product credit. This scope has one market pulp output and no external heat sale. If a useful external co-product actually occurs, first establish its identity, output amount and separation step, then review a physical relationship or justified economic allocation and sensitivity; do not silently treat it as waste. No universal economic/mass share or avoided-product credit is set. Never multiply the physical co-product output or either endpoint of an internal link by a burden-allocation share. Supplier wood co-product allocation is inherited and disclosed, not assumed zero. These are foreground accounting requirements, not source-derived numerical coefficients.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | ctmp | accepted pulp | foreground collection | batch; net wet bale mass; dry fraction d; sample method; grade; stock change | Calibrated net weighing and representative solid-pulp dry matter testing; exclude wrapping/wire, record volatile-solids limitation and lot sampling. | kg; fraction | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_chips | ctmp | chips | foreground collection | species; origin; wet/dry mass; solid/bulk volume; packing; bark; supplier reference convention; transport | Weigh receipts, sample moisture and measure volume in declared state; obtain supplier solid/bulk reference and loss boundary. | kg; m3 | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_energy | ctmp | electricity | foreground collection | gross kWh; stage submeters; voltage; supply mix; auxiliaries; shared users | Read calibrated supply/stage meters synchronously; reconcile transformer and motor losses to the defined supply boundary. | kWh; MJ | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_heat | ctmp | steam heat | foreground collection | steam mass; pressure; temperature; quality; condensate return; enthalpies; recovered/used/vented heat; supplier MJ definition | Meter incoming/outgoing streams and matched enthalpy states; obtain supplier reference-quantity definition and verified conversion. No generic steam enthalpy. | kg; MJ | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_water | ctmp | water and internal stock | foreground collection | make-up water; each stage stock mass/flow and consistency; dissolved solids; density; condensate; final moisture; vapour; water in chips, formulations, wet rejects/sludge and stocks; linked reaction evidence | Meter external water and paired internal links; validate consistency with gravimetric samples. Track H2O separately from fibre and total dry matter using physical_balances, including evidenced chemical formation/consumption from cp_chem and, only for included biological treatment, cp_effluent/cp_waste/cp_air. Retain phase transfers and material-bound water; do not infer evaporation from an unexplained residual. | kg; m3; fraction | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_chem | ctmp | each chemical row | foreground collection | chemical identity/CAS; supplied mass; actual formulation/composition; concentration/purity; hydration; opening/closing stock; stage charge; supplier basis; peroxide dose, residual and recycle; bleach/decomposition conditions and evidenced reacted extents; pH-adjustment reagents; oxygen and product compositions | Reconcile deliveries, calibrated dosing and stocks with certificate assays; separate active substance/carrier water, no double counting recirculated liquor. Retain stage assays and matched reaction/speciation evidence to distinguish peroxide bleaching from decomposition and other actual reactions, including pH adjustment. Evidence each formation/consumption term and oxygen uptake/release with uncertainty; reagent disappearance alone does not fix reaction pathway or extent. No assumed decomposition fraction or recipe. | kg; fraction | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_pack | ctmp | wrap and wire | foreground collection | component mass; material/grade/coating; tare; bale count; supplier | Weigh each component or trace actual bills and returns; packaging tare excluded from pulp net mass. | kg | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_effluent | ctmp | each water pollutant and off-site wastewater | foreground collection | flow; whole wet mass/density at temperature; H2O versus non-water component masses; receiver; untreated/final point; constituent concentrations; test duration; detection limits; treatment scope; actual included biological-treatment substrate, oxygen uptake, biomass, gas, liquid and stock compositions/changes and transformation evidence | Pair calibrated flow with representative flow-proportional composite samples and documented lab methods; measure whole wet handover mass or matched effluent density, and H2O component mass/density for direct water-carrier volume. Keep external transfer and final discharge branches separate; TN includes organic N; state censored-result treatment. Only when biological treatment is included, match influent, effluent, oxygen/air, biomass/sludge, gases and stocks to evidenced transformations and uncertainty via cp_waste/cp_air. COD/BOD removal is not a material mass, biomass yield or gas partition. | m3; mg/L; kg | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_waste | ctmp | each separated waste | foreground collection | wet mass; dry fraction; composition and relevant elemental fractions; contamination; return/purge; recipient; included treatment biomass production/decay evidence and stock changes | Weigh and sample each segregated reject/sludge; document treatment receipts and distinguish internal recycle from external purge. For actual included biological treatment, retain measured biomass/sludge and composition evidence for formation/consumption, distinct from captured fibre; do not assume a biological yield. | kg; fraction | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |
| cp_air | ctmp | each emitted species and particle interval | foreground collection | source; species/CAS; carbon origin; humid/dry gas basis; gas flow; concentration; controls; hours; particle diameter; detection limits; actual atmospheric/oxygen supply, uptake/release and exhaust compositions; reaction and included biological-treatment evidence | Component-specific source tests or justified site emission models, paired with actual operating/control periods; measure dust intervals and wastewater gases; report gaps rather than generic VOC/CO2 closure. Retain actual inlet/exhaust and dissolved-gas transfer evidence needed for whole-mass/element and reactive-component accounts, including peroxide oxygen release/uptake and actual included biological treatment. Do not infer oxygen demand or gas partition from a closure residual. | kg; mg/m3; m3; h | Each batch/shift; continuous meters and scheduled representative tests | Matched full reporting period including startup, shutdown and grade changes | Declared CTMP line and attributable auxiliaries | per 1 kg reference flow | Calibration; sample/lab records; stock reconciliation; supplier definitions; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_normalization | all inventory rows | D=sum(m_net,b*d_b) for accepted matched bales; x_i=sum(X_i,attributable)/D. D is kg oven-dry pulp solids. Reference output = 1 kg. Match stock changes and periods; divide sums, never average batch ratios. | cp_reference; each linked collection protocol | Exchange per 1 kg reference flow |  |
| moisture_and_stock | cp_reference; cp_water; cp_chips | Solid sample dry fraction d=m_dry/m_wet. For pulp suspension c=m_fibre_dry/m_stock; keep dissolved solids separate. Wet water = wet mass minus measured total dry solids, not wet mass minus fibres alone, only where the actual composition and sampling/drying method support that H2O determination; retain volatile non-water and hydration limitations. These sample identities do not establish conservation through a reactive stage; use physical_balances. D_ADt=900*A_ADt only when the source defines 90% ADt; I_OD=I_ADt/900 for a reported quantity per ADt. | cp_reference; cp_water; cp_chips | Separate dry fibre, total dry matter, water and ADt convention | jrc-pulp-paper-bref-2015; iso638-dry-matter-scope; iso4119-stock-scope |
| chemical_quantity | cp_chem | Active mass = supplied formulation mass * measured active mass fraction; retain carrier water and stocks. Convert to provider reference amount only with matching species, hydration, concentration and actual definition. Reconcile stage peroxide dose, residual/recycle and evidenced bleaching/decomposition extents and actual pH-adjustment chemistry; use measured compositions and actual oxygen uptake/release to support physical_balances formation/consumption terms. No default decomposition fraction, complete-conversion assumption or duplicate purchase for chemically formed water. | cp_chem; cp_water; cp_air | Measured reagent and background demand; explicit pending where definition missing |  |
| electricity_quantity | electricity | Electricity MJ=3.6*metered kWh. Reconcile gross intake, stages and auxiliaries; keep heat recovery separate. No default kWh/kg or recovery percentage. | cp_energy | Gross attributable electricity |  |
| heat_account | steam | Physical net steam heat Q=sum(m_in*h_in)-sum(m_return*h_return)-other documented outgoing enthalpy. Record lost/vented heat and actual recovered/used internal heat at their own boundaries. Provider GCV reference demand requires its documented conversion to this physical account; no Q=GCV assumption, no subtraction from electrical MJ, no simultaneous avoided-heat credit. | cp_heat; cp_energy | Physical enthalpy ledger and separately compatible provider quantity | jrc-pulp-paper-bref-2015 |
| effluent_load | cod; bod; tss; tn; tp; dtpa_out; ww | Load kg=sum(V_m3,j*C_mg/L,j*0.001) for matched flow/samples. Use actual final emission point or external handover, not both for the same treatment branch. Keep COD/BOD/TSS/TN/TP and constituent species as different indicators with overlap disclosed, not summed material masses. For ww these loads characterise composition, not the whole wet liquid exchange; freshwater_out is water-component volume, not a pollutant load. | cp_effluent | Receiver-specific measured pollutant loads | jrc-pulp-paper-bref-2015 |
| wastewater_native_quantity | ww | X_ww=sum(V_handover,j*rho_effluent,j) or measured whole wet mass at the same temperature/state; x_ww=X_ww/D. Retain stock-adjusted liquid volume and constituent loads separately. No fixed density, dry-basis substitution or duplicate treatment branch. | cp_effluent; cp_water | kg wet wastewater per kg oven-dry pulp |  |
| freshwater_carrier_quantity | freshwater_out | m_H2O=sum(m_final_effluent,j*w_H2O,j) from actual composition or an equivalent verified H2O account under physical_balances including evidenced reaction formation/consumption; V_H2O=sum(m_H2O,j/rho_H2O(T_j)); x_H2O=V_H2O/D. Measured density/water fractions and stocks, liquid versus vapour and actual freshwater receiver required; external transfer treatment branch excluded. Unknown reaction terms cannot be closed by adjusting discharge water. | cp_effluent; cp_water; cp_chem; cp_waste; cp_air | m3 liquid H2O per kg oven-dry pulp |  |
| dust_intervals | pmfine; pmmid; pmcoarse | fine=PM2.5; middle=PM10-PM2.5; coarse=total emitted PM-PM10, only for matched source/time/diameter methods. Negative differences invalidate the split. Unknown size distribution blocks a complete interval inventory; never add nested PM totals. | cp_air | Three disjoint particle intervals |  |
| physical_balances | ctmp | At each stage and for the aggregate boundary/period, conserve whole mass and each actual element (C/Na/S/O/H and other elements present): opening + inputs = closing + outputs, with all wet streams, material-bound water, atmospheric/oxygen and exhaust exchanges included. Count measured losses as physical outputs once; disclose signed unexplained residuals and measurement uncertainty separately. For H2O, fibre and other reactive dry species/components use opening + inputs + evidenced formation = closing + outputs + evidenced consumption; these quantities are not individually conserved through reactions. Derive reaction terms only from actual formulation, peroxide dose/residual/recycle, evidenced bleaching versus decomposition and pH-adjustment extents, oxygen uptake/release and measured reactant/product compositions; cross-check mass/element totals. Include biological substrate/biomass/gas transformations only for actual included treatment, using its measured streams, stocks, compositions and evidenced extents; no assumed biological yield. Distinguish dissolution/phase transfer from chemical transformation and do not add internal formation/consumption as external exchanges. Reconcile wood organics in effluent, captured fibres and transformed components. Internal link endpoints match. Track carbon by measured mass/elemental fractions and actual species; C_CO2=(12/44)*CO2, C_CH4=(12/16)*CH4. Keep biogenic/fossil origin distinct. Unknown chemistry remains a disclosed gap; no forced closure, assumed peroxide decomposition fraction or CO2/gas partition. | cp_reference; cp_chips; cp_water; cp_chem; cp_waste; cp_effluent; cp_air | Separate conserved mass/element and reactive-component accounts; signed residuals, reaction evidence gaps and uncertainty | jrc-pulp-paper-bref-2015 |
| burden_assignment | ctmp | B_pulp=B_exclusive+sum(a_pulp,k*B_shared,k), with each a based on measured causal demand and documented denominator. Retain unallocated physical outputs and separately report allocated burdens. No numerical shares or credit are predefined. | stage meters; shared-service records | Separate allocated environmental-burden account |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | One physical/chemical exchange; verified identity distinct from supplier amount compatibility; hard route/CAS contradictions reject use | Supplier grades, assays, flow-property/unit records |
| cohort_quality | ctmp | Same accepted dry pulp denominator for all stages and both languages; complete stocks, startup/shutdown and grade coverage | cp_reference; cp_energy; cp_heat |
| balance_quality | ctmp | Reconcile unallocated whole-mass/actual-element and reactive-component accounts under physical_balances, and the separate enthalpy account, against documented measurement and reaction-evidence uncertainty. Water and reactive dry solids require evidenced formation/consumption, not unchanged component conservation. Report residuals and unknown extents explicitly; unresolved evidence prevents a complete balance claim. Do not force closure by adjusting evaporation, effluent, solids, oxygen or CO2; no default peroxide decomposition fraction or biological yield. | cp_reference; cp_chips; cp_water; cp_chem; cp_waste; cp_heat; cp_effluent; cp_air |
| source_limits | ctmp | BREF route evidence and indicative multi-grade tables, producer/history cases and standard public scopes retain their stated limits; no universal recipe, factor or compliance claim | jrc-pulp-paper-bref-2015; rottneros-ctmp-route-2023; valmet-ctmp-bleach-2016 |
| missing_quality | all inventory rows | Missing UUID, quantity or provider definition remains pending. Report detection limits and uncertainty; neither absence of measurement nor a wastewater-treatment assumption proves zero | Coverage matrix and primary records |

## 9. Validation Rules

- Verify single Na2SO3 CTMP/peroxide route and species; never substitute groundwood, TMP, APMP, CMP or NSSC identities.
- Exactly one reference product output: pulp = 1 kg oven-dry. Keep wet stock and packed pulp within the aggregate unit and internal ledger; packaging is excluded from reference mass.
- All row denominators, protocol aggregation and cohort_normalization use accepted dry solids D. Dry fraction, stock consistency and ADt conventions cannot be interchanged.
- Confirm source compartments, species/CAS, reference properties/units, actual chemical grades and background amount definitions before complete dataset linkage. Steam GCV/MJ is pending until its relation to measured enthalpy is evidenced.
- External wastewater transfer and final direct water emissions are alternative accounting branches for each treatment boundary; include on-site treatment chemicals/energy/sludge/gases where operated. Add every actual chemical, lubricant, coating, waste or pollutant as its own atomic row if this minimum inventory does not contain it.
- No boiler or direct-fired-dryer emission is covered by chip/dryer dust rules. Actual combustion/export/recovery requires a reviewed extension; exclude neither biogenic CO2 nor unknown water release on a default zero assumption.
- Reject duplicate nested PM, VOC/species or nutrient/species impact accounting; retain overlapping analytical indicators in disclosed separate accounts. Internal links and physical co-product outputs are unchanged by burden allocation.

- Verify whole-mass and actual-element conservation separately from H2O/reactive dry-component formation and consumption under physical_balances. Require matched formulation, peroxide dose/residual/recycle, bleach/decomposition and pH-adjustment extent, oxygen/air/exhaust and composition evidence with uncertainty; biological terms apply only to actual included treatment. Preserve measured wet streams, material-bound water, stocks and paired internal links. Missing reaction evidence or unexplained residuals block complete physical-balance claims; reject assumed decomposition fractions, biological yields or forced evaporation/solids/gas closure.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground CTMP manufacturing dataset; later background linkage only with compatible reference amount |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Specified dry bleached softwood CTMP supply to paper/board models, with site quality and quantity compatibility |
| excluded_use | Complete comparative functional equivalence; other pulp routes/species; universal recipe; unverified supplier linkage; finished paper footprint |
| required_metadata | All reference qualifiers, source locators, measured cohort/D, background states, allocation, process boundary and flow coverage |
| required_quality_disclosure | Missing identities and supplier conversions; chemistry/receiver limits; evidenced reaction extents and unresolved terms; measurement uncertainty and signed residual balances; no methodology approval inferred |
| update_trigger | Species, pretreatment/bleach, dryer/supply, product quality, chemical grade, effluent route, co-product, provider reference or source-method change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-pulp-paper-bref-2015 | official_guidance | European Commission JRC, Production of Pulp, Paper and Board BREF (2015), https://publications.jrc.ec.europa.eu/repository/bitstream/JRC95678/pp_revised_bref_2015_def.pdf | §§2.2.2 monitoring;5.1.5–5.1.7 route/chemistry, including peroxide decomposition and pH adjustment (p.497);5.2.2.3 actual treatment context (pp.505–507);5.2.2.4–5.2.2.7 air, sludge and energy;5.3.9 recovered heat; Glossary ADt. Qualitative route/reaction context only; no default doses, reaction extents, biological yields or survey/table factors. |
| rottneros-ctmp-route-2023 | literature | Rottneros Annual Report 2023, p.23, https://www.rottneros.com/files/Main/15260/3948171/rottneros-ab--annual-report-2023.pdf | Actual CTMP heated chemical pretreatment, disc refining and dried baled market state, including bleached/unbleached offering. Specific producer; no universal yield or energy claim. |
| valmet-ctmp-bleach-2016 | literature | Valmet, HC bleaching success at Rottneros (2016-11-02), https://www.valmet.com/insights/articles/pulp/mechanical-pulping/hc-bleaching-success-at-rottneros/ | Historical CTMP washing/high-consistency bleach installation; corroboration only, not recipe, output, improvement percentage or present mill performance. |
| iso638-dry-matter-scope | standard | ISO 638-1:2022 official public abstract, https://www.iso.org/standard/83614.html | Solid-sample dry-matter scope/volatility and slush/saleable-mass exclusions; total dry matter includes dissolved solids. Full laboratory standard not acquired; no conformance claim. |
| iso4119-stock-scope | standard | ISO 4119:1995 official public abstract, https://www.iso.org/standard/1493.html | Aqueous-pulp stock concentration scope and exclusion of saleable slush mass. Full test procedure not acquired; site sampling/calibration records required. |
