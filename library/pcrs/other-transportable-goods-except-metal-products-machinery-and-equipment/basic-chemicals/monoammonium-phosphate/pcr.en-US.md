---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.monoammonium-phosphate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Granular monoammonium phosphate manufacture

## 1. Scope and Applicability

This PCR covers cooled granular fertilizer-grade monoammonium phosphate (MAP, NH4H2PO4) made by neutralising aqueous orthophosphoric acid with anhydrous ammonia, followed by granulation, drying, screening, cooling and the actual conditioning and delivery preparation. A pre-neutraliser, pipe reactor or their combination is allowed within this chemistry; record the actual configuration and utilities separately. The chemical reference is not a claim of pure stoichiometric MAP: commercial moisture, impurities, sulfate and coating must be measured. [eu-jrc-map-2007; mosaic-map-spec-2024]

Exclude diammonium phosphate (DAP), triammonium salts, ammonium polyphosphate solutions, purified/crystallised technical or food-grade MAP, nitrophosphate/ODDA products, other compound NP/PK/NPK fertilizers, and physical blending of purchased finished fertilizers. Purchased MAP in an NPK blend is an upstream input, not MAP manufacture. The granulated fertilizer subset is a narrower application of CPC 3.0:34643; the label alone establishes no manufacturing route. [un-cpc3-2025]

One integrated foreground unit preserves stage-specific physical ledgers for receipt, neutralisation, granulation, drying, sizing, cooling, scrubbing, handling and actual packing. Internal material transfers use the same measured quantity at both ends and cancel within this unit. The single reference output is accepted finished MAP. This aggregation does not remove internal losses, equipment or control operations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.monoammonium-phosphate |
| classification_refs | CPC 3.0:34643 Monoammonium phosphate; proposed narrower granulated fertilizer scope, subject to separate mapping acceptance |
| covered_products | Granular fertilizer-grade MAP from phosphoric acid and anhydrous ammonia; measured actual grade, moisture and coating |
| excluded_products | DAP; triammonium salts; technical/food-grade crystals; liquid/polyphosphate fertilizers; other NP/PK/NPK products; fertilizer dry blends |
| representative_product | Cooled granular MAP released at producer gate, bulk or in declared packaging, with net product mass excluding tare |
| production_route | Aqueous H3PO4 ammoniation in a pre-neutraliser and/or pipe reactor; granulation loop, drying, sizing, cooling, actual conditioning and emission control |
| market_state | Finished fertilizer granules at factory gate; actual particle size, assay, moisture, coating, packaging and geography declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply qualified granular MAP fertilizer at the producer gate |
| How much | 1 kg net as-delivered product |
| How well | Actual total N, total and available phosphate expressed on declared P2O5 basis, moisture, grain-size specification, coating and batch acceptance declared |
| How long or cycle | One declared representative reporting period; no field-use service life is asserted |
| reference_flow_link | map_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Monoammonium phosphate `90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | MAP chemical identity; fertilizer grade; granular state; reaction configuration; phosphoric-acid source/concentration; NH3 purity/state; actual N and total/available P2O5 analytical bases; product moisture; grain size; coating composition; gate/packaging condition; geography; reporting period; suppliers and quantity bases; control and purge destinations |

Declare these qualifiers in dataset metadata, process notes or equivalent fields. A flow identity alone is not a supplier background dataset or a product assay. Mosaic's 11-52-0 sheet illustrates guaranteed N/available-P2O5 minima for one product, not full composition, actual assay or a universal MAP grade. [mosaic-map-spec-2024]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | map_product | Mass | kg | P = accepted net as-delivered MAP output kg in cp_output. Retain inherent moisture and coating; exclude packaging tare. All rows and protocols use per 1 kg reference flow. |
| product_nutrient_basis | map_product; phosphoric_acid_input; ammonia_input | Mass | kg | Keep product mass, dry solids, contained MAP, N, elemental P and total/available P2O5 separate. For assays in percent divide by 100 before multiplication. Available P2O5 is a nutrient-test result, not total P for conservation. Declare analytical method and molecular-mass convention for P/P2O5/H3PO4 conversions; no default grade or reaction yield. |
| solution_carrier | phosphoric_acid_input; sulfuric_acid_input; wastewater_output; sludge_output | Mass | kg | Retain whole wet stream, active solute and carrier water in the physical ledger. Match each supplier exchange to delivered solution or contained-chemical basis explicitly; water already inside a purchased solution is not another independent purchased supply. |
| gas_volume | natural_gas_input | Volume | m3 | Convert measured volume to supplier reference state using absolute pressure, temperature, composition, wet/dry correction and compressibility. Mass needs measured/traceable density, not a secondary flow coefficient. Record LHV/HHV and their own reference state. |
| steam_heat | steam_input; condensate_return | Mass | kg | Keep supply and return kg separate. Net heat is the measured sum of mass times enthalpy entering minus leaving the supplier boundary, with steam quality and make-up/loss/return terms declared; match provider kg or net-MJ definition before linking. No assumed pressure, enthalpy, loss or return fraction. |
| energy_service | electricity_input; road_transport_input; stainless_steel_input | Row-specific property | MJ; kg*km; kg | Electricity MJ = 3.6 × kWh; transport kg*km = 1000 × t*km. Capital kg-equivalent is a service-period burden allocation, never a claim that a whole installed machine is consumed each reporting period. Preserve original physical masses and service lives. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received aqueous phosphoric acid, anhydrous ammonia, actual additives and utilities at the MAP plant; no phosphate-rock digestion in this foreground unit |
| starting_condition_role | Explicit foreground gate; upstream acid/ammonia manufacture and extraction linked separately |
| product_classification_scope | Granular fertilizer MAP subset of CPC 3.0:34643; classification does not extend chemistry to DAP or other fertilizer routes |
| recursive_input_rule | Purchased finished MAP for actual reprocessing is a separately identified upstream input with origin and content; internally circulating fines, oversize and scrubber liquor are internal transfers, not repeated purchases or co-products |
| upstream_dataset_requirement | Match technology, geography, grade/concentration, reference property, quantity basis, transport and treatment boundaries for each external input/output; integrate co-located upstream units explicitly or link them without duplication |
| disclosure | State configuration, acid quality, utilities, stock adjustments, internal recycle, monitoring coverage, treatment/purge destinations, packaging, equipment/service allocation, exclusions and all pending quantities/identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | map_production | Include all actual stages from receipt to released gate product, their utilities, emission controls, cleaning, losses, starts/shutdowns and handling. Keep separate stage meters even within the integrated unit. | eu-jrc-map-2007 |
| boundary_upstream | external exchanges | Link acid, ammonia, actual sulfuric acid, water, fuels, electricity, steam, coating, packaging, equipment materials and separately modelled inbound freight to compatible backgrounds. Included on-site upstream production must add its full actual inventory; it cannot disappear at an artificial gate. | eu-jrc-map-2007; jrc-ilcd-2010 |
| boundary_recycle | internal transfers | Track full fines, crushed oversize, captured dust and recovered liquor at both sending/receiving stages, with matched quantities, stocks and composition. Count only external make-up and actual losses in the integrated LCI; no negative purchase or avoided-production credit for internal recycle. | eu-jrc-map-2007 |
| boundary_fates | exported residues and emissions | Identify every external fate. This template's aqueous purge is a waste sent for off-site treatment; an operated on-site treatment/final discharge requires its added atomic reagents, sludge and individual water/pollutant exchanges to the actual receiving medium. No wastewater transfer may also be counted as direct discharge. | eu-jrc-map-2007 |
| boundary_extension | actual site completeness | Conditional rows require applicability and measured positive amount or a documented true zero. Add one atomic row per actual unlisted ingredient, liner, fuel, treatment reagent, waste or emission. An absent UUID or monitoring result never justifies deletion or a fabricated zero. | eu-jrc-map-2007; jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| map_production | Integrated MAP ammoniation, granulation, drying, conditioning and gate delivery | required | This phosphoric-acid/anhydrous-ammonia granular route | Foreground with stage-specific physical and utility ledgers; internal transfers retained and reconciled | 1 kg net as-delivered accepted MAP |

### Process: Integrated MAP production (`map_production`)

The cards are a measurement checklist, not a numeric recipe. Unless fixed for the reference output, collect the actual reporting-period amount, attribute it to the same MAP campaign, and divide by P from cp_output. All rows use the same final denominator; phase-specific masses, assays, utilities and losses remain in the supporting physical ledger. Conditional true zeros require records. No default purity, yield, energy, emission factor or allocation fraction is supplied.

#### Inputs

##### Product flows

###### Phosphoric acid (`phosphoric_acid_input`)

Receive aqueous orthophosphoric acid, including fresh acid used in scrubbers. Weigh the whole delivered solution and assay H3PO4, total P, water, F and suspended matter. Declare solution kg as this row basis; supplier background must use that same concentration or an explicit contained-acid conversion with carrier-water accounting. Do not count returned scrubber acid again as fresh input.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_materials`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: eu-jrc-map-2007

