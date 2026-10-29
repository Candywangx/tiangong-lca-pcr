---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-not-impregnated
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unimpregnated solid wood railway or tramway sleepers

## 1. Scope and Applicability

This method covers new, bare, unimpregnated solid sawn wood sleepers/cross-ties supplied for railway or tramway track, including hardwood and softwood only with declared species, grade and measured moisture. It covers reception of sawn sleeper stock, actual sizing/adzing/boring, actual air or indirect kiln drying and inspection. The delivered product may be green or conditioned; the state must be explicit. It does not assert that untreated timber is suitable for every railway exposure.

Exclude CPC 31320 impregnated sleepers, preservative impregnation, creosote/biocide treatment and fixation/redrying that did not occur. Also exclude glued/laminated or plastic/wood composite sleepers, reclaimed contaminated ties, attached rail fastenings, coating/fire-retardant treatment, direct-fired kilns and CHP. Such routes need reviewed adaptations. A sleeper sold before later preservation belongs to the declared untreated gate; its later treated output is a separate product and boundary. [usda-wood-handbook-2021]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.railway-or-tramway-sleepers-cross-ties-of-wood-not-impregnated |
| classification_refs | CPC 3.0 31109; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | New solid sawn untreated cross-ties; declared green/air-dried/indirect kiln-dried state |
| excluded_products | Impregnated CPC 31320; engineered composites; reused ties; fastened track assemblies |
| representative_product | One declared species/geometry/grade sleeper configuration; no invented mass |
| production_route | Received sawn stock → sizing/drilling if applicable → actual drying or bypass → inspection/dispatch |
| market_state | Bare unimpregnated sleeper at factory gate, moisture and intended subsequent treatment disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a specification-qualified untreated sleeper for later track construction or further treatment |
| How much | 1 kg accepted net sleeper at dispatch moisture |
| How well | Declared species, section, length, defects/grade and drilling specification; retain buyer acceptance, not universal load capacity |
| How long or cycle | One production campaign to factory gate; railway service life, replacement and end of life are outside this reference and require a separate scenario |
| reference_flow_link | finishing_finished_out |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Species and provenance; sawn solid construction; dimensions, grade and defects; machining/drilling state; moisture on dry basis and method; net mass; drying route; no impregnation evidence; starting gate, upstream coverage and campaign; intended subsequent treatment; actual supplier and receiving acceptance; broad wood-material foreground locator with no inferred supplier/background match or railway strength/compliance or service life or measured quantity. Declare each in dataset metadata or equivalent records. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_mass | reference product | Mass | kg | Use accepted net wood mass at measured dispatch moisture; packaging is separate. |
| count_mass | reference product | Mass | kg | M is the measured net mass of one sleeper of the same species, geometry, grade, machining and dispatch-moisture configuration. Weigh each accepted sleeper with a calibrated scale and identify its record using cp_mass. The primary collection basis is calibrated accepted batch net mass B kg, directly weighed or summed from the individually weighed accepted masses M_i; N is a configuration/quantity check and cannot establish B. A downstream count-based conversion would require measured same-configuration M and convert a per-sleeper amount a to a / M per kg; this is not a supported primary collection path in this edition and requires measurement-contract applicability review. No universal sleeper mass or assumed density is permitted. All inventory below uses measured B kg, never a count denominator. |
| wood_state | all wood streams | Mass and volume | kg | Dry-basis moisture u = water mass / oven-dry wood mass; dry mass = wet mass / (1+u). Record percent versus fraction. Solid volume and density must share species, moisture and geometry; bulk chips need their own measured bulk density. Do not replace solid volume with stack volume. [usda-wood-handbook-2021] |
| utility_units | energy and gas rows | Energy; volume | MJ; m3 | Preserve verified reference units. Electricity kWh × 3.6 = MJ. For steam, Gross calorific value/MJ in the referenced flow establishes an energy-property/unit identity only; it does not establish received net heat, fuel HHV or boiler gross thermal output. Before adopting the steam exchange, require supplier and linked background-process documentation of the same supply/delivery boundary, steam state, condensate reference enthalpy, return/makeup handling and transmission losses as cp_energy_drying and cp_energy_boiler. Measure the applicable enthalpy difference at that matched boundary; a boiler gross-output meter cannot substitute for receiver-net heat without a verified reconciliation. Unknown boundary or reference enthalpy leaves both heat rows pending methodological compatibility, even though their UUID is known. Gas volume requires actual reference temperature, pressure and compressibility; convert to mass only with traceable density at those conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated solid sawn sleeper blanks received at factory; inherited forestry/sawmilling/drying recorded |
| starting_condition_role | foreground_gate_to_gate |
| product_classification_scope | CPC 3.0 31109; narrower; excludes CPC 31320 |
| recursive_input_rule | Same-category incoming sleeper stock is an upstream intermediate; retain supplier manufacturing burdens once and model only actual remaining operations |
| upstream_dataset_requirement | Link supplier species/moisture/state-matched forestry and sawmilling datasets for cradle-to-gate use; gate-only data must disclose missing upstream burdens |
| disclosure | Starting gate, actual route and transport, inherited operations, supplied utilities and omitted downstream life stages |

- `boundary_actual`: Include actual reception, shaping/drilling, drying and inspection plus attributable utilities, wastes and emissions. Omit absent impregnation and its chemicals, baths, fixation or post-treatment drying; supplier treatment evidence inconsistent with untreated identity blocks use. [usda-wood-handbook-2021]
- `boundary_lifetime`: Factory-gate manufacturing is a declared-unit basis, not a track-service functional comparison. Track installation, ballast/fastenings, railway service life, maintenance, replacement and end of life are excluded; add explicit performance-equivalent service scenarios downstream. No lifetime, carbon-neutrality or durability credit is assumed. [usda-wood-handbook-2021]

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receiving | Wood reception and yard handling | required | Always; squared solid sawn stock received | foreground_production | per 1 kg reference flow |
| machining | Sizing, adzing and drilling | required | Sizing and inspection always; adzing/drilling only where specified and performed | foreground_production | per 1 kg reference flow |
| drying | Drying and moisture control | conditional | Air or kiln drying actually occurs; for already conditioned stock retain a same-mass bypass and reception moisture verification | foreground_production | per 1 kg reference flow |
| finishing | Final inspection and dispatch preparation | required | Always; packaging only if used | foreground_production | per 1 kg reference flow |
| boiler | On-site process heat generation | conditional | A non-CHP on-site boiler supplies indirect drying heat; absent for purchased heat, passive air drying or electric-only drying | foreground_production | per 1 kg reference flow |

