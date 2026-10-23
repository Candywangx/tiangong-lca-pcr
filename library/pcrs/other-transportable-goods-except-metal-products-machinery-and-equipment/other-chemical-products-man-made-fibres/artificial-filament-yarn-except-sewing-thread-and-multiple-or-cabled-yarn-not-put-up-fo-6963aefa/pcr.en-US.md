---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-filament-yarn-except-sewing-thread-and-multiple-or-cabled-yarn-not-put-up-fo-6963aefa
language: en-US
status: candidate
translation_status: canonical
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Undyed bright single viscose continuous-filament yarn, industrial delivery

## 1. Scope and Applicability

This methodology covers a single industrial xanthate-route product boundary, not an entire classification leaf. JRC describes continuous viscose filament manufacture; ENKA independently establishes real commercial continuous-filament supply. These sources are a bounded technical synthesis, not a claim that one SKU/plant supplied every process parameter. The terminal reference is actual net accepted yarn delivery. Retail rewinding, multiple/cabled yarn manufacture, staple spinning and finished-fabric rules cover different transformations. [Sources: `jrc-polymers-2007`; `enka-filament-products`; `enka-industrial-recovery`.]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.artificial-filament-yarn-except-sewing-thread-and-multiple-or-cabled-yarn-not-put-up-fo-6963aefa |
| classification_refs | CPC 3.0 35550; narrower route-specific methodology, mapping acceptance separate |
| covered_products | Undyed bright single viscose continuous-filament yarn made from wood dissolving pulp through NaOH/CS2 xanthation and continuous acid-bath wet spinning, delivered in industrial packages |
| excluded_products | Staple-cut then respun yarn; tow/staple feedstock including CPC 35540; lyocell/NMMO, acetate, cupro and synthetic-polymer yarn routes; dope-dyed/delustered grades; sewing thread; multiple/cabled yarn; retail put-up; tyre cord; polymer resin or unspun dope as terminal output |
| representative_product | Washed, finished, dried and wound bright viscose single continuous-filament textile yarn for subsequent weaving/knitting; actual titre and filament count declared, not fixed from a catalogue example |
| production_route | Wood pulp receipt -> alkalisation/pressing and liquor return -> ripening/xanthation -> dissolution/filtering/deaeration -> continuous acidic wet spinning -> washing/finishing/drying/winding -> quality release P -> conditioned finished stock/packing/handling -> actual accepted dispatch Q; retain gas/liquid recovery and treatment |
| market_state | Actual accepted industrial net yarn delivery at producing-site dispatch gate, including declared stored-stock history; excludes downstream external distribution and fabric conversion |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply undyed bright single viscose continuous-filament yarn for downstream textile processing |
| How much | 1 kg net actual accepted industrial delivery |
| How well | Declared titre/filament count/tenacity/twist and one verified conditioning, moisture and spinfinish basis; no assumed standard regain |
| How long or cycle | One declared delivered cohort with full production/WIP/stock history; no yarn service lifetime assumed |
| reference_flow_link | delivered_yarn |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Artificial filament yarn (except sewing thread and multiple or cabled yarn), not put up for retail sale `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | viscose NaOH/CS2 xanthate continuous wet-spinning route; undyed bright single continuous-filament industrial yarn excluding sewing thread and excluding multiple/cabled yarn and excluding retail put-up; declared linear density dtex and filament count and cross-section and tenacity and twist state; one declared conditioning temperature/RH/time and actual delivered moisture/finish basis; measured net yarn mass with tubes/cartons/film tare excluded; actual net delivery gate Q with unique acceptance cohort and reporting interval with P tracked separately; opening/closing WIP and finished-stock quantities and carried exchange vectors including failed runs/returns/rework; actual plant/geography and supplied solution assays and recovery systems and coproduct form and effluent receiver |

Declare every qualifier in the concrete dataset. The native reference is a manufactured finished Product flow, production mix at plant, with no CAS, geography/locationOfSupply, fixed route/grade, titre, conditioning regime or supplier. It is compatible as a generic reference identity only and does not prove ENKA provenance or quantity. The restrictions are retained in every UUID-bearing inventory card.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net delivered yarn at one declared conditioning/moisture/finish basis, excluding tube and all packaging tare. Record actual moisture and retained spin finish; do not silently report dry cellulose as conditioned yarn. |
| `titre_check` | reference product | Mass | kg | dtex means grams per 10000 m; mass_kg = dtex * length_m / 10000000 only for the same verified conditioning, finish and net-yarn basis. Filament count does not multiply total yarn titre again; use weighing as the controlling net-delivery record and treat unsupported length conversion as a gap. |
| `supplied_form` | all inventory rows | Mass; Energy | kg; kWh; MJ | Whole commercial solutions/emulsions/pulp cross the boundary at actual supplied mass; active solute, cellulose and water are subledgers. Convert raw units before the single normalize_delivery operation. Integrate a rate over duration; never multiply already integrated volumes by time. Density, heating value and assay require independent actual-condition evidence, not an unrelated native property factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased wood dissolving pulp and complete commercial chemical formulations at receipt, with actual upstream cradle-to-supply burdens and inbound transport; historical opening WIP/stock carried explicitly |
| starting_condition_role | Foreground transformation plus finished-stock dispatch; upstream supply remains linked background |
| product_classification_scope | Artificial continuous filament single yarn only; do not expand to all CPC 35550 routes or CPC 35540 tow/staple |
| recursive_input_rule | Same-category returned/rework yarn retains its original process history and measured remaining burdens; count only new external purchases, cancel internal transfers and never regenerate accepted production by reinspection |
| upstream_dataset_requirement | Match actual supplied pulp/solution/finish/utility form, concentration, geography, technology, age and provider; generic reference identity is insufficient provider proof |
| disclosure | Declare allocation, stock/cohort method, conditioning basis, included auxiliary systems, external wastewater treatment and materiality exclusions; no default yield or recovery factor |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_route` | Include all actual operations through dispatch, including pulp preparation, NaOH/CS2 chemistry, bath/wash/finish, evaporation/drying/winding, rejected runs, cooling, recovery, treatment, conditioning, warehouse dwell, packaging, handling and dispatch. Add separate atomic exchanges for any actually used auxiliary, fuel, refrigerant leak or packaging not listed; no silently omitted burden. | `jrc-polymers-2007`; `enka-filament-products`; `enka-industrial-recovery` |
| `boundary_recovery` | Measure CS2 condensation and any actual H2S scrubbing/CS2 adsorption, recovered press liquor, bath reconcentration, wash water and condensate as internal cycles with their real energy/material burdens. Retain inlet/outlet composition, losses and stock changes; no fresh purchase or exported credit for internal recovery. Alternative oxidation-to-acid treatment is outside this selected recovery configuration and requires explicit separate species/oxygen/water evidence. | `jrc-polymers-2007` |
| `boundary_delivery` | The terminal gate is actual net accepted delivery Q, not production release P. Finished inventory is a separate account. Keep opening/closing finished stock and historical burdens; undelivered stock is not in Q. Production release P is recorded once without adding the same batch closing finished stock as another production output. Consolidation cancels released_yarn/stock_yarn and other internal transfers, preserving all real warehouse/rework/dispatch burdens. | `enka-filament-products` |
| `boundary_species` | Close complete physical mass and C/S/Na/Zn balances on unnormalised actual production and warehouse ledgers independently of LCA burden allocation. Use measured inlet/outlet species and independently evidenced reaction extents, including actual neutralisation water where proven; do not infer actual species or reaction water from COD, total sulphur, assumed yields or a closure residual. Distinguish free/retained/structural water and phase changes from chemical formation/consumption. | `jrc-polymers-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `viscose_line` | Integrated viscose filament production and recovery | required | Selected continuous xanthate wet-spinning route; actual auxiliary configurations declared | manufacturing; internal P transfer | Raw P kg newly released, not terminal Q |
| `dispatch` | Conditioned stock, packaging and actual dispatch | required | Same route/grade/cohort with full opening/closing stock history | terminal supply gate | 1 kg net delivered reference flow |

### Process: Integrated viscose filament production and recovery (`viscose_line`)

#### Inputs

##### Product flows

###### Dissolving pulp supply (`wood_pulp`)

Record the complete purchased pulp sheet mass as supplied, its dry solids, cellulose assay, moisture and transport. Dry cellulose and water are composition subledgers, not additional purchases; do not substitute polymer resin or purchased staple yarn.

- Selected flow: Wood dissolving pulp
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `enka-filament-products`

###### Fresh caustic supply (`caustic_solution`)

Use full purchased solution mass and actual NaOH assay for alkalisation, dissolution and gas scrubbing. Recovered press liquor is an internal circulating stream; retain its measured mass, composition, stock and recovery burdens without charging fresh purchase twice.

- Selected flow: Aqueous sodium hydroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Fresh xanthation reagent (`carbon_disulphide`)

Separate newly purchased CS2 from recovered CS2 returned to xanthation. Record liquid mass, purity, tank changes and route. Recovery is not an avoided virgin-product credit.

- Selected flow: Liquid carbon disulphide
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Spinning bath acid makeup (`sulphuric_acid`)

Record whole supplied sulphuric acid solution, assay and carrier water. Actual bath composition and neutralisation extent need independent analytical evidence; do not infer acid identity from the ambiguous Hydrogene Sulphate label in the manufacturer comparison table.

- Selected flow: Aqueous sulphuric acid solution
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `enka-consumption-context`

###### Bath salt makeup (`sodium_sulphate`)

Include only actual externally acquired anhydrous Na2SO4 makeup; record purity. Internally formed or recovered sodium sulphate stays in the circulation ledger; no duplicate purchased salt or generic yield is assumed. A different supplied hydrate requires its own explicit row.

- Selected flow: Anhydrous sodium sulphate
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Zinc bath additive (`zinc_sulphate`)

Record the complete acquired solution and ZnSO4/Zn assays, water and supplier form; do not treat zinc-element mass as the purchased formulation. If mixed onsite, replace this purchase with each actual acquired ingredient and retain blending energy/losses.

- Selected flow: Aqueous zinc sulphate solution
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `enka-consumption-context`

###### Desulphurisation solution (`sodium_sulphide`)

Conditional on actual use in filament washing/desulphurisation; retain whole supplied mass, assay and bath losses. The staple-fibre example is not evidence that every filament line uses this reagent; documented absence is required for zero.

- Selected flow: Aqueous sodium sulphide solution
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Filament spin finish (`spinfinish_emulsion`)

One actual purchased commercial finish emulsion, with supplier identity, complete formulation mass, active content, carrier water, retained finish and wash-off records. Constituents are subledgers, not repeat purchases; onsite blending instead records each acquired ingredient and actual mixing burdens.

- Selected flow: Aqueous viscose-filament spin-finish emulsion
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `enka-consumption-context`

###### Conditional filament bleaching (`hypochlorite_solution`)

Only if actually used for the declared undyed bright yarn. Keep purchased solution mass and active chlorine assay; the ENKA comparison gives no basis to impose a positive rate, and its BREF comparator shows zero.

- Selected flow: Aqueous sodium hypochlorite solution
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`; `enka-consumption-context`

