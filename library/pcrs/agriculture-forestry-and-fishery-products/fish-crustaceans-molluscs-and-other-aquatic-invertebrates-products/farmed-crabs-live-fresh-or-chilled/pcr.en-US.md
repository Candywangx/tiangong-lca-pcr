---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed crabs, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed crabs in CPC 3.0 `04312`, placed on the market as live, fresh, or chilled product. It covers crab aquaculture routes including hatchery or supplier seed, nursery, grow-out, fattening where the reporting operator controls the feeding and husbandry period, harvest, grading, live holding, chilling, packaging, and release at the declared gate.

Covered systems may include ponds, pens, cages, boxes, recirculating aquaculture systems, tanks, brackish-water systems, mangrove-edge systems where legally permitted, polyculture, and declared integrated aquaculture systems. Excluded products are wild-caught crabs, wild crabs only stored or graded after capture, frozen, dried, salted, brined, cooked, canned, picked-meat, roe-only, prepared, or preserved crab products, crab seed sold as a separate aquaculture input, and crab shell or processing residues modelled as separate products.

A conforming dataset must show foreground-controlled farming, fattening, nursery, or grow-out records. Wild capture followed only by live holding, chilling, grading, or dispatch is outside this PCR and belongs under the corresponding wild crab category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04312`, `Farmed crabs, live, fresh or chilled` |
| covered_products | farmed crabs sold live, fresh, or chilled from declared aquaculture, nursery, grow-out, or fattening systems |
| excluded_products | wild-caught crabs; wild catch only held, chilled, graded, or dispatched after capture; frozen, dried, salted, brined, cooked, canned, picked-meat, roe-only, prepared, or preserved crab products; crab seed sold as seed; crab shells, molts, and residues as separate products |
| representative_product | live or chilled farmed crab at declared market size and declared product form |
| production_route | broodstock or seed supply, hatchery or nursery where controlled, grow-out or fattening husbandry, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled crab with declared species, seed or broodstock source, culture system, size grade, whole or declared product basis, holding or chilling condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed crabs as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or species group, farmed proof, culture system, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, fattening batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; broodstock, megalopa, juvenile, soft-shell, fattening, or stocked-crab source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, soft-shell, fattened, or declared product basis; size grade or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; water salinity and exchange; health, biosecurity, permit, or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, basket, box, tub, live-tank, or size-grade records may be used only when net mass, count per kg or mean individual mass, product form, and sampling or tare method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed crab in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture, grow-out, nursery, or fattening activity, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole, soft-shell, fattened, live, fresh, or chilled records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, soft-shell product weight, fattened crab weight, drained mass, or another contract-declared basis. Convert between bases only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, size grade, sampling method, and product form before normalization to kg reference product. |
| `life_stage_identity` | broodstock, eggs, larvae, megalopae, juveniles, soft-shell crabs, and transferred stock | Mass or count | kg, item, or life-stage count | Life-stage records must retain species, life stage, supplier or hatchery, batch, count, mass where measurable, health status, and transfer date. |
| `feed_mass_basis` | trash fish, mollusc meat, formulated feed, live feed, and supplementary feed | Mass | kg | Feed records must state wet, dry, as-fed, live-feed, or formulated-feed basis. Convert between bases only with measured moisture, supplier data, or retained farm recipe. |
| `water_salinity_and_volume` | hatchery, nursery, grow-out, fattening, live holding, washing, chilling, and wastewater | Salinity, mass, or volume | ppt, kg, or m3 | Preserve controlled water volume, salinity, water-exchange, make-up water, recirculation, and discharge basis. |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, water exchange, filtration, lighting, chilling, live holding, harvest, boats, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, lime, water-treatment chemicals, oxygen, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | Record product quantity, active ingredient where applicable, treatment purpose, diagnosis or health plan link, legal status, and harvest eligibility consequence. |
| `packaging_and_ice_basis` | baskets, boxes, bags, liners, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | Packaging, ice, live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | required for all datasets |
| Culture system | pond, pen, cage, box, tank, RAS, mangrove-edge system, polyculture, fattening unit, or declared variant | required for boundary, water, feed, mortality, and discharge interpretation |
| Biological starting condition | broodstock, seed crab, megalopa, juvenile, soft-shell crab, fattening stock, hatchery source, or supplier | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, soft-shell, fattened, roe-bearing if declared, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, carapace width, sex or maturity class, or market grade | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed crab production to the declared farm, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, egg, larval, megalopa, juvenile, seed crab, soft-shell, or fattening-stock sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased stock disclosure when supplied by another hatchery, fisher, collector, or farm.
2. Hatchery, nursery, grow-out, and fattening husbandry, including stocking, feed, water intake and exchange, aeration, oxygenation, filtration, salinity control, health management, biosecurity, molting management, mortalities, and directly controlled maintenance.
3. Harvest, grading, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased feed, seed crabs, megalopae, juveniles, packaging, ice, oxygen, electricity, fuel, and chemicals require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_megalopa_juvenile_seed_crab_or_fattening_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04312`, `Farmed crabs, live, fresh or chilled` |
| recursive_input_rule | farmed crab broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, or fattening stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, seed, juvenile, soft-shell, fattening-stock, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose species, culture system, biological starting condition, farmed production evidence, stocking density, feed regime, water source, salinity and water exchange, aeration or oxygenation, health treatments, molting and mortality records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | Broodstock, Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | viable seed crabs, megalopae, juveniles, or stocked crabs entering grow-out or fattening |
| growout_and_fattening_husbandry | Grow-out and Fattening Husbandry | required |  | foreground production | harvest-size crabs before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled crab |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |

