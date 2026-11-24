---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residues-of-starch-manufacture-and-similar-residues
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Residues of starch manufacture and similar residues: mechanically dewatered fresh potato pulp

## 1. Scope and Applicability

This retained category record develops one evidenced complete endpoint: single-botanical-origin potato starch pulp supplied fresh and wet after mechanical dewatering, without fermentation, blending, thermal drying or pelleting, for an actual declared cattle-feed-material receiving use. The AKV product sheet establishes this fresh-use product and distinguishes the alternative of ensiling. Its typical composition, feeding values and seasonal information are neither fixed recipes nor evidence for a current order. The producer decanter report establishes technology context, not acceptance of a particular installed machine. Independent EFISC process diagrams support separation and wet-pulp dewatering and explicitly identify their basic schemes as examples. OECD Figure 3 also distinguishes dewatered pulp from fruit-water protein; neither source certifies a particular lot or factory.

The method begins at a verified separated-wet-pulp handover and covers the actual complete residual-product collection, screening where needed, dewatering where needed, quality release, temporary storage and delivery. The real supplier conveys cultivation-to-starch-separation and other coproduct joint burdens once. This method does not repeat the 23220 method ending in starch or other primary products; single wet pulp is neither compound feed nor cereal-milling bran nor brewing/distilling dregs. Evidence is a Danish commercial example plus European sector methodology; each other site must establish compatibility rather than claim universal industry performance or actual sales.

The CPC explanatory notes give the 39130 heading without an additional inclusion/exclusion list. Assignment of this potato-starch pulp route is a methodological interpretation combining that heading with the original product/process evidence. Neighbouring sugar-manufacture residues (39141/39149), cereal/legume-working residues (39120), brewing/distilling dregs (39160), starch/gluten (23220) and prepared feed (23319) are outside this endpoint. Potato protein and concentrated potato juice are also separate streams, not synonyms for pulp. The first-release gate, stock equations and collection protocols below are authored modelling requirements, not quotations or numerical findings from those sources.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.residues-of-starch-manufacture-and-similar-residues |
| classification_refs | CPC 3.0:39130, fresh wet potato-starch pulp under the maintained narrower classification decision |
| covered_products | Mechanically dewatered fresh potato starch pulp |
| excluded_products | Starch and gluten; whole potatoes; puree; peel; generic food waste; bran; DDGS; fermentation dregs; molasses or condensed-juice mixtures; compound feed; ensiled pulp; dried pulp pellets |
| representative_product | Mechanically dewatered fresh potato starch pulp |
| production_route | Separated starch-pulp handover→actual collection and necessary screening→mechanical dewatering where required→first whole-lot quality release→physical FG storage and actual delivery services |
| market_state | Fresh wet loose feed material; actual container or cover accounted separately; receiver conditions required; no dry-feed or nutrient equivalence |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One conforming supply of mechanically dewatered fresh wet potato starch pulp for a declared cattle-feed receiving use |
| How much | 1 kg net wet product at the supplier first whole-lot quality-release gate; actual delivery retained in a lot service ledger |
| How well | Meets actual receiving specification, lot dry matter or moisture, foreign-matter, applicable hygiene and storage/transport-time conditions; no equivalence to 1 kg dry feed or a unit of protein/energy |
| How long or cycle | One first-release lot supply; H is the bounded observation period; actual holding and transport limits require the real specification, without an invented duration |
| reference_flow_link | first_release_pulp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Mechanically dewatered fresh potato starch pulp |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | potato species and single botanical feedstock; named starch manufacturer and site; separation and handover gate; actual received and supplied dewatering state; mechanical technique and whether already upstream; fresh wet and unfermented status; absence of molasses or juice or feed blending; declared cattle-feed receiving use and contract; product or Waste status and real destination; lot net wet mass and tare; lot dry matter or moisture; foreign matter and applicable hygiene acceptance; actual maximum holding and transport time; storage and covering conditions; first whole-lot quality release gate and history; reference period H and Q; opening and closing WIP and FG; gross delivery and return identities; packaging and reusable-stock basis; upstream vector and joint-process allocation interface; geography and technology and supplier compatibility; native flow identity and property support gaps |

