---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.other-articles-for-medical-or-surgical-purposes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Sterile needle-free polypropylene monofilament surgical suture manufacturing

## 1. Scope and Applicability

Environmental cradle-to-production-release LCA of one specified, undyed, uncoated, nonabsorbable polypropylene monofilament suture, supplied without a needle, dry in its sterile barrier after gamma irradiation. The reference is a physical supplied article, not an amount of treatment or a claim of equivalent clinical performance. Record actual manufacturing, QA, packaging and external treatment resources; this PCR gives no clinical, surgical or sterilisation operating instructions or parameters.

CPC 3.0 identifies 35290 through HS 2022 heading 30.06. Chapter 30 note 4(a) positively identifies sterile suture materials there; 35279 corresponds to 30.05 dressings. This narrow suture scope does not cover the entire residual category. Exclude medicaments, blood products, vaccines, wadding and dressings, dental/bone cements, first-aid kits, ostomy articles, free surgical needles, syringes, catheters and other instruments/appliances. Regulatory designation as a medical device does not itself assign CPC 48150. Nonsterile industrial polypropylene filament is an input or intermediate, not the supplied reference article. Sources: `un-cpc3-2025`; `wco-hs2022-ch30`.

The FDA applicant case establishes an actual sterile single-use polypropylene monofilament article offered without a needle, including an undyed option and gamma treatment; its packaging table identifies aluminium foil and polyester. The historical EPO patent supports manufacturing stage identification, not a current factory recipe or environmental intensity. Its ethylene-oxide example is not the gamma route selected here. The FDA testing paragraph's reference to an absorbable suture conflicts with its nonabsorbable device description; that paragraph supplies neither identity nor performance assumptions here. Sources: `fda-k993997-suture`; `epo-0800834-suture`. The FDA summary does not explicitly affirm uncoated supply; uncoated remains the bounded PCR specification to verify through actual SKU/BOM before concrete dataset use. Missing future actual SKU/quantity/provider records alone do not bar category methodology authoring.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.other-articles-for-medical-or-surgical-purposes |
| classification_refs | CPC 3.0 35290; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-35290.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | One undyed, uncoated, nonabsorbable polypropylene monofilament surgical suture specification, needle-free and gamma-sterilised in a dry sterile barrier |
| excluded_products | Dyed, coated, braided or absorbable sutures; attached-needle products; surgical meshes; tissue adhesives; nonsterile filament; dressings; medicaments; other HS 30.06 articles; standalone medical instruments |
| representative_product | One declared needle-free polypropylene monofilament suture SKU with fixed diameter class, cut length, resin formulation and sterile-pack configuration |
| production_route | Purchased undyed polypropylene resin; melt extrusion, liquid quench, drawing, thermal stabilisation, cutting and winding, dry barrier packaging, contracted gamma irradiation, QA and first quality release; document actual sequence |
| market_state | Dry, sterile, single-use needle-free suture at its first production quality-release gate; carrier and packaging included in burdens but excluded from net reference mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one declared sterile needle-free polypropylene monofilament suture specification |
| How much | 1 kg net conforming suture thread at first production quality release |
| How well | Matches the documented resin/formulation, monofilament structure, diameter class, cut length, undyed/uncoated state, needle-free configuration and actual sterile-pack release specification; no clinical equivalence assumed |
| How long or cycle | One first production release; retain labelled shelf-life and storage conditions as descriptors, with no treatment-duration or patient-outcome denominator |
| reference_flow_link | finished_suture |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Health and Medical Supplies `4ce36b87-0ca6-418f-af96-515b40dbb46f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and diameter class; cut length and measured thread mass; polypropylene formulation and supplier grade; undyed and uncoated state; absence of needle; dry sterile barrier bill of materials; gamma-treatment provider and treatment-record linkage without operating instructions; release gate and unique first-release cohort; production geography and period; WIP mass and carried burdens; separately reconciled finished-stock and dispatch ledger; QA sample and reject disposition; packaging masses; included storage/handling interval; supplier and upstream-provider compatibility |

Declare every qualifier in the data package. The verified native name is Health and Medical Supplies / 卫生材料及医药用品, with medical-consumable synonyms. It is a Product flow with only reference Mass kg factor1; no additional name-property, CAS, form/grade, route or supply-geography qualifier is provided. Its complete comment discusses emergency medicine/medical-supply stockpiles, home-care supplies and DME; it specifies no composition, needle, coating, sterility route or provider quantity for this suture. This PCR conditionally selects only the one PP needle-free suture member with all external primary evidence and actual SKU/release qualifiers; never aggregate the different supplies in that comment into one reference or treat the family UUID as sterility, certification, efficacy or supplier proof. Do not substitute a dressing, instrument, resin, nonsterile filament or mixed emergency-supply bundle for this terminal suture.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_net_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of unique positive first quality-released net thread masses for the same SKU, route and supplied state. Use calibrated weighing or measured count-by-SKU thread mass, retaining sample size and uncertainty. Exclude needles, carriers, pouches, cartons, QA-consumed samples and rejected thread. Actual shipments are not Q. |
| once_only_normalisation | all inventory amounts | Recorded physical property | original unit per kg | Collect undivided raw period amounts and burdens in the protocols. Apply cr_normalise once after raw conversion and WIP burden reconciliation; the card and aggregation label describe that same reporting operation, not successive divisions. |
| volume_and_energy | raw resource records | Actual volume, mass or energy | m3; kg; kWh; MJ | An integrated volume is already a period total and receives no extra time multiplier. A measured rate requires its actual duration. Use independently supported density for the actual solution and conditions; no native secondary coefficient is presumed to be density. Preserve kWh; convert to MJ only when needed using 1 kWh = 3.6 MJ. |
| product_mass_balance | thread and formulation ledgers | Mass | kg | Balance material issues plus opening WIP against Q, closing WIP, QA samples, rejects and separately measured losses. Track polymer and formulation constituents independently of water. Stretching and heat setting change dimensions and structure, not automatically polymer mass or reaction-water stoichiometry. Do not infer an emission, species or reaction-water quantity from a balance residual. |
| supply_formulation | purchased resin, cleaner and pouch | Mass | kg | Purchase each complete supplied formulation or assembled pouch once. Resin stabilisers, cleaning-solution water and pouch layers are compositional subledgers, not duplicate purchases. If separately acquired ingredients or a different route occur, add specific atomic rows and measured mixing burdens before using that dataset. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased undyed resin and finished packaging components received for the declared extrusion route; upstream resin, packaging and utility production linked as compatible datasets; customer-owned thread remains owned through external irradiation |
| starting_condition_role | Explicit material and processing starting condition, not a claim that resin production or external treatment has zero burden |
| product_classification_scope | Sterile suture article positively covered by HS 30.06; no extension to dressings, pharmaceuticals, instruments or all CPC 35290 goods |
| recursive_input_rule | A purchased ready-made suture remains an upstream product with its carried burden; it is not newly extruded output here. This resin-starting methodology cannot represent repacking alone without a separately disclosed boundary adaptation. |
| upstream_dataset_requirement | Match each actual material, composition, supply state, geography, year and technology; identity UUID alone supplies neither provider quantities nor suture-grade qualification |
| disclosure | Identify production and contractor sites, actual packaging and treatment sequence, first-release gate, WIP carried burdens, failed runs, rejects, internal transfers, post-release storage and shipment reconciliation, allocation and unresolved identities |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | p_suture | Include input receipt and handling, extrusion, quench and cooling, drawing, holding and thermal stabilisation, cutting, winding, packaging, actual clean-area and QA resources, failed runs, rework, waste and emissions through first release. Process stages come from the disclosed patent route; actual resources and quantities require foreground records. | `epo-0800834-suture` |
| boundary_external_gamma | p_gamma | Include the actual external gamma treatment burden, load allocation, rejected loads, associated handling and return freight. Preserve a route-compatible provider dataset; do not substitute the patent's EO example or omit contractor burdens. Transfer and return of owned thread are internal movements, not purchases or new output. | `fda-k993997-suture` |
| boundary_storage | p_store | Preserve every actually included warehouse, handling, packaging and dispatch burden. Pre-release burdens belong to production; post-release stock and dispatch remain a separate ledger with the same cohort IDs. Exclude distribution beyond the declared boundary only with explicit disclosure. | |
| boundary_environment_only | all datasets | Clinical use, surgical technique, therapeutic equivalence, sterilisation instructions and patient outcomes are outside this manufacturing LCA. Record resource and release evidence without setting clinical or sterilisation operating parameters. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_suture | Resin-to-packaged-suture manufacture and first release | required | Declared extrusion and dry-pack route | Owns production, material balance, WIP and terminal reference | 1 kg first-released net thread |
| p_gamma | External gamma treatment | required | Selected supplied state is gamma-sterilised | Owns contractor treatment service and load burden evidence | Same released cohort; no new product count |
| p_store | Included storage, handling and freight | conditional | Operations inside the declared boundary or an explicitly reported storage/dispatch supplement | Owns logistics burden and finished-stock reconciliation | Same cohort with interval and gate declared |

### Process: Manufacture and first release (`p_suture`)

#### Inputs

##### Product flows

###### Suture resin (`polypropylene_in`)

Purchased undyed resin actually issued to the declared route, including failed runs and material carried in WIP. Native CAS is 9003-07-0; production mix at factory and polypropylene production route, with no specified geography or suture grade. Native 34740 classification is inconsistent; retain this debt and obtain supplier formulation/grade and provider compatibility independently. The commercial resin, including supplied stabilisers, is purchased once.

- Selected flow: Polypropylene `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production`
- Sources: `epo-0800834-suture`

###### Production electricity (`electricity_in`)

Meter all attributable extrusion drives, heating, cooling, winding, packaging, clean-area and QA electricity, including startup, failures, rework and actual internal handling. Shared-meter allocation requires complete causal records.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

###### Purchased process heat (`heat_in`)

Include actual purchased heat if used for thermal stabilisation or site utilities. Electrically generated heat already in electricity is not purchased again; absence requires actual route evidence.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

###### External water make-up (`water_in`)

Measure actual external make-up for quench, cooling and cleaning; internal circulation is not repeated external purchase. Convert measured volume using independently justified state-specific density.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`
- Sources: `epo-0800834-suture`

