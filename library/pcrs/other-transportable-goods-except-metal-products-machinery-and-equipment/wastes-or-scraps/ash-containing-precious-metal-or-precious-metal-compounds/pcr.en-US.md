---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ash-containing-precious-metal-or-precious-metal-compounds
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Silver-bearing incineration bottom ash from photographic gelatin precipitate

## 1. Scope and Applicability

This attributional method covers only silver-bearing gelatin precipitate from one segregated photographic-emulsion-manufacture wash-water stream, actually batch-incinerated, with afterburning, filtration, caustic wet scrubbing and cooling, to contained bottom ash for precious-metal recovery. The foreground starts with real wash-water generation and inherited burdens and retains direct steam heating, PN-10 alkaline digestion, sulfuric-acid isoelectric precipitation, settling, decant neutralisation/transfer, slurry pumping, thermal treatment, every actual residue and real packaging/delivery to a named recovery receiver gate. It is not a purchased-finished-ash packing service. Scientific approval remains pending.

This is a transparent technical synthesis of Kodak US3982932A Example 1 and the JRC 2017 §7.1.1.1 thermal equipment/abatement context, not a same-SKU, same-factory or contemporary-order observation. The patent actually incinerates precipitate slurry from emulsion-manufacture wash water into silver-bearing ash; the nearby 33% and Example 1 23% observations concern different dry sludges and are not defaults for ash assay, yield or recipe. The JRC combustible-feed startup-fuel observation cannot establish this wet-sludge thermal demand without measurements. The historical EPA original corroborates the metal-refiner receiver function, not present authorisation. Sources: kodak-silver-gelatin-1976; jrc-nfm-2017; epa-photographic-1976.

Exclude selectors pooling gold/platinum/palladium ashes, unburned sludge, direct scrap-film incineration ash, steel-wool silver traps, non-precious ash 39320, non-ash precious-metal scrap 39332, ores/concentrates, mixed smelting slag, smelted silver alloy and refined silver. Neither a CPC leaf nor a generic native name establishes methodology coverage. Only newly first-released bottom ash enters Q_c; filter dust is a separate transfer and cannot be pooled into that denominator. An actual blended product requires independent composition and method review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ash-containing-precious-metal-or-precious-metal-compounds |
| classification_refs | CPC 3.0:39333; narrower single-source silver bottom-ash subset; no accepted mapping |
| covered_products | Cooled contained incineration bottom ash from one photographic gelatin/silver precipitate route |
| excluded_products | Unburned sludge; direct film ash; filter dust as reference output; non-precious ash; non-ash metal scrap; refined silver |
| representative_product | One actual assayed silver-bearing bottom-ash lot with receiver specification; no universal Ag grade |
| production_route | Actual wash-water generation and inheritance → direct steam/PN-10 digestion → sulfuric precipitation/settling/neutralisation → slurry incineration/full abatement → cooling/first release → original-cohort gate services and receiver acceptance |
| market_state | Contained bottom ash at first quality release, net mass at actual moisture; legal waste status retained; later delivery is not new manufacture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply this single-route silver-bearing bottom ash to a named precious-metal recovery receiver |
| How much | 1 kg net bottom ash at first-release moisture, excluding packaging |
| How well | Actual Ag speciation/assay, moisture and contaminant conditions meet the named receiver technical specification; no default assay or recovery |
| How long or cycle | One unique first-release cohort c and its later actual services; delivery/reinspection never repeats Q_c |
| reference_flow_link | ash_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ash containing precious metal or precious metal compounds `66fb51f5-bd68-4859-ae44-9cc92e82ccde` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wash-water source and original formation; inherited per-flow inventory and waste allocation; PN-10 preparation and actual activity; purchased NaOH and sulfuric solution concentrations; steam mass and thermal state; actual furnace/afterburner/filter/scrubber configuration; bottom-ash identity and no filter-dust pooling; release cohort and first-release event; Q_c net as-released kg and measured moisture; Ag metal/halide/other species and actual dry assay; independent C/H/O/water and relevant element analyses; actual contaminants and receiver criteria; named receiver and current authorised material scope; packaging composition and separate tare ledgers; delivery/return and original stock vectors; actual provider geography voltage and supply scope; allocation hierarchy and common-gate value evidence; all operating-state and extra-species coverage |

Declare every qualifier in dataset metadata, reference-flow comments or equivalent consumable fields; missing qualifiers make the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net bottom ash at actual first-release moisture with separately measured tare; dry solids and Ag mass are non-additive analytical subaccounts and do not replace Q_c. |
| raw_conversion | all inventory rows | Declared original property | original to declared unit | Convert original units, integrate true rates, allocate actual shared operations and apply per-flow inheritance before the sole A_ic / Q_c calculation in §8; retain burdens with no unit result at Q_c=0. |
| solution_basis | whole supplied preparations | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Purchase each whole supplied preparation once; active substance/carrier water are subaccounts; onsite preparation records each real purchase and mixing loss/energy. |
| thermal_state | injected_steam; furnace_gas | Mass and energy | kg; MJ | Retain steam mass plus independent enthalpy; convert natural gas with independently measured density at actual state, never water or methane density. Do not multiply integrated volume by time again. |
| electric_unit | wet_power; fire_power; gate_power | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use the verified unit group to multiply kWh by 3.6 for MJ once; supply voltage/geography must match native restrictions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One actual gelatin/silver wash-water stream at emulsion-manufacture generation, with originating operations and per-flow history |
| starting_condition_role | material_input |
| product_classification_scope | Narrower bottom-ash subset of CPC 3.0:39333; exclude 39320 and 39332 |
| recursive_input_rule | A real same-category ash input brings a verified historical vector once; recursive tracing never creates new production. Actual blending or a different feed route requires review. |
| upstream_dataset_requirement | Link compatible actual wash-water source, reagent, water, energy, packaging and treatment providers by supply/state/geography/scope; never assume zero historical burden. |
| disclosure | Declare originating operations, cohort, species/phases, all operating states, Q_c, stock vectors, receiver, allocation and every gap. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_origin | all stages | Trace the complete original wash-water generation and its inherited inventory to the actual emulsion manufacturing records/provider; then include alkaline enzyme digestion, direct steam injection, sulfuric-acid isoelectric precipitation, settling, supernatant neutralisation and transfer, and slurry pumping. The starting waste designation does not establish zero historical burden. | kodak-silver-gelatin-1976; jrc-ilcd-2010 |
| b_thermal | p_fire | Include the actual single-hearth batch incinerator with separate afterburner, filter and caustic wet scrubber, cooling and contained bottom-ash release. This is a transparent technical synthesis of the Kodak batch precipitate example and JRC thermal equipment/abatement context, not a same-factory observation. Record the actual temperature/time/oxygen regime and auxiliary supplies; no default burn temperature, fuel-only-startup claim, yield or recovery rate. Any different furnace/abatement configuration needs an explicit reviewed inventory before use. | kodak-silver-gelatin-1976; jrc-nfm-2017 |
| b_terminal | p_gate | Follow the identified ash through storage, actual compatible containment, loading and actual delivery to the named precious-metal recovery receiver gate. Retain technical acceptance for this bottom ash, assay/moisture/contaminant conditions, applicable waste code/status, permit scope and transport/transfer records. A Product UUID, historic patent or old guidance does not establish current legal authorisation or end-of-waste status. Exclude receiver smelting, fluxing, cupellation and refining from the ash supply function. | jrc-nfm-2017; epa-photographic-1976 |
| b_stocks | all stages | For every physical stream and inherited elementary/product/waste inventory component, carry opening WIP plus current additions minus closing WIP to the actual completed/rejected/lost destinations. Retain all failed and zero-output batches, startup/shutdown, idle, cleaning and incremental rework. Internal slurry, recirculation, sweep-back and reprocessed same-cohort material cancel in the combined foreground; no fresh upstream burden is invented or lost. | kodak-silver-gelatin-1976; jrc-ilcd-2010 |
| b_release | ash_release | Q_c is only the net as-released mass newly first quality-released in cohort c; closing finished stock of that cohort is already included in Q_c and is never added again. Dispatch, receiver reinspection, returns and repeat release do not create new production. Subsequent services use that original Q_c. H is a service driver only; gross handled or shipped V is a physical ledger quantity, not the production denominator. A later historical delivery reports the original production vector plus its actual incremental services. | jrc-ilcd-2010; epa-photographic-1976 |
| b_atomic | all inventory rows | Every card is one real exchange. Whole wash water, supplied reagent preparation, wastewater or ash crosses once with non-additive constituent accounts. Add each actual additional purchased chemical, filter/lining replacement, fuel, refrigerant, cooling-water circuit, packaging component, segregated residue, emission species and outlet individually before data completion. Unlisted real exchanges cannot be hidden in zero, other, a family selector or an assumed universal abatement efficiency. Absent, not measured and below detection remain distinct. | kodak-silver-gelatin-1976; jrc-nfm-2017; jrc-ilcd-2010 |
| b_physical | all stages | Reconcile wet/dry total physical mass and separate elemental Ag/C/H/O/N/S/Na/Cl/Br balances at wet, furnace/abatement, finished-stock and combined gates. Use independently measured moisture and composition/speciation; do not fit two unknowns with one residual. Separate free liquid water, vapour, independently established reaction water and any actual hydrate/structural water. Do not infer ash oxygen uptake or silver speciation from total ash mass alone. COD, TOC, VOC and TEQ are indicators, not masses of a selected molecule. | kodak-silver-gelatin-1976; jrc-nfm-2017; jrc-ilcd-2010 |
| b_provider | all stages | At every external transfer link one provider for the whole physical stream and its agreed water/energy/burden scope. Separate material subaccounts do not add second providers. Treat internal returned slurry/ash and packaging as transfers, not new procurement. External condensate/heat-exchange-water returns are Product returns only when real, with measured thermal state and supplier convention; no nonexistent boiler, steam loop, recovery credit or negative waste burden is assumed. | jrc-nfm-2017; jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_wet | Original wash-water formation and wet precipitation | required | selected single-source PN-10/sulfuric batch route | intermediate slurry and decant handling | measured internal wet slurry; not Q |
| p_fire | Incineration abatement cooling and first release | required | actual single-hearth batch furnace with afterburner/filter/caustic scrubber | reference bottom-ash production | ash_release; Q_c |
| p_gate | Original-cohort storage packing delivery and returns | required | actual later services and receiver gate | incremental service; no new production | original Q_c; physical V; H only a driver |

