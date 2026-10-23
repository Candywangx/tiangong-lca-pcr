---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-seaweeds-and-other-algae-fresh-frozen-or-dried-whether-or-not-ground-fit-for-hum-15cbb138
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Farmed fresh whole sugar kelp: spore nursery to first food-quality release

This is an attributional crop-production method for one physically defined food supply route. Site data remain to be collected; evidence supports the technical synthesis, not a measured farm inventory or approval. All below conditions and native-identity restrictions travel with the rules.

## 1. Scope and Applicability

Use only for Saccharina latissima cultivated on marine horizontal longlines from direct spore-seeded nursery twine through first food-quality release as fresh raw whole blades. The representative configuration combines the 2014 nursery method with the 2020 Connecticut raw-food harvest/cooling route; it is not claimed to be one SKU or farm. Purchased PES, filtered/UV-treated seawater, electric nursery cooling/light/aeration, workboat harvest and unsealed cold packaging are declared process choices. Actual equipment, cleaning and additions must be disclosed and each real additional exchange inserted. Avoid unsupported universal yields, moisture, chemical dose, energy or lifetime ranges. Fresh/frozen/dried/ground in CPC 04932 are distinct possible states; only the fresh whole route is covered here. No nutritional equivalence, safe shelf life or food certification is established. [ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-seaweeds-and-other-algae-fresh-frozen-or-dried-whether-or-not-ground-fit-for-hum-15cbb138 |
| classification_refs | CPC 3.0 04932; narrower product-state scope; mapping context only |
| covered_products | Farmed fresh raw whole Saccharina latissima for human food |
| excluded_products | Other taxa; wild food harvest; non-food biomass; extracts; frozen/dried/ground/blanched or reduced-oxygen routes |
| representative_product | Fresh sugar kelp blades from spore-seeded longline cultivation |
| production_route | Sorus collection; nursery inoculation and juvenile culture; longline deployment; maintenance; harvest; cooling and first food release |
| market_state | Fresh raw whole blades in unsealed cold packaging; no shelf-life claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide declared edible farmed fresh sugar kelp biomass |
| How much | 1 kg first-released net wet tissue |
| How well | Species and provenance confirmed; documented food-suitability release; no water/ice/packaging inflation; independent dry matter and salt disclosure |
| How long or cycle | One declared cultivation cohort through first release; no universal storage duration or shelf-life equivalence |
| reference_flow_link | released_kelp |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Algae `eb76bd93-d5a5-4db2-bd08-388665f2eda5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species Saccharina latissima; farmed origin and seed provenance; culture site and season; spore-seeded longline route; raw fresh whole blades; first-release gate and timestamp; Q net wet tissue and drainage method; independently measured dry matter and moisture; salt disclosure and attached-water exclusion; food-suitability evidence and destination requirements; harvest-water status; microbial and chemical test methods and detection limits; iodine and contaminant assessment; harvest-to-cooling time and temperature; unsealed packaging and allergen communication; cohort stock and inherited burden vectors; capital service attribution; actual postrelease service scope; uncertainty and identity restrictions; contrary native wild and unfit metadata with unknown owner intent; independent supply quality and no automatic wild/nonfood upstream dataset or provider |

Required qualifiers must be retained in dataset metadata, process notes, reference-flow comments or equivalent fields. Generic Algae is not a food-specific match: it has generic aquatic biomass text, no CAS, no fixed grade/route/form/geography or moisture property, and one Mass reference. Its CPC label says wild/unfit, which is unresolved contrary classification metadata relative to this declared farmed/food use; native owner intent is unknown; the generic physical identity is used with the explicit restrictions on every adopted biomass card. Never infer farmed or edible status from the UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| wet_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference is 1 kg newly first-released net wet S. latissima tissue. Weigh on calibrated scales after a declared repeatable drainage protocol; separately measure and exclude free/attached seawater, ice, twine, containers and fouling. Measure dry matter or moisture independently on representative tissue at a documented drying method; report residual salt separately. Never equate 1 kg dried algae with 1 kg fresh algae or assert nutritional/edible equivalence. |
| raw_units | all inventory rows | Mass or energy | kg or MJ | Retain raw readings with units, rates versus totals, temperature and uncertainty. Convert kWh by 3.6 MJ/kWh. Convert only actual rates by integrating over time; do not multiply an already integrated liquid/gas volume by duration. Use independently measured material-specific density and gas temperature/pressure/composition. Do not use secondary-property ratios to invent density or per-item mass. |
| whole_formula | pes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole purchased PES is one mass input. Assay, active salts, dry matter and carrier water are nested analytical quantities only. No reliable cross-supplier concentrate potency or LCI dose range is provided; collect each exchange raw amount and actual supplier specification. |
| single_basis | all inventory rows | Mass or energy | kg or MJ | Every final exchange has per reference flow basis. Data collection retains raw period amounts only; its aggregation label states the final destination basis and does not execute normalization. The sole §8 normalization derives the final amount after raw conversion, exchange-specific attribution and WIP burden reconciliation. Reference output remains exactly 1 kg. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Authorized fresh S. latissima sorus acquisition plus actual installed asset and supplier input production |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | CPC 3.0 04932 context; only the narrower fresh whole food crop described here |
| recursive_input_rule | Seeded twine is an internal stage; bought seed retains its full nursery burden. No infinite recursive edible-kelp input or burden-free bought finished crop |
| upstream_dataset_requirement | Match actual material/formulation, supply state, geography and energy boundary; retain technology and temporal representativeness and unresolved gaps |
| disclosure | Site; cohort; seed provenance; asset configuration; actual chemicals; raw water; food release; stock vectors; downstream service scope; exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | cultivation_to_release | Include authorized sorus collection and nursery water treatment, enrichment, spore inoculation, lit/chilled/aerated nursery, seeded twine transport, installation, deployment, monitoring, thinning if actually needed, maintenance, retrieval, harvest, cooling, sampling, inspection, packaging and first food-quality release. Purchased seed does not erase its nursery chain: obtain complete supplier foreground/upstream inventory or explicitly retain the missing upstream burden. This route cannot begin at bought edible kelp. | ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020 |
| b_scope | fresh_food_route | Only cultivated S. latissima raw whole blades under documented food suitability are included. Wild-harvest food, S. japonica, Laminaria digitata, Gracilaria, microalgae, feed/fertilizer/bioremediation biomass, extracts and mixed taxa are excluded. Frozen, dried, ground, washed/blanched or reduced-oxygen packed products require separately evidenced state/process extensions; a CPC leaf is not proof of such coverage. | ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020 |
| b_assets | capital_and_auxiliaries | Collect every installed asset and its supplier production, installation, service life, replacement and end treatment under the same scope; no unsupported capital cutoff. Article mass is assigned by justified service use before normalization and is excluded from biological mass inputs. The listed asset configuration is a transparent technical collection design, not a claimed single documented factory bill. Add each actual cable, fitting, building component or other real input as its own specific exchange when outside an already purchased whole article. |  |
| b_gate | first_release_and_service | Q is the first food-quality release of new compliant net wet tissue for a defined cohort; delivery, storage transfer, reinspection or rework never creates second production. Same-cohort released closing FG is already part of Q. Keep manufacture, pending-release WIP and released FG/service physical gates separately; paired internal transfers cancel in consolidation. Packaging, storage, handling and dispatch services after release remain separate cohort service accounts, with historical FG burdens retained for the cohort served. Never add historical production to current Q. |  |
| b_atomic | all_exchanges | Every real purchased preparation crosses once at whole as-supplied mass; active ingredients, dry solids, carrier water and assay are constituent subledgers. Internally prepared formulations require separate actual purchased materials, water, energy and losses. Record every real emission species and actual receiving compartment or treatment. No other, utility, packaging or pollutant aggregate can hide unlisted exchanges; add conditional specific rows before calculating. No steam, boiler or external hot-water return is presumed by this electrical nursery/cold-chain configuration; if one actually exists record supply/return mass, temperature, enthalpy and supplier water/energy agreement as separate exchanges. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assets | Installed cultivation and nursery assets | required | Actual installation and replacement serving this crop | foreground_production | released_kelp |
| nursery | Sorus preparation and spore-seeded nursery | required | Direct spore inoculation with filtered UV-treated natural seawater and purchased PES | foreground_production | released_kelp |
| growout | Longline deployment maintenance and harvest | required | Single-species marine cultivation including losses and retrieval | foreground_production | released_kelp |
| release | Cooling inspection packaging and first food-quality release | required | Fresh whole raw blades in unsealed packaging | foreground_production | released_kelp |
| service | Postrelease storage handling and dispatch service | conditional | Only actual producer-controlled services for identified released cohorts | postrelease_service | released_kelp |

All cards below have final per-reference-flow basis. Their descriptions and cp_<row_id> protocols require distinct raw exchange records; no numeric range is implied by omission. For each non-reference card the one §8 normalize_once result is consumed; the amount expression is a final quantity description, not a second computation. References to context sources explain route/collection needs, never measured exchange amounts.

### Process: Installed cultivation and nursery assets (`assets`)

#### Inputs

##### Product flows

###### Polypropylene longline rope (`asset_longline`)

For the declared installation only. Collect rope length and measured linear mass; include replacements and lost sections. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_longline.

- Selected flow: Polypropylene longline rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_longline
- Sources: ctsg-kelp-nursery-2014

###### Steel mooring anchor (`asset_anchor`)

For the declared installation only. Collect weighed whole anchor and installation records. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_anchor.

- Selected flow: Steel mooring anchor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_anchor
- Sources: ctsg-kelp-nursery-2014

###### Steel mooring chain (`asset_chain`)

For the declared installation only. Collect weighed chain with actual configuration. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_chain.

- Selected flow: Steel mooring chain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_chain
- Sources: ctsg-kelp-nursery-2014

###### High density polyethylene buoy (`asset_buoy`)

For the declared installation only. Collect whole purchased buoy mass; attached fittings stay in the same article bill. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_buoy.

- Selected flow: High density polyethylene buoy
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_buoy
- Sources: ctsg-kelp-nursery-2014

###### Polyvinyl chloride seed spool (`asset_spool`)

For the declared installation only. Collect whole spool mass and reuse cycles. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_spool.

- Selected flow: Polyvinyl chloride seed spool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_spool
- Sources: ctsg-kelp-nursery-2014

###### Glass nursery tank (`asset_tank`)

For the declared installation only. Collect whole tank mass and service history. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_tank.

- Selected flow: Glass nursery tank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_tank
- Sources: ctsg-kelp-nursery-2014

###### Electric nursery water chiller (`asset_chiller`)

For the declared installation only. Collect whole assembled equipment mass including its initial refrigerant charge. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_chiller.

- Selected flow: Electric nursery water chiller
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_chiller
- Sources: ctsg-kelp-nursery-2014

###### Electric seawater pump (`asset_pump`)

For the declared installation only. Collect whole pump mass and measured use time. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_pump.

- Selected flow: Electric seawater pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_pump
- Sources: ctsg-kelp-nursery-2014

###### Electric aeration pump (`asset_airpump`)

For the declared installation only. Collect whole air pump mass; ambient through-air is not purchased compressed gas. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_airpump.

- Selected flow: Electric aeration pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_airpump
- Sources: ctsg-kelp-nursery-2014

###### Nursery electric light fixture (`asset_lamp`)

For the declared installation only. Collect whole fixture mass and lamp replacement history. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_lamp.

- Selected flow: Nursery electric light fixture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_lamp
- Sources: ctsg-kelp-nursery-2014

###### Fibreglass workboat with diesel engine (`asset_boat`)

For the declared installation only. Collect whole vessel mass including engine; do not also purchase its constituent engine as a second asset. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_boat.

- Selected flow: Fibreglass workboat with diesel engine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_boat
- Sources: ctsg-kelp-nursery-2014

###### Mechanical refrigerated storage chamber (`asset_coldroom`)

For the declared installation only. Collect whole assembled chamber acquisition and installed equipment boundary; initial charge included. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_coldroom.

- Selected flow: Mechanical refrigerated storage chamber
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_asset_coldroom
- Sources: ctsg-kelp-nursery-2014

### Process: Sorus preparation and spore-seeded nursery (`nursery`)

#### Inputs

##### Product flows

###### Algae (`sorus`)

Authorized fresh Saccharina latissima reproductive sorus only; weigh received net wet tissue and independently measure dry matter. Record source location and collection vessel burden. This generic identity has no species, food grade, moisture, origin or route guarantee; its wild/unfit CPC label conflicts with this use while its full physical description has no matching restriction. It is used solely as generic algal biomass, never as an accepted classification mapping or food approval. Do not substitute other taxa or dried Laminaria. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sorus.

- Selected flow: Algae `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_sorus
- Sources: ctsg-kelp-nursery-2014

###### Untreated hydrophilic nylon seed twine (`twine`)

Weigh clean purchased nylon twine; record length and measured linear mass. Do not presume a nylon/cotton blend has this identity. Include all failed inoculations and sacrificed monitoring pieces. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_twine.

- Selected flow: Untreated hydrophilic nylon seed twine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_twine
- Sources: ctsg-kelp-nursery-2014

###### Provasoli enrichment solution concentrate (`pes`)

Use the complete externally purchased PES preparation once by as-supplied mass. Collect supplier formula, concentration, batch assay, density at measured temperature and expiry; carrier water and each nutrient are subledgers. The handbook half-strength culture recipe is process context and does not establish this supplier concentrate potency or a universal LCI amount. In-house formulation requires separate cards for every actually purchased reagent and preparation energy and loss, replacing this whole-purchase card. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_pes.

- Selected flow: Provasoli enrichment solution concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pes
- Sources: ctsg-kelp-nursery-2014

###### Polyester seawater filter cartridge (`filter`)

Collect whole cartridge mass, replacement frequency and actual filtration stage. Supplier cartridge construction governs upstream data; a polymer mass alone cannot omit integral housing if supplied together. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_filter.

- Selected flow: Polyester seawater filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_filter
- Sources: ctsg-kelp-nursery-2014

###### Cellulose paper towel (`paper`)

Weigh paper consumed for sorus cleaning and moist holding; record wet waste separately from dry purchased paper. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_paper.

- Selected flow: Cellulose paper towel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_paper
- Sources: ctsg-kelp-nursery-2014

###### Deionized water (`deionized`)

Collect actual externally supplied deionized water mass for spool preparation and rinsing. If made on site replace this supplier boundary with raw water, treatment consumables, reject water and electricity separately. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_deionized.

- Selected flow: Deionized water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_deionized
- Sources: ctsg-kelp-nursery-2014

###### Sodium chloride (`salt`)

Conditional on documented seed-string salt cleaning. Weigh the purchased chemical; dissolution water is measured independently. Record purity, retained salt, rinse and discharge; not a blanket input for open-sea grow-out. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_salt.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_salt
- Sources: ctsg-kelp-nursery-2014

###### Povidone iodine aqueous preparation (`iodine`)

Conditional on actual authorized sorus dip. Weigh the whole supplied formulation once; assay iodine and carrier water in subledgers. Collect product authorization, rinsing and residues suitable for the eventual edible crop. The laboratory handbook does not approve food-use chemical residues. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_iodine.

- Selected flow: Povidone iodine aqueous preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_iodine
- Sources: ctsg-kelp-nursery-2014

###### Germanium dioxide (`germanium`)

Conditional solely on recorded diatom control with documented suitability and residue assessment for edible seaweed. Measure actual dose and Ge fate; omit use when cultures remain clean and no addition occurs. Never infer absence or food authorization from laboratory cultivation success. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_germanium.

- Selected flow: Germanium dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_germanium
- Sources: ctsg-kelp-nursery-2014

###### Ethanol aqueous disinfectant preparation (`ethanol`)

Conditional on actual surface sanitation. Weigh the complete supplier formulation once; record ethanol assay, water fraction, rinse and independently determined evaporated ethanol. No fixed concentration or loss fraction is imposed. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ethanol.

- Selected flow: Ethanol aqueous disinfectant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_ethanol
- Sources: ctsg-kelp-nursery-2014

###### Alternating current (`nursery_power`)

Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_power.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nursery_power
- Sources: ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

##### Elementary flows

###### Seawater at nursery intake (`seawater`)

Pump and weigh or meter natural seawater; retain salinity, temperature and independently measured density for volume conversion. This elementary resource covers the whole withdrawn seawater once; dissolved constituents are analytical subledgers, not duplicate purchased inputs. Record filtration and UV treatment actually used. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seawater.

- Selected flow: Seawater at nursery intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_seawater
- Sources: ctsg-kelp-nursery-2014

###### Carbon dioxide from air to nursery culture (`nursery_co2_in`)

Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_co2_in.

- Selected flow: Carbon dioxide from air to nursery culture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nursery_co2_in
- Sources: ctsg-kelp-nursery-2014

###### Oxygen from air to nursery culture (`nursery_o2_in`)

Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_o2_in.

- Selected flow: Oxygen from air to nursery culture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nursery_o2_in
- Sources: ctsg-kelp-nursery-2014

#### Outputs

##### Product flows

###### Saccharina latissima seeded nylon twine (`seeded_out`)

Weigh the whole transferred wet seeded twine with declared drain method; independently record nylon, attached dry biomass and carrier water. This internal intermediate is not edible output Q. Carry every inherited exchange burden into grow-out without purchasing its twine a second time. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seeded_out.

- Selected flow: Saccharina latissima seeded nylon twine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_seeded_out
- Sources: ctsg-kelp-nursery-2014

##### Waste flows

###### Spent PES-enriched seawater (`spent_medium`)

Measure each discharged whole liquid batch and actual receiving treatment or marine outfall; determine residual N, P, Ge and disinfectant species separately as constituent subledgers. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_spent_medium.

- Selected flow: Spent PES-enriched seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_spent_medium
- Sources: ctsg-kelp-nursery-2014

###### Spent Saccharina latissima sorus tissue (`sorus_waste`)

Weigh spent and failed tissue; determine dry matter and actual disposal; do not classify it as food co-product without release and market evidence. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sorus_waste.

- Selected flow: Spent Saccharina latissima sorus tissue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_sorus_waste
- Sources: ctsg-kelp-nursery-2014

###### Wet cellulose towel waste (`paper_waste`)

Measure whole wet waste and independently separate dry fibre and carried liquid in the water balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_paper_waste.

- Selected flow: Wet cellulose towel waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_paper_waste
- Sources: ctsg-kelp-nursery-2014

###### Spent polyester seawater filter cartridge (`filter_waste`)

Weigh whole spent cartridges and determine captured solids and water independently; record actual treatment. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_filter_waste.

- Selected flow: Spent polyester seawater filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_filter_waste
- Sources: ctsg-kelp-nursery-2014

##### Elementary flows

###### Ethanol to air (`ethanol_air`)

Conditional on actual volatilization. Determine ethanol species mass from independent measurement or validated preparation-specific material balance; total VOC is not ethanol mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ethanol_air.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_ethanol_air
- Sources: ctsg-kelp-nursery-2014

###### Carbon dioxide from nursery culture to air (`nursery_co2_out`)

Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_co2_out.

- Selected flow: Carbon dioxide from nursery culture to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nursery_co2_out
- Sources: ctsg-kelp-nursery-2014

###### Oxygen from nursery culture to air (`nursery_o2_out`)

Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_o2_out.

- Selected flow: Oxygen from nursery culture to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nursery_o2_out
- Sources: ctsg-kelp-nursery-2014

### Process: Longline deployment maintenance and harvest (`growout`)

#### Inputs

##### Product flows

###### Saccharina latissima seeded nylon twine (`seeded_in`)

Record the exact nursery transfer and burden vector with nylon and water subledgers; eliminate the paired transfer only in the consolidated physical and LCI gate. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seeded_in.

- Selected flow: Saccharina latissima seeded nylon twine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_seeded_in
- Sources: ctsg-kelp-nursery-2014

###### Marine diesel fuel (`diesel`)

Collect fuel delivery and tank opening/closing mass, actual trips, engine hours and shared use. Volume conversion needs this fuel density at recorded temperature; no water density or universal fuel rate. Include deployment, maintenance, harvest, failed trips and retrieval. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_diesel.

- Selected flow: Marine diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_diesel
- Sources: ctsg-kelp-nursery-2014

###### Mineral lubricating oil (`lubricant`)

Weigh actual lubricant replenishment and opening/closing stores; collect oil grade, engine scope and waste recovery; not included again in diesel mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_lubricant.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_lubricant
- Sources: ctsg-kelp-nursery-2014

##### Elementary flows

###### Carbon dioxide dissolved in seawater (`co2_uptake`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_co2_uptake.

- Selected flow: Carbon dioxide dissolved in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_co2_uptake
- Sources: ctsg-kelp-nursery-2014

###### Hydrogen carbonate ion in seawater (`bicarbonate`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_bicarbonate.

- Selected flow: Hydrogen carbonate ion in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_bicarbonate
- Sources: ctsg-kelp-nursery-2014

###### Carbonate ion in seawater (`carbonate`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_carbonate.

- Selected flow: Carbonate ion in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_carbonate
- Sources: ctsg-kelp-nursery-2014

###### Nitrate ion in seawater (`nitrate`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitrate.

- Selected flow: Nitrate ion in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nitrate
- Sources: ctsg-kelp-nursery-2014

###### Ammonium ion in seawater (`ammonium`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ammonium.

- Selected flow: Ammonium ion in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_ammonium
- Sources: ctsg-kelp-nursery-2014

###### Orthophosphate ion in seawater (`phosphate`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_phosphate.

- Selected flow: Orthophosphate ion in seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_phosphate
- Sources: ctsg-kelp-nursery-2014

###### Water incorporated into Saccharina latissima tissue (`water_uptake`)

Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_water_uptake.

- Selected flow: Water incorporated into Saccharina latissima tissue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_uptake
- Sources: ctsg-kelp-nursery-2014

###### Oxygen consumed from combustion air (`engine_oxygen`)

Determine actual net consumption of this atmospheric species from independent fuel/engine-specific measurements and species balances. Preserve full measured intake and exhaust gas composition including unchanged nitrogen/oxygen/argon and ambient carbon dioxide as paired gross subledgers; cancel only identical pass-through, not transformed or emitted species. No guessed combustion air amount, moisture, fuel composition or universal NOx factor. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_engine_oxygen.

- Selected flow: Oxygen consumed from combustion air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_engine_oxygen
- Sources: ctsg-kelp-nursery-2014

###### Nitrogen consumed from combustion air (`engine_nitrogen`)

Determine actual net consumption of this atmospheric species from independent fuel/engine-specific measurements and species balances. Preserve full measured intake and exhaust gas composition including unchanged nitrogen/oxygen/argon and ambient carbon dioxide as paired gross subledgers; cancel only identical pass-through, not transformed or emitted species. No guessed combustion air amount, moisture, fuel composition or universal NOx factor. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_engine_nitrogen.

- Selected flow: Nitrogen consumed from combustion air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_engine_nitrogen
- Sources: ctsg-kelp-nursery-2014

#### Outputs

##### Product flows

###### Algae (`harvest_out`)

Fresh cultivated Saccharina latissima only, harvested from the documented seeded longline. Weigh whole harvested blades with fixed drainage and exclude rope, fouling organisms and handling containers. Carry independently measured moisture, salt and dry biomass; this generic UUID does not certify species or edibility and has a conflicting wild/unfit classification label only. First food release has not yet occurred. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_harvest_out.

- Selected flow: Algae `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_harvest_out
- Sources: ctsg-kelp-nursery-2014

##### Waste flows

###### Rejected Saccharina latissima thinning biomass (`thinned`)

Weigh actual removed kelp, independently assay dry matter and record disposal. Identify each other removed fouling taxon in a separate conditional card when present; do not relabel it kelp or omit its mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_thinned.

- Selected flow: Rejected Saccharina latissima thinning biomass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_thinned
- Sources: ctsg-kelp-nursery-2014

###### Used mineral lubricating oil (`waste_oil`)

Measure recovered oil and its external recipient; distinguish oil in filters and spills and add each actual spilled oil flow separately. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_oil.

- Selected flow: Used mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste_oil
- Sources: ctsg-kelp-nursery-2014

###### Discarded polypropylene longline rope (`waste_rope`)

Weigh retired rope and document end treatment. If actual rope is lost to sea use a separate polypropylene rope-to-seawater elementary card with measured loss and destination; it is neither kelp loss nor a capital-service credit. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_rope.

- Selected flow: Discarded polypropylene longline rope
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste_rope
- Sources: ctsg-kelp-nursery-2014

##### Elementary flows

###### Detached Saccharina latissima biomass to seawater (`kelp_loss`)

Measure or independently estimate loss with a validated site-specific sampling model and uncertainty; collect wet mass, dry matter, C/N/P and actual fate. Do not count lost biomass as harvested output or permanent export from the sea. Unknown loss cannot be silently zero. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_kelp_loss.

- Selected flow: Detached Saccharina latissima biomass to seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_kelp_loss
- Sources: ctsg-kelp-nursery-2014

###### Oxygen released to seawater (`oxygen`)

Measure this actual biological gas species flux and dissolved/gas phase, or use a validated independent species balance. Separate gross photosynthesis and respiration; carbon uptake and release are not interchangeable climate credits. No oxygen quantity is inferred merely from carbon uptake without a complete supported biochemical balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_oxygen.

- Selected flow: Oxygen released to seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_oxygen
- Sources: ctsg-kelp-nursery-2014

###### Carbon dioxide released to seawater (`respired_co2`)

Measure this actual biological gas species flux and dissolved/gas phase, or use a validated independent species balance. Separate gross photosynthesis and respiration; carbon uptake and release are not interchangeable climate credits. No oxygen quantity is inferred merely from carbon uptake without a complete supported biochemical balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_respired_co2.

- Selected flow: Carbon dioxide released to seawater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_respired_co2
- Sources: ctsg-kelp-nursery-2014

###### Carbon dioxide from diesel combustion to air (`fossil_co2`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_fossil_co2.

- Selected flow: Carbon dioxide from diesel combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_fossil_co2
- Sources:

###### Carbon monoxide to air (`carbon_monoxide`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_carbon_monoxide.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_carbon_monoxide
- Sources:

###### Nitric oxide to air (`nitric_oxide`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitric_oxide.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nitric_oxide
- Sources:

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitrogen_dioxide.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_nitrogen_dioxide
- Sources:

###### Sulphur dioxide to air (`sulphur_dioxide`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sulphur_dioxide.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_sulphur_dioxide
- Sources:

###### Water vapour from diesel combustion to air (`combustion_water`)

Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_combustion_water.

- Selected flow: Water vapour from diesel combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_combustion_water
- Sources:

### Process: Cooling inspection packaging and first food-quality release (`release`)

#### Inputs

##### Product flows

###### Algae (`harvest_in`)

Receive the exact fresh Saccharina latissima harvest transfer with all inherited burdens and water/salt subledgers. Generic biomass identity only; wild/unfit classification conflict is disclosed and gives no food approval. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_harvest_in.

- Selected flow: Algae `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_harvest_in
- Sources: ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

###### Freshwater ice (`ice`)

Weigh whole purchased cooling ice; record source, quality, melting and remaining ice separately. Keep the documented barrier between ice and kelp; meltwater is not Q and is not tissue water. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ice.

- Selected flow: Freshwater ice
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_ice
- Sources: ctsg-seaweed-food-hazards-2020

###### High density polyethylene open tote (`tote`)

Weigh each reusable food-contact tote and collect acquisition, opening/closing stocks, losses, cleaning and external returns. Existing reusable stock is not repurchased on every use. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_tote.

- Selected flow: High density polyethylene open tote
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_tote
- Sources: ctsg-seaweed-food-hazards-2020

###### Low density polyethylene unsealed liner (`liner`)

Weigh the actual unsealed food-contact liner and barrier component. No vacuum or reduced-oxygen package is within this route; separately name a different actual barrier material if used. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_liner.

- Selected flow: Low density polyethylene unsealed liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_liner
- Sources: ctsg-seaweed-food-hazards-2020

###### Cellulose paper identification label (`label`)

Weigh actual paper label stock; record harvest lot, area and date and allergen communication. If adhesive, ink or laminate is integral to the purchased label, buy the whole label once and retain composition in a subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_label.

- Selected flow: Cellulose paper identification label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_label
- Sources: ctsg-seaweed-food-hazards-2020

###### Potable cleaning water (`washwater`)

Meter actual water for cleaning containers and food-contact surfaces, including startup and cleanup. Routine washing or blanching the edible blades is outside this raw-whole route; collect actual method and add a different reviewed processing route if it occurs. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_washwater.

- Selected flow: Potable cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_washwater
- Sources: ctsg-seaweed-food-hazards-2020

###### Ethanol aqueous food-contact sanitizer preparation (`sanitizer`)

Conditional on documented authorized product. Weigh complete as-supplied preparation; collect active assay, carrier water, contact/rinse requirements and ethanol emission independently. Neither water nor active ethanol is purchased twice. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sanitizer.

- Selected flow: Ethanol aqueous food-contact sanitizer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_sanitizer
- Sources: ctsg-seaweed-food-hazards-2020

###### 1,1,1,2-Tetrafluoroethane (`refrigerant`)

Conditional only for actual R134a equipment recharge beyond the initial capital charge. Weigh cylinder differences; record recovery, opening/closing equipment inventory and leaks independently. Different refrigerants require their own cards and identities, never this binding. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_refrigerant.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_refrigerant
- Sources: ctsg-seaweed-food-hazards-2020

###### Alternating current (`release_power`)

Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_release_power.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_release_power
- Sources: ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

#### Outputs

##### Product flows

###### Algae (`released_kelp`)

The one reference output is fresh raw whole farmed Saccharina latissima, after harvest, drainage, cooling, identity and food-suitability checks and the FIRST documented quality release. Generic Algae has no species, food grade, moisture, route or geography guarantee; its only wild/unfit CPC classification conflicts with this declared food/farmed use. Physical text and mass property remain compatible; keep all these restrictions with this row, and use no dried Laminaria substitute. Q is newly released net wet tissue excluding free/attached seawater, ice, packaging, rope and fouling taxa under the declared drain protocol; salt and independent dry matter are reported. Q includes same-cohort released closing finished goods, so never add closing FG to production again. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_released_kelp.

- Selected flow: Algae `eb76bd93-d5a5-4db2-bd08-388665f2eda5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_released_kelp
- Sources: ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

##### Waste flows

###### Rejected Saccharina latissima food lot (`reject_food`)

Weigh all unsafe, spoiled, damaged, failed-release and destructive-test kelp; record actual treatment and moisture. No rejected lot is Q and no automatic coproduct or offset exists. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_reject_food.

- Selected flow: Rejected Saccharina latissima food lot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_reject_food
- Sources: ctsg-seaweed-food-hazards-2020

###### Container washdown effluent (`effluent`)

Measure whole effluent from this operation and receiving treatment, with separately assayed salt, sanitizer and suspended biomass. COD is an indicator and not a named organic chemical mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_effluent.

- Selected flow: Container washdown effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_effluent
- Sources: ctsg-seaweed-food-hazards-2020

###### Separated freshwater ice meltwater (`meltwater`)

Measure meltwater to its actual drain/treatment and residual retained ice; no seawater density is assumed and no meltwater enters edible Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_meltwater.

- Selected flow: Separated freshwater ice meltwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_meltwater
- Sources: ctsg-seaweed-food-hazards-2020

###### Discarded low density polyethylene liner (`waste_liner`)

Weigh rejected and damaged liners separately from the liner mass physically dispatched with product. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_liner.

- Selected flow: Discarded low density polyethylene liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste_liner
- Sources: ctsg-seaweed-food-hazards-2020

###### Discarded high density polyethylene tote (`waste_tote`)

Weigh retired tote mass and actual waste recipient; reuse inside the system is not a recovered coproduct. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_tote.

- Selected flow: Discarded high density polyethylene tote
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste_tote
- Sources: ctsg-seaweed-food-hazards-2020

###### Discarded cellulose paper label (`waste_label`)

Weigh label rejects and attached wet contamination separately in the component balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_label.

- Selected flow: Discarded cellulose paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_waste_label
- Sources: ctsg-seaweed-food-hazards-2020

##### Elementary flows

###### 1,1,1,2-Tetrafluoroethane to air (`r134a_air`)

Conditional on actual leak; distinguish loss, recovered charge and retained inventory with independent measurements. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_r134a_air.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_r134a_air
- Sources: ctsg-seaweed-food-hazards-2020

###### Ethanol to air (`release_ethanol_air`)

Conditional on actual food-contact surface sanitizer use; determine ethanol mass independently from whole purchased formulation; no total VOC substitution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_release_ethanol_air.

- Selected flow: Ethanol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_release_ethanol_air
- Sources: ctsg-seaweed-food-hazards-2020

###### Water vapour to air (`water_air`)

Measure actual evaporation or independently supported water balance; tissue water, free seawater, ice and cleaning water must remain distinguishable. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_water_air.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_water_air
- Sources: ctsg-seaweed-food-hazards-2020

### Process: Postrelease storage handling and dispatch service (`service`)

#### Inputs

##### Product flows

###### Alternating current (`service_power`)

Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_power.

- Selected flow: Alternating current `65ec3424-071f-42ab-8800-810364539813`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_power
- Sources: ctsg-kelp-nursery-2014; ctsg-seaweed-food-hazards-2020

###### Marine diesel fuel (`service_diesel`)

Conditional on actual contracted postrelease handling/dispatch under producer control. Collect incremental fuel and allocation to each released cohort. This separate service does not create Q; earlier-cohort services retain earlier burdens and are not charged to current production. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_diesel.

- Selected flow: Marine diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_diesel
- Sources: ctsg-seaweed-food-hazards-2020

##### Elementary flows

###### Oxygen consumed from combustion air (`service_oxygen`)

Conditional actual species net consumption in the documented postrelease diesel service. Independently determine actual gas composition and retain paired unchanged pass-through subledgers; no guessed air ratio or duplicated production burden. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_oxygen.

- Selected flow: Oxygen consumed from combustion air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_oxygen
- Sources:

###### Nitrogen consumed from combustion air (`service_nitrogen`)

Conditional actual species net consumption in the documented postrelease diesel service. Independently determine actual gas composition and retain paired unchanged pass-through subledgers; no guessed air ratio or duplicated production burden. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_nitrogen.

- Selected flow: Nitrogen consumed from combustion air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_nitrogen
- Sources:

#### Outputs

##### Elementary flows

###### Carbon dioxide from diesel combustion to air (`service_co2`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_co2.

- Selected flow: Carbon dioxide from diesel combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_co2
- Sources:

###### Carbon monoxide to air (`service_co`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_co.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_co
- Sources:

###### Nitric oxide to air (`service_no`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_no.

- Selected flow: Nitric oxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_no
- Sources:

###### Nitrogen dioxide to air (`service_no2`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_no2.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_no2
- Sources:

###### Sulphur dioxide to air (`service_so2`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_so2.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_so2
- Sources:

###### Water vapour from diesel combustion to air (`service_water`)

Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_water.

- Selected flow: Water vapour from diesel combustion to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable raw campaign exchange divided once by newly first-released net wet tissue mass Q.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service_water
- Sources:

## 7. Allocation and Co-product Handling

The conditions in a_scope govern every rule in this section; the residual rule is conditional on the preceding steps.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_scope | attributional_model | Apply this hierarchy only to a declared attributional partitioning case: Situation C2 or another ILCD situation where its goal-specific provisions establish allocation after subdivision, virtual subdivision and relevant substitution/system expansion have been assessed as unavailable or infeasible. Document the chosen decision context; no free choice of allocation versus substitution is implied. | jrc-ilcd-allocation-2010 |
| a_dedicated | exchange_attribution | First separate independently metered nursery batches, dedicated gear, trips, cooling and release activities. Use virtual subdivision for materials embodied solely in one output. Failed culture, rejected food and abnormal/idle/cleanup activity remain burdens of their actual crop/function; do not allocate them away by assuming saleable output. | jrc-ilcd-allocation-2010 |
| a_physical | remaining_joint_exchanges | For each genuinely remaining shared exchange identify and demonstrate its determining physical causal relation to each function. Gear occupation time, trip payload and refrigeration load are candidates only when actual measurements demonstrate causality for that exchange. Nutrient content or wet/dry mass is not automatically a driver of boat fuel, capital or all emissions. Reconcile allocated vectors to the original vector without changing physical output masses. | jrc-ilcd-allocation-2010 |
| a_residual | residual_joint_exchanges | Only when a determining physical causality remains unavailable after the preceding steps use contemporaneous representative market value at the SAME joint-process exit and actual condition/quantity. Derive gate-equivalent values by removing downstream conditioning, packaging, storage and transport costs. Retain prices, dates, quantities, currency, sensitivity and the reason for this residual criterion. No fixed split or automatic choice of economic/physical allocation is provided. | jrc-ilcd-allocation-2010 |
| a_noncredits | biomass_and_residues | Rejected tissue, rope waste, meltwater and measured C/N/P uptake are not automatic saleable co-functions or credits. Keep their actual fates and treatment burdens. Photosynthetic uptake is a physical exchange, not permanent carbon storage or avoided nutrient production. No substitution, negative carbon burden or nutrient-removal credit is authorized by this food-crop inventory. An actual additional marketed function needs separate evidence and goal-consistent treatment. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

Collection records contain UNDIVIDED raw observations only. The aggregation_rule cell states the final reporting basis; it references the single normalize_once calculation and performs no arithmetic. Retain every card-specific scope and collection obligation in addition to the common audit fields. Do not substitute a process-wide row for these per-exchange protocols. No reliable universal amount/range is available for these site activities; a missing value needs collection and uncertainty disclosure, never an invented broad reasoned-estimate interval.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_asset_longline | assets | asset_longline | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect rope length and measured linear mass; include replacements and lost sections. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_longline. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_anchor | assets | asset_anchor | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect weighed whole anchor and installation records. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_anchor. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_chain | assets | asset_chain | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect weighed chain with actual configuration. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_chain. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_buoy | assets | asset_buoy | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole purchased buoy mass; attached fittings stay in the same article bill. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_buoy. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_spool | assets | asset_spool | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole spool mass and reuse cycles. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_spool. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_tank | assets | asset_tank | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole tank mass and service history. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_tank. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_chiller | assets | asset_chiller | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole assembled equipment mass including its initial refrigerant charge. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_chiller. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_pump | assets | asset_pump | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole pump mass and measured use time. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_pump. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_airpump | assets | asset_airpump | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole air pump mass; ambient through-air is not purchased compressed gas. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_airpump. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_lamp | assets | asset_lamp | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole fixture mass and lamp replacement history. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_lamp. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_boat | assets | asset_boat | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole vessel mass including engine; do not also purchase its constituent engine as a second asset. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_boat. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_asset_coldroom | assets | asset_coldroom | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | For the declared installation only. Collect whole assembled chamber acquisition and installed equipment boundary; initial charge included. Collect actual acquisition, opening/closing installed stock, failures, replacement, recovery, service life and attributable use. Use upstream article production plus installation and final treatment; annual mass is a service attribution and is not biomass feed. No universal mass, lifetime or utilization range is supported. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_asset_coldroom. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_sorus | nursery | sorus | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Authorized fresh Saccharina latissima reproductive sorus only; weigh received net wet tissue and independently measure dry matter. Record source location and collection vessel burden. This generic identity has no species, food grade, moisture, origin or route guarantee; its wild/unfit CPC label conflicts with this use while its full physical description has no matching restriction. It is used solely as generic algal biomass, never as an accepted classification mapping or food approval. Do not substitute other taxa or dried Laminaria. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sorus. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_seawater | nursery | seawater | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Pump and weigh or meter natural seawater; retain salinity, temperature and independently measured density for volume conversion. This elementary resource covers the whole withdrawn seawater once; dissolved constituents are analytical subledgers, not duplicate purchased inputs. Record filtration and UV treatment actually used. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seawater. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_twine | nursery | twine | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh clean purchased nylon twine; record length and measured linear mass. Do not presume a nylon/cotton blend has this identity. Include all failed inoculations and sacrificed monitoring pieces. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_twine. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_pes | nursery | pes | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Use the complete externally purchased PES preparation once by as-supplied mass. Collect supplier formula, concentration, batch assay, density at measured temperature and expiry; carrier water and each nutrient are subledgers. The handbook half-strength culture recipe is process context and does not establish this supplier concentrate potency or a universal LCI amount. In-house formulation requires separate cards for every actually purchased reagent and preparation energy and loss, replacing this whole-purchase card. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_pes. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_filter | nursery | filter | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect whole cartridge mass, replacement frequency and actual filtration stage. Supplier cartridge construction governs upstream data; a polymer mass alone cannot omit integral housing if supplied together. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_filter. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_paper | nursery | paper | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh paper consumed for sorus cleaning and moist holding; record wet waste separately from dry purchased paper. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_paper. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_deionized | nursery | deionized | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect actual externally supplied deionized water mass for spool preparation and rinsing. If made on site replace this supplier boundary with raw water, treatment consumables, reject water and electricity separately. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_deionized. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_salt | nursery | salt | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on documented seed-string salt cleaning. Weigh the purchased chemical; dissolution water is measured independently. Record purity, retained salt, rinse and discharge; not a blanket input for open-sea grow-out. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_salt. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_iodine | nursery | iodine | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual authorized sorus dip. Weigh the whole supplied formulation once; assay iodine and carrier water in subledgers. Collect product authorization, rinsing and residues suitable for the eventual edible crop. The laboratory handbook does not approve food-use chemical residues. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_iodine. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_germanium | nursery | germanium | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional solely on recorded diatom control with documented suitability and residue assessment for edible seaweed. Measure actual dose and Ge fate; omit use when cultures remain clean and no addition occurs. Never infer absence or food authorization from laboratory cultivation success. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_germanium. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_ethanol | nursery | ethanol | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual surface sanitation. Weigh the complete supplier formulation once; record ethanol assay, water fraction, rinse and independently determined evaporated ethanol. No fixed concentration or loss fraction is imposed. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ethanol. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nursery_power | nursery | nursery_power | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_power. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | MJ | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_seeded_out | nursery | seeded_out | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh the whole transferred wet seeded twine with declared drain method; independently record nylon, attached dry biomass and carrier water. This internal intermediate is not edible output Q. Carry every inherited exchange burden into grow-out without purchasing its twine a second time. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seeded_out. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_spent_medium | nursery | spent_medium | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure each discharged whole liquid batch and actual receiving treatment or marine outfall; determine residual N, P, Ge and disinfectant species separately as constituent subledgers. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_spent_medium. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_sorus_waste | nursery | sorus_waste | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh spent and failed tissue; determine dry matter and actual disposal; do not classify it as food co-product without release and market evidence. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sorus_waste. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_paper_waste | nursery | paper_waste | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure whole wet waste and independently separate dry fibre and carried liquid in the water balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_paper_waste. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_filter_waste | nursery | filter_waste | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh whole spent cartridges and determine captured solids and water independently; record actual treatment. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_filter_waste. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_ethanol_air | nursery | ethanol_air | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual volatilization. Determine ethanol species mass from independent measurement or validated preparation-specific material balance; total VOC is not ethanol mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ethanol_air. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_seeded_in | growout | seeded_in | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Record the exact nursery transfer and burden vector with nylon and water subledgers; eliminate the paired transfer only in the consolidated physical and LCI gate. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_seeded_in. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_diesel | growout | diesel | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect fuel delivery and tank opening/closing mass, actual trips, engine hours and shared use. Volume conversion needs this fuel density at recorded temperature; no water density or universal fuel rate. Include deployment, maintenance, harvest, failed trips and retrieval. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_diesel. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_lubricant | growout | lubricant | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh actual lubricant replenishment and opening/closing stores; collect oil grade, engine scope and waste recovery; not included again in diesel mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_lubricant. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_co2_uptake | growout | co2_uptake | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_co2_uptake. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_bicarbonate | growout | bicarbonate | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_bicarbonate. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_carbonate | growout | carbonate | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_carbonate. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nitrate | growout | nitrate | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitrate. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_ammonium | growout | ammonium | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ammonium. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_phosphate | growout | phosphate | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_phosphate. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_water_uptake | growout | water_uptake | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Include only this actually transferred open-water species. Collect gross uptake independently using validated flux/speciation measurements and measured standing/harvested/lost biomass with elemental composition; distinguish external attached seawater. Record charge, molecular mass, media and period. No nutrient, DIC or total mass residual may fit two unknown fluxes or identify a species. Natural uptake is not permanent storage, avoided fertilizer or a negative product burden. Nursery pumped seawater constituents remain inside its whole-water subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_water_uptake. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_harvest_out | growout | harvest_out | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Fresh cultivated Saccharina latissima only, harvested from the documented seeded longline. Weigh whole harvested blades with fixed drainage and exclude rope, fouling organisms and handling containers. Carry independently measured moisture, salt and dry biomass; this generic UUID does not certify species or edibility and has a conflicting wild/unfit classification label only. First food release has not yet occurred. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_harvest_out. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_kelp_loss | growout | kelp_loss | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure or independently estimate loss with a validated site-specific sampling model and uncertainty; collect wet mass, dry matter, C/N/P and actual fate. Do not count lost biomass as harvested output or permanent export from the sea. Unknown loss cannot be silently zero. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_kelp_loss. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_thinned | growout | thinned | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh actual removed kelp, independently assay dry matter and record disposal. Identify each other removed fouling taxon in a separate conditional card when present; do not relabel it kelp or omit its mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_thinned. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_waste_oil | growout | waste_oil | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure recovered oil and its external recipient; distinguish oil in filters and spills and add each actual spilled oil flow separately. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_oil. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_oxygen | growout | oxygen | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure this actual biological gas species flux and dissolved/gas phase, or use a validated independent species balance. Separate gross photosynthesis and respiration; carbon uptake and release are not interchangeable climate credits. No oxygen quantity is inferred merely from carbon uptake without a complete supported biochemical balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_oxygen. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_respired_co2 | growout | respired_co2 | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure this actual biological gas species flux and dissolved/gas phase, or use a validated independent species balance. Separate gross photosynthesis and respiration; carbon uptake and release are not interchangeable climate credits. No oxygen quantity is inferred merely from carbon uptake without a complete supported biochemical balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_respired_co2. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_fossil_co2 | growout | fossil_co2 | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_fossil_co2. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_carbon_monoxide | growout | carbon_monoxide | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_carbon_monoxide. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nitric_oxide | growout | nitric_oxide | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitric_oxide. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nitrogen_dioxide | growout | nitrogen_dioxide | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nitrogen_dioxide. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_sulphur_dioxide | growout | sulphur_dioxide | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sulphur_dioxide. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_combustion_water | growout | combustion_water | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Collect this actual engine exhaust species using measurements or engine/fuel-specific validated factors with raw fuel basis and control state. Declare method and uncertainty; no universal factor is supplied. NOx, VOC and COD indicators cannot substitute for this species mass. Add each other real exhaust species separately, including methane or soot when present. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_combustion_water. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_harvest_in | release | harvest_in | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Receive the exact fresh Saccharina latissima harvest transfer with all inherited burdens and water/salt subledgers. Generic biomass identity only; wild/unfit classification conflict is disclosed and gives no food approval. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_harvest_in. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_ice | release | ice | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh whole purchased cooling ice; record source, quality, melting and remaining ice separately. Keep the documented barrier between ice and kelp; meltwater is not Q and is not tissue water. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_ice. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_tote | release | tote | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh each reusable food-contact tote and collect acquisition, opening/closing stocks, losses, cleaning and external returns. Existing reusable stock is not repurchased on every use. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_tote. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_liner | release | liner | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh the actual unsealed food-contact liner and barrier component. No vacuum or reduced-oxygen package is within this route; separately name a different actual barrier material if used. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_liner. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_label | release | label | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh actual paper label stock; record harvest lot, area and date and allergen communication. If adhesive, ink or laminate is integral to the purchased label, buy the whole label once and retain composition in a subledger. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_label. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_washwater | release | washwater | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Meter actual water for cleaning containers and food-contact surfaces, including startup and cleanup. Routine washing or blanching the edible blades is outside this raw-whole route; collect actual method and add a different reviewed processing route if it occurs. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_washwater. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_sanitizer | release | sanitizer | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on documented authorized product. Weigh complete as-supplied preparation; collect active assay, carrier water, contact/rinse requirements and ethanol emission independently. Neither water nor active ethanol is purchased twice. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_sanitizer. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_refrigerant | release | refrigerant | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional only for actual R134a equipment recharge beyond the initial capital charge. Weigh cylinder differences; record recovery, opening/closing equipment inventory and leaks independently. Different refrigerants require their own cards and identities, never this binding. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_refrigerant. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_release_power | release | release_power | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_release_power. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | MJ | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_released_kelp | release | released_kelp | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | The one reference output is fresh raw whole farmed Saccharina latissima, after harvest, drainage, cooling, identity and food-suitability checks and the FIRST documented quality release. Generic Algae has no species, food grade, moisture, route or geography guarantee; its only wild/unfit CPC classification conflicts with this declared food/farmed use. Physical text and mass property remain compatible; keep all these restrictions with this row, and use no dried Laminaria substitute. Q is newly released net wet tissue excluding free/attached seawater, ice, packaging, rope and fouling taxa under the declared drain protocol; salt and independent dry matter are reported. Q includes same-cohort released closing finished goods, so never add closing FG to production again. Contrary native metadata explicitly says wild and unfit for human consumption; native owner intent is unknown. This is a conditional generic physical identity, not proof of misclassification or an exact food/farmed/fresh/species match. Independently establish this PCR reference object and delivered quality; never auto-select a wild or nonfood upstream dataset/provider. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_released_kelp. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_reject_food | release | reject_food | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh all unsafe, spoiled, damaged, failed-release and destructive-test kelp; record actual treatment and moisture. No rejected lot is Q and no automatic coproduct or offset exists. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_reject_food. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_effluent | release | effluent | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure whole effluent from this operation and receiving treatment, with separately assayed salt, sanitizer and suspended biomass. COD is an indicator and not a named organic chemical mass. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_effluent. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_meltwater | release | meltwater | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure meltwater to its actual drain/treatment and residual retained ice; no seawater density is assumed and no meltwater enters edible Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_meltwater. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_waste_liner | release | waste_liner | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh rejected and damaged liners separately from the liner mass physically dispatched with product. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_liner. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_waste_tote | release | waste_tote | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh retired tote mass and actual waste recipient; reuse inside the system is not a recovered coproduct. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_tote. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_waste_label | release | waste_label | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh label rejects and attached wet contamination separately in the component balance. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_label. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_r134a_air | release | r134a_air | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual leak; distinguish loss, recovered charge and retained inventory with independent measurements. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_r134a_air. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_release_ethanol_air | release | release_ethanol_air | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual food-contact surface sanitizer use; determine ethanol mass independently from whole purchased formulation; no total VOC substitution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_release_ethanol_air. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_water_air | release | water_air | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Measure actual evaporation or independently supported water balance; tissue water, free seawater, ice and cleaning water must remain distinguishable. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_water_air. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nursery_co2_in | nursery | nursery_co2_in | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_co2_in. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nursery_co2_out | nursery | nursery_co2_out | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_co2_out. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nursery_o2_in | nursery | nursery_o2_in | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_o2_in. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_nursery_o2_out | nursery | nursery_o2_out | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual aeration/biological gas species exchange. Measure inlet/outlet species concentrations and integrated flow with temperature/pressure; pair gross observations and use declared net reservoir exchange without losing the gross subledger. Biological changes and dissolved species in pumped/spent seawater require independent analyses. No rate or gas yield is supplied; never infer two unknown fluxes from one closure residual. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_nursery_o2_out. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_engine_oxygen | growout | engine_oxygen | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Determine actual net consumption of this atmospheric species from independent fuel/engine-specific measurements and species balances. Preserve full measured intake and exhaust gas composition including unchanged nitrogen/oxygen/argon and ambient carbon dioxide as paired gross subledgers; cancel only identical pass-through, not transformed or emitted species. No guessed combustion air amount, moisture, fuel composition or universal NOx factor. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_engine_oxygen. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_engine_nitrogen | growout | engine_nitrogen | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Determine actual net consumption of this atmospheric species from independent fuel/engine-specific measurements and species balances. Preserve full measured intake and exhaust gas composition including unchanged nitrogen/oxygen/argon and ambient carbon dioxide as paired gross subledgers; cancel only identical pass-through, not transformed or emitted species. No guessed combustion air amount, moisture, fuel composition or universal NOx factor. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_engine_nitrogen. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_waste_rope | growout | waste_rope | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Weigh retired rope and document end treatment. If actual rope is lost to sea use a separate polypropylene rope-to-seawater elementary card with measured loss and destination; it is neither kelp loss nor a capital-service credit. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_waste_rope. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_power | service | service_power | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Meter US grid electricity at point of use for this process, including idle, failed runs, cleaning and refrigeration as applicable. The selected identity leaves voltage and transmission/distribution boundary unspecified and has pump-and-treat source context; it supplies identity only, no treatment burden or electricity coefficient. Collect actual supplier, voltage, metering boundary, period and background supply dataset; it is not valid for a different national supply. Convert kWh to MJ before attribution. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_power. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | MJ | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_diesel | service | service_diesel | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional on actual contracted postrelease handling/dispatch under producer control. Collect incremental fuel and allocation to each released cohort. This separate service does not create Q; earlier-cohort services retain earlier burdens and are not charged to current production. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_diesel. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_co2 | service | service_co2 | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_co2. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_co | service | service_co | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_co. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_no | service | service_no | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_no. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_no2 | service | service_no2 | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_no2. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_so2 | service | service_so2 | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_so2. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_water | service | service_water | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Only actual producer-controlled postrelease diesel service. Collect this actual species with measurements or validated engine/fuel-specific factors independently of manufacturing emissions. Keep full inlet/exhaust gas subledgers and declare net atmospheric exchanges; retain historical cohort attribution and do not create new Q. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_water. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_oxygen | service | service_oxygen | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual species net consumption in the documented postrelease diesel service. Independently determine actual gas composition and retain paired unchanged pass-through subledgers; no guessed air ratio or duplicated production burden. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_oxygen. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_service_nitrogen | service | service_nitrogen | measured_record | lot; timestamp; raw amount before division; raw unit; meter or balance id; opening and closing stock; actual supply specification; losses; stage; inherited exchange burden vector; allocation evidence; uncertainty | Conditional actual species net consumption in the documented postrelease diesel service. Independently determine actual gas composition and retain paired unchanged pass-through subledgers; no guessed air ratio or duplicated production burden. No reliable generic numerical range is established for this exchange. Collect its undivided actual amount and uncertainty with cp_service_nitrogen. Retain unnormalized raw values and primary records; collect independently before any attribution or normalization. | kg | Each actual event and inventory reading | Full cohort including failures and nonproduction periods | Actual site and supplier and receiving compartment | per reference flow | Calibration; primary logs; supplier specifications; raw assays; traceability and uncertainty |
| cp_release | release | released_kelp | quality_release | new_release_mass; net tissue weighing; drain condition; independent dry matter; salt; excluded attached water; lot; release timestamp; test methods and detection limits; water status; iodine and contaminant review; cooling logs; allergen notice; opening closing WIP FG | Independently weigh new net tissue on calibrated scales and review lot-specific food suitability before first release; record stock and same-cohort FG without creating another release. Collect only raw values. | kg | Every release and stock closing | Whole culture cohort | Nursery farm and release facility | per reference flow | Signed release; calibrated net weighing; independent assays and controls |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_conversion | all inventory rows | U_i = raw_i * unit_factor_i; electricity kWh uses factor 3.6 MJ/kWh. Integrate genuine rates only. Volume factors need independent state-specific density; stock and mixture subledgers do not duplicate purchases. | raw_i; unit_factor_i; density_i; state_i | U_i |  |
| cohort_numerator | all inventory rows | A_i = attributable converted raw_i + opening_WIP_burden_i - closing_WIP_burden_i; apply actual direct/virtual subdivision and justified residual allocation before forming A_i. Internal nursery/harvest transfers carry their inherited vectors and cancel only on consolidation. Do not subtract released closing FG from first-release manufacturing output or its already assigned burden. | U_i; allocation_i; opening_WIP_burden_i; closing_WIP_burden_i | A_i | jrc-ilcd-allocation-2010 |
| release_total | released_kelp | Q = sum(newly first-released compliant net wet tissue mass); count each cohort lot once after calibrated net weighing and documented release. No opening FG, second inspection, delivery or returned/reworked previously released mass creates additional Q. Retain same-cohort closing FG within this Q. | new_release_mass; lot_id; release_record; cp_release | Q |  |
| normalize_once | all inventory rows | x_i = A_i / Q for Q > 0; A_i is the unnormalized attributable exchange numerator in kg or MJ and Q is kg first-released net wet tissue. This is the sole division by Q. For Q = 0 keep A_i and stocks as absolute burdens and issue no unit result; the reference output is exactly 1 kg. | A_i; Q | x_i |  |
| biomass_subledger | released_kelp | dry_tissue = net_wet_tissue * independently_measured_dry_fraction; water_tissue = net_wet_tissue - dry_tissue. Salt is a measured constituent of dry tissue, not additional output. Carbon/nitrogen/phosphorus = independently measured dry biomass * measured dry-basis element fraction for each stock and fate; speciation requires independent evidence. | net_wet_tissue; measured_dry_fraction; measured_salt; measured_element_fractions | biomass_water_salt_element_subledgers |  |
| packaging_balance | tote; liner; label | Opening_empty + opening_attached_WIP_FG + opening_reusable + purchases + external_returns_received = closing_empty + closing_attached_WIP_FG + closing_reusable + gross_dispatch_packaging + external_returns_sent + waste, component by component. Cancel internal reuse, not gross dispatch, only at consolidation. | packaging_open; packaging_close; purchases; external_returns; gross_dispatch; waste | component_balance |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_scope | all inventory rows | Full source-specific state and process support; no source registration or tool success substitutes for applicability | Primary originals and dated site records with method limitations |
| dq_complete | all inventory rows | Each exchange has raw collection obligation and range warning; include every conditional exchange actually present and report missing values; never hide in zero or other | Per-card protocol logs and stock/species reconciliation |
| dq_food | released_kelp | Current site/destination suitability and required tests; general hazard knowledge does not approve a lot | Water and batch analyses; time/temperature records; release decision |
| dq_time | all inventory rows | Represent full named cycle with date, geography, technology and nonproduction loads; disclose supplier/process substitution and uncertainty | Complete primary logs; calibration and sensitivity analysis |
| dq_identity | all inventory rows | Algae retains contrary wild/unfit native metadata and unknown owner intent; independently verify supplied product quality and never auto-select wild/nonfood upstream providers. Each UUID uses its verified complete identity restrictions; unresolved auxiliaries stay physically specific and are rechecked before dataset completion | Exact-state native identity and support-chain records plus actual supplier identity |

## 9. Validation Rules

These requirements apply to the whole declared cohort and its actual conditional exchanges, including Q = 0. Engineering inspection can verify declared structure and consistency only; missing measurements or food-suitability decisions cannot be reported as scientifically verified.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all_rows | Confirm S. latissima, farmed route, fresh raw state and all qualifiers. A generic Algae UUID does not establish food suitability, farmed provenance or an accepted CPC mapping. Reject dried/pressed Laminaria identity for this wet crop; retain every UUID restriction and unresolved auxiliary identity in consumable context. |  |
| v_food | released_kelp | Before Q require documented current-site food-suitability decision, authorized harvest waters and seed provenance, microbial/chemical sampling with methods/limits, contaminant and iodine risk assessment, sanitation, cold chain and fouling-allergen communication. For the Connecticut reference configuration the 2020 guide specifies cooling within two hours of harvest start and refrigeration set below 41 F (5 C); verify the current applicable authority and operational controls rather than treating this historical guide as current legal clearance. It does not validate shelf life, a pathogen kill step or food-safety certification. Frozen/dried/reduced-oxygen routes have different hazards and cannot inherit this release. | ctsg-seaweed-food-hazards-2020 |
| v_mass | physical_gates | Reconcile each nursery, grow-out, release and service physical gate, then the consolidated gate: opening stock + actual external inputs + biological net additions = closing stock + all actual outputs/losses. Preserve dry biomass, salt, intrinsic water, attached seawater, ice and each packaging material separately; reactions/respiration and actual dissolved/gas species need independent evidence. Do not adjust moisture or one unknown flux to close two unknowns. No universal residual tolerance is supplied: use measured uncertainty and investigate imbalance. |  |
| v_elements | growout | Use independent dry matter and measured C/N/P composition for every biomass stock and destination and independently determined environmental species fluxes. Conserve carbon, nitrogen and phosphorus across uptake, released/standing biomass, losses, respiration and actual discharges. Convert element mass to a chemical species only with measured speciation, correct stoichiometry and charge. Indicators DIC, COD, total N/P and VOC do not identify molecules. No unsupported carbon credit or persistent storage claim. |  |
| v_period | campaign_and_stock | Include failed/zero-output cycles, startup, shutdown, idle, cleanup, sampling, rework and returns. For each exchange retain opening/closing WIP quantity, stage and inherited burden vector. Reverse the original transfer on returns; assign only incremental rework once. Do not renormalize already normalized historical burdens. Released FG stock cannot create a second Q on inspection or delivery. |  |
| v_packaging | tote_liner_label | For each distinct packaging component reconcile opening empty + opening attached WIP/FG + opening reusable stock + purchases + external returns received = closing counterparts + material on GROSS physical dispatch + external returns sent + waste. Eliminate internal reuse and transfers only on consolidation. Returned full packs retain their actual contents and historical burden; split empties. Packaging and ice never enter net tissue Q and reuse never implies repurchase or automatic co-product. |  |
| v_calc | all_inventory_rows | Convert raw units and allocate attributable raw exchange numerators first; apply the single normalization calculation once for Q greater than zero. Cards and protocol aggregation refer to that same result and must not divide it again. Q equal to zero retains absolute activity and inherited burdens and produces no per-unit result. Missing raw data, biological species fluxes or safety decisions remain explicit unavailable findings, not zero or an asserted pass. |  |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared fresh raw S. latissima food biomass at the first-release gate with separately identified postrelease services |
| allowed_use | Attributional inventory consistent with actual species, wet basis, gate, site, season and technology after data completion and review |
| excluded_use | Automatic food certification or nutritional equivalence; dried/frozen/ground substitutions; avoided fertilizer or carbon credits; universal species inventories |
| required_metadata | species Saccharina latissima; farmed origin and seed provenance; culture site and season; spore-seeded longline route; raw fresh whole blades; first-release gate and timestamp; Q net wet tissue and drainage method; independently measured dry matter and moisture; salt disclosure and attached-water exclusion; food-suitability evidence and destination requirements; harvest-water status; microbial and chemical test methods and detection limits; iodine and contaminant assessment; harvest-to-cooling time and temperature; unsealed packaging and allergen communication; cohort stock and inherited burden vectors; capital service attribution; actual postrelease service scope; uncertainty and identity restrictions; contrary native wild and unfit metadata with unknown owner intent; independent supply quality and no automatic wild/nonfood upstream dataset or provider |
| required_quality_disclosure | Missing raw values and conditional rows; uncertainty; full source scope; native UUID limitations; stock vectors; source state compatibility and ordinary identity gaps |
| update_trigger | Species/state/route/gate change; new food hazards or authority conditions; supplier formulation or equipment changes; revised measurements or native identities |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ctsg-kelp-nursery-2014 | handbook | Redmond et al. 2014. New England Seaweed Culture Handbook: Nursery Systems. CTSG-14-01. https://repository.library.noaa.gov/view/noaa/44208/noaa_44208_DS1.pdf | pp. 8–11 water treatment/media context; pp. 17–29 kelp identity and direct spore seeding; nursery equipment; seawater change; field longline maintenance; vegetative-culture counterexample. No food authorization or universal inventory coefficients. |
| ctsg-seaweed-food-hazards-2020 | official_guidance | Concepcion, DeRosia-Banick and Balcom. 2020. Seaweed Production and Processing in Connecticut: A Guide to Understanding and Controlling Potential Food Safety Hazards. CTSG-20-01. https://seagrant.uconn.edu/wp-content/uploads/sites/1985/2020/01/Seaweed-Hazards-Guide_Jan2020_accessible.pdf | Note to users and pp. 3–9 species/process hazards and contamination; p. 12 raw whole state and allergen context; pp. 13–18 raw versus processed branches; p. 21 model harvest/dockside/cooling/distribution plan. Historical CT guidance; actual current requirements must be checked; no food certification. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC. 2010. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance. First edition March 2010. §§7.9.2–7.9.3 pp. 255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional subdivision and virtual subdivision; exchange-specific determining physical causality; residual common-gate actual-condition market value and inventory conservation. No seaweed industrial recipe or fixed split. |
