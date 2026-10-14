---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.ethylene-propylene-butylene-butadiene
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Ethylene from fossil ethane steam cracking and integrated separation

## 1. Scope and Applicability

This PCR defines one manufacturing route: a fossil-ethane steam cracker with integrated quench, compression, caustic acid-gas removal, molecular-sieve drying, selective C2 hydrogenation, cryogenic fractionation, ethane recycle, product handling and delivery of conforming ethylene gas at the pipeline battery limit. The selected separation configuration is a front-end demethaniser; purified internally recovered hydrogen feeds the C2 hydrogenation stage. Water quench and steam/air decoking with dust arrestment are included. Actual equipment and transfers must demonstrate this configuration before the method is applied. These are route limitations, not a claim that every steam cracker has this arrangement (`jrc-lvoc-2017`, §§3.2.2–3.2.3, Figures 3.2–3.3).

CPC 3.0 33421 contains ethylene, propylene, butylenes and butadiene. The reference here is only ethylene from this declared route. Actual propylene and a mixed C4 cut are physical co-products. This method does not make pure butadiene or each butene an interchangeable reference product, and does not establish coverage for the entire classification. The method does not infer a purchaser grade or coproduct slate from a database label; classification acceptance remains separate.

Exclude naphtha/LPG/gas-oil cracking, FCC refinery-gas recovery, propane dehydrogenation, ethanol dehydration, methanol-to-olefins, metathesis, purchased-ethylene independent purification, cryogenic liquid ethylene dispatch, downstream C4 extractive separation, aromatics extraction and polyethylene manufacture. Do not append an independent downstream purification dataset to integrated separation already counted here. Source-level pretreatment of waste liquor is included, but final wastewater treatment is an external linked service in this route; a plant with direct final wastewater discharge requires a separately resolved treatment module and actual species/receiving-water rows before claiming completeness (`jrc-lvoc-2017`, §§3.2.1, 3.2.2.4, 3.3.2; `epa-ethylene-2006`, printed p.2-5).

No BREF exemplar yields, BAT-associated concentrations, historical IPCC emission factors or producer capacities are default activity quantities. Actual supplier/SKU composition, accepted output and source-specific records are required by the collection protocols. An inventory screening row has no implied positive amount. Prove absence before declaring a row not applicable; absence of a UUID or an unsuccessful lookup is not evidence of physical absence.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.ethylene-propylene-butylene-butadiene |
| classification_refs | CPC 3.0 `33421`; proposed `narrower` applicability, not an accepted mapping |
| covered_products | Conforming gaseous ethylene (CAS 74-85-1) delivered from the defined fossil-ethane cracker and integrated front-end-demethaniser separation. |
| excluded_products | Pure butadiene or individual butenes as references; other olefin manufacture/recovery routes; liquid ethylene shipment; downstream polymers and extracted aromatics. |
| representative_product | One accepted bulk ethylene gas grade at the declared pipeline battery limit. |
| production_route | Fossil ethane receipt → steam cracking → water quench/condensate separation → compression/caustic wash → molecular-sieve drying → demethanisation and selective C2 hydrogenation → ethylene/ethane fractionation and recycle → integrated handling/delivery. |
| market_state | Ethylene gas at measured delivery pressure and temperature; composition, water/acetylene limits and phase shall satisfy the actual purchaser specification. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of conforming ethylene gas for chemical synthesis at the stated battery limit. |
| How much | 1 kg net accepted ethylene product grade, not 1 kg mixed olefins or purity-adjusted pure-component equivalent. |
| How well | Meets the declared purchaser grade, assay, water/acetylene specification and pipeline acceptance; physical phase is demonstrated at actual pressure and temperature. |
| How long or cycle | One representative reporting period that includes normal operation, startup/shutdown, trips, flaring, decoking and inventory changes. |
| reference_flow_link | ethylene_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gaseous ethylene `ebdb109c-a22f-4c5b-b51c-d366106daff0` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual ethylene assay and accepted grade; CAS 74-85-1; gas phase and delivery pressure/temperature; custody point; fossil ethane origin and feed assay; front-end demethaniser/C2 hydrogenation configuration; actual C3/C4 and condensate recovery; reporting period and inventory change; decoking and abnormal-operation coverage; imported/exported utility definitions; upstream provider reference basis; allocation hierarchy and factors; physical-balance and species completeness |

Declare all required qualifiers in the resulting dataset. A flow's broad chemical identity and the compatibility of its supplied quantity/background dataset are separate checks. Exact verified product, property and unit-group references are required before UUID-bound data production; a plausible ethylene name alone does not establish those references.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | ethylene_product | Mass | kg | Meter net accepted ethylene grade at the custody point, exclude returns/off-spec diversion and reconcile opening/closing inventory. All row denominators are per 1 kg reference flow. Keep the full physical ledger before allocation. |
| `gas_quantity_basis` | ethane feed, fuel gas, hydrogen and gaseous products | Mass or Volume | kg or m3 | Retain measured pressure (absolute versus gauge), temperature, moisture, composition and compressibility. For a volume measurement, n = P_abs V / (Z R T); mass = n times the measured-mixture molar mass. Use consistent SI units and traceable molecular identities. Do not use an unexplained supplier mass factor as density or silently treat actual m3 as reference m3. |
| `solution_basis` | caustic and formulated materials | Mass | kg | Record delivered formulation mass and assay independently. Pure constituent mass equals solution mass times its measured mass fraction; neither may replace the other background reference without an explicit conversion. |
| `heat_basis` | steam_import, steam_export, condensate_return | Mass and enthalpy | kg and MJ | Preserve each actual header grade and gross physical mass. Net useful heat is the enthalpy of supplied steam less actual returned-water enthalpy under the same boundary, with losses and inventory change disclosed; internal heat recovery is not purchased heat or exported heat. UUID energy metadata cannot establish this basis by itself. |
| `carbon_sulfur_water` | all material and direct release records | Species mass and provenance | kg | Close whole mass and C/H/O/N/S at each stage and the aggregate boundary, with fossil/biogenic carbon separate. Include all measured compounds, formulation carriers, water, oxygen/air, products, wastes, actual releases and opening/closing stocks. Reactions conserve total mass and atoms; never add reaction formation/consumption as total-mass or elemental sources/sinks. Species balances may include stoichiometric formation/consumption once, based on actual conversion. Unknown composition remains an explicit residual, not a zero fraction or default emission. |
| `species_and_particles` | air releases | Species mass | kg | Preserve compound CAS and actual air compartment; mass-as-carbon, NO2-equivalent and wet/dry/reference-temperature concentration bases need documented conversion. Use NO and NO2 actual masses only when speciation supports them; exclude N2O from NOx. Particulate bins <=2.5, >2.5–10 and >10 micrometres are mutually exclusive; total PM/PM10 are QA observations, not added exchanges. |

