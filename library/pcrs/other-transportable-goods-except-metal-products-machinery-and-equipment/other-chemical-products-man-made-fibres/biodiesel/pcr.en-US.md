---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.biodiesel
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Bulk soybean fatty-acid methyl ester biodiesel by continuous base transesterification

## 1. Scope and Applicability

This PCR covers continuous sodium-methoxide catalysed methanol transesterification of refined virgin soybean oil, with sulfuric-acid neutralisation, water washing, drying and actual polishing, yielding neat bulk methyl-ester liquid without fossil-diesel blending. The boundary extends to actual net loading at the plant, including real storage, handling, loading, returns/rework and support burdens. Soybean methyl esters, HVO hydrocarbons, alcohol fuels, fossil diesel and diesel blends are different reference products.

The original NREL technology report supports the selected industrial operations and distinctions between glycerol, water and alcohol; Desmet independently corroborates industrial serial CSTR/decanting and methanol-recovery feasibility. Together they support a methodology boundary, not any particular factory dose, yield, emission, geography or feed assay, and not the use of laboratory recipes as industrial inventories. Concrete data production requires the raw collection evidence below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.biodiesel |
| classification_refs | CPC 3.0 35491; narrower candidate scope, no accepted mapping asserted |
| covered_products | Neat bulk soybean fatty-acid methyl esters from refined soybean oil; continuous sodium-methoxide catalysis, sulfuric-acid neutralisation, water washing and drying |
| excluded_products | HVO/renewable-diesel hydrocarbons; ethyl/propyl esters; alcohol fuels; fossil diesel; diesel blends; mixed/waste-oil feeds; acid-esterification or enzyme routes; distilled glycerol; drum/IBC supply |
| representative_product | Unblended soybean methyl ester liquid, accepted for declared biodiesel specification, loaded in bulk |
| production_route | Refined-oil receipt → serial CSTR transesterification/decanting → methanol recovery → acid/water washing → drying/polishing → released-tank storage → bulk loading; crude glycerol demethanolisation/neutralisation |
| market_state | Whole actual supplied liquid at plant loading hose; residual water/methanol and quality retained, not pure ester-active mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Neat bulk soybean FAME biodiesel at actual net loading handover |
| How much | 1 kg |
| How well | Actual accepted fuel specification, methyl-ester/oxygen assay and whole supplied state declared; no generic performance equivalence |
| How long or cycle | One net supply at the loading gate; no combustion/service life reference |
| reference_flow_link | delivered_biodiesel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Biodiesel `888cd344-bb70-40b9-86d8-5a490a89718a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | refined soybean oil origin and actual feed water/FFA/glyceride assays; continuous sodium methoxide route and whole supplied catalyst/acid compositions; neat methyl-ester identity and declared acceptance specification with actual oxygen assay; net-delivery loading gate and same-cohort Q with return reconciliation; site geography and supplier/utility compatibility; reporting period and opening/closing WIP and finished stocks with carried burdens; physical methanol/oil recovery and actual glycerol/waste states; allocation hierarchy and gate-specific evidence without automatic credit |

The native biodiesel is a factory production-mix Product with Mass reference and unspecified supply geography/CAS. The full-name characteristic “Oxygen content 11%” must be retained and checked against actual analysis; it provides no tolerance or batch test result. The broad comment includes methyl/ethyl/propyl esters; this methodology permits methyl esters only. Any actual incompatible characteristic must be resolved before using this UUID; shared fuel use does not establish compatibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use whole net delivered biodiesel mass, excluding tanker and transport packaging; Q is actual net delivery, not fresh production or ester-active content. |
| `whole_solutions` | material inputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Purchased oil, catalyst and acid solutions are whole external inputs. Assays form nested constituent/water ledgers without duplicate procurement. |
| `volume_conversion` | volume records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual matched liquid density and temperature for volume-to-mass conversion. Integrated volume has no extra duration multiplier. Energy-referenced fuel requires an actual compatible reference and matched measured LHV before conversion to mass; no secondary flow coefficient supplies density or LHV. |
| `electricity_units` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert metered kWh to MJ using 3.6 MJ/kWh. This exact unit conversion is not a thermal efficiency or fuel calorific value. Steam heat requires actual supply/return enthalpy and a matching provider reference. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Externally refined soybean oil and separately supplied reagents/utilities at biodiesel-site receipt; full upstream burdens retained |
| starting_condition_role | foreground collection start, not burden-free cradle |
| product_classification_scope | Neat soybean FAME subset of CPC 3.0 35491 only |
| recursive_input_rule | Same-category returned or purchased biodiesel retains origin and inherited burdens. Internal transfer cancels; purchased product is not new onsite production. |
| upstream_dataset_requirement | Match oil cultivation/extraction/refining, actual country/land-use accounting and co-product allocation; match complete catalyst/acid formulation, methanol production mix, water and utilities. No waste cut-off inferred from price or name. |
| disclosure | Declare actual supply state, gate, geography, operations, stock/carryover basis, recovery interfaces, allocations and unresolved providers. Downstream road transport, use and combustion are outside the loading gate. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | sme_site | Include receipt/storage, reaction/separation, methanol rectification, wash/dry/polish, crude-glycerol conditioning to its actual gate, utilities, cleaning, rework, finished storage and loading. Split any actual additional chemical, fuel, packaging component, waste and elementary species into its own row before using a dataset; absent rows do not license a cut-off. | `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`, `desmet-cstr-transesterification`, `desmet-methanol-recovery` |
| boundary_stocks | all inventory rows | Keep raw period and cohort ledgers including failed/zero-output runs, returns and opening/closing raw materials, WIP, recovered alcohol/oil and finished goods. Transfer existing burdens with stocks; do not charge current deliveries for untouched closing stocks or omit the opening stock burdens actually delivered. |  |
| boundary_upstream | refined_oil | This route consumes refined virgin soybean oil with inherited cultivation/extraction/refining burdens. Waste oil is excluded. Any proposed waste-feed extension requires evidence of prior use, legal/physical waste state, collection/pretreatment, inherited burdens and allocation system; never apply universal zero burden. | `nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sme_site | Soybean methyl-ester joint production and bulk delivery | required | Selected refined-oil/continuous-methoxide/water-wash route | foreground | per 1 kg reference flow |

