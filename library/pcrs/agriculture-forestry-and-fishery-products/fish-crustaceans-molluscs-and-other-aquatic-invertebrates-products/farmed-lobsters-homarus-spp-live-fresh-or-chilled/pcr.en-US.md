---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-lobsters-homarus-spp-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed lobsters (Homarus spp.), live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed lobsters of the genus Homarus in CPC 3.0 `04332`, placed on the market as live, fresh, or chilled product. It covers declared aquaculture routes for Homarus americanus, Homarus gammarus, or another explicitly identified Homarus species, including broodstock or egg supply, hatchery larval rearing, postlarval or juvenile nursery, grow-out or sea-based container culture where controlled by the reporting operator, harvest, grading, live holding, chilling, packaging, and release at the declared gate.

Covered systems may include onshore hatcheries, nurseries, tanks, recirculating aquaculture systems, individual compartments, sea-based containers, cages, ranching or enhancement systems when the operator controls the grow-out period and harvest lot, and other declared Homarus aquaculture systems. Excluded products are wild-caught Homarus lobsters, wild catch only stored or graded after capture, farmed rock lobster and other sea crawfish, farmed Norway lobsters, frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved lobster products, seed or juveniles sold as separate aquaculture inputs, and shells or processing residues modelled as separate products.

