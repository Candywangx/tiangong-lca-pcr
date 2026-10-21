---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.self-adhesive-plates-sheets-film-foil-tape-strip-and-other-flat-shapes-of-plastics
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Waterborne acrylic pressure-sensitive BOPP carton-sealing tape by electric coating and drying

## 1. Scope and Applicability

This method manufactures clear, unprinted, single-sided, self-wound BOPP carton-sealing tape carrying a dried waterborne acrylic pressure-sensitive adhesive (PSA). Start with purchased complete tape-grade BOPP backing web and one purchased complete coater-ready aqueous acrylic PSA preparation. Include receipt/storage, lot verification, web unwinding/guiding/tensioning, real homogeneity mixing/pumping, direct coating on the treated side, electric-heater/water-tank drying with fans, actual cooling, slitting/rewinding onto paperboard cores, testing, first quality release, and actual FG storage/packing/handling/dispatch services. The reverse is untreated and back-treatment-free, qualified by real unwind tests; no release liner is part of the representative product. [cosmo-pct-tape-film; basf-psa-solutions; tepu-electric-tape-coater; louis-bopp-water-tape]

Cosmo establishes a real incoming tape-film state; BASF establishes whole coater-ready adhesive supply capability; Tepu establishes an electric coater/dryer/slitter route; Louis establishes an independent real BOPP/water-acrylic finished carton tape. These primary sources are a transparent technical synthesis, not one contemporary SKU, order, formulation or factory. Source nominal thicknesses, solids, ratios, power ratings, daily water, yields, prices, quality/certification claims and lifetimes are not PCR defaults. Tepu's machinery packing descriptions do not specify tape packaging. [cosmo-pct-tape-film; basf-psa-solutions; tepu-electric-tape-coater; louis-bopp-water-tape]

Exclude paper-faced PSA labels, paper masking tape, adhesive-free film, plastic floor/wall coverings, electrical/medical tapes, plasticized PVC or PE tape, foamed/double-sided/liner-supported tape, reinforced/metal-foil laminates, onsite resin/PSA synthesis, added formulation blending, printing, onsite primer/release-coat/corona treatment, solvent/hotmelt/UV curing, and fuel-fired/steam/thermal-oil drying. Upstream backing manufacture including actual coextruded skins and supplier corona treatment remains linked background supply. If real operations differ, reassess applicability and add each actual atomic input/output; never hide them in an unlisted other-material total or a fictitious zero.

Q is NEW first-quality-released net tape mass in kg at the manufacturing gate after slitting and acceptance, not net shipment. A closing-FG lot already counted in Q is not a second output. Post-release services remain a separate lot ledger alongside manufacturing; gross physical dispatch and returns are custody movements, not new production. [louis-bopp-water-tape]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.self-adhesive-plates-sheets-film-foil-tape-strip-and-other-flat-shapes-of-plastics |
| classification_refs | CPC3.0 36920; narrower proposed context only |
| covered_products | Clear single-sided self-wound BOPP carton-sealing tape with dried aqueous acrylic PSA |
| excluded_products | Other36920 flat shapes and every excluded route in section1; paper PSA labels and plain film are distinct |
| representative_product | One declared tape construction and width/length configuration; no mandatory brand or nominal source dimensions |
| production_route | Purchased one-side-corona BOPP web plus whole coater-ready aqueous acrylic PSA; direct coating; electric drying; cooling; slitting/rewinding; first release |
| market_state | First-released net tape including actual residual moisture; removable cores and all packaging excluded; separately recorded actual post-release services |

The classification original repeats36920 without extra substantive notes; neighboring nonadhesive film, packaging articles, floor coverings and sanitary ware do not establish the same product. This is narrower semantic context only. [un-cpc3-2025]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide pressure-applied carton-sealing tape of the declared construction |
| How much | 1 kg reference flow |
| How well | Meet declared lot-specific peel/tack/shear/unwind and dimensional acceptance tests; no universal performance or certification implied |
| How long or cycle | One new manufacturing first-release event; service life and carton performance are not established |
| reference_flow_link | released_tape |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | backing polymer and coextruded skin/additive composition; supplier grade and declared supply location; treated adhesive side and untreated reverse; treatment date and retained surface compatibility; whole PSA formulation and as-received wet state; PSA batch solids and water assays; residual volatile species and residual moisture; dry adhesive coat mass and tape thickness; roll width and length configuration; peel tack shear and unwind test methods and acceptance limits; conditioning and first-release gate definition; electric heater water-tank and actual cooling configuration; raw and WIP opening closing inventories by lot; first-release lot IDs and Q in kg; FG opening closing and gross dispatch return lot history; each packaging article tare and full custody history; full operating-period failures idle cleaning and rework; each exchange inherited burden vector; supplier-specific upstream links and cutoff disclosure; uncertainty and missing evidence |