This aggregate process retains raw subledgers and owners for each actual reaction, decanting, recovery, finishing, storage and loading operation; internal interfaces cancel on consolidation. Actual supply is bulk tanker loading, with no default disposable drum/IBC. Any genuinely included packaging, fuel or treatment reagent requires a separate atomic row before use; its burdens cannot be removed.

### Process: Soybean methyl-ester joint production and bulk delivery (`sme_site`)

#### Inputs

##### Product flows

###### Refined soybean oil feed (`refined_oil`)

Receive refined soybean oil as the complete supplied oil, with actual water, free fatty acids, glycerides, phosphorus and insolubles assays. The native finished-oil production-mix identity has no specified supply geography or purity; upstream cultivation, extraction and refining must match the actual provider.

- Selected flow: Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`

###### Separately purchased methanol makeup (`fresh_methanol`)

Account only separately acquired methanol withdrawn to the system, retaining purity and water assay. This CAS 67-56-1 market-average native identity describes coal gasification, coal coking and natural-gas production with pipeline/tank supply; it does not establish the actual mix, geography or provider burdens. Methanol already in catalyst solution and recovered internal methanol are not another purchase. Native supply geography is unspecified; the industrial-standard and pipeline/tank description does not establish a specific supplier grade or measured composition.

- Selected flow: Methanol (market average) `adbc8430-7937-4ade-b7a5-cb1797dda661`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### Whole commercial catalyst solution (`methoxide_solution`)

Weigh the actual purchased sodium methoxide-in-methanol solution, with supplier concentration, residual water and impurities. Active sodium methoxide and methanol carrier are composition subledgers, not two additional external exchanges; no 25% or 30% concentration or in-situ NaOH preparation is prescribed.

- Selected flow: Sodium methoxide solution in methanol
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`

