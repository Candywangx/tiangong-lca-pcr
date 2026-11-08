---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.cotton-pulp-single-hole-flat-viscose-strip
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cotton-pulp single-hole flat viscose strip production at plant

## 1. Scope and Applicability

Production of the reported cotton-pulp single flat viscose strip subtype, including full wet-spinning, washing and finishing to its fixed plant acceptance gate. The1mm/100D patent case establishes a meaningful narrower subtype, not a universal grade. Excludes synthetic nylon/PET/PP, staple/tow/cut fibre, multifilament bundles, film-slit ribbon, sewing/cabled yarn, retail craft conversion, lyocell/cupro/acetate and unqualified wide raffia. Complete qualifications in section9 are mandatory.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.cotton-pulp-single-hole-flat-viscose-strip |
| classification_refs | CPC 3.0 35560; narrower product and route boundary |
| covered_products | Cotton-pulp single-hole continuous flat viscose element with measured qualifying strip geometry, washing and actual desulfurized/bleached/oiled/dried finish. |
| excluded_products | Synthetic polymers; staple/tow; bundles; film-cut strips; other regenerated routes; unsupported whole-product/provider/gate fit. |
| representative_product | Reported flat1mm/100D cotton-pulp embodiment, not an imposed recipe, yield or SKU. |
| production_route | Cotton pulp→viscose xanthate solution→single-hole acid-bath coagulation→washing/desulfurization→peroxide bleaching→oiling→drying/winding. |
| market_state | Actual whole finished strip at fixed plant quality-acceptance gate; net product excludes all bobbins/tare. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a qualified continuous flat regenerated-cellulose strip for downstream textile conversion. |
| How much | 1 kg |
| How well | Actual qualifying geometry, one element, declared moisture/finish, complete source/native/state/provider fit. |
| How long or cycle | One original first-acceptance event cohort; no use-life claim. |
| reference_flow_link | flat_strip |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Regenerated cellulose continuous filaments `5fdd8e27-825e-4767-9a79-2f9164fa7bd2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual producer and geography; cotton pulp origin and upstream; viscose xanthate single-hole hardware and claim qualification; actual apparent width and fineness method/state; single element and flat geometry; washing and complete finishing state; moisture and oil composition; actual fixed plant first gate and original Q; full WIP/FG/container/provider history; actual recovery and treatment boundaries; complete physical versus attributed service ledgers |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use calibrated actual net whole-product mass at the fixed completed-finish first gate. Exclude every tare; preserve original Q, actual moisture/finish and event genealogy via cp_acceptance and cp_cohorts. |
| `strip_geometry` | flat_strip | Apparent width and linear density | mm; dtex | Use actual finished-state width/length/mass records and method uncertainty; strip apparent width≤5mm. The reported100D→1000/9dtex is a case unit conversion only, not a grade default. No inferred thickness/density. |
| `whole_solution` | actual material and waste interfaces | Whole mass and nested composition | kg | Record whole aqueous mixture once, all actual solutes/water separately nested. Reactive species and actual elemental/water balances follow cp_materials/cp_species, not formula defaults. |
| `physical_service` | spent_filter; spent_bobbin; filter_cloth; winding_bobbin | Whole physical mass and compatible service units | kg | Preserve physical Qt/fleet once and distinct attributableA/Q service vectors. Qt/Qanalysis is an analytical physical display, never automatic duplicate treatment demand. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied cotton dissolving pulp and individual actual whole chemical/utility inputs, with complete upstream producers. |
| starting_condition_role | foreground_start |
| product_classification_scope | Narrow artificial flat strip subtype; not full35560 coverage or accepted mapping. |
| recursive_input_rule | Record any genuine same-category return with its original event/history; internal rework creates no new Q or virgin manufacturing credit. |
| upstream_dataset_requirement | Actual whole input grade/state/geography and supplier matched complete production/transport/service records. A separately modelled on-site producer must be complete and linked; no generic disposal stub. |
| disclosure | Actual gate, full route, circular-orifice/flat-product qualification, sources, original Q, all stocks/history, physical/species/water closure and provider/service limits. |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `include_complete_route` | Include every actual production, recovery, treatment, failed/rework, utility and article burden to the declared gate and later original-cohort services; apply complete section9 context. | `grace-single-hole-2015`; `jrc-polymers-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| strip_line | Full cotton-pulp single-hole flat viscose line | required | Actual matched route; full recovery/utility/treatment linkage | foreground | 1 kg reference flow |

### Process: Complete flat-strip manufacture (`strip_line`)

#### Inputs

##### Product flows

###### Cotton dissolving pulp (`cotton_pulp`)

Whole actual supplied pulp; moisture/ash/cellulose are nested assay components.

- Selected flow: Cotton dissolving pulp
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### Aqueous sodium hydroxide solution (`caustic_solution`)

