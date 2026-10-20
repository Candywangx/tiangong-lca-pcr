---
{
  "pcr_id": "pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.double-salts-and-mixtures-of-calcium-nitrate-and-ammonium-nitrate",
  "language": "en-US",
  "sync_with": "pcr.zh-CN.md",
  "status": "candidate",
  "content_maturity": "authored_methodology",
  "translation_status": "canonical"
}
---

# Prilled hydrated calcium-nitrate/ammonium-nitrate double salt from nitrophosphate CNTH

## 1. Scope and Applicability

This PCR covers factory-gate manufacture of solid hydrated calcium-nitrate/ammonium-nitrate double-salt prills by melting nitrophosphate-derived calcium nitrate tetrahydrate (CNTH), neutralising residual acid with gaseous anhydrous ammonia, concentrating and prilling. The reference is a mass-defined intermediate industrial product, not equal agronomic performance. Use only when actual lot analysis confirms both nitrate salts and hydration; an ammonia-free calcium nitrate lot is outside scope. `jrc-lvic-aaf-2007` §7.4.8/Table7.10 and §7.4.4 support this route; `yara-calcinit-2023` provides one actual solid double-salt product, without setting this PCR recipe.

Exclude ammonium nitrate with calcium carbonate/dolomite or other inorganic filler (CPC34615), pure ammonium nitrate (34613), nitrate solutions as sold, dry blending, direct limestone/lime acid-neutralisation routes, pan granulation, micronutrient-enriched or intentionally coated grades, and downstream dissolution, transport to farms, application and use-phase emissions. An actual configuration needing an excluded operation requires a scoped method extension and its specific evidence before using this route. Brand, fertilizer grade and the name “calcium ammonium nitrate” alone cannot establish identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.double-salts-and-mixtures-of-calcium-nitrate-and-ammonium-nitrate |
| classification_refs | CPC:3.0:34614; narrower; `un-cpc-2025` |
| covered_products | Solid hydrated calcium-nitrate/ammonium-nitrate double-salt prills, route and hydration qualified |
| excluded_products | Carbonate-filled CAN; ammonia-free calcium nitrate; pure AN; solutions; dry blends; coated/additive grades; non-CNTH routes |
| representative_product | Actual site accepted hydrated double-salt prills; Yara CALCINIT is an identity example, not a required supplier or formulation |
| production_route | CNTH receipt → melt/acid assay → ammonia neutralisation → evaporation/recovery → prill/cool/screen → net acceptance/packing |
| market_state | Solid hydrated factory-gate prills; net as-delivered product; packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted hydrated double-salt prills |
| How much | 1 kg |
| How well | Declared lot/SKU; both salts confirmed; nitrate-N, ammonium-N, Ca, hydration/free moisture, free acid, insolubles and size tested; no generic assay default |
| How long or cycle | One complete declared production campaign through factory-gate acceptance; no field service-life equivalence |
| reference_flow_link | finished_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Double salts and mixtures of calcium nitrate and ammonium nitrate `a1758590-0e52-4ea5-a9d5-526c5893686a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CNTH source/route and upstream burden basis; SKU/lot; nitrate-N and ammonium-N; calcium; crystal/free water; free acid/impurities; solid form/size; no intentional additives/coating; net acceptance campaign; energy/water providers and quantity bases; wastewater receiver or actual freshwater outlet |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg accepted net as-delivered product; retain crystal and permitted free water. Collect accepted campaign mass P using cp_product; exclude sacks/pallets, recycle and rejected mass. Every row uses the same P. |
| material_basis | cnth_feed, ammonia_feed | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep delivered wet mass, dry salt, adhering liquor, free acid and active ammonia separate in cp_material. Assay times mass provides component ledgers; active mass cannot replace provider delivered quantity. |
| steam_basis | heat_input | Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` | MJ | cp_heat must reconcile supplier GCV quantity with measured steam/return enthalpy, actual pressure and dryness. An MJ unit alone proves no net-heat equivalence. Missing supplier conversion means incomplete linkage, not zero heat. |
| nitrogen_species | ammonia_air, nitrate_water, ammonium_water | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain original mass-as-N or species basis, molecular/ion identity and conversion trace. Total N and nitrate aerosol N are balance diagnostics; do not duplicate them as extra species exchanges. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Measured CNTH crystals/entrained mother liquor and other inputs received at a defined foreground gate |
| starting_condition_role | Unit-process gate; upstream cradle burdens retained through linked suppliers |
| product_classification_scope | CPC:3.0:34614 narrower |
| recursive_input_rule | Actual purchased same-category double salt is an input only with supplier quantity/background and explicit rework scope; never count internal recycled fines as purchase or expand into infinite identical processes |
| upstream_dataset_requirement | CNTH upstream rock digestion/crystallisation and shared acid/ammonia burdens require traceable upstream datasets and documented co-production partition; CNTH is not assumed burden-free waste |
| disclosure | Declare origin, concentration/phase, lot, measured quantity, provider basis, shared-site interfaces and unresolved links; gate-to-gate records alone do not establish cradle-to-gate completeness |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | double_salt_manufacture | Include receiving/melting, ammonia vaporisation where needed, neutralisation, evaporation, prilling, screening, product acceptance, packing, recovery and ventilation within one foreground unit. Keep stages separately metered in cp_stage. `jrc-lvic-aaf-2007` §§7.4.4/7.4.8. | jrc-lvic-aaf-2007 |
| boundary_utilities | double_salt_manufacture | Link external electricity, industrial-boiler steam heat, water and waste treatment to their actual providers once. On-site combustion or biological/chemical effluent treatment requires separately evidenced operations and atomic fuel/reagent/emission rows before completeness can be claimed; it is not hidden in a heat or waste quantity. | jrc-lvic-aaf-2007; jrc-cww-2016 |
| boundary_recycle | double_salt_manufacture | Record fines, oversize, scrubbed nitrate liquor and condensate internally with equal mass on each sending/receiving stage link and measured inventories. Only net external exchanges appear below. If material leaves the plant for a receiver, retain its real output identity and quantity. | jrc-lvic-aaf-2007; jrc-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| double_salt_manufacture | CNTH conversion and accepted prill delivery | required | Only qualified CNTH melt/ammonia/evaporation/prilling route | Integrated foreground unit; cp_stage preserves stage meters and internal links | finished_product; 1 kg |