Keep an unallocated physical process ledger separately from the allocated environmental-burden account. Divide campaign physical quantities by the same accepted B kg solely for normalization. Match internal handoff amounts at both ends; trace rework, stock changes, dry matter, evaporated water and carbon before allocation. Drying may occur before machining in practice: reorder the documented graph with identical paired handoffs rather than duplicating operations. Passive air drying still records time, handling, actual moisture loss, defects and releases. Preserve raw totals for each complete reporting period of the same declared species, SKU/configuration, geometry/grade, route and moisture state, including failed/zero-output lots, start/stop, cleaning and rework. B is the new net sleeper mass accepted once at finishing in the declared dispatch-moisture state; dispatches and old stock are not automatically new production. Record production, dispatch, purchased product, returns/reacceptance, opening/closing WIP and finished stocks, their physical quantities and carried burdens separately; match the burdens attributable to B without double counting acceptance or stock adjustments. Use the same positive terminal B for all stages and normalize each attributable raw total once, never a success-only average or a second division. If B=0, retain the full physical/burden pool with no normalized result.

### Process: Wood reception and yard handling (`receiving`)

#### Inputs

##### Product flows

###### Untreated solid sawn sleeper blank (`receiving_blank_in`)

Actual new bare unimpregnated solid-sawn sleeper blanks received at the declared supplier gate, with actual species/provenance, sawn section/length, grade/defects, machining state and measured moisture/net mass. No glued/laminated/composite, coating, preservative or attached rail hardware. The broad wood-material locator does not establish an exact supplier/background or dry/green state; document inherited forestry/sawmilling/drying burdens once.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_receiving
- Sources: `usda-wood-handbook-2021`

###### Alternating current (`receiving_electricity_in`)

Customer-side grid-average supply below 1 kV only. Source supply location CN is recorded metadata, not the foreground country. Require actual site/year/supplier/voltage/grid-mix compatibility before linking a background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_energy_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_receiving
- Sources:

###### Diesel fuel (`receiving_diesel_in`)

Only actual diesel yard equipment; exclude road freight already represented by transport service.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_fuel_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_fuel_receiving
- Sources:

###### Road Transport (`receiving_freight_in`)

Actual 30-ton diesel lorry road service only, matching this flow; only if not already included in supplier delivery. Other truck configurations require separate exact rows.

- Selected flow: Road Transport `9425f2bf-e734-4884-be1b-645473a3e82d`
- Flow property / unit: mass*distance `118f2a40-50ec-457c-aa60-9bc6b6af9931`; unit group `3620148f-c5db-48ce-9065-a10092089aca` / kg*km
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_transport.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_transport
- Sources:

#### Outputs

##### Product flows

###### Untreated solid sawn sleeper blank (`receiving_blank_out`)

Internal link receiving_blank_out to machining_blank_in; same unallocated amount. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_receiving
- Sources:

##### Elementary flows

###### carbon dioxide (fossil) (`receiving_co2_fossil_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### carbon monoxide (fossil) (`receiving_co_fossil_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### methane (fossil) (`receiving_ch4_fossil_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### nitrous oxide (`receiving_n2o_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### Nitrogen oxides (`receiving_nox_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed. Mass/kg and CAS11104-93-1 do not establish a NO2-equivalent monitoring/LCI/LCIA amount. Prove the actual NO/NO2 or NO2-equivalent basis; retain pending basis if unconfirmed and prevent N2O or individual-NO/NO2 duplication.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### sulfur dioxide (`receiving_so2_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources:

###### particles (PM2.5) (`receiving_pm25_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources: `epa-sawmill-pm-2014`

###### particles (PM2.5 - PM10) (`receiving_pm_between_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources: `epa-sawmill-pm-2014`

###### particles (> PM10) (`receiving_pm_coarse_out`)

Only actual yard release to outdoor air; diesel species are separate from purchased freight burdens. PM bins are disjoint; include road/handling dust where observed.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_receiving.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_receiving
- Sources: `epa-sawmill-pm-2014`

### Process: Sizing, adzing and drilling (`machining`)

#### Inputs

##### Product flows

###### Untreated solid sawn sleeper blank (`machining_blank_in`)

Same physical handoff as receiving_blank_out. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_machining
- Sources:

###### Alternating current (`machining_electricity_in`)

Meter saw, adzer, drill and dust-extraction electricity; absent operations have no consumption. Source supply location CN is recorded metadata, not the foreground country. Require actual site/year/supplier/voltage/grid-mix compatibility before linking a background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_energy_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_machining
- Sources:

###### lubricating oil (`machining_lubricant_in`)

Only PAO fully synthetic lubricating oil matching this identity, if actually used; other grades require separate exact rows. Verify actual supplier PAO grade and full additive/SDS composition; the generic petroleum-derived-oil comment does not demonstrate this fully synthetic background route.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_machining
- Sources:

#### Outputs

##### Product flows

###### Machined unimpregnated solid wood sleeper (`machining_machined_out`)

Measure original physical output before allocation; classify saleable material separately from discarded waste. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_machining
- Sources: `corrim-northern-lumber-2025`

###### Untreated wood sawdust coproduct (`machining_sawdust_product_out`)

Actual separately collected saleable untreated wood sawdust product, with measured particle-size distribution, species, moisture/dry solids, contaminants, actual product status and receiver specification. Fine sawdust is a physical wood-material subset; it is not a coarse offcut, agglomerated board/pellet, prescribed fuel blend or Waste-flow substitution. Retain its independently measured external mass and unallocated dry matter/water/carbon ledger; actual nonfuel uses remain possible. No generic locator establishes recovery benefits, market/grade equivalence or a matched background.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_machining
- Sources: `corrim-northern-lumber-2025`

###### Untreated solid wood offcut coproduct (`machining_offcut_product_out`)

