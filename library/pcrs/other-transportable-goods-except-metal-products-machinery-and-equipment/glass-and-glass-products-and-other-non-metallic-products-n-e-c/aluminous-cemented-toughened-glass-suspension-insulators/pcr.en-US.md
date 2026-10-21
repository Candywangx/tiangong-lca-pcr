---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.aluminous-cemented-toughened-glass-suspension-insulators
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Aluminous-cemented toughened-glass suspension insulators

## 1. Scope and Applicability

This attributional PCR covers one complete uncoated ball-and-socket toughened-glass suspension insulator: a hot-pressed thermally toughened silicate-glass dielectric shell, hot-dip galvanized ductile cast-iron cap, hot-dip galvanized forged steel pin, high-strength aluminous/calcium-aluminate cement joint and stainless-steel locking clip, without a sacrificial zinc sleeve. Begin with real separately supplied glassmaking raw materials and actual compatible external cullet; include batching, melting/fining/conditioning, gob shearing/hot pressing, thermal balancing/surface cooling, prescribed thermal shocks, shell inspection, onsite cement preparation and cap/pin assembly, hot cure, required routine tests/marking and unique first quality release of the complete unit. Purchased finished-unit repacking cannot replace this route. [lagranja-insulators-2019; sediver-hvac-2017; jrc-glass-bref-2013]

Exclude bare/unassembled glass shells or discs as terminals, whole insulator strings and line hardware assemblies, porcelain/ceramic/composite insulators, annealed pin-type glass, clevis-and-tongue couplings, malleable-iron caps, phosphor-bronze locking clips, DC-specific/zinc-sleeved variants, RTV-coated glass, ceramic body manufacture, float/safety glazing, other glass articles, onsite metal forging/casting/galvanizing and installation/use/end of life. Purchased prepared components retain their full upstream forming/finishing burdens. An actual additional recipe ingredient, formulation, fuel, cooling medium, chemical treatment or emitted species requires its own atomic exchange and applicability assessment before dataset completion. No omitted actual exchange may hide in zero or an other bundle.

The complete manufacturer originals establish the component assembly and manufacturing terminal; JRC supplies general batch/melt/utility/emission context and adjacent glass counterexamples; ILCD supplies the separately chosen attributional allocation method. This is transparent technical synthesis, not one common SKU, factory, contemporary order or proprietary recipe. Actual glass chemistry, heat supply and manufacturing configuration must be demonstrated by the data producer. Do not transfer any brochure fraction, geometry, strength, leakage distance, coating thickness, recycled content, process setpoint, recipe, density, item mass, yield, emissions factor, lifetime or certification as a universal default. Manufacturing evidence does not establish LCA allocation. Actual post-release packing/storage/handling/dispatch/returns remain an original-cohort service account.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.aluminous-cemented-toughened-glass-suspension-insulators |
| classification_refs | CPC 3.0:37197; narrower complete uncoated cemented suspension-unit subset; no mapping acceptance |
| covered_products | Complete unit specified in section1 |
| excluded_products | Exclude bare/unassembled glass shells or discs as terminals, whole insulator strings and line hardware assemblies, porcelain/ceramic/composite insulators, annealed pin-type glass, clevis-and-tongue couplings, malleable-iron caps, phosphor-bronze locking clips, DC-specific/zinc-sleeved variants, RTV-coated glass, ceramic body manufacture, float/safety glazing, other glass articles, onsite metal forging/casting/galvanizing and installation/use/end of life. Purchased prepared components retain their full upstream forming/finishing burdens. An actual additional recipe ingredient, formulation, fuel, cooling medium, chemical treatment or emitted species requires its own atomic exchange and applicability assessment before dataset completion. No omitted actual exchange may hide in zero or an other bundle. |
| representative_product | First quality-released complete cap-and-pin glass suspension unit |
| production_route | Whole raw batches and compatible cullet → melt/fine/condition → press shell → thermal balance/toughen/shock-test → cement-mix/assemble/hot-cure → routine tests/mark/first release → separate observed cohort services |
| market_state | Uncoated complete mechanically assembled unit at actual cured moisture state; no transport packaging in reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Electrical insulation plus mechanical suspension by the specified complete unit; no complete-string service claim |
| How much | 1 kg net complete unit at unique first quality release |
| How well | Actual declared drawing, coupling, electrical/mechanical specification and all required test records; no generic rating default |
| How long or cycle | One declared manufacture/release cohort; actual later service observation horizon; no assumed service life or functional equivalence by mass alone |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Electrical insulators of glass `aff4fd88-9bdc-4f2f-9563-8dde88975c4c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | drawing and coupling type; glass chemistry and shell geometry; cap ductile-iron grade and zinc finish; forged-steel pin and zinc finish; stainless locking-clip grade; calcium-aluminate cement formulation and hydration state; actual net assembled moisture and mass; no RTV glass-surface coating; no sacrificial zinc sleeve; actual furnace and heat carriers; thermal balancing and cooling medium; cement hot-cure route; all required tests and release gate; site and campaign boundaries; opening and closing exchange history; original release cohort and service horizon; declared specification and service environment |

Native Product identity is a manufactured finished glass electrical insulator at plant; no fixed composition, grade, geography, strength, shell-only state or mass-per-item is specified. Use only for the complete cemented cap-and-pin unit described here, including its actual locking clip; it is not a pure glass disc, a porcelain unit or a whole string. Actual BOM, drawing and release records must confirm the declared complete object and any provider compatibility.

Declare every qualifier in dataset metadata, process notes or reference comments. Missing qualifiers make the actual package incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of actual net assembled kg uniquely first released through cp_release. Include all fitted components and actual cement hydration/free moisture; no guessed kg/item or pure-shell denominator. |
| normalization_once | all inventory rows | actual native extensive property | row unit per kg | Collect only raw unnormalised values. Convert and genuinely attribute numerators before normalize_exchange divides A_j/Q once. Cards and aggregation only cite that one result; Q=0 retains real burden without unit result. |
| native_units | electricity and fuel and fluids | own energy or volume or mass property | MJ; m3; kg | Preserve electricity native MJ, pipeline-gas native m3 and hydraulic-fluid native m3. kWh×3.6 gives MJ once. Measure independent substance/state density and calorific value for separate carrier-mass/heat accounts; no universal Mass/kg rule. |
| rates_counts_geometry | every physical stream | actual extensive quantity | native unit | Integrated gas/liquid volume is not multiplied by time again; only a true rate is integrated. Item(s) and item are one physical unit with factor1. Count-to-mass needs calibrated net assembled weighing by configuration. Drawing-specific nonrectangular geometry cannot use L×W bounding box or a secondary-property density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual whole individual glassmaking supplies and cullet plus complete purchased prepared caps/pins/clips and real auxiliaries/utilities/equipment services |
| starting_condition_role | Substantive raw-material-to-complete-unit manufacture |
| product_classification_scope | Narrower glass electrical-insulator terminal specified in section1 |
| recursive_input_rule | External cullet has supplier/preparation history; internal shell returns cancel only after complete quantity/history reconciliation. Finished bought units do not replace manufacture. |
| upstream_dataset_requirement | Match each actual whole material/component/service to its state grade route geography and gate; one supplied formulation or coated component is purchased once |
| disclosure | Actual batch and assembly BOM; heat/cooling and curing route; first-release basis; stocks and history vectors; allocation; original service cohort and observed horizon |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Include batch receipt/segregation/storage/weighing/mixing, melt/fining/conditioning and gob shearing, mould preparation/hot pressing, thermal balancing/surface cooling and thermal shocks, shell inspection and reject handling, actual calcium-aluminate cement mixing, fitted cap/pin/clip assembly, hot curing, prescribed routine mechanical/electrical/dimensional tests, marking and complete-unit first release. Record all real furnaces, baths, fans/compressors, cooling loops, dust/effluent treatment and inbound freight. Do not copy an annealing-only sheet route or substitute a glass-disc gate. | `lagranja-insulators-2019`; `sediver-hvac-2017`; `jrc-glass-bref-2013` |
| boundary_complete | all inventory rows | Retain all failed/zero-output batches, start/stop, idle/hot hold, cleanup, sampling/destructive tests, rejected shells/assemblies, rework and maintenance. Keep opening/closing raw, WIP, cure-stage partly assembled units and unassigned non-WIP stores, with each exchange inherited burden vector. Internal melt/cullet/water/heat/interstage transfers cancel only after physical and history reconciliation; unknown is not zero. Each actual newly identified supply, reaction species, auxiliary, package or destination requires a separate physically specific row. | `jrc-glass-bref-2013`; `lagranja-insulators-2019` |
| boundary_release | first_release and service | Q includes net complete units once at their first required quality release, including released closing FG. Do not add closing FG as another manufactured output or subtract its manufacturing burden in Bclose. Manufacturing Bclose includes only raw/WIP and unassigned non-WIP stores. Later packing/storage/dispatch, reinspection and returned previously released units do not create new production. Each service account has actual incremental burdens, the original cohort Q and a declared observation horizon; do not use net shipments or current manufacture as its denominator. Rework of a previously released unit requires documented permission under the actual manufacturer procedure or governing specification, a defined post-work test scope and recorded acceptance/disposition. Residual-strength statements for a broken shell do not authorize restoration, reuse or automatic return to accepted stock. Keep failed or shattered units in their actual reject/waste disposition until eligibility is independently established; record every new/removed component, added/removed water and real loss separately, without new Q. | `lagranja-insulators-2019`; `ilcd-allocation-2010` |
| boundary_physical | manufacture and FG and combined boundary | Reconcile whole wet physical mass and relevant Si/Na/K/Ca/Mg/Al/C/N/S/Cl/Fe/Zn/Cr/Ni balances independently from measured real species and reaction extent. Glass carbonate decomposition, cement hydration, free/carry water and atmospheric humidity have separate evidence. A single residual cannot fit two unknowns. COD/VOC/NOx/SOx/total-element/particle-size indicators do not identify molecular masses. FG physical balance is opening FG + first release + actual gross returns + measured real additions = closing FG + gross outward units + waste/removals + real losses; internal manufacturing Q cancels on combination and historic burden remains attached to its cohort. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| boundary_assets | equipment and installed fluids | Maintain unscaled physical assets/new and repaired parts/removals/moisture/installed oil and bath-water stocks separately from current service burden. No fixed machine/mould/refractory life, no kg-per-item guess and no entire machine per kg. An asset service vector uses documented actual service history, remaining service and replacement evidence; already net records receive one stock correction only. Include actual new repairs and old removals, rather than assuming equal dry mass. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| boundary_heat_water | utility control volumes | Preserve native energy/fuel/volume and independent carrier-mass accounts. Purchased hot-water heat, physical carrier supply/return and real temperatures/enthalpies follow the supplier water/energy agreement with no duplicate full provider or water burden. Internal heat recovery and recirculation cancel; steam/condensate/boilers are not presumed. Any actual steam supply or other fuel requires new specific cards and applicability review. Gross air O2/N2/Ar/CO2/humidity and their discharge remain species-resolved without a simultaneous air aggregate. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| boundary_packaging | each separate package material | For each crate/pallet/strap/cover and any actual other material: opening empty + opening attached WIP + opening attached FG + opening reusable stock + new purchases + supplier-included receipt + external returns received + real new repair additions = mutually exclusive closing stocks + gross physical shipments out + separate external returns sent + waste + measured real losses. Preserve wood/moisture and removed-old/added-new repair components. Internal reuse cancels; never scale gross material by economic share, net-Q, automatic coproduct credit or another purchase. Crating short groups does not turn the reference into an installed insulator string. | `lagranja-insulators-2019`; `ilcd-allocation-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete batch glass shell and cemented-unit manufacture | required | All actual stages and nonproductive intervals in boundary_route | foreground | per 1 kg first-released complete net unit |
| service | Observed original-cohort post-release services | required | Actual increments with original Q and observed horizon | foreground | per 1 kg original cohort reference flow |

