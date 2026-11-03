---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ash-and-residue-except-from-the-manufacture-of-iron-or-steel-containing-metals-or-metal-297b5097
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Slow-cooled copper flash-smelting slag for copper recovery

## 1. Scope and Applicability

This PCR is restricted to freshly generated copper flash-smelting slag supplied, after separation from matte, controlled slow cooling and necessary breaking/crushing, as one mixed secondary feed for an identified copper-recovery concentrator. The first quality-release interface is the conditioned-feed lot accepted for that receiver before its grinding/flotation. The generating smelter can use a separately verified upstream formation module; its original concentrate-to-tapped-slag history and burdens remain inside the complete product chain. This is a methodological synthesis of primary technical sources, not a measured contemporary factory recipe or a claim that all cited installations make the same grade. Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `epa-primary-copper-1995`; `tms-copper-slag-services`.

Exclude iron/steel-manufacturing slag and EAF dust regardless of iron content; precious-metal ash and anode slime and materials classified or supplied for a precious-metal recovery function; converter slag and mixed-furnace slag; historic dump mining; quench-granulated abrasive or construction aggregate; already floated slag concentrate and final flotation tailings; pure copper or a pure oxide; refined recovered metal; and a disposal-only service without a genuine receiving-feed function. Trace precious-metal occurrence alone does not establish an allowed class: document the actual material classification and receiver purpose without inventing a universal concentration threshold. No other non-ferrous residue is a selectable branch. The iron in copper smelting slag does not make its generating process iron/steel manufacture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.ash-and-residue-except-from-the-manufacture-of-iron-or-steel-containing-metals-or-metal-297b5097 |
| classification_refs | CPC 3.0:39320; narrower |
| covered_products | One fresh copper flash-smelting slag conditioned as bulk feed for a specified copper-recovery concentrator |
| excluded_products | Exclude iron/steel-manufacturing slag and EAF dust regardless of iron content; precious-metal ash and anode slime and materials classified or supplied for a precious-metal recovery function; converter slag and mixed-furnace slag; historic dump mining; quench-granulated abrasive or construction aggregate; already floated slag concentrate and final flotation tailings; pure copper or a pure oxide; refined recovered metal; and a disposal-only service without a genuine receiving-feed function. Trace precious-metal occurrence alone does not establish an allowed class: document the actual material classification and receiver purpose without inventing a universal concentration threshold. No other non-ferrous residue is a selectable branch. The iron in copper smelting slag does not make its generating process iron/steel manufacture. |
| representative_product | Slow-cooled copper flash-smelting slag for copper recovery |
| production_route | Verified source concentrate/flux preparation and flash smelting module; matte/slag separation; molten-slag handling; controlled slow cooling with actual air/water sequence; breaking and necessary crushing; drainage and receiver first feed release |
| market_state | Bulk cooled crushed mixed slag at measured as-released moisture and declared receiver feed acceptance; no universal grade or recovery guaranteed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of one qualified mixed copper-bearing smelting residue for actual downstream copper recovery |
| How much | 1 kg |
| How well | copper flash-smelter and source campaign; original feed and source-process boundary; separation from matte and converter slag; source-specific copper and iron and silicon and sulfur assays; relevant trace metals and precious-metal classification; copper metal versus sulfide versus oxide phases and mineralogy; fresh slag and cooling history; no historic stockpile or granulated abrasive; measured net as-released mass and free moisture; dry-assay basis and sampling uncertainty; crushing and actual particle-size distribution; receiver feed specification and temperature and contamination acceptance; lawful receiver and real copper-recovery function; upstream exchange-specific inherited burden and allocation; first-release lot and timestamp and original Q_c; opening and closing WIP vectors; gross shipments and returns and no repeat output; postrelease service horizon H; actual water circuit and wet residues and receiving media; native voltage and supply route and geography; every real package and maintenance stock and provider ownership |
| How long or cycle | One unique first-release cohort; postrelease actual services use original Q_c and observed H |
| reference_flow_link | first_release_slag |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Smelting slag `d6712540-75b5-4bf4-bd56-862e84244481` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | copper flash-smelter and source campaign; original feed and source-process boundary; separation from matte and converter slag; source-specific copper and iron and silicon and sulfur assays; relevant trace metals and precious-metal classification; copper metal versus sulfide versus oxide phases and mineralogy; fresh slag and cooling history; no historic stockpile or granulated abrasive; measured net as-released mass and free moisture; dry-assay basis and sampling uncertainty; crushing and actual particle-size distribution; receiver feed specification and temperature and contamination acceptance; lawful receiver and real copper-recovery function; upstream exchange-specific inherited burden and allocation; first-release lot and timestamp and original Q_c; opening and closing WIP vectors; gross shipments and returns and no repeat output; postrelease service horizon H; actual water circuit and wet residues and receiving media; native voltage and supply route and geography; every real package and maintenance stock and provider ownership |

The reference UUID is the generic Product flow Smelting slag on Mass/kg. Its formal names and complete native record impose no fixed copper grade, CAS, phase, cooling method, particle size, geography or supplier. The native record preserves an older general source-classification label separately from its current non-ferrous residue classification; neither label certifies a lot. Use it only for the single mixed copper flash-smelting slag defined here, with independent source/phase/receiver evidence. The same UUID may describe the molten incoming slag and the conditioned first-release output because the native flow has no fixed physical state; the explicit finished-row link disambiguates them. It does not identify pure copper, separated matte, floated concentrate, steelmaking slag or a treatment service. These restrictions and all qualifiers apply to every occurrence, including upstream providers.