Actual separately collected saleable coarse solid untreated wood offcut product, with individual form/geometry, species, measured moisture/net mass, contamination, actual product status and receiver acceptance. Non-agglomerated, unglued, uncoated and unimpregnated wood pieces are the stated physical subset, not sawdust or unprocessed forest roundwood. Preserve its independent external quantity and original dry-matter/water/carbon and burden-allocation accounts. A broad wood-material identity does not prescribe remanufacturing, fuel use, credits or background match.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_machining
- Sources: `corrim-northern-lumber-2025`

##### Waste flows

###### sawdust waste (`machining_waste_sawdust_out`)

Only this actual discarded stream; include captured dust in sawdust waste, never again as air release. Oil waste has its own row. The selected sawdust-waste record explicitly states untreated combustion/recovery; require the actual receiver route to match before linking it. A different disposal route needs its own compatible waste identity/provider review, not a presumed recovery benefit.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_machining
- Sources:

###### Offcut (`machining_offcut_out`)

Only this actual discarded stream; include captured dust in sawdust waste, never again as air release. Oil waste has its own row. Actual non-agglomerated unglued/uncoated/unimpregnated solid wood only, with measured form/composition/moisture and receiver acceptance. The source CPC39282 agglomerated classification conflicts with concordant woodworking-remnant name/comment and empty treatment route; retain unresolved source/provider classification clarification.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_machining
- Sources:

###### Spent PAO lubricating oil for disposal (`machining_waste_oil_out`)

Actual separately collected spent PAO synthetic lubricating oil, including its measured oil/additive/water/solid contamination and stock changes. Used lubricating oil explicitly includes synthetic used oils without prescribing treatment. Require actual liquid state, supplier SDS, waste classification and receiver acceptance; no fresh oil/product substitution, assumed recycling, hazard status or treatment credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_machining
- Sources:

##### Elementary flows

###### particles (PM2.5) (`machining_pm25_out`)

Residual outdoor-air discharge after capture; do not treat captured dust as emitted.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_machining
- Sources: `epa-sawmill-pm-2014`

###### particles (PM2.5 - PM10) (`machining_pm_between_out`)

Residual outdoor-air discharge after capture; do not treat captured dust as emitted.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_machining
- Sources: `epa-sawmill-pm-2014`

###### particles (> PM10) (`machining_pm_coarse_out`)

Residual outdoor-air discharge after capture; do not treat captured dust as emitted.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_machining.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_machining
- Sources: `epa-sawmill-pm-2014`

### Process: Drying and moisture control (`drying`)

#### Inputs

##### Product flows

###### Machined unimpregnated solid wood sleeper (`drying_machined_in`)

Same physical handoff as machining_machined_out; if no drying, bypass unchanged to finishing. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_drying
- Sources:

###### Alternating current (`drying_electricity_in`)

Conditional actual indirect drying utility. Heat input equals boiler heat output, or is purchased once; passive air drying has no purchased heat. Tap water only if actually used. Source supply location CN is recorded metadata, not the foreground country. Require actual site/year/supplier/voltage/grid-mix compatibility before linking a background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_energy_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_drying
- Sources: `usda-wood-handbook-2021`

###### Process heat from steam (`drying_heat_energy_in`)

Retain the verified UUID as a steam-process-heat identity candidate; its Gross calorific value/MJ record does not independently establish receiver-net enthalpy difference. Adopt only after supplier/background heat boundary, steam state and condensate reference enthalpy match cp_energy_drying, with return/makeup and transmission losses reconciled. Unknown heat basis remains pending; MJ alone does not equate HHV, boiler gross output and receiver-net heat. Paired handoffs must have equal quantities at the same verified delivery boundary; purchased heat is counted once and passive air drying has no purchased heat. No CHP/export heat.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: After heat-boundary and reference-enthalpy verification, divide actual unallocated campaign delivered heat by accepted B kg using cp_energy_drying. Unknown basis has no verified amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_drying
- Sources: `usda-wood-handbook-2021`

###### Water, tap (`drying_water_in`)

Conditional actual indirect drying utility. Heat input equals boiler heat output, or is purchased once; passive air drying has no purchased heat. Tap water only if actually used.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_drying
- Sources: `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Moisture-conditioned unimpregnated solid wood sleeper (`drying_dried_out`)

Internal same-quantity link to finishing_dried_in at measured outlet moisture; dry mass and water loss are distinguished. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_drying
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### Condensate wastewater from wood drying (`drying_effluent_out`)

Actual separately collected liquid wood-drying condensate sent to an external treatment receiver only, not clean internally returned steam condensate or water-vapour release. Preserve measured whole-liquid mass, temperature, composition/water fraction, dissolved/entrained wood constituents and receiver acceptance; metered volume converts only with actual mixture density or weighing, never 1000 kg/m3 by default. The broad industrial-liquid identity establishes no treatment/hazard class or matched background. Direct discharge to an actual environmental medium requires independently compatible elementary identities and measured constituent loads.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_drying
- Sources:

##### Elementary flows

###### water vapour (`drying_vapour_out`)

Actual species-resolved outdoor discharge when present. Screen species/wood condition and drying route; no softwood-survey default for hardwood sleepers. Separate condensable PM and other identified species before complete dataset delivery.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_drying
- Sources: `usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### formaldehyde (`drying_formaldehyde_out`)

Actual species-resolved outdoor discharge when present. Screen species/wood condition and drying route; no softwood-survey default for hardwood sleepers. Separate condensable PM and other identified species before complete dataset delivery.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_drying
- Sources: `usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### methanol (`drying_methanol_out`)

Actual species-resolved outdoor discharge when present. Screen species/wood condition and drying route; no softwood-survey default for hardwood sleepers. Separate condensable PM and other identified species before complete dataset delivery.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_drying
- Sources: `usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### acetaldehyde (`drying_acetaldehyde_out`)

Actual species-resolved outdoor discharge when present. Screen species/wood condition and drying route; no softwood-survey default for hardwood sleepers. Separate condensable PM and other identified species before complete dataset delivery.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_drying
- Sources: `usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

###### pin-2(3)-ene (`drying_alpha_pinene_out`)

Actual species-resolved outdoor discharge when present. Screen species/wood condition and drying route; no softwood-survey default for hardwood sleepers. Separate condensable PM and other identified species before complete dataset delivery. The adopted pin-2(3)-ene record is CAS80-56-8 alpha-pinene only; measure this actual species, not beta-pinene CAS127-91-3 or an unspecified terpene/VOC sum.

- Selected flow: pin-2(3)-ene `0a701083-c7e6-43d1-8ae5-e62050edc5dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_drying.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_drying
- Sources: `usda-wood-handbook-2021`, `corrim-northern-lumber-2025`