Verified Mass rows use Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg. Verified Volume rows use Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3. Selected electricity uses Net calorific value / MJ and Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`, whose kWh conversion is 3.6 MJ. These identity conversions do not supply actual gas density, steam enthalpy or a background provider.

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_integrated` | ethane_steam_cracker | Include the declared integrated stages, recycle, furnaces, heat recovery, actual utilities, refrigeration, storage/delivery, source pretreatment, decoking and catalyst maintenance/regeneration. Stage data are collected separately, then consolidated as one foreground unit. | `jrc-lvoc-2017`; `epa-ethylene-2006` |
| `boundary_feed_origin` | imported feed and materials | Link upstream natural-gas production, ethane recovery/separation and transport to the actual supplier/region. Retain feed composition, fossil/biogenic provenance, sulfur and source-specific provider quantities. Do not substitute refinery-naphtha production or wood/pulp evidence for this route. | `jrc-lvoc-2017`; `shell-monaca-2025` |
| `boundary_internal_links` | recycle and recovery | Record ethane/propane recycle, internally recovered hydrogen, methane-rich firing gas, quench water, condensate and recovered steam with equal sender/receiver quantities in the same period. Cancel internal transfers in the aggregate boundary inventory. Record associated emissions once; do not add an upstream purchase or displacement credit for internally generated fuel. | `jrc-lvoc-2017`; `ipcc-chemical-2006` |
| `boundary_external_products` | co-products | Preserve every actual gas, liquid and solid product output with composition, quantity, acceptance and destination, before allocation. Only net external delivery is a co-product. Mixed C4 and pyrolysis gasoline end at their transfer interface; their downstream extraction is not part of integrated ethylene separation. | `jrc-lvoc-2017`; `epa-ethylene-2006` |
| `boundary_releases` | direct and waste interfaces | Include controlled/uncontrolled vents, leaks, furnace/flare/decoking outlets and actual refrigerant losses. Transfer distinct spent liquor, purge water and solids to their real external treatment datasets once. These transfers are not freshwater elementary emissions; direct releases require species and receiving-compartment rows. | `jrc-lvoc-2017`; `epa-ethylene-2006` |
| `boundary_maintenance` | supply containers and equipment maintenance | Include actual catalyst/adsorbent/refrigerant replacement, lubricants, cleaning materials, packaging and reusable supply-container cleaning/repair/return services attributable to this route. Pipeline ethylene has no assumed disposable product package. Record each actual material/grade separately, distinguish tare from contents and returnable stock from consumption; include compatible service burdens once. Absence must be evidenced, not inferred from missing UUIDs. | `jrc-lvoc-2017`; `eu-pef-2021` |
| `boundary_no_overlap` | alternatives and downstream datasets | Do not combine this route with independently modelled ethylene purification, refinery-gas recovery, C4/butadiene extraction, aromatics recovery or polymer manufacture. Utility/treatment datasets must begin at the declared transfer point without duplicating onsite processes. A different feed/configuration requires an applicability decision. | `jrc-lvoc-2017`; `epa-ethylene-2006` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fossil ethane from identified natural-gas/NGL separation is received with quantity, composition, source and upstream reference basis; no refinery feed or purchased ethylene is assumed. |
| starting_condition_role | Physical foreground feed receipt, with upstream supply burdens linked separately. |
| product_classification_scope | The ethylene subset of CPC 3.0 33421 under this manufacturing route; other named products and routes are not automatically covered. |
| recursive_input_rule | Purchased ethylene used only as actual refrigerant make-up retains its own supplier dataset; it does not permit recursion into a second cracker or reclassification as independently purified feed. Internal ethylene diversion cancels within this unit. |
| upstream_dataset_requirement | Source-specific ethane recovery and supply, electricity/fuels/materials/steam, external treatment, and any actual externally supplied hydrogen or refrigerant with compatible quantity bases. |
| disclosure | State process diagram, feed origin, gas/liquid/solid outputs, internal transfers, shared utilities, external treatment points, gases and aqueous contaminants, controls, allocation, uncertainties and unresolved interfaces. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ethane_steam_cracker` | Integrated ethane cracking and ethylene separation | required | Applies only to the specified feed, demethaniser configuration, gas delivery and external final-treatment interface. | One consolidated foreground unit; stages remain separately measured in the physical process diagram. | 1 kg accepted ethylene gas, row ethylene_product. |

The physical diagram shall show receipt → dilution/pyrolysis → quench → compression/caustic wash → drying → fractionation/C2 hydrogenation → final gas delivery, with recycle and actual C3/C4/condensate branches. Show furnace fuel and flare feed, heat-recovery and water loops, and waste transfer arrows. Maintain a link matrix for every arrow: link id, sender/receiver stage, stream identity/CAS or complete mixture, phase/grade, native property/unit, gross and net quantities, return/off-spec branch, same period and uncertainty. Both ends carry the same conserved quantity after an explicit unit conversion; include gross internal ethane/hydrogen/firing-gas/steam/water and refrigerant circulation before aggregate cancellation. Assign each actual external coproduct, captured decoking solid, return, waste and elementary release to exactly one terminal interface. No second ethylene intermediate output is added to this aggregate inventory.

Each following card is one boundary exchange. Composite commercial materials and actual hydrocarbon cuts are single physical streams with a constituent ledger, not selectors for unrelated flows. Record a demonstrably absent conditional card as not applicable in the actual dataset; add a new atomic card for any additional detected species/material/grade, including treatment reagents, nitrogen purge and separated waste streams. Do not use unspecified VOC/NMVOC or generic wastes to hide such additional exchanges.

### Process: Integrated ethane cracking and ethylene separation (`ethane_steam_cracker`)

#### Inputs

##### Product flows

###### ethane (`ethane_feed`)

CAS 74-84-0. Record net fresh ethane from natural-gas/NGL separation, supplier, basin and upstream separation/transport. Meter the actual supplied phase at pressure and temperature; distinguish it from recycled ethane. This route admits an ethane feed, not an unqualified LPG or naphtha blend.

- Selected flow: ethane `75e47deb-a71a-472e-aaff-7d6767db1e8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### natural gas in the gaseous state (`natural_gas_fuel`)

One purchased fossil methane-rich fuel-gas stream, with measured gas composition. Keep the supplier reference volume, pressure, temperature, wet/dry convention and compressibility; a secondary mass factor is not a density. This is furnace/utility fuel, not cracking feed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`

###### Biomethane (`biomethane_fuel`)

CAS 74-82-8 for methane. Conditional separately supplied auxiliary fuel only; fossil ethane feed remains required. Prove physical biogenic carbon fraction and upstream origin; certificates alone cannot remove physical fossil emissions. Do not count this stream twice if included in a metered blend.

- Selected flow: Biomethane
- Flow property / unit: Volume / m3
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`

###### Alternating current (`electricity`)

Meter purchased electricity for cracking auxiliaries, compression, refrigeration, fractionation, pretreatment and delivery. Specify voltage, provider, geography and generation/market basis; preserve the reference property actually verified before background linkage. The selected UUID applies only to CN grid-average 35–330 kV supply at the measured boundary; verify actual supplier geography and market/voltage together. Other actual voltages require separate verified atomic rows. Native reference property is Net calorific value in MJ; retain kWh readings and the unit-group conversion 1 kWh = 3.6 MJ. This is electricity identity, not a combustion recipe.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`

###### Steam, in chemical industry (`steam_import`)

Water CAS 7732-18-5 in vapour phase. Record each actual header pressure, temperature, dryness or superheat, supply enthalpy and condensate-return conditions. The future dataset shall separate incompatible grades. No 11.0 MPaG or 0.45 MPaG identity is presumed; MJ metadata alone does not establish net delivered heat. The selected broad chemical-industry steam identity has Mass as reference and no stated pressure/enthalpy. Its UUID does not settle actual header-grade or provider quantity compatibility; record them before background linkage.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`

###### Process Water (`water_makeup`)