Every card consumes the same exchange-basis result defined in §8; cards and aggregation never divide again. Conditional absence requires evidence; unknown is not zero. All native restrictions and single-species/whole-supply explanations below are part of the complete consumable descriptions.

### Process: Original wash-water formation and wet precipitation (`p_wet`)

#### Inputs

##### Product flows

###### Sodium hydroxide aqueous solution 46% by mass (`naoh46`)

Whole purchased 46% solution for alkaline digestion, measured as delivered. Dissolved NaOH and carrier water are analytical subaccounts, never additional purchases. Do not substitute 30%, 50%, 0.2 N or solid-caustic identities. Actual onsite preparation instead requires each separately purchased input and its measured mixing losses/energy.

- Selected flow: Sodium hydroxide aqueous solution 46% by mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Bioprase PN-10 proteolytic enzyme preparation (`protease`)

One whole purchased PN-10 preparation, including its supplier-declared formulation. Record actual activity, supplied form and water added onsite to prepare the dosing solution; active enzyme is not purchased again. Rennet, amylase/liquefaction enzymes, peptone and lipase are incompatible substitutions. Patent enzyme doses are case observations, not PCR defaults.

- Selected flow: Bioprase PN-10 proteolytic enzyme preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Sulfuric acid solution 98% (`acid98`)

Whole 98% solution at plant for isoelectric precipitation. Native record means as-reported solution kg, not pure H2SO4; its industrial-reagent context and source-reported concentration apply. Its cited non-photographic cases establish neither this plant recipe nor an allocation rule. Retain actual certificate and provider; no concentration conversion or duplicate carrier-water purchase.

- Selected flow: Sulfuric acid solution, 98% `efbf8d56-3521-45c1-aac1-3564408f3d01`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Sodium hydroxide aqueous solution 35% by mass (`naoh35`)

Whole purchased 35% solution assigned to decant neutralisation before actual sewer/treatment transfer; dilution water is a separate tap-water withdrawal. The patent preferred-embodiment dilution is not an assumed factory recipe. If supply differs, replace this exact card after review rather than record an arbitrary pure-active equivalent.

- Selected flow: Sodium hydroxide aqueous solution 35% by mass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Tap water for dilution and cleaning (`wet_water`)

One metered treated municipal tap-water supply at plant, used only for separately measured onsite dilution, dosing-solution preparation and cleaning. Native Mass is reference; its extra Volume property has a nominal conversion and is not an independently measured density. Use actual water mass or independently measured state-specific conversion; never add water already in feed, purchased solutions or injected steam.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Water steam for direct injection (`injected_steam`)

Actual externally supplied water steam injected into the reaction liquid. Record steam kg and independently documented pressure, temperature, dryness and specific enthalpy; all condensate entering the liquid is already water in the slurry. Link one provider covering the agreed water-and-energy supply; do not add a fictitious boiler or purchase its heat and mass twice. Paper-mill-specific steam and an unverified 11 MPaG grade cannot bind this exchange.

- Selected flow: Water steam for direct injection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Wet-line electricity (`wet_power`)

Native consumption mix delivered to a user in CN at <1 kV, grid-average alternating current; its reference property is Net calorific value on an energy basis. Adopt this binding only when geography, voltage and actual supply arrangement match; otherwise obtain a compatible flow/provider before use. Convert metered kWh to MJ with the verified unit-group factor 3.6 once. Separate this process meter from other stages and retain all idle, failed and cleanup loads.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Waste flows

###### Emulsion-manufacture wash water (`wash_water`)

One segregated wash-water supply from gelatin/silver photographic emulsion manufacture at its generation gate. Retain the actual producing operations, prior inventory vector, silver metal/halide speciation, gelatin, salts, free water and contaminants; no added scrap-film emulsion, mixed fixer, steel-wool trap or municipal sludge enters this route. The entire wet stream crosses once; constituent assays are non-additive subaccounts. The native UUID of this specific upstream input remains unresolved; resolve its compatible whole-flow identity and actual source/provider/inherited inventory before claiming a complete concrete dataset.

- Selected flow: Emulsion-manufacture wash water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

#### Outputs

##### Product flows

###### Water condensate returned to steam supplier (`condensate_return`)

Conditional only for real external condensate return from the metered supply header/traps; direct-injected steam condensed into slurry has no separate return. Record mass, temperature, pressure, enthalpy and the actual supplier water/energy accounting convention. Do not infer a return from steam use, and do not call an evaporation-condensate flow its identity.