Declare every qualifier in the foreground data package; absent qualifiers make its reference incomplete. Native BOPP Packing tape/Mass identity does not declare acrylic recipe, dimensions, supplier or performance, and its electrical-energy CPC classification is a disclosed taxonomy defect. Apply only the independently qualified construction and all consuming-card restrictions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use actual accepted net tape mass including retained moisture; subtract measured core and all packaging tare; never infer kg per roll from source thickness or a secondary density. |
| whole_preparation | psa_preparation | Mass | kg | Wet whole preparation is purchased once; solids and carrier water are child composition accounts. Actual onsite ingredients require separate purchase rows and actual mixing energy/losses plus renewed applicability review. |
| raw_conversion | all inventory rows | Declared numerator property | original unit | Before allocation convert real raw units to each single flow unit: actual kWh times3.6 toMJ; only rates are integrated over actual intervals; integrated liquid/gas volumes receive no second time factor. Mass from volume requires independently measured density of that actual substance at its own temperature/pressure/composition, never assumed water density or a secondary flow-property factor. |
| raw_not_unit_result | all inventory rows | Declared numerator property | original unit | Collection stores undivided raw numerator only; allocation and inherited-vector reconciliation precede the sole report_once operation. Cards and aggregation refer to that same operation without dividing again. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete qualified BOPP tape web and whole aqueous acrylic PSA; actual lot/site supply forms and raw/WIP/FG stocks |
| starting_condition_role | foreground_gate_to_gate |
| product_classification_scope | Narrow plastic self-adhesive BOPP carton tape subset; CPC36920 title supplies no recipe |
| recursive_input_rule | Purchased already adhesive tape is not uncoated backing. External returned tape retains original lot burden; internal transfers/rework are linked without repurchase or new Q. |
| upstream_dataset_requirement | Link actual complete backing including skins/corona and actual whole wet PSA to compatible upstream datasets; actual energy/water/packaging supply and waste treatment linked once |
| disclosure | Manufacturing first-release and FG custody/service gates remain separate; disclose actual outside supply, omitted stages, conditions, uncertainties and unresolved compatibility |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all processes | Include the complete stated manufacture and actual post-release services. In the selected electric route no burner combustion, external steam, boiler or recovery device is presumed. If genuinely used, separately name each fuel, heat/steam supply, return water, auxiliary and actual species with supplier energy/water agreement; assess changed-route applicability before modelling. | tepu-electric-tape-coater; epa-pstl-1982 |
| boundary_supply | backing; psa_preparation | Require one-side-treated tape-grade BOPP with untreated reverse and confirmed PSA anchorage/unwind. PCT2 both-side treatment is not equivalent. EPA solvent-line release-coat statements do not force an extra back coat onto this back-treatment-free web. Whole purchased preparation counts once, with actual solids/water/residuals child balances; a complete externally prepared formulation is not the same as separately buying its neat ingredients. | cosmo-pct-tape-film; basf-psa-solutions; epa-pstl-1982 |
| boundary_q | released_tape | Q equals the sum of uniquely identified NEW first-accepted net tape masses. Track reject, destructive-test and unaccepted WIP separately; retests, customer returns, reopening or redelivery create no new Q. Q=0 periods retain all true loads and no unit result. Closing FG already released is inside Q, not an additional manufacturing output. | louis-bopp-water-tape |
| boundary_stock | all inventory rows | Maintain each raw-material and WIP lot in its true physical state with opening mass plus real receipts/transfers minus actual consumption/export equals closing mass. WIP includes wet coated web, adhesive in tanks/lines, dried jumbo web and unaccepted slit rolls. Carry a vector for EVERY upstream and foreground exchange; inherit opening vectors, add actual current increments, transfer internal vectors once, and retain closing vectors. Never reset failed starts, zero-output batches, idle, start/stop, cleanup or rework to zero; internal recirculation is neither new purchase nor burden-free scrap. Separately retain actual dryer-tank/cooling-circuit water and equipment charges, their opening/closing quantities and each inherited exchange vector whenever these are not already included in raw/WIP stocks. Identify the stock location and eliminate overlaps; a circulating water charge is not new output. |  |
| boundary_fg | dispatched_tape; returned_tape; fg_electricity | FG physical gate: openingFG + newFirstReleaseQ + externalReturnedTape = closingFG + grossOutwardTapeG + actualFGWaste. Preserve lot IDs and original burden vectors; opening FG is not new production. Keep post-release service raw loads and measured drivers by actual lot and period, including storage, packing, handling, dispatch and real incremental return rework. Cohort services go to that cohort; opening/returned-lot services retain their own accounts. Combined physical gates cancel internal Q transfers, never add Q and closingFG as independent production. Pending future services are disclosed incomplete, not estimated zero. |  |
| boundary_pack | all packaging rows | For EACH actual core/carton/film/pallet and additional distinct packaging article: opening empty stock + opening attachedWIP + opening attachedFG + opening reusable stock + new external purchase + externalReturnReceived = closing empty + closing attachedWIP + closing attachedFG + closing reusable + packaging accompanying gross physical dispatch + actual externalReturnSent + waste. Received supplier-attached articles are external receipts in their real form, not hidden free stock. Outward cards keep dispatch and return destinations separately. Internal reuse cancels; packaging is neither Q nor new purchase each cycle nor automatic co-product. Include actual inbound/returnable drums or IBC as separate whole articles where present. |  |
| boundary_species | water_vapour; ammonia_air; wastewater | Close total physical wet/dry mass AND relevant C/H/O/N or other element accounts separately from species/reaction evidence at manufacturing, FG and combined gates. Water in wet PSA is already part of its purchase. Distinguish retained free water, evaporated water, liquid effluent, tank water, condensate and any independently evidenced reaction/structural water; no reaction is presumed for simple drying. Never solve two unknown water/VOC masses with one residual or infer chemical masses from COD/TVOC. Measure actual residual monomers/other volatiles separately and create each real species/destination card before use. Internal recirculated exhaust/heat/water is not an external supply or release. | epa-pstl-1982 |
| boundary_air | all elementary outputs | EPA Figure4.2.2.9-1 describes a solvent/burner line and Table4.2.2.9-1 assumes the solvent entirelyVOC; none of its factors, control efficiencies, historic market shares or low/zero-VOC wording is transferable as a waterborne-electric default. Collect actual species and size-resolved PM after actual controls with uncertainty/detection limits. No solvent-recovery, oxidation or ozone process is presumed absent/operating solely from a marketing label; actual occurrence requires its complete atomic inventory and applicability review. | epa-pstl-1982 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tape_production | Receipt/coating/electric drying/slitting/first release plus separate actual FG services | required | selected physical route | foreground | 1 kg net first-release tape; actual FG services separately attributed |

The single integrated process retains stage-specific raw meters and three independent physical gates; its reference output is the internal first-release gate. Gross dispatch is an external custody output in a separate service subledger, never a second production credit. Add each real unlisted single material/species/outlet before data use; absence needs evidence, never a blanket zero.

### Process: Integrated BOPP tape production (`tape_production`)

#### Inputs

##### Product flows

###### Untreated-reverse BOPP backing web (`backing`)

One purchased complete plain transparent tape-grade BOPP web with one corona-treated adhesive side and an untreated back-treatment-free reverse. Native identity is Product flow at plant; no CAS, fixed polymer, grade, dimensions, surface treatment, geography, synonyms or general comment is supplied; only Mass with reference factor1 is present. Its36390 classification is a broad other-plastics-film context, not proof of the actual BOPP construction, foam or adhesive grade. The generic native record alone does not establish whether the actual treated/coextruded web belongs to a more specific classification. Use the UUID only for this declared complete BOPP web; independently qualify the supplier, polymer/coextruded skins, additives, surface retention, anchorage and unwind. Upstream supply includes film formation and supplier treatment; do not repurchase resin or count coating as purchased finished tape.