###### Purchased process water (`process_water`)

Meter fresh external process water once. Formulation carrier water, pulp moisture, condensate and recovered wash water are separate composition/circulation records; an already integrated volume is not multiplied by duration.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

###### Line and recovery electricity (`electricity_line`)

Include actual preparation, filtration/vacuum, continuous spinning, washing, drying, winding, gas/liquid recovery, cooling and effluent pretreatment electricity, including failed runs and standby attributable to the cohort. Retain submeter transfers without duplicating utility totals.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `enka-industrial-recovery`

###### Purchased line and recovery steam (`steam_line`)

Collect net supplied steam energy at actual pressure/temperature and condensate return, separately from electricity. Include evaporation, drying and adsorbent regeneration if used. ENKA Obernburg CHP is a specific source example, not a universal provider.

- Selected flow: Process steam
- Flow property / unit: Energy / MJ
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`; `enka-industrial-recovery`

###### Gas recovery adsorbent replacement (`activated_carbon`)

Conditional on an actual CS2 adsorption polishing unit after appropriate H2S removal. Include acquired replacement carbon, regeneration steam and losses. No fixed recovery efficiency or universal adsorption installation is imposed.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Conditional zinc precipitation reagent (`lime_slurry`)

Only for actual onsite zinc precipitation before wastewater transfer. Record whole purchased slurry and solids; separately acquired onsite ingredients replace the slurry purchase. Do not apply reference-plant pH, removal or sludge rates.

- Selected flow: Calcium hydroxide slurry
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_materials.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `jrc-polymers-2007`

###### Conditional salt drying fuel (`dryer_natural_gas`)

Include actual gas use if recovered salt is directly fuel-dried onsite. Preserve measured integrated volume, reference pressure/temperature and independently supported heating value; a flow property coefficient is not gas density. Purchased steam does not include this direct fuel twice.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_utilities.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `jrc-polymers-2007`

#### Outputs

##### Product flows

###### Newly released yarn transfer P (`released_yarn`)

Actual newly quality-released single continuous viscose yarn transferred to finished stock; report P and its full carried exchange vector, not delivery Q. Reinspection of returned yarn is not new P. The native identity is finished manufactured product, production mix at plant, with no CAS, geography/locationOfSupply, fixed grade, titre or supplier specified; it does not establish ENKA provenance. Use only the declared undyed bright xanthate-route yarn, not staple yarn, resin, sewing thread, multiple/cabled or retail yarn.

- Selected flow: Artificial filament yarn (except sewing thread and multiple or cabled yarn), not put up for retail sale `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `jrc-polymers-2007`; `enka-filament-products`