- Selected flow: Water condensate returned to steam supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_steam`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Waste flows

###### Silver-bearing gelatin precipitate slurry (`slurry_out`)

Actual unincinerated wet bottom slurry after digestion, acidification and settling, transferred internally to p_fire. Weigh wet mass; assay dry solids, silver species, C/H/O/N/S/halogens and water phases independently. Transfer the complete inherited vector row by row. This is not finished ash and does not enter Q.

- Selected flow: Silver-bearing gelatin precipitate slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Neutralised photographic decant wastewater (`decant`)

One measured neutralised decant liquid sent to the named sewer/treatment provider under actual acceptance conditions. Record its whole wet amount and non-additive pollutant assays, including silver, dissolved organic carbon, salts, COD and pH. A sewer transfer is not an elementary discharge to natural water, and pH 7 or the patent residual-silver result is not legal permission.

- Selected flow: Neutralised photographic decant wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `epa-photographic-1976`

###### Silver-bearing aqueous wet-line cleaning effluent (`wet_cleanup`)

One separately collected cleaning stream, including spills and failed-batch washout where routed here. Keep its actual composition and receiving treatment distinct from decant; internal return to the reactor cancels rather than becoming a second external feed. Add another specific stream card if incompatible cleaning chemicals actually create a separate outlet.

- Selected flow: Silver-bearing aqueous wet-line cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wet`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

### Process: Incineration abatement cooling and first release (`p_fire`)

#### Inputs

##### Product flows

###### Furnace and abatement electricity (`fire_power`)

Native consumption mix delivered to a user in CN at <1 kV, grid-average alternating current; its reference property is Net calorific value on an energy basis. Adopt this binding only when geography, voltage and actual supply arrangement match; otherwise obtain a compatible flow/provider before use. Convert metered kWh to MJ with the verified unit-group factor 3.6 once. Separate this process meter from other stages and retain all idle, failed and cleanup loads.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Industrial-furnace natural gas (`furnace_gas`)

One actual natural-gas supply burned in the selected single-hearth incinerator and its separate afterburner, with burner submeters or auditable splitting. Native identity is natural gas burned in an industrial furnace, on Mass/kg; its preserved former other-goods classification is a taxonomy issue, not another fuel. Retain composition, metering state, measured density and heating value independently; do not replace it with methane, boiler gas or paper-mill gas. Collect startup, sustained firing, shutdown, failed-feed, idle and afterburner consumption; high feed calorific value never proves wet sludge needs no fuel.

Natural-gas auxiliary firing of both chambers is an equipment-level synthesis: Alfa Therm documents batch operation on a stationary fixed hearth with a secondary chamber and a natural-gas option; EPA's handbook describes primary and secondary burners, natural-gas firing and their fuel trains. These sources support the compatible burner choice within the retained NFM sequence, not this photographic feed at an observed factory. Actual equipment configuration, supply/provider and operating-state measurements remain required; source specifications and performance values are not defaults.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `alfatherm-static-incinerator`; `epa-incinerator-training-1989`

###### Scrubber makeup tap water (`scrub_water`)

One metered treated municipal tap-water supply at plant, used only for separately measured onsite dilution, dosing-solution preparation and cleaning. Native Mass is reference; its extra Volume property has a nominal conversion and is not an independently measured density. Use actual water mass or independently measured state-specific conversion; never add water already in feed, purchased solutions or injected steam. This withdrawal supplies the actual caustic wet scrubber; internal recirculation is not fresh withdrawal.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Sodium hydroxide aqueous scrubber reagent (`scrub_naoh`)

One whole caustic solution actually purchased for the scrubber, with supplier-measured concentration and formulation declared, no default 35% or 46%. If supplied by the same tank as another card, split one procurement total by real destinations, never purchase the tank twice. Caustic use and reaction water/salts follow measured alkalinity and captured species, not a guessed acid-gas removal efficiency.

- Selected flow: Sodium hydroxide aqueous scrubber reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Waste flows

###### Silver-bearing gelatin precipitate slurry (`slurry_in`)

The same physical slurry and inherited per-exchange burden vector as slurry_out, measured at furnace feed including held and failed material. Internal transfers cancel in the combined foreground; no second upstream provider or assumed zero history. Actual evaporation and organic oxidation occur here.

- Selected flow: Silver-bearing gelatin precipitate slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Elementary flows

###### Oxygen from ambient air (`oxygen_in`)

Measure the oxygen component of actual combustion/afterburner air intake; no purchased oxygen-enrichment is assumed. Preserve whole-air throughput as a non-additive measurement total; each constituent crosses once.

- Selected flow: Oxygen from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Dinitrogen from ambient air (`nitrogen_in`)

Measure the dinitrogen component of the same actual air intake; it is not industrial nitrogen purchase. Preserve whole-air throughput as a non-additive measurement total; each constituent crosses once.

- Selected flow: Dinitrogen from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Argon from ambient air (`argon_in`)

Keep actual air argon in the physical balance; never convert nitrogen balance residual into argon. Preserve whole-air throughput as a non-additive measurement total; each constituent crosses once.

- Selected flow: Argon from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Water vapour in ambient air intake (`humidity_in`)

Determine inlet humidity independently at measured conditions, outside steam and liquid-water purchases. Preserve whole-air throughput as a non-additive measurement total; each constituent crosses once.

- Selected flow: Water vapour in ambient air intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Carbon dioxide in ambient air intake (`ambient_co2_in`)

Measure incoming atmospheric CO2 and retain source composition without assigning it to generated fossil or gelatin CO2. Preserve whole-air throughput as a non-additive measurement total; each constituent crosses once.

- Selected flow: Carbon dioxide in ambient air intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

#### Outputs

##### Product flows

###### First-released silver-bearing bottom ash (`ash_release`)

One cooled, contained bottom-ash lot from this single sludge route, first released to the named precious-metal recovery receiver specification. Native Product flow is manufactured ash containing precious metal/compounds at plant, with Mass reference and no silver grade, CAS or particular ash-form limits supplied; these narrower feed, bottom-ash and receiver restrictions remain mandatory. Exclude separate filter dust, scrubber salts, wet unburned sludge, non-precious ash, metal scrap, smelted alloy and refined silver. The release gate is the cooled enclosed producer ash hopper; actual later transport drumming is gate service. Record release moisture, actual Ag metal/halide/other species and contaminants; no assumed purity, yield or end-of-waste status. Whole ash kg includes its water and assayed metals; do not add analytical Ag as a second product.

- Selected flow: Ash containing precious metal or precious metal compounds `66fb51f5-bd68-4859-ae44-9cc92e82ccde`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `epa-photographic-1976`

##### Waste flows

###### Silver-bearing dry incinerator filter dust (`filter_dust`)

Dry dust captured from this sludge combustion and separately contained for a declared recovery/treatment receiver. Its measured mass, Ag assay and inherited vector are distinct from bottom ash and Q. Internal return to the furnace is recorded and cancels; it is not both new dust output and new purchased ash. A genuine co-function and its revenues require the allocation review in §7.

- Selected flow: Silver-bearing dry incinerator filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Silver-bearing caustic scrubber purge liquor (`scrub_purge`)

One real wet purge stream with measured water, dissolved salts, suspended solids and Ag species, sent to a named treatment/recovery provider. Constituent Na/S/Cl/Br/Ag and liquid analyses are non-additive. A separate filter cake exists only if actually separated; then add that single stream and remove its mass from this liquor.

- Selected flow: Silver-bearing caustic scrubber purge liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Off-spec silver-bearing bottom ash (`rejected_ash`)

Actual failed or rejected bottom ash not first released as the reference product, with its route and full burden retained. Reburning records only new fuel/energy/reagents plus inherited material; neither the rejected amount nor previously first-released returns create a second Q.

- Selected flow: Off-spec silver-bearing bottom ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Silver-bearing furnace cleaning solids (`fire_cleanup`)