Every required qualifier belongs in dataset metadata and the complete usable context of the reference product and relevant flow descriptions. UUIDs remain absent without native direct-read evidence; a flow name is not database identity confirmation. These normative restrictions govern the full reference state and every relevant exchange, not only this section.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `wet_reference` | reference product | Mass | kg | Reference quantity is measured net wet mass after tare; dry matter, protein, energy, sales and transported quantities never replace Q. |
| `wet_dry_bridge` | pulp and liquid | Mass | kg | Whole-stream wet mass is the main ledger; DM=wet_mass×measured dry-matter fraction; reconcile water independently with measured moisture and destination; constituent bridges are non-additive and no moisture default is set. |
| `raw_units` | raw numerators | each raw property | each raw unit | Retain original meter unit and state; integrate only a real rate once. Volume-to-mass uses independently determined density of that substance at that state; count-to-kg requires measured article mass rather than an invented unit weight. |
| `sole_q` | first release | Mass | kg | Q is the newly first-released whole-lot net wet mass of the same boundary, state and quality during H; conforming closing FG is already in Q. H is not another denominator; Q=0 retains real loads without a per-unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole pulp stream from an actual potato starch line at the separated-wet-pulp handover; distinguish already dewatered from unde-watered state and inherit burdens up to that point |
| starting_condition_role | Material and burden interface into residual-product foreground; not a zero-burden cut-off for cultivation or starch manufacture |
| product_classification_scope | This fresh wet mechanically dewatered potato pulp within 39130; not all starch residues |
| recursive_input_rule | Purchased same-category dewatered pulp is one upstream product and burden input; include only real additional conditioning without repeating the starch route; internal returns cancel only at paired endpoints |
| upstream_dataset_requirement | Real supplier cultivation and joint starch-process dataset, period/geography/technology, cofunctions, actual allocation and handover state; missing information remains unresolved rather than zero |
| disclosure | Declare starting condition, separate manufacturing and FG gates, Q, every required qualifier, actual receiver and service gates, burden vintages, stocks/allocation, unbound identities and background compatibility |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | declared starting condition | Start at a measured separated-potato-pulp handover. Cultivation, potato receiving/washing/rasping and starch-component separation belong to the supplying system. Link its real dataset and boundary, joint-product allocation, separation state and residual burden vector once. Do not repeat the whole starch process or silently cut it off. | `efisc-starch-processing-2014`; `ilcd-allocation-2010`; `alfa-laval-starch`; `oecd-potato-2020` |
| `boundary_scope` | qualifying route and actual exceptions | Use single-origin potato starch pulp supplied fresh after verified mechanical dewatering. Exclude ensiled/fermented pulp, dried pellets, blended feed, added molasses/condensed juice, peels, puree, whole potatoes, gluten and fermentation dregs from qualifying Q. If an excluded operation actually occurred, retain every physical flow and burden and fail the qualifying-route claim; do not erase it by a scope label. | `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014` |
| `boundary_complete` | all included operations | Include real receipt, transfer, screening where present, dewatering where required, weighing, sampling, temporary storage, covering, loading, actual delivery, cleaning, rework, maintenance material and residual management. Record start/stop, idle, failed trials, zero-output campaigns, spills and unauthorised work that occurred. Add each newly identified actual material, carrier, waste and chemical emission as an individual flow before claiming completeness. | `efisc-starch-processing-2014` |
| `boundary_physical_gates` | manufacturing and FG gates | Keep grossV physical crossings, inherited environment vector A, genuine co-function allocation and sole Q separate. Complete manufacturing, FG-service and combined physical gates with opening/closing WIP and FG. Cancel internal transfers only with paired endpoints of the same material state and lot; carry both physical quantities and inherited vectors. Economic or service shares never scale actual product, water, waste or emission masses. | `ilcd-allocation-2010` |
| `boundary_liquid` | dewatering and return interface | Measure each actual liquid outlet with water, suspended solids, solubles and recoverable starch evidence. Whole liquid and constituent assays are non-additive. Separate actual recovery from losses. A paired water return to starch manufacture is not new intake or wastewater. Do not fit both unknown moisture loss and unknown solids loss using one residual, and do not declare all water difference evaporation. | `efisc-starch-processing-2014`; `akv-pulp-datasheet-2024` |
| `boundary_energy` | energy and thermal interfaces | Keep each energy carrier separate. Wet mechanical dewatering does not establish drying combustion, a boiler, steam or heat demand. If actual hot water, steam or other thermal service exists, add its real supply mass, pressure/temperature/phase, enthalpy basis, supply energy and external condensate/return-water agreement as one consistent carrier ledger. Do not duplicate heat MJ and boiler fuel; do not invent a water return. | `efisc-starch-processing-2014` |
| `boundary_delivery` | first release and delivery | Q is the first quality-release quantity, not net sales or dispatch. Conforming closing FG is already included in Q. Preserve all actual subsequent storage, covering, handling and delivery in a separate lot service ledger. Opening FG keeps its historical burden; returns reverse the original delivery and preserve original release status. Add real incremental rework F; subtract X only for proved same-side duplicate entries. | `ilcd-allocation-2010`; `akv-pulp-datasheet-2024` |
| `boundary_article` | each packaging or reusable article | For each actual cover or packaging article reconcile opening empty stock plus attached WIP/FG stock plus purchases plus external returns received = closing empty/attached stock plus sheets leaving with gross physical shipments plus external returns sent plus waste. Internal reuse cancels. Keep article and adhered-product masses separately and do not put packaging in Q or assign a default coproduct credit. | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `recovery` | Separated-pulp receipt and collection | required | Every included lot | Begin after verified starch separation and inherit upstream joint burdens once | per 1 kg reference flow |
| `dewatering` | Mechanical conditioning and liquid-interface reconciliation | required | Actual dewatering is conditional on received state; interface reconciliation always applies | No second pass if supplier already dewatered; actual separation outlets remain explicit | per 1 kg reference flow |
| `release` | First whole-lot quality release | required | Fresh cattle-feed receiving specification is met | Sole Q gate; reject unqualified material without removing its burdens | per 1 kg reference flow |
| `delivery` | FG storage and actual delivery services | required | Include every actual service; individual fuel and freight rows are conditional | Track old/new FG separately; dispatch never creates new production | per 1 kg reference flow |
| `cleaning` | Cleaning and residual collection | required | Every actual cleanup and residual outlet; chemicals and treatment operations only when present | Retain failed and zero-output burdens; add actual atomically named streams | per 1 kg reference flow |

Each card below retains one actual atomic exchange. Fill conditional rows with measured quantities only when present; absence requires an evidenced not-applicable decision, never zeroing an actual failed, cleanup or additional operation. Add a concrete card for each real unlisted flow; no binding exception permits an other collection. Raw numerators and source units enter protocols; physical gross amounts, allocated environmental numerators and once-normalized results are separate non-additive ledgers.

### Process: Separated-pulp receipt and collection (`recovery`)

#### Inputs

##### Product flows

###### Unfermented wet potato starch separation pulp (`separated_pulp`)

Receive the physically separated potato pulp at the stated handover before residual-product conditioning. Identify single potato feedstock and starch-manufacturing origin. Record actual wet state and whether dewatering has already occurred. Its whole wet mass is one material entry; water and dry constituents are non-additive assays. Carry the supplier joint-process burden vector once with a documented allocation interface. Never substitute starch, whole potatoes, peels or wastewater sludge.

- Selected flow: Unfermented wet potato starch separation pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pulp_recovery`
- Sources: `efisc-starch-processing-2014`; `ilcd-allocation-2010`

###### Electricity (`recovery_electricity`)

Measure actual collection and conveyor power including start-stop and idle operation. Keep purchased electricity separate from diesel and from the upstream starch line. Select a real voltage and supplier dataset for the eventual site.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_power_recovery`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfermented wet potato starch separation pulp (`collected_pulp`)

Internal transfer to dewatering, paired with dewatering_feed by lot, wet mass, dry matter, water and inherited burden vector. Cancel both endpoints only within the combined boundary.

- Selected flow: Unfermented wet potato starch separation pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pulp_recovery`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

###### Mineral stone screenings from separated potato pulp (`mineral_screenings`)

Conditional on an actual mineral-screening outlet after the declared starting condition. Record mineral identity, attached pulp and water without double counting. Washing-potato soil, leaves and stones before starch separation belong to the upstream interface, not a second foreground potato-washing process.

- Selected flow: Mineral stone screenings from separated potato pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste_recovery`
- Sources: `efisc-starch-processing-2014`

##### Elementary flows

### Process: Mechanical conditioning and liquid-interface reconciliation (`dewatering`)

#### Inputs

##### Product flows