Whole fresh solution for alkalisation/dissolution/desulfurization; no duplicate neat NaOH or carrier water input.

- Selected flow: Aqueous sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### Liquid carbon disulfide (`fresh_cs2`)

Fresh actual xanthation supply; separate internal recovered liquid and actual assay.

- Selected flow: Liquid carbon disulfide
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Aqueous sulfuric acid solution (`sulfuric_acid`)

Whole actual fresh spinning-bath acid solution.

- Selected flow: Aqueous sulfuric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `grace-single-hole-2015`

###### Sodium sulfate spinning-bath salt (`sodium_sulfate`)

Declare actual hydrate/purity/phase; no formula-water or recovered salt default.

- Selected flow: Sodium sulfate spinning-bath salt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `grace-single-hole-2015`

###### Zinc sulfate spinning-bath salt (`zinc_sulfate`)

Whole actual hydrate grade and moisture; Zn element is a nested assay.

- Selected flow: Zinc sulfate spinning-bath salt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `grace-single-hole-2015`

###### Aqueous hydrogen peroxide solution (`peroxide_solution`)

Actual bleaching supply and assay; no patent concentration default.

- Selected flow: Aqueous hydrogen peroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `grace-single-hole-2015`

###### Viscose spin-finish preparation (`finish_preparation`)

One actual whole supplied finishing preparation; require real formulation/provider; do not invent fatty-acid ingredients.

- Selected flow: Viscose spin-finish preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `grace-single-hole-2015`; `jrc-polymers-2007`

###### Process water (`fresh_water`)

Actual separate fresh process makeup only; solution/steam/recovered water stay separate.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Electricity at line supply (`electricity`)

Actual full line/recovery/auxiliary demand; measured kWh converted by3.6MJ/kWh, unit conversion only. UUID/property not finalized.

- Selected flow: Electricity at line supply
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### Process steam (`steam`)

Actual whole steam import with pressure/temperature/quality/enthalpy and linked producer; no fuel assumption.

- Selected flow: Process steam
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### Cooling-water makeup (`cooling_water`)

Actual purchased makeup where present; retain gross circulation/returns and complete cooling loads separately.

- Selected flow: Cooling-water makeup
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### Viscose filtration cloth service article (`filter_cloth`)

Where this actual whole article is used; physical fleet and supplier service units are distinct from attributed demand.

- Selected flow: Viscose filtration cloth service article
- Flow property / unit: Mass / kg
- Amount rule: Retain full actual article/fleet transfers and stocks separately; model evidenced attributable whole-article service A / positive original Q in compatible provider units, once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

###### Reusable winding bobbin (`winding_bobbin`)

Actual whole bobbin; no invented material, per-item mass or lifetime. Record article transfers with product supply.

- Selected flow: Reusable winding bobbin
- Flow property / unit: Mass / kg
- Amount rule: Retain full actual article/fleet transfers and stocks separately; model evidenced attributable whole-article service A / positive original Q in compatible provider units, once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

###### Returned reusable winding bobbin (`returned_bobbin`)

Actual whole serviceable bobbin physically returned from the recipient; no new manufacturing purchase, Q or reuse credit.

- Selected flow: Returned reusable winding bobbin
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical article transfer Bt with recipient and original genealogy; physical analytical display Bt/Qanalysis. This transfer is not additional manufacturing/treatment demand or product Q; attribute genuine service burdens separately under cp_assets/cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Air from atmosphere (`ambient_air`)

Actual air intake where material to ageing/ventilation/recovery balances; O2/N2/water are nested composition, not duplicate whole inputs.

- Selected flow: Air from atmosphere
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### Regenerated cellulose continuous filaments (`flat_strip`)

Whole qualified finished flat single strip at the fixed first-acceptance gate; native Washed/At plant admission is mandatory.