- Selected flow: Plastic Film `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: cosmo-pct-tape-film; tepu-electric-tape-coater

###### Whole coater-ready acrylic PSA preparation (`psa_preparation`)

Purchase one complete aqueous acrylic PSA formulation on its as-received wet-mass basis. Supplier batch/SDS/composition and compatibility testing must distinguish it from lamination glue, a neat polymer, a dry powder, optical adhesive and UV hotmelt. Assayed solids, carrier water, stabilizers and residual monomers are child accounts within this mass, not additional purchases. BASF establishes coater-ready capability; its named specialty/graphic products are not an automatic carton-tape recipe. No onsite polymerization or recipe blending is assumed.

- Selected flow: Coater-ready aqueous acrylic pressure-sensitive adhesive preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: basf-psa-solutions; tepu-electric-tape-coater

###### Manufacturing electricity (`electricity`)

Meter real receipt handling, pumping, mixing for homogeneity, coating drives, electric drying heaters/fans, pneumatic compressor, cooling and slitting/rewinding plus failed runs, warm-up, idle and cleaning. Native Product flow is point-of-use alternating current on1MJ basis with reference property Net calorific value; voltage, supply technology, generation mix, provider geography, delivery boundary and line-loss allocation are unspecified. All other native identity qualifiers are absent; it is not proof of a specific grid or low-voltage provider. Keep conversion and supplier attribution explicit and avoid counting the same compressor/heater electricity twice.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_energy`
- Sources: tepu-electric-tape-coater

###### Purchased liquid water (`water`)

Measure each physical water supply for the electric oven water tank, cleaning and actual cooling makeup; keep purpose subaccounts without summing internal recirculation as new supply. The representative coater-ready preparation has no onsite formulation dilution. Actual dilution requires renewed applicability review and its own real water purchase, excluding carrier water already inside psa_preparation; it must not be hidden or treated as an automatically permitted adjustment. Water quality, source and measurement state must be declared; additional distinct supplies require their own atomic cards. No purchased steam, boiler or condensate is implied by a water tank.

- Selected flow: Purchased liquid process water
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: tepu-electric-tape-coater

###### Replacement slitting knife (`knife`)

Only actual replacement whole knife mass attributable to these rolls; retain alloy, coating, service interval and measured remaining stock. Do not assume one new blade per roll.

- Selected flow: Steel slitting knife
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources:

###### Cleaning wipe (`wipe`)

Record actual whole supplied cellulose wipe and its water/adhesive contamination separately at disposal; another fibre or chemical-treated wipe requires a distinct card.

- Selected flow: Cellulose cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources:

###### Mineral lubricating-oil preparation (`lubricant`)

Conditional actual machine/air-compressor service input as one complete supplied oil preparation; actual losses, retained charge and spent oil must reconcile. A permanent fill is not repurchased each campaign. Other oil chemistry requires a separate identity.

- Selected flow: Formulated mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources:

###### Paperboard winding core (`core`)

One complete supplied winding core; record its real paperboard/adhesive composition and empty/attached/reusable stocks. It is excluded from net tape Q despite remaining in the sold roll. Apply the separate packaging custody balance in boundary_pack. Native Product is one paperboard cylinder/paper core at plant, Mass/kg, with no CAS, fixed dimensions, fibre ratio, adhesive grade, treatment route, provider or supply geography. Use only the actual complete winding core including its own adhesive construction; verify grade, net tare, moisture and supplier independently. It is not raw paperboard, a metal/wood core, tape net mass or evidence of a fixed kg/item.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources: tepu-electric-tape-coater

###### Corrugated shipping carton (`carton`)

One complete actual carton used for tape rolls; composition/provider and tare must be documented. No unspecified packaging-family UUID is assigned. Apply the separate packaging custody balance in boundary_pack.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Polyethylene transport film (`wrap`)

Only actual supplied transport wrapping film. Distinguish new film, reusable sheets and supplier-attached incoming film; none belongs in net Q. Apply the separate packaging custody balance in boundary_pack. Native Product is polyethylene film CAS9002-88-4, production mix at plant, Mass/kg. No branch-density class, fixed grade, thickness, additive recipe, forming route, provider or geography is specified. The luggage CPC29220 classification conflicts with the coherent PE-film identity and remains a disclosed taxonomy defect; it is not evidence for a luggage product or another polymer. Bind only actual complete PE wrapping film, with grade/additives and provider boundary verified. Do not substitute PET, PVC, resin granulate or an unverified multilayer/adhesive film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Wooden transport pallet (`pallet`)

Only actual whole wooden pallet with real wood/fastener composition and reuse history. Do not divide by an invented lifetime or automatically credit a returned pallet. Apply the separate packaging custody balance in boundary_pack.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Previously released returned tape (`returned_tape`)

Actual external customer returns only; keep original delivery ID, mass, historical burden vector and reason. Native BOPP-film Packing tape at plant is Product flow with only reference Mass factor1; no CAS, species, fixed grade, adhesive recipe, dimensions, geography, synonyms or general comment is supplied. Its electrical-energy CPC code is a taxonomy defect inconsistent with the coherent BOPP tape physical identity. Qualify this single-sided waterborne acrylic tape independently; the UUID proves neither recipe nor supplier. Returned or retested tape never becomes new first-release Q; any true incremental rework is separately assigned to the returned lot.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: louis-bopp-water-tape

###### Finished-goods service electricity (`fg_electricity`)

Retain real FG storage, electric handling, wrapping and dispatch services in a separate lot service ledger; allocate each raw exchange between opening-stock lots and newly released lots. Native point-of-use AC Product flow uses1MJ reference property Net calorific value; provider, voltage, generation technology/mix, geography, delivery boundary and line losses are unspecified, not evidence of a particular supplier. Include actual conversion and source attribution. Historical manufacture is not charged anew; unresolved future service remains incomplete scope, not zero.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources:

#### Outputs

##### Product flows

###### New first-quality-released net tape (`released_tape`)

Reference output at the manufacturing first-release gate is new accepted single-sided clear BOPP tape carrying dried waterborne acrylic PSA; include measured retained moisture but exclude removable core and every packaging article. Native identity is BOPP-film Packing tape at plant, Product flow, reference Mass factor1; no CAS, fixed dimensions, recipe, grade, supplier geography, synonyms or general comment exists, and no other property is declared. The native electrical-energy CPC classification is a disclosed isolated taxonomy error; it cannot establish a power exchange or prove methodology. Independently qualify film/adhesive, peel, tack, shear, unwind and actual acceptance tests. This is a virtual gate output; do not also add closing FG to Q.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: louis-bopp-water-tape; cosmo-pct-tape-film