Because commercial Homarus farming is often pilot-scale, enhancement-oriented, or regionally specific, a conforming dataset must show foreground-controlled aquaculture, hatchery, nursery, grow-out, sea-based container, or ranching records. Wild capture followed only by live holding, chilling, grading, or dispatch is outside this PCR and belongs under the corresponding wild Homarus category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-lobsters-homarus-spp-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04332`, `Farmed lobsters (Homarus spp.), live, fresh or chilled` |
| covered_products | farmed Homarus spp. lobsters sold live, fresh, or chilled from declared aquaculture, hatchery, nursery, grow-out, sea-based container culture, ranching, or enhancement production systems |
| excluded_products | wild-caught Homarus lobsters; wild catch only held, chilled, graded, or dispatched after capture; farmed or wild rock lobster and other sea crawfish; farmed or wild Norway lobsters; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved products; eggs, larvae, postlarvae, or juveniles sold as seed; shells, molts, and residues as separate products |
| representative_product | live or chilled farmed Homarus lobster at declared market size and declared product form |
| production_route | broodstock or egg supply, hatchery and larval rearing, postlarval or juvenile nursery, grow-out or sea-based container culture, harvest, grading, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled Homarus lobster with declared species, broodstock or seed source, culture system, size grade, whole or declared product basis, holding or chilling condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed Homarus spp. lobsters as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared Homarus species, farmed proof, culture system, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, grow-out batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Farmed lobsters (Homarus spp.), live, fresh or chilled `9dca0441-44a0-496b-8f6d-f2aeb7db063f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Homarus species; broodstock, berried female, egg, larval, postlarval, juvenile, or grow-out stock source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, tailed if exceptionally declared, or declared product basis; size grade, carapace length, individual mass, or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime or natural-feed claim; water temperature, salinity, and exchange; health, biosecurity, permit, or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, crate, tote, live-tank, compartment, size-grade, carapace-length, or individual-weight records may be used only when net mass, count per kg or mean individual mass, product form, sampling method, and tare method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed Homarus lobster in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show controlled aquaculture, hatchery, nursery, grow-out, sea-based container, ranching, or enhancement activity, not only wild capture followed by live holding, chilling, grading, or dispatch. |
| `product_form_mass_basis` | whole, live, fresh, chilled, tailed, drained, or packed records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, drained mass, tail mass if exceptionally declared, or another contract-declared basis. Convert between bases only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, carapace length or size grade, sampling method, and product form before normalization to kg reference product. |
| `life_stage_identity` | broodstock, berried females, eggs, larvae, postlarvae, juveniles, and transferred stock | Mass or count | kg, item, egg count, larval count, or juvenile count | Life-stage records must retain species, life stage, supplier or hatchery, batch, count, mass where measurable, development stage, health status, and transfer date. |
| `feed_mass_basis` | live feed, Artemia, mussel or fish feed, formulated feed, bait, and natural-feed claims | Mass, count, or service basis | kg, g, item, cyst count, or compartment-month | Feed records must state wet, dry, as-fed, live-feed, formulated-feed, or natural-feed basis. Natural-feed grow-out systems must document the absence of added feed and the grow-out service basis. |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and wastewater | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve controlled water volume, temperature, salinity, water-exchange, recirculation, make-up water, and discharge basis. Temperature control must be declared when energy use depends on chilling or heating. |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, chilling, heating, filtration, lighting, live holding, vessel work, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, water-treatment chemicals, oxygen, anesthetic, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | Record product quantity, active ingredient where applicable, treatment purpose, diagnosis or health plan link, legal status, and harvest eligibility consequence. |
| `packaging_and_ice_basis` | crates, boxes, bags, liners, bands, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | Packaging, ice, live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | required for all datasets |
| Culture system | hatchery, nursery, RAS, tank, compartment, sea-based container, cage, ranching unit, enhancement area, or declared variant | required for boundary, water, feed, mortality, and discharge interpretation |
| Biological starting condition | broodstock, berried female, eggs, larvae, postlarvae, juveniles, hatchery source, supplier source, or grow-out transfer | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, tail-only if exceptionally declared, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, carapace length, sex, maturity class, or market grade | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed Homarus lobster production to the declared farm, hatchery, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, berried female, egg, larval, postlarval, juvenile, or grow-out stock sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased stock disclosure when supplied by another hatchery, fisher, collector, or farm.
2. Hatchery, larval, nursery, grow-out, sea-based container, or ranching husbandry, including stocking, feed or natural-feed management, water intake and exchange, aeration, oxygenation, filtration, temperature control, salinity control, shelters or compartments, health management, biosecurity, mortalities, and directly controlled maintenance.
3. Harvest, grading, washing, banding, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased feed, live feed, broodstock, eggs, larvae, postlarvae, juveniles, containers, shelters, packaging, ice, oxygen, electricity, fuel, and chemicals require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_berried_female_egg_larval_postlarval_juvenile_or_growout_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04332`, `Farmed lobsters (Homarus spp.), live, fresh or chilled` |
| recursive_input_rule | farmed Homarus broodstock, berried females, eggs, larvae, postlarvae, juveniles, or grow-out stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, life-stage, source, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | broodstock, hatchery, egg, larval, postlarval, juvenile, grow-out stock, or supplier dataset, or documented source, species, batch, count or mass, life stage, health or biosecurity status, movement permission, and certification or permit evidence |
| disclosure | disclose species, culture system, biological starting condition, farmed production evidence, stocking density or compartment count, feed regime or natural-feed claim, water source, temperature, salinity and water exchange, aeration or oxygenation, health treatments, mortality and molt records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | Broodstock, Hatchery, Nursery, and Stocking | required | biological starting condition must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | viable larvae, postlarvae, juveniles, or stocked Homarus entering grow-out |
| growout_and_husbandry | Grow-out and Husbandry | required | include tank, RAS, compartment, cage, sea-based container, ranching, or declared grow-out system | foreground production | harvest-size Homarus lobsters before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled Homarus lobster |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |

### Process: Broodstock, Hatchery, Nursery, and Stocking (`broodstock_hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### Broodstock, berried females, eggs, larvae, postlarvae, or juveniles (`biological_stock_input`)

This row records purchased or internally produced biological stock entering the declared farmed Homarus route.

- Selected flow: Homarus broodstock, berried females, eggs, larvae, postlarvae, juveniles, or grow-out stock selected from foreground records
- Flow property / unit: Mass or count with life stage / kg, item, egg count, larval count, or juvenile count
- Amount rule: measured count, mass where measurable, life stage, and accepted quantity entering hatchery, nursery, grow-out, ranching, or sea-based container culture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biological_stocking_records`
- Sources: `noaa-homarid-hatcheries-1999`, `dtu-european-lobster-larvae-2023`, `asc-farm-standard-2025`
- Range: Provisional biological stock screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 10
  - Unit: kg biological stock live mass/kg marketable product
  - Basis: broad first-pass broodstock, juvenile, or postlarval live mass input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery live feed, Artemia, mussel, fish, and starter feed (`hatchery_live_feed_and_starter_feed`)

This row covers live feed, Artemia, mussel or fish diets, formulated starter diets, broodstock diets, and comparable hatchery or nursery feeds.

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other hatchery or nursery feed selected from site records
- Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item
- Amount rule: measured feed or live-feed quantity by batch, life stage, and basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `dtu-european-lobster-larvae-2023`, `noaa-homarid-hatcheries-1999`, `asc-farm-standard-2025`
- Range: Provisional hatchery feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg or feed-unit/1,000 kg marketable product
  - Basis: broad first-pass hatchery and nursery feed input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery water (`hatchery_nursery_water`)

This row covers controlled seawater, freshwater, brackish water, process water, make-up water, and recirculation replacement water used in on-site hatchery and nursery operations.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume with temperature and salinity basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_temperature_salinity_and_discharge_records`
- Sources: `dtu-european-lobster-larvae-2023`, `asc-farm-standard-2025`
- Range: Provisional hatchery and nursery water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/1,000 kg marketable product
  - Basis: broad first-pass controlled hatchery and nursery water relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery electricity (`hatchery_nursery_electricity`)