Stages: receipt/melt → neutralise → concentrate/steam recovery → prill/cool/screen → accept/package; gas scrubber liquor/collected fines/condensate return to their measured receiving stages. This aggregation avoids representing the same final reference UUID twice between finishing and packaging.

### Process: CNTH conversion and prill delivery (`double_salt_manufacture`)

#### Inputs

##### Product flows

###### Calcium nitrate tetrahydrate crystals with adhering mother liquor (`cnth_feed`)

Receive CNTH from nitrophosphate separation; measure gross wet receipt, crystal assay, adhering liquor, free acid, nitrate-N, ammonium-N and impurities separately. Melt inside this unit; never substitute pure final double salt or a water-treatment solution.

- Selected flow: Calcium nitrate tetrahydrate crystals with adhering mother liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Ammonia, anhydrous (`ammonia_feed`)

Meter actual anhydrous ammonia crossing the unit boundary; declare liquid/gas receipt and include any vaporisation energy inside this unit. Gaseous ammonia neutralises residual acid; determine requirement from measured acid and production records, not a universal recipe.

- Selected flow: Ammonia, anhydrous `a0e3299b-9484-4ec3-89d3-cd1e2d6c2225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Alternating current (`electricity_input`)

Use this identity only for delivered CN grid-average 1–35 kV supply; the native locationOfSupply is CN, and another geography requires a separately verified compatible flow/provider; meter melting, evaporation/compression, prilling, screening, pumps, ventilation, scrubbing and packaging. A different voltage or supply route needs its own verified atomic row. Convert metered kWh to MJ; this property name does not make electricity a fuel.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Process Water (`water_input`)

Actual treated industrial make-up water for process, scrubbing, rinsing and closed-circuit cooling. Record supply treatment and grade, mass, meter location and measured density for any volume conversion; recovered condensate and circulating water remain internal. Raw abstraction or different treatment requires a distinct verified row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Process heat from steam (`heat_input`)

Only externally supplied industrial-boiler steam heat. Record pressure, temperature, dryness, mass, condensate return and supplier definition of the Gross calorific value/MJ reference. Independently reconcile delivered heat from inlet and return enthalpies. Never equate this GCV property with net delivered heat; unknown conversion to the provider reference quantity makes the background link incomplete. Internal recovered process steam is not purchased heat.

- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Woven polypropylene fertilizer sack (`pp_bag`)

When used, weigh actual woven polypropylene outer sacks excluding the separately recorded PE liner; record coatings, stitching and supplier grade. No assumed bag capacity or seed-packaging quantity.

- Selected flow: Woven polypropylene fertilizer sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Polyethylene film (`pe_liner`)

Only actual PE film liner or wrap, CAS9002-88-4; separately weigh it, describe thickness and resin grade, and exclude integrated film already counted with a composite sack. Source classification is inconsistent with the explicit film name/CAS; supplier identity and clarification remain required.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`pallet`)

The broad wooden-load-platform identity includes the actual wooden pallet subset. Record net wood mass, treatment, nails and supplier; apportion reusable pallet burdens over verified rotations without inventing a lifetime. Do not add pallet mass to fertilizer output.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Lubricating oil (`lubricating_oil`)

Conditional petroleum-fraction lubricating oil used by equipment, measured as mass. Verify supplier petroleum origin and grade; the record calorific-value annotation is not a PCR consumption or combustion factor. Synthetic PAO or wax/solvent lubricant is a different row.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Double salts and mixtures of calcium nitrate and ammonium nitrate (`finished_product`)

Single final accepted net hydrated double-salt prill output at factory gate. Broad identity is restricted here to the physical product and CNTH route in sections1–2; count acceptance once, including measured crystal water and residual free moisture, excluding packaging.

- Selected flow: Double salts and mixtures of calcium nitrate and ammonium nitrate `a1758590-0e52-4ea5-a9d5-526c5893686a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`; `yara-calcinit-2023`

##### Waste flows

###### Calcium-nitrate/ammonium-nitrate condensate purge wastewater (`nitrate_wastewater`)

Only liquid sent to an identified external wastewater-treatment receiver. Weigh or meter wet quantity and analyse nitrate, ammonium, calcium, pH and solids. Carry provider treatment burdens once; never also report its embedded pollutants as direct factory elementary emissions.

- Selected flow: Calcium-nitrate/ammonium-nitrate condensate purge wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Wet insoluble residue from CNTH melt filtration (`nitrate_sludge`)

Conditional actual polishing/physical-separation residue; record dry solids, liquor, nitrate/ammonium/calcium contamination and receiver. CNTH upstream rock-digestion residue belongs upstream unless physically received here. Biological sludge is outside this row.

- Selected flow: Wet insoluble residue from CNTH melt filtration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Discarded hydrated calcium-nitrate/ammonium-nitrate double salt (`nitrate_reject`)

Only rejected prills/spillage actually leaving for treatment, with composition and receiver recorded. Oversize/fines and dissolved spills returned to production remain internal and are not waste outputs or second final-product outputs.

- Selected flow: Discarded hydrated calcium-nitrate/ammonium-nitrate double salt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Used lubricating oil (`waste_oil`)

Weigh actual used lubricant separately from nitrate-bearing residues; declare petroleum/synthetic composition, water, contamination and receiver treatment. It is not a product credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Polypropylene Wastes (`spent_pp_bag`)

Only separately recovered PP sack scrap actually accepted for mechanical recycling; document residual fertilizer contamination and receiving conditions. Do not use the hard recycling-route UUID for mixed bags, disposal, or unaccepted hazardous packaging; split those identities.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

##### Elementary flows

###### ammonia (`ammonia_air`)

Actual molecular NH3 after scrubbing and diffuse releases at the outdoor plant boundary, unspecified air compartment. Separate NH3 from NH4+ aerosol and convert a measured nitrogen basis explicitly; no historical plant emission default.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### nitrate (`nitrate_water`)

Only directly discharged NO3− to freshwater at the final outlet. Convert measured nitrate-N to nitrate-ion mass with documented molar masses; total nitrogen is a reconciliation indicator, not a second emission.

- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### ammonium (`ammonium_water`)

Only directly discharged NH4+ to freshwater. Ammonia-nitrogen tests may include dissolved NH3: require speciation/pH/temperature and a method-compatible conversion before assigning all measured N to NH4+; unresolved speciation is not zero.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### calcium (`calcium_water`)

Actual dissolved calcium discharged to freshwater, reported as elemental Ca mass, not metallic calcium feed or CaCO3 mass. Preserve laboratory speciation and suspended-solids partition; do not add total dissolved solids again.

- Selected flow: calcium `fe0acd60-3ddc-11dd-a296-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### water vapour (`water_air`)

