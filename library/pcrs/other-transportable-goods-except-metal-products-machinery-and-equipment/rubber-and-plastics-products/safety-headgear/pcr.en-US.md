---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.safety-headgear
language: en-US
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Single-shot HDPE industrial safety helmet manufacture with purchased suspension

## 1. Scope and Applicability

This method covers manufacture at a CN site of one declared non-cellular unreinforced industrial safety helmet configuration: receipt of complete natural or pre-coloured UV-stabilised virgin HDPE pellets, actual conditioning, single-shot screw injection moulding, cooling/ejection/trimming and controlled clean internal regrind, assembly with one compatible complete purchased suspension and actually separately supplied sweatband/chinstrap, final acceptance and unique new first quality release. Retain real packaging, storage, handling and dispatch as a linked but separately reported incremental service account for the same original cohort. This is not purchased-finished-helmet repacking. `vitoppe-helmet-manufacturing`; `jsp-evo3-spec-2016`; `ifc-plastic-products-2007`

This is an explicit technical synthesis across independent first-party sources, not a common SKU, recipe, factory or contemporary order. VITOPPE establishes pellet-to-assembly operations; the historical JSP miners model illustrates an HDPE shell and suspension constituents. Its lamp bracket, optional accessories, approximate mass, packaging weight, impact figures, certificate and lifetime are not transferred. Huarong's two-shot rim case is adjacent counterevidence rather than this single-shot recipe. IFC supports non-reactive forming/environmental inventory; ILCD independently supports conditional attributional allocation.