This row covers electricity for pumps, aeration, oxygenation, filtration, lighting, chilling or heating, UV or other water treatment, live-feed culture, and individual-compartment systems.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or allocated electricity records for hatchery and nursery operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `dtu-european-lobster-larvae-2023`, `asc-farm-standard-2025`
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

This row records broodstock mortalities, larvae, postlarvae, rejected juveniles, molts, shells, feed residue, sludge, biofilter solids, and rejected stock from on-site hatchery or nursery operations.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; Homarus mortality, shell, molt, and other organic aquaculture residue remain site-specific waste-flow selections
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
  - Unit: kg residue/kg accepted juveniles or postlarvae
  - Basis: broad first-pass residue or mortality mass relative to accepted juveniles or postlarvae
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary input is specified for hatchery and nursery. Add site-specific seawater withdrawal, waterborne emissions, direct refrigerant loss, or land or marine area occupation flows when the Tiangong identity and site scope are selected.

#### Outputs

##### Product flows

###### Accepted larvae, postlarvae, or juveniles for grow-out (`accepted_larvae_postlarvae_or_juveniles_for_growout`)

This output carries viable Homarus larvae, postlarvae, juveniles, or stocked lobsters into grow-out, ranching, or sea-based container culture.

- Selected flow: Homarus larvae, postlarvae, juveniles, or stocked lobsters selected from foreground records
- Flow property / unit: Mass or count with mean size / kg, item, larval count, postlarval count, or juvenile count
- Amount rule: calculated accepted stock after receipt, hatchery, nursery, grading, acclimation, and transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted stock entering grow-out or ranching
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
  - Sources: `dtu-european-lobster-larvae-2023`, `noaa-field-growout-lobster-2013`

### Process: Grow-out and Husbandry (`growout_and_husbandry`)

#### Inputs

##### Product flows

###### Grow-out feed, bait, natural feed support, and supplements (`growout_feed_bait_natural_feed_and_supplements`)

This row records added feed, bait, mussel or fish diets, formulated feed, supplements, and natural-feed documentation for grow-out or container systems.

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other Homarus grow-out feed selected from site records
- Flow property / unit: Mass or service basis / kg, g, item, or compartment-month
- Amount rule: measured feed or bait quantity by batch, or documented zero-added-feed claim with compartment, stocking, and exposure records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `vliz-sea-based-container-culture-2022`, `noaa-field-growout-lobster-2013`, `asc-farm-standard-2025`
- Range: Provisional grow-out feed screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg feed/1,000 kg marketable product
  - Basis: broad first-pass added-feed input; zero applies only when natural-feed systems retain evidence
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out water, exchange, and life-support service (`growout_water_exchange_and_life_support`)

This row records make-up water, exchanged water, recirculated water, seawater pumping, oxygenation, shelter or compartment life-support services, and water-quality management.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured water intake, exchange, recirculation replacement, or life-support volume with temperature, salinity, and culture unit retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_temperature_salinity_and_discharge_records`
- Sources: `vliz-sea-based-container-culture-2022`, `asc-farm-standard-2025`, `noaa-american-lobster-species`
- Range: Provisional grow-out water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: m3/1,000 kg marketable product
  - Basis: broad first-pass grow-out water intake or exchange relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out electricity and fuel (`growout_electricity_and_fuel`)

This row covers electricity and fuel for pumps, aeration, oxygenation, filtration, chilling or heating, lighting, monitoring, vessels, maintenance, and site visits.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg
- Amount rule: metered electricity, fuel purchase, vessel log, or allocated energy records for grow-out and husbandry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`, `vliz-sea-based-container-culture-2022`
- Range: Provisional grow-out energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50000
  - Unit: kWh or MJ-equivalent/1,000 kg marketable product
  - Basis: broad first-pass grow-out energy and fuel use relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Health, biosecurity, and water-treatment inputs (`health_biosecurity_and_water_treatment_inputs`)