###### Whole neutralising acid solution (`sulfuric_solution`)

This selected variant uses actual sulfuric acid solution for catalyst/soap-phase treatment and, where documented, acidified washing. Record whole supplied solution and actual H2SO4/water assay; do not substitute a fixed concentrated acid grade or an acid-esterification feed route.

- Selected flow: Sulfuric acid solution for catalyst neutralisation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`

###### Wash and cleaning water (`soft_water`)

Record externally supplied softened water used for ester washing, cleaning and actual makeup. Retain branch meters, treatment provider and water quality; internal wash-water reuse is a transfer and the report example is not a water-use factor.

- Selected flow: Softened process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`

###### Grid electricity (`electricity`)

Cover pumps, agitation, separation, vacuum, cooling, recovery, tanks, cleaning, handling and loading. This native identity is CN, 1–35 kV, grid-average consumption mix to user; use it only for that actual supply. The native energy-property label does not make electricity a combustible fuel or establish a fuel LHV. Other supply requires a separately verified identity and provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `nrel-biodiesel-technology-2004`

###### Indirect heating steam (`heating_steam`)

Meter actual external steam for reaction heating, methanol recovery, drying and tank heating, with pressure, temperature, phase/dryness and incoming enthalpy. Retain condensate-return state; steam is not a direct material reactant or an unspecified heat/fuel bundle.

- Selected flow: Steam supplied to indirect biodiesel-process heaters
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### Conditional polypropylene filter replacement (`filter_medium`)

Include only when the actual polishing filter is polypropylene; retain SKU, mass, replacement and retained-liquid records. A different actual polymer or an added adsorbent requires its own atomic row; no dry-wash resin route is covered by this water-wash profile.

- Selected flow: Polypropylene liquid polishing filter medium
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `nrel-biodiesel-technology-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted net bulk biodiesel delivery (`delivered_biodiesel`)

The only terminal reference output is actual net bulk soybean FAME delivered at the plant loading hose, excluding tanker tare and returned quantities under the matched-cohort reconciliation. Record release certificate, actual oxygen assay, ester identity, residual methanol/water/glycerides and loading condition. It is not the newly released production quantity or closing tank inventory. The selected native Product is a factory production mix with the full-name characteristic “Oxygen content 11%”, no supplied assay tolerance, and unspecified supply geography/CAS. Retain that characteristic and the actual assay/compatibility decision without treating it as a measured default. Its broad comment includes methyl, ethyl and propyl esters; this row permits soybean methyl esters only, and does not adopt the native drop-in/clean/biodegradable marketing claims.

- Selected flow: Biodiesel `888cd344-bb70-40b9-86d8-5a490a89718a`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gate`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`

###### Actually marketable crude glycerol co-product (`crude_glycerol`)

Include as Product only with actual receiver acceptance and evidence of a usable traded crude solution. Measure the whole wet solution, glycerol/water/methanol/salts/soap/fat assay and gate, not theoretical pure glycerol or a fixed 80–85% grade. Pharmaceutical refining is outside this route. Unsaleable material is a distinct waste transfer, never this row plus waste for the same quantity.

- Selected flow: Demethanolised crude glycerol solution from soybean biodiesel
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`

###### Actual external condensate return (`returned_condensate`)

Record only actual external return, with mass, temperature and enthalpy; internal circulation cancels. The supply contract determines heat accounting; return is not automatically a saleable co-product, avoided-water credit or wastewater discharge.

- Selected flow: Condensate returned to external steam supplier
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `nrel-biodiesel-technology-2004`

##### Waste flows

###### Exported aqueous effluent (`aqueous_effluent`)

Measure actual exported wash/cleaning/recovery wastewater after internal reuse, with water, methanol, glycerol, oil, salts, pH and receiver records. COD/TOC may describe treatment demand but cannot identify species, supply a missing mass or determine reaction water. No zero-effluent marketing claim proves absence.

- Selected flow: Biodiesel wash wastewater exported for treatment
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### Discarded neutralisation sludge (`salt_sludge`)