###### Gross physical dispatch of tape (`dispatched_tape`)

Record actual gross outward net tape mass G in the FG custody/service ledger, including shipments from opening FG and redelivery of returns. It is not a second manufacturing output or Q. Native BOPP-film Packing tape at plant is Product flow with reference Mass factor1 and no other property; no CAS, fixed grade/dimensions, adhesive recipe, geography, synonyms or general comment is given. Its electricity CPC classification is an isolated taxonomy defect; the physical BOPP tape identity remains conditional on verified single-sided aqueous-acrylic compatibility and supplier/quality evidence. Combined gates cancel internal first-release transfers.

- Selected flow: Packing tape `e79513bf-1a03-4444-b0f5-9d545f0f43f6`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_fg`
- Sources: louis-bopp-water-tape

###### Outward Paperboard winding core (`out_core`)

Measure this single physical packaging article accompanying gross dispatch or actual external return. Preserve separate destination/ownership subaccounts; do not net customer tape returns against packaging custody, count internal reuse as outward supply, include this in Q or automatically declare a co-product. Native Product is one paperboard cylinder/paper core at plant, Mass/kg, with no CAS, fixed dimensions, fibre ratio, adhesive grade, treatment route, provider or supply geography. Use only the actual complete winding core including its own adhesive construction; verify grade, net tare, moisture and supplier independently. It is not raw paperboard, a metal/wood core, tape net mass or evidence of a fixed kg/item.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Outward Corrugated cardboard shipping carton (`out_carton`)

Measure this single physical packaging article accompanying gross dispatch or actual external return. Preserve separate destination/ownership subaccounts; do not net customer tape returns against packaging custody, count internal reuse as outward supply, include this in Q or automatically declare a co-product.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Outward Polyethylene transport wrapping film (`out_wrap`)

Measure this single physical packaging article accompanying gross dispatch or actual external return. Preserve separate destination/ownership subaccounts; do not net customer tape returns against packaging custody, count internal reuse as outward supply, include this in Q or automatically declare a co-product. Native Product is polyethylene film CAS9002-88-4, production mix at plant, Mass/kg. No branch-density class, fixed grade, thickness, additive recipe, forming route, provider or geography is specified. The luggage CPC29220 classification conflicts with the coherent PE-film identity and remains a disclosed taxonomy defect; it is not evidence for a luggage product or another polymer. Bind only actual complete PE wrapping film, with grade/additives and provider boundary verified. Do not substitute PET, PVC, resin granulate or an unverified multilayer/adhesive film.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Outward Wooden transport pallet (`out_pallet`)

Measure this single physical packaging article accompanying gross dispatch or actual external return. Preserve separate destination/ownership subaccounts; do not net customer tape returns against packaging custody, count internal reuse as outward supply, include this in Q or automatically declare a co-product.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Externally returned liquid condensate (`condensate`)

Conditional only where a real external product-return agreement exists. Record actual liquid temperature, pressure, quantity, enthalpy/reference state, receiver and supplier water/energy accounting. Electric oven water-vapour release or internal collected water does not imply externally purchased steam or a condensate credit; actual wastewater belongs in its waste card.

- Selected flow: Returned liquid water condensate
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources:

##### Waste flows

###### Uncoated BOPP web trim (`bare_trim`)

Bare web trim and leader scrap only; keep actual polymer/skin composition and destination. Coated tape is not bare PP recyclate.

- Selected flow: Uncoated BOPP web trim
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Acrylic-PSA-coated BOPP tape scrap (`coated_trim`)

Reject rolls, trim and destructive tests leaving manufacture, plus separately tagged post-release FG damage. Keep substrate, adhesive solids and retained-water child accounts; no pristine-polymer identity or automatic recycling credit.

- Selected flow: Acrylic-PSA-coated BOPP tape scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Wet acrylic PSA coagulum (`adhesive_residue`)

One actual wet filtered coagulum/sludge stream with measured water/solids and contamination; deposited adhesive is excluded from wastewater solids when removed here. Distinct sludge streams need distinct cards.

- Selected flow: Wet acrylic PSA coagulum
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Acrylic-PSA-contaminated aqueous cleaning effluent (`wastewater`)

Whole wet aqueous effluent crossing to an external treatment system, with temperature, water, suspended solids and actual dissolved species subledgers. COD/TOC are indicators, not independently weighed chemical species. Onsite treatment must be expanded with every actual input/output before use.

- Selected flow: Acrylic-PSA-contaminated aqueous cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_water`
- Sources: epa-pstl-1982

###### Spent formulated mineral lubricating oil (`spent_oil`)

Actual externally discarded oil with water/adhesive contamination and original charge history; oil retained in equipment is not a disposal output.

- Selected flow: Spent formulated mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Spent steel slitting knife (`spent_knife`)

One real spent blade, including adhering coating in its composition subaccount; do not duplicate that adhering mass in tape scrap.

- Selected flow: Spent steel slitting knife
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Acrylic-PSA-contaminated cellulose wipe (`spent_wipe`)

Whole contaminated wipe with actual wipe/water/adhesive masses; captured adhesive is not an air emission or additional sludge mass.

- Selected flow: Acrylic-PSA-contaminated cellulose wipe
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_waste`
- Sources:

###### Discarded Paperboard winding core (`waste_core`)

Only actual discarded whole article with its composition, contamination and destination. Attached residue belongs to this whole wet waste or is separately removed and weighed, never both. Distinguish reusable stock and external returns.

- Selected flow: Waste Paperboard winding core
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Discarded Corrugated cardboard shipping carton (`waste_carton`)

Only actual discarded whole article with its composition, contamination and destination. Attached residue belongs to this whole wet waste or is separately removed and weighed, never both. Distinguish reusable stock and external returns.

- Selected flow: Waste Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Discarded Polyethylene transport wrapping film (`waste_wrap`)

Only actual discarded whole article with its composition, contamination and destination. Attached residue belongs to this whole wet waste or is separately removed and weighed, never both. Distinguish reusable stock and external returns.

- Selected flow: Waste Polyethylene transport wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

###### Discarded Wooden transport pallet (`waste_pallet`)

Only actual discarded whole article with its composition, contamination and destination. Attached residue belongs to this whole wet waste or is separately removed and weighed, never both. Distinguish reusable stock and external returns.

- Selected flow: Waste Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_pack`
- Sources:

##### Elementary flows

