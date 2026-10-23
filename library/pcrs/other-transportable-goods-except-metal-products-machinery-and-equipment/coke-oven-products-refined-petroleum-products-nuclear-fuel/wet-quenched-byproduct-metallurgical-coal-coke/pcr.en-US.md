---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.wet-quenched-byproduct-metallurgical-coal-coke
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
translation_status: canonical
content_maturity: authored_methodology
---

# Wet-quenched metallurgical coal coke from by-product ovens


## 1. Scope and Applicability

This PCR covers accepted blast-furnace metallurgical coke made from coking-coal blends in conventional indirectly heated by-product slot ovens, followed by wet quenching, draining, sizing and bulk dispatch. The foreground includes actual coal handling/preparation, battery operation and fuel firing, wet-quench water recovery, gas cooling/tar separation, ammonia capture as ammonium sulphate, wash-oil absorption/stripping of crude benzol, actually installed gas desulphurisation, utilities, abatement, storage and wastewater handling. EPA Section 12.2.1 and JRC BREF Chapter 5 provide manufacturing evidence; neither establishes a universal configuration or current site performance. [epa-coke-production-2008; jrc-iron-steel-coking-2013]

Exclude petroleum-coke refinery coking, peat or lignite coke, semi-coke, retort carbon, foundry-grade coke, dry quenching and non-recovery/heat-recovery ovens. Exclude downstream tar distillation, BTX refining, gas-to-methanol/hydrogen and coke use in ironmaking. A plant using another ammonia-recovery route, wet-oxidation desulphurisation chemistry, oil-addition coal recipe or dry quenching needs a separately evidenced extension before using this method. Do not splice those operations into the present route.