### Process: Final inspection and dispatch preparation (`finishing`)

#### Inputs

##### Product flows

###### Moisture-conditioned unimpregnated solid wood sleeper (`finishing_dried_in`)

Same handoff as drying_dried_out, or the unchanged machined stock on documented no-drying bypass. Explicit internal wood-material stage handoff only, with the actual blank/machined/conditioned sawn sleeper form, species, machining and untreated state specified independently. Match the paired sending/receiving IDs on campaign, wet/dry wood mass, water/carbon, moisture and stocks, including actual drying/no-drying bypass and losses. Same broad UUID does not establish identical state or interchangeable supplier datasets. Preserve original physical quantities before burden allocation; this is not a second external sale, purchase or final sleeper output.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_finishing
- Sources:

###### Alternating current (`finishing_electricity_in`)

Actual inspection/dispatch preparation electricity. Source supply location CN is recorded metadata, not the foreground country. Require actual site/year/supplier/voltage/grid-mix compatibility before linking a background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_energy_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_finishing
- Sources:

###### Steel baling band (`finishing_strap_in`)

Only actual recycled steel baling band with the verified composition/route; other packaging gets separate exact rows. Match the recorded 99%Fe/1%C composition and recycled reprocessing route to actual supplier evidence; this is a record constraint, not an invented factory alloy recipe.

- Selected flow: Steel baling band `56fe4f71-b594-4b55-8553-c87f2516737d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_packaging.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_packaging
- Sources:

#### Outputs

##### Product flows

###### Accepted unimpregnated solid wood railway or tramway sleeper (`finishing_finished_out`)

Exactly 1 kg of accepted net new bare solid-sawn unimpregnated railway/tramway sleeper at actual dispatch moisture, excluding all packaging and hardware. Require actual species/provenance, dimensions, grade/defects, machining/adzing/boring state, green/air/indirect-kiln route, buyer acceptance and evidence of absent preservation/coating/binder. This is one shaped wood material, not a track assembly. Wood material is only a qualified foreground physical locator; it does not prove railway strength, durability, service life, compliance, an exact supplier/background or measured amounts.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: cp_mass
- Sources: `usda-wood-handbook-2021`

##### Waste flows

###### Offcut (`finishing_offcut_out`)

Rejected untreated solid sleeper sent to disposal; rework is an internal handoff, not a second terminal waste. Actual non-agglomerated unglued/uncoated/unimpregnated solid wood only, with measured form/composition/moisture and receiver acceptance. The source CPC39282 agglomerated classification conflicts with concordant woodworking-remnant name/comment and empty treatment route; retain unresolved source/provider classification clarification.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_finishing
- Sources:

### Process: On-site process heat generation (`boiler`)

#### Inputs

##### Product flows

###### natural gas in the gaseous state (`boiler_gas_in`)

Only the actual boiler input; record fuel origin, moisture, calorific basis and gas temperature/pressure. No fuel is required merely because it is listed.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_fuel_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_fuel_boiler
- Sources: `epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### Untreated wood chips for boiler fuel (`boiler_wood_fuel_in`)

Actual unimpregnated, unglued, uncoated wood chips for the stated boiler, with measured size/species/moisture, contamination, carbon and calorific basis. Preserve the selected Volume/m3 reference. Establish actual supplier/reference solid versus bulk-volume convention and measure compatible density and mass before converting original weighed fuel records; secondary coefficients or generic wood density do not establish it. Unknown convention/density leaves amount/background linkage pending, not zero. Distinguish purchased chips from actual internally transferred residues; the latter remain paired physical fuel accounts without duplicate purchase/export or credit.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_fuel_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_fuel_boiler
- Sources: `epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### Water, tap (`boiler_water_in`)

Only the actual boiler input; record fuel origin, moisture, calorific basis and gas temperature/pressure. No fuel is required merely because it is listed.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_material_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_material_boiler
- Sources: `epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

###### Alternating current (`boiler_electricity_in`)

Only the actual boiler input; record fuel origin, moisture, calorific basis and gas temperature/pressure. No fuel is required merely because it is listed. Source supply location CN is recorded metadata, not the foreground country. Require actual site/year/supplier/voltage/grid-mix compatibility before linking a background.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_energy_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_boiler
- Sources: `epa-ap42-wood-boilers-2022`, `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Process heat from steam (`boiler_heat_energy_out`)

Retain the verified UUID as a steam-process-heat identity candidate; its Gross calorific value/MJ record does not independently establish receiver-net enthalpy difference. Adopt only after supplier/background heat boundary, steam state and condensate reference enthalpy match cp_energy_boiler, with return/makeup and transmission losses reconciled. Unknown heat basis remains pending; MJ alone does not equate HHV, boiler gross output and receiver-net heat. Paired handoffs must have equal quantities at the same verified delivery boundary; purchased heat is counted once and passive air drying has no purchased heat. No CHP/export heat.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: After heat-boundary and reference-enthalpy verification, divide actual unallocated campaign delivered heat by accepted B kg using cp_energy_boiler. Unknown basis has no verified amount.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy_boiler
- Sources: `epa-ap42-wood-boilers-2022`

##### Waste flows

###### Bottom ash from untreated wood combustion (`boiler_ash_out`)

Actual separately collected solid bottom ash from this untreated wood-fuel boiler only. Measure wet/dry mass, moisture, residual unburnt carbon/mineral/fuel-contaminant composition and actual receiver acceptance. The broad industrial-solid identity permits this physical subset but does not prescribe landfilling, reuse, hazard status or background; keep fly ash and other actual fuel ash independently identified.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### Fly ash from untreated wood combustion (`boiler_fly_ash_out`)

Actual separately captured solid fly ash from this untreated wood-fuel boiler only. Preserve capture device/source, independent wet/dry mass, mineral/carbon/contaminant composition, conditioning and receiver acceptance. It is not bottom ash, aqueous alkaline liquor or airborne PM after controls. No treatment, hazard state, allocation credit or provider background is implied by this broad solid-waste locator.

- Selected flow: Waste solid `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### Boiler blowdown wastewater (`boiler_blowdown_out`)