Water vapour released to outdoor air, unspecified compartment; derive net water evaporation from measured moisture/condensate and exhaust humidity. Recovered condensate or latent heat is not another water mass output.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### particles (PM2.5) (`pm_fine`)

Final emitted nitrate-containing particulate mass in the non-overlapping aerodynamic ≤2.5 μm fraction, outdoor air unspecified. Retain aerosol water/solids measurement definition and composition for nitrogen/calcium balance; collected scrubber dust is internal/waste, not airborne emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### particles (PM2.5 - PM10) (`pm_coarse`)

Only the >2.5 to ≤10 μm emitted fraction, outdoor air unspecified. If tests provide cumulative PM10 and PM2.5, subtract their compatible same-source/time masses; never add cumulative PM10 on top of this row.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### particles (> PM10) (`pm_large`)

Only emitted aerodynamic >10 μm particles, outdoor air unspecified. Derive from compatible total-minus-PM10 or an independent measurement; unspecified dust cannot be assigned an invented fraction.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Liquid water released to freshwater (`water_freshwater`)

Only carrier-water volume in an actual direct freshwater discharge, excluding separately measured solute mass. Use measured discharged carrier-water mass divided by measured density at stated temperature for a mass-to-volume conversion; bulk wastewater volume alone is not the pure carrier-water volume. Preserve physical water mass for the water balance. Externally treated wastewater is counted through its receiver instead. Database linkage remains pending.