- Selected flow: Regenerated cellulose continuous filaments `5fdd8e27-825e-4767-9a79-2f9164fa7bd2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `grace-single-hole-2015`; `wco-hs2022-ch54`

###### Reusable winding bobbin supplied with strip (`supplied_bobbin`)

Actual whole article delivered with product; separate from net product mass and original Q, not an allocated coproduct or negative manufacturing credit.

- Selected flow: Reusable winding bobbin supplied with strip
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical article transfer Bt with recipient and original genealogy; physical analytical display Bt/Qanalysis. This transfer is not additional manufacturing/treatment demand or product Q; attribute genuine service burdens separately under cp_assets/cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

###### Recovered liquid carbon disulfide (`recovered_cs2_sale`)

Only actual external qualified sale; internal recycle is a stock/stream ledger, not this output.

- Selected flow: Recovered liquid carbon disulfide
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Recovered sodium sulfate product (`recovered_sulfate_sale`)

Only real saleable whole product with actual hydrate/purity/water; actual crystallising/drying burdens remain.

- Selected flow: Recovered sodium sulfate product
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Steam condensate returned to supplier (`condensate_return`)

Actual physical return with temperature/composition and producer linkage; no second fresh-water credit.

- Selected flow: Steam condensate returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### Off-spec viscose strip waste (`waste_viscose`)

Physically distinct rejected/irreversibly discarded strip including moisture/finish; internal rework is not external waste.

- Selected flow: Off-spec viscose strip waste
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `grace-single-hole-2015`; `jrc-polymers-2007`

###### Viscose-process wastewater at treatment receiver (`process_wastewater`)

One actual whole combined receiver transfer only where genuinely combined; retain individual drains/assays/provenance; otherwise split actual interfaces.

- Selected flow: Viscose-process wastewater at treatment receiver
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Sulfur-bearing viscose exhaust gas to treatment (`exhaust_to_treatment`)

Actual whole gas sent to linked complete producer, including carrier air/vapour and CS2/H2S subledgers; not a final-air emission.

- Selected flow: Sulfur-bearing viscose exhaust gas to treatment
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Contaminated spent viscose filter cloth (`spent_filter`)

One actual whole receiver export including substrate, retained viscose/liquor/water. Qt remains full; linked attributedA/Q demand is separate.

- Selected flow: Contaminated spent viscose filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

###### Contaminated discarded winding bobbin (`spent_bobbin`)

One actual whole discarded article including adherent finish/fibre/water; returned serviceable bobbins are separate physical returns.

- Selected flow: Contaminated discarded winding bobbin
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `jrc-polymers-2007`

###### Zinc-bearing wastewater-treatment sludge (`zinc_sludge`)

Only actual boundary export from included actual treatment; complete whole sludge/solids/water/provider burdens; no default precipitant or efficiency.

- Selected flow: Zinc-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record actual whole physical receiver transfer Qt once; physical analytical display Qt/Qanalysis. Linked modelled treatment/service demand is evidenced attributable A/Q for each original served cohort, with compatible provider units and no duplicate full-Qt recharge; cp_assets; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Carbon disulfide to air (`cs2_air`)

Actual final stack/fugitive/upset CS2 after real controls; not treatment-transfer gas again.

- Selected flow: Carbon disulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Hydrogen sulfide to air (`h2s_air`)

Actual final H2S measured separately from total sulfur and CS2.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Water vapour to air (`water_air`)

Actual final evaporation/vapour with free/reaction/steam origins distinguished; no fitted closure.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Carbon dioxide to air (`co2_air`)

Where actually emitted by included ageing/control/combustion; complete actual generating producer and carbon origin required.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Sulfur dioxide to air (`so2_air`)

Where actually emitted by included sulfur treatment; no assumed oxidation/abatement factor.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Water discharged to freshwater (`water_fresh`)

Only actual final direct discharge water component, separately reconciled from wastewater transfer to producer.

- Selected flow: Water discharged to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Zinc to freshwater (`zinc_fresh`)

Actual final discharged elemental-Zn reporting amount, no automatic Zn2+ speciation from total-Zn assay.

- Selected flow: Zinc to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

###### Sulfate to freshwater (`sulfate_fresh`)

Actual final discharged sulfate with specific assay; no total-S or COD substitution.

- Selected flow: Sulfate to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual amount A / positive original Q, once; retain full raw physical transfer and composition separately; cp_cohorts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-polymers-2007`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_hierarchy` | Avoid allocation by actual subdivision/direct attribution where possible. Assign remaining exchanges by demonstrated determining physical causality, separately for each exchange and served function; use justified exit-state market values only for residual multifunctionality lacking such a relation. Internal recovery, returned bobbins, waste treatment, stock carry and failed output are not automatic coproducts or substitution credits. Preserve all actual physical coproduct and waste quantities regardless of environmental shares, and disclose provider scope, time/geography and sensitivity. Sources:`ilcd-allocation-2010`;`jrc-polymers-2007`. | `ilcd-allocation-2010`; `jrc-polymers-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | strip_line | Unique first-gate acceptance and geometry | unnormalised actual records | lot; eventID; original netkg; width apparentmm; single-element count; length; mass; dtex; temperature/RH/time; moisture; finish; tare; source route/hardware; all rejects/returns/WIP/FG | Quality officer: calibrated whole-lot net weighing after the declared drying/finishing acceptance; optical apparent-width measurements on traceable samples in the actual supplied state, documenting flat/unfolded/folded geometry and uncertainty; measured length and conditioned net sample mass for linear density, with actual method/calibration and sampling plan. Record original event once; verify full hardware/route and native gate/state before admission. | kg; mm; dtex | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_materials | strip_line | Whole material/solution stock and consumption | unnormalised actual records | receipt/lot/provider; rawwholekg; assay/hydrate; moisture; pulp solids; actual finishcomposition; opening/closing stocks; internal recoveredstreams; WIP genealogy/vectors | Materials accountant with laboratory: retain all unnormalised whole feed receipts, consumption, tanks/stocks and original composition certificates, including failed/rework periods. Subdivide actual water/solutes without adding them again; link complete actual upstream producers and distinguish embedded versus decomposed history. | kg | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_utilities | strip_line | Actual utility and auxiliary producers | unnormalised actual records | rawkWh/MJ; steamkg/pressure/temperature/quality/enthalpy; condensatekg/state; coolingmakeup/return; meters; vacuum/ventilation/recovery/drying/standby loads; providerunits/history | Utilities engineer: collect gross supply/return meter series over all matched operations, failed/zero-output and recovery/treatment units. Match producer units and complete actual generation burdens. kWh×3.6 converts electricity units only; actual thermal enthalpy/density requires measured state, never invented fuel assumptions. | kg; kWh; MJ | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_recovery | strip_line | Whole recovery and receiver transfers | unnormalised actual records | rawstreamID/wholemass; composition/C/S/Na/Zn; hydrate/moisture; internalstocks; actualrecoveryequipment; receiver; fullproviderQt/units; cohortprovenance; nonoverlapservicevectors; treatmentinputs/outputs | Recovery/environment engineer: match all actual whole liquid/gas/solid send/receive tickets and assays; retain recovery stocks and every incurred treatment burden. Record actual full provider quantity once, then evidence separate attributable service vectors by cohort and original Q. Physically distinct rejects are separate; internal recycle cancels. Unproved destination/composition/provider or shares stay unresolved. | kg | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_species | strip_line | Actual species, media, elements and water | unnormalised actual records | gasflowseries/integratedvolume; conditions; density/composition; speciesconcentration; sampleQC; actualair; waterphases; reactionextent; finaloutlets/fugitives/upsets; wastewatercarrier; elementalassays; rawclosures | Analytical/environment officer: use actual site-specific species methods and matrix QA, integrate measured rates or use matched concentration×integratedvolume without extra time. Independently establish reaction extents, water origins, element balances and uncertainty. Identify final medium/outlet and linked producer emissions once; no COD surrogate, reaction-species conservation or fitted residual. | kg; m3; mg/m3 | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_assets | strip_line | Whole asset/packaging physical and service ledgers | unnormalised actual records | articleID/material/dimensions/wholemass; received/returned/installed/spare/supplied/scrapped/closing; substrate/retainedliquor/water; provideractualQt; originalcohorts/Q; servicevectors and units | Asset and packaging custodian: calibrated actual weights and whole fleet/article genealogy; reconcile every supplied/returned/scrapped article and actual contaminated receiver transfer. Keep dry substrate/contaminants nested in the whole waste, service demand distinct with evidence of nonoverlap, compatible producer units and old cohorts. Unknown lifetime/share is never invented; actual additional packaging gets separate atomic interfaces. | kg; item | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |
| cp_cohorts | strip_line | Physical stock/event/attribution reconciliation | unnormalised actual records | originaleventID/Q; openingraw/WIP/FG/assets; actualinputs/outputs/returns; closingallstates; loss/gains/water/finish; disposition; inheritedvectors; periodfailure/reworkloads; providerhistory; attributedA | Production controller: reconcile complete physical stocks/transfers independently of original unique first-acceptance Q and attributed exchange vectors. Partition original postgate basis across all disjoint deliveries, states, losses and terminal dispositions. Carry genuine WIP/history once; include all incurred loads and later services with original cohorts. Preserve raw zero/unknownQ intervals and unresolved shares; no collection-side normalization or double division. | kg; provider unit | every lot/event; continuous meters; complete period reconciliation | all matched production, stock and old-cohort histories including failed/zero-output periods | actual line, suppliers and complete linked producers | per 1 kg reference flow | calibration; original tickets/assays; method and sampling QA; full provenance; uncertainty and unresolved gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `event_basis` | all inventory rows | Q=sum unique original positive net first-acceptance events at one fixed gate and declared state; returns/rework/retests do not create another event. Keep full general stock/disposition bridge and original-basis conversions separately. | cp_acceptance; cp_cohorts; original_eventIDs | original Q and physical bridge | `grace-single-hole-2015` |
| `cohort_attribution` | all inventory rows | Construct attributableA from actual openingWIP historical vectors plus incurred period loads including failure/rework, less evidenced closingWIP carry and separately traced dispositions; later services retain original cohorts/Q. No duplicated provider-embedded history. Physical transfers and all stocks remain full independently of A. | cp_cohorts; cp_materials; cp_utilities; cp_recovery; cp_assets | attributable A by original cohort and provider unit | `ilcd-allocation-2010` |
| `normalize_cohort` | all inventory rows | For each modelled exchange, divide attributable actualA in its compatible provider unit by the original positive Q inkg exactly once; output flat_strip isQ/Q=1kg. Raw whole wasteQt and physical analyticalQt/Qanalysis do not automatically equal each cohortA/Q treatment demand. Zero/unknownQ keeps raw totals unresolved. | A; Q; cp_cohorts; cp_acceptance | exchange amount per1kg reference flow | `ilcd-allocation-2010` |
| `physical_elements_water` | all inventory rows | Maintain independent whole-mass and C/S/Na/Zn balances plus actual cellulose, solute, species, moisture and finish subledgers. Cellulose/xanthate, CS2, H2S, acid/alkali and bleach are reactive; do not conserve each reacting species across the plant. Free water in supplied solutions, steam/condensate, evaporated water, crystal water and actual reaction-water formation/consumption require distinct evidence and actual reaction extents. Do not infer two unknowns from a fitted closure or force theoretical chemistry to supply a recipe/yield. Gas amounts use concentration times matched integrated gas volume, or integration of a measured rate; never multiply an integrated volume by time again. COD is an indicator, not a specific organic species or extra wastewater mass. | cp_materials; cp_recovery; cp_species; cp_assets | whole physical/elemental/species/water balances and uncertainty | `jrc-polymers-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| scope_native | reference and each actual lot | Establish actual complete product/geometry/route/washed-finished gate fit without a component proxy or hidden hardfield override. | cp_acceptance; complete native admission in section9 |
| whole_route | all actual producers | No omitted known hardware, recovery, chemicals, treatment or utilities; complete linkage and added atomic rows for every genuinely present exchange. | cp_materials; cp_utilities; cp_recovery; cp_species |
| three_ledgers | stocks, Q and service vectors | Independently conserve full physical stocks/transfers, original acceptance events and nonoverlapping attributable environmental/provider-service vectors. | cp_acceptance; cp_cohorts; cp_assets |
| source_limits | sources and quantities | Keep all full source qualifications and contrary evidence; no patent/report/BREF number becomes a recipe, yield, factor, inventory default or proof of provider availability. | section9; source originals; actual methods/provider records |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_geometry_gate` | Verify actual finished qualifying strip geometry and full source/native/hardware/gate admission, without assumed thickness,µm correction or commercial SKU transfer. | `wco-hs2022-ch54`; `grace-single-hole-2015` |
| `validate_whole_route` | Check full production/recovery/utility/treatment/material/species interfaces and real linked producers; resolve actual missing atomic identities/methods before study qualification. | `jrc-polymers-2007` |
| `validate_event_vectors` | Check all three ledgers, original positive Q, full physical bridge/history and exactly one attributable division; preserve full contaminated waste and nonduplicated provider demand. | `ilcd-allocation-2010` |
| `validate_source_context` | Retain every complete applicability/accounting paragraph below, in both language projections; source summaries alone are insufficient. | `grace-single-hole-2015`; `grace-flat-counterexample-2015`; `jrc-polymers-2007` |