This row covers disinfectants, therapeutants, probiotics, oxygen, salt, anesthetic, water-quality improvers, and other health or biosecurity inputs.

- Selected flow: Site-specific health, biosecurity, oxygen, salt, anesthetic, or water-treatment input selected from foreground records
- Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3
- Amount rule: measured product quantity, active ingredient where applicable, treatment reason, legal status, and harvest eligibility consequence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment event and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_biosecurity_and_health_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional treatment input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg or L product/1,000 kg marketable product
  - Basis: broad first-pass health and water-treatment product input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grow-out mortalities, molts, shells, sludge, and residues (`growout_mortalities_molts_shells_sludge_and_residues`)

This row records mortalities, culled animals, molts, shells, uneaten feed, biofouling removed from containers, sludge, and other organic residues.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; Homarus mortality, molt, shell, and organic aquaculture residue remain site-specific waste-flow selections
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured mortality count, residue mass, removed biofouling, sludge, culls, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Sources: `asc-farm-standard-2025`, `vliz-sea-based-container-culture-2022`
- Range: Provisional grow-out residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg residue/kg marketable product
  - Basis: broad first-pass mortality, molt, sludge, and residue mass relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct waterborne emissions and escapes (`direct_waterborne_emissions_and_escapes`)

This row records direct nutrient releases, suspended solids, treatment residues, and known escapes when they leave the foreground system to the environment.

- Selected flow: Site-specific waterborne emission or escape flow selected from foreground records
- Flow property / unit: Mass, count, or concentration-load / kg, g, item, or kg nutrient
- Amount rule: measured or calculated load from water-quality records, effluent volume, treatment records, known escape counts, and mass-balance checks
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_temperature_salinity_and_discharge_records`
- Sources: `asc-farm-standard-2025`, `vliz-sea-based-container-culture-2022`
- Range: Provisional direct release screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg released material/1,000 kg marketable product
  - Basis: broad first-pass direct waterborne release, solids, nutrient, or residue load
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-size Homarus lobsters (`harvest_size_homarus_lobsters`)

This output carries harvest-size Homarus lobsters from grow-out to harvest, live holding, chilling, or pack-out.

- Selected flow: Farmed lobsters (Homarus spp.), live, fresh or chilled `9dca0441-44a0-496b-8f6d-f2aeb7db063f`
- Flow property / unit: Mass / kg
- Amount rule: measured harvest-size live mass before final handling, with count, size grade, and product basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: grow-out output entering harvest and final handling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records`
- Range: Harvest mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg stocked biomass plus biomass gain
  - Basis: harvestable biomass fraction after mortality, culling, and grading
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `noaa-field-growout-lobster-2013`, `asc-farm-standard-2025`

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Holding water, ice, oxygen, and packaging (`holding_water_ice_oxygen_and_packaging`)

This row records live-holding water, chilling ice, oxygen, bands, crates, boxes, liners, insulated containers, labels, and pallets.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; ice, oxygen, bands, and live-pack materials selected from site records
- Flow property / unit: Mass, volume, gas volume, or item count / kg, m3, L, m3 gas, or item
- Amount rule: measured material, water, ice, oxygen, and packaging quantities with reuse, tare, and product basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_live_holding_and_chilling_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional pack-out material screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg material or water/1,000 kg marketable product
  - Basis: broad first-pass holding water, ice, oxygen, and packaging input
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Live holding, chilling, and pack-out energy (`live_holding_chilling_and_packout_energy`)

This row covers electricity and fuel for live tanks, pumps, aeration, oxygenation, refrigeration, ice making, grading, packing, and cold storage.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg
- Amount rule: metered electricity, fuel purchase, or allocated energy records for live holding, chilling, and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional live holding and pack-out energy screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh or MJ-equivalent/1,000 kg marketable product
  - Basis: broad first-pass live holding, chilling, and pack-out energy use
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pack-out rejects, mortalities, wastewater, and used packaging (`packout_rejects_mortalities_wastewater_and_used_packaging`)