Declare every qualifier in metadata, product/process notes or reference-flow comments. Missing qualifiers leave the concrete data package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is independently weighed net wet slag uniquely first released under cp_release. Every inventory card is per 1 kg reference flow; first_release_slag = 1 kg. Closing released FG already belongs to Q. Dry assays and contained Cu are subledgers and cannot replace Q. |
| native_units | all inventory rows | actual native extensive property | kg; MJ | Preserve Mass/kg for material and individual species and energy/MJ for native AC electricity. Convert measured kWh to MJ once using 3.6; retain actual fuel mass and separate heat-content subledger. Integrated volume is not a rate; any volume-to-mass conversion uses independently measured same-fluid density and conditions. Never infer density from secondary flow properties. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh molten copper flash-smelting slag before cooling; whole concentrate-to-tapped-slag formation and inherited burdens supplied by one verified upstream module |
| starting_condition_role | supplied_material |
| product_classification_scope | CPC 3.0:39320; narrower |
| recursive_input_rule | Internal slag/water return keeps inherited vectors and cancels once; external same-category feed requires a compatible independently verified source module and cannot erase source formation |
| upstream_dataset_requirement | Before accepting incoming slag, verify a source formation module from burden-bearing whole copper concentrate and actual separately supplied siliceous flux through preparation/drying, flash smelting, slag/matte separation and tapped molten slag. Record the actual oxygen and combustion-air supply, each fuel, electricity, water, refractory/maintenance and startup/idle/cleanup loads; original matte and each genuine co-product; offgas transfer and actual acid/heat recovery where operated; dust return and treatment; and each postcontrol atmospheric species, wastewater and solid residue. Require raw quantities, original supply forms, source year/location, actual source output gate, allocation and an exchange-by-exchange inherited vector. Concentrate assays and carrier water are subledgers of the whole concentrate, never additional oxide/sulfide purchases. A compatible matte PCR can guide the source operation but cannot supply an unverified slag burden by subtraction or an arbitrary yield. Missing formation coverage makes a concrete dataset incomplete; purchased finished slag plus packaging is not this route. |
| disclosure | copper flash-smelter and source campaign; original feed and source-process boundary; separation from matte and converter slag; source-specific copper and iron and silicon and sulfur assays; relevant trace metals and precious-metal classification; copper metal versus sulfide versus oxide phases and mineralogy; fresh slag and cooling history; no historic stockpile or granulated abrasive; measured net as-released mass and free moisture; dry-assay basis and sampling uncertainty; crushing and actual particle-size distribution; receiver feed specification and temperature and contamination acceptance; lawful receiver and real copper-recovery function; upstream exchange-specific inherited burden and allocation; first-release lot and timestamp and original Q_c; opening and closing WIP vectors; gross shipments and returns and no repeat output; postrelease service horizon H; actual water circuit and wet residues and receiving media; native voltage and supply route and geography; every real package and maintenance stock and provider ownership |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| formation_history | whole source chain | Before accepting incoming slag, verify a source formation module from burden-bearing whole copper concentrate and actual separately supplied siliceous flux through preparation/drying, flash smelting, slag/matte separation and tapped molten slag. Record the actual oxygen and combustion-air supply, each fuel, electricity, water, refractory/maintenance and startup/idle/cleanup loads; original matte and each genuine co-product; offgas transfer and actual acid/heat recovery where operated; dust return and treatment; and each postcontrol atmospheric species, wastewater and solid residue. Require raw quantities, original supply forms, source year/location, actual source output gate, allocation and an exchange-by-exchange inherited vector. Concentrate assays and carrier water are subledgers of the whole concentrate, never additional oxide/sulfide purchases. A compatible matte PCR can guide the source operation but cannot supply an unverified slag burden by subtraction or an arbitrary yield. Missing formation coverage makes a concrete dataset incomplete; purchased finished slag plus packaging is not this route. | `jrc-nfm-bref-2017`; `epa-primary-copper-1995`; `jrc-ilcd-2010` |
| conditioned_feed_gate | condition | Include molten-slag ladle handling, controlled slow cooling, actual air/water sequence, separation of any independently identifiable matte heel, breaking, necessary primary crushing, real screening only if operated, internal conveyors/hauls, drainage and dust controls, representative sampling and receiver-specific first feed release. Use measured temperature-time and phase/particle-size evidence; no default eight-hour cooling time, crush size, copper grade, water demand or recovery is prescribed. The downstream concentrator grinding, flotation reagents, concentrate drying/resmelting and tailings are outside this reference gate. Their existence establishes receiver context, not burdens or credits in this dataset. | `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `tms-copper-slag-services` |
| single_first_release | condition; support | Q is the net as-released wet slag mass uniquely first quality-released for the declared copper-recovery receiver in the cohort. Independently weigh it, excluding transport equipment and packaging; declare free moisture and separate dry-solids/metal assays. No provisional hot transfer, rejected sample, matte heel, returned old lot, retest or dispatch creates Q. Closing released FG already belongs to Q and is not added again as manufacturing output or subtracted as unfinished WIP. Keep actual postrelease stock handling, wetting, containment, loading and dispatch in a separate service subledger for the original cohort Q_c over observed horizon H. H is not a production denominator; no speculative future service is charged. Cancel internal product/return transfers once when combining manufacturing and service modules. | `epa-slag-reprocessing-1994`; `jrc-ilcd-2010` |
| inheritance_and_failures | all inventory rows | Keep each exchange vector for opening/closing raw material, molten/cooled unreleased WIP and unassigned supplies, and preserve lot/source history across cooling campaigns. Start attributable A_i with inherited opening burden plus real current assigned burdens and true inward transfers; subtract only still-unreleased closing/unconsumed burden and justified outward transfers. Do not repeat stock correction already applied to consumption. Include failed and zero-output lots, start/stop, idle, cleanup, sampling, wet rejects, actual rework and their treatment. Do not wash away burdens by assigning them to a removed waste. Postrelease returns preserve their original Q_c without a new production result and add only actual incremental work. Q=0 retains the full raw and inherited ledger with no unit result. | `jrc-ilcd-2010` |
| physical_and_species | all physical interfaces | Close unallocated gross V and independent relevant Cu/Fe/Si/S/O/H and trace-element ledgers through the source gate, conditioning, released FG/service and consolidated gate. Separately observe metal/sulfide/oxide phases, entrained matte, free and structural/reaction water, evaporation, rain, runoff, sediment, captured dust, escaped size fractions and real gas species. Cooling does not imply a fixed oxidation reaction or water uptake. One residual cannot determine two unknowns; COD/total NOx/VOC and oxide-equivalent analyses are indicators, not measured species masses. For each mixed liquid or solid exit record the whole wet stream once and a non-additive source/composition partition, with one compatible provider; do not also purchase treatment for each assay component or repeat provider-owned emissions. Integrated volumes are not multiplied by time; integrate actual rates only. A density conversion requires independently measured density of that same material at its actual conditions. No assumed steam, boiler, condensate or heat credit. Any real exported heat or supplier water return requires separate Product rows, actual mass/state/enthalpy and explicit supplier water/energy ownership before dataset completion. | `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `jrc-ilcd-2010` |
| packages_assets_completeness | condition; support | The representative route supplies bulk slag without mandatory sacks or pallets. For each package actually crossing the boundary add one atomic card and close opening empty/attached WIP/FG/reusable stock + external purchases P + first external nonpurchase physical receipts N_ext + true external returns received ER = closing corresponding stocks + packaging on gross physical shipments + outward returns + waste. P, N_ext and ER are mutually exclusive for each real receipt. N_ext includes first borrowed/leased or supplier-attached packaging when genuinely not acquired within a purchased consignment; an unitemized component actually acquired with the consignment remains P. ER requires the same component's documented prior outward dispatch. For every real first nonpurchase receipt add its specific material/form/type and actual input interface with measured raw quantity, receipt ID/time, origin, ownership and prior vector; keep physical stock V separate from procurement and attribute one actual owner/provider's burden once. Do not create a second packaging purchase, whole-load copy or credit. Internal reuse cancels and creates neither procurement, Q nor automatic co-product. For machinery, spare jaw plates and installed oil likewise retain actual physical stocks and receipts/retirements; any extra X term may remove only an exact same-side duplicate in another term. Never cancel new ingress merely because retained in stock. Attribute capital/maintenance service separately using measured use and documented lifetime or repair horizon, with sensitivity where uncertain. Add every other actual single supply, fuel, aqueous reagent, package, waste and emitted species before declaring a dataset complete; unknown is not zero or absent. | `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| condition | Fresh slag controlled cooling and conditioning | required | Selected flash-smelting source and receiver feed route only; actual optional separation and screens | Foreground preparation plus verified upstream formation module | per 1 kg reference flow |
| support | Real utilities and maintenance with separate postrelease service ledger | required | Real operation of handling/crushing/drainage/controls and actual original-cohort holding/loading/dispatch | Dedicated/subdivided manufacturing and original-Q_c service | per 1 kg reference flow |

All ancestor rules and source restrictions apply to every card. cp_source is mandatory for molten_slag; upstream formation is not a zero-burden externality. The support process partitions each measured exchange into manufacturing and actual services; it does not allocate all period utilities to whichever lots ship. Maintain independent physical gates and original-cohort service denominators.

### Process: Controlled cooling and conditioning (`condition`)

#### Inputs

##### Product flows

###### Source molten slag (`molten_slag`)

One whole freshly tapped copper flash-smelting slag, including its real metal-bearing phases, arrives before controlled cooling. Require cp_source and the complete formation_history module; its inherited burden enters once. Native Smelting slag is a generic Product/Mass interface with no CAS, fixed grade, cooling route, state or geography; independent copper-smelter provenance, actual thermal state, assays and allocation are mandatory. Do not add FeO, silica, copper, matte droplets or carrier water as separate purchases. All section-3 qualifiers and native restrictions apply.

- Selected flow: Smelting slag `d6712540-75b5-4bf4-bd56-862e84244481`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_source`
- Sources: `jrc-nfm-bref-2017`; `epa-primary-copper-1995`; `jrc-ilcd-2010`