### Process: Integrated raw-batch to complete-unit manufacture (`manufacture`)

Keep stage-resolved raw quantities and inherited vectors for every operation in boundary_route before cancelling internal flows. All conditionally present cards require actual presence/absence evidence; an actual new material/species/destination needs its own atomic card.

#### Inputs

##### Product flows

###### Glassmaking silica sand (`silica`)

Whole batch sand receipt and consumption; verify contaminants and material losses. Conditional at-plant silica sand identity fixes 0.020–3.350 mm grains. English preparation is crushing/magnetic separation; Chinese is crushing/washing: substantiate the actual preparation against both displays or replace the identity. The broad polymorph synonym list does not establish the actual silica phase, purity, grading or moisture; verify those independently, without a nanoparticle or dissolved-silica substitution.

- Selected flow: silica sand `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Sodium carbonate (`soda`)

Actual whole supplied soda used as flux; supplier assay and impurity water stay in subaccounts. Conditional chemical-plant identity fixes natural-alkali processing and 95% sodium carbonate; CAS497-19-8 supports carbonate. Native carboxylic-acid classification is an isolated taxonomy defect against the coherent name/CAS/comments. Synthetic or metallurgical-recycled soda is not this route; hydrates and free water require assays, and 95% is not a mandated recipe fraction.

- Selected flow: Sodium carbonate `2099dae8-ad14-4496-87eb-d339b26e09f7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Limestone (`limestone`)

Actual limestone ingredient when in the approved batch; determine carbon/carbonate conversion separately. Mass-based foreground limestone identity leaves composition, purity, grade, extraction and provider unspecified. Measure the received whole mineral and actual carbonate, Ca/Mg, carbon and moisture; no assumption of pure calcite, purchased CaO or complete decarbonation follows.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Dolomite (`dolomite`)

Actual dolomite ingredient when used; retain whole mineral supply rather than separate oxide purchases. Native at-plant Product is uncalcined dolomite mineral/rock as glass-batch input; comments give no quantity. Verify received moisture, Ca/Mg carbonate and gangue independently; no calcined dolomite or pure MgO substitution.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Feldspar (`feldspar`)

Actual feldspar ingredient when used; retain both sodium and potassium in the independent element account. Native at-plant alkali-feldspar mineral/sand is a glass-batch raw material. Its comment mentions a typical-recipe estimate, which is not adopted: obtain actual whole-material mass and Na/K/Al/Si/moisture assays. It supplies neither a fixed feldspar mineral phase nor a supplier quantity.