### Complete applicability and accounting context

The bounded subtype is the actually reported cotton-pulp, single-hole, flat viscose element of CN103233289B example6:1mm width and100D fineness. Example6 explicitly inherits example1, including cotton pulp, solution preparation, metered single-hole coagulation and desulfurization, bleaching, oiling and drying. Claim1 of that same original explicitly describes a circular orifice with a parabolic entry channel. Both source statements remain applicable context: a circular orifice with a reported flat product is an unexplained combination, not a demonstrated physical impossibility. No shaped-die substitution, undocumented forming operation or invented explanation is authorized. Actual lot evidence must establish the reported form and actual hardware/route; a source label alone cannot qualify a different geometry. Sources:`grace-single-hole-2015`.

Artificial here means dissolution/regeneration or chemical modification of a natural organic polymer, not merely man-made material. The selected classification argument uses the artificial-strip branch: actual apparent width must not exceed5mm. The separate monofilament branch additionally requires≥67dtex and no cross-sectional dimension>1mm; do not use an unknown thickness to claim that branch. The reported100D is100g/9000m and therefore1000/9dtex exactly; this conversion describes only that case, not a compulsory grade or recipe. Measure actual lot fineness and apparent width at the declared finished state. Do not derive width/thickness from assumed density, denier, flatness or spinneret-hole dimensions. Sources:`wco-hs2022-ch54`;`grace-single-hole-2015`.