###### External cooling and suppression water (`cooling_water`)

Record only actual external water makeup used in the declared controlled cooling/suppression circuit, including actual shared-site reclaimed supply with its verified burden owner. Native Product/H2O/Mass has no fixed purity, route, temperature, geography or provider. Measure quality and supply state; local drainage reuse is an internal matched transfer, not another external purchase. Track retained water, evaporation, runoff and rainfall independently; no default density.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

##### Elementary flows

###### Rainfall entering cooling containment (`rain_ingress`)

Conditional on actual precipitation crossing the open-pit boundary. Measure rainfall, effective collection area, runoff/storage and material-specific density when converting volume; this is not purchased cooling water. The native elementary resource identity remains unresolved; preserve the independent physical water ledger and verify that identity before completing a dataset.

- Selected flow: Rainwater entering copper-slag cooling containment
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

#### Outputs

##### Product flows

###### First released recovery-feed slag (`first_release_slag`)

The single mixed cooled and necessarily crushed copper flash-smelting slag first accepted for the identified copper-recovery feed specification, before grinding/flotation. Independently weigh wet net mass and measure free moisture, dry metal assays, actual metal/sulfide/oxide/mineral phases, particle distribution, temperature and contaminants. Native Product/Mass has no fixed CAS, grade, route, physical state or geography and certifies none of those tests. Reject steel-origin, precious-metal residue, pure copper, matte and processed concentrate. Closing released FG already counts in Q; later dispatch/retest/return creates no new Q. Every qualifier applies to this row and its provider.