###### Ammonia, anhydrous, liquid (`ammonia_input`)

Weigh received anhydrous liquid NH3 and reconcile tank stocks, purity and any vaporisation before injection; measure losses separately. Aqueous ammonia cannot use this identity.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_materials`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: eu-jrc-map-2007

###### Sulfuric acid (`sulfuric_acid_input`)

Conditional grade-control acid only when charged: use the verified 93–98% solution identity only within that assay interval. Record solution mass, H2SO4 assay and carrier water; retain sulfate in product and residues. A materially different sulfate compound fertiliser requires a new applicability assessment. The record comment misdescribes an oxidation step; use neither that description nor any recipe as process evidence.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_materials`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: us-epa-ap42-map-1993

###### Tap water (`makeup_water_input`)

Record fresh purchased tap-water make-up to reaction, cooling and scrubbing; this identity applies only to treated piped supply. Weigh or convert metered volume using documented density and conditions. Record pond/recycled water internally; other external water sources require separate atomic rows and their own backgrounds.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_materials`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: eu-jrc-map-2007

###### Alternating current (`electricity_input`)

Meter all operated stages, fans, pumps, crushing, cooling, control and packing. This UUID is grid-average customer-side 1–35 kV AC with native Net calorific value property; use MJ = 3.6 times measured kWh. This UUID is restricted to CN; other geographies, voltages, supply mixes or delivery interfaces require matching verified identities/backgrounds and loss boundaries.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual attributable reporting-period amount for this row from `cp_utilities`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: eu-jrc-map-2007

###### natural gas in the gaseous state (`natural_gas_input`)

Conditional pipeline gas to an actual on-site dryer burner or boiler. Native reference is Volume, not Mass. Record metered m3, absolute pressure, temperature, dry/wet basis, composition, Z and supplier reference conditions; convert to the background m3 definition. Measure heating value independently. The secondary mass coefficient of 1 is not density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual attributable reporting-period amount for this row from `cp_utilities`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources: us-epa-ap42-gas-2026

###### Steam, in chemical industry (`steam_input`)

Conditional externally supplied chemical-industry steam, recorded as actual kg. Record supply pressure, temperature, quality, mass, supplier background basis and condensate return. Quantity compatibility requires the supplier definition and the measured enthalpy ledger; neither a mass UUID nor an MJ/GCV label proves net delivered heat. On-site steam stays internal and its fuel, water, electricity and emissions remain included.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_steam`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_steam
- Sources: eu-jrc-map-2007

