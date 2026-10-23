---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-phosphorus-other-than-diammonium-phos-3b0934bd
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Bulk liquid ammonium polyphosphate from wet-process superphosphoric acid

## 1. Scope and Applicability

This PCR covers bulk aqueous ammonium polyphosphate (APP) base fertilizer made by pipe-reactor ammoniation of received wet-process superphosphoric acid (SPA), dissolution with water and supplemental ammonia, indirect water cooling, storage and net bulk loadout. APP is a mixture of condensed and orthophosphate ammonium salts in water; it is not a single pure repeat unit, dry polymer or kg of nutrient. The historical liquid route in `us-epa-app-1981` pp.80–83/Figure31 supports this process distinction, without prescribing its example settings or quantities.

Exclude DAP and MAP products, dry APP granulation/flame-retardant powders, dissolution of purchased solid APP, nitrophosphate/Odda production, cold blending of purchased finished liquid APP, dry NPK blends, PK fertilizer and potassium nitrate. Intentional potassium, nitrate/urea, sulphur, micronutrient, inhibitor, antifoam or other additive formulation requires separately evidenced atomic ingredients and method extension; it is not covered by a broad fertilizer label. Simplot product14090 is evidence of a marketed aqueous NP product only: its grade, phosphate distribution and trace Mo do not prove an additive-free target SKU or establish defaults [`simplot-app-14090`].

Record the actual route before applicability. Include any real supplied steam and return; this method does not assume heat-free NH3 vaporisation. On-site fuel combustion, refrigeration, chemical cooling-water treatment, direct wastewater discharge or final on-site treatment require separately evidenced utility/treatment and atomic emission inventories before dataset completion. These activities are not removable by relabelling the foreground boundary. The baseline is additive-free base production with indirect water cooling and bulk delivery; do not invent packaging exchanges or omit actual container supply.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.fertilizers-containing-two-nutrients-nitrogen-and-phosphorus-other-than-diammonium-phos-3b0934bd |
| classification_refs | CPC 3.0 34644; proposed narrower subset, subject to independent acceptance [un-cpc3-34644] |
| covered_products | Aqueous APP base fertilizer from wet-process SPA pipe ammoniation, with measured N, total P and phosphate distribution |
| excluded_products | DAP; MAP; solid APP; nitrophosphate; cold finished-solution blending; NPK/PK/NK; fortified formulations; packaged products |
| representative_product | Actual accepted additive-free aqueous APP grade, not a universal 10-34-0 or 11-37-0 recipe |
| production_route | Received SPA and liquid NH3; vaporisation and pipe reaction; dissolution/supplemental ammoniation; water cooling; recovery; storage; bulk loadout |
| market_state | Net supplied aqueous mixture at factory gate; no crop-response or nutrient-equivalence claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared liquid APP fertilizer manufacturing product |
| How much | 1 kg accepted net aqueous product |
| How well | Declared N/P assays, ortho/polyphosphate distribution, free water/impurities, density and temperature, pH, storage condition and acceptance specification |
| How long or cycle | One factory-gate supply event; actual manufacturing/storage period disclosed |
| reference_flow_link | app_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fertilizers containing two nutrients: nitrogen and phosphorus, other than diammonium phosphate and monoammonium phosphate' `5c3cdc47-baeb-48f6-85f0-1a603ea3c19a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Aqueous APP; actual grade/SKU; total and available P analytical definitions; P versus P2O5 equivalent; total/ammoniacal N; condensed/orthophosphate distribution and molecular/composition basis; measured carrier water/impurities; density/temperature; pH; storage stability/acceptance; no added formulation ingredients; wet-process SPA origin/assay; liquid NH3 supply and vaporisation; pipe-reactor route; cooling and steam/return configuration; bulk delivery; site/period; supplier reference quantities |