- Selected flow: Smelting slag `d6712540-75b5-4bf4-bd56-862e84244481`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

###### Actually separated matte heel (`separated_matte_heel`)

Conditional: only a genuinely separately recovered matte heel is an outlet, not a second counting of matte still entrained in the whole slag. Record phase, Cu/Fe/S assays, mass and one true return/recovery receiver; classify its function and assign inherited burdens without automatic credit. No native Product identity matching this specific separation route is adopted.

- Selected flow: Separated copper matte heel
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `tms-copper-slag-services`; `jrc-ilcd-2010`

##### Waste flows

###### Rejected unqualified slag (`rejected_slag`)

Only actual rejected copper flash-smelting slag sent to its documented waste route; exclude first-released feed and internal rework transfers. Keep this specific whole-material Waste identity unresolved until its actual copper assay, phase, state, source route and receiver are compatible with a complete native record; rejection does not imply enrichment or a fixed copper grade. Record wet whole-stream quantity, assays, source partition and one lawful treatment/recovery provider. Do not substitute this waste outlet for the supplied Product reference.

- Selected flow: Rejected unqualified copper flash-smelting slag
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

###### External cooling-water purge (`cooling_runoff`)

Actual whole contaminated liquid leaving the declared cooling/drainage circuit for one treatment provider; preserve dissolved metals and suspended slag as non-additive composition ledgers. Internal recirculated water is not this outlet. The electrolytic-manganese-slag washing and secondary/tertiary-treated candidates are incompatible with this untreated cooling purge. Resolve exact identity; do not claim direct water emissions already owned by the treatment provider.

- Selected flow: Untreated copper-slag cooling runoff
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

###### Removed drainage sediment (`drainage_sediment`)

Only sediment physically separated and removed from drainage containment. Measure whole wet sediment and dry solids/metal/water subledgers with one receiver; do not count it again inside the exported runoff or recycled slag. Native copper-slag Waste rows do not establish this wet sediment identity.

- Selected flow: Wet copper-slag drainage sediment
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

##### Elementary flows

###### Cooling water evaporation to air (`evaporated_water`)

Actual H2O vapour to air, unspecified subcompartment, CAS 7732-18-5 on Mass/kg. Separate free-water evaporation from any independently demonstrated reaction/structural water and dust-bound moisture. Broad native synonyms do not permit ice, heavy-water or liquid-water substitution: formal vapour identity and destination govern. Condensed recovered water is an internal liquid transfer, not this emission.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

###### Copper-slag particulate to air below 2.5 micrometres (`fine_slag_dust`)

Conditional actual escaped copper-slag aerosol in this independently measured non-overlapping aerodynamic size interval at the postcontrol air boundary. Retain chemical composition and elemental partition without adding metal assays to the same whole dust mass. Total PM alone cannot determine this interval or chemical species; collect evidence and add any actual larger fraction separately. No native mixed-slag particulate identity was confirmed.

- Selected flow: Copper-slag particulate to air below 2.5 micrometres
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

###### Copper-slag particulate to air from 2.5 to 10 micrometres (`coarse_slag_dust`)

Conditional actual escaped copper-slag aerosol in this independently measured non-overlapping aerodynamic size interval at the postcontrol air boundary. Retain chemical composition and elemental partition without adding metal assays to the same whole dust mass. Total PM alone cannot determine this interval or chemical species; collect evidence and add any actual larger fraction separately. No native mixed-slag particulate identity was confirmed.

- Selected flow: Copper-slag particulate to air from 2.5 to 10 micrometres
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condition`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`

### Process: Utilities maintenance and actual services (`support`)

#### Inputs

##### Product flows

###### Metered handling and control electricity (`site_electricity`)

For actual China (CN) user-side grid-average 1–35 kV AC only. Native reference property is Net calorific value with energy/MJ; do not force Mass/kg. Match voltage, grid route, geography/year and delivery boundary before provider use; native compliance prose is no site certification. Convert raw metered kWh with 1 kWh = 3.6 MJ once. Split actual manufacturing and postrelease service records by original Q_c; no second billing of pumps or crushers. Other geography, voltage, self-generation or contracted supply requires a different verified flow/provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### Ladle hauler and loader diesel (`site_diesel`)

Actual consumed whole diesel fuel, including real start/idle/cleanup and separately tagged postrelease service. Native Product/Mass specifies no grade, formulation, density, heating value, refinery, geographic supply or provider. Collect actual fuel specification and consumption; density or heat content requires its own evidence and is not a second fuel purchase. Upstream fuel supply and foreground combustion emissions have distinct owners.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `tms-copper-slag-services`; `jrc-ilcd-2010`

###### Mineral lubricating oil makeup (`mineral_lubricant`)

Conditional actual petroleum-mineral lubricating oil delivered as one whole formulation; additives are assay subledgers, not extra purchases. Preserve opening/closing sealed and installed stocks, drains, leaks and disposal; measure actual consumption and service attribution. The audited lubricating-oil candidate fixes PAO and total synthesis and is not a mineral-oil match. Actual synthetic oil must receive its own specific row and verified identity instead of using this row.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### Replacement crusher jaw plate (`jaw_plate`)