### Process: Broodstock, Hatchery, Nursery, and Stocking (`broodstock_hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### Broodstock, larvae, megalopae, juveniles, seed crabs, or fattening stock (`biological_stock_input`)

This row records purchased or internally produced biological stock entering the declared farmed crab route.

- Selected flow: Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`; crab larvae, megalopae, juveniles, seed crabs, soft-shell crabs, or fattening stock remain site-specific biological stock selections
- Flow property / unit: Mass or count with life stage / kg, item, or stage count
- Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, or fattening
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biological_stocking_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`, `asc-farm-standard-2025`
- Range: Provisional biological stock screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 10
  - Unit: kg biological stock live mass/kg marketable product
  - Basis: broad first-pass seed, juvenile, soft-shell, or fattening-stock live mass input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery, nursery, or stocking feed (`hatchery_nursery_or_stocking_feed`)

This row covers live feed, Artemia, mollusc meat, trash fish, formulated starter diets, broodstock diets, and comparable hatchery or nursery feeds.

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other hatchery, nursery, or stocking feed selected from site records
- Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item
- Amount rule: measured feed or live-feed quantity by batch, life stage, and basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery, nursery, or stocking batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025`
- Range: Provisional hatchery and nursery feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg or feed-unit/1,000 kg marketable product
  - Basis: broad first-pass hatchery, nursery, and stocking feed input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery water (`hatchery_nursery_water`)

This row covers controlled seawater, freshwater, brackish water, process water, make-up water, and recirculation replacement water used in on-site hatchery and nursery operations.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume with salinity basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_salinity_and_discharge_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025`
- Range: Provisional hatchery and nursery water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/1,000 kg marketable product
  - Basis: broad first-pass controlled hatchery and nursery water relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery electricity (`hatchery_nursery_electricity`)

This row covers electricity for pumps, aeration, oxygenation, filtration, lighting, chilling or heating, UV or other water treatment, and live-feed culture in on-site hatchery or nursery operations.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or allocated electricity records for hatchery and nursery operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional hatchery electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh/1,000 kg marketable product
  - Basis: broad first-pass on-site hatchery and nursery electricity relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Hatchery mortalities, molts, sludge, and culture residue (`hatchery_mortalities_molts_sludge_and_culture_residue`)

This row records broodstock mortalities, larvae, megalopae, seed rejects, molts, shells, feed residue, sludge, biofilter solids, and rejected stock from on-site hatchery or nursery operations.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; crab mortality, shell, molt, and other organic aquaculture residue remain site-specific waste-flow selections
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured mortality count, residue mass, sludge, rejected stock, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Range: Provisional hatchery residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg residue/kg accepted seed or juveniles
  - Basis: broad first-pass residue or mortality mass relative to accepted seed or juveniles
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary input is specified for hatchery and nursery. Add site-specific seawater withdrawal, land or water-area occupation, waterborne emissions, or direct refrigerant loss flows when the Tiangong identity and site scope are selected.