Water CAS 7732-18-5, liquid. Meter external make-up for dilution-steam, quench, cooling and decoking systems separately in stage records, while aggregating the same supplied water at the boundary. Treatment chemicals and a different water grade require their own atomic rows if actually used. Internal circulation is not withdrawal.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-2017`

###### Sodium hydroxide（30%） (`caustic`)

NaOH CAS 1310-73-2; water CAS 7732-18-5. One delivered aqueous formulation, measured solution mass and assay; do not treat kg of solution as kg of pure NaOH. Caustic-only acid-gas removal is the selected route; amine regeneration is excluded. The selected UUID is only the delivered 30% grade, never a universal concentration or dosing default. Confirm actual assay, solution mass and provider basis. A different actual supplied concentration requires its own exact flow; onsite dilution water is accounted once.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Dimethyl disulfide (`dmds`)

CAS 624-92-0, liquid dosing reagent. Include only if actually dosed against coking; record purity, formulation carrier and sulfur delivered. No generic sulfur dose or default rate. If a formulated product is supplied, split independently supplied components, but retain the delivered formulation mass and composition.

- Selected flow: Dimethyl disulfide
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Hydrogen (`hydrogen_import`)

CAS 1333-74-0, gas at declared receipt conditions. Include only net hydrogen purchased for selective hydrogenation or regeneration. Internally generated hydrogen remains in the stage ledger; it is neither a purchased input nor a negative external credit.

- Selected flow: Hydrogen
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Molecular sieve drying beads (`drying_beads`)

One solid commercial adsorbent grade used in cracked-gas drying. This composite has no single assumed CAS: record zeolite type, binder, each actual constituent CAS, grade and provider from the SKU/SDS. Do not substitute natural alumina or a different sieve by name.

- Selected flow: Molecular sieve drying beads
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Acetylene hydrogenation catalyst (`hydrogenation_catalyst`)

One solid formulated catalyst grade actually installed for selective C2 hydrogenation. Record active metal(s), support, loading, each constituent CAS, replacement quantity and regeneration history. No default metal recipe, CAS or catalyst life is prescribed by the BREF.

- Selected flow: Acetylene hydrogenation catalyst
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Lubricating oil (`lubricating_oil`)

One actual petroleum-derived liquid compressor lubricant grade; obtain formulation/SDS constituent CAS and fossil carbon content. The source field states 40.5 MJ/kg without a usable onsite heating-value definition. Retain it as source metadata, not a default factor or a fabricated required grade; actual formulation and any energy/property linkage require provider evidence. Record net make-up, recovery and discarded oil, not gross circulating oil. Additional lubricant grades shall be distinct rows in the dataset.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Gaseous ethylene (`ethylene_refrigerant`)

CAS 74-85-1. Conditional externally purchased make-up to a closed ethylene refrigeration circuit, with actual liquid/vapour conditions. No positive use is presumed. Product-side internal diversion is an internal transfer, not an additional purchased input; refrigerant releases enter the ethylene-air row. The selected identity describes gaseous ethylene supplied from natural-gas-based ethane manufacture. Use it only for a compatible external gaseous delivery; internal phase changes in refrigeration remain in the stage ledger. A different manufacturing origin or supplied phase needs separately verified identity.

- Selected flow: Gaseous ethylene `ebdb109c-a22f-4c5b-b51c-d366106daff0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

###### Propylene (`propylene_refrigerant`)

CAS 115-07-1. Conditional purchased make-up to an actual closed propylene refrigeration loop; declare pressure/temperature and liquid/vapour phase. Internal propylene diversion cancels within the combined foreground; releases are included once in propylene-air.

- Selected flow: Propylene
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: `jrc-lvoc-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gaseous ethylene (`ethylene_product`)

CAS 74-85-1. Exactly one net accepted ethylene-gas output at the pipeline battery limit, with assay, pressure, temperature and phase demonstrated. Do not add another finished/intermediate ethylene product output under this aggregate process.

- Selected flow: Gaseous ethylene `ebdb109c-a22f-4c5b-b51c-d366106daff0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Hydrogen (`hydrogen_export`)

CAS 1333-74-0, purified gas if actually exported. Record net mass, purity, destination and retained carbon-bearing impurities. Internal hydrogenation consumption is not exported quantity; do not combine a methane/hydrogen mixed cut with pure hydrogen.

- Selected flow: Hydrogen
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Cracker fuel gas (`fuel_gas_export`)

One exported gaseous methane/hydrogen-rich mixture, no single CAS. Record species composition, fossil/biogenic provenance, net mass, heating-value convention and destination. Methane CAS 74-82-8 and hydrogen CAS 1333-74-0 describe components, not the whole mixture. Internal firing/flare feed is not an external co-product output.

- Selected flow: Cracker fuel gas
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Propylene (`propylene_product`)

CAS 115-07-1. Include only a separately recovered conforming propylene cut, with measured purity and gas or pressure-liquefied delivery state. Trace propylene in another cut is composition, not another product. It is a co-product, never a second reference product.

- Selected flow: Propylene
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Propane (`propane_export`)

CAS 74-98-6. Only a separately exported propane stream; record actual pressure-liquefied or gaseous state and assay. Internally recycled propane is not fresh feed and not external output. A propane/propylene blend requires its own mixture identity rather than this pure-substance label. The source identity includes propane from processing natural gas or petroleum. Use its chemical identity only when actual separated propane assay/state agrees; do not import its relative-density range, standard citation or provider assumptions as defaults.

- Selected flow: Propane `9c0d706a-c414-4afb-ad0c-4777c4072311`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### C4 (`mixed_c4`)

One physical pressure-liquefied C4 cut, no single CAS. Assay butanes, 1-butene (106-98-9), cis-2-butene (590-18-1), trans-2-butene (624-64-6), isobutene (115-11-7), 1,3-butadiene (106-99-0) and other actual components. Do not relabel it pure butadiene or generic butylene. Downstream extractive separation is excluded.

- Selected flow: C4 `d61cf312-f582-4db7-b34f-35071222283d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Pyrolysis gasoline (`pygas`)

One actual liquid C5+ pyrolysis condensate, with measured composition, boiling distribution and destination; no universal CAS or benzene content. Include only when recovered. It is not refinery naphtha, finished motor gasoline or extracted aromatics.

- Selected flow: Pyrolysis gasoline
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Heavy pyrolysis fuel oil (`pyrolysis_oil`)

One distinct liquid heavy pyrolysis-residue stream only if actually recovered and accepted as a product. Do not infer it from naphtha/gas-oil examples for an ethane cracker. Record composition, sulfur, carbon and recipient; classify the same material as waste instead if no product acceptance, never twice. Use a verified identity with the actual water-quench residue supply state and transfer interface; oil-washing-tower supply is not the same endpoint. Retain this specific heavy residue when actually present, with its identity unresolved until confirmed; do not invent an oil-washing stage or redefine the actual residue to fit a source.

- Selected flow: Heavy pyrolysis fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `jrc-lvoc-2017`

###### Steam, in chemical industry (`steam_export`)

Water CAS 7732-18-5, vapour at documented header conditions. Net external delivery only, with steam mass and independently reconciled useful enthalpy relative to returned water. Internal reboiler/turbine/dilution-steam use is an internal link, not export. No automatic displaced-electricity or fuel credit. The same broad steam identity is used only for actual external vapour delivery. Its physical identity does not prove useful heat or a displaced provider.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvoc-2017`

###### Steam condensate (`condensate_return`)

Water CAS 7732-18-5, liquid actually returned to an external steam supplier. Record temperature, contaminants and recipient; reconcile imported steam and make-up water. It is not direct environmental water discharge. Internal condensate recirculation cancels.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-2017`

##### Waste flows

###### Waste Alkaline Liquor (`spent_caustic`)

A distinct aqueous spent NaOH scrubber stream with sulfide, carbonate and organic contaminants; record pH, COD, sulfide/sulfate, carbon and actual constituent CAS from analysis. Stripping/wet oxidation before transfer is included when present. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body. The source comment explicitly identifies ethylene-cracker spent scrubbing liquor before final treatment; its route field names neutralization. Use this generated-waste identity only with a compatible documented neutralization recipient/interface, not for already neutralized liquid or as an external-treatment dataset.

- Selected flow: Waste Alkaline Liquor `ca310225-50c8-4d41-8353-4338b41e19a1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Hydrocarbon-contaminated quench-water bleed (`quench_bleed`)

Liquid purge after the selected source pretreatment, with flow and dissolved/dispersed organics; distinguish it from recirculated quench water and spent caustic. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Hydrocarbon-contaminated quench-water bleed
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Cooling-water blowdown (`cooling_blowdown`)