- Selected flow: Feldspar `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous sodium sulfate (`sodium_sulfate`)

Conditional actual fining salt; no fixed dose or assumption that all supplied sulphur becomes SO2. Conditional Product identity is chemically synthesised sodium sulfate at plant, CAS7757-82-6. Anhydrous salt names are compatible; analytical standard solutions and catalyst-tablet synonyms do not permit their substitution. Verify the actual supplied salt, grade and moisture; use no sulphate amount or sulphur partition default.

- Selected flow: Sodium sulfate `6594bc17-3525-4e4d-91f5-a975c47e6867`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Clean sorted silicate-glass cullet for insulator melting (`external_cullet`)

External cullet is a separate actual supplied stream with provenance, composition and preparation burdens. Never relabel internal shell rejects as a new purchase. No internal-only or feed-grade glass UUID applies.

- Selected flow: Clean sorted silicate-glass cullet for insulator melting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Sodium nitrate fining salt (`sodium_nitrate`)

Conditional actual oxidising salt; quantify whole supply and N partition without converting total NOx into one species.

- Selected flow: Sodium nitrate fining salt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Potassium carbonate (`potassium_carbonate`)

Conditional actual potassium flux; require actual recipe and whole supplied grade rather than a universal alkali recipe.

- Selected flow: Potassium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Aluminium oxide glassmaking powder (`alumina`)

Conditional actual alumina input, with phase, purity and particle form measured; do not equate ore or refractory dust with this supply.

- Selected flow: Aluminium oxide glassmaking powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`

###### Tap water (`water`)

Actual fresh municipal supply for batch humidification, cement mixing, thermal-shock baths, cooling and cleaning; submeter each duty and reconcile recycling and effluent. Native Product is treated potable municipal tap supply to household/industrial users, with Mass/kg reference and non-reference Volume meanValue0.001. No geographic field fixes this record, and treatment/provider compatibility remains to be established; this is not raw groundwater, wastewater or steam. Weigh or measure actual liquid density/state for a volume-to-mass conversion rather than adopting the secondary factor as a site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Electricity (`electricity`)

Actual metered power across batching, furnace/boost, feeders, pressing, thermal balancing, cooling-air generation, curing, testing and abatement; distinguish purchased power from internal transfers and recoverable heat. Conditional identity is CN grid-average customer-side 1–35 kV consumption mix, with Net calorific value/MJ as native reference property. A different country, voltage, dedicated generator or contract-specific mix requires compatible replacement. Retain transformers/losses at the correct gate; convert metered kWh to MJ by3.6 once, not to Mass/kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Gaseous natural gas (`natural_gas`)

Actual fuel for the declared melter/forehearth/thermal conditioning or hot curing when fired; preserve measured gas amount, independently derived carrier mass, chemical energy and combustion species. Do not insert a gas boiler by default. Native Product is compressed pipeline-delivered gaseous natural gas at consumption; reference is Volume/m3 and a second Mass property has meanValue1.0. CAS74-82-8 and methane/CNG synonyms identify a methane context, not verified gas purity or density. Verify actual gas composition, pressure, temperature, moisture, calorific basis and supplier route; reject incompatible LNG, coal gas or pure-gas substitution. Do not infer kg/m3 from the secondary property.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Purchased hot-water process heat (`hot_water_heat`)

Conditional actual external hot-water heat for curing. Record supplied/returned water mass and real enthalpy at both states with the supplier agreement. One heat-provider dataset supplies its energy burden; carrier water is a separate physical subledger, not another full heat or potable-water purchase. Internal recovered furnace heat cancels and is not purchased again.

- Selected flow: Purchased hot-water process heat
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`; `jrc-glass-bref-2013`

###### Hot-dip galvanized ductile cast-iron insulator cap (`cap`)

Whole finished purchased cap of the declared drawing; zinc coating, actual surface preparation and markings already embodied upstream are not bought again. Select ductile rather than malleable iron for this route. Ordinary cast iron, pig iron or galvanized steel is not verified as this complete cap.

- Selected flow: Hot-dip galvanized ductile cast-iron insulator cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Hot-dip galvanized forged steel insulator pin (`pin`)

Whole purchased forged pin of the specified ball-and-socket coupling; include actual galvanizing upstream, do not duplicate a zinc-metal purchase. No sacrificial zinc sleeve is in this selected terminal. Native Product describes fabricated steel immersed in molten zinc, including preparation/galvanizing/inspection. It has broad steel-strip/galvanized-iron synonyms and an inconsistent soldering-rod classification; the coherent fabricated-steel HDG comment supports only a conditional finished forged steel pin role. Confirm the actual pin drawing, steel grade, zinc finish and fully burdened component supply; it does not verify an iron casting cap or a bare steel rod.

- Selected flow: Hot-dip galvanized steel parts `8e8a43f9-c970-4aa8-a415-34fc036bae5e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Stainless-steel insulator locking split pin (`locking_clip`)

One actual stainless locking device supplied with each complete unit according to its coupling drawing. This is separate from the load-bearing forged pin. A phosphor-bronze clip, generic textile pin or carbon-steel fastener is not substituted.

- Selected flow: Stainless-steel insulator locking split pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`

###### High-strength calcium-aluminate cement for insulator assembly (`aluminous_cement`)

Whole supplied aluminous hydraulic binder for actual onsite mixing and hot cure. Verify its phase chemistry, grade, additions and supplied moisture; Portland, sulphoaluminate clinker and generic cement records do not establish this identity. Hydration is not dry glass formation.

- Selected flow: High-strength calcium-aluminate cement for insulator assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Graded quartz sand for insulator cement mortar (`cement_sand`)

Conditional separately purchased fine aggregate only if the actual approved cementing recipe contains it. For a whole purchased prepared mortar instead, replace the binder/sand purchases with one specific whole supplied mortar and retain mix water only when actually added.

- Selected flow: Graded quartz sand for insulator cement mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Supplied bituminous insulator-interface paint (`bituminous_paint`)

Conditional actual whole interface formulation applied onsite; supplied solvent/water/solids are subaccounts, not second purchases. Require SDS and application records; do not presume a universal bitumen coat, or count a finish already included in the purchased cap or pin. Actual other formulation needs its own atomic row.

- Selected flow: Supplied bituminous insulator-interface paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Supplied graphite mould-release emulsion (`release_emulsion`)

Conditional whole supplied mould-release product; measure formulation consumed, dilution water and losses. Do not bind a graphite electrode or bare graphite powder to an emulsion; actual onsite compounding requires each purchased ingredient and its actual energy.

- Selected flow: Supplied graphite mould-release emulsion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mfg`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Hydraulic fluid (`hydraulic_fluid`)

Whole actual hydraulic makeup/change serving the press or test equipment. Keep installed stock separate from campaign consumption and from losses assigned to individual sinks. Native engineered hydraulic fluid is whole base oil plus performance additives, mineral or synthetic; reference Volume/m3. Select the actual complete grade and viscosity with supplier records; additives and carrier oil are subaccounts rather than additional purchases. Record installed volume, makeup, leaks and removals; do not assume a water density or a full initial fill every campaign.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `ilcd-allocation-2010`