One separately removed cleaning-solid stream from the declared furnace campaign. Preserve lining fragments and contamination analysis; actual segregated spent refractory or filter media require their own specific exchange and replacement-input card before use, never an other-waste allowance.

- Selected flow: Silver-bearing furnace cleaning solids
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fire`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Elementary flows

###### Fossil carbon dioxide (`co2_fossil`)

Only independently apportioned fossil carbon, including furnace gas. CAS 124-38-9. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Biogenic carbon dioxide (`co2_biogenic`)

Only documented biogenic carbon from gelatin or another proven feed component; no automatic uptake or neutrality credit. CAS 124-38-9. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Carbon monoxide, fossil, to air (`co_fossil`)

Only apportioned fossil CO, not the whole measured mixed-source CO. CAS 630-08-0. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Carbon monoxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Carbon monoxide, biogenic, to air (`co_biogenic`)

Only independently apportioned biogenic CO; no factory emission factor is prescribed. CAS 630-08-0. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Carbon monoxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Nitrogen monoxide to air (`no_air`)

Actual NO species; a NOx-as-NO2 result requires measured NO/NO2 separation before this card. CAS 10102-43-9. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Nitrogen dioxide to air (`no2_air`)

Actual NO2 species, kept separate from NO and N2O. CAS 10102-44-0. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Dinitrogen monoxide emission (`n2o_air`)

Actual N2O species; total nitrogen or NOx is not its quantity. CAS 10024-97-2. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Sulfur dioxide emission (`so2_air`)

Actual SO2 species; do not treat sulphate in scrubber liquor or total SOx as pure SO2. CAS 7446-09-5. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Gaseous hydrogen chloride to air (`hcl_air`)

Actual gaseous HCl; chloride retained in ash/liquor is not another HCl emission. CAS 7647-01-0. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Gaseous hydrogen chloride to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Gaseous hydrogen bromide to air (`hbr_air`)

Actual HBr from independently established halogen speciation; do not assume every silver halide is bromide. CAS 10035-10-6. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Gaseous hydrogen bromide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Methane, fossil, to air (`methane_fossil`)

Unburned fossil methane only; natural-gas supply mass is not pure methane mass. CAS 74-82-8. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Gaseous ammonia to air (`nh3_air`)

Actual NH3 species where present; nitrogen in gelatin is not assumed to become ammonia. CAS 7664-41-7. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Gaseous ammonia to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Gaseous formaldehyde to air (`formaldehyde_air`)

Only species-specific formaldehyde measurement; total VOC or TOC cannot stand in for this molecule. CAS 50-00-0. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Gaseous formaldehyde to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Water vapour to air (`water_vapour_out`)

Actual water vapour: separately reconcile feed free water, injected steam, inlet humidity and independently established reaction water. CAS 7732-18-5. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Dinitrogen outlet (`nitrogen_out`)

Keep actual dry-gas N2, including pass-through air and proven reactions, in the gross physical gas balance. CAS 7727-37-9. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Oxygen outlet (`oxygen_out`)

Keep measured residual O2; inlet oxygen is not assumed all consumed. CAS 7782-44-7. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Argon outlet (`argon_out`)

Keep measured pass-through argon distinct from dinitrogen. CAS 7440-37-1. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Silver emission on Ag mass basis (`silver_air`)

Native silver uses metallic-form CAS and also represents ions unless the applied LCIA method distinguishes them; prefer those differentiated flows when required. Record actual metal/ionic speciation and Ag-mass conversion; do not silently equate silver-halide molecular kg with Ag kg. Metals are constituents of physical particulate mass, not extra physical mass. CAS 7440-22-4. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: silver `fe0acd60-3ddc-11dd-abf6-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Fine particulate emission (`pm_fine`)

Only the actual PM2.5 size fraction; retain constituent metals as non-additive analytical subaccounts. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Intermediate particulate emission (`pm_middle`)

Only the disjoint PM2.5–PM10 fraction; do not also add total PM10. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### 2,3,7,8-TCDD emission (`tcdd_air`)

Only the measured 2,3,7,8 congener as actual molecule mass, not the PCDD/F family or TEQ. Add every other detected congener separately before data completion. CAS 1746-01-6. The intended exchange is an elementary emission to air on Mass/kg, not indoor, water, resource uptake or long-term emission. A native UUID is adopted only where shown on this card; otherwise this specific species remains unresolved. The displayed native bindings use the unspecified-air compartment. Resolve a more specific actual receiving subcompartment before application when known. Measure stack and fugitive contributions separately and sum their actual species masses once; unknown, unmeasured and nondetect are distinct from zero. Use the canonical CAS molecule and stated source/medium only: aliases naming isotope-labelled material, another molecule, a supplied mixture, ionic form or physical phase do not widen this identity. No source supplies a default factor.

- Selected flow: 2,3,7,8-tetrachlorodibenzo-p-dioxin `fe0acd60-3ddc-11dd-ab67-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### Pass-through ambient carbon dioxide to air (`ambient_co2_out`)

Only independently measured pass-through atmospheric CO2, matched to ambient_co2_in in the physical balance, distinct from newly formed fossil and biogenic CO2. Record inlet/outlet baseline consistently without inventing sequestration, generation or carbon credit. Do not bind a fossil, biogenic, correction or long-term carbon flow to this unresolved physical identity.

- Selected flow: Pass-through ambient carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Particles larger than 10 micrometres to air (`pm_large`)

Actual disjoint >10 micrometre particulate fraction only. This specific physical size fraction has no verified native binding; total suspended particulate and the smaller fractions are nested measurement totals, not additional physical mass.

- Selected flow: Particles larger than 10 micrometres to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Waste heat to ambient air (`waste_heat`)

Measured heat loss from the actual furnace/afterburner/abatement energy balance, in MJ. Exclude useful exported heat and do not count latent/sensible heat already assigned elsewhere twice. Use a verified energy-based identity; no assumed heat-recovery boiler, electricity export or substitution credit. Real heat export requires a separate specific Product card and receiver enthalpy convention.

- Selected flow: Waste heat to ambient air
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

### Process: Original-cohort gate services (`p_gate`)

#### Inputs

##### Product flows

###### Released bottom ash entering gate service (`ash_service_in`)

The same previously released physical bottom ash, including identified opening finished stock and legitimate returned lots. Bind only the narrowed sludge-route bottom-ash identity described by ash_release: native manufactured precious-metal ash at plant, Mass/kg; no separate Ag product, grade or legal status is inferred. Record gross handled mass V and inherited cohort vector, not new production.

- Selected flow: Ash containing precious metal or precious metal compounds `66fb51f5-bd68-4859-ae44-9cc92e82ccde`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Storage packing and loading electricity (`gate_power`)

Native consumption mix delivered to a user in CN at <1 kV, grid-average alternating current; its reference property is Net calorific value on an energy basis. Adopt this binding only when geography, voltage and actual supply arrangement match; otherwise obtain a compatible flow/provider before use. Convert metered kWh to MJ with the verified unit-group factor 3.6 once. Separate this process meter from other stages and retain all idle, failed and cleanup loads. This is incremental gate-service energy, linked to original release cohort Q_c, never service time H as a production denominator.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Gate-service cleaning tap water (`gate_water`)

One metered treated municipal tap-water supply at plant, used only for separately measured onsite dilution, dosing-solution preparation and cleaning. Native Mass is reference; its extra Volume property has a nominal conversion and is not an independently measured density. Use actual water mass or independently measured state-specific conversion; never add water already in feed, purchased solutions or injected steam.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Road freight transport service for contained bottom ash (`freight`)

Actual contracted delivery to one named technically and legally authorised precious-metal recovery receiver, in t km using gross carried payload including each package. Record distances, load utilisation, return legs and provider scope; no guessed road distance or truck technology. Link one transport provider per leg; do not duplicate its fuel and tailpipe inventory as onsite consumption.

- Selected flow: Road freight transport service for contained bottom ash
- Flow property / unit: Freight service / t km
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_freight`
- Sources: `epa-photographic-1976`; `jrc-nfm-2017`; `jrc-ilcd-2010`