The other flat patent CN103215679B really prints millimetres: claim7 gives3–60mm and every worked example gives10–60mm. It does not establish a qualifying narrow worked strip, and its die geometry must not be spliced into the selected embodiment. Grace’s2023 report independently establishes a real333.3–4440dtex/1f flat-viscose family, but no finished width/thickness or exact patent/SKU/factory identity. Manufacturer-family association is not SKU or factory equivalence. No report capacity, patent operating condition, tensile result, moisture, yield, recovery factor or commercial cone weight becomes a default. Sources:`grace-flat-counterexample-2015`;`grace-products-2023`;`grace-single-hole-2015`.

The bound whole Product is Regenerated cellulose continuous filaments, with actual native Washed and At plant name components; its official Chinese baseName is 再生纤维素连续长丝. Native CPC26190 and preserved source399 are contrary classification metadata retained as unresolved debt, not silently corrected. This broad identity does not specify single-element count, strip width/thickness, cotton origin, viscose versus other regenerated route, drying, oil finish, moisture, supplier or geography. Admission requires actual evidence that the whole terminal product is this regenerated-cellulose continuous single flat element at the declared plant gate, has undergone washing plus the selected finishing chain and matches its actual composition/state. Washed does not prove wet or dry, nor establish a final gate. Do not bind a pure cellulose component, washed intermediate or a different provider’s geography/route to override a hard native field.