Retain the actual single sludge stream with wet mass, water, sodium, sulfate, residual organics and treatment destination. Do not assume fertilizer saleability or subtract a pure-salt product credit; if the measured material differs, resolve its own identity before use.

- Selected flow: Wet sodium-salt and soap separation sludge
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`

###### Conditional discarded crude glycerol (`waste_glycerol`)

Use only for actual discarded crude-glycerol solution, retaining composition, rejection and destination. Keep it separate from saleable crude_glycerol and internal reprocessing; saleable versus waste classification requires evidence, not a negative/positive price rule alone.

- Selected flow: Unmarketable crude glycerol solution for treatment
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010`

###### Final discarded ester (`offspec_ester`)

Include final off-spec ester discarded after actual recovery decisions, including delivery returns. Internal return, retesting or rework is not external waste and creates no new output; retain all rework burdens and stock carryover.

- Selected flow: Discarded off-specification soybean methyl ester mixture
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`

###### Spent polypropylene filter (`spent_filter`)

For actual filter_medium replacement only, measure spent medium with retained ester, water and solids and the receiving treatment. Do not also place the same retained liquid in another discarded-liquid row.

- Selected flow: Spent polypropylene biodiesel polishing filter medium
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outputs`
- Sources: `nrel-biodiesel-technology-2004`

##### Elementary flows

###### Actual methanol air release (`methanol_air`)

Capture speciated methanol from vents, tanks, loading and fugitive losses after recovery/control. Retain direct measurement or validated site-specific calculation, medium and abatement boundary; no total VOC or unrecovered-alcohol residual establishes this species amount.

- Selected flow: Methanol emitted to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `nrel-biodiesel-technology-2004`, `desmet-methanol-recovery`

###### Actual evaporated water release (`water_vapour`)

Include actual uncondensed water discharged to air, separating co-emitted methanol. Recovered condensate is internal or an actual liquid outlet; water phase change is not chemical production of water.