Actual gas desulphurisation within this subset is either absent or an evidenced absorption/stripping unit with elemental-sulphur recovery. Acid-producing and wet-oxidation desulphurisation routes require a separately reviewed extension; their genuine products must then be inventoried, rather than omitted. [jrc-iron-steel-coking-2013]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.wet-quenched-byproduct-metallurgical-coal-coke |
| classification_refs | CPC 3.0 33110; narrower; context only, independent acceptance required |
| covered_products | wet-quenched blast-furnace coal coke; all actual companion products retained |
| excluded_products | petroleum coke; peat/lignite coke; semi-coke; retort carbon; foundry coke; dry-quench and non-recovery routes |
| representative_product | screened blast-furnace coke in bulk at the coking-plant dispatch gate |
| production_route | coal preparation → by-product coking → wet quench/drain/sizing; raw gas → actual cooling/tar recovery → ammonium sulphate and crude benzol recovery → declared desulphurisation → gas export or internal firing |
| market_state | accepted, cooled bulk product, as-received moisture declared |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply coal-derived coke as reducing agent, heat source and permeable burden support for blast-furnace use; this is a declared product unit, not guaranteed iron output |
| How much | 1 kg accepted net coke at dispatch, as received |
| How well | actual specified size distribution, moisture, ash, carbon/sulphur, strength/reactivity and acceptance test basis |
| How long or cycle | one declared production and dispatch campaign; no service lifetime assumed |
| reference_flow_link | coke_dispatch |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | coke `b9bbfbd4-65fa-4a8b-b19e-37f97ee2bef9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | coal grade/blend and origin; conventional by-product oven and charging method; wet quenching; gas-cleaning process diagram; coke lot/grade/size; received and dry mass/moisture definitions; coal/coke/tar carbon and sulphur bases; NCV/GCV sampling bases; gas wet/dry composition/T/absolute P/Z; internal/exported gas and fuel boundaries; supplier steam state and condensate; campaign/site; stock correction; coproduct receivers; allocation method and unallocated amounts |

Declare all required qualifiers in the dataset metadata, reference comment or equivalent package fields. Missing qualifiers make the reference definition incomplete. The selected coke product is at the coking-plant gate, with coking route and primary Mass/kg reference. Its complete native record explicitly identifies the named secondary 28.2 MJ/kg NCV as an IPCC default and states that no plant-specific coke grade is specified. That documented secondary descriptor does not impose a site calorific grade: this method uses the primary mass reference and does not apply the default energy conversion. Product identity is positively established by the coke name, carbonized-coal/blast-furnace-fuel synonyms, coking route, plant gate and the cited coal-coke definition; it is not inferred from a classification code alone. Only the actually accepted wet-quenched, drained and screened blast-furnace coal-coke subset belongs to this reference. Collect actual lot moisture, NCV/GCV/test bases and supplier quantity/route compatibility before concrete dataset binding; neither a site calorific value nor its dry/as-received test basis is inferred from the secondary property. [ipcc-energy-fuel-definitions-2006; jrc-iron-steel-coking-2013; epa-coke-production-2008]

The reference, inventory denominator and collection/calculation basis are one measured net 1 kg dispatch product mass, independent of any database secondary heating factor. Conditional input/waste identity suggestions with unclarified named grades and NOx aggregate conventions remain unavailable for concrete binding until clarified; they do not replace measured physical exchanges or invalidate the declared mass method. Add compatible identities for actually applicable materials while preserving every physical stream and its measured basis. Scientific methodology acceptance and acceptance of any classification mapping are separate decisions; field-data collection and supplier binding are not claimed complete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | coke_dispatch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg net accepted coke on the declared as-received dispatch basis; weigh with cp_coke and exclude packaging and breeze. Measure moisture on representative dispatch samples and retain the independently derived dry equivalent. All inventory rows and collection aggregation use this same coke denominator. |
| material_bases | coal_charge; coke_dispatch; crude_tar_dispatch; crude_benzol_dispatch; ammonium_sulphate_dispatch | Mass | kg | For each material record as-received mass and water fraction independently; dry mass = wet mass × (1 − wet-basis water fraction). Dry ash-free, dry and received carbon/sulphur/heat bases are distinct; convert using that material’s analysed water/ash, never another material’s moisture. cp_material/cp_products/cp_coke retain samples and methods. |
| gas_bases | cog_export; natural_gas_import; nitrogen_makeup | Mass or Volume, according to verified reference property | kg; m3 | Store measured gas volume with T, absolute P, water fraction, composition and Z. Conversion to a specified dry reference volume follows the documented equation-of-state protocol; conversion to mass uses the same measured composition and state. Do not assume Nm3 temperature or pressure, density or NCV. Self-produced gas gross and internal links remain equal on both ends. |
| packaging_count | sulphate_bags | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Collect the count of the same declared complete empty-bag specification using cp_packaging; if only packaging mass is recorded, derive count using the measured net empty bag mass from actual representative samples, never a database default bag weight. Keep packaging separate from net ammonium sulphate mass. |
| energy_bases | electricity_import; steam_import; natural_gas_import | verified energy property plus independent carrier quantity | MJ; kg; m3 | Keep electricity, fuel chemical energy and net supplied steam enthalpy in separate ledgers. For electricity preserve the actual direct-read property and use 1 kWh = 3.6 MJ. For coal/coke/gas keep NCV and GCV and sampling water basis separate. Steam net heat requires mass × (supply enthalpy − return enthalpy) on the provider boundary including dryness/pressure; unknown basis prevents the background link. |



## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | delivered coking coal and separately metered supplies at the coal-handling inlet; coal washing upstream unless actually included |
| starting_condition_role | foreground_entry |
| product_classification_scope | narrower portion of CPC 3.0 33110; physical coal-coke identity governs |
| recursive_input_rule | purchased same-category coke is a separately weighed external input with its own upstream dataset; internally recycled breeze/dust is an equal physical link, never new production |
| upstream_dataset_requirement | required for delivered coal, each supply and external waste treatment; verify route, property, water/heat/gas and delivery boundary compatibility |
| disclosure | site; campaign; charging; coal preprocessing; wet quench; gas-cleaning diagram; utilities; treatment gates; raw and allocated ledgers; missing identities; capital/transport and cut-offs |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | coking_plant | Confirm the actual site route against the cited manufacturing descriptions and a site diagram. Wet quench excludes a dry-quench gas loop and dry-quench recovered steam/electricity credit. Coal pretreatment includes actual crushing/blending/handling; purchased coal washing is upstream unless physically included and separately collected. | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| boundary_gas | coking_plant | Include actual gas primary cooling, tar separation, ammonia-sulphate recovery, final cooling, selected wash-oil light-oil recovery and installed absorption/stripping desulphurisation. Keep their measured configuration; BREF alternatives do not license mixing unrelated scrubbers/catalysts. Exclude downstream chemical refining at the outgoing gate. | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| boundary_interfaces | coking_plant | The aggregate foreground retains stage measurements and equal internal links for hot coke, raw/clean gas, condensate, flushing/quench liquor, tar residue and lean/rich wash oil. Internal transfers cancel only in the aggregate external-exchange table; do not erase them from the physical process graph or charge a second upstream dataset. Imported versus internally generated heat/gas and flare feed are separately reconciled. | jrc-iron-steel-coking-2013 |
| boundary_water_emissions | coking_plant | Collect quench/cooling net make-up, recycle, evaporation, coke water, bleed and recipient returns independently. Include actual abatement and on-site effluent treatment. Treat externally transferred wastewater as a waste exchange; only actual environmental discharge after the selected treatment endpoint is an elementary emission. Document cooling configuration and abnormal bypasses. | jrc-iron-steel-coking-2013 |
| boundary_upstream | coking_plant | Link each external input to an applicable upstream dataset with independently verified quantity/supply basis. Include actual start-up, shutdown, flaring, off-spec handling and maintenance in the campaign. Disclose initial capital construction and any separately reported transport; no unsupported infrastructure lifetime or exclusions hidden in a yield factor. | jrc-iron-steel-coking-2013 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| coking_plant | Coal preparation, battery, wet quench/sizing and by-product recovery with actual utilities/treatment | required | documented included route | foreground | coke_dispatch |

The foreground is one aggregate unit to retain a single final coke reference. Independently meter the physical stages below; intermediate hot coke is the same product in transit and is not a second final reference output. All cards describe external exchanges; none is a default positive amount.

| Stage | Physical inlet/outlet and retained measurements |
| --- | --- |
| coal | delivered grades → actual crushing/blending/charge; weighing, stock, moisture and recycled tar/sludge |
| battery | charge and indirect firing → hot coke + raw gas; charge/push schedule, fuel, stack and door/lid/offtake release |
| wet_quench | same hot coke → wet cooled coke → drained/sized dispatch and breeze; make-up/recycle/evaporation, dust and product water |
| gas_recovery | raw gas → tar/water separation → sulphate/light-oil recovery → installed desulphurisation; clean gas split to battery/export/flare; lean/rich oil and liquor loops |
| treatment_utilities | actual gas/water control units and supplies → source-resolved outdoor releases, treated return or external waste transfer; sludge fate |

The physical ledger includes total wet combustion/infiltration air (dry O2/N2 and actual humidity), complete wet flue gas and gas losses, all material-bound water, rain/runoff, reaction water, quench slurry/settling-basin stock and sludge removal, condensate and every actual residual. Measure or explicitly model air/exhaust quantities with source-bound composition and uncertainty; dry N2/O2 carrier exhaust is retained in the physical balance even where an LCIA inventory does not characterize it. Never treat an unmeasured balancing flow as zero. Keep species loads as analytical partitions of whole materials, not extra kilograms added to their carrier water/waste or mixtures. [jrc-iron-steel-coking-2013; epa-coke-production-2008]

Maintain a separate physical ledger for every actual supplier container/liner/closure and transport packing, delivery and return, reused stock, maintenance replacement and removed part. Add one atomic row for each actual complete specification or separately handled component; this method does not assume a drum, bag liner or pallet exists. Bundled supplier packing, cleaning, return transport and lifecycle service burdens are counted once at documented provider boundaries; returnable assets are not fabricated net material consumption. Maintenance and capital/service burdens use an evidenced campaign attribution, never an invented furnace count, lifetime or replacement recipe.

### Process: By-product wet-quenched coking plant (`coking_plant`)

#### Inputs

##### Product flows

###### hard coal, coking coal (`coal_charge`)

Use this UUID only for washed/processed main coking coal at the declared coal-washing-plant supply gate, with the named 26.377 MJ/kg NCV grade and its source-authorized water/test basis verified. It is not an unrestricted blend identity. Unclarified named-grade basis prevents binding; separately collect all other real blend components and their upstream delivery/transport gates.

Record each delivered coal grade separately, including purchased blend composition, wet mass, moisture, ash, carbon, sulphur and NCV/GCV bases. This identity covers coking coal, not every other blend component; add individually verified component rows when required. No coal recipe is prescribed.

- Selected flow: hard coal, coking coal `515ad0c8-5bea-4b8b-97cc-851b8450534f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013

###### Alternating current (`electricity_import`)

Use this identity only for CN grid-average consumption mix supplied to the user at measured 1–35 kV; other voltage or supply boundaries need their own verified identity. Separate stage meters and grid losses from the supplier boundary; do not use Korean electricity or a grid-service flow as generic electricity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured actual exchange from cp_utilities per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: jrc-iron-steel-coking-2013

###### natural gas in the gaseous state (`natural_gas_import`)

The native route is compressed processing and pipeline delivery to consumption in compliance with the applicable national gas standard. Confirm that actual route, receiving gate and applicable quality specification. The listed methane CAS does not make this natural-gas mixture pure methane; use actual component fractions, including CO2/N2/H2O, for mass and elemental balances. If the supplier cannot define the reference m3 state, the quantity link is blocked.