Retain the whole actual route from purchased cotton dissolving pulp through alkalisation/pressing/ageing, CS2 xanthation, aqueous-NaOH dissolution, ripening, degassing and filtration, single-hole acid/sulfate/zinc-sulfate coagulation, washing/desulfurization, hydrogen-peroxide bleaching, actual oil finishing, drying and winding. Actual solution recipes and finishing formulation remain measured provider/lot facts. JRC’s wood/multihole and staple examples are technical context, not this single-hole cotton formulation; no staple cutting, sodium-sulfide/hypochlorite substitution or11%moisture is prescribed. Purchased whole aqueous chemicals/finish are weighed once, with assays/water as nested components, never duplicate neat inputs. Cotton pulp requires complete actual upstream production and transport burdens; native cellulose is not its whole-pulp provider proxy. Sources:`jrc-polymers-2007`;`grace-single-hole-2015`.

Actual recovery, ventilation, vacuum, cooling, bath recirculation, effluent treatment and finishing auxiliaries remain included with their real loads and outlets. CS2 condensation, carbon adsorption, H2S washing/oxidation, salt crystallisation or zinc precipitation are alternative source examples, not assumed installed equipment or efficiencies. Internal recovered CS2, bath liquor and water circulate with separate whole-stream/component/stock ledgers and cancel at the consolidated boundary; only actual fresh imports and external exports are exchanges. A recovered sale product requires actual chemical form, hydrate/purity, water and market function; no presumed salt/sulfur output or avoided-production credit. Add every genuinely present reagent, fuel, adsorbent, catalyst, chemical, waste and emission as its own atomic row before study qualification. Sources:`jrc-polymers-2007`;`ilcd-allocation-2010`.

Utility and treatment producers require complete actual linkage: actual steam/electricity/cooling interfaces and full producer burdens, without assuming a public generic provider is qualified. Where an on-site recovery, combustion, sulfur-control or wastewater unit is separately modelled, retain matched whole gas/liquid/condensate send/receive measurements, composition and complete reagent/fuel/air/water/energy/emission/waste inventories. This is a linked complete producer, not an off-site assertion or a zero/truncated disposal stub. Actual combustion needs supported air/O2, generated water, carbon/sulfur/nitrogen species and heat interfaces. Do not omit known hardware to fit a purchased-utility label. Sources:`jrc-polymers-2007`.

Maintain three independent accounts: full physical transfers/stocks, unique first-acceptance reference events Q, and attributable environmental/service vectors. Lock each event’s original net mass and declared moisture/finish basis after complete drying/finishing quality acceptance at the chosen plant gate. Q is the positive sum of unique original events, not another physical output. Reinspection, returns, rewinding, rework and reshipment create no second event. Later moisture/finish gains and losses are actual physical changes, not grounds to restore lost mass into a survivor and also count the loss. Different actual states require explicit component-basis conversion with independent measured evidence.

The general postgate bridge partitions the original accepted basis into disjoint net remaining deliveries, every actual on-site accepted state, irreversible losses and other terminal dispositions; gross loops and returns cancel by original genealogy. Delivery plus closing stock is sufficient only when no other states/exits exist. Full actual raw/WIP/finished/container/asset stocks and all physical transfers remain recorded separately, including inherited preperiod production history. Attribute actual opening WIP vectors and all incurred failed/zero-output/rework loads once; carry substantiated closing WIP vectors to their future cohort and keep postgate services with the original accepted cohort/Q. An aggregate upstream provider already embedding a history must not be added to the decomposed same history. Zero or unknown Q preserves raw totals and unresolved results, never division or deletion.

Maintain independent whole-mass and C/S/Na/Zn balances plus actual cellulose, solute, species, moisture and finish subledgers. Cellulose/xanthate, CS2, H2S, acid/alkali and bleach are reactive; do not conserve each reacting species across the plant. Free water in supplied solutions, steam/condensate, evaporated water, crystal water and actual reaction-water formation/consumption require distinct evidence and actual reaction extents. Do not infer two unknowns from a fitted closure or force theoretical chemistry to supply a recipe/yield. Gas amounts use concentration times matched integrated gas volume, or integration of a measured rate; never multiply an integrated volume by time again. COD is an indicator, not a specific organic species or extra wastewater mass.