###### Water vapour to outdoor air (`water_vapour`)

Measure or independently reconcile actual water evaporating from adhesive, electric-oven tank and cleaning after retention, condensate and liquid effluent. Preserve phase and actual air compartment. This is physical evaporation, not polymerization reaction water. Unresolved volatile-organic mass cannot be fitted simultaneously with water from one residual. Native CAS 7732-18-5; Elementary flow, emissions to air unspecified, Mass/kg. Bind only independently measured actual species or the stated particle fraction at that compartment. Do not infer an emission from the UUID, ammonia from pH/latex, or a chemical mass from TVOC/COD. Particle cutpoint conventions must match the actual measurement with disjoint bins; cumulative PM10 is not the >10 fraction and total PM is not an extra emission. Actual indoor, water, soil, long-term or more specific air compartments require a separately verified identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources: tepu-electric-tape-coater; epa-pstl-1982

###### Conditional ammonia to outdoor air (`ammonia_air`)

Only where actual supplied-preparation composition and species-specific exhaust/fugitive measurements establish ammonia release; do not infer from generic latex, pH or total VOC. Measured identity and nitrogen balance remain independent checks. Other actual volatile species each require their own card and source evidence. Native CAS 7664-41-7; Elementary flow, emissions to air unspecified, Mass/kg. Bind only independently measured actual species or the stated particle fraction at that compartment. Do not infer an emission from the UUID, ammonia from pH/latex, or a chemical mass from TVOC/COD. Particle cutpoint conventions must match the actual measurement with disjoint bins; cumulative PM10 is not the >10 fraction and total PM is not an extra emission. Actual indoor, water, soil, long-term or more specific air compartments require a separately verified identity.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources:

###### Particulate matter smaller than2.5 micrometres to outdoor air (`pm25`)

Conditional actual slitting/core-handling/cleaning dust after collection; retain the nonoverlapping size fraction, polymer/paper/adhesive composition, source and actual receiving air compartment. Captured dust is a separate atomic waste when present, not an air emission. No total-PM plus fraction double counting or default emission factor. Native particle interval particles (PM2.5); Elementary flow, emissions to air unspecified, Mass/kg. Bind only independently measured actual species or the stated particle fraction at that compartment. Do not infer an emission from the UUID, ammonia from pH/latex, or a chemical mass from TVOC/COD. Particle cutpoint conventions must match the actual measurement with disjoint bins; cumulative PM10 is not the >10 fraction and total PM is not an extra emission. Actual indoor, water, soil, long-term or more specific air compartments require a separately verified identity.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources:

###### Particulate matter from2.5 to10 micrometres to outdoor air (`pmcoarse`)

Conditional actual slitting/core-handling/cleaning dust after collection; retain the nonoverlapping size fraction, polymer/paper/adhesive composition, source and actual receiving air compartment. Captured dust is a separate atomic waste when present, not an air emission. No total-PM plus fraction double counting or default emission factor. Native particle interval particles (PM2.5 - PM10); Elementary flow, emissions to air unspecified, Mass/kg. Bind only independently measured actual species or the stated particle fraction at that compartment. Do not infer an emission from the UUID, ammonia from pH/latex, or a chemical mass from TVOC/COD. Particle cutpoint conventions must match the actual measurement with disjoint bins; cumulative PM10 is not the >10 fraction and total PM is not an extra emission. Actual indoor, water, soil, long-term or more specific air compartments require a separately verified identity.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources:

###### Particulate matter larger than10 micrometres to outdoor air (`pmover10`)