###### Unfermented wet potato starch separation pulp (`dewatering_feed`)

Paired input from collected_pulp. If the received pulp is already in the declared mechanically dewatered state, do not invent another dewatering pass; retain actual transfer and verification work and the upstream conditioning burden.

- Selected flow: Unfermented wet potato starch separation pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pulp_dewatering`
- Sources: `efisc-starch-processing-2014`

###### Electricity (`dewatering_electricity`)

Record actual decanter, pump or other verified mechanical dewatering equipment power. The producer evidence establishes mechanical dewatering and a pulp-decanter investment context; it does not establish screw pressing, a particular installed machine or any universal energy value.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_power_dewatering`
- Sources: `akv-pulp-datasheet-2024`; `akv-pulp-investment-2024`; `efisc-starch-processing-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically dewatered fresh potato starch pulp (`conditioned_pulp`)

Measure whole wet pulp after actual mechanical conditioning and transfer to release_feed. Retain measured dry matter, moisture, residual starch and foreign matter as non-additive quality information. No thermal drying, granulation, molasses, concentrated juice, fermentation or compound-feed mixing is part of this qualifying endpoint.

- Selected flow: Mechanically dewatered fresh potato starch pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pulp_dewatering`
- Sources: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

###### Potato pulp dewatering centrate returned to starch manufacture (`centrate_return`)

Include only an actual usable liquid return with a documented receiving endpoint in the starch line. Measure water, suspended solids, soluble solids and residual starch separately as non-additive constituents of this one whole liquid. A verified paired return is internal in the integrated system; an external return requires supplier-interface and burden conventions. It is not new freshwater, discarded effluent or an automatic credited coproduct.

- Selected flow: Potato pulp dewatering centrate returned to starch manufacture
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_liquid_dewatering`
- Sources: `efisc-starch-processing-2014`

###### Recovered potato starch suspension (`recovered_starch_return`)

Conditional on a physically separate measured starch-recovery outlet. Do not create this row from the residual-starch assay already contained in centrate_return or pulp. Record the receiving starch process and paired mass and burden interface; no default recovery credit.

- Selected flow: Recovered potato starch suspension
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_liquid_dewatering`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

###### Discarded potato pulp dewatering centrate (`discarded_centrate`)

Record only the actual discarded fraction by destination and treatment contract. Distinguish it from centrate_return using outlet and batch identifiers. Its suspended and dissolved constituents stay in the whole effluent entry unless physically separated; COD, TOC and total nitrogen are monitoring indicators and are not masses of named chemicals.

- Selected flow: Discarded potato pulp dewatering centrate
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_liquid_dewatering`
- Sources: `efisc-starch-processing-2014`

##### Elementary flows

### Process: First whole-lot quality release (`release`)

#### Inputs

##### Product flows

###### Mechanically dewatered fresh potato starch pulp (`release_feed`)

Internal input paired with conditioned_pulp. Include opening and closing untested stock and WIP, failed lots and genuine incremental rework. Reinspection or return of an already released lot does not create new production.

- Selected flow: Mechanically dewatered fresh potato starch pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pulp_release`
- Sources: `efisc-starch-processing-2014`

###### Electricity (`release_electricity`)

Record actual scales, sampling equipment and release-control power. Include failed and zero-output testing without assigning fictional production to it.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_power_release`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically dewatered fresh potato starch pulp (`first_release_pulp`)

The sole quantitative reference is first whole-lot quality release of this fresh wet product for a declared cattle-feed receiving use. Q is measured net wet mass newly released during H and includes conforming closing FG. Exclude opening already released FG, duplicate release, internal transfers, packaging and rejected mass. Acceptance requires actual botanical origin, mechanical-dewatering state, nonfermentation, no blending, moisture or dry matter, foreign-matter checks, hygiene and receiver-approved time and storage conditions. Do not substitute dry feed, starch, puree, peel, gluten, DDGS or bran.

- Selected flow: Mechanically dewatered fresh potato starch pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: source_rule
- Collection protocol: `cp_release`
- Sources: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

##### Waste flows

###### Wet potato pulp laboratory sample residue (`laboratory_pulp`)

Measure material destructively sampled or discarded after testing and its real destination. It is not Q; material returned unchanged is a paired internal transfer. Account for any analytical chemical separately when it crosses the foreground boundary.

- Selected flow: Wet potato pulp laboratory sample residue
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste_release`
- Sources: `efisc-starch-processing-2014`

##### Elementary flows

### Process: FG storage and actual delivery services (`delivery`)

#### Inputs

##### Product flows

###### Mechanically dewatered fresh potato starch pulp (`released_stock_input`)

Pair the current-period released quantity with first_release_pulp. Track physically distinct opening FG, customer returns and closing FG with their historical burden vectors in the stock ledger. This input does not add Q and does not purchase the same pulp again.

- Selected flow: Mechanically dewatered fresh potato starch pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fg`
- Sources: `efisc-starch-processing-2014`

###### Electricity (`delivery_electricity`)

Include actual storage, handling, loading and dispatch electricity, including service to older FG and failed dispatch. Assign those services to their physical lots using a separate service ledger; do not silently charge older FG to new Q.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_power_delivery`
- Sources: `efisc-starch-processing-2014`

###### Flexible plastic cover sheet for wet potato pulp (`cover_sheet`)

Record the actual complete purchased cover sheet only when used. The producer specifies plastic covering, not its polymer or mass; obtain the supplier article composition rather than assuming polyethylene. A composite sheet is purchased once with non-additive constituent information. Track reusable sheet stocks, external returns, shipped sheets and waste separately from wet-product Q.

- Selected flow: Flexible plastic cover sheet for wet potato pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

###### Diesel fuel (`diesel`)

Conditional on actual foreground-owned handling or transport combustion. Record whole supplied fuel, density at its measured state when litres are converted and independently supported fuel composition and exhaust. Do not add this fuel to a hired freight dataset that already includes it. Wet pulp production does not imply a dryer, boiler or natural-gas input.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fuel`
- Sources: `efisc-starch-processing-2014`

###### Road freight transport of wet potato pulp (`freight`)

Conditional on an actual purchased delivery service. Record route, actual wet payload, distance, vehicle configuration, empty travel, load constraint and provider boundary. Use real transported gross payload and a justified service allocation; never use economic product allocation to shrink physical tonne-kilometres. Do not assume a default receiver distance or vehicle load.

- Selected flow: Road freight transport of wet potato pulp
- Flow property / unit: Transport service / tkm
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_transport`
- Sources: `ilcd-allocation-2010`; `efisc-starch-processing-2014`