###### New purchased Closed steel transport drum (`drum_purchased`)

The actual single steel drum, including its declared closure, contamination and reuse condition; require a compatible Mass-based identity before native binding. No assumed 200 L capacity or per-item kg. Only actual purchased new package mass P. Internal reuse is not new purchase.

- Selected flow: New purchased Closed steel transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Externally returned Closed steel transport drum (`drum_received`)

The actual single steel drum, including its declared closure, contamination and reuse condition; require a compatible Mass-based identity before native binding. No assumed 200 L capacity or per-item kg. Only actual external returned package mass ER; physical return does not import new-production burden again.

- Selected flow: Externally returned Closed steel transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### New purchased Polyethylene inner bag (`liner_purchased`)

One PE inner bag, CAS 9002-88-4, at-plant production mix; official native identity has no particular grade or dimensions. Require actual PE composition, compatibility with ash and receiver specification; no PET, multilayer foil or film-resin substitution. Only actual purchased new package mass P. Internal reuse is not new purchase.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Externally returned Polyethylene inner bag (`liner_received`)

One PE inner bag, CAS 9002-88-4, at-plant production mix; official native identity has no particular grade or dimensions. Require actual PE composition, compatibility with ash and receiver specification; no PET, multilayer foil or film-resin substitution. Only actual external returned package mass ER; physical return does not import new-production burden again.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

#### Outputs

##### Product flows

###### Dispatched attached Closed steel transport drum (`drum_dispatched`)

The actual single steel drum, including its declared closure, contamination and reuse condition; require a compatible Mass-based identity before native binding. No assumed 200 L capacity or per-item kg. Actual package mass S leaving with gross shipment, whether or not the ash was newly produced this period. Exclude from net ash Q.

- Selected flow: Dispatched attached Closed steel transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Externally returned empty Closed steel transport drum (`drum_returned`)

The actual single steel drum, including its declared closure, contamination and reuse condition; require a compatible Mass-based identity before native binding. No assumed 200 L capacity or per-item kg. Actual outward package return EO; internal reuse cancels in the site ledger. No automatic coproduct credit.

- Selected flow: Externally returned empty Closed steel transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Dispatched attached Polyethylene inner bag (`liner_dispatched`)

One PE inner bag, CAS 9002-88-4, at-plant production mix; official native identity has no particular grade or dimensions. Require actual PE composition, compatibility with ash and receiver specification; no PET, multilayer foil or film-resin substitution. Actual package mass S leaving with gross shipment, whether or not the ash was newly produced this period. Exclude from net ash Q.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Externally returned empty Polyethylene inner bag (`liner_returned`)

One PE inner bag, CAS 9002-88-4, at-plant production mix; official native identity has no particular grade or dimensions. Require actual PE composition, compatibility with ash and receiver specification; no PET, multilayer foil or film-resin substitution. Actual outward package return EO; internal reuse cancels in the site ledger. No automatic coproduct credit.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Gross physical ash dispatched to receiver (`ash_dispatch`)

One actual contained bottom-ash shipment from the identified original release cohort, reaching the declared receiver acceptance gate. Same narrowed ash_release identity and native Product Mass/kg; full original bottom-ash/source/assay restrictions apply. V excludes packaging and is not Q or new production; inherited burden plus incremental services travel once. Opening/closing finished goods, returns and rejection histories retain their cohort vectors.

- Selected flow: Ash containing precious metal or precious metal compounds `66fb51f5-bd68-4859-ae44-9cc92e82ccde`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

##### Waste flows

###### Discarded contaminated Closed steel transport drum (`drum_waste`)

The actual single steel drum, including its declared closure, contamination and reuse condition; require a compatible Mass-based identity before native binding. No assumed 200 L capacity or per-item kg. Actual wasted package mass W sent to its named authorised treatment; residual ash is a separately reconciled content, not additional package polymer or steel.

- Selected flow: Discarded contaminated Closed steel transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Discarded contaminated Polyethylene inner bag (`liner_waste`)

One PE inner bag, CAS 9002-88-4, at-plant production mix; official native identity has no particular grade or dimensions. Require actual PE composition, compatibility with ash and receiver specification; no PET, multilayer foil or film-resin substitution. Actual wasted package mass W sent to its named authorised treatment; residual ash is a separately reconciled content, not additional package polymer or steel.

- Selected flow: Discarded contaminated Polyethylene inner bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-nfm-2017`; `epa-photographic-1976`; `jrc-ilcd-2010`

###### Spilled silver-bearing bottom ash (`gate_ash_loss`)

Actual unrecovered ash lost during packing/storage/loading or receiver rejection disposition, with separately measured destination. Recovered internal sweep-back is not a second purchase, product or negative emission. Preserve historical burdens; do not turn the loss into new Q.

- Selected flow: Spilled silver-bearing bottom ash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

###### Silver-bearing gate cleaning wastewater (`gate_effluent`)

One separately collected gate-cleaning liquid to its named treatment provider; retain whole-stream mass and non-additive silver/water/solids analyses. Do not use a direct-water-discharge flow for sewer transfer.

- Selected flow: Silver-bearing gate cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the same exchange-basis result from §8; this card does not divide it again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gate`
- Sources: `kodak-silver-gelatin-1976`; `jrc-nfm-2017`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_function | all stages | Use attributional accounting. Identify whether the foreground also delivers a separately contracted waste-treatment service, recovered filter dust or useful exported heat; none is assumed from the ash sale or from a disposal invoice. Ash formation is not refined-silver production. No avoided landfill, virgin silver, fuel or electricity credit is automatic. | jrc-ilcd-2010; jrc-nfm-2017 |
| a_subdivide | each exchange | First directly assign exclusive operations and inputs/outputs to the receiving function. Use actual subdivision, then justified virtual subdivision and causal technical models for indivisible equipment. Preserve all operating states and inherited vectors; a metal assay alone is not an allocation share of steam, air treatment or waste-treatment service. | jrc-ilcd-2010 |
| a_causal | each remaining exchange | For each genuinely remaining shared exchange identify the determining physical causality: how changes in each function change that particular flow. Test moisture/evaporation and enthalpy for thermal demand, actual reagent consumption for aqueous chemistry, and measured species/feed element/operating regime for emissions. The criterion may differ by exchange. Never arbitrarily choose physical versus economic allocation or apply one Ag mass fraction to everything. | jrc-ilcd-2010 |
| a_residual | remaining common process | Only if documented exclusive/virtual subdivision and exchange-specific physical causality cannot resolve a remaining common burden may a justified economic allocation be used. Measure contemporaneous actual values of the actual functions at the same common-process gate and physical state, excluding subsequent transport/refining and package value. Treatment fees, positive/negative feed prices and recovered outputs require explicit function/sign analysis; no absolute-value trick, fixed split, spot refined-silver price or future recovery yield. If that basis remains indeterminate, keep the allocation unresolved. | jrc-ilcd-2010 |
| a_conserve | all allocated vectors | Retain physical gross amounts independently of burden assignment. For each inventory component the assigned function vectors plus genuine retained WIP/stock and loss vectors reconcile to the original total. No burden disappears through internal cancellation or zero-output states. State the upstream waste allocation and cut-off choices with evidence; never default the generated wash water to burden-free. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