Conditional actual slitting/core-handling/cleaning dust after collection; retain the nonoverlapping size fraction, polymer/paper/adhesive composition, source and actual receiving air compartment. Captured dust is a separate atomic waste when present, not an air emission. No total-PM plus fraction double counting or default emission factor. Native particle interval particles (> PM10); Elementary flow, emissions to air unspecified, Mass/kg. Bind only independently measured actual species or the stated particle fraction at that compartment. Do not infer an emission from the UUID, ammonia from pH/latex, or a chemical mass from TVOC/COD. Particle cutpoint conventions must match the actual measurement with disjoint bins; cumulative PM10 is not the >10 fraction and total PM is not an extra emission. Actual indoor, water, soil, long-term or more specific air compartments require a separately verified identity.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured undivided raw cohort numerator; use the sole section8 reporting operation after unit conversion and attribution; preserve this card scope and original unit.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: `cp_species`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | This is attributional process modelling only where allocation is justified rather than substitution. Establish the actual co-functions and decision context; industrial equipment/product evidence alone does not authorize LCA allocation or credits. | ilcd-detailed-2010 |
| allocation_dedicated | all inventory rows | First use dedicated measurement and real or virtual subdivision: assign specific backing, PSA, failed-roll burden, slit waste, extra rework and downstream packaging/services to their actual product/lot before sharing any residual. Keep full inherited vectors and complete-period reconciliation. | ilcd-detailed-2010 |
| allocation_causal | all inventory rows | For each remaining exchange independently identify and substantiate the determining physical causal relationship. Actual coating area times measured coat load, evaporation duty, metered run duration at comparable intensity or occupied space-time may support particular flows only when their causal condition is demonstrated. Material embodiment alone does not allocate process losses. No universal mass/area/time key across all exchanges and no arbitrary physical/economic choice. | ilcd-detailed-2010 |
| allocation_residual | all inventory rows | Only for a genuinely inseparable residual after the preceding steps, explain why no determining physical causality can be established and use contemporaneous representative market values of actual co-products in their actual amounts/quality/state at the SAME common-process gate. Remove later packaging/transport/conditioning value or derive the gate value transparently; do not use retail tape prices against untreated scrap value. State zero/negative values and uncertainties rather than silently clipping them. Allocated exchange vectors must sum to the unallocated vector; no fixed percentages. | ilcd-detailed-2010 |
| allocation_recovery | all waste and packaging rows | Internal clean recovery and returnables are physical recirculation with inherited burdens, not co-product credits. Actual external scrap classification/treatment and zero/negative-value gates require explicit evidence and a separate documented waste/recycling method consistent with scope; the selected ILCD sections do not supply a tape-specific recycling formula or avoided-virgin-production credit. Do not apply an automatic burden-free scrap rule or recovery fraction. | ilcd-detailed-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | tape_production | released_tape; returned_tape | release and return ledger | lot; construction; roll ID; gross mass; actual core/pack tare; net kg; first-release time; test records; prior-release/delivery ID; genuine reversal | Calibrated weighing of accepted tape and real tare; deduplicate first releases; trace original return/retest/rework and linked genuine release reversals, not a second release. Store raw Q evidence undivided; pass to release_q; never divide inventory in collection. | kg | each roll or verified same-configuration lot | complete study period including zero-output batches | same declared plant and construction | per 1 kg reference flow | scale/tare calibration; actual test acceptance; immutable release/return IDs |
| cp_material | tape_production | backing; psa_preparation; knife; wipe; lubricant | material and WIP raw records | supplier; batch; supply form; actual received/issued/returned weights; raw/WIP opening/closing; wet/dry state; assays; grade/SDS; original per-flow vectors; measured loss; route | Weigh/stock-reconcile every whole supplied article/preparation; assay solids/water/residuals as child accounts; trace WIP stages and each exchange vector; include failed, cleanup and real incremental rework records. Store undivided stock-corrected raw quantities; no Q division; construct attributed A_i under cohort_vectors and section7 before report_once. | kg | each lot and inventory cutoff | complete production and stock interval | supplier lots and actual line | per 1 kg reference flow | calibration; stocktakes; supplier composition; assay methods; vector transfer ledger |
| cp_energy | tape_production | electricity | meter records | meter ID; start/end integrated readings; original unit; actual power/time intervals when rate-based; electric oven/fans; compressor; heating configuration; operating mode; affected lots; provider attribution | Meter actual manufacture and shared circuits; do not substitute rated machine power times assumed utilization; include warm-up, failed starts, idle, cleanup and all actual dryer tank heating. Subdivide overlaps; retain original energy unit. Retain raw energy undivided; convert using raw_conversion and attribute once under section7; report_once is the only Q normalization. | kWh or MJ | continuous meter plus each operating-mode event | whole period not selected successful hours | actual line/shared utilities with meters scoped | per 1 kg reference flow | meter calibration; clock alignment; full mode logs; circuit reconciliation |
| cp_water | tape_production | water; condensate; wastewater | water and effluent ledger | supply ID; function; integrated volume or actual rate/time; independent density; temperature; pressure; composition; tank/cooling opening/closing; retained water; condensate receiver; effluent analyses; enthalpy boundary; opening tank/cooling inherited exchange vectors; closing tank/cooling inherited exchange vectors | Measure actual supplied liquid/tank makeup and outlets; independently assay wet PSA water and wastewater; record internal recirculation separately. Distinguish real external Product return from waste. Retain actual thermal state and any supplier water/energy convention; no assumed steam. Store raw numerator only; compatible volume/density/rate conversion under raw_conversion before attribution and report_once; no collection division. Reconcile separately accounted tank/cooling stocks and their inherited vectors without duplicating raw/WIP or PSA carrier-water subaccounts. | kg or measured m3 | meter intervals and each drain/return | full operating and cleanup period | each actual supply and outlet | per 1 kg reference flow | flowmeter/scale calibration; substance-state density; laboratory results; return agreement |
| cp_pack | tape_production | all packaging rows | separate article custody ledger | article ID; actual composition; tare; owner; empty stock; attachedWIP; attachedFG; reusable stock; opening/closing; purchases; externalReturnReceived; withGrossDispatch; externalReturnSent; waste; internal reuse count | Independently weigh and reconcile EACH whole core/carton/film/pallet plus any actually used additional packaging article. Record incoming supplier-attached/returnable packaging as true receipts; trace all destinations and retained stocks; separate new purchases from repeated reuse. Raw per-article balance under boundary_pack; no division here; attributable actual cohort packaging numerator uses report_once only once. | kg | each custody movement plus inventory cutoffs | same complete physical period | all inbound and outbound packaging custody | per 1 kg reference flow | article tare weighing; owner/custody documents; stocktakes; dispatch and waste receipts |
| cp_waste | tape_production | all waste rows | waste weighing and composition | atomic stream; stage; lot; wet mass; dry solids; water; actual species; contamination; collected dust if actual; destination; legal/economic condition; internal transfer IDs | Weigh each real bare/coated/sludge/oil/blade/wipe stream separately; distinguish offsite waste from internally recovered WIP and FG waste; prevent duplicate adhered masses. Add one card for each actual captured dust/filter or other distinct waste. Raw waste quantities and child composition retained undivided; physical reconciliation and allocation precede the same report_once operation. | kg | each removal and waste-stock cutoff | full period including failed/cleanup batches | actual boundary exit or waste holding stock | per 1 kg reference flow | weigh tickets; moisture/composition analysis; treatment/custody records; stock balance |
| cp_species | tape_production | all elementary outputs | species and phase-specific measurements | species; CAS when applicable; actual compartment; source; concentration; integrated exhaust volume or true flow rate/time; wet/dry T/P basis; retained/captured mass; actual controls; phase; detection limit; uncertainty; relevant elements | Speciate actual oven/coating/cleanup emissions and nonoverlapping PM fractions. Match concentration and gas-volume reference state; subtract inlet background consistently. Full carrier-air intake/exhaust balances include air mass where needed; net emitted pollutant is not whole exhaust. Independently quantify water phase change and organic residuals. Store raw concentration/volume/rate evidence only; raw_conversion creates actual species numerators before attribution and report_once; integrated volume is not multiplied by time again. | kg with original measured units retained | representative campaigns plus full operation/mode reconciliation | same whole-period emissions scope | actual outdoor air outlet and fugitive sources | per 1 kg reference flow | sampling method; laboratory species identification; detection limits; compatible T/P/wet-dry evidence; independent material/element checks |
| cp_fg | tape_production | dispatched_tape; fg_electricity; returned_tape | FG custody and incremental service ledger | lot; original Q; original manufacture vector; openingFG; closingFG; gross dispatch; returns; prior delivery reversal; incremental rework; storage duration/space; actual electricity/handling/packing; raw unit | Keep historical FG and current-release cohorts separately; full physical G/returns include all cohorts but reference results use only the matching cohort with its own original Q, never plantwide G divided by new Q. Reconcile actual external custody and real return-linked reversals. Meter actual FG services including electric handling and dispatch. Preserve their true period and causal drivers without assuming future services or reallocating old production to new Q. Raw cohort services remain undivided; allocation precedes report_once with that cohort original Q only; opening/returned-lot services never divide by unrelated new Q. | kg and each service original unit | each lot movement and service event | full declared FG service observation period | actual factory FG gate and dispatch | per 1 kg reference flow | lot/custody chain; original delivery IDs; meter records; physical stocktakes; service completeness disclosure |
| cp_allocation | tape_production | all inventory rows | allocation justification and raw vector ledger | exchange; cofunction; dedicated meters; virtual subdivisions; causal hypothesis; physical driver; residual; contemporaneous prices; gate quality/state; downstream value exclusions; signed/zero values; uncertainty | Evidence each step of section7 independently for each exchange; distinguish physical stocks and burdens. Conserve the full raw vector across all allocations. Actual missing causality/price data remains unresolved, never an invented split. Store raw allocation inputs/undivided attributed A_i only; only report_once normalizes with Q. | each exchange original unit | each allocation period/configuration change | same complete exchange and market-value period | same common-process gate and actual cofunctions | per 1 kg reference flow | dedicated/subdivision proof; causal study; source prices and state; full sum-conservation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_q | released_tape | Q = sum of uniquely identified NEW first-quality-released net tape masses after genuine linked release reversal correction. Count/area records require independently measured same-construction mass conversion; no invented kg/roll or density. Closing FG, gross dispatch, reinspection and prior-released return/rework never add production. | cp_release | Q | louis-bopp-water-tape |
| raw_conversion | all inventory rows | Convert original readings to each flow unit BEFORE attribution: kWh toMJ by3.6; stock-adjust whole preparation mass; actual liquid volume times independently measured compatible density; species concentration times compatible integrated gas volume; only true rates are integrated over time. No Q division here and no second time multiplier on integrated volume. | cp_material; cp_energy; cp_water; cp_species; cp_fg | converted raw exchange quantities |  |
| cohort_vectors | all inventory rows | Construct undivided cohort numerator A_i from attributable real period exchanges plus the complete per-exchange inherited vectors of ALL opening WIP minus the complete vectors carried by closing WIP; correct raw stocks and cancel internal transfers/reuse. Retain every failed/start-stop/idle/cleanup and actual incremental rework load. Newly released closing FG already owns its manufacturing vector and is not subtracted as closing WIP. Apply section7 before reporting; historical FG manufacture is preserved separately. Include the opening and closing inherited vectors of separately accounted actual dryer-water/cooling/equipment stocks under boundary_stock, with no overlap with raw/WIP inventories. | cp_release; cp_material; cp_energy; cp_water; cp_waste; cp_species; cp_allocation | A_i | ilcd-detailed-2010 |
| physical_gates | raw physical ledgers | Manufacturing: opening raw/WIP + opening separately accounted in-process tank/cooling/equipment stocks + actual external material inputs + true prior-release rework transfers in = closing raw/WIP + closing separately accounted in-process stocks + new Q + all real other products/waste/species outputs + segregated prior-release rework returned to FG. Avoid overlap among raw, WIP and in-process stocks and count every input once. FG: openingFG + internal newQ + actual external returns + segregated rework receipts = closingFG + grossOutwardG + actualFGWaste + rework transfers out. Consolidation cancels matched internal Q/rework/packaging transfers, while retaining both cutoffs of separately accounted in-process stocks, external inputs/returns, gross dispatch, water Product returns and waste/emissions. Attached packages remain in their separate physical article ledgers and never in tape net mass. Close total wet/dry mass and relevant elements independently from actual species/phase evidence; keep full carrier-air intake/outlet when relevant. | cp_material; cp_release; cp_water; cp_pack; cp_waste; cp_species; cp_fg | separate manufacturing FG and combined physical ledgers |  |
| packaging_custody | all packaging rows | Apply the complete per-article opening/closing empty/attachedWIP/attachedFG/reusable balance in boundary_pack using real external purchase/received return/outward shipment/sent return/waste. Cancel internal reuse and attachment; exclude all packaging from net Q and prohibit double purchase or automatic co-product. This is physical reconciliation without Q division. | cp_pack; cp_fg | balanced packaging custody subledgers |  |
| service_vectors | fg_electricity; dispatched_tape; returned_tape | Maintain each original cohort manufacturing vector and separately add actual matched FG-service and incremental return/rework vectors. Reverse a prior service/delivery entry only for a genuine linked reversal; reinspection/reshipment is not new production. Pass only current-cohort matched service A_i with its ORIGINAL Q to the same sole report_once operation as a separate supplement; old-cohort service never divides by new Q. Future unobserved services remain incomplete scope, not zero. | cp_fg; cp_pack; cp_allocation | matched raw service A_i and cohort original Q | ilcd-detailed-2010 |
| report_once | all inventory rows | For Q>0 report A_i / Q ONCE in the exchange numerator unit per1kg reference flow; A_i is the converted and attributed undivided cohort numerator, not a previously normalized intensity. Keep manufacturing and matched FG service results as distinct ledgers; internal first-release transfers cancel in consolidation. For Q=0 retain actual loads with no unit result. Cards and collection aggregation refer to this SAME reporting operation and never divide again. Reference output is1kg at released_tape. | A_i; Q; cp_release | single-normalized exchange result |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify whole supplied identity, polymer/skin/PSA chemistry, surface/grade/state and native restrictions before dataset linking; UUID names alone and schema-valid shapes do not prove applicability. | Direct native records; supplier/SDS/composition and compatibility tests |
| dq_quality | released_tape | Retain actual dimensional, peel, tack, shear, anchorage/unwind, conditioning and first-release criteria; do not transfer source nominal properties, regulatory claims or service life. | Lot test reports and acceptance records |
| dq_complete | all inventory rows | Cover all operating modes, failed/zero-output lots, opening/closing raw/WIP/FG, internal recovery and inherited vectors; missing data is unknown, never an unsupported zero or pass. | Full period logs and per-flow mass/vector reconciliation |
| dq_units | all inventory rows | Preserve original units and only supported explicit conversions; each real liquid/species density, phase and gas state is independently established; no fabricated roll mass. | Calibration and substance-state methods |
| dq_emission | all elementary outputs | Identify each actual chemical species/outlet and nonoverlapping PM size fraction; indicators/total VOC or COD do not replace chemical masses. Report detection limits and unknown residuals. | Analytical reports and separate elemental/water evidence |
| dq_fg | dispatched_tape; fg_electricity | Preserve original FG burden history, genuine delivery/return reversal and incremental rework; disclose actual service period and unfinished later service without allocating old stock to new Q. | FG custody and service ledger with stocktakes |
| dq_pack | all packaging rows | Every actually present article needs its complete independent opening empty/attached/reusable and external custody balance; add incoming supplier containers and additional articles before data use. | Per-article ownership and weighing records |
| dq_allocation | all inventory rows | Evidence dedicated/virtual subdivision then exchange-specific determining causality then residual same-gate contemporaneous market value; conserve all exchange vectors and disclose unresolved choices. | cp_allocation; ilcd-detailed-2010 |
| dq_provenance | all source-dependent rules | Use complete primary originals with headers/footnotes and neighboring alternate routes; technical synthesis is not one factory order or a universal numeric range. | Declared source locators and limitations |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all inventory rows | Reject a claimed application outside the section1 physical construction or route without renewed applicability review and complete actual atomic exchanges. Ordinary provider/auxiliary-UUID gaps require data-package resolution, not invented bindings. | cosmo-pct-tape-film; basf-psa-solutions; tepu-electric-tape-coater; louis-bopp-water-tape |
| validate_quantity | all inventory rows | Require consistent1kg net first-release reference, unique released_tape link, correct raw unit conversions, allocation before exactly one A_i/Q and Q0 load retention. Count/area-to-kg conversion without actual same-construction weighing fails; a numerical relationship that remains unknown cannot be called passing. |  |
| validate_gates | all physical ledgers | Require separate manufacturing, FG and combined wet/dry mass and relevant-element reconciliation plus independently evidenced species/water. Cancel internal Q/rework/packaging transfers. Closing FG is not added to production; gross physical dispatch remains real even when returns occur. A single residual cannot establish two unknown species. Explicitly check dryer-tank, cooling and other separately accounted in-process opening/closing quantities and vectors in manufacturing and consolidated gates, with no overlapping stock entries or fitted unknown losses. |  |
| validate_evidence | all source-dependent rules | No source default recipe/yield, EPA solvent factor or low/zero-VOC assumption, automatic waste credit, universal allocation percentage, unverified UUID compatibility, or unsupported chemistry/phase change is acceptable. Missing core boundary evidence or unreconciled quantities remain explicit unresolved findings, not manufactured passes. | epa-pstl-1982; ilcd-detailed-2010 |
| validate_pack | all packaging rows | Require the complete per-article boundary_pack balance including opening/closing attached WIP/FG and reusable stock, gross dispatch and both external return directions; no net-Q proxy, new purchase on every reuse, or automatic co-product. |  |
| validate_data | all inventory rows | Require collection protocol, all raw fields, method, unit, complete period, scope, aggregation and quality evidence plus full calculation Inputs/Output and source attribution. Report unmeasured emissions and unfinished service scope; finite measurement and projection checks establish engineering consistency only. |  |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground gate-to-gate manufacture with separately stated matched FG services |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible declared construction/site/period and upstream link; manufacture and actual service supplements kept distinct |
| excluded_use | All36920 coverage; comparative carton functional performance; medical/electrical certification; approved methodology; unobserved future service or end-of-life credit |
| required_metadata | All section3 qualifiers; native identity restrictions; lot and original Q; source/route; actual gate and service scope; upstream supplier boundaries |
| required_quality_disclosure | Raw unit and stock/vector completeness; unknowns; allocation evidence; species/phase and packaging reconciliation; actual quality tests; unfinished FG services |
| update_trigger | Changed film/skin/treatment or adhesive formulation; heat/recipe/printing/lining route; actual added flow; changed quality gate or supplier; new measurement or methodological evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Structure and Explanatory Notes30June2025; PDF177–179; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 36920 title and adjacent36330/36490/36910/36930 boundaries only; no recipe or mapping acceptance |
| cosmo-pct-tape-film | handbook | Cosmo Films Transparent Film (Tape-Textile Grade); complete PCT-1/PCT-1(HCL)/PCT-2 product section; https://www.cosmofilms.com/productlist/transparent-label-over-lamination-industrial-films | Real purchased coextruded tape web; single-side corona/untreated reverse/back-treatment-free supply; both-side-treated counterexample; no universal dimensions/grade compatibility |
| basf-psa-solutions | handbook | BASF Solutions for Pressure-Sensitive Adhesives; complete PDF2–5 with printed3–8 labels/specialty/graphic/masking tables; https://www.basf.com/dam/jcr:af4f1f47-5762-36bc-97b9-ab5d4358ec87/basf/www/hk/documents/en/products-industries/dispersions/adhesives/BASF_PSA_brochure_EN.pdf | Whole coater-ready aqueous acrylic supply capability and coating methods; distinguish named paper/graphic/specialty and UV formulations; no same-SKU carton recipe or numeric defaults |
| tepu-electric-tape-coater | handbook | Dongguan Tepu Automation TP-1000mm BOPP tape coating machine with10m electric heating oven; complete product description/specification/application/raw material/FAQ; https://www.teputapemachine.com/product_detail/1441356532388933632.html | BOPP film/glue/paper-core supply to electric-heater water-tank drying/slitting/rewinding and compressor; gas/printing alternatives; nominal ratios/daily water/ratings and machinery packing are not tape-inventory defaults |
| louis-bopp-water-tape | handbook | Louis Adhesive Tapes OPP Acrylic Water Based Tape No.430/440/450/P83/P84/P85/P86; complete one-page product sheet including table and custom-size note; https://louistapes.com/wp-content/uploads/2020/01/OPP-Acrylic-Water-Based-Tape.pdf | Independent actual BOPP water-acrylic carton-sealing tape endpoint/roll/core state; multiple grades and custom sizes; no universal thickness/weight/service life or quality certification |
| epa-pstl-1982 | official_guidance | US EPA AP-42 Section4.2.2.9 Pressure Sensitive Tapes and Labels8/82 reformatted1/95; complete PDF1–7 including Figure4.2.2.9-1 and Table4.2.2.9-1 with all notes; https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2j.pdf | Pressure-sensitive web/coating/exhaust topology and explicit solvent/burner/primer-release/control countercontext; no transfer of solvent VOC factors/control efficiencies/old low-zero VOC or market-share claims to aqueous electric tape |
| ilcd-detailed-2010 | official_guidance | European Commission JRC ILCD Handbook General guide for LCA Detailed guidance First edition March2010; sections7.9.2–7.9.3 PDF275–292 printed255–272 including conditions/examples/footnotes/provisions; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation scenario only; dedicated/virtual subdivision then exchange-specific determining physical causality then residual same-gate market value and sum conservation; no generic recycling or avoided-production credit |