###### Fired high-alumina furnace-lining brick (`refractory`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Fired high-alumina furnace-lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Machined cast-iron insulator pressing mould (`mould`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Machined cast-iron insulator pressing mould
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Glass tank melting furnace (`melter`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Glass tank melting furnace
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Glass-shell pressing machine (`press`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Glass-shell pressing machine
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Glass-shell thermal-balancing and toughening station (`thermal_station`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Glass-shell thermal-balancing and toughening station
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Cemented-insulator hot-curing station (`curing_station`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Cemented-insulator hot-curing station
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Polyester flue-gas dust filter felt (`filter_felt`)

Record the actual specific asset/material and its composition, condition, supplier, new/repaired additions, installed opening/closing stock, removal and service history. The physical stock ledger uses actual unscaled items and masses; this inventory card carries only the separately justified current cohort service or consumption contribution through asset_service, not a whole machine per kg and not a prescribed life. No generic equipment bundle or cross-material refractory substitution.

- Selected flow: Polyester flue-gas dust filter felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assets`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Liquid water carrier of purchased curing heat (`hot_water_carrier`)

Conditional physical incoming carrier mass under the same heat-provider contract as hot_water_heat; its liquid supply/return state and enthalpy are independently measured. Count the provider burden once; this carrier accounting is not an additional full upstream water or heat purchase.

- Selected flow: Liquid water carrier of purchased curing heat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-glass-bref-2013`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

###### Ambient oxygen (`oxygen_in`)

Track actual gross air-system entry for combustion, forming/cooling, compressed air and ventilation with humidity and composition; equipment energy is separate. No simultaneous whole-air aggregate exchange and its species. Native Elementary identity: CAS7782-44-7; resource from air; Mass/kg. Natural gaseous O2 only; liquid/singlet/isotope synonyms are not measurement evidence. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ambient dinitrogen (`nitrogen_in`)

Track actual gross air-system entry for combustion, forming/cooling, compressed air and ventilation with humidity and composition; equipment energy is separate. No simultaneous whole-air aggregate exchange and its species. Native Elementary identity: CAS7727-37-9; resource from air; Mass/kg. Natural gaseous molecular N2 only; not total nitrogen excluding N2 or supplied liquid nitrogen. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ambient argon (`argon_in`)

Track actual gross air-system entry for combustion, forming/cooling, compressed air and ventilation with humidity and composition; equipment energy is separate. No simultaneous whole-air aggregate exchange and its species. Native Elementary identity: CAS7440-37-1; resource from air; Mass/kg. Natural gaseous argon only; isotope synonyms do not establish an isotope-selected flow. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ambient gaseous carbon dioxide intake (`ambient_co2_in`)

Measured ambient CO2 entering air systems; no new fossil emission or biogenic uptake claim. Resource candidates distinguish fossil/biogenic/land-use origin and do not establish an undifferentiated ambient-mixture identity. Keep the physical origin subledger and corresponding discharge.

- Selected flow: Ambient gaseous carbon dioxide intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Ambient water vapour intake (`humidity_in`)

Actual atmospheric humidity entering air systems; measure temperature/pressure and humidity with the same gross air control volume. Not rain, liquid-water supply, emergy or a guessed water concentration.

- Selected flow: Ambient water vapour intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Complete uncoated toughened-glass suspension insulator (`first_release`)

Unique first release occurs after actual hot cement cure, all required glass-shell thermal-shock controls, routine mechanical/electrical/dimensional inspection and marking. Net assembled mass includes glass, cap, forged pin, cement in its actual hydration/moisture state and stainless clip; exclude transport packaging. No glass-only mass or repeated shipment/test production. Native Product identity is a manufactured finished glass electrical insulator at plant; no fixed composition, grade, geography, strength, shell-only state or mass-per-item is specified. Use only for the complete cemented cap-and-pin unit described here, including its actual locking clip; it is not a pure glass disc, a porcelain unit or a whole string. Actual BOM, drawing and release records must confirm the declared complete object and any provider compatibility.

- Selected flow: Electrical insulators of glass `aff4fd88-9bdc-4f2f-9563-8dde88975c4c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed reference (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `lagranja-insulators-2019`; `sediver-hvac-2017`

###### Liquid cooling water returned to external supplier (`cooling_water_return`)

Only actual outward Product return with measured mass, composition, temperature/enthalpy and supplier water/energy agreement; distinguish heat-carrier return from wastewater and internal recirculation. No assumed steam or condensate boiler loop.

- Selected flow: Liquid cooling water returned to external supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `jrc-glass-bref-2013`; `ilcd-allocation-2010`

##### Waste flows

###### Rejected toughened-glass shell sent offsite (`glass_reject`)

Actual separate offsite glass reject after thermal shocks or pressing defects; internal compatible cullet remains a reconciled transfer, not this export or a second purchase.

- Selected flow: Rejected toughened-glass shell sent offsite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Rejected cemented glass-insulator assembly (`assembly_reject`)

Actual irreparable complete assembly leaving as one treatment waste; retain measured glass/iron/steel/zinc/cement/water composition subaccounts. Do not also export those constituent masses as separate scraps unless physically dismantled.

- Selected flow: Rejected cemented glass-insulator assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Waste calcium-aluminate cement mortar (`cement_reject`)

Actual unused/spilled cured or uncured mortar, with free and hydration water distinguished and treatment state declared; not Portland-concrete demolition aggregate.

- Selected flow: Waste calcium-aluminate cement mortar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Rejected insulator mineral batch (`batch_reject`)

Actual segregated batch spill/reject exported after weighing, including its moisture and composition; return-to-batch is an internal transfer until a real external gate is crossed.

- Selected flow: Rejected insulator mineral batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Captured glass-furnace filter dust (`captured_dust`)

Actual collected filter dust composition and moisture, weighed at removal; suspended glass particles escaping the stack are a different elementary exchange. No saleability or automatic recycling credit is assumed.

- Selected flow: Captured glass-furnace filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Wastewater from glass-insulator manufacture (`effluent`)

Whole actual liquid wastewater sent to one receiving treatment boundary, with suspended/dissolved species, temperature and water mass subaccounts; do not additionally emit its constituents to water at the same gate. Split destinations and materially different streams.

- Selected flow: Wastewater from glass-insulator manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Glass-and-cement wastewater-treatment sludge (`sludge`)

Actual one sludge stream at its measured solids/moisture state and treatment destination; not municipal, paper or digested sludge. Separate a distinct oily sludge if real.

- Selected flow: Glass-and-cement wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Spent polyester dust-filter felt (`spent_felt`)

Actual removed filter medium; adhered captured dust and water need measured subaccounts and cannot also be exported in captured_dust.

- Selected flow: Spent polyester dust-filter felt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Spent high-alumina furnace brick (`spent_refractory`)

Actual removed refractory including attached glass and moisture; distinguish demolition, repair material and loss into the melt, without an assumed equal new/old mass.

- Selected flow: Spent high-alumina furnace brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Scrapped cast-iron pressing mould (`mould_scrap`)

Actual old mould leaving with attachments and condition declared; no economic fraction scales the physical removal.

- Selected flow: Scrapped cast-iron pressing mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Rejected galvanized steel insulator pin (`pin_scrap`)

Actual separately recovered steel pin with zinc coating and adhered cement accounted; not also contained in an exported complete assembly.

- Selected flow: Rejected galvanized steel insulator pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Rejected galvanized ductile-iron insulator cap (`cap_scrap`)

Actual separately recovered cap with zinc/cement subaccounts; keep iron casting distinct from forged steel and the complete assembly.

- Selected flow: Rejected galvanized ductile-iron insulator cap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Rejected stainless-steel locking clip (`clip_scrap`)

Actual separately discarded stainless clip; retain alloy composition and destination without merging it into carbon-steel scrap.

- Selected flow: Rejected stainless-steel locking clip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Spent hydraulic fluid (`oil_waste`)

Actual collected whole spent fluid with water/contamination and destination, separate from leaks into a specific sink and from still-installed stock.

- Selected flow: Spent hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

###### Waste bituminous interface paint (`paint_waste`)

Only actual separately collected whole paint waste; retained solvent/water/solids and its treatment are not also counted as direct emissions.

- Selected flow: Waste bituminous interface paint
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues`
- Sources: `jrc-glass-bref-2013`; `lagranja-insulators-2019`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fuel`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS124-38-9; emission to unspecified air; Mass/kg. Only newly emitted fossil-fuel CO2; no delayed correction, captured product or ambient recirculation. Mineral-carbon CO2 has a separate unresolved row. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### carbon monoxide (fossil) (`carbon_monoxide`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS630-08-0; emission to unspecified air; Mass/kg. Actual newly emitted fossil CO gas only; not purchased carbon monoxide, biogenic CO or an indoor/long-term flow. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### nitrogen monoxide (`nitrogen_monoxide`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS10102-43-9; emission to unspecified air; Mass/kg. Actual NO only. HNO/nitrosyl-hydride and broad synonym noise do not change the CAS-bound species; NOx aggregate or NO2 equivalent is insufficient. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### sulfur dioxide (`sulfur_dioxide`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS7446-09-5; emission to unspecified air; Mass/kg. Actual SO2 gas only; SOx as SO2-equivalent is not SO2 species mass. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### water vapour (`water_vapour`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS7732-18-5; emission to unspecified air; Mass/kg. Actual natural-isotope gas-phase H2O only; liquid/ice/heavy/tritiated and bound-water synonyms are not substitutes. Split reaction, moisture and ambient-humidity origins in subaccounts. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### oxygen (`oxygen_out`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS7782-44-7; emission to unspecified air; Mass/kg. Actual remaining gaseous O2 only; not a consumption proxy, dissolved oxygen, liquid oxygen or a long-term release. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### dinitrogen (`nitrogen_out`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS7727-37-9; emission to unspecified air; Mass/kg. Actual discharged gaseous N2 only; not NOx or total N excluding N2. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### argon (`argon_out`)

Retain actual gross species discharge and its independently measured origins after abatement; no air-aggregate double count. Physical conservation uses the unscaled mass even where an attributed inventory burden is separately partitioned. Native Elementary identity: CAS7440-37-1; emission to unspecified air; Mass/kg. Natural argon discharged to air only; no isotope-selected, supplied product or long-term record. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide from mineral carbonate decomposition (`co2_mineral`)

Measure actual newly released mineral CO2 separately from fuel and ambient CO2; actual reaction extent and carbon closure do not follow from an assumed carbonate oxide recipe. Fossil/land-use/biogenic resource or correction flows cannot silently replace this identity.

- Selected flow: Carbon dioxide from mineral carbonate decomposition
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Nitrogen dioxide gas to air (`nitrogen_dioxide`)

Independent actual NO2 speciation and sampling basis are required; total NOx as NO2 is an indicator only. Inspected CAS10102-44-0 NO2 candidates contain N2O4 synonyms; that unresolved molecular-identity ambiguity is not silently adopted.

- Selected flow: Nitrogen dioxide gas to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen chloride gas to air (`hydrogen_chloride`)

Conditional actual HCl gas from raw/fuel impurities; require source-specific speciation and receiving medium, not total chloride or a purchased hydrochloric acid solution.

- Selected flow: Hydrogen chloride gas to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen fluoride gas to air (`hydrogen_fluoride`)

Conditional actual HF gas from actual inputs; no deliberate fluoride recipe is presumed and total fluorine does not establish this species mass.

- Selected flow: Hydrogen fluoride gas to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Suspended insulator-glass particulate to air (`glass_particulate`)

Actual escaping glass-derived particulate with measured chemical/mineral identity and size distribution; PM10/PM2.5 metrics alone cannot create silica, metal or any molecular mass. Do not bind feed-grade glass or pure quartz from a total-dust result.

- Selected flow: Suspended insulator-glass particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Unchanged ambient carbon dioxide discharged to air (`ambient_co2_out`)

Track discharge of measured entering ambient CO2 without counting it as newly formed fuel/mineral carbon; retain equal-origin physical transfers and actual absorption/reaction separately.

- Selected flow: Unchanged ambient carbon dioxide discharged to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

### Process: Original-cohort post-release services (`service`)

Keep stage-resolved raw quantities and inherited vectors for every operation in boundary_route before cancelling internal flows. All conditionally present cards require actual presence/absence evidence; an actual new material/species/destination needs its own atomic card.

#### Inputs

##### Product flows

###### Electricity for actual post-release service (`service_electricity`)

Actual incremental packing, storage, handling and return-inspection power for the original released cohort and observation horizon; its Q is the original cohort Q, not current-period shipments or reinspection count. Conditional identity is CN grid-average customer-side 1–35 kV consumption mix, with Net calorific value/MJ as native reference property. A different country, voltage, dedicated generator or contract-specific mix requires compatible replacement. Retain transformers/losses at the correct gate; convert metered kWh to MJ by3.6 once, not to Mass/kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Water for actual post-release cleanup (`service_water`)

Only actual extra liquid-water use after first release; retain resulting wastewater/vapour and actual incremental repair materials as separate atomic service rows when present, never reset manufacturing release. Native Product is treated potable municipal tap supply to household/industrial users, with Mass/kg reference and non-reference Volume meanValue0.001. No geographic field fixes this record, and treatment/provider compatibility remains to be established; this is not raw groundwater, wastewater or steam. Weigh or measure actual liquid density/state for a volume-to-mass conversion rather than adopting the secondary factor as a site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### New purchase Wooden insulator transport crate (`crate_purchase`)

New purchase of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Supplier-included receipt Wooden insulator transport crate (`crate_supplier`)

Supplier-included receipt of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### External return received Wooden insulator transport crate (`crate_return_in`)

External return received of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### New purchase Heat-treated wooden transport pallet (`pallet_purchase`)

New purchase of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Supplier-included receipt Heat-treated wooden transport pallet (`pallet_supplier`)

Supplier-included receipt of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### External return received Heat-treated wooden transport pallet (`pallet_return_in`)

External return received of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### New purchase Polypropylene transport strapping (`ppstrap_purchase`)

New purchase of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Supplier-included receipt Polypropylene transport strapping (`ppstrap_supplier`)

Supplier-included receipt of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### External return received Polypropylene transport strapping (`ppstrap_return_in`)

External return received of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### New purchase Polyethylene transport cover film (`pefilm_purchase`)

New purchase of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo. Native Product is polyethylene film, CAS9002-88-4, at-plant mix. Its luggage taxonomy is inconsistent; name/CAS/comments identify PE film and the PET mention is a comparison, not composition. Verify actual film polymer, additives, thickness, supplier and return state; do not substitute PET, agricultural film or mixed packaging.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Supplier-included receipt Polyethylene transport cover film (`pefilm_supplier`)

Supplier-included receipt of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo. Native Product is polyethylene film, CAS9002-88-4, at-plant mix. Its luggage taxonomy is inconsistent; name/CAS/comments identify PE film and the PET mention is a comparison, not composition. Verify actual film polymer, additives, thickness, supplier and return state; do not substitute PET, agricultural film or mixed packaging.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### External return received Polyethylene transport cover film (`pefilm_return_in`)

External return received of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo. Native Product is polyethylene film, CAS9002-88-4, at-plant mix. Its luggage taxonomy is inconsistent; name/CAS/comments identify PE film and the PET mention is a comparison, not composition. Verify actual film polymer, additives, thickness, supplier and return state; do not substitute PET, agricultural film or mixed packaging.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Sawn wood for transport-package repair (`repair_wood`)

Conditional actual fresh sawn repair piece; record species, treatment and moisture, installed package stock and separately removed old wood. Do not buy whole crates again for internal repair.

- Selected flow: Sawn wood for transport-package repair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Steel nail for transport-package repair (`repair_nail`)

Conditional actual separately purchased repair nail; whole newly supplied crates/pallets already include their fasteners and do not cause another nail purchase.

- Selected flow: Steel nail for transport-package repair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross physical shipment Wooden insulator transport crate (`crate_gross_out`)

Gross physical shipment of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Separate external return sent Wooden insulator transport crate (`crate_return_out`)

Separate external return sent of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Gross physical shipment Heat-treated wooden transport pallet (`pallet_gross_out`)

Gross physical shipment of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Separate external return sent Heat-treated wooden transport pallet (`pallet_return_out`)

Separate external return sent of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit.

- Selected flow: Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Gross physical shipment Polypropylene transport strapping (`ppstrap_gross_out`)

Gross physical shipment of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Separate external return sent Polypropylene transport strapping (`ppstrap_return_out`)

Separate external return sent of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Gross physical shipment Polyethylene transport cover film (`pefilm_gross_out`)

Gross physical shipment of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo. Native Product is polyethylene film, CAS9002-88-4, at-plant mix. Its luggage taxonomy is inconsistent; name/CAS/comments identify PE film and the PET mention is a comparison, not composition. Verify actual film polymer, additives, thickness, supplier and return state; do not substitute PET, agricultural film or mixed packaging.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Separate external return sent Polyethylene transport cover film (`pefilm_return_out`)

Separate external return sent of this one package material/article. Preserve complete opening empty/attached-WIP/attached-FG/reusable stocks, mutually exclusive closing stocks, purchases, included receipt, external returns, gross shipment, repair, waste and real moisture/loss ledger under package_balance. Internal reuse cancels; no net-delivery or economic factor scales gross physical mass. Supplier-included packaging is not a second purchase; no automatic coproduct credit. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo. Native Product is polyethylene film, CAS9002-88-4, at-plant mix. Its luggage taxonomy is inconsistent; name/CAS/comments identify PE film and the PET mention is a comparison, not composition. Verify actual film polymer, additives, thickness, supplier and return state; do not substitute PET, agricultural film or mixed packaging.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

##### Waste flows

###### Waste Wooden insulator transport crate (`crate_waste`)

Actual one-material/package waste at measured moisture and contamination state and its real treatment destination; no automatic saleability. Do not also export the same attached material in a complete rejected packed product.

- Selected flow: Waste Wooden insulator transport crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Waste Heat-treated wooden transport pallet (`pallet_waste`)

Actual one-material/package waste at measured moisture and contamination state and its real treatment destination; no automatic saleability. Do not also export the same attached material in a complete rejected packed product.

- Selected flow: Waste Heat-treated wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Waste Polypropylene transport strapping (`ppstrap_waste`)

Actual one-material/package waste at measured moisture and contamination state and its real treatment destination; no automatic saleability. Do not also export the same attached material in a complete rejected packed product. The manufacturer source says plastic strapping, without polymer identity. This card is conditional on actual supplier-confirmed PP strapping; PET, PE or steel requires its own specific verified row, never an assumed PP quantity.

- Selected flow: Waste Polypropylene transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Waste Polyethylene transport cover film (`pefilm_waste`)

Actual one-material/package waste at measured moisture and contamination state and its real treatment destination; no automatic saleability. Do not also export the same attached material in a complete rejected packed product. The manufacturer source says plastic cover without specifying resin. Adopt this PE-film variant only with actual polymer/provider confirmation; no PE-versus-PET inference comes from the packing photo.

- Selected flow: Waste Polyethylene transport cover film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Broken complete glass-insulator unit after first release (`service_broken_unit`)

Actual service-cohort loss/return that remains the same original product identity, not new manufacture. Reconcile net constituent masses, absorbed/added water, dismantled recoveries and real incremental repair; original manufacturing burden remains attached to the original Q and is not erased. This is a reject/scrap output, not an assumed repairable accepted unit. A residual-strength claim does not establish repair or reuse permission. Any separately documented permissible work must retain its governing authorization, new and removed materials/water, post-work tests and actual disposition with the original cohort.

- Selected flow: Broken complete glass-insulator unit after first release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `lagranja-insulators-2019`; `ilcd-allocation-2010`

###### Wastewater from post-release cleanup (`service_effluent`)

Only actual incremental service wastewater, with mass/species/temperature and its receiving treatment boundary; no manufacturing-water reset and no duplicate constituent release.

- Selected flow: Wastewater from post-release cleanup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `ilcd-allocation-2010`

##### Elementary flows

###### Water vapour from post-release service (`service_vapour`)

Only actual additional evaporation at the service horizon. Attribute to the original cohort and reconcile its incremental liquid intake and atmospheric humidity without inventing new product. Native Elementary identity: CAS7732-18-5; emission to unspecified air; Mass/kg. Actual natural-isotope gas-phase H2O only; liquid/ice/heavy/tritiated and bound-water synonyms are not substitutes. Split reaction, moisture and ambient-humidity origins in subaccounts. Confirm actual receiving compartment; use a more specific compatible compartment when known. No species quantity follows from identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and the sole calculation are in section8; no further division.
- Value mode: Calculated foreground (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory attribution | Use this rule only for an explicitly chosen attributional inventory where allocation is necessary. First isolate dedicated shell/assembly/test/services; then physical or virtual subdivision directly assigns recipe materials and fitted components to the actual configuration. Internal cullet and reused packaging are transfers rather than automatic coproducts or avoided-production credits. | `ilcd-allocation-2010` |
| allocation_causality | each remaining exchange | For each still shared exchange identify the determining physical causal relationship and justify evidence: actual batch energy/temperature duty, press/test cycle demand, air-cooling work, heat capacity, occupied storage volume/area and duration or limiting transported mass/volume and distance as appropriate. Different exchanges can require different determinants. A list of possible mass/area/time/price keys or one blanket factor is not a decision; failed/idle/cleanup burdens remain assigned to the responsible production/service cohort. | `ilcd-allocation-2010` |
| allocation_residual | genuine residual shared process burdens | Only after documented subdivision and exchange-specific causality are exhausted allocate the genuine residual by actual same-period market values of real coproducts at the same common process gate and actual condition/quality/moisture/bulk state. Remove additional packaging/transport/conditioning from downstream prices transparently. Do not invent fixed fractions, saleability, negative waste prices as a credit or substitution. Unavailable defensible residual prices/causality remain an uncertainty requiring review. Keep all unscaled physical package, product, waste and asset ledgers independent of this burden partition. | `ilcd-allocation-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first_release | release and calibrated weighing | cohort_id; serial_or_lot; configuration; required_tests; first_release_time; gross_mass; actual_tare; net_assembled_mass; cement_hydration; free_moisture; rejected_count | Weigh complete accepted units excluding packaging using calibrated scales and real tare; link all tests and first release uniquely; repeat tests/shipments/returns retain the original identity. | kg | each release lot | full campaign and opening/closing FG bridge | actual site and configuration | Sum unique net assembled kg as Q; no unit inventory division here. | calibration; tare slips; BOM; test and release record |
| cp_mfg | manufacture | whole raw and assembly supplies | stage-resolved raw material ledger | exchange_id; stage; supplier; whole_formulation; raw_value; raw_unit; timestamp; opening_raw_WIP; closing_raw_WIP; receipts; use; return; spill; assay; moisture; inherited_vector; already_net_flag | Weigh and reconcile actual receipt/use/return/spill and WIP by stage and supplier; preserve whole formulations/components once. Separate nominal recipe, measured assay and reaction evidence. Retain raw unnormalised amounts and stock/history vectors; aggregation references the sole normalize_exchange result per reference flow. | native kg or actual row unit | each lot and transfer | full period including all operating modes | receiving through complete-unit release | per 1 kg reference flow | invoices; weigh slips; batch sheets; BOM; SDS; assay; stock counts |
| cp_utilities | manufacture | each electricity fuel water heat or carrier exchange | raw meters and state observations | exchange_id; duty; meter_start; meter_end; raw_rate; integration_interval; integrated_volume; unit; pressure; temperature; humidity; substance_density; gas_composition; LHV_HHV; supply_return_mass; supply_return_enthalpy; supplier_agreement; opening_closing_fluid; inherited_vector | Submeter all actual duties including nonproductive modes. Preserve measured electricity/gas/water units; integrate only true rates. Measure each substance state independently and reconcile heat-carrier supply/return with the provider contract. Keep raw totals; no A/Q here. Reference the single normalized result after raw conversion and attribution. | MJ; m3; kg; kWh raw | continuous meter and each batch or delivery | full campaign including startup idle cleanup | actual utility/control-volume gates | per 1 kg reference flow | meter calibration; lab gas/density; pressure-temperature records; heat contract |
| cp_species | manufacture | each atmospheric resource and emitted species | speciated gross inlet/outlet sampling | exchange_id; chemical_identity; CAS; isotope; phase; source_origin; medium; location; wet_dry_basis; actual_flow_rate_or_integral; sampling_time; concentration; humidity; temperature; pressure; treatment_in_out; uncertainty; element_ledger | Sample representative actual air/water/solid locations and all operating modes; reconcile units, standard/reference state, moisture, actual exhaust flow and treatment. Measure species independently from total indicators and keep origins separately. Retain raw actual species mass and uncertainty; reference normalize_exchange once for unit result. | kg | continuous or justified mode-resolved sampling | full campaign with failed intervals | same raw physical control volume | per 1 kg reference flow | species analysis; flow calibration; moisture; receiving compartment; independent closure |
| cp_residues | manufacture | each separate waste and destination | waste removal and treatment record | exchange_id; net_wet_mass; dry_solid; free_water; bound_water; composition; attached_material; destination; treatment; transfer_note; internal_return; inherited_vector | Weigh each real separate waste, retained attachments, moisture and receiving route. Distinguish internal cullet, whole rejected assembly and actually dismantled component exports; prevent duplicate constituents. Retain raw gross physical removals and separately attributed vector; reference the sole unit result. | kg | each removal and stock count | full campaign and waste stocks | release of each waste to its actual receiver | per 1 kg reference flow | weigh ticket; analysis; transfer/treatment document; stock reconciliation |
| cp_assets | manufacture | each specific asset lining filter or fluid | physical stock and service-history ledger | asset_id; composition; condition; item_count; net_mass; opening_installed; closing_installed; additions; new_repair_parts; removed_old_parts; installed_fluid; moisture; realized_service; remaining_service_evidence; service_driver; upstream_vector; inherited_vector | Count/weigh actual installed equipment and repair parts, measure actual fluid states, then determine a separately justified service contribution using service history and remaining-capacity evidence. No assumed lifetime or count-to-mass coefficient. Keep physical assets unscaled; asset_service prepares current contribution without unit normalization; reference normalize_exchange once. | item; kg; m3 | each installation change and campaign closure | opening history through remaining service disclosure | Each actual equipment and installed-fluid gate | per 1 kg reference flow | asset register; maintenance log; installed-fluid count; service evidence |
| cp_service | service | actual post-release increments | original-cohort service record | original_cohort_id; original_Q; observation_start_end; opening_closing_FG; gross_shipment; gross_return; repeated_tests; actual_extra_power_water; additional_repair_input; real_mass_change; waste; inherited_vector; governing_permission; postwork_test_scope; postwork_acceptance; actual_disposition; new_and_removed_parts_water | Observe only real incremental services and gross physical product movements over the stated horizon; retain original Q/history and add each actual repair/emission/waste as a specific service exchange. Do not erase added water or losses or treat gross return mass as an original-delivery reversal. Keep raw increments; use original cohort Q in the sole normalize_exchange result per reference flow. Before assigning a returned unit to accepted stock, verify the governing documented permission and actual post-work tests/disposition; otherwise retain reject/waste status. Track each new and removed part and water/state change separately; never infer restored electrical/mechanical fitness from a brochure or visual repair. | actual native row unit | each service and stock change | declared original-cohort service horizon | actual warehouse/packing/handling gates | per 1 kg reference flow | cohort linkage; service meters; dispatch/return documents; FG bridge ; governing permission and post-work test/disposition records |
| cp_pack | service | each crate pallet strap cover and repair piece | gross physical package ledger | package_id; material; condition; moisture; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; purchase; supplier_included; external_return_received; new_repair; closing_mutually_exclusive; gross_shipped_out; external_return_sent; waste; actual_loss; internal_reuse; original_cohort; service_driver; inherited_vector; actual_water_material_in; actual_water_material_out; independently_measured_phase_mass; other_flow_terms_dedup; full_wet_stock_mass | Weigh/count each specific full package/article or repair piece, identify actual polymer/wood/treatment and humidity, reconcile every mutually exclusive stock/movement cell and supplier inclusion. Count-to-mass uses real package weighing, not a brochure or guessed pallet weight. package_balance reconciles raw gross mass without economic scaling; reference one normalize_exchange result only for attributed unit inventory. When actual water uptake/loss or material changes occur beyond already counted package/article or repair receipts/removals, add independently measured X_in and X_out on the respective incoming/outgoing sides. Name every actual added/removed material or water phase as a specific atomic exchange before dataset completion. These extra terms are deduplicated ONLY against other incoming/outgoing flow terms, never against closing stocks. Retained water/repair material stays in BOTH the real inflow and full closing physical mass; the same applies to actual outgoing transfers and opening stocks. Preserve gross quantities and each inherited vector separately, without inventing repair/uptake, forcing dry wood, shrinking mass by a burden share or buying an embodied component twice. | kg | each packing receipt dispatch return repair and closure | full service horizon with opening history | all empty attached and reusable package pools | per 1 kg reference flow | BOM; package weigh slips; moisture; return/repair record; stock census |

The aggregation_rule column states the final reporting basis only; collection_method and raw_fields retain unnormalised raw quantities. Every aggregation references the single calculation below without division at collection.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | Convert each raw quantity to its row native extensive unit once; integrate only a measured rate over its interval. kWh×3.6 gives MJ. For gas/liquid mass use independent density at the actual measured state; fuel heat uses measured LHV/HHV/composition. Separate physical carrier and thermal accounts. No normalization. | raw_value; raw_unit; state; independent_density; calorific_basis; cp_utilities | R_j | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| asset_service | refractory; mould; melter; press; thermal_station; curing_station; filter_felt; hydraulic_fluid | Separate actual physical stock/addition/removal records from service contribution. Assign directly consumed repairs/material to the responsible cohort; partition equipment upstream vectors only by documented actual service and remaining-service evidence with exchange-specific causality. Installed-fluid and carried repair vectors are stock-corrected once; no fixed lifespan or full-asset-per-kg factor. | physical_asset_ledger; upstream_vector; service_driver; cp_assets | R_j | `ilcd-allocation-2010`; `jrc-glass-bref-2013` |
| attribute_inventory | all inventory rows | For each exchange retain R_j and genuine dedicated/virtual-subdivision assignment, then justified physical causality and only genuine residual allocation from section7. A_j = Bopen_j + attributed_current_j - Bclose_j for manufacturing raw/WIP and unassigned non-WIP stores; released closing FG is excluded from Bclose_j. For service A_j is actual incremental vector tied to its original cohort plus its legitimate service stocks. Already-net values are not corrected twice. Gross physical ledgers are independent. | R_j; dedicated_assignment; causal_evidence; residual_price_evidence; Bopen_j; Bclose_j; inherited_vector | A_j | `ilcd-allocation-2010` |
| package_balance | all packaging rows | Opening empty + opening attached WIP + opening attached FG + opening reusable + purchases + supplier-included receipt + external returns received + new repairs = mutually exclusive closing stocks + gross shipments out + separate external returns sent + waste + actual losses. Reconcile each material independently; internal reuse cancels and this equation never divides by Q or scales by economic share. When actual water uptake/loss or material changes occur beyond already counted package/article or repair receipts/removals, add independently measured X_in and X_out on the respective incoming/outgoing sides. Name every actual added/removed material or water phase as a specific atomic exchange before dataset completion. These extra terms are deduplicated ONLY against other incoming/outgoing flow terms, never against closing stocks. Retained water/repair material stays in BOTH the real inflow and full closing physical mass; the same applies to actual outgoing transfers and opening stocks. Preserve gross quantities and each inherited vector separately, without inventing repair/uptake, forcing dry wood, shrinking mass by a burden share or buying an embodied component twice. | opening_stocks; incoming; closing_stocks; gross_outgoing; waste; actual_losses; cp_pack | package_balance_residual | `lagranja-insulators-2019`; `ilcd-allocation-2010` |
| normalize_exchange | all inventory rows | q_j = A_j / Q | A_j; Q; cp_release | q_j | `ilcd-allocation-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

Execute normalize_exchange only when Q>0 and exactly once. The reference output1kg represents the same measured Q; every card and aggregation refers to that result and never redivides. Service uses its original released cohort Q over the stated actual observation horizon. Q=0 keeps real raw burden and cause with no unit result. Gross physical conservation remains unscaled and independent of burden attribution.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every adopted flow and provider | Confirm the complete product and every card native condition with actual BOM/SDS/drawing/provider evidence. A generic family name does not prove composition or manufacturing route; unresolved auxiliaries stay specific and need compatible identity before dataset finalization. | native evidence; BOM; supplier agreement |
| dq_coverage | full campaign and service horizons | No failed/idle/cleanup/rework/stock exchange is dropped; disclose completeness, unknowns, extrapolation and uncertainty by stage/cohort. Future factory quantity requirements are not measured data. | all protocols; operating logs; independent balances |
| dq_reactions | glass and cement and species | Provide independent recipe/assay, phase/reaction extent and actual species evidence. Separate carbonate loss, cement hydration/free water, atmospheric water and physical stock vectors; a closure residual is not two missing measurements. | laboratory phase/species evidence; physical and elemental checks |
| dq_method | source use and attribution | Maintain complete original source context, limitations and contrary examples. Industrial sources support technology only; ILCD supports the stated attributional hierarchy. No brochure number is a factory default. Independent scientific and translation review remain pending. | source locators; allocation decision; uncertainty disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference product and first_release | Verify complete glass/cap/forged-pin/aluminous-cement/stainless-clip BOM, hot cure and all required tests at first release. A pure glass disc, porcelain insulator, unfinished assembly, RTV variant or string fails this boundary even if an electrical-insulator name is similar. | `lagranja-insulators-2019`; `sediver-hvac-2017` |
| validate_basis | all inventory rows | Reference and finished row are1kg of the same complete net assembled product. Verify unique Q from actual release weighing; closing released FG is already in Q. Check every raw→converted→attributed→single A_j/Q link and original-cohort service denominator. Q=0 retains burdens with no unit result. | `ilcd-allocation-2010` |
| validate_native | all flow and unit bindings | Recheck every native CAS/form/route/grade/geography/compartment/property restriction in the consuming card and actual supplier choice. Exact property→unit-group→reference-unit support is required; no latest-version substitution, secondary-density inference or Item(s)-to-kg guess. Unsupported core identity makes guidance unavailable; auxiliaries remain explicit gaps until resolved. | `lagranja-insulators-2019`; `jrc-glass-bref-2013` |
| validate_balance | manufacture FG services and combined control volume | Independently reconcile actual wet physical and relevant elemental balances, reaction/species evidence, WIP/history vectors, complete-assembly and dismantled-waste exclusivity, installed assets/fluids, actual heat-carrier water returns and every package stock/movement cell. Economic allocation changes burden attribution, not gross physical masses; one residual cannot establish multiple unknowns. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| validate_completeness | final dataset and uncertainty | All actual flows and missing measurements must be accounted, including conditional inputs and extra service repairs/species. A not-applicable finding requires evidence of absence; unknowns cannot pass as zero. Schema/projection/finite measurement success does not establish scientific approval, translation approval, classification acceptance or publication. | `jrc-glass-bref-2013`; `ilcd-allocation-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Matched manufacture-to-first-release inventory of complete glass suspension units with disclosed original-cohort services |
| allowed_use | Actual configuration and route compatible supply modelling after data-quality and applicability assessment |
| excluded_use | Bare-shell, porcelain, composite, coating or whole-string substitution; installation/use/end-of-life modelling; unsupported comparative electrical service or certification claims |
| required_metadata | All required qualifiers and complete product/BOM; route; raw/WIP/FG/history and service horizons; native provider compatibility; allocation and original sources |
| required_quality_disclosure | Actual measurements and unknowns by stage/cohort; speciation and independent balances; uncertainty and hold status; no invented factory data |
| update_trigger | Product component/coupling/coating change; batch/furnace/cure route change; material/provider/native identity change; new species or stock data; revised source/method evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| sediver-hvac-2017 | handbook | Sediver. Toughened glass insulators for HVAC applications. C11-2017. https://www.sediver.com/wp-content/uploads/Sediver-toughened-glass-insulators-for-HVAC-applicationsC11-2017-2.pdf | PDF pp3–6 and8: finished suspension-unit technology; hot aluminous cement assembly; tests; profiles and zinc-sleeve/coated counterexamples. Manufacturer claims/values are not defaults. |
| lagranja-insulators-2019 | handbook | La Granja Insulators. Catalogue ES EN 2019. https://www.lagranjainsulators.com/wp-content/uploads/2023/10/Catalogue_LaGranjaInsulators_ES-EN_2019_low-1.pdf | PDF pp10–16 and40–43 and46–47: components; ductile/malleable and locking/sleeve alternatives; RTV counterexample; pressing/tempering/thermal shocks; hot cement cure and routine tests; gross crate/pallet/strap/cover packing. No universal polymer grade or SKU mass adopted. |
| jrc-glass-bref-2013 | official_guidance | European Commission JRC. Best Available Techniques Reference Document for the Manufacture of Glass. 2013. EUR25786 EN. doi:10.2791/69502. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf | Sections2.1–2.3 and2.8 and3.2/3.7: general raw batch/melt/utility/emission completeness and adjacent special-glass counterexamples. Tables2.1/2.2/2.8 and historical cases are not this insulator recipe or quantitative defaults; no LCA allocation evidence. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March2010. Sections7.9.2–7.9.3. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | PDF pp275–288: chosen attributional scenario; dedicated/virtual subdivision; exchange-specific determining physical causality; residual common-gate actual-state contemporaneous market value. Adjacent QFD example is not an insulator share. No industrial recipe/quantity evidence. |