###### Conditional saleable recovered salt (`recovered_salt`)

Only actual externally supplied dry anhydrous Na2SO4 after recovery and drying; measure moisture/purity and all separation/drying burdens. Glauber-salt crystallisation is not proof of this final dry form. If sold as decahydrate, use a separate correctly specified hydrate row and structural-water ledger, never this row or a guessed conversion.

- Selected flow: Recovered anhydrous sodium sulphate
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

##### Waste flows

###### Wastewater to external treatment (`wastewater_transfer`)

Record the actual transferred aqueous stream mass, water fraction, dissolved sulphate, zinc, residual CS2/H2S and measured organics with receiver/treatment burdens. COD is a quality indicator, not an emitted chemical mass. Do not also report the external works final emissions as direct plant emissions.

- Selected flow: Viscose-process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Conditional onsite zinc sludge (`zinc_sludge`)

Only if actually generated onsite; retain wet mass, dry solids, zinc speciation and receiver. The sludge mixture is one physical waste stream, not purchased ZnSO4 or saleable zinc; include dewatering and actual treatment.

- Selected flow: Zinc-bearing wastewater-pretreatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Cellulose filtration residue (`pulp_filter_residue`)

Record one actual dope-filter residue stream with cellulose, liquor and contamination assays plus treatment; no residual mass is invented to close the balance.