Declare every qualifier in the foreground package. The broad reference identity encompasses this explicitly restricted NP subset without specifying contrary chemical species, state or route. It does not establish a supplier process or quantity basis. DAP/MAP that contain some condensed phosphate do not become this product merely because APP is detected. Only app_product is a reference output; retain intermediate measurements within the foreground unit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg net accepted supplied aqueous APP, including carrier water and dissolved species, excluding transport tare. Collect with cp_product. All inventory and collection bases are per 1 kg reference flow. |
| feed_solution_basis | spa_feed; ammonia_feed; process_water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve complete supplied-mixture mass and actual assays. Acid P2O5-equivalent is not pure H3PO4 mass or whole-feed mass. Carrier water already in SPA is not another external water input. |
| nutrient_basis | app_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product kg, elemental P kg, P2O5-equivalent kg and N kg are distinct. P2O5 is an analytical equivalent, not a molecule assumed present. Derive conversions from declared atomic masses and actual assay definitions; never set carrier water to one minus N minus P2O5. |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the native reference property; MJ = metered kWh times 3.6. Verify actual 1–35 kV user supply and provider basis. This property name does not turn electric energy into a fuel calorific-value model. |
| steam_basis | steam_in; condensate_return | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain delivered steam kg and measured state, returned kg/state, losses and supplier definition; usable heat is a separate enthalpy calculation, not a fixed MJ/kg. Unknown state/provider basis leaves a concrete dataset incomplete. |
| physical_ledgers | all inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve total mass, water and elemental N/P/F ledgers, stock changes, impurity destinations and reaction water. Reconcile H/O when condensation/hydrolysis changes water speciation. Keep physical exchange quantities distinct from allocated burdens. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received wet-process SPA mixture and liquid anhydrous NH3 at foreground inlet, with assay, origins, temperature and stocks |
| starting_condition_role | Feed-receipt interface for foreground measurement; not an upstream burden exemption |
| product_classification_scope | Liquid APP pipe-reactor subset of CPC34644; leaf coverage does not prove applicability |
| recursive_input_rule | Internal APP and recovered liquor remain internal with matched links. External finished APP reprocessing/cold blending is a different route and requires an evidenced extension, not free recursive input |
| upstream_dataset_requirement | Link acid concentration/condensation, NH3 manufacture, utilities and delivery exactly once using compatible whole-solution/active-component and state/reference-unit bases |
| disclosure | Site/period/grade; SPA source and concentration route; feed assays; supplier boundaries; transport; steam/cooling topology; capital-equipment treatment; recovery and external wastes/emissions; stocks; unmatched identity/provider bases |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | app_line | Include receipt, storage, NH3 vaporisation, pipe reactor, dissolution/finishing, cooling, vent capture, recovery, cleaning, storage and bulk loading in one foreground unit. Keep stage sampling without duplicating the reference product. | us-epa-app-1981 |
| boundary_upstream | all external inputs | SPA receipt does not remove its upstream acid manufacture/concentration burden. Do not use orthophosphoric-acid or DAP/granulation quantities for this condensed-acid liquid route. Supplier reference basis must be matched before background calculation. | us-epa-app-1981 |
| boundary_releases | app_line | Inventory actual vent, fugitive and wastewater origins, controls, compositions and receivers; include startup/shutdown and spills. Add identified missing species and separate actual utility/treatment processes before completion. A zero or non-applicable row needs affirmative operational evidence. | eu-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| app_line | Feed receipt through liquid APP bulk loadout | required | Applicable SPA pipe-ammoniation line | foreground production | 1 kg accepted net aqueous APP |

All cards are external exchanges of app_line. Stage flow sheets must preserve pipe melt, finishing liquor, cooling circulation, recovered liquor and tank transfers with equal quantities at both ends. Gross internal circulation is not fresh consumption. Applicable amounts come from complete period records divided by the same accepted product mass; no default yield, recipe or positive emission is prescribed.

### Process: Liquid APP production (`app_line`)

#### Inputs

##### Product flows

###### Wet-process superphosphoric acid (`spa_feed`)

Measure the complete supplied condensed-phosphate acid mixture in kg. Collect total P, P2O5-equivalent assay, ortho/polyphosphate distribution, free water, impurities, temperature and origin. Do not use kg pure H3PO4 or a nominal acid percentage as supplied acid mass.

- Selected flow: Wet-process superphosphoric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_feeds
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feeds`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Ammonia, anhydrous, liquid (`ammonia_feed`)

Record received liquid anhydrous NH3 mass and purity, stock changes and vaporisation conditions; retain total feed and split between pipe reactor and finishing vessel in stage records. Vapour formed inside this unit is an internal transfer, not a second purchased ammonia input.

- Selected flow: Ammonia, anhydrous, liquid `6928be4f-282b-4448-8f2a-f8c746621303`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_feeds
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feeds`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Process Water (`process_water`)