#### Outputs

##### Product flows

###### Accepted seed crabs or juveniles for grow-out (`accepted_seed_crabs_or_juveniles_for_growout`)

This output carries viable seed crabs, megalopae, juveniles, or stocked crabs into grow-out or fattening.

- Selected flow: Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`; crab seed, megalopae, juveniles, or stocked crabs remain site-specific biological stock selections
- Flow property / unit: Mass or count with mean size / kg, item, or stage count
- Amount rule: calculated accepted stock after receipt, nursery, grading, acclimation, and transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted stock entering grow-out or fattening
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_biological_stocking_records`
- Range: Stock acceptance mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg biological stock input
  - Basis: accepted stock fraction after receipt, grading, and nursery transfer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

No additional waste output is specified beyond hatchery mortalities, molts, sludge, and culture residue.

##### Elementary flows

No default elementary output is specified for hatchery and nursery.

### Process: Grow-out and Fattening Husbandry (`growout_and_fattening_husbandry`)

#### Inputs

##### Product flows

###### Accepted stocked crabs entering culture units (`accepted_stocked_crabs_entering_culture_units`)

This row records accepted seed crabs, juveniles, soft-shell crabs, or fattening stock stocked into grow-out or fattening culture units.

- Selected flow: Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`; accepted stocked crabs remain site-specific biological stock selections
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured accepted count and mass entering each culture unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per culture unit and per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biological_stocking_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`
- Range: Stocking input QA screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.01
  - Upper: 20
  - Unit: kg stocked crab live mass/kg harvest-size crab
  - Basis: broad first-pass accepted stocked crab mass relative to harvest-size crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out and fattening feed (`growout_and_fattening_feed`)

This row records formulated feed, trash fish, mollusc meat, mixed farm feed, and supplementary feed supplied to grow-out or fattening units.

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other crab grow-out or fattening feed selected from site records
- Flow property / unit: Mass / kg
- Amount rule: measured net feed supplied, retaining wet, dry, as-fed, trash-fish, mollusc-meat, or formulated basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025`
- Range: Provisional feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg feed/kg harvest-size crab
  - Basis: broad first-pass feed input relative to harvest-size crab output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out water exchange and make-up water (`growout_water_exchange_and_makeup_water`)

This row records controlled brackish, seawater, freshwater, make-up, pond exchange, tank exchange, or recirculation replacement water.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured intake, make-up, exchange, recirculation replacement, or pump-runtime calculated water volume with salinity and source retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_salinity_and_discharge_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025`
- Range: Provisional grow-out water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/1,000 kg harvest-size crab output
  - Basis: broad first-pass controlled water intake or exchange relative to grow-out output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out electricity and fuel (`growout_electricity_and_fuel`)

This row records directly controlled electricity and fuel for pumps, aeration, oxygenation, water exchange, boats, lighting, site operations, and backup generation.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg
- Amount rule: measured electricity, fuel, or allocated energy records for grow-out and fattening operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size crab output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional grow-out energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh-equivalent/1,000 kg harvest-size crab output
  - Basis: broad first-pass directly controlled grow-out energy relative to harvest-size output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Health treatments, water-treatment chemicals, salt, lime, and oxygen (`health_treatments_chemicals_salt_lime_and_oxygen`)

This row records medicines, disinfectants, probiotics, water-treatment chemicals, salt, lime, oxygen, and comparable treatment inputs.

- Selected flow: Water quality improvers `1dff627b-0317-4ff1-b733-5746b82b3e92`; oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`; other crab aquaculture treatment inputs selected from site records
- Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 gas
- Amount rule: measured quantity applied by treatment event, purpose, active ingredient where relevant, and culture unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per culture unit and per 1,000 kg harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_health_treatment_and_chemical_records`
- Sources: `asc-farm-standard-2025`, `fao-mud-crab-aquaculture-2011`
- Range: Provisional treatment input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: kg or active-ingredient equivalent/1,000 kg harvest-size crab
  - Basis: broad first-pass health treatment, water-treatment chemical, salt, lime, and oxygen input relative to harvest-size output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grow-out mortalities, molts, shells, sludge, and feed residue (`growout_mortalities_molts_shells_sludge_and_feed_residue`)