- Selected flow: Viscose-dope filtration residue
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Discarded viscose yarn (`waste_yarn`)

Include spinning breaks, unrecoverable off-grade output and failed-run waste on the same conditioned mass basis; trace any rework separately. Rework retains earlier burdens and is not both waste export and recovered product.

- Selected flow: Discarded viscose filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `jrc-polymers-2007`

###### Spent recovery adsorbent (`spent_carbon`)

Conditional actual replacement waste; retain sorbed sulphur compounds, moisture, destination and treatment. Internal steam regeneration is not a fresh-carbon purchase or a waste export.

- Selected flow: Spent CS2-recovery activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

##### Elementary flows

###### Residual CS2 to air (`cs2_air`)

Measure residual post-control and fugitive CS2 by concentration and matched actual gas volume or integrate rate over time; do not count captured gas recycled internally as an atmospheric emission. Distinguish CS2 mass from mass expressed as S.

- Selected flow: Carbon disulphide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Residual H2S to air (`h2s_air`)

Use independently measured actual residual H2S; do not infer it from total sulphur, COD, CS2 feed loss or a mass closure residual. Preserve the abatement inlet/outlet and scrubber transfer subledgers.

- Selected flow: Hydrogen sulphide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Actual evaporated water (`water_vapour`)

Separate actual evaporated water from retained fibre moisture, supplied carrier water, condensate, structural water in salts and independently evidenced chemical reaction water. Unknown reaction water and unknown evaporation cannot both be fitted to one residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Fossil carbon dioxide to air (`dryer_co2`)

Conditional on actual onsite combustion; collect this actual species independently with gas analysis/validated fuel-specific balance, including units and abatement. Do not label a total NOx or total sulphur measurement as this species without supported conversion/speciation.

- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Sulphur dioxide to air (`dryer_so2`)

Conditional on actual onsite combustion; collect this actual species independently with gas analysis/validated fuel-specific balance, including units and abatement. Do not label a total NOx or total sulphur measurement as this species without supported conversion/speciation.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Nitrogen monoxide to air (`dryer_no`)

Conditional on actual onsite combustion; collect this actual species independently with gas analysis/validated fuel-specific balance, including units and abatement. Do not label a total NOx or total sulphur measurement as this species without supported conversion/speciation.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

###### Nitrogen dioxide to air (`dryer_no2`)