###### Mineral Oil (`mineral_oil_input`)

Conditional pure petroleum mineral-oil coating component or maintenance lubricant. Record function, grade, CAS, purchased mass, stocks and destination in product, spent oil or emissions. This UUID does not represent a multicomponent anticaking formulation. A purchased formulation requires one separate whole-preparation row, actual full wet mass and a compatible full-formulation identity/background; keep component/water composition in its physical ledger without buying those components again. Separately purchased and dosed ingredients require separate atomic rows.

- Selected flow: Mineral Oil `e4d87634-a041-48d6-b071-da57551c8ab5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_materials`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: eu-jrc-map-2007

###### Unlined woven polypropylene fertiliser sack (`pp_sack_input`)

Conditional for bagged delivery: weigh actual empty unlined PP sacks, count filled and damaged bags and reconcile tare; packaging is outside product net mass but its supply burden is included. Liners, stitching and other materials, if present, require separate atomic rows. No seed-bag recipe is transferable.

- Selected flow: Unlined woven polypropylene fertiliser sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_packaging`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_packaging
- Sources: eu-jrc-map-2007

###### Stainless steel (`stainless_steel_input`)

Conditional stainless parts in actual maintenance or capital equipment: verify Cr ≥10.5% and C ≤1.2% and the actual grade against supplier data. Record full installed/replaced mass and service life separately from the burden-equivalent kg assigned to this period. This is one material component, not a whole machine or universal proxy for all infrastructure.

- Selected flow: Stainless steel `9a0998b6-b8a6-4fcc-8099-be847ca5b3cd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full physical kg retained in cp_capital; attributable service-period burden-equivalent kg divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_capital
- Sources: eu-jrc-map-2007

###### Road Transport (`road_transport_input`)

Conditional separately modelled inbound freight by a 30-ton diesel truck, matching this identity. Record actual load, distances, utilisation, empty returns and supplier boundary; use kg*km, converting t*km by 1000. Other modes require their own rows; do not add transport already included in delivered supply datasets.

- Selected flow: Road Transport `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931` / kg*km
- Amount rule: Actual attributable reporting-period amount for this row from `cp_transport`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_transport
- Sources: eu-jrc-map-2007

#### Outputs

##### Product flows

###### Monoammonium phosphate (`map_product`)

Accepted cooled granular fertilizer-grade MAP at the factory gate, including inherent moisture and declared coating, excluding packaging tare. P is accepted net output kg in the reporting period, corrected for stocks without counting internal recycle as production. Product assay and market grade are measured, not inferred from the broad identity.

- Selected flow: Monoammonium phosphate `90d4a1dc-fa9b-4f22-9c97-8acb0a457d0d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources: mosaic-map-spec-2024

###### Steam condensate returned to external supplier (`condensate_return`)

Conditional supplier return, measured kg with pressure, temperature, contamination and destination. Keep full physical return; credit only through a documented matching steam-supply model, never by subtracting condensate kg from steam kg to estimate heat.

- Selected flow: Steam condensate returned to external supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_steam`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_steam
- Sources: eu-jrc-map-2007

##### Waste flows

###### MAP scrubber purge wastewater sent to off-site treatment (`wastewater_output`)

Conditional non-returned aqueous purge exported for treatment: measure full wet mass, dissolved/suspended solids, total N/P/F/S, pH and receiver. It is not an elementary emission; no direct-to-water pollutant rows represent this same transfer. If on-site final discharge occurs, add measured individual pollutants and water to the actual receiving compartment instead of claiming the transfer inventory is complete.

- Selected flow: MAP scrubber purge wastewater sent to off-site treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_residues`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residues
- Sources: eu-jrc-map-2007

###### Dewatered MAP scrubber purge sludge (`sludge_output`)

Conditional actual purge-treatment sludge removed from the site: weigh wet cake, dry solids, N/P/F and contaminants and verify receiver/treatment classification. Do not substitute biological or paper sludge and do not subtract sludge twice from the same wastewater mass. On-site dewatering requires its actual reagents and utilities as additional atomic inputs.

- Selected flow: Dewatered MAP scrubber purge sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_residues`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residues
- Sources: eu-jrc-map-2007

###### Discarded off-spec granular MAP (`offspec_output`)

Conditional unrecoverable MAP removed as waste: weigh and assay actual wet material and verify disposal. Recycled fines and crushed oversize are internal, while saleable downgraded MAP is a separate measured co-product with a verified product identity and allocation review, not this waste row.