- Selected flow: Liquid water released to freshwater
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

###### Waste heat dissipated to outdoor air (`heat_air`)

Conditional sensible/latent heat actually dissipated to outdoor air, not energy purchased or heat exported. Use measured energy balance and explicit temperature/enthalpy datum; exact quantity-compatible UUID unresolved.

- Selected flow: Waste heat dissipated to outdoor air
- Flow property / unit: Measured dissipated heat; identity pending / MJ
- Amount rule: Measure the campaign exchange through this protocol and divide by accepted net product mass P from cp_product. Record actual absence with evidence; unknown quantity or identity is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-lvic-aaf-2007`; `jrc-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_separation | double_salt_manufacture | Use an explicitly declared attributional LCI context, following `jrc-ilcd-2010` §§7.9.2–7.9.3. Consequential questions need a separate goal/scope decision and cannot inherit this hierarchy automatically. Retain a physical unit/stage ledger before allocation. Separate shared-site utilities and upstream CNTH/NPK co-production using measured causal/subdivision evidence first. Receiving a separated CNTH stream never establishes zero upstream burden. Allocation convention and provider denominator must accompany its upstream dataset. | jrc-ilcd-2010; jrc-lvic-aaf-2007 |
| allocation_burden | double_salt_manufacture | If subdivision fails, document the selected defensible physical relation; if none exists, disclose actual dated economic data and sensitivity. Calculate burden shares summing to one in a separate ledger. Never multiply real co-product output masses, elemental balances or internal link quantities by those shares. This is an attributional hierarchy based on `jrc-ilcd-2010`, not a BAT-prescribed allocation formula. Economic values must reflect the actual condition and gate where co-products leave co-production, not downstream packed/transported prices without adjustment. | jrc-ilcd-2010 |
| allocation_recovery | double_salt_manufacture | Internal recovered salts/condensate are circulation, without extra product output or avoided-production credit. Discarded salt, sludge and wastewater retain actual receiver treatment. A genuinely sold recovered product requires demonstrated acceptance, composition and a separate verified identity before applying any allocation. | jrc-ilcd-2010; jrc-lvic-aaf-2007 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | double_salt_manufacture | reference product | calibrated measurements and traceable records | lot SKU; route; gross/tare/net accepted mass P; nitrate-N; ammonium-N; Ca; crystal/free water; free acid; insolubles; size; returns/reacceptance; opening/closing finished and work-in-progress stocks; production history and carried inventory burdens | Calibrated scales and acceptance records; validated lot-specific chemical/moisture analysis. Count accepted output once and reconcile dispatch plus opening/closing stocks. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_material | double_salt_manufacture | CNTH ammonia lubricant | calibrated measurements and traceable records | separate receipt IDs; wet mass; crystal/solution phase; liquor/free acid; assay; NH3 phase/purity; lubricant origin/grade; stock changes; supplier basis | Weigh or calibrated mass meter each material; measure actual composition and reconcile net use from stocks and receipts. Preserve delivered quantity and component ledgers independently; vaporisation/recovery are measured stage operations. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_energy | double_salt_manufacture | electricity and dissipated heat | calibrated measurements and traceable records | stage meter IDs; kWh; actual voltage; electricity provider; energy/enthalpy balance; starts/stops; time; output P | Submeter and integrate actual electricity, fan/compressor and mechanical load. Determine dissipated heat with explicit reference temperature, sensible/latent terms and recovery; no fuel emission copied from imported heat. | MJ | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_heat | double_salt_manufacture | external industrial-boiler steam heat | calibrated measurements and traceable records | supplier reference GCV/MJ definition; pressure; temperature; dryness; inlet steam/return mass; inlet/return enthalpy; agreed datum; supplier conversion; background boundary | Measure steam and return streams; calculate net delivered enthalpy independently, then use an evidenced supplier conversion to the linked GCV reference. Maintain conversion as pending when undefined; do not infer it from MJ. | MJ | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_water | double_salt_manufacture | make-up evaporation condensate | calibrated measurements and traceable records | external make-up mass/volume; density/temperature; treatment; condensate return; humidity; stock; water in CNTH and accepted prills | Meter make-up separately from circulation; reconcile water carried in wet inputs, crystal/free water in output, condensation, evaporation and purge. Record losses and uncertainty instead of assigning a balance residual as an invented species. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_pack | double_salt_manufacture | individual packaging components | calibrated measurements and traceable records | sack count/mass; PE liner mass; thickness/resin; pallet net mass/treatment; rotations; supplier IDs; scraps | Weigh components separately and reconcile use/scrap and accepted product. Record actual rotations and measured supplier conversion where units differ; no packaging mass in P. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_waste | double_salt_manufacture | individual external wastes | calibrated measurements and traceable records | row waste ID; wet/dry mass; composition/contamination; nitrate/ammonium/Ca; receiver; acceptance and treatment route; time | Separate weighed wastes and chain-of-custody receipts; distinguish mechanical-PP recycling from disposal and residues from internal recovery. Analyse liquid/solid partition and link receiver burdens once. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_air | double_salt_manufacture | NH3 and each non-overlapping PM fraction | calibrated measurements and traceable records | outlet ID; gas flow; concentration; wet/dry and normal T/P; operating hours; NH3 versus N; PM2.5/PM10/total; aerosol moisture/chemistry; recovery; detection limits | Validated paired flow/concentration tests after abatement, plus time-representative diffuse assessment; integrate each physical species/fraction once. Retain start/stop periods, uncertainty and censored values. Unspecified dust remains unpartitioned pending size evidence. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_effluent | double_salt_manufacture | direct freshwater outlet species/water | calibrated measurements and traceable records | outlet and recipient; discharge flow; sampling times; NO3-N or NO3; NH4-N or NH4; dissolved NH3; Ca; pH/temperature; suspended solids; water fraction; carrier-water density/temperature and separate carrier-water volume; lab method | Only actual direct discharge: paired calibrated flow and representative laboratory analysis at final outlet; preserve species and original units. External-treatment transfer is recorded in cp_waste instead; do not duplicate its loads here. | kg; m3 | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |
| cp_stage | double_salt_manufacture | internal physical links and allocation | calibrated measurements and traceable records | stage IDs; sending/receiving amounts; recycle solids/liquor; condensate; stocks; heat recovery; upstream/shared-site partition; independent burden ledger | Preserve measured stage diagrams, mass/water/N/Ca balance and equal link quantities before allocating burdens. Use measured utility causes/subdivision; document any physical/economic relation and sensitivity. | kg; MJ | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared campaign including starts/stops and stock reconciliation | same foreground unit; actual supplier/receiver interfaces | per 1 kg reference flow | calibration, lab method/speciation, receipts, timestamps, coverage and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalise_campaign | all inventory rows | Exchange per reference kg = raw net campaign exchange total / accepted net product mass P, divided once. Sum raw quantities over the complete same route, hydration/specification and campaign, including attributable failed/zero-output intervals, starts/stops, cleaning and rework; do not average successful-interval ratios or divide a per-kg value again. P must be positive and is credited once after reconciling returns/reacceptance, finished stocks and work in progress. Preserve their production history and carried burdens so attribution covers the same accepted output; burden adjustments do not erase raw physical exchanges. Internal recycle remains outside the external numerator and is not a new accepted output. If P is zero, retain totals and disclose no unit result rather than divide or omit burdens. | cp_product; row-specific protocol | row amount per 1 kg reference flow | jrc-cww-2016 |
| components_and_water | cnth_feed, finished_product | Component mass = measured delivered mass × measured component mass fraction. Maintain disjoint dry salt, crystal water, free water and adhering-liquor terms; no manufacturer assay transplanted. | cp_material; cp_product; cp_water | physical component/water ledger | jrc-lvic-aaf-2007 |
| electricity_conversion | electricity_input | MJ = measured kWh × 3.6; the definition 1 kWh = 3.6 MJ is a unit conversion, not a technology consumption value. | cp_energy | provider-compatible MJ per reference kg |  |
| emission_load | ammonia_air, nitrate_water, ammonium_water, calcium_water | Species mass = sum over measured intervals of concentration × compatible gas/water flow × interval duration × explicit unit/species conversion. For mass-as-N multiply by molar mass of measured species / molar mass of N after confirming speciation. | cp_air; cp_effluent | physical species load then per-reference amount | jrc-cww-2016 |
| particle_partition | pm_fine, pm_coarse, pm_large | Disjoint bins: fine = measured PM2.5; middle = compatible PM10 − PM2.5; large = compatible total PM − PM10. Independent disjoint tests may replace differences. Incompatible tests or negative differences require review, not clipping to zero. | cp_air | non-overlapping physical particle loads | jrc-cww-2016 |
| heat_reconciliation | heat_input | Net delivered heat = measured inlet steam mass × inlet enthalpy − measured return mass × return enthalpy, using one explicit datum and appropriate pressure/temperature/dryness; reconcile other outlet/loss terms. The supplier GCV conversion is separate measured/declared evidence; no default GCV-to-net factor. | cp_heat; cp_stage | separate physical heat and provider reference ledgers | jrc-lvic-aaf-2007 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Verify actual species/state, route, medium, property/unit and provider definition. Empty UUID or pending compatibility remains explicit; identity verification alone is not a complete background dataset. | supplier specifications, flow evidence, receiver criteria |
| balances | double_salt_manufacture | Reconcile unallocated mass, water, N and Ca, impurities/stock changes and stage links; state uncertainties and unresolved residuals. Never invent yield, purity, hydration or zero emissions to close balances. | cp_product; cp_material; cp_water; cp_stage |
| coverage | double_salt_manufacture | Capture normal and start/stop production, cleaning, leaks, recovery and each real waste/emission. Additional actual reagents, pollutants or utilities must be separate scoped rows with evidence; absent or unquantified rows cannot imply completeness. | jrc-cww-2016; cp_stage |
| sources | double_salt_manufacture | Historic BAT/CALCINIT case values do not define universal recipes, water removal, energy, emission factors or quality thresholds. Require current lot tests and supplier evidence; disclose modelling choices separately from external facts. | `un-cpc-2025`; `jrc-lvic-aaf-2007`; `jrc-cww-2016`; `yara-calcinit-2023` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_product | reference product | Confirm both nitrate salts, solid hydration and the declared CNTH route; exactly one final reference output is 1 kg of net accepted product. Packaging, off-spec waste and internal intermediates do not add another reference output. | un-cpc-2025; jrc-lvic-aaf-2007; yara-calcinit-2023 |
| validate_quantity | all inventory rows | All rows and collection aggregation use the same accepted net P and campaign; source/property/unit conversions and upstream CNTH allocation must be explicit. Undefined steam GCV/enthalpy conversion, missing quantities, uncertain speciation or missing exact identity remain findings and block complete dataset validation. | jrc-cww-2016; jrc-ilcd-2010 |
| validate_no_overlap | double_salt_manufacture | Check equal internal links, stock changes, physical balances versus burden allocation, disjoint PM bins and total-N reconciliation. A transferred wastewater stream and its direct elementary pollutant load are mutually exclusive at this boundary; source case “no discharge” is not proof of actual absence. | jrc-cww-2016; jrc-lvic-aaf-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground industrial double-salt manufacture; optional cradle-to-gate integration |
| downstream_use | Mass-based supplied fertilizer/chemical input with declared composition and hydration |
| allowed_use | Only qualified CNTH/ammonia/evaporation/prilling solid route; compatible provider bases |
| excluded_use | Other CAN identities/routes, solution reference, field-use efficacy or universal fertilizer recipe |
| required_metadata | Reference qualifiers; complete campaign P; provider and receiver identities/bases; stages and inventories; assays; allocation; emission compartments and methods |
| required_quality_disclosure | Actual measured versus modelled data; coverage/uncertainty; unresolved UUIDs and steam compatibility; upstream CNTH burden completeness; metadata debts |
| update_trigger | Change of CNTH origin, process route, hydration/assay, additive/coating, provider basis, abatement, waste receiver or shared-site allocation |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | [UNSD CPC Version3.0 Structure, 30Jun2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv) | Rows34613/34614/34615. Official category separation only; no manufacture recipe. |
| jrc-lvic-aaf-2007 | official_guidance | [European Commission LVIC-AAF BREF, August2007](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf) | §7.2.2.1 p286/PDF314; §7.4.4 p302/PDF330; §7.4.8 Table7.10 pp310–311/PDF338–339. CNTH-origin and conversion/prilling process evidence. Historic/plant-specific quantities and NPK-prilling moisture are not transferable defaults. |
| jrc-cww-2016 | official_guidance | [European Commission CWW BREF, 2016, JRC103096](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | BAT2–4 pp543–544/PDF573–574: chemical process diagrams, stream inventory, species/load and final-outlet monitoring. Used for collection design only, without asserting current legal BAT compliance, universal pollutants or prescribed schedule. |
| yara-calcinit-2023 | handbook | [YaraLiva CALCINIT Greenhouse/Solution Grade PDS, 0623-R1](https://www.yara.us/contentassets/280676bbae1c466799e9d22b57225584/yaraliva-calcinit-greenhouse-pds.pdf) | One page, June2023: hydrated ammonium calcium nitrate double salt, soluble solid prilled/granular market identity. One manufacturer grade only; no specification, recipe, solubility, nutrient or size value adopted as PCR default; does not prove the route of an actual site. |
| jrc-ilcd-2010 | official_guidance | [JRC ILCD Handbook, Detailed guidance, first edition March2010](https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf) | §§7.9.2–7.9.3, printed255–257/263–264, PDF275–277/283–284. Attributional multifunctionality subdivision, physical causality then economic allocation; economic value at actual co-production gate/condition. No CNTH share or recipe; not automatically applicable to consequential studies. |