##### Waste flows

##### Elementary flows

###### Oxygen in air (`oxygen`)

Conditional on actual included combustion or oxidation. Independently establish O2 uptake and gas state for physical and elemental balances; do not invent oxygen consumption merely to force closure. Retain inert nitrogen throughput as a separate measured non-additive gas ledger and add actual transformed nitrogen species.

- Selected flow: oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

#### Outputs

##### Product flows

###### Mechanically dewatered fresh potato starch pulp (`gross_dispatched_pulp`)

Actual gross physical consignments leaving for the named receiver; include old and new FG by vintage. This output is a service/stock-ledger endpoint and never another quantitative reference. Preserve delivery, refusal, original-delivery reversal and return identifiers. A receiver reinspection does not create Q. Record the transport and acceptance gate explicitly; downstream ensiling and animal feeding are outside this fresh-product method.

- Selected flow: Mechanically dewatered fresh potato starch pulp
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fg`
- Sources: `akv-pulp-datasheet-2024`; `ilcd-allocation-2010`; `efisc-starch-processing-2014`

###### Reusable flexible plastic pulp cover sheet (`returned_cover`)

Only an actual sheet returned externally to its owner is a product return. Record article identity, mass, use condition and receiver. Internal reuse cancels within sheet stocks and is neither external return nor fresh purchase nor a coproduct credit.

- Selected flow: Reusable flexible plastic pulp cover sheet
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

###### Rejected wet potato starch pulp (`spoiled_pulp`)

Record actual spoiled, contaminated, expired, spilled or refused pulp with reason, wet mass, dry matter, vintage and real treatment or alternative-use destination. Exclusion from qualifying Q never removes the material, inherited burden, incremental handling or measured emissions from the accounts. Feed use, a low price or a waste label alone does not establish its burden or legal status.

- Selected flow: Rejected wet potato starch pulp
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste_delivery`
- Sources: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`; `ilcd-allocation-2010`

###### Discarded flexible plastic pulp cover sheet (`waste_cover`)

Measure this one discarded cover article by composition and destination. Separate its own mass from adhering wet pulp with a documented non-additive bridge; do not count adhered pulp twice or hide it by setting sheet mass to zero.

- Selected flow: Discarded flexible plastic pulp cover sheet
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_packaging`
- Sources: `efisc-starch-processing-2014`

##### Elementary flows

###### Water vapour (`combustion_water_vapour`)

Only actual water vapour leaving included foreground combustion. Distinguish independently evidenced reaction water from fuel hydrogen and oxygen from free moisture carried with fuel or air and from liquid condensate. Do not fit reaction water and unknown evaporated water with one mass residual, and do not add a fictitious dryer.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`


###### Carbon dioxide of fossil origin (`fossil_carbon_dioxide`)

Conditional on actual foreground fuel combustion; preserve fossil origin, measured or independently supported fuel carbon and exhaust basis. Do not duplicate emissions embedded in purchased freight.

- Selected flow: carbon dioxide (fossil)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

###### Carbon monoxide (`carbon_monoxide`)

Record actual CO to air for included combustion, with exhaust condition and method. A total VOC or total-carbon result does not identify this species.

- Selected flow: Carbon monoxide of fossil origin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

###### Nitrogen monoxide (`nitrogen_monoxide`)

Record actual NO to air independently from NO2; an NOx aggregate requires real speciation or remains an unresolved monitoring indicator.

- Selected flow: Nitrogen monoxide
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

###### Nitrogen dioxide (`nitrogen_dioxide`)

Record actual NO2 to air, not an assumed fraction of NOx. Retain fuel and intake-air nitrogen contributions where relevant.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

###### Sulfur dioxide (`sulfur_dioxide`)

Only actual SO2 from the included process, constrained by independently supported fuel sulfur and measured exhaust. No fixed sulfur factor is prescribed.

- Selected flow: sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

###### Elemental carbon soot (`soot_carbon`)

Only actual elemental-carbon soot established by species-specific measurement. Total particulate matter, dust or mixed aerosol is not elemental carbon; add each actual resolved species or specific collected waste separately.

- Selected flow: Elemental carbon soot
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_delivery`
- Sources: `efisc-starch-processing-2014`

### Process: Cleaning and residual collection (`cleaning`)

#### Inputs

##### Product flows

###### Water supplied for equipment cleaning (`cleaning_water`)

Record actual fresh product water, not internally recycled centrate. Preserve supplier, water quality and raw meter unit. Convert measured volume using independently justified density of this water at its recorded condition; a flow reference property is not density.

- Selected flow: Water supplied for equipment cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `efisc-starch-processing-2014`

###### Aqueous sodium hydroxide cleaning formulation (`sodium_hydroxide_solution`)

Conditional on actual use of this specific whole purchased formulation. Record supplier formulation and concentration; purchase its carrier water and active content once as part of the supplied solution. If mixed on site, instead record each actual purchased ingredient plus real mixing energy and losses, and cancel the internal solution transfer. Do not infer this chemical from a generic cleaning instruction.

- Selected flow: Aqueous sodium hydroxide cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `efisc-starch-processing-2014`

###### Food-contact equipment lubricating oil (`lubricating_oil`)

Conditional on actual issued oil for the included equipment, including maintenance and replacements. Record the complete supplied formulation and supplier compatibility; food-contact suitability is not proof of chemical identity, absence of leakage or a zero upstream burden.

- Selected flow: Food-contact equipment lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `efisc-starch-processing-2014`

###### Electricity (`cleaning_electricity`)

Measure pumps, equipment cleanup, spill handling and actual residual collection energy. Retain loads from zero-output periods and any unauthorised operation that physically occurred. Add each actual heat carrier or other material as a specific separate flow if present.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_power_cleaning`
- Sources: `efisc-starch-processing-2014`

##### Waste flows

##### Elementary flows

###### Oxygen in air (`cleaning_oxygen`)

Only actual oxygen uptake in included aerobic deterioration or residual treatment, independently measured or established by a real stoichiometric balance. This is distinct from delivery combustion oxygen. Do not infer O2 from a wet-mass residual or COD alone; retain inert gas and actual reaction-water ledgers separately.

- Selected flow: oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_cleaning`
- Sources: `efisc-starch-processing-2014`


#### Outputs

##### Product flows

##### Waste flows