- Selected flow: Discarded off-spec granular MAP
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_residues`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residues
- Sources: eu-jrc-map-2007

###### Damaged empty polypropylene sack waste (`pp_sack_waste`)

Conditional packing loss; weigh PP sack waste separately from spilled fertiliser, retained packaging and any liner waste. Record contamination, receiver and recovery route with no automatic avoided-product credit.

- Selected flow: Damaged empty polypropylene sack waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_packaging`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_packaging
- Sources: eu-jrc-map-2007

###### Used lubricating oil (`spent_oil_output`)

Conditional actual maintenance lubricant waste. Measure full contaminated oil mass and assay water/solids where relevant; reconcile virgin oil, stocks, retained coating/lubricant and actual loss destinations. This flow does not specify a treatment route: retain receiver and actual recovery/disposal evidence. Do not represent incorporated coating oil as spent lubricant.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period waste mass from cp_residues, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_residues
- Sources: jrc-ilcd-2010

##### Elementary flows

###### ammonia (`ammonia_air`)

Gaseous NH3 leaving the site after controls; include neutraliser, granulator, dryer and handling releases. Convert NH3-N to NH3 only with the declared molecular-mass basis. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eu-jrc-map-2007

###### hydrogen fluoride (`hydrogen_fluoride_air`)

Measure gaseous HF species, not total fluoride-as-F. If monitoring reports only total F, establish speciation or retain a quantitative unresolved emission; do not assign the total to HF and SiF4 simultaneously. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-map-1993

###### silicium tetrafluoride (`silicon_tetrafluoride_air`)