Actual separately collected liquid boiler blowdown sent to an external treatment receiver only. Measure bulk liquid mass, temperature, dissolved/suspended salts and actual boiler-water treatment constituents, water fraction, stock changes and receiving acceptance. Keep distinct from dryer condensate, clean return condensate and direct discharge; density conversions require actual mixture evidence, no pure-water default. No receiver route/hazard status or environmental credit follows from the broad industrial-liquid identity.

- Selected flow: Waste liquid `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_waste_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste_boiler
- Sources: `epa-ap42-wood-boilers-2022`

##### Elementary flows

###### carbon dioxide (biogenic) (`boiler_co2_bio_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### carbon dioxide (fossil) (`boiler_co2_fossil_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### carbon monoxide (biogenic) (`boiler_co_bio_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### carbon monoxide (fossil) (`boiler_co_fossil_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### methane (biogenic) (`boiler_ch4_bio_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### methane (fossil) (`boiler_ch4_fossil_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### nitrous oxide (`boiler_n2o_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### Nitrogen oxides (`boiler_nox_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention. Mass/kg and CAS11104-93-1 do not establish a NO2-equivalent monitoring/LCI/LCIA amount. Prove the actual NO/NO2 or NO2-equivalent basis; retain pending basis if unconfirmed and prevent N2O or individual-NO/NO2 duplication.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### sulfur dioxide (`boiler_so2_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### particles (PM2.5) (`boiler_pm25_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### particles (PM2.5 - PM10) (`boiler_pm_between_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### particles (> PM10) (`boiler_pm_coarse_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

###### water vapour (`boiler_vapour_out`)

Actual outdoor-air boiler release; split fossil/biogenic carbon by measured fuel provenance and carbon balance. Preserve biogenic CO2 in LCI regardless of GHG reporting convention.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg; outdoor air, unspecified subcompartment
- Amount rule: Actual unallocated campaign exchange in its stated unit divided by accepted B kg; use cp_emission_boiler.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_emission_boiler
- Sources: `epa-ap42-wood-boilers-2022`

## 7. Allocation and Co-product Handling