Exclude motorcycle, bicycle, sport, firefighting, military/police or ballistic helmets; bump caps and non-protective headgear; textile hats; ABS/PC or thermoset composite shells; foamed impact liners; two-shot rims; reinforcement/multilayers; thermoformed shells; external recyclate; onsite colour compounding; onsite webbing/suspension manufacture; printing/coating/applied decoration; added lamps, eyewear or earmuffs; purchased-finished-product handling. Do not hide a real extra operation behind an exclusion: review applicability and add complete atomic exchanges first. The actual producer declares acceptance requirements and applicable specifications; this document certifies no product. Mass is a manufacturing declared unit, not equivalence of protection, lifetime or service.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.safety-headgear |
| classification_refs | CPC3.0:36971; narrower route context; no accepted mapping established |
| covered_products | One specified complete single-shot HDPE industrial helmet with purchased suspension |
| excluded_products | Every product and route excluded in section1 |
| representative_product | Configured industrial hard hat; JSP is independent constituent evidence only |
| production_route | Complete HDPE pellet receipt through real single-shot shell manufacture and purchased-suspension assembly to first release; actual post-release services separate |
| market_state | Cooled accepted complete bare helmet at first quality release; detachable transport packaging excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete manufacture of one declared industrial helmet configuration |
| How much | 1 kg newly first-quality-released complete bare helmets |
| How well | Actual drawing and declared material assembly and quality acceptance; no inferred certification or protection equivalence |
| How long or cycle | One complete manufacturing campaign to first release; useful life not quantified |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Safety headgear `89f91a82-ba76-46ea-b587-e5715c72630a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual model and complete configuration; complete supplied HDPE grade and colour stabiliser system; single-shot non-cellular unreinforced route; purchased suspension composition and attachment compatibility; actual separate sweatband and chinstrap inclusion; acceptance drawing tests and real compliance evidence; first-release net mass and independent count; original cohort and original Q_h; opening and closing material WIP and per-exchange inherited vectors; internal regrind thermal history and genealogy; FG stock returns original delivery and incremental rework linkage; manufacturing gate and actual service interval; CN below1kV import gate and provider loss boundary; water-loop and equipment-charge inventories and actual return-water state; complete directional physical ledger for each package article; species particle size phase receiving medium and uncertainty; site period and attributional allocation situation |

All qualifiers must be present in actual dataset metadata, process notes, reference description or equivalent complete consumer-visible fields. The native record establishes finished manufactured headgear at plant and Mass only; it specifies no polymer, supplier, CAS, geography, certification, lifetime or single-item weight. Its official Chinese basename is 安全头套; here the qualified article is a complete industrial helmet. Count never replaces net weighing.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q_h is uniquely new first-release complete-helmet net kg for one original cohort and configuration; collect calibrated weighing with cp_release excluding packaging and reconciling independent count. Same-cohort closing FG is already in Q_h. Only calc_reference divides attributable raw numerators once. |
| count_mass_trace | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | No kg per helmet is prescribed. N_h is raw count trace; any additional count-based view must separately measure same-configuration net mass per helmet with configuration and weighing method, never infer it from JSP approximate mass, package weight, secondary properties or density. All present inventory uses per1kg reference flow directly rather than per-item normalisation. |
| native_units | all inventory rows | Native reference property | kg; MJ | Mass 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg; electricity Net calorific value 93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ. Raw kWh converts to MJ by3.6 exactly. Preserve raw units and conversions; a secondary volume coefficient is not density. |
| zero_output | all inventory rows | Raw exchange vector | raw units | Q_h=0 retains startup/shutdown, failure, idle, cleanup, rework and inherited vectors without a unit result. Integrate only real rates; integrated volume is not multiplied by time again; mass from volume needs independent substance/state density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of complete supplied HDPE pellets and compatible purchased suspension; upstream production and packaging scope explicit |
| starting_condition_role | Raw-material/component supply gate for complete foreground shell manufacture and helmet assembly |
| product_classification_scope | Narrow single-shot HDPE industrial helmet subset of CPC3.0:36971 |
| recursive_input_rule | Purchased finished helmets retain original production burden and do not replace this pellet route; internal regrind and old returns retain genealogy and historical vectors |
| upstream_dataset_requirement | Match complete preparations/components and actual electricity water packaging and treatment; upstream real production cannot be omitted or duplicated |
| disclosure | Declare configuration site period first-release gate actual service interval all separate stock/vector ledgers and provider restrictions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | all processes | This narrow method is only CN-site single-shot non-cellular unreinforced HDPE industrial helmet manufacture with real shell conversion then complete purchased-suspension assembly and new first-release net-mass reference. Exclude motorcycle/bicycle/sport/firefighting/military/ballistic helmets, bump caps, non-protective/textile headgear, ABS/PC/thermoset shells, foam liners, two-shot rims, reinforcement/multilayers, thermoforming, external recyclate, onsite colour compounding or component manufacture, printing/coating/decoration and added lamps/eyewear/earmuffs. Real departures require applicability review and complete recording rather than omission. Sources form an independent technical synthesis rather than one SKU/factory; JSP model weights performance certificates and life are not transferred and protection equivalence is not established. | vitoppe-helmet-manufacturing; jsp-evo3-spec-2016; huarong-helmet-case-2025 |
| boundary_route | manufacture | Collect complete pellet receipt/storage/actual conditioning, screw plastication, fill/pack/cooling/ejection, gate trimming, controlled clean regrind, shell inspection, assembly with the complete purchased suspension, actual sweatband/chinstrap fitting, destructive-test samples, final acceptance and unique new first release. Retain actual machines and all failed/idle/cleanup loads. Internal intermediates cancel in the combined foreground; purchased finished helmets are not this route. | vitoppe-helmet-manufacturing; ifc-plastic-products-2007 |
| boundary_formulation | hdpe_pellets; suspension; sweatband; chinstrap | A whole purchased pellet preparation or component assembly enters once with its actual upstream production. Contained pigment/stabiliser/carrier water, ratchet, straps and clips are nested composition accounts, not extra purchases. Onsite colour/chemical compounding or component manufacture is outside this defined supply route and requires explicit revised applicability and complete individual acquisitions, energy, losses and emissions. A purchase boundary must never erase real upstream production. | vitoppe-helmet-manufacturing; jsp-evo3-spec-2016; ifc-plastic-products-2007 |
| boundary_release | all processes | Q_h is the positive net mass of uniquely newly first-quality-released complete helmets of one configuration and original cohort h. Include same-cohort closing FG within Q_h, never add it again as production. Count N_h is an independent reconciliation record, not a weight conversion. No new Q follows shipment, return, reinspection or repeated release of an already released article. Discarded destructive samples are losses, not released product. | ilcd-general-2010 |
| boundary_carry | all processes | Keep opening/closing raw materials, every WIP/intermediate/regrind cohort, finished goods, water-loop hold-up, equipment-oil inventory and refrigerant charge as separate non-overlapping physical ledgers. Preserve quantity, composition/state and inherited upstream plus foreground vector for EACH exchange. For each cohort assign current actual resource burdens and opening-WIP history to newly completed products or genuinely unfinished closing WIP according to real work; keep failed/idle/rework burdens, never delete them as unburdened scrap. Carried burdens retain the original denominator and are not normalised again. | ilcd-general-2010 |
| boundary_service | supply_services | Keep actual post-release packing, storage, handling and dispatch even for unshipped stock, separately labelled by original cohort h and observed interval. Service-gate unallocated physical mass: opening bare helmets, service-rework WIP, repair-material and water stocks + new internal release transfer + other real inward material transfers across the declared gate + gross external returns received + actual external material and water inputs = corresponding disjoint closing stocks + gross outward bare helmets + separately removed parts and other real outward material returns + wastes, effluents and measured species losses. All outlet terms are disjoint: count each parcel once whether a removed part is a Product return or Waste. Record net mass and measured moisture state at each movement; packaging has its own ledger and components already inside a returned helmet are not additional inputs. Do not output a removed part again when it is already inside whole-helmet waste. Cancel all internal transfers at the combined gate. Old cohorts retain original Q_h and complete histories; reverse corresponding original delivery attribution for real returns and attach actual incremental rework once to that original cohort. Changed physical mass after rework never resets original Q_h or creates another manufacture or allocation of inherited product. | ilcd-general-2010 |
| boundary_rework | supply_services | Record a specific rework only when actual manufacturer instructions, compatible configuration and traceable acceptance evidence permit it; never presume an impacted or damaged helmet is repairable or fit for resupply. Weigh each new suspension, sweatband, chinstrap and every other actual replacement or water input as a separate atomic exchange; separately identify each removed component, liquid effluent, evaporation and other actual outlet with composition and state. Contained constituents remain subledgers. Charge actual additional upstream supply once per new purchased component and distinguish stock issues/returns from purchases. Retain the original cohort total historical vector exchange by exchange and removed-part genealogy; neither rescale/delete old burdens with changed mass nor add their contained vectors again. New material, energy, loss and treatment burdens are service increments for that same original cohort, divided only once by original Q_h through calc_reference. Missing real safety/acceptance evidence remains unresolved or leads to the appropriate treatment; it is no declaration of restored conformity. | jsp-evo3-spec-2016; ilcd-general-2010 |
| boundary_utilities | all processes | The adopted electricity identity is specifically CN grid-average below1kV consumer supply. Match the actual import gate, voltage, geography and provider boundary; count upstream electricity production and distribution losses once and meter actual onsite cooling/compressed-air equipment through its electricity/water. No purchased compressed air, steam, boiler, heat source, fuel, abatement or refrigerant is presumed. Any real additional external utility or fuel requires an individual exchange and applicable production/treatment boundary. | ifc-plastic-products-2007 |
| boundary_water | manufacture | Reconcile physical water-loop/equipment charge inventories independently from product/WIP and packaging. Only actual free water evaporates; non-reactive HDPE moulding creates no assumed reaction or structural water. Actual external heat-exchange water receives a separate gross received/returned parcel balance with temperatures, pressures, enthalpy and supplier water-energy ownership convention. Do not duplicate that parcel as makeup or wastewater; identify real drift, evaporation and blowdown separately. Closed-loop circulation cancels. | ifc-plastic-products-2007 |
| boundary_species | manufacture | Potential n-butane, polymer dust or water vapour cards require real presence, species/form, compartment and measurement evidence. IFC Table4 describes potential releases above recommended upper processing temperature, not normal-operation rates or proof of n-butane isomer. Do not infer species mass from VOC/COD/TOC, convert an unmeasured particle-size fraction to PM2.5, or fit both unknown emissions and water from one mass residual. Add every actual missing material, preparation, species and destination as its own card before a quantitative package is complete; absence evidence differs from unknown. | ifc-plastic-products-2007 |
| boundary_packaging | all processes | For EACH individual package article keep opening empty stock + package attached to WIP/FG + reusable stock + external acquisitions + external returns received = closing equivalents + package accompanying GROSS outward physical shipments + external returns sent + waste. Resin sacks and product cartons/bags/tape have separate ledgers; split stock transitions so attached and empty counts never overlap. Internal reuse cancels; it does not create another purchase, reference-helmet mass, avoided burden or automatic co-product. Physical outgoing mass is never reduced by attribution or net helmet returns. Check upstream included packaging so its manufacture is charged once while retaining physical transfers. | ilcd-general-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete shell manufacture and helmet assembly to first release | required | Complete actual route and equipment loads | Foreground production with separate auxiliary-equipment water/charge accounts | 1 kg new first release |
| supply_services | Actual incremental packing storage handling and dispatch | required | Actual observed interval for original cohorts including unshipped stock | Incremental services separate from manufacture with full FG/package physical ledgers | per 1 kg reference flow |

Each row is one atomic exchange. Include a conditional row only when actually present; genuine absence needs absence evidence and unknown is not zero. Collect raw unnormalised numerators first; cards and collection aggregation reference the same x_ih result from calc_reference once. Services use original-cohort Q_h and a separately labelled interval rather than putting old FG into current new Q. Any real unlisted flow, material, equipment chemical, package or species must be added individually rather than hidden as “other”.

### Process: Complete manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Complete UV-stabilised virgin HDPE pellet formulation (`hdpe_pellets`)

One complete purchased natural or pre-coloured unfilled virgin HDPE formulation, including supplied stabiliser and colour carrier. Weigh net of its sack; never purchase contained ingredients again. A generic PE identity does not establish this complete pellet formulation or safety-grade specification. No recipe or percentage is prescribed. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Complete UV-stabilised virgin HDPE pellet formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `vitoppe-helmet-manufacturing`; `ifc-plastic-products-2007`

###### Helmet suspension harness (`suspension`)

One complete purchased suspension assembly including its declared headband, ratchet/pin adjustment, clips and textile straps; do not repurchase its constituents. Native Product/Mass identity is a purchased component, Generic at plant CN, with suspension/cradle/headband-and-straps/ratchet synonyms, no CAS or composition. Its CN condition is real; it is neither a finished helmet nor proof of attachment count, supplier, approval or this configuration. Require the actual compatible assembly and its upstream burden. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Helmet suspension harness `515e544b-72fc-4dc2-a2e6-e494e00e2f43`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jsp-evo3-spec-2016`; `vitoppe-helmet-manufacturing`