- Selected flow: Water vapour emitted to air from biodiesel drying
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q, reported once; A_i is the matched unnormalised delivery-cohort quantity and Q is net delivered kg; see section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `nrel-biodiesel-technology-2004`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_unallocated | joint production | Retain complete unallocated physical joint-output records first, including the actual wet crude glycerol, wastes and losses. Internal methanol/oil recovery is neither an external co-product nor an avoided-purchase credit. A waste-treatment fee alone does not settle product status. | `nrel-biodiesel-technology-2004`, `jrc-ilcd-allocation-2010` |
| allocation_causal | shared burdens | Select attributional allocation, first subdividing measured ester-only, glycerol-only and shared operations. Assign direct burdens and demonstrate determining physical causality per remaining flow; wet mass share or theoretical stoichiometry alone is not a causal allocation model. Preserve the evidence and sensitivity. | `jrc-ilcd-allocation-2010` |
| allocation_residual | inseparable residual burdens | Only after documenting why subdivision and physical causality cannot resolve a residual, use the actual market values of all usable co-functions in their actual state at the same joint-process exit. Retain contemporaneous quantities, net gate receipts/contract values, moisture/quality, conditioning and transport adjustments and sensitivity. Do not apply a generic biodiesel:glycerol mass-price ratio, the 2004 price example, pure-glycerol prices or negative weights; missing/unstable values require review before numerical use. | `jrc-ilcd-allocation-2010` |
| allocation_no_credit | derived reference dataset | Keep waste-treatment burdens with the responsible process. No automatic glycerol, salt, methanol, oil or carbon substitution credit. Do not combine allocated burdens with a second avoided-product credit. Report unallocated multi-output and allocated biodiesel views separately so physical coproduct mass is never reduced to hide an allocation. | `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every collection_method produces only undivided raw-period numerators and complete stock/WIP carried burdens. The aggregation_rule label “per 1 kg reference flow” declares the final reporting basis only; collection performs no division. Card A_i/Q and calculation rule normalize_delivery are the same single reporting operation.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_gate | sme_site | bulk reference delivery | delivery and inventory reconciliation | lot/cohort ID; release and loading dates; gross/tare/net kg; accepted shipments; returns and resupply IDs; opening/closing WIP and finished kg; inherited burden vectors; new first-acceptance production kg | Owner: loading and quality managers. Weigh actual net loading on calibrated equipment and reconcile signed acceptance/returns by unique physical lot. Keep new release, internal transfers and net delivery as separate unnormalised records; include actually delivered opening finished stock and leave undelivered finished stock with its carried burdens. | kg | each loading/return and inventory close | one declared matched reporting period and stock cohorts | actual soybean-FAME site and loading hose | per 1 kg reference flow | calibration; certificates; signed loads/returns; stock ledger |
| cp_material | sme_site | external feed and reagent withdrawals | metered material ledger | receipt/withdrawal kg; opening/closing stock; supplier SKU and complete formulation; oil water/FFA/glycerides; acid and catalyst active fraction/carrier; temperature/density; spills; failed-run/rework IDs | Owner: stores and process engineer. Retain unnormalised receipts, actual withdrawals and stock movements for the complete matched period, including unsuccessful operations; distinguish purchased whole solutions from their nested constituents. Attribute stocks and carried burdens by lot without dividing by Q. | kg | each receipt/withdrawal and assay | same period and cohorts as cp_gate | feed, reagent and filter stores and actual unit branches | per 1 kg reference flow | weighing; supplier certificate; assays; stock logs |
| cp_utilities | sme_site | electricity and steam/condensate | meters and state records | start/end kWh; steam kg; supply/return pressure/temperature/dryness/enthalpy; timestamps; integrated volume or rate/duration flag; operation owner; idle/startup/failure/rework/tank/loading loads | Owner: utilities engineer. Retain raw totals by operation and complete period, including support and zero-output loads. Distinguish integrated meter readings from rates; record condensate state and meter allocation evidence. Collection performs no Q division. | kWh; kg; pressure; temperature; kJ/kg | continuous meters and each period close | same period and stock-burden cohorts | reaction/recovery/finishing and actual storage/loading utilities | per 1 kg reference flow | calibration; bills; enthalpy basis; submeter reconciliation |
| cp_outputs | sme_site | co-products and waste outlets | outlet mass and acceptance records | stream and lot IDs; whole wet kg; water/methanol/glycerol/ester/oil/soap/salts assay; receiver and sale/rejection status; inventories and inherited burdens; treatment records; actual net gate values | Owner: co-product sales and environmental managers. Retain each actual physical outlet and composition before any allocation; separate sold crude glycerol from discarded solution and distinguish internal recycle from external transfers. Preserve raw unnormalised period quantities and stock burdens, including rejected runs. | kg | each outlet/assay and stock close | same matched period and cohorts | actual outlet gate and receiving facility | per 1 kg reference flow | receiver certificates; lab methods; waste manifests; invoices |
| cp_emissions | sme_site | methanol and water air outlets | speciated air monitoring | source ID; medium; concentration; actual wet/dry gas volume; sampling duration only for rates; control efficiency evidence; methanol/water separately; startup/tank/loading/fugitive coverage | Owner: environmental engineer. Retain direct measured mass or validated concentration with matched integrated gas volume and reference conditions; use rate times duration only when raw data are rates. Keep raw numerator, detection limits and unresolved species without residual fitting or division by Q. | kg | campaign/continuous per actual source | same reporting period including nonproductive periods | controlled and fugitive air outlets | per 1 kg reference flow | sampling plan; calibration; detection limits; gas basis |
| cp_recovery | sme_site | internal methanol/oil and species balances | recycle, reaction and stock audit | gross reactor charges; fresh reagent; carrier methanol; recovered methanol/oil kg and assay; loop start/end inventory; phase outlet kg and water; actual glycerides/FFA/soap/salts/glycerol/ester species; independent reaction/speciation evidence | Owner: process chemist. Record raw internal movements, assays and actual chemistry independently of whole-stream closure. Ester exchange produces glycerol without net reaction water; FFA methyl esterification is a different water-producing reaction excluded here. Methoxide protonation, hydroxide neutralisation/hydrolysis and phase evaporation have different species/water effects; prove actual species and extents before calculation. | kg | each operating/stock interval and assay | matched complete period and cohorts | each reactor, separator, recovery and tank interface | per 1 kg reference flow | assay methods; PFD; independent chemistry records; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert raw units before normalization: mass from traceable weighing or matched volume times measured density; kWh times 3.6 gives MJ; a rate times duration gives an integrated quantity, whereas an integrated volume is used once. Steam heat is measured mass times actual supply-minus-return enthalpy when that is the provider basis. | cp_material; cp_utilities; cp_emissions | raw compatible numerator totals |  |
| cohort_carryover | all inventory rows | Keep physical production and delivery stock equations separate. For the matched product/route/state, production receipts enter finished stocks only once. Net supplied Q comes from signed loading less reconciled same-cohort returns, with repeated delivery of the same retained lot not counted twice. Derive delivery-attributable unnormalised burden vectors from actual current burdens plus inherited opening WIP/finished/return burdens, less burdens retained in closing WIP/finished stocks and separately assigned other co-functions. Preserve waste/loss/rework burdens with their responsible cohort; do not subtract a physical closing mass directly from an energy or other burden numerator. Unresolved cohort attribution blocks a numerical result. | cp_gate; cp_material; cp_utilities; cp_outputs; cp_recovery | unnormalised delivery-cohort vectors and Q |  |
| normalize_delivery | all inventory rows | a_i = A_i / Q; A_i is each reconciled unnormalised delivery-cohort exchange or attributable burden and Q is actual accepted net bulk delivery in kg; report this division once and require Q positive. The resulting reference row is 1 kg. Card amount expressions and protocol aggregation_rule name this same reporting operation, not additional divisions. Keep the complete unallocated joint-output balance and separately disclose the allocated biodiesel view; do not apply allocation a second time in the provider or subtract a second coproduct credit. | A_i; Q; cp_gate; cp_material; cp_utilities; cp_outputs; cp_emissions; cp_recovery | inventory per 1 kg reference flow | `jrc-ilcd-allocation-2010` |
| physical_species | all inventory rows | Reconcile complete external wet masses and internal stocks with uncertainty, then independently reconcile C/H/O/Na/S and actual molecular species across glycerides, methyl esters, methanol, glycerol, fatty acids, soaps, salts and water. An ideal triglyceride-plus-methanol equation supports reaction identity only, never observed yield. Protonating sodium methoxide or reacting it with residual FFA yields methanol rather than automatically forming water; hydroxide, acid-esterification and hydrolysis routes have different water terms and must not be substituted. Determine chemical water formation/consumption from independently identified actual reactions/extents and phase water from measured phase records; never solve unknown reaction water and unknown outlet from one residual or COD. | cp_recovery; cp_material; cp_outputs; cp_emissions | separate mass, element, species and water audits | `nrel-biodiesel-technology-2004` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_gate | all inventory rows | Retain complete matched raw records, calibration, traceable state/assay and stock burden genealogy. Zero is demonstrated absence, not missing data. Failed runs remain in coverage; Q=0 prevents a per-kg result. | cp_gate; cp_material; cp_utilities; cp_outputs; cp_emissions; cp_recovery |
| quality_identity | native rows and providers | Verify whole names, route, medium, property reference and supplier compatibility. Biodiesel native oxygen-content 11% is a declared identity characteristic with no assay tolerance supplied; retain the actual oxygen test and compatibility decision, never a measured default. General native description includes ethyl/propyl esters but this PCR is methyl-only; native geography is unspecified. | supplier and native identity review; assay certificates |
| quality_evidence | all rows | NREL is a 2004 technology report covering industrial options and separate laboratory exercises, not a plant inventory. Desmet documents industrial hardware/feed flexibility and recovery feasibility, not audited yields, zero discharges, specifications or site consumption. Collect all actual amounts; no numerical operating range is imported. | `nrel-biodiesel-technology-2004`, `desmet-biodiesel-process`, `desmet-cstr-transesterification`, `desmet-methanol-recovery` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | delivered_biodiesel | Require a unique Product terminal row consistent with reference_flow_link and the Mass reference. Reject HVO, fossil diesel, blended fuel, alcohol or incompatible ester identity. | `nrel-biodiesel-technology-2004` |
| validate_quantity | all inventory rows | Require positive matched Q, complete raw-period and inherited stock burdens, unique return/resupply reconciliation and one normalization. New release plus closing finished stock is not a second production output; actual delivery and release must not be equated. |  |
| validate_chemistry | cp_recovery | Reject theoretical-yield factors, duplicate formulation constituents, COD/residual-fitted species or water, omitted failed runs or unverified internal-recovery credits. Require independent species/phase evidence and uncertainty-aware mass/element closure. | `nrel-biodiesel-technology-2004` |
| validate_allocation | joint production | Require actual glycerol/residue market or waste state, gate-matched allocation evidence and an unallocated physical balance. Missing causal/residual value evidence prevents numerical use; it is not resolved by generic prices or wet mass shares. | `jrc-ilcd-allocation-2010` |
| validate_completeness | all inventory rows | Record checks performed, skipped and findings; missing auxiliary providers, actual site data, added atomic flows or native compatibility remain explicit gaps. The PCR does not certify fuel specification, scientific approval or TIDAS schema conformity. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | One kg net bulk supplied soybean FAME at the declared loading gate with inherited stocks and reviewed allocation; multi-output view retained separately |
| allowed_use | Declared matching route, feedstock, quality, geography, period and provider basis only |
| excluded_use | Universal biodiesel/HVO/fossil-diesel proxy; diesel-blend composition; fuel combustion; pure glycerol; automatic waste-feed credits; plant factors from laboratory examples |
| required_metadata | Q delivery gate; new-release and stock reconciliation; feed/formulation assay; route; location; period; oxygen/specification evidence; recovery; coproduct/waste status; allocation; native/provider limits |
| required_quality_disclosure | Raw completeness; WIP/finished-stock carried burdens; failed/zero-output/rework coverage; chemical/phase water evidence; uncertainty; unresolved identities and no unsupported factors |
| update_trigger | Feed/route/gate/specification, catalyst/acid formulation, provider geography, recovery or coproduct market/treatment changes |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nrel-biodiesel-technology-2004 | handbook | Van Gerpen, Shanks, Pruszko, Clements and Knothe, Biodiesel Production Technology, NREL/SR-510-36244, July 2004, https://docs.nlr.gov/docs/fy04osti/36244.pdf | Printed pp. 1–6, 30–36, 75–77 and 79: triglyceride/FFA distinction; refined soy feed; base/catalyst solution; industrial reaction/separation/wash/dry and methanol/glycerol operations. Whole report includes laboratory exercises, ideal triolein, dated prices and illustrative quantities; none are adopted as plant yield, recipe, dose, effluent factor or acceptance specification. |
| desmet-biodiesel-process | literature | Desmet, Biodiesel, publisher page, https://www.desmet.com/en/biofuel/biodiesel | Industrial continuous methylester technology and refined vegetable/soybean feed feasibility; not audited factory factors, actual site geography, guaranteed 100% yield or zero effluent. |
| desmet-cstr-transesterification | literature | Desmet, Transesterification, publisher page, https://www.desmet.com/en/biofuel/biodiesel/transesterification | Serial industrial CSTR/decanter and glycerine separation configuration; equipment capacities and performance marketing are not foreground values or proof of selected catalyst chemistry. |
| desmet-methanol-recovery | literature | Desmet, Methanol rectification, publisher page, https://www.desmet.com/en/biofuel/biodiesel/methanol-rectification | Physical methanol rectification/condensation and internal reuse; no 100% recovery, zero emission/wastewater or energy factor is imported. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for LCA — Detailed guidance, first edition March 2010, §7.9.3, printed pp.257–258, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation of inseparable multifunctional operations: virtual subdivision/determining physical causality then residual market value at actual process-exit state. Not a biodiesel-specific allocation fraction, waste cut-off, energy credit, price or compliance certification; the sawmill example continuing later is not used. |