Conditional on actual onsite combustion; collect this actual species independently with gas analysis/validated fuel-specific balance, including units and abatement. Do not label a total NOx or total sulphur measurement as this species without supported conversion/speciation.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_recovery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovery`
- Sources: `jrc-polymers-2007`

### Process: Conditioned stock, packaging and actual dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Released yarn received for stock (`stock_yarn`)

Receive the same physical P transfer as released_yarn with the same full carried burdens; cancel both internal transfer sides on consolidation. Opening finished stock has actual historical route/grade/state-matched exchange vectors; it is not burden-free. Native identity is generic finished manufactured product, production mix at plant, no CAS, geography/locationOfSupply, fixed grade, titre or supplier. It establishes neither supplier nor ENKA geography.

- Selected flow: Artificial filament yarn (except sewing thread and multiple or cabled yarn), not put up for retail sale `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_delivery.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_delivery`
- Sources: `enka-filament-products`; `jrc-polymers-2007`

###### Industrial winding tube (`paper_tube`)

Record actual tube mass and reuse turns/returns. Tube tare is excluded from yarn Q but its manufacture and allocated replacement burdens are included.

- Selected flow: Paperboard winding tube
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Shipping carton (`carton`)

One actual industrial transport carton, weighed separately from yarn and other packaging. This does not turn the yarn into retail put-up.

- Selected flow: Corrugated fibreboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Protective film (`polyethylene_film`)

Record actual polyethylene film mass and losses separately; packaging is never part of net yarn delivery mass.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Conditioning storage and handling electricity (`electricity_dispatch`)

Include actual conditioning, warehouse dwell, winding/packing if done here, internal electric handling, inspection, returns/rework and dispatch electricity. Reconcile line/warehouse meter boundaries to prevent deletion or duplication.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`; `enka-industrial-recovery`

#### Outputs

##### Product flows

###### Actual accepted industrial delivery Q (`delivered_yarn`)

Terminal reference: actual unique positive net delivered single undyed bright viscose continuous-filament yarn at the dispatch gate, excluding tare and undelivered stock. Q is not newly released P. Count a returned and reshipped physical quantity once after acceptance. Native name comprises finished product manufactured and production mix at plant; no CAS, geography/locationOfSupply, fixed route/grade, titre or supplier is specified. This generic identity alone does not prove a provider, ENKA source or a specific conditioning regime. Declare the xanthate wet-spun route, single industrial non-retail form, measured titre/filament count, finish and moisture.