Meter externally supplied dissolution, scrubbing make-up and cleaning water separately by use before aggregation. Include only fresh external amounts; feed-acid water and internal recovery are component/internal ledgers. Actual water quality and supplier must match this treated industrial-water identity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Cooling water (`cooling_water`)

Record external cooling-water delivery or make-up in kg, temperature, source and cooling topology. Do not count gross internal circulation as external consumption. Distinguish purchased cooling-water circulation with a matched return from an on-site loop with make-up, blowdown, drift and evaporation.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Alternating current (`electricity`)

Meter actual 1–35 kV grid-average supply for feed pumps, NH3 handling/vaporisation auxiliaries, reaction controls, dissolution, cooling, scrubbers, storage and loading; include startup and cleaning. Preserve the native Net calorific value reference property, with MJ = metered kWh times 3.6. Other voltages require a verified separate identity before use. This UUID has native locationOfSupply CN (China); use only a documented matching CN user-side grid-average 1–35 kV supply interface, with actual provider and period. Non-CN supply requires a separately verified matching electricity flow and provider before linkage.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Supplied process steam (`steam_in`)

When external steam supplies vaporisation, startup or tracing, measure delivered kg, pressure (absolute/gauge), temperature, dryness, supplier reference basis and actual return conditions. Calculate usable heat separately from the paired enthalpy balance. The broad steam identity has a Mass reference and no pressure/state limit; it supplies no density, enthalpy or background process. No assumed pressure, kg-to-MJ factor or free thermal service; documented absence is required for non-applicability.

- Selected flow: Steam, in chemical industry `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fertilizers containing two nutrients: nitrogen and phosphorus, other than diammonium phosphate and monoammonium phosphate' (`app_product`)

1 kg accepted net aqueous APP mixture at bulk loadout, including its measured carrier water and dissolved species. The broad identity is restricted by the declared liquid APP route and qualifiers. Exclude vehicle/tank tare; intermediate melt, finishing liquid and tank transfer stay in stage records, not additional reference outputs.

- Selected flow: Fertilizers containing two nutrients: nitrogen and phosphorus, other than diammonium phosphate and monoammonium phosphate' `5c3cdc47-baeb-48f6-85f0-1a603ea3c19a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Cooling water (`cooling_return`)

Only when externally supplied cooling water returns to the external utility: meter kg and outlet temperature and pair with cooling_water. This is a technical return, not independent fertilizer coproduct. For an on-site closed loop the internal return is not an external exchange; retain blowdown/evaporation and any actual heat rejection.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Returned steam condensate (`condensate_return`)

For steam use, meter actual condensate returned across the boundary, its temperature, pressure and contamination status. Record condensate not returned in the appropriate separate waste/water ledger. Return credit is permitted only under the supplier definition, never automatic avoided-product substitution.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

##### Waste flows

###### Aqueous ammonium-phosphate process purge (`np_purge`)

Weigh non-recycled scrubber/cleaning/spill-recovery liquor dispatched to identified treatment, in its wet supplied state. Analyse N forms, total P, water, fluoride and relevant impurities; separate distinct receivers/compositions. Recycled liquor stays internal. No electrolytic-manganese wastewater proxy or assumed wastewater discharge.

- Selected flow: Aqueous ammonium-phosphate process purge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_wastes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Wet ammonium-phosphate tank sediment (`settled_solids`)

Record actual non-recycled tank/strainer deposits as wet kg with dry solids, retained liquid, N/P/F and metals. Keep recovered product and disposed sediment distinct. Identify receiver and acceptance, with no presumed fertiliser use or generic sludge treatment.

- Selected flow: Wet ammonium-phosphate tank sediment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_wastes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Cooling-water blowdown sent to treatment (`cooling_blowdown`)

For an on-site water loop, meter actual blowdown/drift collected as liquid waste, composition and recipient. This is distinct from NP liquor and from externally returned uncontaminated cooling water. Direct discharge requires separate receiving-medium water and pollutant elementary rows before a dataset is complete.

- Selected flow: Cooling-water blowdown sent to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_wastes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

##### Elementary flows

###### ammonia (`ammonia_air`)

Record NH3 species mass released after controls from reactor/finishing vessel, handling, storage, loading and fugitives, to outdoor air unspecified. Use compatible gas concentration/volume and event coverage; convert as-N monitoring to NH3 with the declared molecular-mass ratio. Do not substitute ammonium, subtract internal recovery twice or default to zero.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### hydrogen fluoride (`hf_air`)