###### Spent aqueous equipment-cleaning solution (`wash_effluent`)

Record the actual whole effluent and destination, composition, water and solids. Keep supplied cleaning solution, fresh water and this output consistent at the same physical gate. Do not treat COD, nitrogen or conductivity as a particular molecular emission or add pollutant assays to the whole effluent mass.

- Selected flow: Spent aqueous equipment-cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_liquid_cleaning`
- Sources: `efisc-starch-processing-2014`

###### Collected wet potato pulp leachate (`pulp_leachate`)

Measure storage or handling drainage separately from discarded_centrate and wash_effluent using its actual collection outlet. Record dissolved and suspended solids, moisture history and destination. Do not force every wet-mass difference into evaporation or assume this liquid is clean water.

- Selected flow: Collected wet potato pulp leachate
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_liquid_cleaning`
- Sources: `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014`

##### Elementary flows

###### Water vapour (`water_vapour`)

Only actual evaporation to air supported independently of the wastewater and stock measurements. Measure the water state; integrated gas volume is not multiplied by time again. No drying process or default evaporation is inferred.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_cleaning`
- Sources: `efisc-starch-processing-2014`

###### Carbon dioxide of biogenic origin (`biogenic_carbon_dioxide`)

Only measured biogenic carbon dioxide from actual deterioration or included residual treatment. No intended fermentation is part of the qualifying product route, but a real accidental release remains. Retain carbon origin separately from fossil exhaust.

- Selected flow: carbon dioxide (biogenic)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_cleaning`
- Sources: `efisc-starch-processing-2014`

###### Methane of biogenic origin (`biogenic_methane`)

Conditional on actual measured methane formation or escape with origin, medium, collection and destination evidence. Do not create a methane emission from COD, a biogas potential or a waste label.