- Selected flow: Artificial filament yarn (except sewing thread and multiple or cabled yarn), not put up for retail sale `af18d089-ed9e-4dd9-b3e3-5f5decb6c61b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `identity_reference`
- Collection protocol: `cp_delivery`
- Sources: `jrc-polymers-2007`; `enka-filament-products`

##### Waste flows

###### Discarded stock yarn (`dispatch_waste_yarn`)

Actual damaged or rejected warehouse/dispatch yarn sent to treatment, separate from recoverable returns/rework and closing stock; retain carried burdens and treatment.

- Selected flow: Discarded viscose filament yarn
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Discarded packaging film (`waste_film`)

Actual film trim and damaged film with receiver/treatment, not combined with paper wastes.

- Selected flow: Discarded polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Discarded paperboard (`waste_paperboard`)

Record carton waste separately; a different paper-tube waste stream must receive its own row when generated.

- Selected flow: Discarded corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

###### Discarded winding tubes (`waste_tube`)

Actual non-returnable damaged paper tubes with reuse history and receiver; keep separate from cartons and returned reusable tubes.

- Selected flow: Discarded paperboard winding tube
- Flow property / unit: Mass / kg
- Amount rule: Attribute the raw quantity to this delivered cohort, then divide once by actual positively accepted net delivered yarn kg; cp_dispatch.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dispatch`
- Sources: `enka-filament-products`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_internal` | Recovered CS2, liquor and wash water reused inside the boundary receive no avoided-production credit; retain all recovery burdens and cancel internal exchanges on consolidation. | `jrc-polymers-2007` |
| `allocation_salt` | First separate actual salt-recovery/finishing-specific burdens and any other independently produced coproduct. For remaining common burdens document the defensible physical relationship; if none is established, use transparent contemporaneous market-value shares at the common process gate for actual marketable outputs with sensitivity analysis. Do not impose a numeric split, claim substitution, allocate to internal cycles or label untreated waste as a coproduct. | `jrc-polymers-2007`; `enka-industrial-recovery`; `ilcd-attributional-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_materials | viscose_line | Whole supplied materials and internal recovery subledgers | receipt, weighbridge, tank and assay records | lot; supplier; supplied mass; assay; carrier water; pulp dry solids; opening/closing chemical tanks; internal recovered amount and composition; failed runs; WIP masses and historical exchange vectors | Owner: production materials accountant with laboratory verification. Collect unnormalised actual period receipts/consumption/stock changes and complete formulation masses for every matched campaign, including failed/zero-release runs and rework. Keep assays and water as composition subledgers; collect internal streams and carried WIP burdens separately. Do not divide by P or Q during collection. | kg | each batch and reconciled reporting period | complete matched production campaigns plus opening WIP history | actual production plant and suppliers, separately identified | per 1 kg reference flow | calibrated weights; invoices; CoA; tank reconciliation; batch genealogy |
| cp_utilities | viscose_line | Actual line and auxiliary utility burdens | meter and operating logs | operation/submeter; raw electricity; steam flow/enthalpy; condensate; integrated gas volume or rate series; reference temperature/pressure; independent density/heating value; timestamps; failed-run/standby loads; WIP burden vectors | Owner: utilities engineer. Retain each unnormalised energy/volume numerator across production, vacuum, washing/drying, cooling, recovery, effluent pretreatment and any coproduct drying. Keep gross supply/returns and submeter reconciliation; collect actual failed/zero-output and rework energy plus opening/closing WIP carry. No collection-side normalization. | kWh; MJ; m3 | continuous meters; whole matched campaign | same production/WIP intervals as cp_materials | actual utility boundary and provider; no default ENKA CHP | per 1 kg reference flow | meter calibration; energy invoices; temperature/pressure; condensate and utility balance |
| cp_release | viscose_line | New acceptance P and production/WIP genealogy | quality release and rejected-batch ledger | unique lot/package; actual P net kg; failed/rejected run; return/rework origin; conditioning T/RH/time; moisture; finish; titre; filament count; tube tare; opening/closing WIP quantities and exchange vectors | Owner: quality release officer. Weigh accepted new yarn net of tare at the declared conditioning basis and retain complete failed/off-grade records. Track recovered/reworked material through original IDs; returned yarn reinspection is not new P. Collect unnormalised P, all WIP masses, original carried burdens and internal transfer receipts, without adding closing finished stock to P or dividing by Q. | kg; dtex | each release/rejection; reconciled period | complete campaigns including zero-positive-output periods | same manufacturing line and physical package IDs | per 1 kg reference flow | signed quality release; calibrated net weights; moisture/finish tests; full reject genealogy |
| cp_recovery | viscose_line | Recovery, coproducts, actual species and environmental exits | stream assay, gas monitoring and transfer notes | stream ID; raw mass/volume; gas flow and species concentrations; CS2/H2S separately; C/S/Na/Zn assay; wastewater composition; COD as indicator; salt hydrate/purity; sludge solids; free/structural water; independently evidenced reaction extents/water; opening/closing recovered-stream stocks; receiver | Owner: environmental/recovery engineer with analytical laboratory. Collect unnormalised inlet/outlet/recycle masses, actual species and water evidence independently, including abatement consumables, energy, wastes and external treatment burdens. Use concentration times matched integrated volume or rate integration with stated gas conditions; no extra duration factor on integrated volume. Do not infer reaction water or an unknown exit from a second unknown closure. | kg; m3; mg/m3 | matched sampling/continuous monitoring and each transfer | all matched campaigns, upset periods and recovery stock history | actual collection/recovery units and effluent receivers | per 1 kg reference flow | sampling/QC; calibration; actual reaction/species evidence; elemental/water closure; receiver treatment receipt |
| cp_delivery | dispatch | Actual unique supplied Q and finished-stock carry | dispatch/acceptance and finished-stock genealogy | physical lot/package; P receipt; gross shipments G; accepted returns R; unique accepted net delivered Q; opening/closing finished kg; carried exchange vectors; stock withdrawal/scrap; conditioning/moisture/finish; package tare | Owner: dispatch controller with stock accountant and customer acceptance records. Collect unnormalised actual deliveries/returns, opening/closing stock masses and historical exchange vectors matched to this route/grade/state. Weigh net yarn excluding all tare; distinguish shipment event from unique accepted physical output and do not count repeated reshipments twice. Retain P separately; do not assume P equals Q or treat undelivered stock as delivery. Returns restore the original carried burden and correct the original accepted-supply cohort when already counted; subsequent reinspection/reshipment is never a second positive output. No collection-side division. | kg | each dispatch/acceptance/return and opening/closing stocktake | declared actual delivery cohort and all preceding carried production/stock periods | producing-site dispatch gate; route/grade/state matched stock | per 1 kg reference flow | dispatch acceptance; calibrated tare/net record; returns/stock reconciliation; historical burden provenance |
| cp_dispatch | dispatch | Warehouse packaging handling returns and dispatch burdens | meters, package receipts and dwell/handling logs | actual carton/tube/film mass; tube reuse and returns; stock dwell; conditioning energy; handling energy; dispatch energy; failed dispatch/rework; packaging wastes and receivers; opening/closing burden vectors; opening/closing empty and attached-to-WIP/finished-stock packaging kg by article; packaging kg leaving with gross physical shipments; external reusable-packaging returns received/sent kg | Owner: warehouse operations engineer. Collect complete unnormalised actual packaging, storage, conditioning, handling, returns/rework and dispatch burdens for matched stock histories, including failed deliveries. Split each physical material/fuel/waste and actual provider separately. Keep allocation to dispatched versus closing stock explicit; do not delete incurred loads or divide during collection. Keep a separate physical ledger for each packaging article: opening empty/attached stock plus external receipts and returns received equals closing empty/attached stock plus packaging carried out with gross physical shipments, reusable packaging sent back outside and actual waste. Cancel internal reuse transfers. Use independently weighed article/tare masses and traced package IDs; associated packaging outflows are neither extra yarn Q nor automatically coproducts. Keep these physical quantities separate from allocated burden vectors. | kg; kWh; MJ | each operation and complete inventory interval | same delivered/closing-stock cohorts as cp_delivery | actual warehouse and dispatch equipment; no downstream external distribution | per 1 kg reference flow | package weights; energy/dwell logs; allocation reconciliation; waste treatment receipts |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `match_cohort` | all inventory rows | Build raw attributable exchange vectors before normalization: released-production burdens carry opening WIP plus complete actual-period inputs/loads including failed and rework runs, less closing WIP carried to future production, with actual coproduct allocation. Delivery burdens carry opening finished-stock exchange vectors plus new released vectors plus actual warehouse/packaging/handling/returns/dispatch loads, less closing finished-stock carried vectors and separately traced other destinations. Cancel internal P and recycle transfers; do not sum the same inherited vector twice. Physical raw stock reconciliation is separate: opening finished mass + new P + physical return receipts + independently measured moisture/finish gains = gross physical dispatch + closing finished mass + actual scrap/other exits + independently measured moisture/finish losses. Reconcile all terms on the declared component/conditioning basis; document uncertainty without inventing a residual water exchange; Q is unique positively accepted net supply from those events, not automatically gross dispatch or P. | opening_wip_vectors; raw_period_vectors; closing_wip_vectors; opening_finished_vectors; new_released_vectors; dispatch_vectors; closing_finished_vectors; other_destinations; cp_release; cp_delivery | attributable_raw_vectors | `jrc-polymers-2007`; `enka-filament-products`; `enka-industrial-recovery` |
| `normalize_delivery` | all inventory rows | For each external exchange, divide the matched attributable raw amount from match_cohort by actual positive accepted delivered net yarn mass Q in kg, exactly once, after raw unit conversions. The inventory amount expression and collection aggregation reference this same reporting operation, not sequential divisions. Terminal delivered_yarn is Q/Q = 1 kg; released_yarn and stock_yarn retain equal measured P transfer quantities per the same Q and cancel on consolidation. If Q is zero, report the failed/stock-building interval and carry its burdens to the eligible cohort; never divide by zero or silently discard it. | attributable_raw_vectors; Q; cp_delivery | exchange amount per 1 kg reference flow | `enka-filament-products` |
| `physical_species_water` | viscose_line; dispatch | Reconcile complete unnormalised stream masses and C/S/Na/Zn separately from LCA allocation. Track cellulose solids, solutes, moisture, finish, recovered streams, wastewater, residues, actual gas species and stocks. Free water, condensate, evaporation and Na2SO4 hydrate crystal water are separate from net chemical water. Reaction-water formation/consumption requires independent actual chemistry, assays and reaction-extent evidence; no mandatory numeric amount or closure-derived species. A stated analytical uncertainty remains a gap, not an invented sink. | raw_stream_masses; elemental_assays; actual_species; independently_evidenced_reaction_extents; cp_recovery; cp_release; cp_delivery | raw physical reconciliation and unresolved uncertainty | `jrc-polymers-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_basis | reference and all stock | Same viscose route, undyed bright grade, single continuous-filament construction, conditioning/moisture/finish and supply gate across both languages and every accepted cohort; no substituted staple yarn, polymer or generic mixed route. | CoA; route declaration; net weights; native limitations in cards |
| complete_carry | all inventory rows | Retain raw actual periods, failure/zero-output, WIP and finished-stock mass/exchange-vector carry, returns/rework, positive unique Q and P separately; inability to substantiate historical stock burdens prevents a complete delivered dataset. | cp_materials; cp_utilities; cp_release; cp_delivery; cp_dispatch |
| source_limits | evidence and providers | JRC 2007 process examples and ENKA product/2023 comparison establish bounded technical context, not current inventory values or a complete same-SKU dataset. Declare current plant/provider/geography and all deviations. No BREF batch/integrated wash range, ENKA tick or hypothetical environmental claim becomes a measured exchange. | primary source scope; current foreground records; supplier matching |
| species_closure | recovery and physical ledgers | Verify all gas/liquid environmental outlets, independent actual species and reaction-water evidence, elemental balance and treatment destination; no COD-to-organics or residual fit. Do not duplicate external wastewater treatment emissions. | cp_recovery; analytical QA; treatment receipts |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_scope` | Confirm single continuous viscose xanthate yarn and the declared actual delivery gate; reject excluded routes/forms and missing qualifiers. Generic native identity does not establish factory or supplier compatibility. | `jrc-polymers-2007`; `enka-filament-products` |
| `validate_mass_stock` | Check P/Q distinction, full WIP/finished-stock carried vectors, complete failed/rework loads, unique positive accepted delivery and tare/moisture/finish consistency. Reinspection/reshipment cannot create new production or duplicate Q; no closing finished stock is added as production output. | `enka-filament-products` |
| `validate_normalization` | Check raw unit conversion, match_cohort and one normalize_delivery operation only. Reject a second division, unsupported density/heating value, double-counted formulation constituents, copied yields or unsupported gas integration. All applicable measured amounts and actual optional auxiliaries must be present before dataset use. | `jrc-polymers-2007` |
| `validate_physical` | Check unnormalised mass/element/species/water closure independently of allocation and normalization, with real outlets and separate recovery stocks. Unknown reaction water and unknown outlet cannot share a fitted residual; retain and resolve material uncertainty. | `jrc-polymers-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production-and-dispatch inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supplier-matched delivered single viscose continuous-filament yarn for downstream textile modelling after completeness checks |
| excluded_use | Retail winding, folded/cabled yarn, sewing thread, tow/staple, lyocell/acetate/cupro, synthetic yarn, tyre cord, generic all-artificial yarn average; no claim of methodology approval |
| required_metadata | Actual plant/geography, route/grade/titre/filaments, conditioning/moisture/finish, net delivery Q and separate release P, stock and WIP genealogy, reporting cohorts, providers, allocation and source dates |
| required_quality_disclosure | Measurement uncertainty, historical carried burdens, missing auxiliary UUID/provider matches, evidence limits, actual optional operations, physical balance gaps and incomplete scope |
| update_trigger | Route, product state, conditioning, provider, recovery/treatment, supply gate, stock attribution or source evidence changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `jrc-polymers-2007` | official_guidance | European Commission, August 2007, Reference Document on Best Available Techniques in the Production of Polymers, §§11.2.1/11.2.3/11.3, Figure 11.1, §§12.7.2–12.7.7. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/pol_bref_0807.pdf | Industrial xanthate filament route, no staple-cut substitution, bath chemicals, recovery, gas/liquid outlets, salt and zinc treatment. Historical example concentrations, rates, recovery efficiencies and washing ranges are not defaults; separate actual species/water evidence is required. |
| `enka-filament-products` | literature | ENKA, Viscose filament yarns, manufacturer product page. https://www.enka.de/en/products/ | Primary commercial continuous-filament yarn, titre/filament distinctions and textile use. Product family is not a measured SKU, full recipe or conditioning/moisture/finish/tare specification; catalogue examples are not numeric constraints. |
| `enka-industrial-recovery` | literature | ENKA, Sustainability, production and recovery sections. https://www.enka.de/en/sustainability/ | Primary wood-pulp conversion, material cycles, salt coproduct, wastewater treatment and energy context. Swedish pulp/Domsjö supply and Obernburg CHP describe that supply chain only, not generic plant geography/provider or zero-carbon proof. No generic recovery factor, allocation or reaction-water rate. |
| `enka-consumption-context` | literature | ENKA, Consumption & emission values, 24 October 2024; data 2023, one-page table and footnotes 1–3. https://www.enka.de/wp-content/uploads/2024/10/ENK_1825_20241024_Consumption-Emission-values.pdf | Industrial spin finish, zinc and washing counterevidence. BREF comparator is batch washing; ENKA cells are qualitative ticks, with higher-zinc and proprietary-washing exceptions. Ambiguous Hydrogene Sulphate is not acid identity evidence. No table number/tick is copied as a foreground amount, yield or QA range. |
| `ilcd-attributional-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment - Detailed guidance, first edition March 2010, section 7.9.3, printed pp.257-258 (PDF pp.277-278). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation method only: separate specific burdens, determining physical causality before residual common-process-gate market value. No viscose factor, fixed share, substitution credit, waste cutoff or recipe. |