Assess wet-acid fluorine and actual HF release after controls to outdoor air unspecified. Record kg HF species only; total fluorine measurements do not establish HF speciation. Retain unresolved speciation rather than assigning all fluorine to HF.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### silicium tetrafluoride (`sif4_air`)

Record actual SiF4 species mass released to outdoor air unspecified when present. Keep the measured F contribution separate from HF; neither total-fluoride mass nor an arbitrary HF/SiF4 split is a species amount. Retain actual acid/vent speciation evidence.

- Selected flow: silicium tetrafluoride `fe0acd60-3ddc-11dd-a706-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### water vapour (`water_vapour`)

Record external water vapour to outdoor air unspecified, separately identifying reaction/dissolution vents and cooling evaporation in the water ledger. Exclude condensed/internal recovery and liquid drift counted elsewhere. Do not equate every unexplained mass deficit to evaporation.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### phosphoric acid (`phosphoric_acid_air`)

When chemically identified, record H3PO4 aerosol species mass to outdoor air unspecified after controls. Do not label all total-P aerosol as orthophosphoric acid or combine it with APP aerosol. Size-fraction/total particulate measurements are cross-checks and cannot duplicate the same aerosol species mass.

- Selected flow: phosphoric acid `0ce4546c-b005-422e-99ad-ced1c3677a27`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

###### Ammonium polyphosphate aerosol (`app_aerosol`)

Record the actual complete wet APP-mixture droplet release after controls to outdoor air unspecified: condensed and orthophosphate ammonium salts, carrier water and impurities, with measured total wet kg and constituent quantities. Do not use one polymer-component UUID for the complete wet droplets. Count retained droplet water in its liquid aerosol water ledger, not water_vapour. Keep this specific unresolved emission row until identity is verified. It is not acid-only mist, HF, total phosphorus or an arbitrary PM size bin. The phosphoric_acid_air row applies only to independently identified acid release outside this whole-mixture exchange. Preserve the whole-droplet physical account; chemical disaggregation for characterization requires measured constituents, separate verified species rows and an exact reconciliation that prevents adding both aggregate droplets and their constituent masses as independent releases. Missing speciation/characterization remains incomplete.

- Selected flow: Ammonium polyphosphate aerosol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured external amount divided by accepted product mass; retain applicability and composition under cp_air
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `us-epa-app-1981`; `eu-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | app_line | Preserve the complete unallocated physical balance, stocks, recovered liquor, product and waste quantities. Internal recovery is neither a coproduct nor an avoided virgin input credit. The same actual kg crosses both ends of every internal link. | eu-cww-2016; jrc-ilcd-2010 |
| allocation_single | app_product | The base line has one accepted APP product. Assign its attributable production, failed-batch, recovery and waste-treatment burdens to that product; N and P are constituents, not independently allocated coproducts. A sediment or purge does not become a coproduct without a real specification, receiver and demonstrated function. | jrc-ilcd-2010 |
| allocation_shared | all inventory rows | Subdivide physically distinguishable operations and directly assign metered burdens first. For inseparable shared burdens use demonstrated physical causality; if unavailable, document a study-consistent economic allocation with contemporaneous net product quantities/prices and sensitivity. Preserve total burden and shares summing to one; no default share. Actual independently sold material or exported heat requires explicit additional product, function, receiver and burden treatment before dataset completion. | jrc-ilcd-2010 |
| allocation_two_ledgers | app_line | Allocation changes the burden account only. Do not multiply physical product/waste/recycle kg by the allocation share, remove failed runs or claim both return credits and avoided-product credits for the same condensate/recovery. Keep supplier-defined technical returns distinct from independent coproducts. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Each protocol belongs only to app_line. All linked rows have a final basis of per 1 kg reference flow, while the original period totals are preserved before division. Select one complete consecutive reporting period for the same declared product grade, supplied state and manufacturing route. Include every relevant operating mode: startup, shutdown, failed and zero-output batches, cleaning, idle attributable utilities, rework, rejected lots, WIP and opening/closing inventories. Segregate genuinely different products/routes by traceable measurement and allocation; do not cherry-pick successful batches.