Actual liquid cooling-loop purge transferred to external treatment. Assay salts, treatment chemicals and hydrocarbon leak contamination; do not classify it as clean freshwater release. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Cooling-water blowdown
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Sludge (`decoke_sludge`)

Captured coke/solid-water waste from wet decoking arrestment, with separately measured wet mass, water, dry solids, carbon and sulfur. Collected solid is not emitted PM; filter cake and liquid carry-over shall not be counted twice. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body. The selected broad industrial sludge identity is conditional on the actual wet captured decoking slurry and its laboratory composition; its water-treatment route wording and sewage-sludge classification do not establish biological composition or a treatment service. Preserve these source anomalies for clarification; actual wet captured solids, composition and transfer state must agree. Dry cyclone/filter coke solids require a separate actual solid row rather than this wet slurry identity.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Spent molecular sieve drying beads (`spent_sieve`)

One solid spent adsorbent grade with retained hydrocarbons, water and provider take-back/treatment record; no assumed hazardous status or universal CAS. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Spent molecular sieve drying beads
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Spent acetylene hydrogenation catalyst (`spent_catalyst`)

One spent solid catalyst grade with active-metal/support composition and contamination; distinguish return for regeneration, metal recovery and disposal by actual recipient records. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Spent acetylene hydrogenation catalyst
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Hydrocarbon-rich primary-separation sludge (`heavy_oily_sludge`)

A separate measured solid-rich oily residue rejected as product. Record wet/dry basis, hydrocarbon carbon, sulfur and destination; do not reuse the product pyrolysis-oil quantity as waste. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Hydrocarbon-rich primary-separation sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

###### Used lubricating oil (`waste_lubricant`)

One discarded liquid lubricant grade, with measured mass, contaminants, water and recovery/recipient record. It crosses the foreground boundary to documented external treatment, not directly to a receiving water body.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvoc-2017`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil`)

CAS 124-38-9. Gas in ambient receiving air; compartment air / unspecified. Include combustion, flare, decoking and actually vented scrubber/regeneration carbon once. Never assume all carbon-balance residual is CO2. No positive amount is implied by this screening row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### carbon dioxide (biogenic) (`co2_biogenic`)

CAS 124-38-9. Gas in ambient receiving air; compartment air / unspecified. Only the evidenced auxiliary-fuel biogenic fraction; retain physical LCI even where a GHG reporting convention excludes it from an aggregate. Fossil feed is not biogenic. No positive amount is implied by this screening row.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### methane (fossil) (`methane_fossil`)

CAS 74-82-8. Gas in ambient receiving air; compartment air / unspecified. Unburned fossil methane from leaks, vents, incomplete combustion and flares; do not report routed-to-furnace gas as atmospheric loss. No positive amount is implied by this screening row.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### methane (biogenic) (`methane_biogenic`)

CAS 74-82-8. Gas in ambient receiving air; compartment air / unspecified. Only verified biogenic methane loss from actual auxiliary fuel; physical amount and origin remain separate from fossil methane. No positive amount is implied by this screening row.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### carbon monoxide (fossil) (`carbon_monoxide`)

CAS 630-08-0. Gas in ambient receiving air; compartment air / unspecified. Monitor each relevant furnace, flare and decoking outlet; preserve CO mass, not carbon mass or CO2-equivalent. No positive amount is implied by this screening row. The selected row is fossil CO; any actual biogenic auxiliary-fuel CO is recorded separately.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### nitrous oxide (`nitrous_oxide`)

CAS 10024-97-2. Gas in ambient receiving air; compartment air / unspecified. Separate combustion N2O with site measurements or a separately justified source-specific method; it is excluded from NOx. No positive amount is implied by this screening row.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### nitrogen monoxide (`nitric_oxide`)

CAS 10102-43-9. Gas in ambient receiving air; compartment air / unspecified. Actual NO species mass only. Total NOx reported as NO2 equivalent cannot be entered as physical NO without measured speciation and conversion. No positive amount is implied by this screening row.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### nitrogen dioxide (`nitrogen_dioxide`)

CAS 10102-44-0. Gas in ambient receiving air; compartment air / unspecified. Actual NO2 species mass, without re-entering the total NOx equivalent. Unknown NO/NO2 split is pending rather than a fabricated ratio. No positive amount is implied by this screening row.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### sulfur dioxide (`sulfur_dioxide`)

CAS 7446-09-5. Gas in ambient receiving air; compartment air / unspecified. Combustion/decoking sulfur reaching air, accounting for fuel sulfur, sulfur doping, captured sulfur and actual control. No positive amount is implied by this screening row.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### hydrogen sulfide (`hydrogen_sulfide`)

CAS 7783-06-4. Gas in ambient receiving air; compartment air / unspecified. Only H2S actually released after controls or by leakage; sulfur removed into spent caustic or burned to SO2 is not an H2S air emission. No positive amount is implied by this screening row.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### ethane (`ethane_air`)

CAS 74-84-0. Gas in ambient receiving air; compartment air / unspecified. Fossil ethane in feed/recycle leaks and vents; legal VOC exclusions do not erase it from physical LCI. No positive amount is implied by this screening row.

- Selected flow: ethane `4d9a8790-3ddd-11dd-9219-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### ethylene (`ethylene_air`)

CAS 74-85-1. Gas in ambient receiving air; compartment air / unspecified. Actual ethylene release including product handling, equipment and any ethylene refrigerant losses, once per source. No positive amount is implied by this screening row.

- Selected flow: ethylene `fe0acd60-3ddc-11dd-a47d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### propane (`propane_air`)

CAS 74-98-6. Gas in ambient receiving air; compartment air / unspecified. Only propane actually present in a leaking/vented stream; keep composition and source location. No positive amount is implied by this screening row.

- Selected flow: propane `fe0acd60-3ddc-11dd-aae9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### propene (`propylene_air`)

CAS 115-07-1. Gas in ambient receiving air; compartment air / unspecified. Actual propylene release, including an actual propylene refrigeration circuit; do not substitute propane. No positive amount is implied by this screening row.

- Selected flow: propene `fe0acd60-3ddc-11dd-ab3d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### acetylene (`acetylene_air`)

CAS 74-86-2. Gas in ambient receiving air; compartment air / unspecified. Actual acetylene reaching the environment; hydrogenated acetylene remains an internal reaction amount, not an emission. No positive amount is implied by this screening row.

- Selected flow: acetylene `4d9a8790-3ddd-11dd-911f-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### butadiene (`butadiene_air`)

CAS 106-99-0. Gas in ambient receiving air; compartment air / unspecified. Only measured/speciated 1,3-butadiene from actual C4 streams. Do not substitute another diene isomer or rubber product. No positive amount is implied by this screening row.

- Selected flow: butadiene `4d9a8790-3ddd-11dd-98e7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### 1-butene (`butene1_air`)

CAS 106-98-9. Gas in ambient receiving air; compartment air / unspecified. Actual 1-butene; a total butenes concentration needs an isomer assay before conversion into this row. No positive amount is implied by this screening row.

- Selected flow: 1-butene `4d9a8790-3ddd-11dd-9b1e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### 2-butene-cis (`cis_butene2_air`)

CAS 590-18-1. Gas in ambient receiving air; compartment air / unspecified. Actual cis-2-butene, distinct from trans-2-butene and 1-butene. No positive amount is implied by this screening row.

- Selected flow: 2-butene-cis `fe0acd60-3ddc-11dd-a574-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### 2-butene-trans (`trans_butene2_air`)

CAS 624-64-6. Gas in ambient receiving air; compartment air / unspecified. Actual trans-2-butene, distinct from cis-2-butene and 1-butene. No positive amount is implied by this screening row.

- Selected flow: 2-butene-trans `fe0acd60-3ddc-11dd-a578-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### 2-methyl-1-propene (`isobutene_air`)

CAS 115-11-7. Gas in ambient receiving air; compartment air / unspecified. Actual 2-methylpropene; generic butylene is not adequate isomer evidence. No positive amount is implied by this screening row.

- Selected flow: 2-methyl-1-propene `fe0acd60-3ddc-11dd-ab44-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### n-butane (`butane_air`)