###### Supplied isopropanol cleaning solution (`ipa_solution_in`)

Conditional on actual site cleaning use; record the whole purchased aqueous formulation with measured supply assay and amount. Its isopropanol and water are compositional subledgers, not duplicate purchases. No cleaner concentration or operating recipe is prescribed. If another cleaner is used, add its individual exchange.

- Selected flow: Isopropanol cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_resources`

###### Purchased sterile barrier pouch (`pouch_in`)

One supplied dry sterile-barrier pouch, with actual aluminium, polyester and any sealant/adhesive layers disclosed. Count the purchased assembled pouch once; layer masses are a composition subledger. Keep failed seals, pack rejection and repacking consumption. The case does not establish a universal layer specification.

- Selected flow: Aluminium foil laminate pouch
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-k993997-suture`

###### Suture winding carrier (`carrier_in`)

Include only if this paperboard carrier is actually supplied in the declared pack. Weigh its complete supplied component and rejects; it is outside net thread mass. A different carrier material requires its own atomic exchange.

- Selected flow: Paperboard suture carrier
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

###### Secondary shipping carton (`carton_in`)

Measure actual carton consumption, rejects and loading configuration for the declared gate, including actual return/repack burdens. Do not infer packaging intensity from net thread mass.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`

#### Outputs

##### Product flows

###### First quality-released suture (`finished_suture`)

The single terminal output is undyed, uncoated, nonabsorbable, needle-free, dry-packed and gamma-sterilised, with first quality release complete. Q counts unique positive net thread mass once, including the newly released portion still in finished stock. Packaging remains in burdens but is outside thread mass. Reaccepted returns and closing finished stock are not extra new production. The verified native name is Health and Medical Supplies / 卫生材料及医药用品, with medical-consumable synonyms. It is a Product flow with only reference Mass kg factor1; no additional name-property, CAS, form/grade, route or supply-geography qualifier is provided. Its complete comment discusses emergency medicine/medical-supply stockpiles, home-care supplies and DME; it specifies no composition, needle, coating, sterility route or provider quantity for this suture. This PCR conditionally selects only the one PP needle-free suture member with all external primary evidence and actual SKU/release qualifiers; never aggregate the different supplies in that comment into one reference or treat the family UUID as sterility, certification, efficacy or supplier proof.

- Selected flow: Health and Medical Supplies `4ce36b87-0ca6-418f-af96-515b40dbb46f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_production`
- Sources: `fda-k993997-suture`

##### Waste flows

###### Polypropylene reject scrap (`pp_scrap_out`)

Measure externally removed rejected thread and polymer scrap, including destructive QA samples; record destination and contamination. Internal recirculated scrap is a tracked loop rather than a second outgoing waste or avoided-product credit.

- Selected flow: Polypropylene scrap
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

###### Rejected laminate pouch (`pouch_scrap_out`)

One actual composite waste stream from the supplied pouch, with measured layer composition and treatment. Do not separately count its full mass again as both aluminium and polyester waste.

- Selected flow: Aluminium foil laminate pouch scrap
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

###### Paperboard packaging scrap (`paper_scrap_out`)

Measure the actual collected paperboard stream from carriers/cartons when present; keep separate any other independently collected material or contaminated waste.

- Selected flow: Paperboard scrap
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

###### Water effluent to treatment (`wastewater_out`)

Measure actual quench/cooling purge and aqueous cleaning discharge crossing to the identified treatment provider; retain composition and density evidence. Do not duplicate a waste-to-treatment quantity as a direct water emission.

- Selected flow: Aqueous process effluent
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

###### Spent cleaning solution (`spent_cleaner_out`)

Conditional on the selected cleaner and a separate collected spent stream; measure total wet solution and actual treatment destination. Preserve assayed solvent and water subledgers.

- Selected flow: Spent isopropanol cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

##### Elementary flows

###### Measured water evaporation (`water_air_out`)

Include independently evidenced actual evaporation crossing to air; record free-water changes and inventory variation separately. An unknown balance residual is not measured evaporation or reaction water.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`