Conditional on the actual crusher using this cast manganese-steel plate. Record full supplied plate net mass, alloy/form, actual replacement, stock and service life; upstream provider must represent the finished cast plate, not a ferroalloy charge. No count-to-mass default or one replacement per reference kg. If a different real wear component is used, add that distinct article.

- Selected flow: Cast manganese-steel crusher jaw plate
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

##### Elementary flows

###### Atmospheric oxygen entering combustion (`ambient_oxygen`)

Actual O2 in engine intake air, including unconsumed pass-through measured separately from oxygen consumed; not purchased industrial oxygen. Retain measured air rate and O2 fraction and conditions. Resolve the specific native elementary identity and environmental compartment; no compatible adopted UUID is asserted. Keep unallocated physical throughput distinct from attributional A and do not bill atmospheric turnover as a commercial supply.

- Selected flow: Atmospheric oxygen entering combustion
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

###### Atmospheric nitrogen entering combustion (`ambient_nitrogen`)

Actual N2 in engine intake air. Preserve raw intake composition and rate, time and conditions; no presumption that total air becomes nitrogen or that N2 equals NOx. Resolve the specific native elementary identity and environmental compartment; no compatible adopted UUID is asserted. Keep unallocated physical throughput distinct from attributional A and do not bill atmospheric turnover as a commercial supply.

- Selected flow: Atmospheric nitrogen entering combustion
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

###### Atmospheric water vapour entering combustion (`ambient_humidity`)

Actual inlet humidity as H2O vapour, independently measured from ambient dry-air quantity and fuel water. It is neither purchased cooling water nor newly formed combustion water. Resolve the specific native elementary identity and environmental compartment; no compatible adopted UUID is asserted. Keep unallocated physical throughput distinct from attributional A and do not bill atmospheric turnover as a commercial supply.

- Selected flow: Atmospheric water vapour entering combustion
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

#### Outputs

##### Waste flows

###### Drained used lubricating oil (`used_oil`)

Whole actually drained oil contaminated through use, petroleum-based or synthetic, at generation. Native Waste/Mass fixes no treatment route, geography or provider and grants no recycling/combustion credit. Retain moisture/metal contamination, installed-stock changes and a single lawful receiver; do not report the same drain as both generic waste oil and this row.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

###### Retired worn jaw plate (`retired_jaw_plate`)

Conditional actual retirement of the corresponding plate, measured in its worn contaminated state and assigned one receiver. Retain wear fragments in their actual slag/dust destinations; new plate mass does not equal retired mass. Reuse/repair is an internal stock transfer until a true external exit.

- Selected flow: Worn manganese-steel crusher jaw plate
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

##### Elementary flows

###### carbon dioxide (fossil) in actual exhaust (`fossil_co2`)

Conditional actual postcontrol carbon dioxide (fossil) released to air, unspecified subcompartment, CAS 124-38-9, on Mass/kg. Collect a species-specific emission record or a documented applicable fuel/engine model with uncertainty; distinguish manufacturing from original-Q_c service. No universal emission factor and no double counting upstream provider emissions. Confirm the native air subcompartment matches the actual discharge; change identity when a more specific compartment is required.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### carbon monoxide (fossil) in actual exhaust (`fossil_co`)

Conditional actual postcontrol carbon monoxide (fossil) released to air, unspecified subcompartment, CAS 630-08-0, on Mass/kg. Collect a species-specific emission record or a documented applicable fuel/engine model with uncertainty; distinguish manufacturing from original-Q_c service. No universal emission factor and no double counting upstream provider emissions. Confirm the native air subcompartment matches the actual discharge; change identity when a more specific compartment is required.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### nitrogen monoxide in actual exhaust (`nitric_oxide`)

Conditional actual postcontrol nitrogen monoxide released to air, unspecified subcompartment, CAS 10102-43-9, on Mass/kg. Collect a species-specific emission record or a documented applicable fuel/engine model with uncertainty; distinguish manufacturing from original-Q_c service. No universal emission factor and no double counting upstream provider emissions. Confirm the native air subcompartment matches the actual discharge; change identity when a more specific compartment is required.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### nitrogen dioxide in actual exhaust (`nitrogen_dioxide`)

Conditional actual postcontrol nitrogen dioxide released to air, unspecified subcompartment, CAS 10102-44-0, on Mass/kg. Collect a species-specific emission record or a documented applicable fuel/engine model with uncertainty; distinguish manufacturing from original-Q_c service. No universal emission factor and no double counting upstream provider emissions. Confirm the native air subcompartment matches the actual discharge; change identity when a more specific compartment is required. Native historical nitrogen-tetroxide synonyms do not authorize N2O4 mass or a total-NOx-to-NO2 assumption.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### sulfur dioxide in actual exhaust (`sulfur_dioxide`)

Conditional actual postcontrol sulfur dioxide released to air, unspecified subcompartment, CAS 7446-09-5, on Mass/kg. Collect a species-specific emission record or a documented applicable fuel/engine model with uncertainty; distinguish manufacturing from original-Q_c service. No universal emission factor and no double counting upstream provider emissions. Confirm the native air subcompartment matches the actual discharge; change identity when a more specific compartment is required.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### Actual exhaust water vapour (`combustion_water`)