Only actual supplementary firing/start-up gas. Meter temperature, absolute pressure, water fraction, composition and compressibility; reconcile supplier reference m3. The secondary mass factor is not a density. Self-produced coke oven gas is an internal link, not this input.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured actual exchange from cp_gas per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_gas
- Sources: jrc-iron-steel-coking-2013

###### supplied steam for coke-oven aspiration and by-product stripping (`steam_import`)

Separate imported steam, self-generated steam, condensate return and vented/retained water. Physical steam mass is collected even where usable enthalpy or an upstream provider is unresolved; no supplier heat is multiplied twice into the same steam mass and thermal service.

Record actual delivered steam pressure, temperature, dryness or superheat, mass and condensate return. No 11.0 or 0.45 MPaG identity is selected without pressure agreement. Use independently measured net delivered enthalpy for a heat background; MJ alone does not prove its basis.

This card represents one external supply header; independently supplied pressure/temperature/dryness states require separate atomic rows and cannot be merged merely because both are steam. No paper-line or deodorisation-specific supply identity is adopted for coke manufacture.

- Selected flow: supplied steam for coke-oven aspiration and by-product stripping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual exchange from cp_utilities per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: jrc-iron-steel-coking-2013

###### Tap water (`supplied_water`)

Only actual supplied treated tap water; net external make-up for coal wetting, wet quench, cooling and washing is stage-resolved. Meter volume is converted using measured density; database secondary conversion is not a site measurement.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_water per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: jrc-iron-steel-coking-2013

###### Wash oil (`coal_tar_wash_oil`)

The name and full comment both specify 33.453 MJ/kg NCV. This grade and its authoritative water/test basis must match the actual coal-tar-distillation oil before binding; the secondary factor is not a default recipe, density or measured loss.

Coal-tar-distillation-derived wash oil make-up only. Record grade, composition, origin, wet mass and regenerative cycle loss. The petroleum classification conflicts with the name/comment/route; supplier clarification is required. Recirculation is not new input.

- Selected flow: Wash oil `5e14a4df-e90c-4654-be3d-988d0d17159c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013

###### petroleum-derived wash oil (`petroleum_wash_oil`)

Only if the actual light-oil absorber uses petroleum wash oil. Keep it separate from coal-tar wash oil; the two evidence descriptions are alternatives, never a fabricated mixed recipe.

- Selected flow: petroleum-derived wash oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: epa-coke-production-2008

###### Sulfuric acid (`sulfuric_acid_input`)

Fresh acid supplied for ammonium sulphate recovery only when its measured supplied mass fraction is 93–98%, as limited by this record. Keep supplied acid solution, pure H2SO4 equivalent and diluted saturator liquor separate; another concentration needs another identity.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: epa-coke-production-2008

###### Sodium hydroxide (`sodium_hydroxide`)

This source explicitly specifies industrial-grade white crystalline solid of 95–98% purity, associated with chlorine production. Require actual purchased solid purity and producer route agreement. Separately record dissolution water and resulting dosing liquor; a purchased dilute caustic solution requires a different verified identity.

Only actual alkaline dosing in the ammonia still or wastewater treatment. Declare supplied form and concentration and verify that the background quantity represents that form, rather than silently treating a solution as pure NaOH.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013

###### Potassium carbonate (`potassium_carbonate`)

The native identity is synthesized K2CO3 powder/crystals, molar mass 138.205 g/mol; it does not represent the complete regenerated scrubber solution. Independently assay purchased salt, water and other actual additives, and retain lean/rich solution inventories.

Only an actually installed carbonate absorption/stripping desulphurisation circuit. Verify site flow diagram, concentration, regeneration and downstream sulphur recovery; do not add wet-oxidation catalysts or their wastewaters to this circuit.

- Selected flow: Potassium carbonate `50187d31-fd0a-47c3-9aa2-84402ffb625e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013

###### Nitrogen (`nitrogen_makeup`)

Only actual inerting/purging make-up gas from air separation. Preserve purity and delivered physical state and convert meter volume with composition/T/P/Z; this is not a dry-quench circulating gas input.

- Selected flow: Nitrogen `67bb2ea6-2fd8-43c5-b227-bca12040b773`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_gas per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_gas
- Sources: jrc-iron-steel-coking-2013

###### Clay (`luting_clay`)

Only actual clay in lid sealing. Record dry mineral and added water separately; this mined-clay record does not represent a formulated luting compound or its transport automatically.

- Selected flow: Clay `226972bf-eeed-4ec4-a22e-f227e582ca18`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: epa-coke-production-2008

###### Woven polypropylene bag (`sulphate_bags`)

Only actual ammonium-sulphate packaging, recorded separately from net sulphate mass. Verify whether the supplied bag includes liners; additional liner material is a separate atomic row. Bulk coke is unpackaged within this route.

Count actual complete bags of one declared specification in items; measure empty-bag mass and record actual capacity, weave, coating, liner, closures and supplier gate. Farm-gate seed packaging does not establish this chemical-product bag identity. No fixed capacity, seed ratio or empty weight is prescribed.

- Selected flow: complete polypropylene woven bag for ammonium-sulphate dispatch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: Measured actual exchange from cp_packaging per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging
- Sources: epa-coke-production-2008

###### silica refractory brick for coke-oven maintenance (`silica_refractory_makeup`)

Record actual maintenance replacement in the selected period, without invented furnace lifetime or replacement rate. Initial capital construction is separately disclosed, not folded into a per-coke brick recipe.

The full broad refractory-brick record explicitly includes silica raw materials and has no opposite manufacturing restriction. Use only actual silica refractory brick replacement with its verified fired grade/composition/provider; high-alumina or magnesia alternatives are not substituted.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013


###### mineral lubricating oil for coke-plant machinery maintenance (`maintenance_lubricating_oil`)

Only when the actual machine maintenance uses mineral lubricating oil. Collect one declared complete supplied formulation, SDS, grade, water, additives, procurement/stock and stage use; synthetic oil or grease needs separate rows. No mineral identity is substituted by insulating oil, solvent or processing aids.

- Selected flow: mineral lubricating oil for coke-plant machinery maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_material per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material
- Sources: jrc-iron-steel-coking-2013

##### Elementary flows

###### river water (`river_abstraction`)

Only direct abstraction from a declared river source, not purchased water. Record source and location, intake, return destination and treatment; avoid counting the same water again through the supplier background.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured actual exchange from cp_water per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: jrc-iron-steel-coking-2013

#### Outputs

##### Product flows

###### metallurgical coke (`coke_dispatch`)

Use the coke product on the Mass/kg basis defined in Section 3, confined to the accepted high-temperature coal-coking, wet-quenched final product at dispatch. The explicitly documented secondary IPCC default does not supply a site heat value, calorific grade, energy conversion or coke yield. Record actual acceptance strength/reactivity tests and methods without inventing CSR/CRI limits.

Accepted blast-furnace-grade wet-quenched coke after draining, sizing and stock reconciliation, as received at the dispatch gate. Exclude coke breeze and packaging; retain dry equivalent and product water separately.