###### Cotton-core polyurethane-coated helmet sweatband (`sweatband`)

Only if this separately purchased complete cotton-core PU-coated sweatband is in the declared configuration and absent from the purchased suspension bill. Its cotton core and coating are composition subaccounts, not extra purchases. JSP supports a concrete constituent example, not this SKU or a required universal component. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Cotton-core polyurethane-coated helmet sweatband
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jsp-evo3-spec-2016`

###### Polyester-webbing helmet chinstrap assembly (`chinstrap`)

Conditional complete purchased polyester-webbing chinstrap with its buckles/attachments, when actually fitted and not already in the suspension purchase. Declare actual material, fit and fastening configuration; other strap construction requires a separate precise identity. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyester-webbing helmet chinstrap assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `vitoppe-helmet-manufacturing`

###### Alternating current (`production_electricity`)

Meter actual conditioning, screw/heaters, clamp, cooling pumps/chiller, extraction, compressor, trim, tests and all failed/idle/cleanup operations. Native Product flow is CN grid-average consumer supply below1kV; geography.locationOfSupply is CN. Reference Net calorific value is an energy property in MJ, not fuel mass. Do not treat it as geography-free, renewable-specific, higher-voltage, onsite generation or a transformation service. Match the actual low-voltage import gate and upstream provider; reconcile branch loads and real distribution losses once. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `ifc-plastic-products-2007`

###### Purchased liquid cooling-water makeup (`cooling_makeup`)

Actual externally supplied liquid water for the cooling loop, including its declared water quality and treatment. Internal circulation is not another input. Keep opening/closing loop hold-up, gross external water return and actual blowdown/evaporation separately; density requires this water state evidence. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Purchased liquid cooling-water makeup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Externally supplied liquid heat-exchange water (`external_cooling_supply`)

Only a real externally supplied heat-exchange water parcel with an actual contractual water return. Record gross received mass separately from true loop makeup, with supply/return temperature pressure enthalpy and supplier water/energy convention. Do not infer steam, condensate or boiler; never charge the same parcel again as makeup. Match external_cooling_return and the independent loop-stock ledger. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Externally supplied liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Purchased liquid equipment-cleaning water (`cleaning_water`)

Only actual wet equipment cleaning or aqueous testing, with a separate water-use record. Do not presume a wet route from a dry-cleaned mould. Do not duplicate cooling-loop makeup or formulation carrier water. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Purchased liquid equipment-cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Mineral hydraulic oil formulation (`hydraulic_oil`)

Only actual hydraulic equipment: whole supplied mineral hydraulic oil with its additive package, grade and charge/replacement records. Track tank opening/closing inventory, leaks, recovered oil and spent oil separately; density is independently measured for the actual oil and state. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Mineral hydraulic oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### Cellulose equipment-cleaning wipe (`cleaning_wipe`)

Actual dry cellulose wipe consumed in equipment cleaning. Record any separately applied real cleaning preparation as a separate whole purchased formulation after applicability review; a wipe is not a licence to hide solvents. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Cellulose equipment-cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### 1,1,1,2-Tetrafluoroethane refrigerant (`r134a_charge`)

Only if a real cooling circuit contains R134a. Keep purchase, opening/closing equipment charge, recovered return and species-specific loss in one charge ledger; no refrigerant or leakage factor is assumed. Other refrigerants require separate chemical identities. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### Polyethylene resin sack (`resin_sack`)

Actual single PE feed sack received with pellets, separate from net resin. Match the upstream provider inclusion so manufacture of this sack is charged once, retaining full physical mass in any case. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_feed_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed_packaging`
- Sources: `ilcd-general-2010`

###### Polyethylene resin sack (`resin_sack_return_in`)