Conditional whole exhaust H2O vapour, CAS 7732-18-5, air unspecified on Mass/kg, at this actual discharge. Partition inlet humidity, fuel moisture and newly formed combustion water without adding those parts to the whole again; independently distinguish cooling evaporation at its separate boundary. Use measured fuel H/moisture and actual combustion evidence or a compatible measured exhaust balance; not a fitted residual and no universal fuel formula. Broad native water synonyms do not change vapour/air identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `epa-slag-reprocessing-1994`; `jrc-ilcd-2010`

###### Nitrogen gas in actual exhaust to air (`exhaust_nitrogen`)

Actual N2 at the air discharge, independently distinguished from measured NO and NO2 and any actual N2O. Pair intake and exhaust with the independent N balance; no assumed exhaust composition. Resolve the specific native elementary identity and environmental compartment; no compatible adopted UUID is asserted. Keep unallocated physical throughput distinct from attributional A and do not bill atmospheric turnover as a commercial supply.

- Selected flow: Nitrogen gas in actual exhaust to air
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

###### Residual oxygen in actual exhaust to air (`exhaust_oxygen`)

Actual unconsumed O2 at the discharge, measured independently from consumed oxygen, CO2/CO and actual oxidation in the slag. Do not fit residual oxygen and a second unknown with one mass residual. Resolve the specific native elementary identity and environmental compartment; no compatible adopted UUID is asserted. Keep unallocated physical throughput distinct from attributional A and do not bill atmospheric turnover as a commercial supply.