- Selected flow: coke `b9bbfbd4-65fa-4a8b-b19e-37f97ee2bef9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_coke
- Sources: jrc-iron-steel-coking-2013

###### Coke Breeze (`coke_breeze_dispatch`)

This broad manufactured finished-product record expressly includes coke breeze. Use only the actual screened coal-coke fines subset; it does not admit lignite, semi-coke or retort carbon to this PCR. Measure the actual NCV/water basis; no conflicted named calorific grade or secondary energy factor is adopted.

Actual separately recovered/accepted screened coke breeze leaving for another use. Record sieve class, water and receiving process; captured particulate returned internally is not a second sale.

- Selected flow: Coke and semi-coke of coal, or of lignite, retort carbon `7384eff9-1da1-49c8-9d67-1ca70c6fc44f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_products per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_products
- Sources: jrc-iron-steel-coking-2013

###### coke oven gas (`cog_export`)

The native composition percentages are approximate descriptive context, not a fixed recipe or a complete composition. Measure all actual fractions and water, and reconcile moles/mass, C/H/O/N/S and NCV/GCV without renormalizing away unmeasured components. The verified reference is Mass/kg; site volume and any receiving Volume/m3 basis need independently declared P/T/Z and wet/dry definitions.

Only net cleaned coke oven gas crossing the coking-plant boundary. Keep gross production, battery firing, other internal uses, flare feed, leaks and storage changes in the gas ledger; do not normalize volume by an assumed density or heating value.

- Selected flow: coke oven gas `32ab44a2-c912-4c1f-98cf-856a24b3f99a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_gas per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_gas
- Sources: jrc-iron-steel-coking-2013

###### Coal tar (`crude_tar_dispatch`)

The selected name fixes 33.453 MJ/kg NCV and coal carbonisation at the plant gate. Verify the authoritative water/test basis and actual tar grade before binding; neither the source comment nor its secondary value supplies a default assay.

Actual recovered crude coal-carbonisation tar after the declared water separation only. Retain residual water, solids, carbon and sulphur; exclude coal-tar distillation, pitch and downstream creosote. Coordinate the outgoing gate with a receiving tar PCR.

- Selected flow: Coal tar `176de006-c7be-47ad-be03-2ce15e99c6ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_products per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_products
- Sources: jrc-iron-steel-coking-2013

###### Crude benzene (`crude_benzol_dispatch`)

Actual unrefined light oil recovered from coke oven gas, after wash-oil stripping and water separation. Retain measured benzene/toluene/xylene composition; do not count it as pure benzene, cracked gasoline or separately refined BTX.

- Selected flow: Crude benzene `521f59f8-548c-43c8-a6e5-51c11d153cb2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_products per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_products
- Sources: epa-coke-production-2008

###### Ammonium sulfate (`ammonium_sulphate_dispatch`)

Actual saleable ammonium sulphate from gas-ammonia capture with sulphuric acid, crystallisation and drying. Record purity, water and storage; no ammonia solution co-output is presumed for the same captured ammonia.

- Selected flow: Ammonium sulfate `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_products per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_products
- Sources: epa-coke-production-2008

###### Polypropylene bags delivered with ammonium sulphate (`sulphate_packaging_dispatch`)

Record the actual count of the same declared-specification bags leaving with net ammonium sulphate; preserve empty-bag net mass and loaded gross mass independently in the physical balance. The bag is an attached packaging component, not a second bag production or separately revenue-earning co-product; assign no independent allocation share. Reconcile issued, delivered, discarded and stock counts through cp_packaging; any actual discarded packaging requires its own waste row.

- Selected flow: complete polypropylene woven bag for ammonium-sulphate dispatch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`; unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- Amount rule: Measured actual delivered count from cp_packaging per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging
- Sources: epa-coke-production-2008

###### recovered elemental sulphur from coke-oven-gas desulphurisation (`recovered_sulphur_dispatch`)

Only actual elemental sulphur at a documented absorption/stripping and sulphur-recovery outlet; purity, water and destination are required. Rubber-curative records are not adopted as a recovered sulphur specification. No default sulphur yield or simultaneous acid co-product.

Require a verified recovered-elemental-sulphur identity for the actual coke-gas outlet and purity. A native vulcanization-agent route does not establish the recovered product, and a refinery by-product route does not establish coke-gas origin. Keep the physical sulphur output, assay and receiving gate even when its identity is unresolved.

- Selected flow: recovered elemental sulphur from coke-oven-gas desulphurisation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_products per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_products
- Sources: jrc-iron-steel-coking-2013


###### liquid steam condensate returned to the supplying utility (`steam_condensate_return`)

Only actual external condensate return on the same supply/return utility boundary. Measure liquid mass, temperature/pressure, contamination and recipient, retaining heat and water ledgers. An internal condensate loop is an equal internal pipe, not this exchange; no separate sale or allocation share is assumed.

- Selected flow: liquid steam condensate returned to the supplying utility
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_utilities per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources: jrc-iron-steel-coking-2013

##### Waste flows

###### Coal tar, residue (`tar_residue_external`)

The named 31.4 MJ/kg NCV and tar-production origin are binding restrictions, not a generic residue heat value. Clarify water/test basis and actual residue grade before linking; do not infer energy from this secondary factor.

Only residue physically exported from tar separation/storage; quantify wet mass, water, PAH, carbon/sulphur and receiving treatment. Same-period residue returned to coal feed remains in the internal balance, not this exported waste.

- Selected flow: Coal tar, residue `cff6bba8-920e-4f83-9b5e-e36a6db83e10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013

###### spent wash oil from coke-oven light-oil absorption (`spent_wash_oil_external`)

Only a real purge sent to treatment; identify coal-tar/petroleum origin, entrained benzol, water, regeneration history and receiver. Lean oil circulating back to absorption is an internal link.

The generic waste-oil identity has no machining, lubricating or refining origin restriction. Limit it to this actual spent absorber oil with source, water/benzol contamination, hazard state and receiver documented; the broad identity does not establish a treatment dataset.