Actual external return of the same PE sack article into the foreground; preserve its original manufacture burden and ownership, not a new sack purchase. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_feed_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed_packaging`
- Sources: `ilcd-general-2010`

#### Outputs

##### Product flows

###### Recovered 1,1,1,2-tetrafluoroethane (`recovered_r134a`)

Only actual recovered R134a sent externally, with purity, state, ownership and destination. This is a physical return, not an automatic co-product or avoided production credit. Do not also classify the same mass as an atmospheric leak or waste. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Recovered 1,1,1,2-tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_aux.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_aux`
- Sources: `ifc-plastic-products-2007`

###### Returned liquid heat-exchange water (`external_cooling_return`)

Only when actual external water supply is returned as a product/service parcel. Record gross mass, temperatures, pressure and enthalpy at both ends and supplier water/energy convention; not presumed condensate or steam. Do not double-count the same parcel as makeup, wastewater or a heat product. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Returned liquid heat-exchange water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Safety headgear (`first_release`)

Unique new first quality release of the complete configured helmet, net of detachable packaging; Q is measured kg, and same-cohort closing FG is already in Q. Native Product/Mass record is finished manufactured safety headgear, production mix at plant, with no CAS, specified polymer, supplier, certification, service life or locationOfSupply. Its official Chinese basename is 安全头套; the actual article here is a complete industrial helmet. Neither the generic name nor CPC establishes performance or count-to-mass conversion. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Safety headgear `89f91a82-ba76-46ea-b587-e5715c72630a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `vitoppe-helmet-manufacturing`; `jsp-evo3-spec-2016`

###### Polyethylene resin sack (`resin_sack_return`)

Actual reusable PE feed sacks returned externally; record gross outward mass, receiver and ownership, with no credit or new purchase from internal reuse. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_feed_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed_packaging`
- Sources: `ilcd-general-2010`

##### Waste flows

###### Rejected HDPE shell and sprue (`hdpe_scrap`)

One segregated HDPE stream actually leaving the foreground as waste; distinguish clean internal regrind retained inside the process from rejected contaminated/scorched scrap. Preserve thermal history and burden genealogy. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Rejected HDPE shell and sprue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Rejected assembled industrial helmet (`helmet_reject`)

One actually discarded complete assembled helmet with its measured composition, destructive-test history and receiving treatment. Recovering separate materials is a different actual operation; never label test destruction as new first release. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Rejected assembled industrial helmet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_release.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `ifc-plastic-products-2007`

###### Spent mineral hydraulic oil (`spent_oil`)

Actual spent oil with measured contamination and liquid state, separate from supply/recovered oil. No assumed 50-percent oil or other native waste recipe is accepted. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Used cellulose equipment-cleaning wipe (`used_wipe`)

One used cellulose wipe with actual captured oil/polymer/water content and hazardousness; do not also report its captured constituents as separate external waste mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Used cellulose equipment-cleaning wipe
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `ifc-plastic-products-2007`

###### Cooling-loop blowdown wastewater (`cooling_blowdown`)

Only actual external liquid wastewater from the water loop with composition, receiving sewer/treatment and temperature; distinguish clean contractual product return and loop storage. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Cooling-loop blowdown wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Equipment-washing wastewater (`wash_effluent`)

Only actual wet-cleaning effluent to its receiving treatment. Retain measured species and solids as nested composition; COD/TOC/oil-and-grease are indicators, not identified molecular mass or additional duplicate whole effluent. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Equipment-washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `ifc-plastic-products-2007`

###### Waste polyethylene resin sack (`resin_sack_waste`)

Actual discarded feed sack with residual resin quantified as contained composition. No second disposal of the contained same resin mass. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste polyethylene resin sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_feed_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_feed_packaging`
- Sources: `ifc-plastic-products-2007`

##### Elementary flows

###### Water vapour to outdoor air (`water_vapour`)

Only actual evaporation from the declared cooling/conditioning operation. Distinguish free-water evaporation from moisture retained in product/WIP and liquid drift; no reaction-water generation is assumed in this non-reactive route. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastic-products-2007`

###### Polyethylene particulate matter to outdoor air (`pe_dust`)

Only actual escaped polymer dust, with polymer identity, measured particle distribution and outdoor compartment. Do not substitute a fixed PM2.5/PM10 or indoor flow without that evidence; captured dust remains internal or a separately measured waste. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene particulate matter to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastic-products-2007`

###### n-Butane to outdoor air (`n_butane`)

Conditional only after actual speciation establishes n-butane (CAS106-97-8) and its outdoor release; IFC high-temperature examples do not establish isomer, presence or quantity. Keep VOC total as an indicator and add every other actually identified species separately. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: n-Butane to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastic-products-2007`

###### 1,1,1,2-Tetrafluoroethane to outdoor air (`r134a_air`)

Only actual R134a release from an identified circuit. Measure or independently reconcile the single charge balance with uncertainties; do not use the same mass as recovered refrigerant, unlocated loss or another species. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: 1,1,1,2-Tetrafluoroethane to outdoor air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_species.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `ifc-plastic-products-2007`

### Process: Actual post-release services (`supply_services`)

#### Inputs

##### Product flows

###### Safety headgear (`released_transfer`)

Internal transfer of the same first-release cohort into the service account; cancel exactly with manufacturing transfer at the combined gate, carrying its complete existing exchange vector rather than another purchase. Native Product/Mass identity is finished manufactured safety headgear in production mix at plant; no fixed material, supplier, CAS, geography.locationOfSupply, performance, service life or single-item weight. The official Chinese basename is 安全头套. Preserve actual configuration and historical quality state; this UUID does not make a returned or rejected article newly acceptable. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Safety headgear `89f91a82-ba76-46ea-b587-e5715c72630a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Safety headgear (`returned_helmet`)

Actual previously externally dispatched complete helmet returned to the site, linked to original delivery, original release Q_h and original per-exchange burden vector; reverse original dispatch attribution where appropriate. Reinspection and reshipment produce no new Q. Measure net mass and moisture state independently at receipt and reshipment. Only actual rework permitted under boundary_rework introduces separate new parts and separately removed parts or real water/species destinations; never erase their difference with the original mass or reset original Q_h. Native Product/Mass identity is finished manufactured safety headgear in production mix at plant; no fixed material, supplier, CAS, geography.locationOfSupply, performance, service life or single-item weight. The official Chinese basename is 安全头套. Preserve actual configuration and historical quality state; this UUID does not make a returned or rejected article newly acceptable. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Safety headgear `89f91a82-ba76-46ea-b587-e5715c72630a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Helmet suspension harness (`repair_suspension`)