CAS 106-97-8. Gas in ambient receiving air; compartment air / unspecified. Actual n-butane, separate from isobutane. No positive amount is implied by this screening row.

- Selected flow: n-butane `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### isobutane (`isobutane_air`)

CAS 75-28-5. Gas in ambient receiving air; compartment air / unspecified. Actual 2-methylpropane, separate from n-butane. No positive amount is implied by this screening row.

- Selected flow: isobutane `4d9a8790-3ddd-11dd-9355-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### benzene (`benzene_air`)

CAS 71-43-2. Gas in ambient receiving air; compartment air / unspecified. Conditional only if benzene is shown in the actual condensate/leak stream. Naphtha-cracker aromatic yields cannot establish a positive amount for ethane cracking. No positive amount is implied by this screening row.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### toluene (`toluene_air`)

CAS 108-88-3. Gas in ambient receiving air; compartment air / unspecified. Conditional actual toluene; independently assay rather than transferring a benzene or total-VOC factor. No positive amount is implied by this screening row.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### water vapour (`water_vapour`)

CAS 7732-18-5. Gas in ambient receiving air; compartment air / unspecified. Net water vapour actually added to receiving air, including evaporation, steam losses and combustion/decoking reaction water. Measure incoming air humidity and outgoing wet/dry exhaust on compatible bases; subtract inlet-carried water once. Track chemically generated/consumed H2O in the species/water account, without adding it again to conserved whole mass or H/O balances. Liquid drift is a separate measured transfer/release with its actual compartment and dissolved constituents; it is not this vapour flow. Retain uncertainty. No positive amount is implied by this screening row.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### particles (PM2.5) (`pm25`)

Only the <=2.5 um outlet fraction after decoking/furnace control. Solid aerosol in air / unspecified, not collected coke/sludge. No single chemical CAS; retain actual dust composition. If only total PM is monitored, retain the unsplit observation as pending and do not invent bin amounts.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`

###### particles (PM2.5 - PM10) (`pm25_10`)

A non-overlapping 2.5–10 um outlet fraction. Solid aerosol in air / unspecified, not collected coke/sludge. No single chemical CAS; retain actual dust composition. If only total PM is monitored, retain the unsplit observation as pending and do not invent bin amounts.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`

###### particles (> PM10) (`pmover10`)

Only the >10 um outlet fraction; do not add total PM or PM10 on top. Solid aerosol in air / unspecified, not collected coke/sludge. No single chemical CAS; retain actual dust composition. If only total PM is monitored, retain the unsplit observation as pending and do not invent bin amounts.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`

###### carbon monoxide (biogenic) (`co_biogenic`)

CAS 630-08-0. Gas or vapour in ambient receiving air; compartment air / unspecified. Only actual CO with source-specific proof of physical biogenic carbon in the corresponding fuel/material and emitted species. Require the original supply/assay/carbon-origin record and a source/event link; a biomass-free petrochemical unit does not acquire biogenic carbon from this screening row. An ethanol instrument-cleaning trace establishes neither fuel combustion nor biogenic origin. Actual cleaning chemicals, their carriers and fate require separate atomic material/waste/emission records if within scope. Never allocate fossil-feed CO to this row. No positive amount is implied.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stack`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### Allene, to air, unspecified (`allene_air`)

CAS 463-49-0. Gas or vapour in ambient receiving air; compartment air / unspecified. Actual propadiene in the C3/vent stream, distinct from propyne. Preserve unresolved identity rather than use a neighbour. No positive amount is implied.

- Selected flow: Allene, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### methyl acetylene (`propyne_air`)

CAS 74-99-7. Gas or vapour in ambient receiving air; compartment air / unspecified. Actual methyl acetylene in the C3/vent stream, distinct from allene and acetylene. No positive amount is implied.

- Selected flow: methyl acetylene `08a91e70-3ddc-11dd-9694-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### dimethyldisulfide (`dmds_air`)

CAS 624-92-0. Gas or vapour in ambient receiving air; compartment air / unspecified. Only actual unreacted dosing-reagent vapour released to air; captured sulfur, H2S and burned SO2 are different exchanges. No positive amount is implied.

- Selected flow: dimethyldisulfide `fe0acd60-3ddc-11dd-ac1e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

###### hydrogen (`hydrogen_air`)

CAS 1333-74-0. Gas or vapour in ambient receiving air; compartment air / unspecified. Actual uncombusted H2 reaching air from leaks/vents/flares; gas recovered for internal use is not an atmospheric release. No positive amount is implied.