P is accepted net product generated in that complete period, in kg. Obtain P from calibrated acceptance weighing; alternatively reconcile bulk dispatch plus closing minus opening accepted-product stock, with transfers and returns reconciled to avoid counting rework twice. Retain the raw dispatch and stock figures. Saleable product brought in from another route is not newly produced P. Unfinished or rejected material is not accepted product. If P is zero, retain and report the entire raw activity/burden pool and WIP; no per-kg result can be calculated. Later rework must carry the documented origin/stock burdens without counting the original inputs again or deleting their burdens.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | app_line | app_product | Weighing and product acceptance | lot/SKU; net accepted kg; rejected/rework kg; dispatch; opening/closing accepted stock and WIP; N/P assays and definitions; phosphate distribution; water/impurities; density/temperature; pH; stability; release decision | Calibrated scale or independently calibrated tank-volume/density method at recorded temperature; acceptance laboratory method validated for the actual matrix; link every lot and stock record | kg; mass fractions; declared assay units | Each lot and stock boundary | Complete common period including unsuccessful runs | One grade/state/route and its actual storage/loading line | per 1 kg reference flow | Calibration; tare/density evidence; certificates; assay definitions; full lot register; stock reconciliation |
| cp_feeds | app_line | spa_feed; ammonia_feed | Receipt, feed meter and composition records | supplier/SKU; total received kg; actual feed-to-line kg; opening/closing stocks; NH3 purity; acid total P and P2O5 equivalent; ortho/condensed distribution; free water; impurities including F/Si/metals; temperatures; NH3 split and vaporisation | Reconcile weighbridge/tank receipts, calibrated feed meters and stock movements; sample actual supplied mixture with validated supplier/laboratory methods; retain full mixtures and component ledgers separately | kg; mass fractions; temperature | Each receipt/lot and operating mode | Same complete period as P including failed batches | app_line feed receipt, storage and metered additions | per 1 kg reference flow | Calibrations; supplier quantity basis; matrix-specific assays; feed/stock reconciliation; pipe/finishing feed split |
| cp_water | app_line | process_water; cooling_water; cooling_return | Water delivery and loop records | separate use meters; inlet/outlet kg or volume/density; temperatures; loop topology; makeup; return; internal circulation; recovered water; evaporation; drift; stocks | Read calibrated boundary meters; convert volume only using documented actual density/temperature; reconcile external and internal loop quantities; measure returned water and receiver independently | kg; measured temperature; original volume retained | Each meter interval and relevant mode | Same complete period as P including cleaning/idle and failed runs | app_line water and actual utility interfaces | per 1 kg reference flow | Meter calibration; supplier water basis; loop diagram; water balance; thermal records |
| cp_energy | app_line | electricity; steam_in; condensate_return | Utility meters, supplier definitions and operating records | original kWh; steam/condensate kg; absolute/gauge pressure; temperature; steam dryness; inlet/outlet states; enthalpy method; supplier unit/return convention; stocks; line and shared-utility meters; operating modes | Meter attributable electric use and delivered/returned steam mass; obtain supplier background reference definition; establish paired states with traceable steam/water property method; preserve shared totals before allocation | kWh and MJ; kg; pressure; temperature; enthalpy | Each metering interval and mode | Same complete period as P including startup/failure/idle | app_line including actual NH3 vaporisation, cooling and loading utilities | per 1 kg reference flow | Meter calibration; voltage/provider evidence; state/enthalpy and return agreement; allocation records |
| cp_wastes | app_line | np_purge; settled_solids; cooling_blowdown | Waste weighing, composition and transfer records | stream origin; wet kg; dry solids/water; N forms; total P; F/Si/metals as relevant; internal recycle kg; external receiver; treatment; opening/closing stocks; spills; rejected lots | Weigh each distinct external stream; representative matrix-validated sampling; retain transfer manifests and recipient acceptance; distinguish recycled liquor from dispatch and segregate incompatible receivers | Wet kg; dry kg; mass fractions; original measured volumes | Each transfer and operating event | Same complete period as P with failure/cleaning residues | app_line waste origin and dispatch interface | per 1 kg reference flow | Calibrations; composition tests; receiver/treatment records; recycle and stock closure |
| cp_air | app_line | ammonia_air; hf_air; sif4_air; water_vapour; phosphoric_acid_air; app_aerosol | Vent monitoring, fugitives and species records | species/CAS; mass versus as-N/as-P/as-F convention; concentration; gas volume or flow rate; integration period; T/P; wet/dry basis; control inlet/outlet; operating duration; fugitives; aerosol composition/water; detection limits | Use matrix/species-appropriate validated tests after controls and representative event coverage; match concentration to compatible gas-volume basis; assess separate fugitives; obtain actual species evidence rather than splitting total N/P/F by assumption | kg species; original concentration/volume or flow-rate units retained | Representative mode measurements plus complete event/duration register | Same complete period as P including startup, failures and storage/loadout | All app_line controlled outlets and fugitive paths; outdoor air unspecified only while no narrower medium is justified | per 1 kg reference flow | Test methods/calibration; gas-state consistency; mode coverage; speciation; detection-limit handling; no duplicate size/constituent totals |