Measure gaseous SiF4 separately from HF and particulate fluoride; keep chemical mass distinct from contained-F mass. A fluoride aggregate does not establish this species amount. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: silicium tetrafluoride `fe0acd60-3ddc-11dd-a706-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-map-1993

###### particles (PM2.5) (`pm_fine_air`)

Measure emitted particulate mass ≤2.5 micrometres, including actual filterable/condensable definition. Retained cyclone dust is internal recycle, not an emission. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eu-jrc-map-2007

###### particles (PM2.5 - PM10) (`pm_middle_air`)

Measure the exclusive 2.5–10 micrometre fraction; where nested PM10 and PM2.5 share a compatible test basis, use their nonnegative difference and preserve uncertainty. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eu-jrc-map-2007

###### particles (> PM10) (`pm_coarse_air`)

Measure the >10 micrometre emitted fraction; use total minus PM10 only on compatible measurements. No invented particle-size split from total dust; unresolved fractions prevent a complete size-resolved claim. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eu-jrc-map-2007

###### carbon dioxide (fossil) (`fossil_co2_air`)

Conditional actual fuel/carbon releases; reconcile fuel carbon, inlet CO2 and other C destinations. Do not apply a default complete-oxidation fraction or count the same stack twice. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### nitrogen monoxide (`nitric_oxide_air`)

Conditional measured NO species mass. An NOx-as-NO2 aggregate cannot be copied into NO kg without a measured species split and molecular conversion. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### nitrogen dioxide (`nitrogen_dioxide_air`)

Conditional measured NO2 species mass, excluding NO and N2O. Do not add a NOx aggregate to this pair of species rows. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### sulfur dioxide (`sulfur_dioxide_air`)

Conditional actual SO2 from combustion or sulfur-bearing feed; balance sulfur retained in product/waste and emitted. Sulfur oxides as an aggregate are not this species identity. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### carbon monoxide (fossil) (`fossil_co_air`)

Conditional incomplete-combustion CO; include starts and shutdowns and preserve fossil origin in the carbon balance. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### methane (fossil) (`fossil_methane_air`)

Conditional methane slip and on-site gas leakage. Use actual species mass and fossil origin; do not use a delayed-emission correction flow. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### nitrous oxide (`nitrous_oxide_air`)

Conditional actual combustion N2O; it is separate from NOx and is not a soil-use emission within this gate boundary. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### water vapour (`water_vapour_air`)

Net site-added water vapour to air from drying, reaction and combustion, excluding measured inlet-air moisture. Keep product water, external wastewater and returned condensate separate; do not silently omit evaporation to close the water balance. Compartment: outdoor air, unspecified; retain actual release height/location and refine identity if required.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period amount for this row from `cp_air`, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: eu-jrc-map-2007

###### formaldehyde (`formaldehyde_air`)

Conditional individual combustion VOC from actual gas-fired equipment; screen this species by source testing and fuel/burner evidence. Record actual emitted mass, including abnormal modes; no default positive amount or zero is assumed. Compartment: outdoor air, unspecified; refine for actual release conditions.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period species mass from cp_air, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

###### benzene (`benzene_air`)

Conditional individual combustion VOC from actual gas-fired equipment; screen this species by source testing and fuel/burner evidence. Record actual emitted mass, including abnormal modes; no default positive amount or zero is assumed. Compartment: outdoor air, unspecified; refine for actual release conditions.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable reporting-period species mass from cp_air, divided by P.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_air
- Sources: us-epa-ap42-gas-2026

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | map_production | Retain the complete unallocated physical ledger first. Internal fines, liquor and captured dust have full physical amounts and no co-product credit. Do not multiply product, residue or internal-transfer physical masses by an environmental-burden share. | eu-jrc-map-2007; jrc-ilcd-2010 |
| allocation_campaign | shared equipment and utilities | Subdivide by actual product, chemistry, market state and campaign first. Meter direct consumption; allocate truly shared burdens by a demonstrated causal driver such as actual load/runtime or measured heat duty. Preserve all starts, failed batches, cleaning, zero-output batches, rework and WIP attributable to that same product pool. Do not allocate all energy only to successful hours or divide by output twice. | jrc-ilcd-2010 |
| allocation_external | actual co-products | No co-product split is presumed. Saleable downgraded product or recovered external outputs require measured quantity, usable quality, genuine destination and separate identity. First assess subdivision within the stated attributional model, then demonstrable physical causality; use documented gate market values only for remaining inseparable burdens, with period, prices and sensitivity. Burden shares must sum to one. No automatic waste/recycling substitution credits. | jrc-ilcd-2010 |
| allocation_capital | capital and replacement parts | Keep full physical installed/replaced material and actual end-of-life fate separate from the service-period burden share. Use recorded life/throughput, utilisation and replacement dates to assign only the attributable service; do not book a whole machine each period, or discard infrastructure because it is not consumed with feedstock. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Define the reporting pool before calculation: the same granular MAP product specification/state, the same included chemistry/configuration and boundary, one site, and one declared continuous period. A normal year is preferred for representativeness; a shorter campaign must disclose coverage and seasonal/abnormal effects. Keep batch identifiers, stage start/finish times, stock and WIP movements. Include failed batches, zero-output operation, start-up/shutdown, cleaning, losses and rework attributable to this pool. DAP or other NP/PK/NPK production cannot enter it merely because it shares equipment. Rework is counted as accepted output once, at final acceptance; its earlier inputs and utilities remain in the raw totals. Unfinished WIP retains a measured opening/closing mass and composition bridge; carry its attributed burdens transparently between periods, never erase them or count them twice.

The raw-period ledger stores original quantities with their units before allocation or division. A separate burden ledger records direct attribution/shared shares, service lives, supplier unit conversions and the single final normalisation. A zero-output pool retains all totals and is reported without a per-kg result; it cannot be repaired by inventing P, importing unrelated output or silently dropping the period. [jrc-ilcd-2010]

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | map_production | accepted product denominator and stocks | acceptance and stock ledger | batch and pool ids; new accepted net weights; tare; moisture; coating; total N; total P; available P2O5; grain size; opening/closing stocks and WIP; shipments; losses; rework links | Calibrated net weighing and lot assays; reconcile production acceptance against movements without re-counting re-accepted rework; Period aggregation retained before final normalization: Preserve raw masses; P is newly accepted net output kg counted once; reference output = 1 kg; per 1 kg reference flow | kg; mass fraction | Every batch and stock close | Complete declared period, including zero-output/failed batches | Same site/product/state/route pool | per 1 kg reference flow | Calibration, certificates, acceptance IDs, stock bridge, WIP burden carryover |
| cp_materials | map_production | fresh acid, NH3, actual additives, make-up water | receipt, stock, charge and assay records | batch; supplier; SKU; chemical/CAS; whole delivered mass; concentration; water; N/P/F/S/C; opening/closing inventory; returns; internal transfers; destinations; provider reference amount/property | Calibrated weighbridge/tank/meter and traceable density; laboratory assays; charge and stock reconciliation; full formulation sheet when supplied as a preparation; Period aggregation retained before final normalization: Retain full raw wet totals and solute/water quantities; fresh net consumption after stocks/returns; attribute to pool; divide once by P; per 1 kg reference flow | kg; m3; mass fraction | Each receipt/charge and period close | All operation in reporting pool | Same site/product/state/route pool | per 1 kg reference flow | Supplier COA/SDS, density conditions, assays, calibrated meters, full wet/active reconciliation |
| cp_utilities | map_production | electricity and on-site gas | meter and operating log | initial/final readings; stage; uptime; starts/failures; AC voltage/supply mix; gas T/absolute p/Z/wet-dry composition; LHV/HHV; supplier reference state; shared driver | Read calibrated sub-meters, retain invoice cross-checks and supplier definitions; separately measure shared demand and stage runtime; Period aggregation retained before final normalization: Preserve raw totals and conditions; reconcile site meters; allocate true shared burdens; convert reference units; divide once by P; per 1 kg reference flow | kWh; MJ; m3; K; Pa | Time series plus each campaign and stock close | Entire period including idle/start/failed operation attributed to pool | Actual stages at this site | per 1 kg reference flow | Meter calibrations, gas analysis, supply contracts and causal-driver records |
| cp_steam | map_production | purchased steam and returned condensate | supply-return meter and enthalpy ledger | external vs internal supply; kg; pressure; temperature; steam quality; return kg/T/p; make-up; losses; supplier reference kg or MJ and boundary; enthalpy method | Calibrated mass meters and T/p/quality measurements; traceable thermodynamic property method with actual state; match supply and return intervals and supplier definition; Period aggregation retained before final normalization: Retain supply and return mass independently; calculate measured net boundary heat; assign service demand; divide once by P; per 1 kg reference flow | kg; MJ; K; Pa | Time series over each operating mode | Whole reporting period including starts and purge | Actual supplier/site interface | per 1 kg reference flow | Meter/thermometer certificates, enthalpy method, supplier amount and return-credit contract |
| cp_air | map_production | individual air species and particle fractions | stack/fugitive tests and species balance | source; species/CAS; c; integrated V or flow rate; test interval; dry/wet/T/p; oxygen correction; uptime; detection limits; control bypass; size fractions; inlet moisture; carbon origin | Representative source tests at actual control outlets; match concentration and carrier conditions; integrate measured flow rates only over their intervals; assess handling fugitives, bypass and abnormal modes; Period aggregation retained before final normalization: Preserve raw results; integrate species masses without duplicate time multiplication; pool only compatible samples; attribute and divide once by P; per 1 kg reference flow | mg/m3; m3; m3/h; h; kg | Each source/operating-mode survey and continuous records where available | Whole period with documented test extrapolation and uncertainty | All actual site release points; exclude upstream stacks already in backgrounds | per 1 kg reference flow | Test method, accredited reports, flow/time basis, uncertainty, source coverage and actual compartment |
| cp_residues | map_production | external purge, sludge and discarded MAP | waste/transfer and assay records | wet kg; dry fraction; dissolved/suspended material; N/P/F/S/C; stock; receiver; treatment; recycle route; legal waste classification | Weigh each physically separate external stream, sample representative composition and reconcile receiver manifests; distinguish on-site internal settling from exported waste; Period aggregation retained before final normalization: Keep full wet raw masses; do not duplicate separated solids in the same wastewater total; attribute and divide once by P; per 1 kg reference flow | kg; mass fraction | Each removal and close | Entire reporting period | All actual residual destinations | per 1 kg reference flow | Weigh slips, laboratory methods, receiver permits/receipts and material balance |
| cp_packaging | map_production | PP sacks, packaging waste and attached packaging | purchase, tare and packing records | composition; SKU; individual empty mass; count; opening/closing stock; filled/damaged/returned count; spill mass; actual liner/stitching; destination | Weigh representative empty components on calibrated scales; count actual units and reconcile packing losses; keep fertilizer spill separate; Period aggregation retained before final normalization: Preserve counts and full physical packaging kg; packaging attached to product leaves with it but stays outside net P; attribute burden and divide once by P; per 1 kg reference flow | kg; items | Each packing lot and close | Whole reporting period | Actual delivery mode at this site | per 1 kg reference flow | Empty-component weighing, BOM, supplier data, bag reconciliation and waste receipts |
| cp_capital | map_production | stainless components and other actual equipment materials | equipment and maintenance ledger | installed physical kg by material/grade; replacements; commissioning/retirement; service life; throughput/runtime; shared driver; end-of-life fate; embodied dataset boundary | Trace equipment BOM or measured/traceable component masses, actual maintenance and operational capacity; inventory all other actual materials as separate rows; Period aggregation retained before final normalization: Preserve complete physical masses separately; assign recorded service-period burden-equivalent mass; divide once by P; per 1 kg reference flow | kg; years; h; kg throughput | Each installation/replacement and annual service review | Full service history supporting this period | Included production and control assets | per 1 kg reference flow | Asset BOM, service-life evidence, replacement record and burden ledger avoiding double counting |
| cp_transport | map_production | separately modelled inbound road freight | consignment and route records | actual mode/truck; shipment kg; leg distance; load; utilisation; empty returns; supplier delivery boundary | Actual carrier records and route distances; match 30-ton diesel-truck identity only when applicable; other modes separate; Period aggregation retained before final normalization: Preserve shipment totals; calculate service once per actual leg; attribute and divide once by P; per 1 kg reference flow | kg; km; kg*km | Each consignment | All inbound deliveries in pool | Actual upstream-to-gate legs absent from supplier background | per 1 kg reference flow | Consignment records, route evidence, supplier boundary comparison |

### Calculation Rules

These are calculation instructions for future measured records, not default amounts. Reference quantities in a supplier dataset are denominators for linking; they are not reporting-period factory consumption.

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | Keep A_period as the complete raw attributable reporting-period amount in the row's reference unit. After any explicit service/shared burden assignment and supplier-basis conversion, normalized exchange = A_period / P, once only. P must be positive. If P = 0 retain A_period without any normalized result. The fixed map_product row is 1 kg. | A_period; P; cp_output; applicable protocol | Exchange per 1 kg reference flow and retained raw total | jrc-ilcd-2010 |
| output_reconciliation | map_product | P is sum of newly accepted net product weights, excluding tare and duplicate rework acceptances. Independently reconcile with shipments plus closing less opening finished-product stock and measured post-acceptance losses/transfers. Reconcile WIP separately by stage and carry measured embodied burdens across periods. Explain discrepancies; do not apply both production and shipment stock adjustments to the same P. | cp_output; acceptance ids; stock movements | P and explicit stock/WIP bridge | eu-jrc-map-2007; jrc-ilcd-2010 |
| composition_bridge | phosphoric_acid_input; sulfuric_acid_input; ammonia_input; map_product; wastewater_output; sludge_output | Contained species kg = whole stream kg × measured species mass fraction. Water and all measured solutes/solids partition the whole stream on one compatible analytical basis. Keep total P separate from available P2O5. Convert chemical/element bases using declared molecular masses, assay definitions and provenance. No commodity grade is assumed to be pure MAP. | cp_materials; cp_output; cp_residues; assay basis | Wet, dry, active, elemental and water ledger | eu-jrc-map-2007; mosaic-map-spec-2024 |
| supplier_quantity_bridge | external exchanges | Retain period demand D in its actual kg/m3/MJ and the supplier reference amount s with property, concentration and state. Convert D into the supplier's declared quantity basis explicitly, then require D_converted / s provider units. Do not multiply period demand by supplier reference amount. Do not add carrier water or upstream formulation ingredients again when included in purchased whole-solution/preparation background. Unknown compatibility leaves the dataset link pending. | applicable collection protocol; provider definition; measured composition/state | Compatible provider demand and conversion evidence | jrc-ilcd-2010 |
| air_integration | ammonia_air; hydrogen_fluoride_air; silicon_tetrafluoride_air; pm_fine_air; pm_middle_air; pm_coarse_air; fossil_co2_air; nitric_oxide_air; nitrogen_dioxide_air; sulfur_dioxide_air; fossil_co_air; fossil_methane_air; nitrous_oxide_air; water_vapour_air; formaldehyde_air; benzene_air | Species kg = sum(c_mg_per_m3 × V_integrated_m3) / 1000000. If the input is flow rate rather than integrated volume, first integrate flow_rate_m3_per_h × interval_h. Never multiply an already integrated V by operating hours again. Align T/p/wet-dry/O2 reference and represented operating modes before summation; preserve detection limits and uncertainty. | cp_air; c; V or flow_rate and interval | Species kg over full period before normalisation | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| conservative_balances | map_production | Reconcile measured whole streams and independent N/P/F/S/C inventories, stock/WIP and documented air-carrier terms. Water balance includes inlet water, product/residue water, condensate, measured net vapour and evidence-backed chemical generation/consumption. NH3 + H3PO4 to NH4H2PO4 produces no stoichiometric water; combustion water requires actual fuel H/composition and supported reaction calculation. Track coating/fuel organic dry matter and all measured carbon destinations. COD or an unexplained residual cannot create water, evaporation, yield or a missing species. Explain residuals against declared measurement uncertainty. | cp_materials; cp_output; cp_air; cp_residues; cp_steam; opening/closing stocks | Full physical mass, water and element ledgers, residuals and uncertainty | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| particulate_speciation | pm_fine_air; pm_middle_air; pm_coarse_air; hydrogen_fluoride_air; silicon_tetrafluoride_air; nitric_oxide_air; nitrogen_dioxide_air | Only on compatible tests, PM2.5-10 = PM10 minus PM2.5, and PM>10 = total particulate minus PM10. Keep these three exclusive fractions; do not add nested totals again. HF/SiF4 must be measured or validly speciated from F; NO/NO2 from an NOx-as-NO2 result needs actual species fractions and molecular conversion. Keep particulate F/N/P content as composition of dust in the elemental ledger, not another copy of dust mass. Missing speciation stays pending, never an invented ratio. | cp_air; species/size methods | Mutually exclusive emissions with correct chemical bases | eu-jrc-map-2007; us-epa-ap42-map-1993 |
| capital_service | stainless_steel_input | Retain physical installed mass K and full actual replacements. Attribute only the service used in this pool using demonstrated lifetime output or lifetime operating service and recorded utilisation; document residual life, replacement timing and shared drivers. The assigned equivalent kg affects burden linking, not chemical physical balances. No default K, lifetime or allocation share. | cp_capital; actual service records | Physical asset ledger plus attributable burden equivalent before division by P | jrc-ilcd-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every exchange | Verify chemical/material identity, full name fields, CAS, route, physical state, type, compartment, reference property/unit and supplier quantity definition together. Generic product identity may be physically limited by this PCR only when no contradictory native field exists. | Direct identity records, suppliers, assays and conversion evidence |
| dq_pool | all inventory rows | Retain full original period totals, zero-output/failed batches, starts, rework/WIP and causal shared allocation; positive accepted P normalizes once. Each protocol belongs only to map_production and its actual rows. | Signed period ledger, operating log, stock/WIP bridge and burden ledger |
| dq_physical | map_production | Independent total mass, water and N/P/F/S/C checks include full physical outputs, stocks, purge destinations and documented reaction generation/consumption; uncertainty is stated and unexplained residuals remain findings. | Calibrations, lab records, physical process map and balances |
| dq_monitoring | direct releases | Assess all source points and operating modes including fugitive and bypass releases; quantify coverage, detection limits, size/species uncertainty, time extrapolation and actual medium. Screen actual additional VOCs/trace pollutants and add each applicable species separately; this checklist is not a waiver for unlisted pollutants. | Sampling plan, permits, source tests and source-to-row matrix |
| dq_background | upstream and treatment links | Supplier dataset technology/geography/time and kg/m3/MJ definitions, solution/active basis and embedded transport/returns must match. Missing values are future collection requirements; an unverified supplier conversion cannot be represented as a complete link. | Provider reference quantities and actual collection/conversion records |
| dq_completeness | complete dataset | Review actual BOM, utilities, capital, emissions, packaging and waste destinations. Add each actual missing atomic exchange; document true zeros, measurement gaps and uncertainty. Report unresolved UUIDs honestly without removing rows. | Site survey, chemical register, manifests and completeness register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and all rows | Require the stated MAP reference identity/Mass/kg and one map_product reference output, correct actual chemistry and granular fertilizer state. Fail substitutions of DAP, triammonium salts, other NP/NPK products or an incompatible product grade/route. | un-cpc3-2025; eu-jrc-map-2007 |
| validate_denominator | all inventory rows | Require positive measured accepted P and one complete same-product/state/route reporting pool. Include failed/zero-output batches, starts and rework/WIP; preserve raw totals and normalize exactly once. If the pool has P = 0 retain totals without a per-kg result. | jrc-ilcd-2010 |
| validate_protocol | collection protocols | Every protocol must belong to the actual single process map_production, match its inventory rows, define original units and period aggregation, and preserve supplier reference quantities independently from consumption. | jrc-ilcd-2010 |
| validate_assay | inputs and product | Fail conflation of whole wet product/solution with pure MAP, active acid, available phosphate or nutrient mass, or duplicate supply of embedded carrier/components. Require assay-specific total element and water balances. | eu-jrc-map-2007; mosaic-map-spec-2024 |
| validate_energy | utilities | Require native property units, actual gas reference conditions/density/heat basis, actual steam supply-return mass and enthalpy plus supplier definition, and actual electricity voltage/supply. Identity success alone does not prove quantity/background compatibility. | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_emissions | air and any actual water/soil release | Require integrated concentration-volume or rate-time calculation, correct medium, physical species and carbon origin; no duplicate total/size fractions, NOx+NO+NO2 or fluoride aggregates+species. No missing monitoring is a zero. Actual treatment/direct discharges need their full extended inventory. | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_conservation | map_production | Require independently checked mass/water/N/P/F/S/C and stock/WIP bridges, stated uncertainties and explained residuals. Do not fabricate reaction water, evaporation or product yield to force closure. | eu-jrc-map-2007; us-epa-ap42-gas-2026 |
| validate_burdens | co-products, wastes, equipment and shared services | Preserve full unallocated physical transfers/outputs and service masses; distinguish attributed burdens, verify shares and genuine destinations, retain replacement/service history and avoid automatic recycling credits or whole-machine-per-period demand. | jrc-ilcd-2010 |
| validate_completeness | dataset claims | Identify unresolved UUIDs, supplier compatibility and missing measurement/speciation explicitly. Add all actual omitted atomic exchanges and matching backgrounds before declaring a site dataset complete. Candidate methodology is not scientific approval or a licence to publish incomplete measured data. | jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground granular fertilizer-grade MAP manufacture, 1 kg net as-delivered accepted product at producer gate |
| downstream_use | secondary_dataset; background_dataset after appropriate independent review and completion of the actual dataset |
| allowed_use | Matching granular fertilizer supply chains with actual route, grade, moisture, coating, geography and provider quantities stated |
| excluded_use | Technical/food crystals, liquid products, DAP/other NP/PK/NPK routes or dry blending; per-kg values from a zero-output pool; field-use fertilizer emissions or downstream delivery claims outside the boundary |
| required_metadata | PCR id; product UUID; route/configuration; producer/site; reporting pool/period; actual assays and test methods; moisture/grain size/coating; gate and packaging; raw totals/P; stock/WIP/rework; supplier identities/reference quantities; energy conditions; monitoring and destinations; allocation/equipment service |
| required_quality_disclosure | Physical versus burden ledgers; balance residuals/uncertainties; survey and monitoring coverage; zero/non-detect treatment; failed batches/WIP; unresolved identities, quantities and provider links; exclusions; source versions; scientific review pending until independently completed |
| update_trigger | Product chemistry, assay/state, acid or NH3 source, reactor/dryer/control configuration, utility supply/basis, packing mode, waste fate, actual emissions, allocation/service life or flow-identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, row 34643. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; repository-retained official original consulted 2026-10-15. | Classification context only; no manufacturing default or identity duplication |
| eu-jrc-map-2007 | official_guidance | European Commission, LVIC-AAF BAT Reference Document, August 2007, §§7.2.1, 7.2.3–7.2.6, 7.2.8–7.2.9; printed pp.285,287–289 / PDF pp.313,315–317. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf ; retained original consulted 2026-10-15. | MAP/DAP reaction/granulation route and controls; distinguish nitrophosphate and dry blending. NPK case quantities, temperatures and utility examples are not MAP defaults |
| us-epa-ap42-map-1993 | official_guidance | US EPA, AP-42 §8.5.3 Ammonium Phosphate, July 1993, reformatted January 1995, §§8.5.3.1–3 and Figure 8.5.3-1, PDF pp.1–4. https://www.epa.gov/sites/default/files/2020-09/documents/8.5.3_ammonium_phosphate.pdf ; retrieved 2026-10-15. | Granulated phosphate scope; process and species checklist, recycle and conditioning context. Historical US plant concentrations, feed splits, efficiencies and factors are not recipes or defaults |
| mosaic-map-spec-2024 | literature | The Mosaic Company, Monoammonium Phosphate 11-52-0 Specification Sheet, ©2024, p.1 including limitation below table. https://mosaicco.com/fileLibrary/publicFiles/0-Monoammonium-Phosphate-11-52-0-Specification-Sheet.pdf ; retrieved 2026-10-15. | Producer evidence of commercial nutrient-guarantee basis and incomplete composition disclosure, not actual assay, pure-MAP content or a universal grade |
| us-epa-ap42-gas-2026 | official_guidance | US EPA, AP-42 §1.4 Natural Gas Combustion, retained October 2026 (header 10/26) original, pp.1–3, especially §1.4.3. https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf ; retained original consulted 2026-10-15. | Conditional gas combustion species and source-test checklist only; boiler/furnace factors and default fuel properties are not transferred to a MAP dryer |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General Guide for Life Cycle Assessment, Detailed Guidance, first edition March 2010, physical inventory/allocation context printed p.80 / PDF100, §7.9.3 printed p.257 / PDF277. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf ; retained original consulted 2026-10-15. | Attributional inventory, physical versus allocated burdens, physical causality and residual market-value allocation; collection/calculation protocols are explicit operational requirements of this PCR, not literature default quantities |