This row records dead crabs, cannibalism losses when measurable, molts, shells, uneaten feed, pond sludge, biofilter solids, and organic residues.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; crab mortality, molt, shell, and other organic aquaculture residue remain site-specific waste-flow selections
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured count, mass, reason, fate, and culture unit for mortalities and residues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`
- Range: Provisional grow-out residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg residue/kg harvest-size crab
  - Basis: broad first-pass mortality, molt, shell, sludge, and residue mass relative to harvest-size output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Controlled water discharge from grow-out (`controlled_growout_water_discharge`)

This row records controlled pond, tank, cage, pen, RAS, or holding-unit discharge when it leaves the foreground system as an elementary waterborne release.

- Selected flow: Controlled aquaculture discharge water; use Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff` for product water balance and select a site-specific elementary water emission flow before reviewed use
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured discharge or calculated discharge from intake, exchange, recirculation, retained water, and sludge removal records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_salinity_and_discharge_records`
- Sources: `asc-farm-standard-2025`, `mass-balance-identity`
- Range: Controlled discharge QA screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/1,000 kg harvest-size crab output
  - Basis: broad first-pass controlled water discharge relative to grow-out output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-size farmed crabs before final handling (`harvest_size_farmed_crabs_before_final_handling`)

This output carries harvest-size live crabs from grow-out or fattening into harvest, live holding, chilling, and pack-out.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: measured harvest-size crab mass by culture unit, product form, and grade before final handling losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest-size crab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records`
- Sources: `fao-mud-crab-aquaculture-2011`, `mass-balance-identity`

##### Waste flows

No additional waste output is specified beyond grow-out mortalities, molts, shells, sludge, and feed residue.

##### Elementary flows

No default elementary output is specified beyond controlled grow-out discharge when applicable.

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Harvest-size crabs received for final handling (`harvest_size_crabs_received_for_final_handling`)

This row records live harvest-size crabs entering grading, washing, live holding, chilling, or pack-out.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: measured incoming harvest-size crab mass by harvest lot, grade, product form, and holding condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per pack-out batch and reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records`
- Sources: `mass-balance-identity`
- Range: Final handling input mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: harvest-size crab input relative to final marketable reference product after rejects, holding losses, and off-grade products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live holding, washing, and chilling water (`live_holding_washing_and_chilling_water`)

This row records controlled live holding water, washing water, chilled water, seawater, brackish water, freshwater, or ice melt water used in final handling.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured or calculated water use by holding, washing, chilling, or cleaning activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_salinity_and_discharge_records`
- Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025`
- Range: Provisional live holding and wash water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/1,000 kg reference product
  - Basis: broad first-pass live holding, washing, and chilling water relative to marketable crab output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pack-out electricity, fuel, ice, oxygen, and packaging (`packout_energy_ice_oxygen_and_packaging`)

This row records electricity, fuel, ice, oxygen, baskets, boxes, bags, liners, labels, insulated containers, gel packs, pallets, and reusable container services used to prepare marketable crabs.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`; ice selected from site records
- Flow property / unit: Energy, mass, or item count / kWh, kg, or item
- Amount rule: measured pack-out energy, packaging, oxygen, and ice use; convert count to mass only with tare or supplier specifications
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ice_oxygen_and_energy_records`
- Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025`
- Range: Provisional pack-out material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg packaging, ice, oxygen, or equivalent material/kg reference product
  - Basis: broad first-pass pack-out material mass relative to marketable crab product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pack-out rejects, dead crabs, shells, and wastewater (`packout_rejects_dead_crabs_shells_and_wastewater`)

This row records dead crabs, broken product, rejected grades, shells, ties, packaging waste, wastewater, and cleaning residues from final handling.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; crab reject, shell, and wastewater selected from site records
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured reject mass, wastewater volume, packaging waste, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Sources: `codex-cxc-52-2003`, `mass-balance-identity`
- Range: Provisional pack-out reject screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvest-size crab received
  - Basis: broad first-pass dead crab, reject, shell, packaging waste, and wastewater mass-equivalent relative to final handling input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Add direct refrigerant loss, cleaning emissions, or waterborne emissions only when foreground records show they cross the environmental boundary and are not already represented by an upstream or waste-treatment dataset.

#### Outputs

##### Product flows

###### Marketable farmed crabs, live, fresh, or chilled (`marketable_farmed_crabs_live_fresh_or_chilled`)