The aggregation basis above is the final reporting denominator. The following mandatory details preserve the original complete-period calculation and all raw totals; they are part of each linked protocol.

- `cp_product`: Preserve full period accepted mass P and all stock/dispatch totals; app_product = 1 kg per 1 kg reference flow only when P is positive
- `cp_feeds`: Retain receipts, consumption and stock changes; each actual period feed-to-line total divided by P once, per 1 kg reference flow
- `cp_water`: Retain every original water total; each external exchange divided by P once, per 1 kg reference flow; no division of gross circulation as fresh water
- `cp_energy`: Preserve raw utility totals; convert kWh by 3.6; each attributed total divided by P once, per 1 kg reference flow; preserve steam kg and heat separately
- `cp_wastes`: Preserve complete wet quantities and component totals; each external waste total divided by P once, per 1 kg reference flow; internal recycle does not become a second waste exchange
- `cp_air`: Retain measured period loads and uncertainty; concentration times already integrated compatible gas volume yields load without another time factor; concentration times gas flow rate must be integrated over time; divide period species kg by P once, per 1 kg reference flow

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | a_i = Q_i / P; Q_i is the complete actual attributable period exchange before normalization and P is accepted net supplied APP generated in the same period in kg. Preserve receipt/stock corrections and the raw numerator. app_product is 1 kg. P = 0 gives no normalized result. | Q_i; P; full period records and stocks | Exchange per 1 kg reference flow and retained original totals | eu-cww-2016 |
| mixture_components | spa_feed; ammonia_feed; app_product; np_purge; settled_solids | Constituent kg = actual complete wet/supplied kg times measured compatible constituent mass fraction. P2O5-equivalent is converted to elemental P by the declared atomic-mass ratio 2 A(P) / [2 A(P) + 5 A(O)]. It is not subtracted with N to infer carrier water. Document free water separately; uncharacterised remainder remains uncharacterised. | Actual supplied masses; matrix-valid assays; declared atomic masses and analytical definitions | Full-mixture and separate constituent ledgers | us-epa-app-1981; simplot-app-14090 |
| reaction_water | spa_feed; app_product; np_purge; water_vapour | Condensation and hydrolysis change molecular-water/species accounting. For illustration, 2 H3PO4 converts to H4P2O7 + H2O; the reverse consumes water. Derive net reaction-water terms only from validated complete composition/speciation and balanced reactions for the actual route; the illustration is not a recipe, a fixed yield or an assumed chain distribution. NH3 acid neutralisation alone does not justify invented water generation. COD and a mass-balance residual cannot supply reaction-water quantities. | Measured acid/product/effluent compositions; actual phosphate species and reaction evidence | Supported net reaction-water term with uncertainty, or explicit unresolved term | us-epa-app-1981 |
| electricity_conversion | electricity | MJ = measured kWh times 3.6; retain actual voltage, user boundary and supply mix. | Original metered kWh | MJ electricity | eu-cww-2016 |
| steam_enthalpy | steam_in; condensate_return | Preserve delivered steam mass and returned condensate mass separately. Calculate net imported thermal enthalpy from the sum of imported mass times its state-specific enthalpy minus the sum of exported mass times its state-specific enthalpy, using one declared datum and accounting for measured leaks, stocks and other heat exchanges in the full energy balance. Match supplier kg or net-MJ definition before linkage; do not infer net heat from a flow-property label. | Measured masses and states; validated property method; boundary and supplier definition | Steam/return physical account and compatible separately calculated heat | eu-cww-2016 |
| emission_integration | ammonia_air; hf_air; sif4_air; phosphoric_acid_air; app_aerosol | Species load equals concentration times compatible integrated gas volume, or time integral of concentration times compatible volume flow rate. For mg per Nm3 and already integrated Nm3 divide their product by 1000000 to obtain kg; do not multiply by duration again. Convert as-N/P/F only after actual species identification; add separately assessed fugitives once. | Compatible concentrations and gas volumes/rates; actual speciation; operating-event coverage | Period species kg before normalization | eu-cww-2016 |
| physical_reconciliation | all inventory rows | At the whole-line receipt/dispatch boundary reconcile receipts = full dispatch + external wastes + releases + changes in feed, WIP and accepted-product stocks, with uncertainties. At the feed-to-line/accepted-production boundary use consumed feeds and P with only the corresponding WIP/other changes; never count accepted stock changes again after including them in P. Keep total mass and elemental N/P/F ledgers, supported water generation/consumption, free water, water vapour, retained waste liquid and actual impurity/carbon destinations. Chemical reaction changes species, not elemental mass. Keep unexplained residuals and uncertainty explicit; no forced evaporation, yield or emission. | All raw meters, assays, stocks and internal-link records; reaction-water evidence | Two reconciled physical representations and separate burden account | eu-cww-2016 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Match full native name, type, CAS if given, route, state, reference property and unit, and actual medium. Use official Chinese baseName exactly where provided. Empty UUID is a concrete identity gap; identity alone never establishes provider compatibility. | Actual material/SKU and recipient evidence; source/flow records |
| dq_period | all inventory rows | Preserve original period totals and every relevant batch/mode, including failed/zero-output, startup/shutdown, rework/WIP and stocks. Normalize only once to positive P; a zero-output pool remains reported and unnormalized. | Full batch and stock register; meter timestamps; cp_product; cp_feeds |
| dq_provider | all external inputs | Separate actual demand from supplier reference amount. Reconcile mixture versus active-component kg, delivered versus standard volume at stated T/P/wet-dry convention, electricity MJ and steam/return enthalpy. A provider mismatch blocks that concrete linkage, not evidence-based future collection. | Supplier declarations, referenced dataset amount/unit/state and measured foreground definitions |
| dq_completeness | app_line | Check actual waste and impurity destinations, gas speciation, retained water, controls, handling/storage/loadout and service utilities. Non-applicable and zero values need affirmative evidence, not failed lookup or source silence. Extend actual extra additives/processes before completion. | Process flow sheets; eu-cww-2016 BAT2; operating/event records; recipient evidence |
| dq_assets | app_line | Disclose the study's capital-equipment boundary and materiality. Where assets/returnable containers are included, preserve actual item/material quantities and demonstrated service life/lifetime production separately from their attributed per-kg service equivalents, with replacements and end-of-life consistent. No invented machine weight, lifetime or packaging amount; significant actual infrastructure is not silently removed. | Actual asset/maintenance register, physical bills, lifetime throughput and study scope decision |
| dq_source | app_line | Historical EPA route settings and Simplot grade values are illustrative and not default inventory quantities. Demonstrate actual additive absence and the SPA pipe-reaction/bulk-liquid route. Mark scientific review separately from authored methodology. | us-epa-app-1981; simplot-app-14090; actual route/formulation records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | app_product | Exactly one final product matches the 1 kg reference; validate the aqueous APP subset and every qualifier. Reject DAP/MAP, solid APP and other excluded routes even if a broad classification or near name matches. | un-cpc3-34644; us-epa-app-1981 |
| validate_quantities | all inventory rows | Require common complete period, positive P before normalization, one division and preserved raw totals; compare EN/ZH bases and protocol ownership to app_line. Retain failed/zero-output operations and WIP burdens. Unknown relationships or missing provider basis remain explicit incomplete findings. | eu-cww-2016 |
| validate_balances | app_line | Reconcile full wet mass, species/nutrient definitions, N/P/F, water with supported condensation/hydrolysis and stocks; investigate unexplained residuals. No forced yields/water generation/evaporation; no duplicate carrier-water purchases or internal-return exchanges. | eu-cww-2016; us-epa-app-1981 |
| validate_releases | all emissions and wastes | Check actual species, outdoor-air medium and relevant recipients/controls. Do not sum total fluoride with HF/SiF4 constituents, total P with species, or overlapping PM bins with the same chemical aerosol mass. Direct discharge needs explicit receiving-water/pollutant rows; wastewater sent to treatment is not direct elementary emission. | eu-cww-2016 |
| validate_allocation | app_line | Retain complete physical quantities and unallocated totals plus a separately conserved burden account; justify shared assignments and any actual coproduct extension. Reject automatic waste, recovery or heat-substitution credits and fabricated asset/packaging service quantities. | jrc-ilcd-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Manufacturing product dataset for the declared aqueous APP base fertilizer |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared bulk-liquid pipe-reactor APP supply with actual grade/state/route and compatible upstream/treatment data |
| excluded_use | DAP/MAP, solid APP/flame retardants, nitrophosphate, finished-APP cold blending, fortified recipes, packaged supply, field application/yield comparison and universal kg-N or kg-P equivalence |
| required_metadata | Reference qualifiers; actual site/period/route; whole supplied-mixture basis; raw period totals and positive-P reconciliation; stocks/rework; source and provider state/unit bases; cooling/steam topology; physical/burden accounts; recipient and asset boundary |
| required_quality_disclosure | Missing UUID/provider/speciation; uncertainty and balance residuals; supplier definition gaps; failed/zero-output periods; source limitations; allocation/materiality; scientific review pending until separately established |
| update_trigger | Change of product formulation/state, SPA source/condensation route, reactor/cooling/utility boundary, supplier reference basis, waste receiver, new material emission or asset-life evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-34644 | official_guidance | [UNSD CPC3.0 structure, 30Jun2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv),34644 | Classification boundary only; no method or mapping acceptance |
| us-epa-app-1981 | official_guidance | [EPA-130/6-81-003, October1981](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=910076Q8.TXT),printed80–83/Figure31 | Historical liquid route and distinctions; no numeric defaults |
| simplot-app-14090 | literature | [Simplot APP10-34-0, product14090](https://www.simplot.com/wholesale-crop-nutrition/product/14090),2026-10-15 snapshot | Commercial aqueous NP state only; no recipe/additive-absence or route proof |
| eu-cww-2016 | official_guidance | [JRC CWW BREF2016](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf),BAT2–4,printed543–544/PDF573–574 | Process/stream inventory and monitoring; no APP factors or universal legal claim |
| jrc-ilcd-2010 | official_guidance | [ILCD Detailed guidance, March2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf),7.9.2–7.9.3,printed255–257/PDF275–277 | Attributional subdivision/allocation; no default shares or substitution credit |

### `un-cpc3-34644`

- Source type: Official guidance (`official_guidance`)
- Reference: United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025; leaves34641–34646, especially34644. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv
- Use and limit: Official classification boundary only. The NP residual class excludes DAP/MAP and does not establish a shared manufacturing method or accepted mapping.

### `us-epa-app-1981`

- Source type: Official guidance (`official_guidance`)
- Reference: US EPA, Environmental Impact Guidelines for New Source Phosphate Fertilizer Manufacturing Facilities, EPA-130/6-81-003, October1981, printed pp.80–83, Ammonium Polyphosphate Production and Figure31. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=910076Q8.TXT
- Use and limit: Historical original describes the wet-process SPA/anhydrous-ammonia liquid pipe-reactor route, subsequent water/supplemental ammonia addition and indirect cooling, alongside different solid routes. Used for physical route and exclusions only; no historical recipe, set point, yield, energy or emission factor is a generic default.

### `simplot-app-14090`

- Source type: Literature (`literature`)
- Reference: J.R. Simplot, APP10-34-0 Liquid Ammonium Polyphosphate, product14090, publisher product description/Analysis, snapshot2026-10-15. https://www.simplot.com/wholesale-crop-nutrition/product/14090
- Use and limit: Current producer evidence of a commercial aqueous NP product with both poly- and orthophosphate. Its grade, trace Mo and proportions are specific to that product; it neither establishes the target recipe/additive absence nor verifies its manufacturing route or reference supplier basis.

### `eu-cww-2016`

- Source type: Official guidance (`official_guidance`)
- Reference: European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector BREF,2016, BAT2–4, printed pp.543–544 / PDF pp.573–574. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf
- Use and limit: Chemical-sector process/stream inventory and monitoring framework, including reaction/side-product context, flow, composition and loads. Supports the PCR's declared foreground records; it is not an APP emission factor, universal monitoring frequency or statement of current legal compliance.

### `jrc-ilcd-2010`

- Source type: Official guidance (`official_guidance`)
- Reference: European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255–257 / PDF pp.275–277. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf
- Use and limit: Attributional multifunctionality, subdivision and physically justified allocation, with documented fallback consistent with study context. It supplies no APP-specific allocation share, coproduct entitlement or universal substitution credit.