Only an actual additional complete compatible suspension for original-cohort rework permitted by manufacturer instructions and real acceptance evidence. Weigh it separately and charge new upstream supply once; the old component inside the received helmet is not another input and replacement is not new first release. One complete purchased suspension assembly including its declared headband, ratchet/pin adjustment, clips and textile straps; do not repurchase its constituents. Native Product/Mass identity is a purchased component, Generic at plant CN, with suspension/cradle/headband-and-straps/ratchet synonyms, no CAS or composition. Its CN condition is real; it is neither a finished helmet nor proof of attachment count, supplier, approval or this configuration. Require the actual compatible assembly and its upstream burden. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Helmet suspension harness `515e544b-72fc-4dc2-a2e6-e494e00e2f43`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `jsp-evo3-spec-2016`; `vitoppe-helmet-manufacturing`

###### Alternating current (`service_electricity`)

Only actual incremental packing/storage/handling/test and permitted-rework service electricity for the declared cohort and interval, including unshipped FG; preserve older cohort denominators and separate it from manufacturing. Native Product flow is CN grid-average consumer supply below1kV; geography.locationOfSupply is CN. Reference Net calorific value is an energy property in MJ, not fuel mass. Do not treat it as geography-free, renewable-specific, higher-voltage, onsite generation or a transformation service. Match the actual low-voltage import gate and upstream provider; reconcile branch loads and real distribution losses once. Reference unit group: Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`; reference unit MJ.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_service_energy.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_energy`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton`)

Actual external acquisition, including packaging of unshipped FG; do not substitute consumption for purchases or ownership transfers. This is one complete actual corrugated board carton including its supplied board adhesive construction. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_external_return_in`)

Only actual return of this same usable article received from outside, retaining its original burden and ownership. This is one complete actual corrugated board carton including its supplied board adhesive construction. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE individual helmet bag (`bag`)

Actual external acquisition, including packaging of unshipped FG; do not substitute consumption for purchases or ownership transfers. This is one actual supplied LDPE bag preparation including its contained additives. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE individual helmet bag (`bag_external_return_in`)

Only actual return of this same usable article received from outside, retaining its original burden and ownership. This is one actual supplied LDPE bag preparation including its contained additives. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`tape`)

Actual external acquisition, including packaging of unshipped FG; do not substitute consumption for purchases or ownership transfers. This is one complete purchased BOPP-backed acrylic adhesive tape preparation. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP acrylic carton-sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`tape_external_return_in`)

Only actual return of this same usable article received from outside, retaining its original burden and ownership. This is one complete purchased BOPP-backed acrylic adhesive tape preparation. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP acrylic carton-sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

#### Outputs

##### Product flows

###### Safety headgear (`gross_helmet_dispatch`)

Gross actual outward physical helmets including reshipments, separate destination records and reverse-delivery ledger. Preserve the full physical shipped mass before any burden allocation. This is dispatch, not first release. Native Product/Mass identity is finished manufactured safety headgear in production mix at plant; no fixed material, supplier, CAS, geography.locationOfSupply, performance, service life or single-item weight. The official Chinese basename is 安全头套. Preserve actual configuration and historical quality state; this UUID does not make a returned or rejected article newly acceptable. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Safety headgear `89f91a82-ba76-46ea-b587-e5715c72630a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_gross_shipped`)

Full actual mass of this article accompanying gross physical outward helmet shipments, including reshipments and shipments of old FG; do not reduce mass by economic allocation or net returned product. This is one complete actual corrugated board carton including its supplied board adhesive construction. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Corrugated shipping carton (`carton_external_return_out`)

Only actual external return of this usable article without a helmet shipment; retain separate receiver/destination and ownership. This is one complete actual corrugated board carton including its supplied board adhesive construction. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE individual helmet bag (`bag_gross_shipped`)

Full actual mass of this article accompanying gross physical outward helmet shipments, including reshipments and shipments of old FG; do not reduce mass by economic allocation or net returned product. This is one actual supplied LDPE bag preparation including its contained additives. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### LDPE individual helmet bag (`bag_external_return_out`)

Only actual external return of this usable article without a helmet shipment; retain separate receiver/destination and ownership. This is one actual supplied LDPE bag preparation including its contained additives. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Native Product/Mass PE bag identity has CAS9002-88-4, PE-bag synonyms and empty geography; it does not specify production/consumption mix, plant gate, bag grade, LDPE/HDPE branch, thickness, construction, process route or supplier. This permits the qualified PE article only after actual sack/bag specification and provider match; it proves no grade or density. Retain this physical article on return and shipment without creating a new purchase. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`tape_gross_shipped`)

Full actual mass of this article accompanying gross physical outward helmet shipments, including reshipments and shipments of old FG; do not reduce mass by economic allocation or net returned product. This is one complete purchased BOPP-backed acrylic adhesive tape preparation. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP acrylic carton-sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### BOPP acrylic carton-sealing tape (`tape_external_return_out`)

Only actual external return of this usable article without a helmet shipment; retain separate receiver/destination and ownership. This is one complete purchased BOPP-backed acrylic adhesive tape preparation. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: BOPP acrylic carton-sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

##### Waste flows

###### Removed waste suspension assembly (`removed_suspension`)

Only the complete old suspension actually removed for treatment during permitted rework of the same original cohort. Measure net mass, moisture, composition and destination, retaining component genealogy without adding again the history already within the original helmet vector. This is not whole-helmet service_reject and does not reuse the new component Product UUID; a real usable-component external return requires its own specific Product direction instead of presumed waste. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste helmet suspension assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `jsp-evo3-spec-2016`; `ilcd-general-2010`

###### Rejected assembled industrial helmet (`service_reject`)