###### Measured isopropanol release (`ipa_air_out`)

Conditional on actual cleaner use and direct release; quantify this species independently with measured integrated ventilation and concentration or a separately justified species balance. Do not force solvent input to equal emission.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_losses`


### Process: External gamma treatment (`p_gamma`)

#### Inputs

##### Product flows

###### Contract gamma irradiation (`gamma_service_in`)

Record actual service activity in kg treated net thread and its independently supported provider burden per activity; disclose load allocation, pack mass and repeat/failed events. The service includes its declared operator resources; do not also add those resources as manufacturer electricity. A sterile certificate alone supplies no environmental intensity. No irradiation operating parameter is prescribed.

- Selected flow: Gamma irradiation service
- Flow property / unit: Mass / kg
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gamma`
- Sources: `fda-k993997-suture`


### Process: Included storage and freight (`p_store`)

#### Inputs

##### Product flows

###### Actual road freight (`road_freight_in`)

Record actual receipt, contractor outward/return and included dispatch trips with measured transported gross mass and distance. Net thread reference mass is not the freight payload. Exclude only trips already demonstrably covered by the purchased service inventory, preserving their burden through that link. Other modes require their own rows.

- Selected flow: Road freight transport service
- Flow property / unit: Transport work / tkm
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_logistics`

###### Included storage and handling electricity (`warehouse_electricity_in`)

Retain actually included warehouse lighting, conditioned storage, handling and dispatch electricity with measured occupancy/causal allocation and interval. Split pre-release production from post-release stock/dispatch; cancel only internal goods transfers, never real electricity or rehandling burdens. Separate any additional fuel, heat, pack or refrigerant exchange if present.

- Selected flow: Electricity for warehouse operation
- Flow property / unit: Energy / kWh
- Amount rule: A / Q; the single reporting operation of section 8, preserving complete raw period amounts and applicable carried burdens first
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_logistics`



## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | production and WIP | Assign directly metered material and resource burdens to the actual SKU/cohort first. Include failed and zero-output runs and rework attributable to that cohort. Reconcile opening carried WIP burden, new period burden and closing WIP burden before cr_normalise; never discard rejected-run burden or divide it by a fictitious positive output. | |
| allocation_shared | shared equipment, QA, contractor loads and warehouses | Subdivide by actual metering where possible. Otherwise use documented causal machine hours, occupied load capacity or mass-time records with the complete shared denominator, including unsuccessful loads; disclose rationale, uncertainty and sensitivity. Do not assume equal burden per suture, per kg or per invoice without evidence. | `jrc-ilcd-allocation-2010` |
| allocation_scrap | rejects and recovered polymer | Internal regrind is a measured internal loop, not a second purchased input or saleable co-product. Keep its processing energy and repeated passes. Record external scrap treatment with actual mass and route; no automatic avoided-virgin credit. If recovery substitution is separately modelled, disclose its independent assumptions and avoid a second credit. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_production | p_suture | Product, material and WIP ledger | Batch production and inventory records | SKU; cohort; site; period; raw issues; opening and closing material stock; opening and closing WIP by stage; carried WIP burdens; unique first release IDs; thread mass; QA samples; rejects; losses; returns; repeated passes | Production data owner retains undivided raw batch/period quantities and opening/closing carried burdens; weigh each physical stream or retain traceable count-to-thread-mass measurements; reconcile transfers and release IDs before calculation | kg; item; m; native burden units | Every batch and stock closure | Full matched period including failed and zero-output runs | Manufacturer and traced offsite WIP | per 1 kg reference flow | Calibrations; weigh sheets; BOM; resin certificates; release register; WIP valuation and burden trail; reject and return records |
| cp_resources | p_suture | Utility and cleaning resources | Meter, issue and QA-resource logs | SKU; cohort; period; meter totals; rate and duration when applicable; cooling make-up and discharge; supplied cleaner amount and assay; measured losses; QA and clean-area shares; complete shared denominator | Resource owner retains unnormalised period totals including standby, startup, failed runs, rework, QA and actual cleaning; distinguish recirculation from external make-up; reconcile shared-meter allocation and WIP burden attribution | kWh; MJ; kg; m3; h | Each meter interval and issue | Same full production period | Manufacturer with shared utilities identified | per 1 kg reference flow | Meter calibration; invoices; safety data sheets; density evidence; allocation worksheets; QA-resource records |
| cp_packaging | p_suture | Pouch, carrier and carton | Packaging issue and reject records | SKU; pack specification; supplied component mass; counts; opening/closing stock; issues; pack rejects; pouch layer composition; secondary pack configuration | Packaging owner retains complete undivided purchased-component and consumption quantities, failed packs and repacking; measure unit component masses; retain layer composition as a subledger of the whole purchased pouch | kg; item | Each lot and stock closure | Same matched production period | Packaging line and contracted packer if used | per 1 kg reference flow | Component drawings; supplier composition; sampling/weighing records; stock reconciliation; pack-integrity release evidence |
| cp_losses | p_suture | Waste and direct releases | Weigh, manifest and monitoring records | Cohort; period; polymer scrap; pouch scrap; paper scrap; aqueous effluent; spent cleaner; evaporation; actual species; destination; method and uncertainty | Environmental owner retains raw period masses or measured concentrations with integrated carrier amounts; distinguish waste-to-treatment from direct elementary releases; quantify species independently, rather than fitting closure or COD residuals | kg; m3; concentration with basis | Each transfer and monitoring interval | Full matched period including failed runs | Manufacturer to identified treatment or environmental boundary | per 1 kg reference flow | Waste manifests; laboratory results; ventilation and discharge measurements; independent mass-balance reconciliation |
| cp_gamma | p_gamma | Contract gamma irradiation service | Contractor load and burden records | Provider; load and cohort IDs; received/returned thread and pack mass; failed/zero-release loads; repeated treatment events; occupied capacity; full load denominator; raw treatment energy and source-service records; allocation and scope | Contractor data owner supplies undivided actual treatment burden or a compatible service inventory and raw activity; link every load to owned-goods transfers and returns; retain failed loads and rework; never replace burden evidence with a sterility certificate alone | kg treated thread; original service/resource units | Every load | All loads linked to the released cohort and WIP | Named gamma provider, with site and actual logistics scope | per 1 kg reference flow | Load ledger; invoices; compatible provider inventory; resource evidence; release and return reconciliations; proof of exclusions preventing duplicate freight |
| cp_logistics | p_store | Storage, handling and road freight | Stock, meter and consignment records | Cohort; first-release IDs; finished opening/closing stock and carried burdens; first-release transfer Q; returns; dispatch; losses; kg-hours; route; payload; distance; actual packaging and handling resources | Logistics owner retains undivided full interval records and carried burdens; split pre-release and post-release accounts; preserve actual trips, storage electricity and handling, including failed returns; identify the owned internal transfers to eliminate on consolidation | kg; kg h; kWh; tkm | Every consignment and stock/meter interval | Declared storage/dispatch interval linked to production cohorts | Manufacturer warehouse, provider warehouse and actual freight routes | per 1 kg reference flow | Stock and dispatch reconciliation; measured payload/distance; occupancy allocation; meter records; retained burden carry-forward and return IDs |