This is the reference product output.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: measured marketable product mass in the declared live, fresh, or chilled form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records`
- Range: Reference product identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: normalized reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Off-grade saleable crabs (`offgrade_saleable_crabs`)

This row records saleable grades that are not the declared reference product but leave the system as co-products.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: measured off-grade saleable crab mass by grade, product form, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per pack-out batch and reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_records`
- Range: Provisional off-grade product screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: broad first-pass off-grade saleable crab mass relative to declared reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional waste output is specified beyond pack-out rejects, dead crabs, shells, and wastewater.

##### Elementary flows

No default elementary output is specified for the reference pack-out process.

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Product transferred to controlled delivery (`product_transferred_to_controlled_delivery`)

This row is used when the declared reference flow is delivered beyond the farm, harvest, dispatch, or packhouse gate under the reporting operator's control.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: measured marketable product mass loaded for controlled delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per controlled delivery route and reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Delivery load QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: loaded marketable product relative to delivered reference product after declared delivery losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Controlled delivery fuel or transport service (`controlled_delivery_fuel_or_transport_service`)

This row records directly controlled delivery fuel, refrigerated vehicle energy, vessel fuel, or transport service to the declared gate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Fuel quantity or transport service / L, kg, MJ, or tonne-km
- Amount rule: measured fuel or calculated tonne-kilometres from delivered mass, distance, vehicle, vessel, refrigeration, live-holding, and route records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Provisional controlled delivery screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: tonne-km/1,000 kg delivered reference product
  - Basis: broad first-pass controlled delivery service per delivered product
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Delivery rejects or mortalities (`delivery_rejects_or_mortalities`)

This row records product mortalities, damaged packages, leaking live containers, rejected product, or temperature-abuse losses during controlled delivery.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; crab mortality, reject, and organic residue selected from site records
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured delivery reject mass or count by reason and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Delivery reject QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg loaded product
  - Basis: rejected or dead product fraction of product loaded for delivery
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

Add direct delivery combustion or refrigerant emissions only when the foreground delivery process does not already use a dataset that carries those emissions.

#### Outputs

##### Product flows

###### Delivered farmed crabs (`delivered_farmed_crabs`)

This output is used only when the declared gate is beyond the farm, harvest, dispatch, or packhouse gate.

- Selected flow: Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- Flow property / unit: Mass / kg
- Amount rule: delivered marketable product mass at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Delivered reference product identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: normalized delivered reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

No additional waste output is specified beyond delivery rejects or mortalities.

##### Elementary flows

No default elementary output is specified for delivery.

## 7. Allocation and Co-product Handling

Avoid allocation where batch records can partition burdens by species, hatchery batch, nursery unit, grow-out unit, fattening unit, harvest lot, size grade, sex or maturity class, product form, live/fresh/chilled state, or destination. Separate live, fresh, chilled, soft-shell, fattened, off-grade, and delivery products by measured mass before applying allocation.

When a single foreground batch produces several saleable grades within CPC 04312, allocate shared hatchery, nursery, grow-out, fattening, harvest, holding, chilling, packaging, and delivery burdens by declared product mass unless a reviewed market-value rule is documented. Shells, molts, mortalities, wastewater, sludge, feed residue, packaging rejects, and dead product are waste or treatment outputs unless they are sold with a separate product dataset and reference flow.