- Selected flow: Waste oil `e620bc79-43f0-41a8-9589-9b5fe50ffef2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013

###### dewatered biological sludge from coking wastewater treatment (`biosludge_external`)

Only actual external removal; keep dry solids, water, contaminant analyses and receiver. Municipal or paper-mill sludge identities do not establish this origin; sludge recycled to ovens is internally reconciled.

Require a verified generated biological-sludge identity; an ambiguous water-treatment-chemical route cannot be waived by a broad general comment. Measure water/dry solids/PAH and C/H/O/N/S, actual biological origin and recipient acceptance. Do not substitute dry sludge, municipal sludge, return activated sludge or wet-quench sediment.

- Selected flow: dewatered biological sludge from coking wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013

###### captured coal-coke dust sent to waste treatment (`captured_coke_dust_external`)

Only captured solid actually discarded; source stage, composition, moisture and receiver are required. Exclude air emissions and saleable coke breeze. Internal recycling cancels at the aggregate boundary.

- Selected flow: captured coal-coke dust sent to waste treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013

###### coking wastewater transferred to external treatment (`coking_wastewater_external`)

Only liquid actually crossing to an external treatment process. Electrolytic-manganese-residue washing wastewater is incompatible. Do not also report its contents as direct freshwater emissions before treatment.

This broad industrial-wastewater waste flow is linked only when the actual receiving boundary is secondary/tertiary treatment and the measured coke-effluent load/pretreatment is acceptable. Its primary Mass/kg reference does not prescribe pollutant concentrations; convert paired actual volume to mass with measured density and never use it as a direct freshwater emission.

- Selected flow: Wastewater `bc2cd1d5-69d5-42d7-818f-38a69ebb18ef`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_water per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: jrc-iron-steel-coking-2013

###### spent silica refractory brick from coke-oven maintenance (`spent_refractory_external`)

Actual exported maintenance residue; record contamination and receiver rather than assigning a generic recycling credit or fixed replacement lifetime.

- Selected flow: spent silica refractory brick from coke-oven maintenance
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013


###### wet coal-coke sediment slurry from the wet-quench settling basin (`wet_quench_sludge_external`)

Only actual external removal of the complete wet settled coal/coke slurry. Independently measure wet mass, water, dry solids, ash and C/H/O/N/S/PAH, settling origin and receiver. Keep wet-quench sediment separate from dry captured dust, saleable breeze, tar residue and biological sludge. Returned solids/liquor remain paired internal links; unmeasured removal is not zero.

- Selected flow: wet coal-coke sediment slurry from the wet-quench settling basin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013


###### Used lubricating oil (`spent_maintenance_oil_external`)

Only actual spent petroleum-based or synthetic machine lubricant exported as generated. Record source, water/contaminants, mass, stock and recipient; no treatment or recycling credit follows from this identity. Spent absorber wash oil is a distinct exchange.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_waste per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste
- Sources: jrc-iron-steel-coking-2013


###### discarded complete polypropylene woven ammonium-sulphate bag (`discarded_sulphate_bags`)

Only an actually discarded complete bag of the declared specification. Weigh the complete polymer/liner/closure/contaminant assembly and independently retain counts. Reused, returned and delivered bags are distinct fates; no default discard rate or mechanical recycling is presumed.

- Selected flow: discarded complete polypropylene woven ammonium-sulphate bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_packaging per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_packaging
- Sources: jrc-iron-steel-coking-2013

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fossil_air`)

Record stack/flare fossil CO2 and independently reconcile the coal/gas carbon balance; not all coal carbon is oxidised at the coke factory. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### carbon monoxide (fossil) (`co_fossil_air`)

Record actual outdoor fossil CO, separately from coke oven gas composition and CO2. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### methane (fossil) (`ch4_fossil_air`)

Record unburned fossil methane from leaks/combustion/treatment, not a correction flow or methane retained in sold gas. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### Nitrogen oxides (`nox_air`)

Explicitly declare whether the amount is sum of NO and NO2 species masses or NO2-equivalent mass, and verify the receiving inventory/LCIA definition; the native record does not resolve this. Preserve constituent observations in the auxiliary balance ledger. Never emit the aggregate and its same NO/NO2 constituents as duplicate exchanges; N2O remains separate. Unmatched aggregate basis blocks use.

NO+NO2 aggregate only, excluding N2O. Declare whether laboratory mass is species mass or NO2-equivalent and verify agreement with the receiving LCI/LCIA flow; identity Mass/kg alone does not resolve that definition. Do not additionally count NO/NO2. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### nitrous oxide (`n2o_air`)

Only actually assessed N2O from combustion or wastewater nitrogen transformation; keep separate from NOx and document non-detect/missing values. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### sulfur dioxide (`so2_air`)

Use actual SO2 species mass only. A reported SOx total or SO2-equivalent is an auxiliary indicator until species and equivalent convention are documented; do not map an unresolved total directly to SO2 or count it again alongside SO2.

Actual SO2 after abatement, including firing/flare and a documented sulphur-recovery tail gas; no fixed conversion of all coal sulphur to SO2. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### particles (PM2.5) (`pm25_air`)

Measured exclusive fraction ≤2.5 micrometres. Do not add a cumulative PM10 or TSP inventory to these size-resolved masses. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### particles (PM2.5 - PM10) (`pm25_10_air`)

Exclusive fraction >2.5 to ≤10 micrometres, derived only from compatible samples and sampling definitions. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### particles (> PM10) (`pmover10_air`)

Exclusive fraction >10 micrometres; include actual escaped dust from handling/pushing/wet quench, not captured recycled dust. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### benzene (`benzene_air`)

Actual benzene in fugitive/ducted releases; exclude benzene physically retained in crude benzol. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### toluene (`toluene_air`)

Speciated toluene, not toluene diisocyanate. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### xylene (all isomers) (`xylene_air`)

Report the actual sum of xylene isomers without additionally counting the same individual isomers. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: xylene (all isomers) `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### naphthalene (`naphthalene_air`)

Actual naphthalene; exclude material still within recovered tar or absorber circuits. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: naphthalene `fe0acd60-3ddc-11dd-a682-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### phenol (`phenol_air`)

Speciated phenol only; a total-phenols assay cannot be assigned to phenol without method evidence. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### benzo[a]pyrene (`bap_air`)

Speciated BaP including its sampled particle-bound portion; do not treat the PAH total as BaP or delete it because particulate mass was measured. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: benzo[a]pyrene `08a91e70-3ddc-11dd-9221-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### hydrocyanic acid (`hcn_air`)

HCN molecule mass only; cyanide-N or total cyanide reports require analytical speciation and explicit conversion. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: hydrocyanic acid `fe0acd60-3ddc-11dd-a6ba-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### ammonia (`ammonia_air`)

NH3 molecule mass, separate from particulate ammonium and nitrogen-equivalent reports. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### hydrogen sulfide (`h2s_air`)

Actual H2S molecule release, not total sulphur or sulphate. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: hydrogen sulfide `08a91e70-3ddc-11dd-94a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### carbon disulphide (`cs2_air`)

Actual CS2, not dimethyl disulphide or a total reduced sulphur proxy. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: carbon disulphide `08a91e70-3ddc-11dd-9245-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### Carbonyl sulfide (`cos_air`)

Actual COS with CAS 463-58-1, not thiodicarb pesticide candidates. Outdoor air, unspecified subcompartment; preserve stack height/source context and refine the identity for site-specific compartment evidence.

- Selected flow: Carbonyl sulfide `cb28e592-6d08-4cfc-8696-74d788f55175`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_air per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources: epa-coke-production-2008; jrc-iron-steel-coking-2013