- Selected flow: Methane of biogenic origin
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_cleaning`
- Sources: `efisc-starch-processing-2014`

###### Ammonia (`ammonia`)

Only the measured NH3 species emitted to air from the included operations. Total nitrogen, ammonium in water and crude protein are not NH3 mass; use a measured speciation basis and independent nitrogen balance.

- Selected flow: Ammonia
- Flow property / unit: Mass / kg
- Amount rule: Use the measured raw numerator; reference the same single per-reference calculation in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_emission_cleaning`
- Sources: `efisc-starch-processing-2014`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | attributional model | Declare an attributional inventory with no assumed substitution or avoided-feed credit. Identify each dedicated pulp operation and use real or virtual subdivision to assign its own materials, energy and residual-treatment burden directly. A cheap feed coproduct is not automatically burden-free. | `ilcd-allocation-2010` |
| `allocation_causality` | remaining genuinely common exchanges | For each still-common exchange test the determining physical causal relationship to starch, pulp, protein, solubles and any other actual function. Record the mechanism, independently measured variables, scope and why the relationship determines this exchange. A mass, dry-matter, protein or energy fraction by itself is not causality; different exchanges may require different drivers. | `ilcd-allocation-2010` |
| `allocation_residual` | only unresolved common process burden | Only for the genuine remainder after subdivision and exchange-specific causality, use contemporaneous representative market values of actual cofunctions at the common process gate in their actual state and quantity. Derive comparable gate values by removing product-specific downstream transport, packaging and conditioning when required. Preserve real price evidence, time variation, uncertainty and sensitivity. Do not prescribe a fixed pulp share or freely choose physical versus economic allocation. | `ilcd-allocation-2010` |
| `allocation_upstream` | supplier handover | Receive one transparent upstream burden vector for each pulp lot, including cultivation and the actual common starch process and its reviewed allocation scope. Reuse a compatible supplying starch-method dataset as the interface rather than repeat its manufacture. If allocation information is missing, retain an unresolved dataset gap and do not substitute zero; do not reallocate already allocated upstream pulp burdens in the foreground. | `ilcd-allocation-2010` |
| `allocation_status` | product versus Waste | Determine usable coproduct versus discarded Waste using actual specification, receiver contract, intended and actual use, applicable legal status, disposal obligation and supplier allocation method. A price, feed destination or the word waste alone is insufficient. Keep rejected lots and wastewater in the physical ledger and use their real treatment interfaces; no default recovery, disposal or substitution credit. | `ilcd-allocation-2010` |
| `allocation_services` | FG and delivery services | Attribute storage, handling and transport to the actual serviced lots and capacity constraints using meters and demonstrated service causality. Preserve old/new and returned-lot burden vintages. Product cofunction allocation acts on common environmental burden only, never on gross wet mass, packaging counts, physical stocks or gross transport service. | `ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection stores only unnormalized raw values. The aggregation_rule column below labels the final target scope; it does not perform division at collection. Actual numerator assembly, unit conversion and allocation occur in the calculation layer, with the sole normalization step executed once. This distinction governs all cards, protocols, formulas and quality requirements.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_pulp_recovery` | recovery | wet pulp and WIP | raw_record | lot; botanical origin; supplying starch line; received state; wet mass; tare; dry matter; moisture; inlet/outlet; time; opening WIP; closing WIP; inherited vector; transfer pair | Weigh and sample each whole stream at the declared gate; match supplier and internal lot records. Preserve raw unnormalized observations and separate constituent assays. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_pulp_dewatering` | dewatering | wet pulp and WIP | raw_record | lot; botanical origin; supplying starch line; received state; wet mass; tare; dry matter; moisture; inlet/outlet; time; opening WIP; closing WIP; inherited vector; transfer pair | Weigh and sample each whole stream at the declared gate; match supplier and internal lot records. Preserve raw unnormalized observations and separate constituent assays. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_pulp_release` | release | wet pulp and WIP | raw_record | lot; botanical origin; supplying starch line; received state; wet mass; tare; dry matter; moisture; inlet/outlet; time; opening WIP; closing WIP; inherited vector; transfer pair | Weigh and sample each whole stream at the declared gate; match supplier and internal lot records. Preserve raw unnormalized observations and separate constituent assays. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_release` | release | first quality release | raw_record | lot; first-release timestamp; prior-release flag; net wet mass; scale calibration; moisture or dry matter; foreign matter; hygiene result; use; receiver specification; hold/reject reason; closing conforming FG | Calibrated net weighing and representative lot tests; reconcile complete first-release decisions against historical status. Receiver acceptance criteria and maximum hold/storage duration require actual agreement; no default value. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_fg` | delivery | FG and delivery service stock | raw_record | lot; vintage; opening FG; newly released FG; gross dispatch; receiver; delivery time; return; original delivery reversal; reinspection; genuine rework F; duplicate X; closing FG; physical state; inherited vector; service record | Follow each physical lot and its historical burden through storage and receiver acceptance. Collect separate gross movements and service observations; do not divide at collection. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_power_recovery` | recovery | individual electricity exchange | raw_record | process; meter; start reading; end reading; equipment; operating interval; idle; failed lot; allocated share evidence; supplier; voltage; raw unit | Retain raw submeter differences. If unavailable use independently measured load and actual run intervals with disclosed uncertainty; preserve start/stop and idle use. A real power rate is integrated once. | kWh | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_power_dewatering` | dewatering | individual electricity exchange | raw_record | process; meter; start reading; end reading; equipment; operating interval; idle; failed lot; allocated share evidence; supplier; voltage; raw unit | Retain raw submeter differences. If unavailable use independently measured load and actual run intervals with disclosed uncertainty; preserve start/stop and idle use. A real power rate is integrated once. | kWh | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_power_release` | release | individual electricity exchange | raw_record | process; meter; start reading; end reading; equipment; operating interval; idle; failed lot; allocated share evidence; supplier; voltage; raw unit | Retain raw submeter differences. If unavailable use independently measured load and actual run intervals with disclosed uncertainty; preserve start/stop and idle use. A real power rate is integrated once. | kWh | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_power_delivery` | delivery | individual electricity exchange | raw_record | process; meter; start reading; end reading; equipment; operating interval; idle; failed lot; allocated share evidence; supplier; voltage; raw unit | Retain raw submeter differences. If unavailable use independently measured load and actual run intervals with disclosed uncertainty; preserve start/stop and idle use. A real power rate is integrated once. | kWh | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_power_cleaning` | cleaning | individual electricity exchange | raw_record | process; meter; start reading; end reading; equipment; operating interval; idle; failed lot; allocated share evidence; supplier; voltage; raw unit | Retain raw submeter differences. If unavailable use independently measured load and actual run intervals with disclosed uncertainty; preserve start/stop and idle use. A real power rate is integrated once. | kWh | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_water` | cleaning | fresh water supply | raw_record | water supplier; inlet; batch; raw volume or mass; meter calibration; temperature; measured density; recycled quantity; paired return | Measure fresh water separately from internal centrate. Retain raw volume and independent condition-specific density for conversion; never assume another substance has water density. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_liquid_dewatering` | dewatering | one actual liquid outlet | raw_record | outlet; lot; product or Waste status; destination; raw wet mass or integrated volume; liquid density and state; suspended solids; soluble solids; starch; moisture; COD; TOC; total nitrogen; transfer pair | Meter each segregated liquid outlet. Independently sample solids and water; whole liquid is the main mass ledger, assays and pollution indicators are non-additive. Integrated volumes are not multiplied by H again. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_liquid_cleaning` | cleaning | one actual liquid outlet | raw_record | outlet; lot; product or Waste status; destination; raw wet mass or integrated volume; liquid density and state; suspended solids; soluble solids; starch; moisture; COD; TOC; total nitrogen; transfer pair | Meter each segregated liquid outlet. Independently sample solids and water; whole liquid is the main mass ledger, assays and pollution indicators are non-additive. Integrated volumes are not multiplied by H again. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_material` | cleaning | each purchased formulation | raw_record | supplier; article or formulation; complete supplied mass; active assay; carrier water; issued; unused return; opening stock; closing stock; onsite mixing ingredients; energy; losses | Reconcile procurement and issue records for each concrete formulation separately. Whole purchased solution is counted once; actual onsite mixing requires separate purchased components and paired internal solution records. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_packaging` | delivery | one cover article | raw_record | article; composition; empty tare; adhered pulp; opening empty/attached stocks; purchase; external returns received; closing stocks; gross shipped article mass; external returns sent; waste; internal reuse | Reconcile the complete article equation in boundary_article. Use article-specific measured tare or mass; do not invent kg per item. Separate adhered pulp by non-additive physical bridge and preserve reusable-stock history. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_waste_release` | release | each specific solid discard | raw_record | stream; lot; status; reason; actual wet mass; dry solids; water; adhering material; prior burden; receiver; treatment; disposal record | Weigh each actual segregated discard and verify its real route and status. Preserve failed and old-stock wastes rather than hide them in other or zero. Record new actual solid streams individually. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_waste_delivery` | delivery | each specific solid discard | raw_record | stream; lot; status; reason; actual wet mass; dry solids; water; adhering material; prior burden; receiver; treatment; disposal record | Weigh each actual segregated discard and verify its real route and status. Preserve failed and old-stock wastes rather than hide them in other or zero. Record new actual solid streams individually. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_waste_recovery` | recovery | each specific solid discard | raw_record | stream; lot; status; reason; actual wet mass; dry solids; water; adhering material; prior burden; receiver; treatment; disposal record | Weigh each actual segregated discard and verify its real route and status. Preserve failed and old-stock wastes rather than hide them in other or zero. Record new actual solid streams individually. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_fuel` | delivery | one actual fuel | raw_record | fuel; supply formulation; receipt; stock changes; raw litres or mass; measured density and temperature; carbon; sulfur; operating vehicle; provider boundary | Record raw fuel actually used in included owned equipment. Convert only using the same fuel condition; preserve measured or independently supported composition and exhaust. Exclude duplication with purchased service inputs. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_transport` | delivery | actual freight service | raw_record | trip; provider; route; wet payload; distance; capacity constraint; empty travel; vehicle; receiver; original delivery; return; service allocation | Retain actual mass-distance records and return movements with provider scope. Quantify each trip before justified service attribution; do not apply common-product economic shares to physical payload. | tkm | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_emission_cleaning` | cleaning | each real gas or species | raw_record | species; chemical identity; origin; medium; process; concentration; reference state; raw rate or integrated volume; duration where rate; gas density; moisture; capture; destination; uncertainty | Use species-specific measurement or an independently evidenced material-reaction balance. Integrate real rates once; integrated volumes need no extra time multiplier. Retain whole-stream versus constituent bridges and distinguish biogenic from fossil carbon. Total pollution indicators alone cannot create species masses. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |
| `cp_emission_delivery` | delivery | each real gas or species | raw_record | species; chemical identity; origin; medium; process; concentration; reference state; raw rate or integrated volume; duration where rate; gas density; moisture; capture; destination; uncertainty | Use species-specific measurement or an independently evidenced material-reaction balance. Integrate real rates once; integrated volumes need no extra time multiplier. Retain whole-stream versus constituent bridges and distinguish biogenic from fossil carbon. Total pollution indicators alone cannot create species masses. | kg | each lot and event | complete H and adjacent stock history including zero output | declared supplier handover and every included site/service gate | per 1 kg reference flow | raw receipts; calibration; paired records; representative sampling; uncertainty; unresolved gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `wet_solids` | each material assay | DM_s = wet_s × dm_fraction_s; water_s = wet_s × moisture_fraction_s; independently verify measurements and solids destinations; main and assay ledgers are non-additive. | wet_s; dm_fraction_s; moisture_fraction_s; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release; cp_liquid_dewatering; cp_liquid_cleaning | DM_s; water_s | `efisc-starch-processing-2014`; `akv-pulp-datasheet-2024` |
| `first_release_q` | sole production gate | Q = Σ newly_first_released_net_wet_lot_mass; use historical flags and count first release of each whole lot once; include qualifying closing FG and exclude opening already released FG, duplicates and packaging. | newly_first_released_net_wet_lot_mass; cp_release; cp_fg | Q | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |
| `physical_gate` | manufacturing and FG physical gates | opening_physical_stock + actual_physical_in = closing_physical_stock + actual_physical_out; independently reconcile whole streams, dry solids, water and relevant elements with actual reactions and gas transfers; combine only after paired internal flows cancel. | opening_physical_stock; actual_physical_in; closing_physical_stock; actual_physical_out; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release; cp_fg; cp_liquid_dewatering; cp_liquid_cleaning; cp_emission_cleaning; cp_emission_delivery | grossV_ledger | `efisc-starch-processing-2014` |
| `assemble_numerator` | each environmental exchange numerator | A_j = opening_unreleased_WIP_vector_j + actual_new_attributed_load_j + genuine_incremental_F_j - closing_unreleased_WIP_vector_j - proved_same_side_duplicate_X_j; first convert actual units, assign dedicated loads and apply evidenced common-process allocation; preserve failed/cleanup loads. actual_new_attributed_load_j excludes rework already entered separately as F_j, so each incremental burden is entered once. This manufacturing numerator subtracts only closing unreleased WIP/hold burdens; never subtract newly released closing FG because its first release is already in Q. Roll older released FG and its actual delivery services in the separate vintage ledger; only current-release-cohort services enter the corresponding numerator. | opening_unreleased_WIP_vector_j; actual_new_attributed_load_j; genuine_incremental_F_j; closing_unreleased_WIP_vector_j; proved_same_side_duplicate_X_j; cp_fg; cp_pulp_recovery; cp_pulp_dewatering; cp_pulp_release | A_j | `ilcd-allocation-2010` |
| `normalize_once` | all inventory results | result_j = numerator_j / Q; execute once only; numerator_j is tagged either grossV physical numerator or A_j environmental numerator and these ledgers are non-additive. Output per1 kg reference flow only for Q>0; for Q=0 retain stocks, loads and inherited attribution without a per-unit result. H is not another denominator; cards and protocols only reference this result. | numerator_j; Q; cp_release | result_j | `ilcd-allocation-2010` |
| `service_stock` | FG services and returns | opening_FG + current_first_release + external_returns_received = closing_FG + gross_dispatch + actual_FG_discards + other_verified_external_out; reconcile original-delivery reversals, water loss and actual reactions by vintage; attribute services separately without adding Q. | opening_FG; current_first_release; external_returns_received; closing_FG; gross_dispatch; actual_FG_discards; other_verified_external_out; cp_fg | FG_service_ledger | `ilcd-allocation-2010`; `akv-pulp-datasheet-2024` |
| `cover_stock` | each cover article | opening_empty_and_attached + purchases + external_returns_received = closing_empty_and_attached + gross_shipped_articles + external_returns_sent + waste_articles; internal reuse cancels, adhering pulp uses a non-additive bridge; never enter Q. | opening_empty_and_attached; purchases; external_returns_received; closing_empty_and_attached; gross_shipped_articles; external_returns_sent; waste_articles; cp_packaging | cover_ledger | `akv-pulp-datasheet-2024`; `ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `source_identity` | source and route | Primary product originals and independent process/method evidence support each claim; distinguish original acquisition from current reuse/extraction; retain complete page context and counterexamples, never present abstracts as full text. | original version; page locator; scope of use |
| `batch_quality` | qualifying wet endpoint | Trace lot net wet mass, dry matter or moisture, foreign matter, hygiene, storage/transport time and receiving criteria; ordinary future quantity collection is distinct from absence of a core product. | real lot and receiver records |
| `inventory_integrity` | physical and burden ledgers | Independent per-gate per-flow reconciliation, unit conversions, shares and uncertainty are evidenced; physical stock and inherited vector roll separately; residuals never replace species evidence. | measurements; stocks; burden vintages; allocation mechanisms |
| `native_provider` | native flow and provider | Review native hard identity, reference property/unit support and background provider compatibility separately; never insert an unverified UUID; distinguish genuine no-match from actual query failure. | complete native object and exact chain; unresolved list |
| `scientific` | evidence and approval | Industrial sources do not establish LCA allocation; preserve every endpoint or methodological gap without inferring approval. | independent method evidence and applicability limits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference lot | Verify potato botanical origin, starch-manufacturing separation, actual mechanical-dewatering state, fresh wet supply, nonfermentation, nonblending and declared cattle-feed receiving use. Reject a flow selected only by name or classification; inspect every native basename, synonym/comment, CAS, route, state, source, media, geography and property before UUID adoption. Missing native evidence remains explicit and no adjacent product substitutes for it. | `un-cpc-2025`; `akv-pulp-datasheet-2024`; `efisc-starch-processing-2014` |
| `validation_release` | Q and quality | Require net wet weighing with tare and calibrated scale records, batch dry-matter/moisture and foreign-matter results, applicable hygiene and receiver time/storage acceptance. Q counts each whole lot first release once including qualifying closing FG; exclude opening released FG, repeat inspection, internal transfer and all packaging. No numerical moisture, safety, storage-time or nutrient threshold is invented. | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_completeness` | all physical gates | Independently close whole wet-mass, dry-solids, water and relevant elemental accounts at manufacturing, FG and combined gates within documented measurement uncertainty. Preserve reaction water versus free water and actual gas phase changes where reactions occur. Do not use one residual to solve two unknowns, water density for another material, or aggregate pollution indicators as named molecular masses. | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_burdens` | numerator and stocks | Retain each lot physical stock separately from its inherited environmental vector. Reconcile actual new F, documented same-side duplicates X, failed/idle/cleanup loads, opening/closing WIP and FG, returns and real incremental rework. Missing historical burdens or common-process attribution are unresolved, not zero. Physical and environmental ledgers are never added together. | `ilcd-allocation-2010` |
| `validation_once` | normalization | Collection protocols retain unnormalized raw observations and convert their real units or rates before allocation and the single calculation-stage division by Q. H is only the observation interval. Already integrated gas/liquid volumes are not multiplied by duration again. Q=0 preserves loads and stocks without a per-unit result; state subsequent inheritance explicitly. | `ilcd-allocation-2010` |
| `validation_interface` | cross-system and native evidence | Require declared supplier/site/time/technology and compatibility for every background provider separately from flow identity. Verify each selected flow against a complete authoritative record and its reference-property, unit-group and reference-unit chain. Archived support records establish only their retained identities and units, not current platform availability or product/provider compatibility. Keep dataset versions in supporting evidence, not PCR UUIDs. Unverified UUIDs remain absent. | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_report` | data package disclosure | Report checks performed, skipped and unresolved separately; preserve full native restrictions and all required qualifiers in usable metadata and flow descriptions. A schema or finite measurement pass is not scientific, translation, mapping or publication approval. A real route, terminal or methodological evidence gap prevents a qualified dataset claim. | `efisc-starch-processing-2014`; `ilcd-allocation-2010` |
| `validation_service_scope` | manufacture versus receiver gate | Report the first-release manufacturing result separately from storage/delivery service increments by release cohort. Closing released stock counts in Q but does not establish completed delivery. Disclose unfinished delivery coverage and its outstanding burdens; do not claim a complete receiver-gate result until the corresponding cohort services are reconciled. Never add old-cohort services to current manufacturing Q. | `ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Fresh wet potato starch-pulp supply data only when identity/state and receiving use fit; future supplier/site data still require collection |
| allowed_use | Actual supply of the same route/state; transparent upstream interface and separate delivery-service ledger; evidenced non-additive dry-basis reporting |
| excluded_use | Dry-feed or nutrient-function substitution; ensiling/drying/blending routes; replacement for starch/gluten manufacture; automatic zero burden or recovery credit; unrestricted generic-residue data |
| required_metadata | potato species and single botanical feedstock; named starch manufacturer and site; separation and handover gate; actual received and supplied dewatering state; mechanical technique and whether already upstream; fresh wet and unfermented status; absence of molasses or juice or feed blending; declared cattle-feed receiving use and contract; product or Waste status and real destination; lot net wet mass and tare; lot dry matter or moisture; foreign matter and applicable hygiene acceptance; actual maximum holding and transport time; storage and covering conditions; first whole-lot quality release gate and history; reference period H and Q; opening and closing WIP and FG; gross delivery and return identities; packaging and reusable-stock basis; upstream vector and joint-process allocation interface; geography and technology and supplier compatibility; native flow identity and property support gaps |
| required_quality_disclosure | raw measurement/sampling; supplier compatibility; physical stock and burden vintages; allocation rationale/sensitivity; missing UUID/property support; unresolved data and methodological limitations |
| update_trigger | Changes in botanical/manufacturing origin, mechanical technique, wet/dry state, blending/fermentation, receiving use, hygiene/time limits, common-process allocation, supplier, packaging or native flow |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-2025` | official_guidance | UN Statistics Division. CPC Version 3.0 structure and Explanatory Notes, 30 June 2025, pp.103–104 and199–200. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context: 39130 versus cereal-milling residues 39120; starch/gluten 23220; prepared feed 23319; brewing/distilling residues39160. Classification is not product approval. |
| `akv-pulp-datasheet-2024` | literature | AKV. AKV KARTOFFELPULP DATABLAD–2024, 27 March2024, complete single page. https://www.akv.dk/media/pppmhwpc/datablad-pulp-2024.pdf | Primary mechanically dewatered potato-starch pulp identity; fresh cattle-feed use; covering and seasonal variability; ensiling counterexample. Typical composition and feeding values are not defaults or functional equivalences. |
| `akv-pulp-investment-2024` | literature | AKV. AKV-NYT No.1 2024, Kampagnen og nye investeringer, PDFp.2/printedp.1. https://www.akv.dk/media/4rgnoath/akv-nyt-marts-2024.pdf | Primary commercial-specification and pulp-decanter context; low-solids and water-use variation. Announced investment is not proof of completed installation; humus dewatering is distinct. |
| `efisc-starch-processing-2014` | official_guidance | Starch Europe/EFISC. European Guide to good practice, sector reference document on safe feed materials from starch processing, v3.1, November2014, PDFpp.8–10,13–17,46. https://food.ec.europa.eu/document/download/18f5bf7d-217f-459b-9751-2ecffe8808f4_en | Independent sector identity and process diagrams: pulp after separation, mechanical dewatering, distinct drying/protein/juice branches; bulk storage/load-out hazards. Diagrams are examples, not standardized plant designs; no allocation factor or site performance is inferred. |
| `ilcd-allocation-2010` | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printedpp.255–265/PDFpp.275–285. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and virtual subdivision; exchange-specific determining physical causality; remaining common-process allocation using actual same-gate state and market value. Not industrial pulp identity, feed safety, composition or a numerical allocation factor. |
| `alfa-laval-starch` | literature | Alfa Laval. The all-round choice for starch equipment: solutions for processing starch, PDF p.10, Starch from tubers. https://www.alfalaval.nl/globalassets/documents/industries/food-dairy-and-beverage/starch-and-sweetener/solutions-for-processing-starch.pdf | Primary equipment-maker process context separates fibre pulp, starch and fruit water; dewatered pulp livestock-feed pathway. No machine configuration, quantities, installation or present-day sector performance inferred. |
| `oecd-potato-2020` | official_guidance | OECD. Revised Consensus Document on Compositional Considerations for New Varieties of Potato, ENV/JM/MONO(2020)37, Figure 3 and paragraph 18, p.19. https://one.oecd.org/document/ENV/JM/MONO%282020%2937/en/pdf | Institutional process context distinguishes pulp dewatering from recovery of coagulated fruit-water protein. Does not establish this supplier, batch safety, composition or numerical inventory. |