- Selected flow: Residual oxygen in actual exhaust to air
- Flow property / unit: Mass / kg
- Amount rule: Use the single already normalized attributable result from section 8; preserve raw numerator separately and perform no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_support`
- Sources: `jrc-ilcd-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attributional_hierarchy | source formation and all shared operations | Use an attributional model. First identify actual functions and independently dedicate or physically/virtually subdivide process steps. Next determine a documented physical causal relationship separately for each remaining exchange and co-function; a convenient mass or metal-content ratio is not automatically causal. Only the true residual joint process reaches a common process gate and allocation by representative contemporaneous market values of co-functions in their actual condition at that gate. Document price period, net condition/transport/processing adjustments, quantities, negative/zero price and service treatment, sensitivity and conservation of each exchange. Do not choose physical versus economic allocation at will, fix a slag percentage, infer product status from a positive sale, or use final copper value for raw slag. When a waste-management function or negative value exists, disclose the applicable joint-function logic and review it before use; no unexplained zero-burden cut-off. | `jrc-ilcd-2010` |
| no_automatic_recovery_credit | every material and outlet | Future recovery, ore displacement and avoided landfill are not credits in this attributional feed dataset. Keep recovered matte heel, saleable slag, disposal residue and any service distinct by real function and actual condition. Measure each whole physical outlet once with one verified provider; its source partitions are not additional outputs. Internal recirculation carries inherited burdens and cancels once. If the receiver is only paid to dispose of material or cannot demonstrate the intended feed acceptance, do not relabel the disposal service as this supplied reference Product. | `epa-slag-reprocessing-1994`; `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_source | condition | source molten slag and inherited burdens | source_records | source lot; whole concentrate and flux supply; source gate; each native exchange and unit; matte and each coproduct; raw input/output and stocks; copper phase and elemental assays; source allocation; inherited vector; tapped mass and temperature | Before accepting incoming slag, verify a source formation module from burden-bearing whole copper concentrate and actual separately supplied siliceous flux through preparation/drying, flash smelting, slag/matte separation and tapped molten slag. Record the actual oxygen and combustion-air supply, each fuel, electricity, water, refractory/maintenance and startup/idle/cleanup loads; original matte and each genuine co-product; offgas transfer and actual acid/heat recovery where operated; dust return and treatment; and each postcontrol atmospheric species, wastewater and solid residue. Require raw quantities, original supply forms, source year/location, actual source output gate, allocation and an exchange-by-exchange inherited vector. Concentrate assays and carrier water are subledgers of the whole concentrate, never additional oxide/sulfide purchases. A compatible matte PCR can guide the source operation but cannot supply an unverified slag burden by subtraction or an arbitrary yield. Missing formation coverage makes a concrete dataset incomplete; purchased finished slag plus packaging is not this route. | kg; MJ | each source campaign and transfer | full source campaign including failures and opening/closing inventory | actual originating copper flash smelter | per 1 kg reference flow | supplier primary records; calibrated meters; assays; source model and allocation reconciliation |
| cp_condition | condition | all cooling and physical exits | raw_foreground | lot; source mass; cooling time temperature sequence; raw water and rain; raw rate or integrated quantity; actual density conditions; opening/closing WIP; raw dry solids and metal phases; whole liquid/solid exit; source partition; receiving provider; internal reuse; failed lot and Q0; assay uncertainty | Collect unnormalized raw readings and paired samples at each physical boundary; weigh whole wet streams and independently measure moisture/solids/species. Calibrate instruments and record censored/unknown values. Sum raw quantities only; the aggregation label states the eventual result basis and performs no division. Record direct releases only when this foreground owns them. | kg; actual raw units | each lot and event with integrated period closure | complete matched reporting period plus opening/closing histories | declared cooling crushing drainage boundary | per 1 kg reference flow | weighbridge calibration; cooling log; assay QA; wet and elemental reconciliation; receiver permits |
| cp_release | condition | unique first-release Q | release_records | lot ID; original Q_c; timestamp; calibrated net wet mass; free moisture; dry Cu Fe Si S assay and phases; trace pollutants; grain size and temperature; receiver specification and acceptance; legal material class; rejected samples; closing released FG; retest return and dispatch links | Independently weigh qualified net lot excluding equipment and packaging, pair representative moisture/phase/grade/contaminant tests with actual receiving-feed specification and release authorization, and deduplicate original lot records. Retain closing released FG within Q. No later handling or acceptance generates new production. Collect Q without a normalization division. | kg | each first release | one deduplicated cohort with complete release records | producer conditioned-feed release interface | per 1 kg reference flow | calibrated mass; representative sampling plan; test uncertainty; signed receiver-feed acceptance |
| cp_support | support | utilities maintenance and original-cohort services | raw_foreground | exchange ID; whole supply and native unit; raw meter readings; voltage and grid; fuel formulation; exact emission species; stock changes; oil installed/drained; new/worn plate; original Q_c; manufacturing/service tag; observed H; gross dispatch and true returns; packaging empty/WIP/FG/reusable stocks and purchases/returns/waste; provider ownership; first nonpurchase packaging receipt ID/time/origin; specific material/form/type and atomic input interface; measured raw receipt quantity and native unit; mutually exclusive P/N_ext/ER; true ER prior dispatch; component owner and inherited unused-stock vector | Meter each actual utility and individual species, reconcile installed/unused assets and supplies, and independently dedicate or subdivide manufacturing versus already performed original-cohort services. Retain failed/idle/cleanup/rework and observed postrelease work. Collect raw quantities with no division; convert and allocate once in section 8. Add any real unlisted atomic flow, including each actual first borrowed/leased or genuinely nonpurchased supplier-attached packaging receipt; weigh its full physical ingress independently from procurement, retain every opening/closing state and gross outward leg, and reconcile one owner/vector/provider once without a second manufacture burden. Do not confuse integrated m3 with m3/hour. | kg; MJ; actual raw units | continuous meters and every supply/service event | complete source-linked period; actual service horizon H | declared on-site plant/support/service boundary | per 1 kg reference flow | meter calibration; fuel assay; emission method; stock cards; service logs; original-Q_c and provider reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all inventory rows | a_i = A_i / Q for Q > 0; A_i is the unnormalized exchange-specific inherited and current attributable amount after actual unit/rate conversion and the section-7 hierarchy and stock/transfer reconciliation; Q is the unique net wet first-release mass from cp_release. Use original Q_c for its separate already-performed service result. This is the only normalization division; cards and protocol aggregation refer to this same result. For Q = 0 retain raw burdens and produce no a_i. The reference output is 1 kg by definition. | A_i; Q; Q_c; cp_source; cp_condition; cp_release; cp_support | a_i | `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_source | molten_slag | Before accepting incoming slag, verify a source formation module from burden-bearing whole copper concentrate and actual separately supplied siliceous flux through preparation/drying, flash smelting, slag/matte separation and tapped molten slag. Record the actual oxygen and combustion-air supply, each fuel, electricity, water, refractory/maintenance and startup/idle/cleanup loads; original matte and each genuine co-product; offgas transfer and actual acid/heat recovery where operated; dust return and treatment; and each postcontrol atmospheric species, wastewater and solid residue. Require raw quantities, original supply forms, source year/location, actual source output gate, allocation and an exchange-by-exchange inherited vector. Concentrate assays and carrier water are subledgers of the whole concentrate, never additional oxide/sulfide purchases. A compatible matte PCR can guide the source operation but cannot supply an unverified slag burden by subtraction or an arbitrary yield. Missing formation coverage makes a concrete dataset incomplete; purchased finished slag plus packaging is not this route. | original source model and atomic records with per-exchange inherited vector |
| dq_receiver | first_release_slag | Require every qualifier, non-ferrous copper flash-smelter provenance, independent actual metal/phase/moisture/contamination analyses, receiver specification and lawful receiving function. Match full native type, route, form, geography, media and property/unit; generic UUIDs certify none of the site tests. Reject steel-origin or precious-metal classes, pure-copper substitutions, ready concentrate and incompatible historic/granulated material. Do not substitute a Waste flow for the required supplied Product interface. | actual batch assays and phase/mineral tests; receiver feed specification; classification and acceptance documents |
| dq_complete | all inventory rows | Verify the full source formation module and per-exchange inheritance, source/receiver gates and providers; reconcile each unallocated gross physical/element/water balance independently from attribution. Verify unique Q, unchanged closing-FG treatment, all failures and WIP inheritance, original-Q_c service ledgers, whole-mixture exits and full packaging/asset stocks. Missing core formation or receiver evidence blocks a complete concrete dataset. Auxiliary UUID/provider/measurement gaps remain explicit work items and never justify fabricated amounts or universal grades. | independent gross V and elemental/water closures; failure and WIP ledger; service and package records |
| dq_uncertainty | whole model | Collect and preserve raw records before conversion, inheritance and allocation. Compute the final amount once under the section-8 calculation after those steps; do not divide again in cards or collection aggregation. Q=0 gives no unit result. Distinguish measured zero, proven absence, censored values and unknown. Report uncertainty, temporal/site representativeness, missing exchanges, sensitivity and all unresolved native identities. A coherent method is not scientific approval, translation review, mapping acceptance or measured factory compliance. | temporal/geographic/technological coverage; measurement uncertainty and sensitivity; native gap register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | reference and incoming source | Require every qualifier, non-ferrous copper flash-smelter provenance, independent actual metal/phase/moisture/contamination analyses, receiver specification and lawful receiving function. Match full native type, route, form, geography, media and property/unit; generic UUIDs certify none of the site tests. Reject steel-origin or precious-metal classes, pure-copper substitutions, ready concentrate and incompatible historic/granulated material. Do not substitute a Waste flow for the required supplied Product interface. | `jrc-nfm-bref-2017`; `epa-slag-reprocessing-1994`; `unsd-cpc30-2025` |
| source_and_accounting_gate | all inventory rows | Verify the full source formation module and per-exchange inheritance, source/receiver gates and providers; reconcile each unallocated gross physical/element/water balance independently from attribution. Verify unique Q, unchanged closing-FG treatment, all failures and WIP inheritance, original-Q_c service ledgers, whole-mixture exits and full packaging/asset stocks. Missing core formation or receiver evidence blocks a complete concrete dataset. Auxiliary UUID/provider/measurement gaps remain explicit work items and never justify fabricated amounts or universal grades. | `jrc-ilcd-2010` |
| normalization_and_quality_gate | whole model | Collect and preserve raw records before conversion, inheritance and allocation. Compute the final amount once under the section-8 calculation after those steps; do not divide again in cards or collection aggregation. Q=0 gives no unit result. Distinguish measured zero, proven absence, censored values and unknown. Report uncertainty, temporal/site representativeness, missing exchanges, sensitivity and all unresolved native identities. A coherent method is not scientific approval, translation review, mapping acceptance or measured factory compliance. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Burden-bearing supplied mixed copper-smelter residue as feed to a separately modelled copper-recovery process |
| allowed_use | Only compatible source flash-smelting slag and receiver-feed condition with verified formation and actual release evidence |
| excluded_use | Exclude iron/steel-manufacturing slag and EAF dust regardless of iron content; precious-metal ash and anode slime and materials classified or supplied for a precious-metal recovery function; converter slag and mixed-furnace slag; historic dump mining; quench-granulated abrasive or construction aggregate; already floated slag concentrate and final flotation tailings; pure copper or a pure oxide; refined recovered metal; and a disposal-only service without a genuine receiving-feed function. Trace precious-metal occurrence alone does not establish an allowed class: document the actual material classification and receiver purpose without inventing a universal concentration threshold. No other non-ferrous residue is a selectable branch. The iron in copper smelting slag does not make its generating process iron/steel manufacture. |
| required_metadata | copper flash-smelter and source campaign; original feed and source-process boundary; separation from matte and converter slag; source-specific copper and iron and silicon and sulfur assays; relevant trace metals and precious-metal classification; copper metal versus sulfide versus oxide phases and mineralogy; fresh slag and cooling history; no historic stockpile or granulated abrasive; measured net as-released mass and free moisture; dry-assay basis and sampling uncertainty; crushing and actual particle-size distribution; receiver feed specification and temperature and contamination acceptance; lawful receiver and real copper-recovery function; upstream exchange-specific inherited burden and allocation; first-release lot and timestamp and original Q_c; opening and closing WIP vectors; gross shipments and returns and no repeat output; postrelease service horizon H; actual water circuit and wet residues and receiving media; native voltage and supply route and geography; every real package and maintenance stock and provider ownership |
| required_quality_disclosure | Independent original source chain and allocation; no generic native grade guarantee; technical synthesis versus measured site data; original Q_c and service H; complete physical ledgers; each auxiliary UUID/provider gap and uncertainty; no automatic recovery credit |
| update_trigger | Source furnace/feed or contamination change; new receiver or function; changed cooling/mineralogy/particle gate; revised allocation or prices; updated native restrictions; new primary evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-nfm-bref-2017 | official_guidance | European Commission JRC (2017), Non-Ferrous Metals Industries BREF, EUR 28648 EN, doi:10.2760/8224, sections 3.2.2.5 and 3.3.3.4.1, printed pp. 241 and 283–285. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | Copper-smelting residue distinctions; slow cooling/crushing/drainage and real concentrator receivers; adjacent thermal and downstream flotation routes. Case compositions and consumptions are not universal requirements or allocation factors. |
| epa-slag-reprocessing-1994 | official_guidance | US EPA (April 1994), Innovative Methods of Managing Environmental Releases at Mine Sites, OSW 530-R-94-012, section 3.1, printed pp. 25–32. https://archive.epa.gov/epawaste/nonhaz/industrial/special/web/pdf/innovate.pdf | San Manuel original flash-slag formation and distinct converter/historic counterexamples; cooling/crushing-to-concentrator handover; water, maintenance and contamination gaps; no fixed minimum copper content or transferable recovery/ore-displacement credit. Historical case not a contemporary order. |
| epa-primary-copper-1995 | official_guidance | US EPA, AP-42 section 12.3 Primary Copper Smelting, October 1986 reformatted January 1995, process description and Figure 12.3-1. https://www.epa.gov/sites/default/files/2020-11/documents/c12s03.pdf | Original concentrate/flux-to-matte/slag formation and source-operation distinctions; upstream full source inventory requirement. No historical emission factor or furnace default imposed on the selected site. |
| tms-copper-slag-services | literature | TMS International, Copper Slag Services, official service description snapshot 26 October 2026. https://tmsinternational.com/Services/CopperSlag | Independent industrial confirmation of molten-slag transport, slow cooling, breaking/crushing and metal recovery; proprietary accelerated cooling and separated matte are countercontexts, not a mandatory route or adopted performance claim. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC (2010), ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality: subdivision/virtual subdivision, exchange-specific determining physical causality, residual common-gate actual-state market values and transparent allocation. Methodological application to this route is author synthesis; no numerical recycling or allocation factor adopted. |
| unsd-cpc30-2025 | official_guidance | UNSD CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Complete 39320 definition and adjacent iron/steel and precious-metal exclusions; classification context only and no automatic methodology mapping. |