- Selected flow: hydrogen `08a91e70-3ddc-11dd-949c-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect reporting-period net exchange quantity and divide by net accepted ethylene output; retain the unallocated physical amount. Do not default to zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical_ledger` | all stages and outputs | Keep the period physical ledger and material/water/carbon/sulfur/energy balances unchanged by allocation. Dividing an exchange by the reference denominator is normalization; multiplying a co-product's physical output by a burden share is prohibited. Retain actual export quantities and equal internal transfer pairs. | `jrc-lvoc-2017`; `ipcc-chemical-2006`; `eu-pef-2021` |
| `allocation_subdivide` | separately metered stages | First investigate subdivision or system expansion. Assign separable product handling and independently metered duties directly to the relevant product. An expanded system reports its combined functions; it cannot silently produce a single-ethylene result with unverified displacement credits. | `eu-pef-2021` |
| `allocation_shared` | residual inseparable burden | For remaining shared inputs/emissions, require a demonstrated relevant physical relationship. Mass or heating value alone is not proof of causal allocation for chemical products, fuels and steam together. If neither subdivision/expansion nor a relevant physical relation is feasible, justify economic allocation using contemporaneous net accepted external output and prices at the same transfer stage, retain all factors and compare a justified alternative sensitivity. No default shares are supplied. | `eu-pef-2021` |
| `allocation_recovery` | internal fuel, exported utilities and wastes | Internal methane/hydrogen/steam/water reuse is not an external co-product and does not enter the export allocation denominator. External steam uses verified net useful heat and compatible price/physical units; its full water mass remains in the water ledger. Record actual product acceptance versus waste treatment and link external treatment once. Do not give saleable-product allocation to an unaccepted residue, or combine allocation with an unverified substitution credit for the same export. | `jrc-lvoc-2017`; `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

All protocols use the same actual reporting period and included equipment scope. Retain the stage-level original totals, inventory changes and source coverage in the physical ledger. Net accepted delivery Q is reconciled with current production, opening/closing conforming product, returned/off-spec product and internal use; delivery is not silently equated to production. Carried stock quantities and their attributable burdens accompany the period denominator. Their aggregation below is per 1 kg reference flow, after those totals have been reconciled against net accepted ethylene mass. The burden ledger is a separate derived account. Do not interpret a successful quantity-basis check as verification of factory data or UUID identity.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | ethane_steam_cracker | fresh feed; one reference output; each co-product; internal links | custody and stage mass record | link id; stage sender/receiver; native property/unit; gross/net amount; accepted delivery versus production; returns/off-spec; opening/closing stocks; P_abs; T; humidity; Z; full gas/liquid/solid composition; constituent CAS/formula; C/H/O/N/S fractions; fossil/biogenic origin; phase/grade; acceptance; destination | Calibrated custody/stage meters, weighed records and actual chromatographic/elemental assays. Reconcile complete mixtures, internal recycle, hydrogen uptake, coke stocks and actual combustion/decoking air via cp_balance; no BREF exemplar yield is a measured quantity. | kg; retain original m3/P/T | continuous totals; each transfer and reconciled period | same complete reporting period, including abnormal events | declared integrated units and custody points | per 1 kg reference flow | calibration; assay QA; custody acceptance; uncertainty and matched link matrix |
| `cp_energy` | ethane_steam_cracker | purchased gas/electricity/steam and exported steam | utility and enthalpy record | carrier/header id; gross amount; supplier m3 convention; P/T/Z and composition; NCV/GCV definition; electrical property/voltage; steam grade/enthalpy; condensate mass/enthalpy; recovery; destination; source carbon fractions | Use calibrated carrier meters and actual supplier definitions; measure return conditions and reconcile a joint heat/power/recovery balance. Meter furnace, compression, refrigeration and fractionation separately where possible; internal fuel cancels at the unit boundary but its actual combustion remains. | m3; kWh; kg; MJ with basis | continuous and each supply/export event | same period plus event coverage | actual headers/meters and shared-utility attribution | per 1 kg reference flow | provider background reference basis; meter QA; calorimetry; steam tables/EOS version; enthalpy reconciliation |
| `cp_water` | ethane_steam_cracker | make-up; condensate; evaporation; purge interfaces | water and composition record | supply source/grade; mass or volume and density; dilution/quench/cooling/decoking circuit id; recirculation; make-up; bleed; return; evaporation; inventory; actual contamination | Separately meter external inputs/outputs and internal loop totals; assay water quality. Reconcile source pretreatment and actual external receiving treatment. Estimate evaporation only from a closed, uncertainty-documented balance or measurements, never from gross cooling circulation. | kg; retain measured m3 and density | continuous and each purge/decoking event | same complete period | included water loops and external transfer points | per 1 kg reference flow | flowmeter QA; sampling chain; water balance; recipient acceptance; uncertainty |
| `cp_materials` | ethane_steam_cracker | one actual chemical/catalyst/adsorbent/lubricant/refrigerant grade per row | SKU and material account | SKU; provider; constituent CAS; SDS; formulation/active fraction; water; grade; quantity; stock; installation/replacement; regeneration; phase; fossil/biogenic carbon; sulfur | Purchase/stock reconciliation and actual batch assays; record dry/solution/formulation mass correctly. Reconcile refrigerant make-up, circulating stock, recovery and directly measured or justified releases. Extend the atomic inventory for any extra actual grade or chemical; do not borrow database recipe numbers. | kg and assay fractions | each receipt/use/replacement plus period reconciliation | period and maintenance/replacement history | included equipment and actual commercial grades | per 1 kg reference flow | supplier specification and acceptance; SDS/assay agreement; mass-basis/provider compatibility |
| `cp_waste` | ethane_steam_cracker | each liquid/solid waste at external transfer | weighed waste and receiving record | stream id; wet mass; water/dry solids; carbon; sulfur; metal/SKU contaminants; pH; COD; sulfide/sulfate; species concentrations; pretreatment; recipient; acceptance; treatment reference | Separately weigh/meter each spent liquor, purge, sludge, catalyst, adsorbent and oil. Apply actual analytical composition, retaining dissolved/dispersed fractions. Match receiving quantities and treatment starting condition; final external treatment emissions come from that service once. | kg; constituent kg; original mg/L and volume | each transfer and representative composite sampling | period with decoking/maintenance events | source pretreatment to external receiving point | per 1 kg reference flow | manifests; recipient receipts; lab QA; wet/dry reconciliation; no duplicated product/waste classification |
| `cp_stack` | ethane_steam_cracker | actual furnace/flare/decoking outlet species and particles | source monitoring record | source/event id; duration; flow; concentration; wet/dry/reference P/T; gas composition; actual versus equivalent mass basis; fossil/biogenic fraction; controls/bypass; particle cut size; capture; detection limit | Integrate calibrated source-specific flow and speciated concentration through the period; retain flare gas quantity/composition and actual destruction evidence. Separately cover decoking/regeneration/startup/trips; resolve NO/NO2 quantity definitions and PM size cuts. Never infer complete destruction or a size/species split without evidence. | species kg; original concentration/flow bases | continuous where available; representative tests and each abnormal event | all covered normal and abnormal operating hours | included combustion/flare/decoking sources after controls | per 1 kg reference flow | source test/CEMS QA; event logs; original method version; controls; detection-limit/uncertainty records |
| `cp_species` | ethane_steam_cracker | actual fugitive/vent organic and sulfur species | component and stream-speciation record | equipment count/type; stream composition and CAS/isomer assay; pressure/phase; screening/test readings; leak durations/repairs; vent/flare routing; condensate handling; refrigerant source; carbon origin | Use an applicable documented component/vent measurement method and actual stream speciation; reconcile directly measured releases with any justified component calculations. Deduplicate captured, routed and emitted mass. Aggregate VOC/NMVOC legal reports remain QA evidence; unresolved species residual remains a disclosed gap. | species kg; original method units | survey schedule with repair durations and each vent event | period with actual equipment and event coverage | included feed, recycle, separation, delivery, liquor handling and refrigeration | per 1 kg reference flow | component census; stream assays; method applicability; repair history; bound/sensitivity for unspeciated mass |
| `cp_balance` | ethane_steam_cracker | all physical links, reaction stages, air and water carriers | whole mass, compound and atom reconciliation | stream/event id; total mass; full constituent mass/mole fractions; CAS/formula; molecular/atomic basis; unresolved fraction; incoming air/O2/N2/Ar/water; outgoing O2/N2/Ar/H2O and other gas; liquid carried water; reaction extent; coke and installed-material stocks; heat/work/chemical energy and losses; uncertainty | Meter actual air/oxygen/purge and exhaust; derive mixture mass only from compatible measured composition and P/T/Z. Assay all phases and close sum fractions with unresolved remainder explicit; no invented oxygen/air ratio or formula for a mixture. Reconcile C/H/O/N/S and other actually material elements, compound reaction balances and water; keep reaction source terms solely in species account. Use actual common energy datum/NCV-GCV, sensible/latent heat, reaction duty and stock energy; avoid duplicating fuel chemical energy as purchased heat. | kg; mol with basis; MJ with datum | continuous totals plus each decoking/abnormal/maintenance event | same complete period as Q | every stage then aggregate boundary | per 1 kg reference flow | full assays; humidity/oxygen and meter QA; atom/whole mass residuals; energy reconciliation and uncertainty |
| `cp_stock` | ethane_steam_cracker | feed, products, coke, loops, installed consumables and returnable containers | period quantities and carried burden record | cohort/stock id; opening/closing quantity and composition; acquisition/use/return/disposal; original carried burden by cohort; current-period burden; recipient; allocation/service driver and life/use records | Reconcile opening + receipts/production - use/delivery/return/disposal = closing with uncertainty. Trace burdens carried into, consumed within and carried out of the period; do not charge every purchase/installation to current delivery or omit opening stock burden. Reuse catalyst/adsorbent/refrigerant and container stock without counting circulating mass as new input; collect actual cleaning/repair and replacement separately. Unknown life/use evidence remains a disclosed coverage debt, not a fabricated lifetime. | kg; actual service units; native burden units | each receipt/use/return/replacement plus period close | period plus linked acquisition/service cohorts | included equipment, material stocks and supply-return interfaces | per 1 kg reference flow | acquisition/stock/return records; carried-burden ledger; maintenance and measured service basis |
| `cp_links` | ethane_steam_cracker | every actual upstream supply and receiving service | original and scaled background-link record | foreground row/link id; provider/service identity, source version/hash; route/state/grade/geography; reference exchange/property/unit; native reference quantity; original exchange quantities; supplier quantity convention; conversion formula/data; treatment entry state/wet-dry basis; collection period; link scale; original and scaled burdens | Compare full provider reference against each physical flow and actual interface. Preserve native exchanges q_j and provider reference r, then scale q_j by compatible foreground provider quantity L/r and normalize by Q; audit original and scaled quantities/units. Collect source-specific gas reference P/T/moisture/Z/composition, steam pressure/enthalpy/net heat and actual return pairing. kg waste or returned container is not by itself a treatment/service unit; match receiving acceptance and measured service basis. No background source is silently chosen or default metadata factor used; unknown fields prevent completion of that link. Supplied/installed consumables and their cleaning/replacement services enter the direct or shared burden pool only once after stock reconciliation; a waste-treatment service must not reproduce the same physical waste as a second foreground output. | native quantity/property/unit; explicit compatible converted units | each provider/reference/interface change plus period reconciliation | same period and declared provider temporal scope | actual supply/receiving boundary without onsite overlap | per 1 kg reference flow | source/hash-bound native provider records; original/scaled exchange comparison; recipient receipts; conversion and overlap audit |
| `cp_allocation` | ethane_steam_cracker | directly attributable and residual shared environmental burdens | separate burden allocation account | unit duty; direct/shared inputs and releases; actual external product quantities; physical-driver evidence; common-stage net prices; factors; internal/export tags; uncertainty | Retain the unallocated physical ledger. Test subdivision/expansion and physical relationships; document any economic fallback and sensitivity using actual quantity/price units and the same period. Factor sums must close for the declared product set. | original burden units; kg or useful MJ; currency per compatible unit | reconciled period and material changes | same complete reporting period | allocated functions and original boundary | per 1 kg reference flow | allocation rationale; metering; price records; sum check; sensitivity; physical versus burden ledger distinction |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `period_reference` | all inventory rows | Let Q be net accepted ethylene grade mass in the reporting period. Preserve each reconciled boundary physical exchange X_i in its own units; report physical x_i = X_i / Q per 1 kg reference flow. The ethylene_product output is 1 kg. Internal paired transfers cancel; no co-product physical output is multiplied by a burden factor. | cp_mass; cp_energy; cp_water; cp_materials; cp_waste; cp_stack; cp_species | physical normalized ledger | `jrc-lvoc-2017` |
| `gas_conversion` | gas measurement records | n = P_abs V / (Z R T); mass = n times sum of mole_fraction_s times molar_mass_s. Use the actual gas/water composition, pressure/temperature basis and supplier background definition; separately prove applicability to any reference m3. | actual gas fields; cp_mass; cp_energy | compatible gas quantities, no default density | `nist-webbook-srd69` |
| `net_heat` | steam and return interfaces | Useful heat = sum of externally supplied steam mass times its specific enthalpy minus sum of actually returned-water mass times its specific enthalpy, with boundary losses/stock disclosed. Keep imported and exported headers separate, and keep gross steam/water mass in the physical ledger. | cp_energy; cp_water | supplier-compatible net useful heat | `jrc-lvoc-2017` |
| `species_mass` | source concentrations and losses | Integrate source flow times concentration over actual operating/event time after compatible wet/dry/P/T conversion. For carbon-based observations, use actual species composition and molecular conversion; for NO2-equivalent observations, use measured NO/NO2 proportions or keep the split pending. Final emitted mass is after actual capture/destruction, without double counting captured/routed streams. | cp_stack; cp_species | actual species mass and uncertainty | `jrc-lvoc-2017`; `nist-webbook-srd69` |
| `element_balances` | physical process diagram | Whole mass: sum actual incoming mass - sum actual outgoing mass - (closing stock - opening stock) = residual. For each E in C/H/O/N/S, replace each stream mass by its measured elemental mass; distinguish fossil/biogenic C. Include full compounds/mixtures, salt/metal/other material constituents, carrier water and actual air/O2/N2/Ar/humidity, exhaust species, captured solids and installed/coke stocks. No reaction sources/sinks enter whole mass or elemental conservation. Species: in_s + formed_s - out_s - consumed_s - stock_change_s = residual_s, with consistent reaction extents and atoms and no double-counted exchanged mass. For H2O, measured reaction formation/consumption can also enter this species balance; net atmospheric water subtracts measured incoming humidity. Quantify residual/uncertainty, never assign unknown mass to CO2/VOC or zero. | cp_mass; cp_balance; cp_stock; cp_water; cp_waste; cp_stack; cp_species | whole mass, compound, C/H/O/N/S and water QA plus residual | `ipcc-chemical-2006`; `jrc-lvoc-2017`; `nist-webbook-srd69` |
| `gross_net_air` | air/exhaust and compound-ledger interfaces | Use complete gross inlet air and outlet exhaust for whole-mass/atom QA; constituent masses decompose their parent stream and are not additional whole-stream mass. Include actual oxygen/nitrogen/argon, water humidity and every measured compound. Process-added atmospheric release is the source/event-matched net amount after measured inlet-carried background subtraction where applicable; preserve both gross observations and the net exchange. No fixed air ratio, complete combustion assumption, hidden unspeciated remainder or duplicate mixture-plus-component mass. Add atomic actual oxygen/purge/material/release rows when applicable; ambient carrier quantities remain explicit in the physical link matrix rather than invented positive exchanges. | cp_balance; cp_stack; cp_species; cp_water | distinct gross physical and net-release accounts | `jrc-lvoc-2017`; `nist-webbook-srd69` |
| `period_carry` | physical and burden stock accounts | For each traced stock/cohort, opening + acquired/generated - used/delivered/returned/disposed = closing, retaining original quantity units. Trace attributable burden similarly: opening carried burden + newly attributable burden - burden accompanying actual use/delivery/return/disposal = closing carried burden; this is a burden-tracing identity, not physical mass allocation. Match delivered product cohorts to Q; preserve returned burdens and recipient responsibility, avoiding duplicate supply/treatment credits. Catalyst/adsorbent/container service shares require actual duty/use/replacement evidence, never a default lifetime. | cp_stock; cp_mass; cp_materials; cp_links; cp_allocation | period-linked physical stock and burden ledgers | `jrc-lvoc-2017`; `eu-pef-2021` |
| `provider_scale` | each background link | Let r be the provider native reference quantity and L the compatible foreground quantity after evidenced property/unit/state conversion. Preserve native exchange q_j; linked exchange is q_j times L/r and its normalized quantity is q_j times L/r/Q. Preserve original/scaled units, conversion data, provider source and receiving state. Distinguish physical waste mass from service reference/duty and stock-carried burden from current acquisition; link once before residual-shared burden allocation. | cp_links; cp_stock; cp_energy; cp_waste | auditable native and scaled provider/service quantities | `jrc-lvoc-2017`; `eu-pef-2021` |
| `burden_allocation` | environmental burden ledger only | For output p, b_p = (direct burden_p + alpha_p times residual shared burden) / Q_p, retaining original burden units. Sum alpha_p = 1 for the declared eligible external product set. If justified economic allocation is used, alpha_p = value_p / sum value_j, where value uses actual accepted mass or verified useful heat times a compatible common-stage unit price. Internal fuel is excluded. Physical Y_j remains Y_j and physical normalized output remains Y_j / Q_ethylene. | cp_allocation; reconciled product and utility quantities | allocated burden per reference product plus unchanged physical outputs | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `route_identity` | applicability | Actual fossil-ethane feed, front-end demethanisation, C2 hydrogenation, gas delivery and treatment interfaces must match the declared route; do not use a classification label as process evidence. | supplier assays; P&ID/process diagram; actual SKU/grade; custody and receiving records |
| `flow_chain` | every UUID-bearing exchange | Search hit, direct state-100 identity, CAS/name/comment/route, type, actual compartment, reference property and unit-group/unit must all agree. Product identity does not establish provider quantity compatibility. Specific unresolved flows retain blank UUIDs, not a nearby proxy/correction flow. | retained original lookup and support-row evidence outside canonical PCR |
| `full_period` | quantities and emissions | Same representative period across denominators, products, inventories, startup/shutdown, decoking and waste; report uncovered hours, detection limits and uncertainty rather than assuming zero. | cp_mass through cp_allocation originals |
| `complete_species` | emissions and carbon origin | Keep actual chemical and isomer species, fossil/biogenic CO2 and methane, and non-overlapping PM. Extend for all actual additional species; do not erase ethane/biogenic CO2 due to reporting conventions. | actual stream/CAS assays; source-specific methods; reconciled balances |
| `no_default_factors` | external evidence | BREF tables and historical national/single-site data support only their own stated context; none supplies a universal recipe, positive emission or quantity for this route. | source locators, conditions and actual foreground collection |
| `ready_dataset` | first dataset completion | Missing reference identity, provider basis, steam net-heat basis, emission speciation, recipient chain or material-balance closure blocks a complete usable dataset; record each debt and its needed evidence. Methodological scientific review is a separate requirement. | identity/property/unit evidence; actual collection; independent methodology review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference_flow and ethylene_product | Require exactly one 1 kg accepted ethylene output, the declared gas/grade/feed/route/custody qualifiers, and compatible verified flow/property/unit-group references before UUID-bound dataset completion. No proxy reference is accepted. | `jrc-lvoc-2017`; `nist-webbook-srd69` |
| `validate_balances` | physical versus burden accounts | Check complete whole-mass/C/H/O/N/S, full compounds/mixtures, net water/humidity, actual oxygen/air and exhaust, energy datum/heat recovery, installed/coke and other stocks, returns, containers/maintenance and matched link pairs. No reaction source terms in conserved whole mass/atoms; reaction terms enter species balances once. Check uncertainty/residual and carried stock burdens. Allocation must not reduce actual co-product output or internal transfer quantities. | `jrc-lvoc-2017`; `ipcc-chemical-2006`; `eu-pef-2021` |
| `validate_emissions` | elementary rows | Check substance/isomer CAS, actual air compartment, carbon origin, physical species mass and independent NOx/N2O handling. Reconcile aggregate VOC observations on the same source/period/basis to separately measured species and disclose only the unspeciated residual; the residual cannot mask known compounds/isomers or be double-added to them. Physical biogenic origin requires original source evidence, not a cleaning-solvent trace or assumed biomass. No biogenic CO2 is omitted, and nested PM fractions are not summed twice. Unknown speciation, controls or quantity basis remain incomplete. | `jrc-lvoc-2017`; `ipcc-chemical-2006`; `nist-webbook-srd69` |
| `validate_interfaces` | route and background links | Require compatible source-specific feed/utility references and receiving treatment boundaries. No in-boundary separation is duplicated by external purification; C4 extraction/aromatics/polymer stages remain external. Waste transfer is not a direct-water elementary release. | `jrc-lvoc-2017`; `epa-ethylene-2006` |
| `validate_links` | upstream and receiving-service matrix | Verify every source identity/hash, native reference quantity/property/unit, complete native exchange list and actual original-to-scaled calculation; check gas/steam/condensate/phase/grade/geography and service entry state against the real interface. Trace supplier/recipient return and stock burdens once, then direct versus shared service burdens in cp_allocation. Hard opposed source route/state fields cannot be repaired by a name match or invented grade. Unknown actual fields block the corresponding link, not automatically the method. Withdraw an opposed inventory UUID while keeping its specific physical row and gap visible. Only an unresolved actual method, reference or measurement blocker requires draft maturity; an ordinary coproduct-identity gap alone does not. | `jrc-lvoc-2017`; `eu-pef-2021` |
| `validate_completeness` | actual dataset | Distinguish quantity-check coverage, flow-identity verification, factory-record completeness and independent methodology review. A lookup/authentication failure cannot be reported as no-match or a completed audit. Unresolved reference or support fields block UUID-bound production. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground route-specific ethylene production; physical ledger and separately derived allocated burden ledger. |
| downstream_use | secondary_dataset; background_dataset, only after the required evidence and reviews are complete. |
| allowed_use | Chemical supply LCA using the same accepted gaseous ethylene grade, fossil-ethane route, feed origin, period, boundary and allocation. |
| excluded_use | Other feedstock/manufacturing/recovery routes; independently purified purchased ethylene; liquid dispatch; pure butadiene/butene production; downstream extraction or polymer manufacture; use as an approved method merely because a projection/quantity check succeeded. |
| required_metadata | PCR id; actual reference identity/support references; product grade/CAS/phase/P/T; feed and provider origins; diagram and configuration; period; custody; actual co-product/waste composition and recipient; utility quantity definitions and net heat; internal links; physical balances; allocation; data owner and review state. |
| required_quality_disclosure | Identity and provider-basis debts; measurement/speciation coverage; abnormal events; detection limits; source-rule applicability; physical versus allocated quantities; balance residuals; treatment references; uncertainty and allocation sensitivity; excluded processes; independent review status. |
| update_trigger | Feed origin/composition; furnace/separation/refrigeration configuration; delivery phase/grade; sulfur dosing; utilities/provider definitions; treatment recipient or control changes; material measured imbalance or newly identified species; changed allocation or review findings. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `jrc-lvoc-2017` | official_guidance | European Commission JRC, 2017 LVOC BREF, JRC109279, EUR 28882 EN, DOI https://doi.org/10.2760/77304; official PDF https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf. Chapter 3 §§3.2.1–3.2.3, 3.3.1.1–3.3.1.5, 3.3.2–3.3.6; Figures 3.2–3.3, printed pp.126–156 (PDF pp.164–194). | Route limitations, integrated separation/recirculation, actual co-products, caustic/drying/hydrogenation, decoking, waste/water/energy interfaces and species monitoring needs. Table 3.3 printed p.133 explicitly gives exemplary once-through yields, not overall recycle-adjusted yields or products present at every plant; none is a default quantity. |
| `epa-ethylene-2006` | official_guidance | U.S. EPA, Ethylene MACT Compliance Manual, July 20 2006, printed p.2-5 (PDF p.16), https://www.epa.gov/sites/default/files/2015-06/documents/ethylene_mact_compliancemanual_final-1-24-07.pdf. | Historical manufacturing-unit boundary and distinction between integrated associated cuts and downstream butadiene/aromatics manufacture. No claim of current legal applicability, universal emission factors or a plant recipe. |
| `ipcc-chemical-2006` | official_guidance | 2006 IPCC Guidelines, Volume 3 Chapter 3 §§3.9.2.1, 3.9.2.3–3.9.2.4, 3.9.4; printed pp.3.63–3.67, 3.81–3.83, 3.88; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/3_Volume3/V3_3_Ch3_Chemical_Industry.pdf. | Characterisation of feed/product/by-product carbon and energy interfaces, actual source measurements and duplicate-combustion avoidance. The Tier 2 national-inventory assumption that non-CO2 carbon becomes CO2 is expressly not adopted as species-resolved LCI; no historical default factors adopted. |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I §4.5, Annexes PDF pp.63–64, http://data.europa.eu/eli/reco/2021/2279/oj. | Generic multifunctionality hierarchy, proof of a physical relation, justified economic fallback and disclosure; no sector-specific livestock/paper recipe or allocation factor is transferred. |
| `shell-monaca-2025` | literature | Shell, Our growth projects, Shell Polymers Monaca section, page last updated 30 October 2025, https://www.shell.com/business-customers/chemicals/about-shell-chemicals/our-growth-projects.html. | Actual producer illustration of shale-gas-derived ethane origin; not a product yield, ethylene capacity, energy intensity or default configuration. Polyethylene capacity is not an ethylene inventory denominator. |
| `nist-webbook-srd69` | dataset | NIST Chemistry WebBook SRD 69, actual substance/CAS records, https://webbook.nist.gov/chemistry/; ethylene https://webbook.nist.gov/cgi/cbook.cgi?ID=C74851&Units=SI; named species are selected by their individual CAS. | Chemical/CAS identity and molecular interpretation only; no Tiangong UUID, environmental compartment, plant phase, production recipe or background provider basis is inferred. |