- `allocation_separate`: Avoid allocation through subdivision and dedicated measurements first. Packaging and final sleeper-only inspection burdens go entirely to the sleeper. For unavoidable joint machining burdens with saleable untreated sawdust/offcuts, use measured oven-dry product mass shares across the primary machined sleeper material and every actual saleable wood coproduct of that joint step, excluding internal duplicate links and discarded waste, when dry mass represents the physical relationship; disclose a justified alternative and sensitivity where it does not. CORRIM is a regional softwood precedent, not a universal sleeper allocation factor. [corrim-northern-lumber-2025]
- `allocation_physical`: Apply burden shares only to environmental burdens of the relevant joint step. Do not multiply physical coproduct output or internal transfer quantity by a share. Waste gets no saleable-product allocation share. Internal fuel use is a matched handoff with actual boiler emissions; do not also claim exported fuel or avoided-product credit. Preserve physical quantities V separately from attributable burdens A, including the complete inherited provider/exchange vector and original owner/cohort. Pair each actual internal_out with internal_in at the same boundary and cancel both only when consolidating that boundary; a real transformation consumes the incoming material and creates measured outputs, not a fictitious external receipt. Carry each vector component through actual stock, transfer, loss and product attribution without replacing it by the material mass or a new generic provider. Normalize the applicable physical or burden numerator once by B after attribution. [corrim-northern-lumber-2025]

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | finishing | Accepted sleeper mass | foreground_record | species; configuration; campaign; batch net B; item id and net M_i where individually weighed; moisture; count check; packaging tare; calibration; one new final acceptance event; accepted production separate from dispatch/returns/reacceptance; opening/closing WIP/finished stocks and carried quantities/burdens | Weigh the accepted batch net mass B on a calibrated scale excluding packaging, or sum individual accepted net weighings M_i; match configuration, moisture and acceptance records. Count alone is not a mass measurement; do not infer M from a generic density. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_material_receiving | receiving | receiving_blank_in; receiving_blank_out | foreground_record | stream and item identity; raw mass; moisture; solid/bulk volume; stock change; paired links; batch | Calibrated weighing and representative oven-dry tests with moisture gradients, sampling protection, constant-mass criterion, volatile/extractive loss limitations and validated species-specific meter checks retained; measure each distinct product, lubricant and water stream; preserve dry-matter/water balances. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_material_machining | machining | machining_blank_in; machining_lubricant_in; machining_machined_out; machining_sawdust_product_out; machining_offcut_product_out | foreground_record | stream and item identity; raw mass; moisture; solid/bulk volume; stock change; paired links; batch | Calibrated weighing and representative oven-dry tests with moisture gradients, sampling protection, constant-mass criterion, volatile/extractive loss limitations and validated species-specific meter checks retained; measure each distinct product, lubricant and water stream; preserve dry-matter/water balances. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_material_drying | drying | drying_machined_in; drying_water_in; drying_dried_out | foreground_record | stream and item identity; raw mass; moisture; solid/bulk volume; stock change; paired links; batch | Calibrated weighing and representative oven-dry tests with moisture gradients, sampling protection, constant-mass criterion, volatile/extractive loss limitations and validated species-specific meter checks retained; measure each distinct product, lubricant and water stream; preserve dry-matter/water balances. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_material_finishing | finishing | finishing_dried_in | foreground_record | stream and item identity; raw mass; moisture; solid/bulk volume; stock change; paired links; batch | Calibrated weighing and representative oven-dry tests with moisture gradients, sampling protection, constant-mass criterion, volatile/extractive loss limitations and validated species-specific meter checks retained; measure each distinct product, lubricant and water stream; preserve dry-matter/water balances. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_material_boiler | boiler | boiler_water_in | foreground_record | stream and item identity; raw mass; moisture; solid/bulk volume; stock change; paired links; batch | Calibrated weighing and representative oven-dry tests with moisture gradients, sampling protection, constant-mass criterion, volatile/extractive loss limitations and validated species-specific meter checks retained; measure each distinct product, lubricant and water stream; preserve dry-matter/water balances. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_energy_receiving | receiving | receiving_electricity_in | foreground_record | meter id; reading; kWh/MJ; supplier/background heat boundary; steam state/mass/enthalpy; condensate reference enthalpy; return/makeup handling; transmission losses; boiler fuel HHV/LHV basis; allocation meter scope | Read calibrated submeters per campaign; obtain supplier/background boundary and condensate-reference-enthalpy evidence, match it to the receiving point, steam state, return/makeup handling and transmission losses, then measure the applicable same-boundary enthalpy difference. Separate on-site generation from purchased heat; HHV, gross thermal output and receiver-net heat are not interchangeable without verified reconciliation. Any unknown basis leaves heat methodological compatibility unconfirmed. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | MJ | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_energy_machining | machining | machining_electricity_in | foreground_record | meter id; reading; kWh/MJ; supplier/background heat boundary; steam state/mass/enthalpy; condensate reference enthalpy; return/makeup handling; transmission losses; boiler fuel HHV/LHV basis; allocation meter scope | Read calibrated submeters per campaign; obtain supplier/background boundary and condensate-reference-enthalpy evidence, match it to the receiving point, steam state, return/makeup handling and transmission losses, then measure the applicable same-boundary enthalpy difference. Separate on-site generation from purchased heat; HHV, gross thermal output and receiver-net heat are not interchangeable without verified reconciliation. Any unknown basis leaves heat methodological compatibility unconfirmed. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | MJ | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_energy_drying | drying | drying_electricity_in; drying_heat_energy_in | foreground_record | meter id; reading; kWh/MJ; supplier/background heat boundary; steam state/mass/enthalpy; condensate reference enthalpy; return/makeup handling; transmission losses; boiler fuel HHV/LHV basis; allocation meter scope | Read calibrated submeters per campaign; obtain supplier/background boundary and condensate-reference-enthalpy evidence, match it to the receiving point, steam state, return/makeup handling and transmission losses, then measure the applicable same-boundary enthalpy difference. Separate on-site generation from purchased heat; HHV, gross thermal output and receiver-net heat are not interchangeable without verified reconciliation. Any unknown basis leaves heat methodological compatibility unconfirmed. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | MJ | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_energy_finishing | finishing | finishing_electricity_in | foreground_record | meter id; reading; kWh/MJ; supplier/background heat boundary; steam state/mass/enthalpy; condensate reference enthalpy; return/makeup handling; transmission losses; boiler fuel HHV/LHV basis; allocation meter scope | Read calibrated submeters per campaign; obtain supplier/background boundary and condensate-reference-enthalpy evidence, match it to the receiving point, steam state, return/makeup handling and transmission losses, then measure the applicable same-boundary enthalpy difference. Separate on-site generation from purchased heat; HHV, gross thermal output and receiver-net heat are not interchangeable without verified reconciliation. Any unknown basis leaves heat methodological compatibility unconfirmed. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | MJ | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_energy_boiler | boiler | boiler_electricity_in; boiler_heat_energy_out | foreground_record | meter id; reading; kWh/MJ; supplier/background heat boundary; steam state/mass/enthalpy; condensate reference enthalpy; return/makeup handling; transmission losses; boiler fuel HHV/LHV basis; allocation meter scope | Read calibrated submeters per campaign; obtain supplier/background boundary and condensate-reference-enthalpy evidence, match it to the receiving point, steam state, return/makeup handling and transmission losses, then measure the applicable same-boundary enthalpy difference. Separate on-site generation from purchased heat; HHV, gross thermal output and receiver-net heat are not interchangeable without verified reconciliation. Any unknown basis leaves heat methodological compatibility unconfirmed. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | MJ | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_fuel_receiving | receiving | receiving_diesel_in | foreground_record | fuel identity; kg or m3; T/P; density; moisture; carbon origin/fraction; heating value; stocks | Reconcile calibrated meters or scales and invoices; retain actual gas volume conditions and measured solid/bulk fuel convention before conversion. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg; m3 | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_fuel_boiler | boiler | boiler_gas_in; boiler_wood_fuel_in | foreground_record | fuel identity; kg or m3; T/P; density; moisture; carbon origin/fraction; heating value; stocks; actual fuel hydrogen/composition and water-formation basis | Reconcile calibrated meters or scales and invoices; retain actual gas volume conditions and measured solid/bulk fuel convention before conversion. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg; m3 | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_transport | receiving | Inbound lorry service | foreground_record | load net mass; distance; mode; empty return; supplier coverage | Weigh load and record route distance/load factors; use mass×distance with no duplicate supplier transport. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg*km | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_packaging | finishing | Steel band component | foreground_record | band grade; recycled route; net mass; tare; stock; dispatch batches; component id; P; N_ext; ER and prior outward event; EO; internal_in; internal_out; actual transformation consumption; original owner/cohort; complete inherited provider/exchange vector; whole-supply provider coverage; gross dispatch; transport; waste | Weigh each actual packaging component and reconcile purchases/stocks; identify steel route and composition. P is purchased component receipt, including components paid for in a whole-supply price; N_ext is first non-purchased external receipt, not a previously dispatched component returning. ER requires the same component's prior external outward event; EO records external return to its owner. Reconcile opening stock, P, N_ext, ER and paired internal receipts against closing stock, gross dispatch, EO, paired internal issues, actual transformation consumption and separate waste, without inventing a receipt for consumption. Preserve owner/cohort and the complete inherited burden vector for returns and stocks. Apply upstream component supply once: either verified whole-supply coverage or its component provider, with actual coverage gaps disclosed; free supply or missing invoice does not establish zero burden. Do not net returns against gross dispatch, transport or waste. Attribute reuse and later packaging service to its evidenced cohort; it cannot silently enter current new production. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_waste_machining | machining | machining_waste_sawdust_out; machining_offcut_out; machining_waste_oil_out | foreground_record | waste identity; source; mass; moisture; destination; rework/stock; manifest | Measure separate captured sawdust, offcuts, waste oil, condensate, bottom ash, fly ash and blowdown when present; retain treatment records. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_waste_drying | drying | drying_effluent_out | foreground_record | waste identity; source; mass; moisture; destination; rework/stock; manifest | Measure separate captured sawdust, offcuts, waste oil, condensate, bottom ash, fly ash and blowdown when present; retain treatment records. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_waste_finishing | finishing | finishing_offcut_out | foreground_record | waste identity; source; mass; moisture; destination; rework/stock; manifest | Measure separate captured sawdust, offcuts, waste oil, condensate, bottom ash, fly ash and blowdown when present; retain treatment records. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_waste_boiler | boiler | boiler_ash_out; boiler_fly_ash_out; boiler_blowdown_out | foreground_record | waste identity; source; mass; moisture; destination; rework/stock; manifest | Measure separate captured sawdust, offcuts, waste oil, condensate, bottom ash, fly ash and blowdown when present; retain treatment records. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_emission_receiving | receiving | receiving_co2_fossil_out; receiving_co_fossil_out; receiving_ch4_fossil_out; receiving_n2o_out; receiving_nox_out; receiving_so2_out; receiving_pm25_out; receiving_pm_between_out; receiving_pm_coarse_out | foreground_record | species/CAS; carbon origin; actual medium/submedium; release point; PM filterable/condensable/aerodynamic definition; flow/concentration; reference T/P/oxygen/wet-dry basis; NOx species/equivalent basis; duration; control; detection; factor scope; distinguish gas volume rate from already integrated volume; inlet/outlet humidity and compatible gas quantity when determining net water | Sum matched species concentration × already integrated compatible gas volume with unit conversions; only a volume flow rate is integrated with time, with no second duration multiplier. Preserve reference T/P, oxygen and wet/dry bases and include actual fugitive sources. If estimated, retain independently verified route-specific factor/activity and uncertainty; no unverified industry or PTE default. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_emission_machining | machining | machining_pm25_out; machining_pm_between_out; machining_pm_coarse_out | foreground_record | species/CAS; carbon origin; actual medium/submedium; release point; PM filterable/condensable/aerodynamic definition; flow/concentration; reference T/P/oxygen/wet-dry basis; NOx species/equivalent basis; duration; control; detection; factor scope; distinguish gas volume rate from already integrated volume; inlet/outlet humidity and compatible gas quantity when determining net water | Sum matched species concentration × already integrated compatible gas volume with unit conversions; only a volume flow rate is integrated with time, with no second duration multiplier. Preserve reference T/P, oxygen and wet/dry bases and include actual fugitive sources. If estimated, retain independently verified route-specific factor/activity and uncertainty; no unverified industry or PTE default. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_emission_drying | drying | drying_vapour_out; drying_formaldehyde_out; drying_methanol_out; drying_acetaldehyde_out; drying_alpha_pinene_out | foreground_record | species/CAS; carbon origin; actual medium/submedium; release point; PM filterable/condensable/aerodynamic definition; flow/concentration; reference T/P/oxygen/wet-dry basis; NOx species/equivalent basis; duration; control; detection; factor scope; distinguish gas volume rate from already integrated volume; inlet/outlet humidity and compatible gas quantity when determining net water | Sum matched species concentration × already integrated compatible gas volume with unit conversions; only a volume flow rate is integrated with time, with no second duration multiplier. Preserve reference T/P, oxygen and wet/dry bases and include actual fugitive sources. If estimated, retain independently verified route-specific factor/activity and uncertainty; no unverified industry or PTE default. Determine actual net vapour independently from matched phase/humidity/gas measurements or an independently evidenced species account: separate inlet moisture, condensation/internal recovery and any actual reaction-water formation/consumption; do not fit evaporation to an unexplained balance residual. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |
| cp_emission_boiler | boiler | boiler_co2_bio_out; boiler_co2_fossil_out; boiler_co_bio_out; boiler_co_fossil_out; boiler_ch4_bio_out; boiler_ch4_fossil_out; boiler_n2o_out; boiler_nox_out; boiler_so2_out; boiler_pm25_out; boiler_pm_between_out; boiler_pm_coarse_out; boiler_vapour_out | foreground_record | species/CAS; carbon origin; actual medium/submedium; release point; PM filterable/condensable/aerodynamic definition; flow/concentration; reference T/P/oxygen/wet-dry basis; NOx species/equivalent basis; duration; control; detection; factor scope; distinguish gas volume rate from already integrated volume; inlet/outlet humidity and compatible gas quantity when determining net water | Sum matched species concentration × already integrated compatible gas volume with unit conversions; only a volume flow rate is integrated with time, with no second duration multiplier. Preserve reference T/P, oxygen and wet/dry bases and include actual fugitive sources. If estimated, retain independently verified route-specific factor/activity and uncertainty; no unverified industry or PTE default. Determine actual net vapour independently from matched phase/humidity/gas measurements or an independently evidenced species account: separate inlet moisture, condensation/internal recovery and any actual reaction-water formation/consumption; do not fit evaporation to an unexplained balance residual. Fuel moisture and combustion-formed water are distinct; the latter needs actual fuel hydrogen/composition and reaction evidence or direct gas-water measurement, not carbon closure. Retain raw period totals and the compatible attributable numerator for this process without division; document attribution of physical quantities and burdens to common final B through stocks/handoffs. After verified native-unit conversion, campaign_mass is the sole normalization step using positive B. Card formulas and aggregation_rule describe this same final reporting operation, not another division. No stage-output denominator or success-only average is allowed; B=0 retains the full pool without a normalized result. | kg | Each campaign and route change | Same complete reporting period and final acceptance cohort as positive B, including failed/zero-output events and matched WIP/stock burdens | One declared site and configuration | per 1 kg reference flow | Calibration, signed logs, reconciliation and uncertainty retained |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| campaign_mass | all inventory rows | B is new accepted final sleeper mass counted once from calibrated net batch weighing or sum(M_i); distinguish dispatch, old/purchased stocks and returns/reacceptance, with documented WIP/stock physical and burden carryover. For each exchange, x = attributable complete raw-period Q / the same positive terminal B once in its native unit, including failed/zero-output events; counts only cross-check. B=0 retains totals without normalization. | Q; N; M_i; cp_mass | x | usda-wood-handbook-2021 |
| dry_wood | wood streams | u = (wet specimen mass − oven-dry specimen mass) / oven-dry specimen mass; dry mass = wet mass / (1+u). | wet mass; dry mass; cp_material_receiving; cp_material_machining; cp_material_drying; cp_material_finishing; cp_material_boiler | u; dry wood mass | usda-wood-handbook-2021 |
| particle_bins | PM rows | Use cumulative tests only for the same source, period, controls and filterable basis: fine = PM2.5; middle = PM10 − PM2.5; coarse = total filterable PM − PM10. Never add PM10 or total again. Preserve condensable PM separately; missing fractions remain unknown, not zero. | cp_emission_receiving; cp_emission_machining; cp_emission_drying; cp_emission_boiler | three disjoint PM bins | epa-sawmill-pm-2014 |
| joint_burden | joint machining burdens | a_j = dry product mass j / sum of measured dry product masses of the primary sleeper material and actual saleable coproducts at the same joint step; assigned burden j = a_j × joint burden. These equations do not change physical outputs or internal handoffs. | cp_material_machining; joint burdens | assigned LCI | corrim-northern-lumber-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | all | Same species/geometry/grade/moisture and campaign denominator in both languages and all linked records; no invented M, yield, moisture target or lifetime. | cp_mass; cp_material_receiving; cp_material_machining; cp_material_drying; cp_material_finishing; cp_material_boiler |
| quality_completeness | all | Screen all actual chemicals, fuels, packaging, emissions and wastes; add individual exact rows for identified missing exchanges. Absent operations require records; unknown is not zero. Blank UUIDs preclude claims of fully resolved LCI. | route records; cp_emission_receiving; cp_emission_machining; cp_emission_drying; cp_emission_boiler |
| quality_balance | all | Close original dry matter, water and carbon balances with uncertainty before burden allocation; retain stock/rework and carbon stored in product, residue, emissions and ash. Use measured carbon fractions, not generic carbon neutrality. Keep total-mass/conserved-carbon accounts separate from molecular-water and dry-component accounts: actual volatile losses and fuel consumption change dry species, and independently measured water/actual reaction evidence is required for any formation or consumption. A closure residual or COD does not establish species carbon, reaction water or evaporation. | raw balance and allocated burden ledgers |