The aggregation_rule column declares only the eventual reporting basis and performs no arithmetic; collection and method fields retain undivided original records only. After raw-unit conversion, true-rate integration, real allocation and per-flow inheritance, exchange_basis alone performs A_ic / Q_c once.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_feed | p_wet | wash-water origin | generation and transfer records | source plant and line; original operating steps; date; wet mass; dry solids; free water; Ag species; element assays; source inventory vector; status; provider | Trace actual emulsion production and wash-water generation; weigh the complete segregated wet supply and independently analyse representative samples. Retain original units and full per-exchange upstream vector; do not normalise. | kg | each source lot | complete cohort including previous held material | actual emulsion source and receiving wet line | per 1 kg reference flow | source records; scale calibration; assays; upstream inventory evidence |
| cp_wet | p_wet | wet processing | weighing dosing and wastewater logs | batch id; feed; solution whole mass and assay; PN-10 preparation and activity; added water; pH time temperature; steam reference; electricity; decant; slurry; cleaning; O_WIP; C_WIP; inherited vector; failed and zero-output states | Weigh each actual whole purchased preparation and wet outlet separately; meter pumps/digestion and reconcile settling/neutralisation. Keep material/element balances, actual process timing and all off-spec/cleaning loads. Aggregate raw quantities by cohort and row only; no division. | kg; MJ | each batch and operating state | full cohort including startup idle shutdown and failures | one wet-processing line with shared-meter scope declared | per 1 kg reference flow | calibration; dosing logs; activity certificate; wastewater provider and sampling records |
| cp_fire | p_fire | incineration and abatement | metered furnace campaign | cohort; slurry wet/dry mass; feed speciation; furnace temperature time oxygen; burner gas and metering state; gas composition and measured density; afterburner; filter; caustic solution whole amount and assay; scrubber water; electricity; bottom ash; filter dust; purge; rejected ash; cleaning; O_WIP; C_WIP; inherited vector | Weigh actual slurry and each separate solid/liquid outlet and meter every utility/reagent. Keep start-stop, sustained firing, failed charges, idle, cleaning and rework, with uncertainty. Reconcile whole physical and independent elemental accounts before allocation; aggregate undivided raw quantities. | kg; MJ | each charge and matched emission interval | full furnace campaign and residual stocks | actual single-hearth furnace afterburner filter and scrubber | per 1 kg reference flow | feed/ash assays; calibrated meters; campaign log; residue transfer evidence |
| cp_release | p_fire | first bottom-ash quality release | calibrated net weighing and acceptance | cohort c; lot id; gross; actual tare; net first-released ash kg; free moisture; dry solids; Ag metal/halide/other species; C/H/O/N/S/Na/Cl/Br; contaminants; receiver specification; first-release time; duplicate and return flags; Q_c | Use calibrated lot scales and matched representative moisture/speciation samples; subtract actual tare and count only unique newly first-released bottom ash. Retain unnormalised net release masses Q_c and uncertainty. Closing FG already released is not added; reinspection and shipment are separate events. | kg | each first release | original release cohort retained through later delivery | cooled contained bottom ash at declared first-release gate | per 1 kg reference flow | scale calibration; sampling chain; release and receiver criteria; uniqueness ledger |
| cp_steam | p_wet | steam and actual external return | supplier meter and thermodynamic state records | steam mass; inlet pressure; inlet temperature; dryness; specific enthalpy; actual trap/header return mass; return pressure temperature enthalpy; supplier water-energy scope; direct-injected fraction | Meter actual supplied steam mass; obtain independently documented thermal state and enthalpy basis. Trace injected condensate into slurry. Record only genuine external returns and their supplier convention; aggregate raw mass and energy without invented boiler or density. | kg; MJ | each supply interval and return | full cohort including supply-system losses | actual supplier boundary and direct-injection header | per 1 kg reference flow | supplier receipts; state sensors; enthalpy method; return measurements |
| cp_air | p_fire | ambient combustion-air components | gas flow and composition measurement | interval; integrated dry air volume or true rate; temperature pressure; humidity; O2; N2; Ar; inlet CO2; trace constituents; uncertainty | Use calibrated inlet flow and independent composition/humidity at stated conditions. Integrate only true rates; do not multiply an accumulated volume by time again. Convert each constituent using independently justified gas-state relations; keep whole-air and component measures non-additive. No division. | kg | each matched furnace/afterburner interval | startup stable operation failure idle and shutdown | actual air inlet and leak-air boundary | per 1 kg reference flow | flow calibration; composition method; state/humidity records |
| cp_species | p_fire | each actual emitted species and size fraction | stack fugitive and laboratory records | species or size cut; CAS; source fraction; concentration; measurement basis; flow rate or integrated volume; interval; dry/wet and reference-state conditions; air subcompartment; molecular/elemental basis; detection limit; uncertainty; bypass and fugitive events | Measure each species and actual size fraction independently. Multiply matched concentration by volume once or integrate concentration times true rate over time; correct original wet/dry and reference states explicitly. Retain raw masses, nondetect intervals, source apportionment and actual extra species. Do not convert NOx/VOC/TEQ/COD wholesale into a molecule. | kg | each representative interval plus abnormal event | all operating states with unmeasured intervals identified | actual stack and fugitive boundaries | per 1 kg reference flow | laboratory methods; calibration; detection limits; state and flow logs; carbon/speciation evidence |
| cp_thermal | p_fire | actual heat losses and exports | energy balance measurements | fuel energy; steam enthalpy; electrical input; feed energy and moisture; output material enthalpy; real useful heat; measured loss; actual export; uncertainty | Close the actual furnace/afterburner/abatement thermal balance with independent feed, state and heat records. Keep losses and actual exports separate, including their declared sensible/latent scope; no default efficiency or automatic energy export. Retain undivided energy amounts. | MJ | each matched campaign interval | all operating states | actual thermal-system boundary | per 1 kg reference flow | meter/state calibration; enthalpy convention; independently measured feed heating value |
| cp_gate | p_gate | original-cohort services and physical stocks | stock packing delivery and return records | original c and Q_c; O_FG; C_FG; gross handled V; gross ash shipments; receiver accepted and rejected amount; returns and original delivery reversal; physical losses; package tare; electricity; water; cleaning effluent; service time H; each inherited vector | Track original lot/cohort through storage and actual receiver acceptance; keep physical movements separate from new production. Carry original burdens and only incremental rework/services; reverse erroneous original delivery entries in their cohort. Retain raw service totals, histories, zero-output work and stock vectors. H never replaces Q_c. | kg; MJ; h | each movement service interval and receiver event | release cohort plus all later related services | producer stock/loading and named receiver gate | per 1 kg reference flow | stock reconciliation; consignment; receiver documents; scale/meter records |
| cp_pack | p_gate | each steel drum and each PE inner bag | independent packaging ledger | type; material; form; composition; actual tare; receipt_id; component_id; receipt_time; origin; custody_history; cohort; owner; receipt_class; measured_raw_quantity_and_unit; prior_external_dispatch_id; inherited_vector; unused_stock_vector; burden_owner; provider_scope; O_empty; O_WIP; O_FG; O_reusable; P; N_ext; ER; C_empty; C_WIP; C_FG; C_reusable; S; EO; W; internal reuse; residual ash; provider; return and treatment records | Weigh each actual package material/form/type without residual contents and retain measured original quantity/unit, receipt time, source, component identity, custody, cohort, real owner and history. For each component receipt_id classify its physical mass exactly once as P, N_ext or ER, mutually exclusively. P is newly purchased packaging actually received, including components purchased in a whole supplied lot without a separate component invoice; no separate invoice does not make them N_ext. N_ext is first actual external nonpurchase receipt, including first borrowing/leasing or genuinely nonpurchased supplier-attached packaging. ER requires a linked real earlier external dispatch of that same component from this system; a first receipt is never ER or fabricated opening stock. Before a concrete dataset is complete, represent each actual N_ext material/form/type/inlet as an additional atomic physical receipt input interface with its measured raw quantity, cp_pack records and compatible identity/provider evidence; identify each actual steel drum or PE inner bag separately, never a collection selector. Keep drum_purchased/liner_purchased P-only and drum_received/liner_received true-ER-only; do not invent a receipt or force another whole-lot purchase. Keep all exclusive opening/closing empty, WIP-attached, FG-attached and reusable stocks, gross dispatch S, outward return EO and waste W; internal reuse cancels. Reconcile v_pack in undivided quantities. Carry real burden owner, inherited history/vector and unused-stock vector independently of physical receipts; unused stock is not automatic consumption. Assign only actual attributable supply/service burdens once within their evidenced scope, retaining existing whole-load/provider ownership; do not charge package manufacture again, duplicate a whole-load/provider, create a credit or new Q_c. Never count each reuse as procurement. | kg | each lot/movement and period end | all stocks and movements of relevant cohorts | actual container custody and reuse system | per 1 kg reference flow | tare measurements; purchase/return/waste receipts; physical stock count |
| cp_freight | p_gate | external road freight | weighed payload and route records | leg id; original cohort; actual road distance; ash payload; package payload; actual shared cargo; empty/return leg; provider scope; receiver identity; transfer and permit documents | Record actual loaded gross payload in tonnes and actual leg distance in km, including declared allocation to real shared cargo and provider treatment of empty running. Compute raw tonne-kilometres without a production division. External provider supplies its full fuel/emission scope once. | t km | each actual leg | all related deliveries and returns | producer to named receiver and declared return route | per 1 kg reference flow | weighbridge; route/haulier records; scope and receiver acceptance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert each undivided raw record to its declared unit first; 1 kWh = 3.6 MJ. For species i use matched concentration times integrated volume, or the integral of concentration times actual volume rate; never both. Any density is independently measured for the actual substance and state. | original_records; state_measurements; cp_wet; cp_fire; cp_species | converted_raw_records | jrc-nfm-2017; jrc-ilcd-2010 |
| cohort_assignment | all inventory rows | Construct A_ic from converted raw exchange i assigned to cohort c after exclusive/virtual subdivision and justified exchange-specific allocation; include opening inherited WIP vector and actual additions, retain closing WIP vector and every failed/lost destination. Keep the vector conservation and physical mass accounts distinct. | converted_raw_records; opening_vectors; closing_vectors; allocation_evidence | A_ic | jrc-ilcd-2010 |
| exchange_basis | all inventory rows | For Q_c > 0 report X_ic = A_ic / Q_c once. X_ic is the exchange amount per 1 kg first-released reference flow of the original cohort. Cards and downstream service ledgers consume X_ic without further division; when Q_c = 0 retain A_ic without a unit result. | A_ic; Q_c; cp_release | X_ic | jrc-ilcd-2010 |
| delivery_history | p_gate | For an actual historical shipment retain its original first-release inventory vector and append only its actual incremental gate-service vector, attributed to original Q_c; shipment gross V and service H never generate a new production denominator. Reverse real original-delivery records for returns and retain real incremental rework. | original_cohort_vector; raw_service_records; original_delivery_records; cp_gate | delivery_vector | jrc-ilcd-2010; epa-photographic-1976 |
| physical_accounts | all stages | For each independently identified stream: opening physical stock plus external inputs equals closing physical stock plus external outputs plus measured transformation terms at the chosen gate. Cancel verified internal transfers; elemental accounts separately apply each actual species composition. Reaction water requires independent reaction evidence; do not fit multiple unknowns from one residual. | weighed_streams; independent_composition; reaction_evidence; cp_air | physical_and_element_accounts | kodak-silver-gelatin-1976; jrc-nfm-2017; jrc-ilcd-2010 |
| package_accounts | p_gate | For each separate package material/form/type: O_empty + O_WIP + O_FG + O_reusable + P + N_ext + ER = C_empty + C_WIP + C_FG + C_reusable + S + EO + W. P is actual new procurement received; N_ext is first external nonpurchase physical receipt; ER is actual receipt linked to a prior external dispatch of the same component. Classify each component receipt once, mutually exclusively, using cp_pack and its actual atomic receipt interfaces; a purchased whole-lot component remains P without a separate invoice. Opening/closing empty, WIP-attached, FG-attached and reusable categories are exclusive. Internal reuse cancels; S follows gross physical dispatch and excludes content mass. EO is actual outward return and W is actual waste; retain both independently. Physical receipt and stock quantities do not by themselves assign consumption or manufacturing burden; preserve real owner, history, inherited and unused vectors and one actual supply/service burden within its provider scope, without duplicate whole-load/provider, credit or new Q_c. | raw_package_records; cp_pack | package_conservation | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_origin | wash_water | A traceable actual emulsion-manufacture source and inherited inventory are mandatory; a generic wastewater flow or prior PCR conclusion cannot replace them. | source records; original provider inventory; allocation decision |
| dq_example | all stages | Patent Example 1 and the nearby general embodiment report different dry sludge silver contents; neither is a finished-ash assay, industry range, present factory recipe or default recovery. JRC dry combustible-feed fuel observations cannot establish this wet sludge fuel demand. | original context; independent actual assays and energy measurements |
| dq_completeness | all operating states | Retain measured, estimated, missing and below-detection flags per row, including every extra real flow/species. No numerical factory inventories, grade, density, fuel demand or abatement factor is supplied by this PCR. | coverage ledger; uncertainty; original raw records |
| dq_receiver | ash_release; ash_dispatch | Verify technical material acceptance and actual authorised receiver scope for the declared bottom ash and packaging. Historic sources support process function only; actual current receiver documents must accompany the dataset. | receiver specification; assay; permit-scope and transfer records |
| dq_providers | all purchased and waste streams | Check each actual provider against complete native restrictions and the declared physical supply. Ordinary supplier/grade/quantity gaps are foreground collection work; a known incompatible CAS, concentration, route, form, property or medium cannot be waived. | provider scope; specifications; full identity and unit-chain review |
| dq_method | all allocations and conversions | Retain exchange-specific attribution and original/converted units with independently supported compositions and states. Basis checks do not solve unmeasured chemistry, reaction water, market allocation or real plant completeness. | allocation and balance dossier; sensitivity analysis |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | dataset | Confirm a single photographic emulsion-manufacture wash-water source, the PN-10/sulfuric-acid precipitate route and actual incinerated bottom ash. Reject mixed precious-metal-ash selectors, non-precious ash 39320 and non-ash precious-metal scrap 39332; source-specific examples are not interchangeable. | un-cpc3-2025; kodak-silver-gelatin-1976 |
| v_native | all UUID-bearing rows | Check full native names, synonyms/comments, CAS, fixed grade, form, route, location, medium/type and every property against the actual exchange. Require search membership and state-100 exact-version direct evidence plus exact referenced property, unit-group and real reference unit. Preserve all restrictions in this card context. No classification-only or name-only acceptance. Unresolved specific input identities, including wash_water, remain ordinary gaps requiring compatible native identity and actual source/provider records before a concrete dataset is complete. | kodak-silver-gelatin-1976; jrc-nfm-2017 |
| v_denominator | ash_release | Verify exactly one ash_release reference output of 1 kg. Reconcile lot release Q_c with gross wet weight less actual tare and release moisture sample; Q_c is not dry Ag kg or total shipments. Closing FG already belongs to first release. Preserve old delivery/return vectors and reverse an original false delivery record in its original cohort; never count reinspection as new manufacture. | jrc-ilcd-2010 |
| v_raw | all collection protocols | Collect only undivided original records. Convert original units and integrate actual rates once, allocate real shared operations and apply per-flow WIP inheritance before the sole exchange-basis division A_ic / Q_c. Neither cards, protocol aggregation nor gate services divide an already normalised value again. If Q_c=0 retain raw burdens and unresolved destination; publish no unit result. | jrc-ilcd-2010 |
| v_physical | all gates | Independently close physical mass, Ag and C/H/O/water and other relevant element accounts with uncertainty; specimen analysis is not additional exchanged mass. Whole mixed gas/liquid measurements and their mutually exclusive source/species partitions are non-additive. Never infer silver recovery, reaction water or unknown species from one balance residual. | kodak-silver-gelatin-1976; jrc-nfm-2017; jrc-ilcd-2010 |
| v_pack | each packaging type | For each drum and PE bag material/form/type separately enforce O_empty+O_WIP+O_FG+O_reusable+P+N_ext+ER=C_empty+C_WIP+C_FG+C_reusable+S+EO+W. Verify measured raw receipt quantity/unit, receipt_id/component_id, time, origin, custody, cohort, real owner, history, inherited/unused vectors and provider scope against cp_pack. Each receipt is exactly one of P new procurement, N_ext first nonpurchase external receipt or ER true return linked to a real prior external dispatch of that same component. Reject first borrowing/leasing or genuinely nonpurchased supplier-attached receipts disguised as P, ER or opening stock; retain purchased whole-lot components as P even without separate invoices. Require the additional atomic physical receipt interfaces for every actual N_ext component; existing P-only and ER-only cards keep their meanings. Opening/closing empty, WIP-attached, FG-attached and reusable categories are mutually exclusive; retain gross S, EO and W. S follows gross physical dispatch, not Q; internal reuse cancels and never becomes fresh procurement or automatic coproduct. Match residual ash to its content ledger, excluding it from steel/PE mass. Verify physical quantity conservation separately from real owner/history and unused vectors; actual attributable supply/service burdens occur once with their original whole-load/provider scope, without second manufacture, duplicate burden, credit or new Q_c. | jrc-ilcd-2010; jrc-nfm-2017 |
| v_thermal | steam and furnace | Verify actual steam mass plus enthalpy and supplier water/energy scope, condensate state and genuine return; close furnace/afterburner useful heat and losses without invented generation/export. Integrated volume is not multiplied by time again; only rates are integrated. Obtain independent substance/state density, never water density for gas/reagent/slurry. | kodak-silver-gelatin-1976; jrc-nfm-2017 |
| v_species | emissions and effluents | Keep air/water compartments, molecular mass versus elemental/indicator basis and fossil/biogenic source partitions explicit. Add every real detected species and outlet not listed here before completeness can be claimed; total VOC/NOx/COD/TEQ cannot be substituted for a particular molecule. No assumed scrubber capture, zero fugitive or credit from below detection. | jrc-nfm-2017; jrc-ilcd-2010 |
| v_receiver | ash_dispatch | Require a named receiver, its actual authorised scope for this material and assay/containment acceptance, transport and consignment evidence. Historical EPA wording is evidence of a receiver function, not current law. Missing actual receiver identity/acceptance, current authorised scope, source formation or inherited inventory prevents completion of the concrete dataset. Keep all ordinary input-identity, site-quantity and auxiliary-provider gaps explicit and resolve them without invented facts. | epa-photographic-1976; jrc-nfm-2017 |
| v_disclosure | dataset profile | Disclose unresolved identities/evidence, measured and unmeasured operating states, extrapolation, temporal/geographic representativeness, allocations and cut-offs. An engineering/schema/basis check is not scientific or translation approval, current legal compliance or accepted classification coverage. | jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Upstream inventory for this defined bottom-ash recovery feed with actual original-cohort later services; not refined silver |
| allowed_use | Only a package matching source, thermal route, state, receiver conditions and all native/provider restrictions |
| excluded_use | Generic precious-ash selector; unburned sludge; other metal waste; refined silver; unconditional credits; current legal/scientific approval claims |
| required_metadata | Complete §3 qualifiers; actual source/receiver identities; original-cohort Q_c; per-flow vectors; providers/method version; every actual species and outlet |
| required_quality_disclosure | All native/evidence gaps, unmeasured states, inherited burdens, allocations, cut-offs and uncertainty; scientific pending and Chinese aligned are not reviewed |
| update_trigger | Review changes in source/feed formulation/species/furnace/abatement/heat supply/reference gate/receiver/packaging/provider/allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Ver.3.0 structure, 30 June 2025: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 39333 precious-metal ash versus 39320 non-precious ash and 39332 non-ash scrap; classification scope only |
| kodak-silver-gelatin-1976 | literature | Eastman Kodak, US3982932A (1976), Fig.1 and Example 1; complete original columns 1–8 and adjacent Examples 2–3: https://patents.google.com/patent/US3982932A/en | Wash water → direct steam/PN-10 alkaline digestion → sulfuric precipitation/settling/neutralisation → actual sludge incineration to ash; adjacent counterexamples; no default ash assay/yield |
| jrc-nfm-2017 | official_guidance | JRC, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries (2017), §7.1.1.1–7.1.1.2, printed pp.732–733: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | Photographic incineration equipment and afterburner/filter/caustic scrubber; ash/filter-dust and subsequent smelting boundary; not this wet-sludge fuel demand |
| epa-photographic-1976 | official_guidance | US EPA, Photographic Effluent Guidelines, 41 FR 29078–29082 (14 July 1976), Appendix B, printed p.29080: https://www.epa.gov/sites/default/files/2015-11/documents/photographic_interim-final_07-14-1976_41-fr-29078.pdf | Historical original corroborates separated photographic-solids ash sent to metal refiner and treatment outlets; not present authorisation, legal judgment or exemption |
| jrc-ilcd-2010 | official_guidance | JRC, ILCD Handbook — General guide for LCA, Detailed guidance, first edition March 2010, §7.9.2–7.9.3, printed pp.255–272: https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality: subdivision, virtual subdivision, exchange-specific determining physical causality and residual common-gate economic allocation; not factory values or ash-recovery credits |
| alfatherm-static-incinerator | literature | Alfa Therm Limited, Static (Fixed Hearth) Incinerator, undated manufacturer technical page; Engineered for Reliable Batch Operation, Working Principle, Technical Specifications and FAQ: https://alfathermltd.com/static-incinerator | Batch stationary fixed-hearth primary chamber with separate secondary combustion and explicit natural-gas fuel option; equipment-level synthesis only, not photographic-feed/site evidence or numerical defaults |
| epa-incinerator-training-1989 | handbook | US EPA, Hospital Incinerator Operator Training Course, Volume I: Student Handbook, EPA-450/3-89-003, March 1989; Session 3, printed pp.3-12–3-16 and 3-23–3-24, Fig.3-6; Glossary, Auxiliary Fuel Burner (PDF p.245): https://nepis.epa.gov/Exe/ZyPDF.cgi/2000MKZW.PDF?Dockey=2000MKZW.PDF | Distinct primary/secondary burners and natural-gas auxiliary firing/fuel trains in batch-compatible incinerator equipment; medical-waste context, not this plant's fuel amount, operating settings, emissions or legal approval |