### Calculation Rules

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cr_release | unique production denominator | Q = sum of positive net thread masses first quality-released for the matched SKU, route and supplied state. A return or repeated acceptance of the same goods adds no new Q. No closing finished stock is added to this production output. Zero Q makes normalisation undefined; retain the failed run and its burdens. | first release IDs; measured thread masses; SKU and route; return/rework links | Q in kg | |
| cr_raw_convert | raw amount conversions | Count-based packaging consumption equals actual consumed count times measured mass of that same supplied component. Volume-based mass equals integrated volume times independently supported density at the recorded state; rate totals require actual duration. Preserve the complete supplied formulation, with constituents as subledgers. | raw counts; measured unit masses; integrated volumes; density and conditions; rates; durations; assay | Converted undivided raw period amounts | |
| cr_wip | production burden attribution | B_release = B_open_WIP + B_period - B_close_WIP for each burden dimension after causal allocation to the matched cohort. B_period retains startup, failures, QA, rejects, rework and repeat processing. Opening/closing WIP carry stage-specific embodied burdens, not just a mass subtraction. Reconcile material stock issues separately. | opening WIP mass and burdens; complete raw period burdens; closing WIP mass and burdens; shared allocation | Burdens attributable to first release, before normalisation | |
| cr_normalise | reporting all non-reference rows | Report each reconciled attributable raw amount or burden A as A / Q once for the declared 1 kg reference flow. Protocol aggregation_rule and inventory cards are labels for this same operation; collection_method retains raw amounts. Apply separately to every resource, waste, emission and service dimension after conversion and cr_wip where applicable. | A; Q; cr_raw_convert; cr_wip; causal allocation | Inventory per 1 kg reference flow | |
| cr_stock_dispatch | separate finished-stock and delivery account | Finished opening stock + first-release transfer Q + identified physical returns = actual dispatch + closing finished stock + measured losses, with internal movements reconciled. The production output already includes all newly released Q; closing stock is not another production output. If a later study selects actual net delivery, retain opening/closing finished stock with carried burdens, use actual delivered mass as its denominator and keep undelivered goods outside delivery Q. Do not mix the two gates. | finished opening and closing stock; carried burdens; Q transfer; physical returns; dispatch; losses; gate | Reconciled storage/dispatch supplement, with internal transfer cancelled on consolidation | |
| cr_physical_balance | polymer, water and actual emissions | Independently reconcile polymer/formulation mass and water: material issues plus opening WIP equal released thread plus closing WIP, QA samples, rejects and measured losses. Quench water make-up has independently measured discharge, evaporation and inventory change. No invented reaction water; no unknown emission and unknown water amount fitted to one residual. | material issues; composition; Q; WIP; QA samples; reject weights; measured species; water make-up; discharge; evaporation; stock changes | Separate physical balances and unexplained residual with uncertainty | |