At every actual final environmental outlet, identify each emitted species and medium separately after real controls. Raw gas sent to a treatment producer is one whole physical interface with nested composition, not an air emission of the same CS2/H2S again; final receiver/provider releases belong once. The same applies to wastewater transferred for treatment versus actual final water discharges and their zinc/sulfate subledgers. Preserve actual recovery losses, fugitive and upset sources, carrier air and water evidence. Unknown specific identity, provider or sampling uncertainty remains open and must be resolved for the concrete study, without zeros, fixed abatement rates or fabricated closure emissions. Sources:`jrc-polymers-2007`.

Included winding bobbins and filtration cloth are whole service articles with actual material/dimension/mass/stock histories, not assumed per-item weights or lives. Record received, returned, installed, spare, delivered, scrapped and retained whole articles and all contaminated receiver transfers. One discarded contaminated cloth/bobbin includes substrate, retained viscose/finish/liquor and water exactly once. Dry substrate and contaminants are nested components, not separately fabricated waste exchanges unless physically separated before the boundary. Product net Q excludes every article/tare; all genuine additional packaging materials must have separate delivered/returned/scrapped interfaces before dataset qualification.

For shared articles/waste, record the actual one whole receiver transfer and full actual treatment-provider quantity once, separately from known physical cohort/component provenance and evidenced nonoverlapping per-cohort service/burden vectors. The modelled amount is attributable A/Q, while the whole physical amount is Qt and its analytical display Qt/Qanalysis; Qt/Qanalysis is not automatically each cohort’s treatment demand. Full physical composition remains at the provider interface even when burden shares differ. No service share shrinks actual exported mass or recharges the full transfer to every cohort. Unknown share, compatible provider unit, prior cohort or nonoverlap remains unresolved.

Synthetic accounting test only, not empirical default: one actual contaminated filter10kg contains8kg substrate and2kg retained pigment and serves old/new cohorts. A supported25%new/75%old treatment-service split gives2.5kg-equivalent and7.5kg-equivalent demands (or corresponding burden vectors) with compatible provider units; newQ100/oldQ200 gives0.025/0.0375kg-equivalent per reference. The receiver still gets10kg once. No2.5kg physical export, extra2kg powder exchange, duplicate10kg demand, assumed fraction or lifetime is created. Apply this precision to sack/bobbin waste only when its actual shared history warrants it.

Avoid allocation by actual subdivision/direct attribution where possible. Assign remaining exchanges by demonstrated determining physical causality, separately for each exchange and served function; use justified exit-state market values only for residual multifunctionality lacking such a relation. Internal recovery, returned bobbins, waste treatment, stock carry and failed output are not automatic coproducts or substitution credits. Preserve all actual physical coproduct and waste quantities regardless of environmental shares, and disclose provider scope, time/geography and sensitivity. Sources:`ilcd-allocation-2010`;`jrc-polymers-2007`.

Complete reported claim1 context, CN103233289B PDF2 (source description only, all numbers are reported conditions/performance and never defaults): cellulose-fibre pulp is the raw material; solution preparation—spinning—post-treatment obtains a single viscose element. A: pulp is steeped, aged, xanthated, dissolved, degassed and filtered; solution alpha-cellulose6–10%, alkali5–7g/L, viscosity40–70s, ripeness4–8mL. B: feed piping conveys solution to the spinning machine, a metering pump doses it through a single-hole spinneret under pressure into a thin stream and coagulation bath to form raw strand; jet stretch+60%–+80%; parabolic entry-channel shape; spinning30–80m/min; the orifice is circular and entry-channel length/orifice diameter ratio1.0–1.5:1. C: desulfurization, bleaching, oiling and drying give viscose monofilament; reported fineness50–6000D, strength≥75cN, dry breaking tenacity1.5–2.0cN/dtex, wet1.0–1.5cN/dtex, dry break elongation15–20%. This complete circular-hole qualification is preserved without converting source operating ranges into required process settings or performance promises. Sources:`grace-single-hole-2015`.

Complete reported example1 context, CN103233289B PDF5 paragraphs0036–0048 (source description only): cellulose pulp undergoes solution preparation, spinning and post-treatment to form a single viscose element; solution preparation is steeping, ageing, xanthation, dissolution, degassing and filtration. Metered solution is fed by pipe/pump through a single-hole spinneret under pressure into a thin stream and coagulation bath. Reported jet stretch+60%, parabolic entry channel and spinning30m/min. Raw strand is desulfurized, bleached, oiled and dried. Pulp is cotton pulp. The reported product is70D, strength75CN, dry breaking tenacity1.5CN/dtex, wet1.0CN/dtex and dry break elongation15%. Original uppercaseCN notation is retained as reported, without a performance conversion or default. Example6 inherits this full route and cotton origin while changing its specifically stated conditions/product; it does not inherit the wood/bamboo origins of examples2/3. Sources:`grace-single-hole-2015`.