This row records dead-on-arrival animals, culls, rejected product, wastewater, spent ice melt, used bands, damaged boxes, and non-reused packaging.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; packaging materials, wastewater, lobster rejects, and organic residue selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: measured reject mass or count, wastewater volume, used packaging mass, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Range: Provisional pack-out waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg waste/kg marketable product
  - Basis: broad first-pass reject, wastewater solids, and used packaging mass
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary flow is specified for final handling. Add refrigerant losses, wastewater emissions, or direct air emissions when measured or required by study scope.

#### Outputs

##### Product flows

###### Marketable farmed Homarus lobster reference product (`marketable_farmed_homarus_lobster_reference_product`)

This output is the PCR reference product released at the declared gate.

- Selected flow: Farmed lobsters (Homarus spp.), live, fresh or chilled `9dca0441-44a0-496b-8f6d-f2aeb7db063f`
- Flow property / unit: Mass / kg
- Amount rule: measured net marketable live, fresh, or chilled product mass after grading and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records`
- Range: Reference flow identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `asc-farm-standard-2025`

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Delivery fuel, electricity, refrigerant service, and live transport supplies (`delivery_fuel_energy_and_live_transport_supplies`)

This row records delivery fuel, electricity, refrigerant service, ice, oxygen, water, packaging supplements, or other live transport supplies when the declared gate is beyond farm or packhouse release.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; electricity, ice, oxygen, water, refrigerant, or transport service selected from route records
- Flow property / unit: Fuel, energy, mass, volume, or transport service / L, kg, kWh, MJ, m3, or tonne-km
- Amount rule: route-specific measured fuel, energy, transport service, or supply use with distance, load factor, live transport condition, and allocation basis retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered 1,000 kg reference product or tonne-km where transport is modelled as service
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Provisional delivery screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: tonne-km/1,000 kg delivered product
  - Basis: broad first-pass delivery transport service
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Delivery mortalities, rejected product, and transport residue (`delivery_mortalities_rejected_product_and_transport_residue`)

This row records live-transport mortalities, rejected product, spilled ice or water residues, and damaged packaging when delivery is in scope.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; lobster mortality, rejected product, and transport residue selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: measured delivery loss, mortality count, reject mass, residue amount, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered 1,000 kg reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Provisional delivery loss screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg loss/kg delivered product
  - Basis: broad first-pass route loss relative to delivered product
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary flow is specified for delivery. Add direct vehicle emissions only when the selected modelling approach records elementary emissions in the foreground rather than through an upstream fuel or transport process.

#### Outputs

##### Product flows

###### Delivered farmed Homarus lobster (`delivered_farmed_homarus_lobster`)

This output records delivered reference product only when the declared gate is a customer, market, airport, live seafood hub, or other off-site gate.

- Selected flow: Farmed lobsters (Homarus spp.), live, fresh or chilled `9dca0441-44a0-496b-8f6d-f2aeb7db063f`
- Flow property / unit: Mass / kg
- Amount rule: delivered net marketable mass at declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered product quantity
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Delivery mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg packed product loaded for delivery
  - Basis: delivered product fraction after route losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `asc-farm-standard-2025`

## 7. Allocation and Co-product Handling

Avoid allocation where feasible by collecting separate batch, pond, tank, container, compartment, holding, and pack-out records. When the same foreground system produces multiple saleable species, size grades, seed, juveniles, market lobsters, shells, molts, or other products, apply the hierarchy below:

1. Use physical subdivision when records identify separate culture units, batches, species, size grades, or handling lots.
2. Use causal physical allocation when resource use is driven by measured biomass, count, compartment occupancy, feed intake, water volume, holding duration, tonne-kilometres, or live-tank service.
3. Use economic allocation only when physical subdivision and causal physical allocation are not possible; disclose prices, period, market, and sensitivity.
4. Treat mortalities, culls, molts, wastewater, sludge, and used packaging as waste unless they leave the system as saleable co-products with documented market value and handling.

Wild Homarus lobsters, farmed rock lobster and other sea crawfish, farmed Norway lobsters, and processed lobster products must be separated into their own PCR categories or modelled as co-products with explicit classification disclosure.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `broodstock_hatchery_nursery_and_stocking` | biological starting stock, accepted stock, stocking, transfers | hatchery logs, supplier invoices, movement permits, batch records | species, life stage, source, batch id, count, mass where available, mean size, health status, movement date, accepted count, rejected count | collect from hatchery, nursery, supplier, stocking, and transfer records | kg, item, egg count, larval count, juvenile count | each batch or transfer | full production batch or reporting period | all biological stock entering the declared production route | sum accepted stock and losses by species, life stage, and batch before normalization to reference product | supplier document, hatchery log, health certificate, movement permit, count or weighing record |
| `cp_feed_records` | `broodstock_hatchery_nursery_and_stocking`; `growout_and_husbandry` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, compartment records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed | collect from invoices, hatchery recipes, feed logs, and grow-out records | kg, g, L, item, cyst count, compartment-month | each feeding event or batch summary | full production batch or reporting period | all feed and natural-feed evidence for included production units | aggregate by feed type and basis, convert only with measured moisture or supplier data | invoice, recipe, feed log, natural-feed system record, mass or count measurement |
| `cp_water_temperature_salinity_and_discharge_records` | all foreground processes | water, temperature, salinity, discharge, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, effluent volume, nutrient or solids concentration, escape count | collect from meters, monitoring logs, laboratory tests, and incident records | m3, kg, deg C, ppt, mg/L, kg load, item | at least per batch and when discharge or escape events occur | full production batch or reporting period | all controlled water systems and direct releases | normalize intake, discharge, and calculated loads to reference product; retain salinity and temperature basis | meter records, monitoring sheets, lab reports, incident reports |
| `cp_energy_and_fuel_records` | all foreground processes | electricity, fuel, temperature control, vessel work, equipment | meter readings, invoices, vessel logs, fuel receipts, allocation records | energy carrier, quantity, meter id, equipment or process, date, allocation key, vessel trip, refrigeration or oxygenation link | collect from meters, invoices, fuel logs, and allocation worksheets | kWh, MJ, L, kg | monthly, per batch, or per trip | full production batch or reporting period | all energy and fuel used by included processes | allocate by direct meter first, then equipment hours, biomass, compartment service, or batch duration | meter record, invoice, fuel receipt, vessel or equipment log |
| `cp_treatment_biosecurity_and_health_records` | `growout_and_husbandry` | health, disinfectant, treatment, biosecurity | treatment logs, veterinary records, chemical invoices, health plans | product name, active ingredient, dose, quantity, target unit, diagnosis or reason, legal status, date, withdrawal or harvest eligibility | collect from treatment records, prescriptions, health plans, and invoices | kg, L, g active ingredient, m3 gas | each treatment event | full production batch or reporting period | all included culture units and holding systems | aggregate by product and active ingredient, retain event purpose and legal status | treatment log, health plan, veterinary record, invoice |
| `cp_mortality_molt_residue_and_sludge_records` | all foreground processes | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date | collect from mortality, cleaning, grading, and waste records | kg, item, m3 | each event or batch summary | full production batch or reporting period | all included production and handling units | sum by residue type and route; calculate loss fraction against accepted or marketable mass | mortality log, waste note, weighing record, disposal certificate |
| `cp_harvest_and_product_mass_records` | `growout_and_husbandry`; `harvest_live_holding_chilling_and_packout` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate | collect from harvest weighing, grading, packing, and sales records | kg, item, count per kg | each harvest or packing lot | full production batch or reporting period | all product lots included in the reference flow | reconcile harvested, packed, rejected, and delivered mass before normalization | scale ticket, packing record, sales note, batch reconciliation |
| `cp_packaging_live_holding_and_chilling_records` | `harvest_live_holding_chilling_and_packout` | packaging, holding water, ice, oxygen, live transport preparation | packaging inventory, live tank logs, ice logs, oxygen logs | material type, item count, mass, reuse rate, water volume, oxygen quantity, ice mass, holding duration | collect from inventory, tank logs, and pack-out records | kg, item, m3, L, m3 gas, hour | each pack-out lot | full production batch or reporting period | all final handling and pack-out activities | allocate by product lot mass, holding duration, or direct issue record | inventory issue, live tank log, weighing record, oxygen invoice |
| `cp_delivery_and_route_records` | `delivery_to_declared_gate` | delivery transport and route losses | delivery log, vehicle record, fuel receipt, customer receipt | origin, destination, distance, product mass, vehicle or service, fuel, electricity, ice, oxygen, delivery condition, loss count or mass | collect from delivery, vehicle, freight, and receipt records | km, tonne-km, L, kg, kWh, item | each delivery route | deliveries within reporting period | all delivery routes included in the declared gate | calculate tonne-km or direct route inventory and normalize to delivered mass | route log, fuel receipt, freight invoice, delivery receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_product_mass` | reference product | net marketable product mass = packed or delivered acceptable mass minus rejects and mortalities within the declared product boundary | `cp_harvest_and_product_mass_records`; `cp_packaging_live_holding_and_chilling_records`; `cp_delivery_and_route_records` when delivery is included | kg reference product |  |
| `calc_count_to_mass` | count-based records | mass = count x measured mean individual mass, or count / measured count per kg; retain sampling method and grade | `cp_biological_stocking_records`; `cp_harvest_and_product_mass_records` | kg equivalent mass |  |
| `calc_stock_acceptance_and_survival` | biological stock and grow-out | accepted or surviving fraction = accepted or surviving count or biomass divided by input count or biomass for the same life stage and batch | `cp_biological_stocking_records`; `cp_mortality_molt_residue_and_sludge_records`; `cp_harvest_and_product_mass_records` | accepted stock, survival, loss, and residue indicators | `noaa-field-growout-lobster-2013`; `dtu-european-lobster-larvae-2023` |
| `calc_waterborne_load` | discharge and direct releases | load = discharge volume x measured concentration, adjusted for units and background where documented | `cp_water_temperature_salinity_and_discharge_records` | kg nutrient, solids, treatment residue, or other load | `asc-farm-standard-2025` |
| `calc_energy_allocation` | shared energy systems | allocate direct meters first; otherwise allocate by equipment hours, batch duration, water volume, compartment occupancy, or product mass with the selected key disclosed | `cp_energy_and_fuel_records`; `cp_harvest_and_product_mass_records` | kWh, MJ, or fuel per reference flow | `asc-farm-standard-2025` |
| `calc_delivery_transport_service` | delivery | tonne-km = delivered product mass in tonnes x route distance in km; route-specific fuel may replace tonne-km where direct records are available | `cp_delivery_and_route_records` | tonne-km or direct delivery inventory per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_category_identity` | all datasets | Dataset must identify Homarus species and show that the reference product belongs to CPC `04332`, not wild Homarus, rock lobster, Norway lobster, or processed lobster categories. | species records, classification mapping, product description, sales record |
| `dq_farmed_proof` | all datasets | Dataset must prove controlled aquaculture production through hatchery, nursery, grow-out, sea-based container, ranching, or enhancement records. | stocking log, hatchery record, grow-out record, permit, production plan |
| `dq_mass_balance` | biological stock, harvest, reference product | Biological input, mortality, cull, residue, harvest, packed, and delivered product records must reconcile at batch or reporting-period level. | batch reconciliation, scale tickets, mortality logs, packing records |
| `dq_water_and_energy_completeness` | water, discharge, energy, fuel | Water, temperature, salinity, discharge, electricity, fuel, oxygenation, and temperature-control records must cover all foreground processes in scope. | meter logs, invoices, monitoring records, allocation worksheet |
| `dq_treatment_and_biosecurity_traceability` | health and treatment inputs | Treatments, disinfectants, anesthetics, oxygen, salt, and water-quality inputs must retain purpose, active ingredient where applicable, legal status, and harvest eligibility consequence. | treatment log, health plan, veterinary record |
| `dq_live_product_handling` | final product and delivery | Live holding, chilling, packaging, delivery duration, and mortality or rejection must be traceable to the final product lot. | live tank log, pack-out record, delivery receipt |
| `dq_unresolved_uuid_disclosure` | any row with site-specific flow selection | Any blank or generic flow identity must be disclosed before reviewed publication and replaced with selected Tiangong UUIDs where available. | manifest review metadata, UUID review record |

## 9. Validation Rules

| validation_id | Severity | Rule |
| --- | --- | --- |
| `val_reference_flow_uuid` | error | The reference product flow must use `9dca0441-44a0-496b-8f6d-f2aeb7db063f` unless an approved Tiangong replacement is recorded with the same CPC `04332` meaning. |
| `val_reference_unit` | error | The reference amount must be expressed as kg with Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`. |
| `val_farmed_not_wild` | error | A dataset based only on wild capture, wild landing, or post-capture live holding without controlled aquaculture production is non-conforming. |
| `val_adjacent_lobster_categories` | error | Rock lobster and other sea crawfish, Norway lobster, and processed lobster products must not be reported under this PCR as the main reference product. |
| `val_required_qualifiers` | error | Species, culture system, biological starting condition, product state, size grade or count basis, declared gate, and farmed proof must be present. |
| `val_collection_protocol_coverage` | error | Each foreground inventory row with `foreground_record` or `calculated_value` must link to a collection protocol or calculation rule. |
| `val_mass_balance` | warning | Biological stock, mortality, residue, harvest, packed, rejected, and delivered mass should reconcile; unexplained imbalance must be disclosed. |
| `val_range_review` | warning | Reasoned-estimate ranges are candidate QA screens and must be replaced or justified before reviewed or published use. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for farmed Homarus lobster |
| downstream_use | secondary_dataset; background_dataset when reviewed and geographically representative |
| allowed_use | LCA modelling of live, fresh, or chilled farmed Homarus lobster at the declared gate with disclosed production route, product state, and quality qualifiers |
| excluded_use | wild Homarus lobster; rock lobster and other sea crawfish; Norway lobster; frozen, dried, salted, brined, cooked, canned, meat-only, prepared, or preserved lobster; seed-only production; shell, molt, or residue co-products without separate modelling |
| required_metadata | canonical PCR id; CPC code; species; culture system; biological starting condition; farmed production evidence; product form; size grade; mass basis; water temperature and salinity basis; feed regime or natural-feed claim; health and treatment disclosure; packaging state; declared gate; geography; reporting period; allocation method; unresolved UUID substitutions |
| required_quality_disclosure | source and completeness of biological stock, feed, water, energy, health treatment, mortality, residue, product mass, packaging, delivery, and allocation records; reasoned-estimate range use; missing Tiangong UUIDs; deviations from the default boundary |
| update_trigger | update when Tiangong flow identities change, CPC mapping changes, reviewed Homarus aquaculture evidence becomes available, source-backed ranges replace candidate estimates, or production route changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `noaa-homarid-hatcheries-1999` | literature | Nicosia, F. and Lavalli, K. 1999. Homarid Lobster Hatcheries: Their History and Role in Research, Management, and Aquaculture. Marine Fisheries Review 61(2). https://spo.nmfs.noaa.gov/sites/default/files/pdf-content/mfr6121_0.pdf | Homarus hatchery scope, life-stage identity, and culture route evidence |
| `dtu-european-lobster-larvae-2023` | literature | DTU Aqua Report No. 426-2023. Rearing and production of European lobster (Homarus gammarus) larvae and postlarvae. https://www.aqua.dtu.dk/-/media/institutter/aqua/publikationer/rapporter-401-450/426-2023-rearing-and-production-of-european-lobster-larvae-and-postlarvae.pdf | larval and postlarval rearing, live feed, temperature, survival, and hatchery collection rules |
| `noaa-field-growout-lobster-2013` | dataset | NOAA InPort. Field Grow-out of Juvenile American Lobsters in Long Island Sound. https://www.fisheries.noaa.gov/inport/item/26591 | juvenile grow-out, survival, size monitoring, and natural-feed system evidence |
| `vliz-sea-based-container-culture-2022` | literature | Hinchcliffe, C. et al. 2022. Low-impact rearing of a commercially valuable shellfish: sea-based container culture of European lobster Homarus gammarus in the United Kingdom. https://www.vliz.be/imisdocs/publications/392746.pdf | sea-based container culture boundary, natural-feed claim, benthic and water-quality considerations |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council. ASC Farm Standard, ASC-STD-001, Version 1.0.1, 2025. https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | aquaculture data quality, environmental stewardship, water quality, energy, feed, health, welfare, escapes, biosolids, and certification-related collection rules |
| `noaa-american-lobster-species` | official_guidance | NOAA Fisheries. American Lobster species profile. https://www.fisheries.noaa.gov/species/american-lobster | Homarus habitat and product identity context for culture-system disclosure |