If the same site grows multiple species or products in the same pond, pen, cage, box, RAS, tank, vehicle, vessel, or packhouse route, allocate shared energy, water, feed preparation, oxygenation, filtration, labour service, and maintenance records by measured subprocess use, culture unit, biomass-time, area-time, or product mass in that order of preference. The selected allocation basis must be disclosed.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence |
| `cp_feed_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed purchase records, supplier formulation, farm recipe, stock movement logs |
| `cp_water_salinity_and_discharge_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter calibration, sensor records, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet |
| `cp_health_treatment_and_chemical_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | application record, diagnosis record, health plan, invoice, permit or certification evidence |
| `cp_mortality_molt_residue_and_sludge_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout; delivery_to_declared_gate | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | sum by fate and normalize to process output and reference product | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance |
| `cp_harvest_and_product_records` | growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole or declared basis; grade; count; sex or maturity class; mass; destination | harvest weighing, grader records, live holding records, packhouse records, invoice | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_ice_oxygen_and_energy_records` | harvest_live_holding_chilling_and_packout | boxes, baskets, bags, liners, labels, ice, gel packs, oxygenated packs, pallets, reusable containers, and pack-out energy | packaging issue log, ice production or purchase record, oxygen pack record, purchase invoice, bill of materials, energy meter | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; oxygen pack; destination; energy use | warehouse issue record, bill of materials, supplier invoice, weighing, submeter | kg, item, and kWh | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_records` | delivery_to_declared_gate | diesel, vessel fuel, vehicle fuel, generator fuel, delivery service, delivered product, and delivery losses | fuel purchase, tank drawdown, vessel log, vehicle log, delivery log, dispatch note, receiving note | fuel type; quantity; route; vehicle or vessel; distance; load; live-holding or refrigeration service; delivery date; rejects; receiving gate | fuel invoice, tank gauge, vehicle or vessel log, GPS or route log, receiving record | L, kg, MJ, tonne-km, and kg product | each trip, work event, delivery route, or reporting period | delivery period | directly controlled routes, vessels, vehicles, equipment, and declared gate | normalize fuel or tonne-km to product mass; calculate delivery losses; avoid double counting supplier-delivered inputs | fuel invoice, odometer, vessel log, delivery manifest, receiving note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-form basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_stock_acceptance_and_survival` | broodstock_hatchery_nursery_and_stocking and growout_and_fattening_husbandry | accepted_stock = received_or_produced_stock - rejected_stock; survival_to_harvest = harvested_count / stocked_count when count records are available. Retain count-to-mass conversion separately. | received stock; produced megalopae; rejected stock; stocked count; harvested count; mortality count | accepted stock, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_and_fattening_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_product_mass on the declared feed mass basis. Do not compare wet, dry, trash-fish, mollusc-meat, and as-fed records without conversion evidence. | feed_mass; feed basis; harvest_size_product_mass | feed mass per kg harvest-size crab | `asc-feed-standard-2025` |
| `calculate_controlled_discharge` | water intake and discharge rows | controlled_discharge = measured_discharge or intake - recirculated_volume - retained_or_removed_water adjustment when meters are incomplete. | intake; discharge; recirculated volume; retained water; sludge water | controlled discharge volume by process | `mass-balance-identity` |
| `reconcile_packout_mass` | harvest_live_holding_chilling_and_packout | harvested_input_mass = reference_product_mass + offgrade_saleable_mass + reject_mass + measured holding, mortality, drainage, or cleaning loss on the same product-form basis. | harvested_input_mass; reference_product_mass; offgrade_mass; reject_mass; holding_loss | pack-out mass balance | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging, ice, oxygen, and reusable container rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging, ice, oxygen, or container service per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | transport_service = delivered_product_mass_tonnes * one-way controlled delivery distance. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species, farmed production evidence, biological starting condition, culture system, product state, geography, and declared gate. | dataset metadata, stocking records, hatchery records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, stock, harvest, pack-out, rejects, feed, packaging, and ice | Keep whole, soft-shell, fattened, live, fresh, chilled, drained, wet, dry, trash-fish, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, moisture or drainage evidence |
| `feed_and_health_disclosure` | hatchery, nursery, grow-out, and fattening rows | Retain feed type, feed basis, feed recipe, supplier formulation, health treatments, medicine eligibility, and biosecurity records where applicable. | feed logs, supplier data, farm recipe, health plan, treatment logs |
| `water_salinity_and_discharge_disclosure` | hatchery, nursery, grow-out, fattening, live holding, and pack-out | Distinguish controlled intake, exchange, recirculation, oxygenation, salinity, live holding, cleaning, and discharge. | water meters, sensor logs, oxygen logs, pump logs, discharge permits, monitoring reports |
| `mortality_molt_residue_and_sludge_completeness` | stock, grow-out, fattening, pack-out, and delivery rows | Record mortalities, molts, shells, feed residue, sludge, rejects, and fate by batch or reporting period. | mortality log, molting log, reject sheet, sludge record, waste manifest, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-system operations | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, pond records, cage records, RAS module records, route logs |
| `temporal_representativeness` | all foreground rows | Cover a complete aquaculture production batch, fattening batch, harvest lot, holding period, delivery route, or representative reporting period; disclose partial-cycle or pilot-scale datasets. | production calendar, stocking and harvest dates, hatchery records, delivery records, reporting-period records |

## 9. Validation Rules

A foreground data package conforms to this PCR only when:

- the reference product is normalized to 1 kg farmed crab in a declared live, fresh, or chilled product form;
- species, biological starting condition, farmed production evidence, culture system, product state, product form, size grade, geography, declared gate, holding duration, and packaging state are declared;
- the dataset distinguishes farmed grow-out, nursery, or fattening from wild catch and does not use this PCR for wild capture followed only by storage, live holding, chilling, grading, or dispatch;
- broodstock, larval, megalopa, juvenile, seed crab, stocked crab, feed, controlled water, energy, fuel, health treatment or chemical use, mortality, molt or residue, harvest, pack-out, packaging, and delivery where relevant are either present or explicitly marked not applicable with a reason;
- count, basket, box, tank, tub, or size-grade records include actual net mass, count per kg or mean mass, stage, product form, tare where relevant, and sampling method;
- water rows distinguish controlled water intake, exchange, recirculation, oxygenation, salinity, discharge, and live holding water;
- feed records distinguish formulated feed, trash fish, mollusc feed, live feed, wet basis, dry basis, and as-fed basis;
- pack-out mass balance reconciles harvested input, reference product, saleable off-grade product, rejects, and holding, mortality, drainage, or cleaning losses;
- same-site multi-species, shared-pond, shared-pen, shared-cage, shared-box, shared-RAS, shared-packhouse, or multi-grade allocation is documented before the dataset is used as a background or secondary dataset.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | use as farmed crab input to seafood processing, food service, retail, cold-chain, live seafood distribution, or regional food-product lifecycle models |
| allowed_use | farmed crab live, fresh, or chilled datasets with declared farmed production evidence, species, culture system, product state, gate, and quality disclosures |
| excluded_use | wild-caught crab datasets, wild catch only held or chilled after capture, frozen/dried/salted/brined/cooked/canned/picked-meat/prepared products, seed sold as seed, shell residue datasets, and datasets lacking farmed production or culture-system disclosure |
| required_metadata | canonical PCR id; CPC code; species; biological starting condition; farmed production evidence; culture system; product state; whole or declared basis; size grade or count per kg; sex or maturity class where material; geography; declared gate; holding or chilling duration; feed regime; water salinity and exchange basis; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved crab seed, shell, molt, mortality, wastewater, ice, and site-specific treatment flow identities; feed wet/dry/trash-fish conversion; water salinity and discharge records; health treatment eligibility; mortality and molt completeness; pack-out mass balance; partial-cycle, pilot-scale, or proxy data use |
| update_trigger | revise when CPC mapping changes, Tiangong crab, seed, feed, oxygen, water, discharge, sludge, shell, packaging, or treatment flow identities are updated, ASC, Codex, FAO, SEAFDEC, or equivalent aquaculture and seafood handling guidance changes, or reviewed foreground datasets provide better source-backed ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | <https://www.fao.org/input/download/standards/10273/CXP_052e.pdf> | fish and fishery product handling, chilled aquatic products, temperature control, damage prevention, aquaculture and seafood hygiene context |
| `fao-mud-crab-aquaculture-2011` | handbook | <https://www.fao.org/4/ba0110e/ba0110e.pdf> | mud crab biology, hatchery, nursery, grow-out, disease control, harvest, processing, packing, and market-readiness process decomposition used as crab-specific aquaculture guidance |
| `seafdec-mud-crab-growout-2017` | extension_guidance | <https://repository.seafdec.org.ph/bitstream/handle/10862/3181/3181-GenodepaJG2017.pdf> | mud crab grow-out systems, ponds, pens, cages, fattening context, cannibalism and survival management, and harvest handling guidance |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | current ASC farm-level aquaculture requirements for site scope, traceability, water, energy, health, legal, environmental, and feed-related disclosures |
| `asc-feed-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/04/ASC-STD-002-ASC-Feed-Standard-V1.1-May-2025.pdf> | aquafeed supplier, ingredient, traceability, and feed disclosure context |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stock acceptance, survival, grow-out, discharge, pack-out, packaging, delivery, and reference-flow normalization. | QA guardrails, survival, feed conversion, yield, pack-out reconciliation, packaging conversion, delivery-service calculation, and normalization rules |