###### water vapour (`water_vapour_air`)

Retain incoming atmospheric humidity, injected steam, reaction water and liquid entrainment separately. Gross wet-stack/quench vapour is a measured physical outlet; report the declared net water-consumption calculation separately and do not omit humidity or count the same entrained liquid as both vapour and liquid.

Actual net water vapour escaping wet quench/cooling, with entrainment separated. Closed-loop circulation is not evaporation; reconcile retained coke moisture and steam/condensate. Outdoor air unspecified.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_water per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: jrc-iron-steel-coking-2013

###### phenol (`phenol_freshwater`)

Only speciated phenol after the actual treatment endpoint; total phenols remain an ancillary indicator until speciated. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: phenol `08a91e70-3ddc-11dd-975b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### cyanide (`cyanide_freshwater`)

CN ion mass after treatment, not HCN molecule or cyanide-N; analytical basis and complexed/free cyanide are disclosed. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: cyanide `fe0acd60-3ddc-11dd-a7d8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### ammonium (`ammonium_freshwater`)

NH4 ion mass only; ammonia-N cannot be copied without verified speciation/conversion. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### Thiocyanate, ion (`thiocyanate_freshwater`)

SCN ion mass only, not an organic thiocyanate pesticide or total cyanide. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: thiocyanic acid (-1 ion) `9297b4d6-0776-4c54-a688-3c07e07907ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### nitrate (`nitrate_freshwater`)

NO3 ion mass only; retain measured nitrate-N and lab conversion separately. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### nitrite (`nitrite_freshwater`)

NO2 ion mass only, not nitrogen dioxide gas or nitrate. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: nitrite `08a91e70-3ddc-11dd-96e0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### benzene (`benzene_freshwater`)

Speciated benzene at the treated outlet, not total BTX. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: benzene `08a91e70-3ddc-11dd-9207-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### sulphide ion in treated coking effluent (`sulfide_freshwater`)

The verified species is S²⁻, CAS 18496-25-8, emission to fresh water, Mass/kg. Distinguish analytical total dissolved sulphide, free S²⁻, HS⁻ and H2S using actual pH/speciation and laboratory method; a total assay is not automatically free-ion mass. If HS⁻ or dissolved H2S is actually represented, use its own verified atomic identity, not this ion.

S2- only; total sulphide as S needs analytical speciation. Neither elemental sulphur nor H2S is silently substituted. This row applies only to actual final release to freshwater; an external-treatment transfer is waste, not this emission.

- Selected flow: sulfide `4d9a8790-3ddd-11dd-9066-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### Suspended solids, unspecified (`suspended_solids_water`)

Actual measured TSS with receiving water disclosed; this identity has unspecified-water compartment, not verified freshwater subdivision. Keep TSS as an operational indicator without adding it to species masses or dissolved solids; finer identity is needed when the receiving method requires freshwater.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measured actual exchange from cp_effluent per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_effluent
- Sources: jrc-iron-steel-coking-2013

###### liquid freshwater discharged after treatment (`liquid_water_return`)

Only final liquid discharge to a documented freshwater recipient. Resource-abstraction freshwater UUIDs are rejected for this row. Separate return volume, pollutants, evaporation and external-treatment transfers.

The direct-read classification is emission to freshwater, not a water resource. Preserve the measured liquid return volume and convert to its reference quantity using measured density when needed, with final treatment endpoint and recipient disclosed.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measured actual exchange from cp_water per 1 kg reference flow; preserve the unallocated physical amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_water
- Sources: jrc-iron-steel-coking-2013