### Data Quality Requirements

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_reference | finished_suture | Use the selected broad medical-consumable family only with complete external article evidence, actual SKU and release records; recheck all native names, comments, CAS, form/grade, route, type, geography and property/unit support. Its stockpile/home-care/DME context is not a specification for this suture. Verify undyed, uncoated, needle-free, dry and gamma-treated supply state; no other member or mixed supplies can be the reference. | Complete native direct and original product evidence; SKU/BOM and release records; conditional family identity and unknown grade/provider facts disclosed separately |
| dq_pp | polypropylene_in | Native Polypropylene has CAS 9003-07-0, production-of-polypropylene route and factory production mix, no additional grade/form name component and empty geography; no delivery location is specified. Its comment covers semicrystalline PP and isotactic/syndiotactic variants, not suture-grade certification. Its 34740 classification conflicts with the polymer identity; retain that defect. Accept only as broad raw polymer identity, never proof of the actual supplied resin formulation, location or provider inventory. | Complete native direct record; supplier resin certificate and compatible upstream inventory |
| dq_evidence_scope | external source use | FDA K993997 is a historical applicant case, not current universal inventory. Its page 3 absorbable wording is not used; pages 1-2 explicitly identify the nonabsorbable article. EPO process examples do not set yield, electricity, formulation, gamma burden or operating conditions. The selected route requires actual gamma-provider evidence. | Source locators; original limitations; foreground records and explicit route decisions |
| dq_completeness | all period ledgers | Preserve failed/zero-output runs, WIP and finished-stock carried burdens, repeat passes, returns, QA, packaging, storage and real contractor loads. Ordinary auxiliary identity/provider matching remains distinct from the conditional family-reference and actual SKU/specification evidence. No missing amount is silently set to zero. | Complete cohort closure and uncertainty/gap register |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference_gate | reference and production | Require the single terminal Product output finished_suture with 1 kg net thread at first quality release. Confirm its physical supplied state and selected native-family UUID against the declared reference. Reject a shipment denominator mixed with new release Q, or Q plus the same batch's closing finished stock as extra production. | |
| validate_period | raw records and calculations | Verify complete matched raw numerators, independent protocol owners, WIP carried burdens, unique positive Q and one normalisation. Retain zero-output periods as burden evidence; a finite arithmetic check does not establish measurement completeness or scientific approval. | |
| validate_outsource | gamma and logistics | Check provider compatibility, all successful and failed load burdens, owned-goods return reconciliation and retained actual handling/freight/storage; eliminate internal transfer and duplicate service-resource accounting. | |
| validate_mass | physical balances | Keep polymer, supplied formulation, water, actual waste species and emissions independently evidenced. Report unresolved residuals and uncertainty; no invented reaction water, density, emission or COD closure. | |
| validate_scope | interpretation | No coverage claim for the whole 35290 category, no clinical equivalence claim and no general medical-use shortcut to classify a product. A native schema pass alone cannot resolve final reference or provider applicability. | `un-cpc3-2025`; `wco-hs2022-ch30` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset only after actual production data completion and applicable independent review |
| downstream_use | Embodied manufacturing burden of the same sterile needle-free undyed polypropylene monofilament suture specification and declared release gate |
| allowed_use | Environmental modelling with explicit quantity, SKU, supplied state, foreground boundary, geography/year and provider compatibility |
| excluded_use | Clinical or efficacy comparison; surgical or sterilisation instruction; generic medical supplies; other sutures or instruments; use/end-of-life claims inferred from this release-gate inventory |
| required_metadata | All reference qualifiers; material and pack specifications; release/cohort identifiers; stage boundaries; treatment-provider and logistics scope; actual raw period and carried burdens; allocation; upstream datasets and units |
| required_quality_disclosure | Conditional broad-family reference and actual SKU/specification evidence; native polypropylene classification defect and unspecified geography/grade; source case limitations; missing measurements/providers; stock and WIP reconciliations; uncertainty and omitted scope without zero imputation |
| update_trigger | Final reference identity resolved; change of resin/formulation, diameter/length, coating or dye, needle configuration, pack, irradiation provider/route, gate, geography, period, WIP or allocation method |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, printed p.171; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 35290 corresponds to HS 30.06; 35279 to HS 30.05. Classification context only; no product recipe or environmental amount. |
| wco-hs2022-ch30 | official_guidance | WCO, HS 2022 Chapter 30, note 4(a), headings 30.05 and 30.06; https://www.wcotradetools.org/en/harmonized-system/2022/en/0630 | Positive sterile-suture scope and separation from dressings and other pharmaceuticals. Public legal nomenclature only; subscription explanatory notes not acquired; no medical-use shortcut or full-residual coverage claim. |
| fda-k993997-suture | official_guidance | FDA-hosted applicant summary K993997, prepared 29 September 1999, PDF pp.1-3, printed pp.9-11; https://www.accessdata.fda.gov/cdrh_docs/pdf/K993997.pdf | Actual historical nonabsorbable sterile PP monofilament, undyed and needle-free options, gamma treatment and dry foil/polyester packaging. Applicant-specific, not a universal/current inventory or efficacy basis; conflicting absorbable wording on p.3 is not adopted. |
| epo-0800834-suture | literature | EPO, EP0800834B1, 15 January 2003, paragraphs 0009-0018, pp.2-4; https://data.epo.org/publication-server/rest/v1.0/publication-dates/20030115/patents/EP0800834NWB1/document.pdf | Structural manufacturing-stage evidence for PP resin extrusion, quench, drawing, thermal stabilisation and packaged sutures. Historical patent, not foreground measurements, a universal recipe or intensity; its EO example does not support gamma burdens. No operating parameters adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, §7.9.3, printed pp.257–258 (PDF pp.277–278). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only the declared attributional context in which allocation is required: virtual subdivision, exchange-specific determining physical causality and only then contemporaneous market values of genuine residual co-functions in their actual condition at the same process exit. Supports allocation method, not this product’s industrial route, recipe, measured quantities, fixed shares, substitution credits or scientific approval; it does not literally prescribe this PCR stock/cohort implementation. |