Actual post-release damage or returned helmet discarded, linked to original cohort and incremental service/rework burdens; not another manufacturing reject or negative new output. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Rejected assembled industrial helmet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_fg.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fg`
- Sources: `ilcd-general-2010`

###### Waste Corrugated shipping carton (`carton_waste`)

Actual discarded article to a named receiving treatment, with contamination nested in its mass rather than double-counted. This is one complete actual corrugated board carton including its supplied board adhesive construction. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste LDPE individual helmet bag (`bag_waste`)

Actual discarded article to a named receiving treatment, with contamination nested in its mass rather than double-counted. This is one actual supplied LDPE bag preparation including its contained additives. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste LDPE individual helmet bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

###### Waste BOPP acrylic carton-sealing tape (`tape_waste`)

Actual discarded article to a named receiving treatment, with contamination nested in its mass rather than double-counted. This is one complete purchased BOPP-backed acrylic adhesive tape preparation. Its actual composition and provider boundary must be verified; do not repurchase contained constituents. Tape cores, liners, other actual materials and reusable pallets require their own atomic rows if present. No generic packaging-material UUID is assumed to establish this article. Reference unit group: Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit kg.

- Selected flow: Waste BOPP acrylic carton-sealing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row's once-calculated x_ih result; collect the raw unnormalised numerator with cp_packaging.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `ilcd-general-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | Use these rules only for declared attributional LCA in an allocation-required situation consistent with the study goal and ILCD scenario conditions. This is ILCD Situation C2, or a documented case in A/B/C1 where the required alternatives of subdivision, virtual subdivision and substitution/system expansion are impossible or infeasible under the respective scenario provisions; it is not a free choice to replace prescribed substitution. Product functional comparisons and consequential substitution are outside this manufacture dataset. A machine-supplier process case is not an allocation standard. | ilcd-general-2010 |
| allocation_dedicated | all processes | First segregate dedicated moulding/assembly/test/service operations and virtually subdivide actual embodied materials and uniquely used resources to their own product/cohort. Direct meter records are preferred. Shell resin, bought suspension and failed shots belonging to one helmet campaign are not freely shared by total revenue. | ilcd-general-2010 |
| allocation_causal | all processes | For remaining shared exchanges identify the determining physical causal relationship exchange by exchange, including actual energy demand, cooling duty, machine occupancy/intensity or occupied storage volume/area with duration as appropriate. Document why a proposed driver determines the exchange; throughput mass or runtime alone is not automatically valid for every exchange. Keep dedicated startup/idle/cleanup/failure loads and use real causal scope for shared downtime. | ilcd-general-2010 |
| allocation_residual | all processes | Only a genuinely residual indivisible exchange without identifiable determining physical causality may use contemporaneous market values of real co-functions at the same common process gate in their actual quality, quantity, packaging and physical state. Remove product-specific later packing/transport/service value before comparing. Disclose prices, sensitivity and uncertainty; use no fixed ratio and never choose physical versus economic allocation arbitrarily. Allocated burdens across recipients sum to the original vector; physical exchanges retain full mass. | ilcd-general-2010 |
| allocation_rework | all processes | Internal clean regrind retains identity, thermal history and inherited vector, and pays actual granulation/remelting losses and energy once. Rejected helmets, feed sacks, returned packaging, recovered refrigerant and saleable scrap are not automatically co-products or credits. A claimed recycling/recovery allocation needs its real joint-process, quality and next-system boundary under the declared method; otherwise preserve physical transfer and treatment obligation without an invented displacement credit. | ilcd-general-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Collect and preserve all raw unnormalised observations, stocks and historical vectors first. The aggregation_rule cell labels only the destination basis of the final reported result; it performs no collection-stage division. calc_raw handles unit conversion, calc_attribution handles real attribution and inherited vectors, and calc_reference alone executes A_ih/Q_h once. Every card x_ih and aggregation refers to that stored result without a further division. The first-release row's1kg is the declared reference quantity rather than another collection or calculation.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first_release; helmet_reject | weighing and first-release trace | configuration; batch h; individual or lot net mass; tare; count N_h; first-release event; destructive sample mass; Q_h; rejected mass | Calibrated weighing of cooled complete accepted helmets excluding detachable packaging; reconcile count and unique acceptance events; keep samples and failed lots separately. | kg | each lot and release event | complete campaign including zero-output periods | one declared configuration at one site | per 1 kg reference flow | calibration; signed acceptance; count trace; test/sample genealogy |
| cp_material | manufacture | hdpe_pellets; suspension; sweatband; chinstrap | material and component receipt/use ledger | article identity; supplied whole formulation; supplier lot; receipt mass; opening and closing stock; raw use; WIP and regrind genealogy; inherited vector; provider packaging scope | Calibrated net weighing and reconciled BOM/receipts/stock issues with actual supplied-form records; preserve component subaccounts without duplicate acquisitions. | kg | each receipt use and stock movement | full campaign plus inherited stock history | matching manufacturing gate and supplier links | per 1 kg reference flow | supplier specification; BOM; scale tickets; stock and vector reconciliation |
| cp_energy | manufacture | production_electricity | import and branch energy metering | voltage; location; provider; meter initial and final; raw kWh; branch loads; idle and failed loads; distribution losses; shared drivers | Read calibrated import and branch meters for all manufacturing operations and utility equipment; reconcile actual CN below1kV supply; identify real losses and shared attribution. | kWh; MJ | each interval and campaign | complete campaign including cleanup and downtime | declared manufacturing import gate | per 1 kg reference flow | meter certificate; wiring and gate plan; interval coverage; reconciliation |
| cp_water | manufacture | cooling_makeup; external_cooling_supply; cleaning_water; external_cooling_return; cooling_blowdown; wash_effluent | independent water-loop and effluent ledger | species and water quality; mass or integrated volume; real rate and elapsed interval; independent density and state; opening and closing loop hold-up; supply and return state; gross return; evaporation; drift; blowdown; treatment receiver; supplier water-energy convention | Use calibrated balances/meters with actual temperature pressure and independent density when conversion is needed; collect separate loop/cleaning/output records and genuine external returns; no assumed steam. | kg; m3; temperature; pressure | each interval and stock change | full campaign including opening and closing equipment water | actual separate water loop and receiving treatment | per 1 kg reference flow | meter calibration; loop schematic; independent density/state; receiver and supplier records |
| cp_aux | manufacture | hydraulic_oil; cleaning_wipe; r134a_charge; recovered_r134a | equipment and consumable charge ledger | single chemical or article; complete supplied formulation; equipment ID; opening and closing charge; purchases; recovered external return; loss; actual service assignment | Weigh actual charge/recovery/use and reconcile independent equipment inventories; distinguish storage transfers from consumption; record actual chemical and state. | kg | each charge service and recovery | full campaign and inherited equipment history | actual equipment within declared site gate | per 1 kg reference flow | supplier SDS and specification; weighing; equipment log; recovery manifest |
| cp_waste | manufacture | hdpe_scrap; spent_oil; used_wipe | segregated waste physical transfer | specific article; material composition; original cohort; mass; captured constituents; hazardousness; receiver; stock; actual treatment boundary | Weigh each separate outgoing waste and reconcile stock and captured composition without duplicate subcomponent disposal. | kg | each transfer | complete campaign plus retained waste stock | each real receiver and manufacturing gate | per 1 kg reference flow | scale ticket; transfer manifest; composition assay; treatment match |
| cp_species | manufacture | water_vapour; pe_dust; n_butane; r134a_air | species-specific release evidence | single substance; CAS if applicable; size distribution; phase; outdoor compartment; concentration; integrated volume or real rate; state correction; opening and closing charge or loop stock; independent uncertainty | Use substance-specific sampling and calibrated integrated flow or integrate an actual rate over recorded time; distinguish captured and emitted streams; assess non-detects and unresolved species honestly; no generic factor from IFC. | kg; measured concentration and volume units | actual run idle cleanup and exceptional events | complete observed campaign | specific equipment outlet and receiving medium | per 1 kg reference flow | analytical method; detection limits; flow calibration; compartment and uncertainty records |
| cp_fg | supply_services | released_transfer; returned_helmet; repair_suspension; removed_suspension; gross_helmet_dispatch; service_reject | FG and return cohort ledger | original h; original Q_h; original total per-exchange history and removed-part genealogy; disjoint opening/closing bare-helmet service-rework WIP repair-component and water stocks; new internal release; other internal transfers; gross dispatch and external returns; original delivery; each new part and its additional upstream supply; each removed-part destination; measured net mass moisture and state; actual effluent evaporation species; actual acceptance basis; interval | Reconcile counts, measured mass and state per original-cohort movement against the expanded boundary_service equation. Weigh new and removed components separately and instantiate their own atomic cards; unknown destinations or unsupported rework hold the quantitative package. Keep the original total history and component subgenealogy once, separately from actual incremental service and upstream burdens; reinspection, replacement, moisture change and reshipment create no new Q_h. | kg; count | each movement and interval end | actual service interval and original release history | declared warehouse and dispatch boundary | per 1 kg reference flow | delivery and return records; stock count; original release and vector trace |
| cp_service_energy | supply_services | service_electricity | separate incremental service meter | cohort h; original Q_h; observed interval; raw kWh; packing storage handling and permitted-rework loads; idle; shared causal driver; import gate losses | Meter actual incremental services separately from manufacture; assign each exchange causally to original cohorts including stock not shipped. | kWh; MJ | each service interval | actual observed service duration | declared service account and actual CN below1kV gate | per 1 kg reference flow | meter and scope records; shared attribution; no-overlap reconciliation |
| cp_feed_packaging | manufacture | each resin sack | one-article directional packaging ledger | package article and composition; supplier inclusion; ownership; original cohort; opening empty; attached WIP; attached FG; reusable stock; external acquisition; external return received; closing equivalents; gross outward shipment; external return sent; waste; receiver | Weigh each single article and reconcile receipt/issue/stock/dispatch/return/waste records separately by direction and destination. Keep real physical mass regardless of burden allocation; no double-counting upstream included manufacture. | kg | each physical movement and stock end | complete manufacturing plus actual matched-cohort service interval | each article at each declared external gate | per 1 kg reference flow | article weighing; supplier boundary; stock and movement records; receiving waste/return proof |
| cp_packaging | supply_services | each resin sack; each carton; each helmet bag; each tape article | one-article directional packaging ledger | package article and composition; supplier inclusion; ownership; original cohort; opening empty; attached WIP; attached FG; reusable stock; external acquisition; external return received; closing equivalents; gross outward shipment; external return sent; waste; receiver | Weigh each single article and reconcile receipt/issue/stock/dispatch/return/waste records separately by direction and destination. Keep real physical mass regardless of burden allocation; no double-counting upstream included manufacture. | kg | each physical movement and stock end | complete manufacturing plus actual matched-cohort service interval | each article at each declared external gate | per 1 kg reference flow | article weighing; supplier boundary; stock and movement records; receiving waste/return proof |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | all inventory rows | Convert each raw measurement to the row unit before allocation. Integrated volume is already a total; integrate only an actual rate. A kg conversion from volume uses independently measured substance-specific density and state. Electricity kWh to MJ uses3.6 exactly. Preserve raw values and conversions. | raw_measurements; unit_conversions; density_state | raw_row_totals | ifc-plastic-products-2007 |
| calc_attribution | all inventory rows | Determine each unnormalised A_ih from raw_row_totals plus inherited exchange vectors at the declared cohort gate. Reconcile opening/closing materials and WIP; retain failed/idle/cleanup/rework loads; split dedicated then causal/residual shared exchanges under section7. Keep FG/service and equipment-water-charge ledgers non-overlapping. Inherited histories stay in original units and original Q_h; no second division or deletion with waste. | raw_row_totals; inherited_exchange_vectors; stock_ledgers; allocation_records | A_ih | ilcd-general-2010 |
| calc_reference | all inventory rows | x_ih = A_ih / Q_h for Q_h >0; A_ih is the attributable raw exchange numerator for original cohort h; Q_h is its unique first-release net kg. Execute this sole reporting division once. All cards and protocol aggregations reference the same x_ih. Q_h=0 retains raw burdens without a unit result; reference first_release is1kg. Service results retain the original cohort Q_h and labelled actual interval separately. | A_ih; Q_h; cp_release; cp_fg | x_ih | ilcd-general-2010 |
| calc_physical | all processes | Before allocation, manufacturing physical gate: opening raw materials and bare WIP plus separate loop/oil/refrigerant stocks plus actual external material inputs = unique new first release Q_h plus closing raw materials and bare WIP plus corresponding closing loop/charge stocks plus each actual external product return, waste and species emission. Q_h already includes this cohort closing FG and that FG is not added again. Packaging balances separately by article and is excluded from bare product/WIP mass; energy is not a mass term. Use boundary_service for the FG gate and cancel internal transfers at the combined gate. Reconcile relevant elements independently using measured composition; preserve discrepancies and uncertainty. Service repair separately retains real additions, removed parts, species and moisture changes; service-rework WIP and repair-material/water stocks never overlap manufacturing WIP. Do not force unchanged repaired mass from the original helmet mass. | cp_material; cp_release; cp_water; cp_aux; cp_species; cp_waste; cp_fg; cp_feed_packaging; cp_packaging | unallocated_physical_balances | ifc-plastic-products-2007; ilcd-general-2010 |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Supply actual physical identity, native restrictions and provider-boundary match; distinguish ordinary auxiliary UUID gaps from missing endpoint/route/basis. | complete native records; supplier specifications; applicability decision |
| dq_coverage | all processes | Cover full campaign including zero output and actual service interval; preserve old cohorts and every inherited exchange vector and denominator. | complete records; genealogy; stock and vector reconciliation |
| dq_measurement | all inventory rows | Retain calibration, unit/state conversions, raw data, missingness, non-detects and uncertainty; never replace an unknown with a model-specific public default. | calibration; raw records; conversion and uncertainty files |
| dq_no_approval | first_release | Declare actual configuration/drawing/quality criteria and available independent test evidence. Literature examples and engineering validation do not approve compliance or science. | drawing; acceptance basis; actual tests; explicit limitations |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all inventory rows | Confirm each real article/preparation/species and boundary before binding a UUID. Retain every native name qualifier, supplied form, CAS, route, geography in the complete flowInformation, type, reference-property index and all secondary properties; a name/classification hit is insufficient. Product/Waste/Elementary and air/media distinctions remain separate. Unbound auxiliaries keep precise atomic identities and supplier evidence requirements. | ifc-plastic-products-2007 |
| validate_reference | first_release | Require the actual complete helmet configuration and first-release mass trace with independent count reconciliation; unassembled shell or suspension cannot be the terminal reference. Actual quality/certification evidence belongs to the data producer. No public example mass, joules, package count, supplier assertion or another model certificate establishes this article's compliance or lifetime. | jsp-evo3-spec-2016; vitoppe-helmet-manufacturing |
| validate_balance | all processes | Reconcile total mass and relevant element inventories independently from measured chemical speciation. Keep non-overlapping material/WIP, FG, water-loop, equipment-charge and each packaging ledger. At manufacture Q already contains new closing FG; at the service gate retain gross shipments and returns; at the combined gate cancel internal transfers. Explain uncertainty rather than forcing closure with an invented species, reaction water or loss ratio. | ifc-plastic-products-2007; ilcd-general-2010 |
| validate_raw_once | all inventory rows | Retain raw meter/weighing records and original units, convert real rates/integrated volumes correctly, allocate the raw exchange vector, and apply calc_reference exactly once. Collection aggregation and card amounts only reference that same result. Preserve original Q_h for every old cohort and inherited vector; Q_h=0 retains real burdens but produces no unit result. Engineering checks do not establish science, translation or actual-factory approval. | ilcd-general-2010 |
| validate_complete | all processes | Before a quantitative dataset is complete resolve actual missing operations, supplied formulations, auxiliaries, output destinations, species/compartments, historical vectors and uncertainty. Do not mark a real unknown as zero or exclude it to satisfy a checker. Core endpoint/route/basis failure blocks applicability; an auxiliary UUID gap alone does not change the method into a different product. | ifc-plastic-products-2007 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Production data for matched configuration and upstream boundary; manufacture and actual service interval separately labelled |
| allowed_use | Attributional industrial helmet supply modelling after applicability review with inherited uncertainty |
| excluded_use | Certification; protection equivalence; lifetime inference; other polymer/routes; consequential credits; old articles as new production |
| required_metadata | actual model and complete configuration; complete supplied HDPE grade and colour stabiliser system; single-shot non-cellular unreinforced route; purchased suspension composition and attachment compatibility; actual separate sweatband and chinstrap inclusion; acceptance drawing tests and real compliance evidence; first-release net mass and independent count; original cohort and original Q_h; opening and closing material WIP and per-exchange inherited vectors; internal regrind thermal history and genealogy; FG stock returns original delivery and incremental rework linkage; manufacturing gate and actual service interval; CN below1kV import gate and provider loss boundary; water-loop and equipment-charge inventories and actual return-water state; complete directional physical ledger for each package article; species particle size phase receiving medium and uncertainty; site period and attributional allocation situation |
| required_quality_disclosure | Raw coverage; species and provider gaps; historical vectors; every directional package ledger; allocation basis; uncertainty; independent approval state |
| update_trigger | Configuration; supplied form; material; route; quality gate; geography/voltage; actual species; supply boundary or method situation change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| vitoppe-helmet-manufacturing | handbook | https://vitoppe.com/how-to-manufacture-custom-safety-helmets-the-ultimate-oem-odm-guide-for-global-buyers-by-vitoppe/ | Manufacturer first-party OEM process narrative: virgin pellets to injection-moulded shell and assembled suspension to packaging; no certification or numerical default adopted. |
| jsp-evo3-spec-2016 | handbook | https://docs.jsp.co.uk/head_protection/issued/TS-EVO3_MIDPEAK_NONVENT_WHEEL_MINERS_V1.pdf | EVO3 for miners technical specification issued21/11/2016 V7; complete pages1–2: HDPE shell and constituent suspension/sweatband examples plus optional features and limitations. Model mass and performance are not transferred. |
| huarong-helmet-case-2025 | literature | https://www.huarong.com.tw/page/news/en/company_news/detail/148/ | 16July2025 machine-supplier helmet case: cooling/defect/auxiliary moulding context and contrary two-shot rim route. Not a recipe or universal productivity/yield/energy claim. |
| ifc-plastic-products-2007 | official_guidance | https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | 30April2007 pp.9–11 and21–23 with Table4 and adjacent reactive-route examples: non-reactive pellet melting/moulding/cooling; potential emissions; actual water and waste inventory needs. No emission factor or LCA allocation. |
| ilcd-general-2010 | official_guidance | https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | First edition March2010 §§7.9.2–7.9.3 printed255–272/PDF275–292 in attributional allocation-required context; subdivision/virtual subdivision then exchange-specific determining physical causality and residual common-gate market value; services and recycling limitations retained. |