Stock reconciliation retains both quantity and embodied burden. Track opening/closing coal, coke, each coproduct, oil/chemical, packing and waste by lot and stage. Opening stock plus receipts/production equals actual dispatch/use/returns/removal plus closing stock, with separate measured or justified loss and uncertainty. Match the dispatch cohort to its production records; preserve opening embodied burden and burdens carried into closing stocks, off-spec material and actual returns before attributing the delivered cohort. Do not divide an unmatched manufacturing period by sold coke or apply a revenue share to erase physical stock changes. Record prices as net gate product prices on one declared mass/energy basis, currency, date and taxes/transport/packing convention; reconcile measured quantities times prices to actual revenue rather than using invoice gross mass.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | coking_plant | Keep the unallocated physical graph and mass/C/H/O/N/S/water/energy ledgers separately from burden allocation. Never multiply the real coke, breeze, gas, tar, benzol, sulphate or recovered sulphur quantities by allocation shares. Internal gas, recycle liquor and residue returns are not saleable co-products at this boundary. Packaging dispatched with a chemical product is an attached physical component with no separate co-product revenue/share; retain its real count/mass and attribute its manufacturing burden only once to that packaged product. | jrc-iron-steel-coking-2013 |
| allocation_direct | coking_plant | Under this authored attributional protocol, first assign independently measured separable processing burdens to their actual products. Document any remaining demonstrable physical causal relationship; mass or calorific allocation is not automatically causal for gas/liquid/solid chemical recovery. Record decisions and evidence through cp_allocation. |  |
| allocation_shared | coking_plant | If separability and physical causality cannot be established, use documented actual campaign net gate revenues for remaining shared burdens, with cp_allocation: share_j = revenue_j / sum revenues of all genuine exported co-products; assigned burden_j = directly attributable burden_j + share_j × residual shared burden. Retain every qualifying product, common pricing units/currency/period and sensitivity to another justified basis. Do not assign a share to an internal gas loop or waste sent for paid treatment. Zero/negative or missing revenues require reviewed resolution, not an invented fraction. |  |
| allocation_export | coking_plant | Exported clean gas, crude tar and crude benzol receive their documented burden at the outgoing gate. Their receiving datasets begin at the same physical state and amount. Do not simultaneously give avoided-product credit and partition the same shared burden; any substitution study is a separate declared scenario. | jrc-iron-steel-coking-2013 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_coke | coking_plant | coke_dispatch | weighing_record | lot; accepted net dispatch mass; opening/closing stock; grade; rejected mass; moisture sample/method; sieve distribution; calibration; start/end date | Calibrated dispatch scale plus accepted stock reconciliation; representative moisture/quality tests; independently preserve dry-equivalent mass | kg | each lot and campaign close | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_material | coking_plant | atomic material inputs | supply_record | row_id; material/grade/CAS if relevant; supplier; lot; net supplied mass; water; concentration; C/H/O/N/S/ash with analytical basis; NCV/GCV methods and bases; stock/returns; stage | Calibrated weighing/stock records and representative lab tests; verify each actual coal component and supplied chemical form; no recipe inferred from a database identity | kg | each delivery and batch | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_products | coking_plant | each exported coproduct | dispatch_record | row_id; lot; grade; actual net gate mass; water/purity; C/H/O/N/S and analytical basis; destination; stock; light-oil composition; acceptance/revenue record | Separate calibrated product meters/weighing and stock correction; analyse tar/benzol water and composition; keep mass distinct from allocated burden | kg | each dispatch/shift | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_gas | coking_plant | atomic gas inputs and cog_export | meter_record | meter/source/stage; raw reading; T; absolute P; water fraction; dry composition; Z method; density method; NCV/GCV; gross clean gas; firing; other internal use; flare; leaks; export; storage | Continuous calibrated gas meters with paired composition/moisture samples and state equations; reconcile each split and supplier reference conditions, not database secondary conversion | kg; m3; MJ | continuous; paired analyses by documented variability | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_utilities | coking_plant | electricity_import; steam_import | meter_record | meter/stage; electricity CN location, grid-average mix, user voltage and kWh; supply/return steam mass; pressure/temp/dryness; condensate; provider enthalpy/system basis; firing boundary; start-up and losses | Calibrated interval electricity/steam meters; reconcile stage totals and imported versus internally generated energy with supplier documentation; obtain enthalpy by documented steam-state calculation | kWh; MJ; kg | continuous or each shift | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_water | coking_plant | water supplies, river, vapour, liquid return and wastewater transfer | water_balance_record | stage; source; air humidity; rain/runoff; intake/make-up; recycle; steam/condensate; coal water; generated reaction water; coke/tar retained water; evaporation; liquid bleed/return; recipient; wastewater treatment endpoint; density; stock | Independent calibrated meters/levels and paired mass/moisture measurements; retain quench/cooling/flush loops and reaction water explicitly; measured water balance with residual uncertainty, not arbitrary closure | kg; m3 | continuous; daily reconciliation | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_waste | coking_plant | each externally transferred waste | transfer_record | row_id; stage/origin; wet mass/volume; dry solids; contaminants/PAH; receiver/treatment; internal returned mass; stock; manifests | Calibrated weighed transfer plus composition/moisture analysis and signed receiver records; independently inventory recycle rather than treating it as external waste | kg; m3 | each transfer and campaign close | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_air | coking_plant | each atmospheric species and size fraction | emission_record | row_id; source/stack height; ducted/diffuse/fugitive; process/load/time; abatement/bypass; species/CAS; gas T/P/wet-dry/O2 reference; concentration and flow; sampling duration; PM fraction/filter/condensable definition; non-detect/LOQ; combustion fuel origin; method | Actual source-specific measurements or a documented source/control-matched estimation model; integrate concentration × matched gas volume over operation and discrete pushes/charges; separate leaks and flare, retain method and uncertainty. Historical EPA/BREF factors are not default values | kg | continuous where available plus representative source/event sampling | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_effluent | coking_plant | each final water species/indicator | analytical_record | row_id; treatment outlet/recipient; volume/time; lab analyte/CAS; ion versus element equivalent; units; dissolved/total; sampling/compositing; concentration; lab conversion; LOQ; sludge split | Paired calibrated outlet volume and representative flow-proportional/composite laboratory sample, matched in time; species-specific analysis; keep COD/BOD/total N/total phenols/PAH totals as auxiliary indicators, not invented species | kg; m3 | documented sampling schedule and campaign integration | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_balances | coking_plant | unallocated physical balances | balance_record | stage graph; matched internal link ids/amounts; all external quantities; all materials/product/waste water/C/H/O/N/S/ash; complete gas composition; actual combustion air/O2/N2/humidity and wet exhaust; quench slurry/sludge; condensate; packing/returns; stocks; NCV/GCV/enthalpy; heat losses; tolerance from uncertainty | Build stage and whole-plant mass/element/energy balances from paired measurements; preserve reactions, oxygen, fuel loops, reaction water and measured or modelled losses; report residuals and their uncertainty instead of assigning them to an invented emission | kg; m3; MJ | daily and campaign close | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |
| cp_packaging | coking_plant | ammonium-sulphate bags | packaging_record | specification; nominal capacity; actual issued and delivered counts; discarded count; stock and returns; net empty-bag mass samples; polypropylene/liner/coating/closure composition and inclusive supplier packing boundary; provider item definition | Count issued bags against procurement and stocks; weigh representative empty bags of the same specification on a calibrated scale, converting packaging mass to count only using those samples; nominal capacity is not bag mass | Item(s); kg | each packaging operation and campaign close | same declared campaign | selected coking-plant packaging stage | per 1 kg reference flow | count records, representative weighing, specification and provider quantity definition |
| cp_allocation | coking_plant | allocation burden ledger | allocation_record | directly attributable burdens; residual shared burdens; every genuine external product quantity; physical causal justification; net gate prices/revenues; basis/unit/currency/period; transfers; decision; sensitivity | Use actual campaign accounts and product acceptance/receiver records; derive shares from a justified measured basis only for residual common burdens; retain complete unallocated ledgers and evidence for each excluded or included product | kg; MJ; currency | one consistent campaign, with price sensitivity | same declared campaign; include start-up/shutdown and abnormal events | selected coke plant and separately identified meters/stages | per 1 kg reference flow | calibration; raw timestamps; chain of custody; paired analytical basis; reconciliation; uncertainty and missing-data disclosure |



### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_normalisation | all inventory rows | Inventory intensity = actual external exchange integrated over the same campaign / accepted net as-received dispatched coke mass in kg. Correct opening/closing stocks and exclude breeze from this denominator; final coke output is 1 kg. Unallocated physical amounts remain attached to the physical graph. | cp_coke; cp_material; cp_packaging; cp_products; cp_gas; cp_utilities; cp_water; cp_waste; cp_air; cp_effluent | per 1 kg reference flow |  |
| gas_state_conversion | cog_export; natural_gas_import; nitrogen_makeup | Dry reference volume = measured wet volume × dry mole fraction × measured absolute P / reference absolute P × reference T / measured T × reference Z / measured Z, with temperatures in kelvin and a declared equation-of-state method. Mass = measured volume × density at the same composition/wet-dry/T/P/Z state. Reject incomplete provider quantity matching. | cp_gas | state-bound gas quantities, then campaign_normalisation |  |
| air_integration | atmospheric emissions except water vapour | Emission mass = sum of matched concentration × gas volume intervals plus independently justified event/fugitive loads; keep raw measurement basis before reference-gas or oxygen corrections. Do not replace the actual gas volume with a BAT limit concentration or default coke-gas yield. Separate exclusive PM bins; subtract cumulative measurements only if sampling definitions/time are compatible and differences are non-negative. | cp_air | species mass per 1 kg reference flow | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| effluent_integration | final water emissions | Species mass = sum of concentration × matched final discharged volume with documented unit conversion. If reported as N, S or a total assay, establish the actual analyte and method-specific conversion first. Only laboratory-speciated ions enter corresponding atomic rows; auxiliary total indicators do not close the elemental balance by assumption. | cp_effluent; cp_water | species mass per 1 kg reference flow | jrc-iron-steel-coking-2013 |
| balance_reconciliation | unallocated physical ledgers | For total mass and each of C/H/O/N/S, external inputs = external outputs + stock change + disclosed residual with measurement/model uncertainty; reactions do not create or destroy mass or elements. Include complete combustion air, humidity and exhaust carriers, all wet materials, products, waste and return interfaces. For the water species ledger alone, record chemically formed/consumed H2O explicitly, alongside incoming humidity and material-bound water. Internal pipes have equal amounts, composition, wet/dry basis and state at paired ends, canceling only at the aggregate boundary. Energy uses one consistent NCV or GCV/reference-state convention with documented conversions: external chemical/thermal/electrical inputs = external chemical/sensible/latent/thermal/electrical outputs + losses + energy-stock change + disclosed reference-state/reaction-energy residual. Coal-derived gas burned inside is counted once within coal input energy, never again as external gas input/export; avoid double-counting latent heat under the chosen calorific convention. Do not close residuals by invented emissions. | cp_balances; cp_gas; cp_water; cp_material; cp_products; cp_utilities; cp_packaging; cp_waste | separate total-mass/C/H/O/N/S/water/energy ledgers with uncertainty | jrc-iron-steel-coking-2013 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_route | coking_plant | Document one actual connected configuration. A BREF alternative or historical single-plant example is not evidence of its presence at the site. | site diagram, operation records and cited original sections |
| dq_completeness | all inventory rows | Every actual external material, fuel, product, waste and emission needs one atomic row. Add distinct actual coal components, treatment chemicals, oils, packaging, maintenance inputs and pollutants when present, with equivalent bilingual units and verified identities. Unmeasured is not zero; non-applicability requires evidence. | meter map, procurement/product/waste accounts and source assessment |
| dq_source_limits | coking_plant | No universal yield, moisture, carbon/sulphur, heating value, quench evaporation or emission default is prescribed. BREF Table 5.2 is explicitly unsuitable for calculations and excludes some diffuse/fugitive/handling releases; the single-plant energy illustration is not a standard balance. EPA historical factors require independent source/control/basis matching if later used. | BREF 5.2.1–5.2.2; EPA 12.2.2 and factor-specific provenance |
| dq_identity | coking_plant | UUID establishes only the declared physical identity/property, not a compatible supplier process dataset. Retain source classification defects and independently verify concentrations, geographical/voltage/supply states and reference quantities. Unknown UUIDs or pressure/state bases remain explicit until resolved. | identity records, analyses and supplier reference definition |


## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | coke_dispatch | Require exactly one accepted final product reference with 1 kg as-received net coke, and identical bilingual denominator, aggregation and formula. Do not hide a verified intermediate UUID or add a fabricated identity to bypass reference checks. |  |
| validate_route | coking_plant | Check coal-coke manufacturing and wet-quench route, actual gas treatment connectivity and supply boundaries; reject petroleum-coke or dry/non-recovery route mixing and unreviewed chemical substitutions. | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| validate_balances | coking_plant | Require source-bound whole-plant and stage mass/C/H/O/N/S/water/energy ledgers before allocation, paired internal links and independently justified residual uncertainty. No generic complete closure tolerance or per-coke recipe is assumed. Missing balances make the concrete dataset incomplete. | jrc-iron-steel-coking-2013 |
| validate_pollutants | coking_plant | Check outdoor air/water versus resource/waste identity, each species/CAS, fossil origin where specified and reference property/unit. Preserve NOx quantity-definition uncertainty separately from identity; exclude N2O from NOx. Do not sum nested PM ranges or compound/total indicator duplicates. Biogenic CO2, if actual biogenic carbon is introduced under a reviewed extension, remains in the LCI irrespective of GHG reporting conventions. | jrc-iron-steel-coking-2013; epa-coke-production-2008 |
| validate_allocation | coking_plant | Confirm each genuine external co-product, direct/shared burden split, matched revenue basis if used and conservation of allocated burden. Preserve physical output amounts and receiving gates without allocation-share scaling. Unresolved zero/negative values, absent prices or causal basis require review. |  |
| validate_readiness | coking_plant | Before using a concrete dataset, resolve all actually applicable empty identities and all supplier quantity/compartment debts, retain missing-data findings and uncertainty. Method compilation/measurement checks do not constitute scientific acceptance, a site survey or validation of an authored dataset. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | actual coal-coke supply at the declared coking gate; allocated companion-product interfaces only with their own verified gates |
| allowed_use | compatible blast-furnace coke procurement/manufacturing LCI with actual route and grade; matched secondary/background use after dataset evidence review |
| excluded_use | petroleum/peat/lignite/semi-coke/retort carbon; dry quench or non-recovery; downstream refining or iron output prediction; default factory inventory from literature |
| required_metadata | reference qualifiers; supplier flow/process pins; gas/steam/electricity basis; route diagram; complete campaign/stock/source records; all coproduct quantities and allocation; receiving states |
| required_quality_disclosure | unallocated balances and residuals; analysed water/carbon/sulphur/heat bases; meter/sampling/LOQ/missing data; route-specific exclusions; unresolved identities; price/causal sensitivity; scientific review state |
| update_trigger | coal/blend/grade or quench/charging change; gas-cleaning chemistry; utility/recipient/provider basis; recovered product gate; allocation market change; new original evidence |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-iron-steel-coking-2013 | official_guidance | European Commission JRC, Iron and Steel Production BREF, 2013, EUR 25521 EN, doi:10.2791/97469; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | Chapter 5 §§5.1.1–5.1.5, printed pp.209–221 (PDF237–249): coal/battery, distinct wet/dry quench, tar/ammonia/light oil and desulphurisation alternatives/water circuits; §§5.2.1–5.2.2 printed pp.225–234 (PDF253–262): source omissions, wastewater/residue and single-plant energy limits. Manufacturing and balance context only, no default amounts. |
| epa-coke-production-2008 | official_guidance | US EPA, AP-42 Section 12.2 Coke Production, May 2008; https://www.epa.gov/sites/default/files/2020-11/documents/c12s02_may08.pdf | §12.2.1.1–12.2.1.4 and Figures12.2-1–3, pp.12.2-1–6; §12.2.1.5–12.2.2 pp.12.2-7–9: conventional byproduct route, wet quench, ammonium sulphate and petroleum wash-oil/crude light-oil recovery, source/emission separation and non-recovery exclusion. Historical US context, no universal percentages, operating conditions or emission factors. |
| ipcc-energy-fuel-definitions-2006 | official_guidance | IPCC 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2, Chapter 1, Tables 1.1–1.2; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_1_Ch1_Introduction.pdf | Table 1.1, printed p.1.14/PDF14: positive high-temperature coal-carbonisation coke-oven/metallurgical-coke definition. Table 1.2, printed p.1.18/PDF18: confirms the referenced secondary NCV is a statistical default, not a site grade. No default NCV, yield, moisture, carbon content or emission factor is adopted. |