## 9. Validation Rules

- `validate_identity`: Reject impregnated/coated/reclaimed or engineered composite inputs/outputs under this scope; confirm sawn sleeper geometry and buyer acceptance. No automatic CPC mapping acceptance.
- `validate_mass`: Require measured M for any count-to-mass conversion, same-state B and 1 kg terminal output; inspect bilingual denominator, raw count/weight records and scale calibration. B includes each new lot's first quality release once, including newly accepted closing finished goods. Old finished goods, previously accepted production and genuine customer-return rework/reacceptance do not create new B. Preserve their original acceptance cohort and inherited quantities/burdens; later service requires evidenced attribution and cannot be assigned to current new B merely because it occurred in the reporting period. Retain idle, failed, start/stop and cleanup events and the B=0 pool without fabricating a normalized result.
- `validate_inventory`: Each row is one exchange with verified flow type, species, carbon origin, medium, property and unit. Resolve applicable blank identities and screen additional species before claiming complete dataset quality. No correction flow substitutes.
- `validate_ledgers`: Equal internal handoff amounts, unchanged physical coproduct outputs and separate burden allocation must reconcile. Check disjoint PM intervals, retained biogenic CO2, supplier/transport/heat duplication and actual drying/preservation evidence. For cp_energy_drying and cp_energy_boiler, m × (h_s − h_r) is valid only for matched supply/return mass m at the same boundary and period with compatible specific enthalpies. Otherwise measure supply and return masses and enthalpies independently, sum their actual enthalpy inflows/outflows and reconcile useful heat with actual leakage, other losses, makeup and stored-energy change; no assumed equal return mass or unrecorded storage term. Keep the original heat-identity/provider compatibility requirement pending until evidenced. Check component P/N_ext/ER/EO, original cohort/vector carryover and gross movements under cp_packaging. No arbitrary balance tolerance or invented factor.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_production |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | State/specification-matched gate-to-gate inventory; cradle-to-gate only with explicit verified upstream links |
| excluded_use | Whole-track service comparison; presumed untreated durability; CPC 31320 substitution; EPD approval; fully resolved LCI without actual quantity/provider/basis and finite-check qualification |
| required_metadata | Site/campaign, configuration, measured M/B/moisture, raw graph, starting gate, actual drying/heat/transport, unallocated balances and separate burden shares, unresolved identities and downstream exclusions |
| required_quality_disclosure | Measurement uncertainty, site representativeness, estimated species, absent versus unknown operations, upstream gaps and unreviewed adaptations |
| update_trigger | Changed wood/geometry/grade/moisture, treatment status, drying/fuel/control route, supplier boundaries or flow identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `usda-wood-handbook-2021` | handbook | USDA FPL, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), Ch.4 pp.4-1/4-11; Ch.6 pp.6-20–6-22; Ch.13 pp.13-2/13-5–13-7; Ch.15 p.15-15. [ Original ](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf) | Species/geometry, moisture and density measurement, drying/adzing/boring, durability limitations; no default density, sleeper mass or lifetime. |
| `corrim-northern-lumber-2025` | literature | CORRIM, Life Cycle Assessment of Softwood Lumber Production—Northern Region, revised July 22 2025, §§3.2.4,3.2.6,3.3,4.6–4.7. [ Original ](https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Northern-Lumber-Report-07222025.pdf) | Regional softwood process/allocation and emission-screening precedent only; no numerical survey transfer to all timber or hardwood sleepers. |
| `epa-sawmill-pm-2014` | official_guidance | US EPA Region10, Particulate Matter Potential to Emit Emission Factors for Activities at Sawmills, Excluding Boilers, Located in Pacific Northwest Indian Country (May8 2014), cover and activity table. [ Original ](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf) | Activity/particle-definition screening only; nested PM and control conditions. PTE maximum capacity is not actual LCA emissions; boiler factors excluded. |
| `epa-ap42-wood-boilers-2022` | official_guidance | US EPA AP-42 §1.6, Wood Residue Combustion In Boilers (March2022), §§1.6.1–1.6.4 and Table1.6-1 footnotes. [ Original ](https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf) | Actual wood-fired boiler route/species and control screening; retain biogenic CO2 LCI despite statistical convention. No numeric boiler factor adopted. |