Complete reported example6 context, CN103233289B PDF6 paragraphs0079–0085 (source description only): “basically the same as example1, on this basis” the entry channel is parabolic; jet stretch+76%; spinning65m/min; coagulation bath sulfuric acid100g/L, sodium sulfate200g/L, zinc sulfate20g/L and40°C. The obtained viscose monofilament is flat, width1mm, fineness100D, strength78CN, dry breaking tenacity1.8CN/dtex, wet1.3CN/dtex and dry break elongation16%. These are one reported embodiment’s conditions and claims, not measured current industrial inventory, lot acceptance tolerances, recipe/yield defaults or automatic site/SKU proof. Lot qualification must document its actual measured geometry/state and matching full route, and disclose any departure needing independent evidence; the original width cannot be silently changed to micrometres. Sources:`grace-single-hole-2015`.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual matching narrow finished flat-viscose strip with complete qualified suppliers/linked producers and study evidence. |
| excluded_use | All-artificial market average; other routes/forms; food/medical/certification claims; unresolved actual core identity/method or provider fit. |
| required_metadata | All ordered qualifiers, actual site/time/geography, original gate/Q, full source/native qualifications, formulation/moisture, stocks/history, species/water and linked-provider boundary. |
| required_quality_disclosure | Actual methods/uncertainty, unresolved specific UUIDs/provider units, missing history or shares, source limitations and independent review/study status. |
| update_trigger | Change of route/hardware/form/state/gate/finish/geometry/provider or material new source/analytical evidence. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | United Nations, CPC Version3.0 Explanatory Notes,30June2025, complete page175,35550/3556/35560. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current35560 title and adjacent filament-yarn context. This page gives no numerical geometry definition and establishes no accepted PCR mapping. |
| `wco-hs2022-ch54` | official_guidance | WCO, HS2022 Chapter54, Note1 and heading5405. https://www.wcotradetools.org/en/harmonized-system/2022/en/1154 | Artificial/synthetic distinction; separate monofilament≥67dtex and maximum cross-sectional dimension≤1mm branch versus strip apparentwidth≤5mm branch. Classification limits are not plant operating or inventory defaults. |
| `grace-products-2023` | literature | 宜宾丝丽雅股份有限公司,2023可持续发展报告, PDF8/printed11–12,雅菲特长丝/Raffia product table. https://www.cn-grace.com/Uploadfiles/Files/2024-8-27/20248271758132479.pdf | Real333.3–4440dtex/1f flat viscose product family. No width/thickness or patent/SKU/factory linkage; left-hand ordinary filament capacities cannot be transferred to this family. Capacity is not inventory/yield. |
| `grace-single-hole-2015` | literature | CN103233289B,一种粘胶单丝的生产工艺,22April2015, claim1 and complete examples1/6, paragraphs0036–0048/0079–0085,PDF2/5/6. https://patentimages.storage.googleapis.com/1d/56/76/e6731b38e838c6/CN103233289B.pdf | Primary reported flat1mm/100D embodiment, cotton-pulp inheritance, complete wet-spinning/desulfurization/bleaching/oiling/drying chain AND circular-orifice claim qualification. No invented forming mechanism, recipe/yield/performance default, or commercial-lot equivalence. |
| `grace-flat-counterexample-2015` | literature | CN103215679B,一种粘胶扁平单丝的生产工艺,11February2015, claim7 and worked examples1–14,PDF2/5–9. https://patentimages.storage.googleapis.com/83/48/27/6b6806ceebd8c5/CN103215679B.pdf | Original actually prints3–60mm claimed width and10–60mm worked widths. Not a micrometre typo or proof of a≤5mm worked strip; its shaped die is not spliced into CN103233289B. |
| `jrc-polymers-2007` | official_guidance | European Commission, Reference Document on BAT in the Production of Polymers,August2007,§§11.2.1/11.2.3/11.3,Figure11.1,§§12.7.2–12.7.7. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | Independent viscose chemistry, filament-versus-staple branch, washing/finishing/drying, CS2/H2S recovery, salt/zinc/wastewater and utility interfaces. Wood pulp/multihole examples do not replace the cotton/single-hole case; staple Na2S/NaOCl,11%moisture and all historical numbers are not this route defaults. |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC,ILCD Handbook: General guide for LCA—Detailed guidance,FirsteditionMarch2010,§7.9.3.1–7.9.3.2,printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation: subdivision/direct attribution then exchange-specific determining physical causality; otherwise justified market values of cofunctions at their actual exit condition. No universal mass/equal/recovery credit rule. |
