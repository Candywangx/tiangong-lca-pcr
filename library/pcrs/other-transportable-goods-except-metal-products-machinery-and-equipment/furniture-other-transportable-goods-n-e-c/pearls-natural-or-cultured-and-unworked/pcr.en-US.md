---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pearls-natural-or-cultured-and-unworked
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Freshwater tissue-grafted unworked pearl production

## 1. Scope and Applicability

This PCR covers the complete freshwater mantle-tissue-only route from evidenced live freshwater host/donor acquisition and its upstream collection or nursery provider through conditioning, donor mantle preparation, tissue implantation without an added bead, recovery/observation, real pond husbandry and mortality, grow-out, manual harvest and pearl separation, only actual non-abrasive removal of adhering tissue/dirt, drying, visual grading and unique first quality release of whole bare unworked pearls. FAO 1986 supports a qualitative technical synthesis, not a contemporary site inventory or a single SKU/order. Do not import its gonadal bead route or numerical examples as the selected route recipe. Actual feed, fertiliser, drugs, water, pumping, power and tools are conditional, not assumed. [fao-freshwater-pearl-1986]

Exclude natural pearl collection, marine pearl oysters, bead/gonadal implantation, blister/shell-attached pearls, artificial glass/plastic pearls, unharvested mussels/meat/shell as reference, mineral gemstones, drilling/polishing/bleaching/dye/wax/coating and mounted/strung jewellery. Wet tissue-bearing harvest is not released bare pearl. FAO marine harvesting subsequently uses distilled-water washing and refined-salt polishing; that worked endpoint is counterevidence, not permission to polish unworked pearls. Non-abrasive dirt removal cannot authorize surface modification; unknown treatment state must be resolved before acceptance. [unsd-cpc3-2025; fao-marine-pearl-1991]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.pearls-natural-or-cultured-and-unworked |
| classification_refs | CPC 3.0 38210; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38210.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Whole bare dried unworked freshwater mantle-tissue-grafted pearls without added bead. |
| excluded_products | Natural/marine/bead-nucleated/artificial/worked pearls; animal/meat/shell reference; jewellery. |
| representative_product | First-accepted bare pearl lot with actual net mass and declared measured moisture/grade. |
| production_route | Live sourcing; conditioning; donor mantle; tissue-only graft; recovery; pond grow-out; manual harvest; actual non-abrasive cleaning; drying; grading; first release. |
| market_state | Loose whole bare unworked pearls at first acceptance; packaging excluded from net pearl mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of whole bare unworked freshwater tissue-grafted pearls. |
| How much | 1 kg |
| How well | Declared taxon, tissue-only route, measured moisture/net mass, lot grade/acceptance, no surface modification. |
| How long or cycle | Complete observed cohort from live sourcing to first release; no fixed culture time or lifetime. |
| reference_flow_link | `finished_pearl` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pearls, natural or cultured and unworked `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | host and donor taxon; live-source provenance and provider boundary; freshwater site and route; tissue only and no added bead; cohort and opening/closing live stock; failures and mortality; harvest identity; bare whole unworked terminal; cleaning/drying history; measured moisture; net mass and count sampling range; actual grade/acceptance; first release gate and unique Q; WIP versus released FG; co-functions and allocation; actual packaging; service H and original Q_H; native and provider restrictions |

Native whole Product is natural or cultured unworked pearls, production mix at plant, treatment unspecified, Mass/kg; no CAS, fixed species, geography, bead, diameter or grade is imposed. Here use whole bare freshwater mantle-tissue-grafted pearls without added bead, separated from shell and tissue, non-abrasively cleaned only if actually necessary, dried to the declared measured moisture state and visually graded at first quality acceptance. Exclude drilling, grinding, salt polishing, bleaching, dye, wax, coating, mounting and stringing. Native broad treatment wording grants no permission for surface modification or certificate. Weigh net bare pearls on a calibrated balance, excluding tissue, shells, surface water, rejects and packaging. Sum unique first-release Q once, including pearls still in closing released FG; this reference output is 1 kg.

Every qualifier must be declared in consumable dataset/reference context. A broad compatible native family does not require exact SKU/species naming; hard material/form/route/type/media conflicts cannot be waived. No per-pearl mass, density, diameter, nacre thickness, yield, survival, dose, lifetime or certificate is invented.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Unique measured first-accepted net pearl Q includes closing released FG once. finished_pearl is 1 kg. |
| native_units | all inventory rows | native extensive property | native unit | Electrical MJ, actual material kg, water abstraction m3 and loose quicklime m3 remain distinct. No blanket Required Mass/kg for inventory. Convert raw units before attribution and sole quotient. |
| count_mass | count observations | Mass and count | kg; item | Measure net mass and traceable representative count for the same species/grade/moisture lot on a calibrated tare-free balance; retain full sampling range/configuration/uncertainty. Only that lot measured mass/count bridges item and kg. No diameter, density or native secondary coefficient. Inventory is not pre-normalized per pearl. |
| single_basis | all inventory rows | reference basis | per reference flow | Raw collection only; cards/aggregation refer to sole calc_quotient. Gross numerator is full V; attributable burden A is separate; service original Q_H. Q=0 retains loads without unit result. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | culture and harvest | Include the actual upstream live-source collection/nursery provider once, conditioning, donor sacrifice and internal mantle transfer, implantation, recovery, real pond husbandry, mortality, harvest, actual cleaning/drying/acceptance and all failed/zero-harvest/start-stop/idle/cleanup work. Never shrink this to purchased finished-pearl packing. | `fao-freshwater-pearl-1986` |
| boundary_q | first release and service | First quality acceptance is Q. Sum newly accepted net pearl mass once, including closing released FG. Do not add closing FG as production or deduct its manufacturing burden. Actual postrelease storage/packing/handling/shipping/rework is a separate original-cohort service ledger with observed H and original Q_H. Delivery, return and retest create no new Q; internal transfers cancel without new external procurement. | `ilcd-attributional-2010` |
| boundary_ecology | actual ecological interfaces | Ambient pond volume/filter feeding does not automatically create purchased water/feed, a Resource flow, negative CO2 or ecosystem credit. Measure real controlled gross water/return/net legs, phases/states and biological/C/Ca/N/P stocks/transfers. Natural ecological observations stay separate until compatible elementary identity and attribution are established. Unknown is not zero or an invented molecule. | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| boundary_extension | all actual atoms | Conditional cards do not assert an operation occurred. Before completeness add every actual missing feed, drug, salt, formulation, fuel, vessel, aerator, heat source, utility, packaging material, repair part, fluid or emission as its own specific article/species/direction with protocol and ownership. A whole purchased preparation is procured once, assay/active/carrier water only a subledger. Onsite mixing retains each real purchased material, energy, water and loss. Never hide actual inputs in other/zero. If external heat/steam actually occurs, separately collect heat MJ and full carrier mass, temperature/pressure/phase, supply/return enthalpy, water/energy ownership and actual returns under one provider convention; never invent a boiler or procure the same heat, fuel and steam twice. | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Provenanced intact live freshwater host/donor lots before implantation, at collection or receipt. |
| starting_condition_role | Declare actual wild-source/nursery provider and inherited burden. Upstream broodstock/breeding/host-fish/hatchery applies to the actual route, not an invented facility. |
| product_classification_scope | CPC 3.0 38210; declared freshwater tissue-only unworked terminal |
| recursive_input_rule | Purchased cultured animals/pearl WIP retain actual route and each inherited vector once. Purchased finished pearls are not production; their actual further service is separate with no new Q. |
| upstream_dataset_requirement | Compatible site/species/route/state/provider inventory; disclose unresolved burden, never zero or marine/meat substitution. |
| disclosure | Species/source/setting/time/cohort/WIP, real operations/water, terminal/Q/H/Q_H, co-functions, allocation, full gross and burden ownership, uncertainty/gaps. |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

Complete process context applies to every card. Include each real conditional exchange, keep unknown as unknown and add every real missing atom. Per-card native restrictions remain binding in every normalized use. Physical gross mass/volume is never scaled by burden allocation. Internal live stock, mantle tissue, water and WIP transfers match and cancel at the consolidated gate, not extra procurement or Q.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| culture | Live sourcing, grafting and pond culture | required | actual occurrence and full cohort | foreground_production | Q |
| harvest | Harvest, bare-pearl drying and first release | required | actual occurrence and full cohort | foreground_production | Q |
| service | Actual postrelease gate services | conditional | actual occurrence and full cohort | original_cohort_service | Q_H |

### Process: Live sourcing, grafting and pond culture (`culture`)

#### Inputs

##### Product flows

###### Wild mussels, live, fresh or chilled (`host_mussels`)

Native Product is wild mussels, live/fresh/chilled, unprocessed catch at landing quality, production mix at landing site, Mass/kg. Inclusive Mytilus/Perna examples and freshwater fishing ISIC do not restrict it to marine taxa. Use only evidenced intact live freshwater pearl mussels (FAO selects Lamellidens marginalis) with actual wild provenance; not oysters, marine spat, dead animals or processed meat. Record full wet shell-on mass, count, source, collection effort, transport and provider. Wild stock is not free of upstream burdens. Host/donor lots are disjoint; selection from one existing receipt is an internal transfer, not a second purchase.

- Selected flow: Wild mussels, live, fresh or chilled `539310bb-c39d-4c52-8d45-739583df15a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wild mussels, live, fresh or chilled (`donor_mussels`)

Native Product is wild mussels, live/fresh/chilled, unprocessed catch at landing quality, production mix at landing site, Mass/kg. Inclusive Mytilus/Perna examples and freshwater fishing ISIC do not restrict it to marine taxa. Use only evidenced intact live freshwater pearl mussels (FAO selects Lamellidens marginalis) with actual wild provenance; not oysters, marine spat, dead animals or processed meat. Record full wet shell-on mass, count, source, collection effort, transport and provider. Wild stock is not free of upstream burdens. Host/donor lots are disjoint; selection from one existing receipt is an internal transfer, not a second purchase.

- Selected flow: Wild mussels, live, fresh or chilled `539310bb-c39d-4c52-8d45-739583df15a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Alternating current (`electricity_culture`)

Conditional real customer-side grid supply below 1 kV, consumption mix to user, native location CN, reference Net calorific value/MJ. Here the native property represents electrical energy, not fuel mass. Convert metered kWh by 3.6 to MJ once. This UUID requires the matching CN interface; a Bangladesh or other site needs its actual verified local identity/provider. Do not substitute hydropower generation or high voltage. Keep actual idle, start/stop, failed operations, cleanup and any real pumping/drying electricity; no device is assumed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Tap water (`water_culture`)

Conditional real treated potable municipal water Product, production supply at plant, Mass/kg; source, treatment and provider need collection. Native secondary Volume coefficient 0.001 is not adopted as density. Any volume/mass bridge needs independently measured actual water density/state. Do not substitute tap water for pond/river/groundwater. Purchased treatment/supply once; carrier water inside a complete purchased preparation is not another purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Limestone (`limestone`)

Conditional real ground limestone for pond management. Native limestone Product, Mass/kg, has composition, purity, grade, extraction route, geography and provider unspecified. Calcareous-stone classification does not impose cement use or mesh grade. Measure the whole supplied mineral and assay; no assumed pure CaCO3, liming dose or inferred biological calcium uptake.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Quicklime, milled, loose (`quicklime`)

Conditional real unbagged milled CaO, CAS 1305-78-8, Product at plant, native reference Volume/m3. Measure loose bulk volume and independently measure this substance bulk density for any mass bridge; no water density or assumed packing. Not hydrated lime, limestone or purchased slurry. Actual onsite slaking retains separate real water, energy, loss and independently evidenced reaction-water changes; no prescribed dose.

- Selected flow: Quicklime, milled, loose `7bc0ad3c-fedc-42c0-8c2a-78ce48e5ebd8`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Calcium hydroxide powder (`calcium_hydroxide`)

Use this Product only for actually separately supplied industrial-grade white Ca(OH)2 powder matching the native route: primary crushing, washing, drying, secondary crushing, calcining, screening and lime hydration. CAS1305-62-0, production mix at plant, no fixed geography. Independently verify whole supplied powder, purity, moisture, provider and suitability for the actual pond use; no dose or biological-safety certification follows from industrial grade. Not flash-smelting byproduct, CaO, limestone, a chemical bundle or slurry. A purchased whole slurry needs its own complete preparation card, with no repeat purchase of contained water/active substance; actual onsite hydration counts only real separate CaO/water/energy/loss. The limestone taxonomy does not override explicit Ca(OH)2 name/CAS/hydration route or authorize raw-stone substitution. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: hydrated lime `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Urea (`urea`)

Only actual virgin agricultural urea synthesized from ammonia and CO2: Product, CAS57-13-6, white crystalline carbamide, Mass/kg, production mix at plant. Collect whole supply, purity, moisture and provider. Assay nitrogen is a component subledger, not another input or assumed ammonia/nitrate emission. FAO fertilisation possibility does not establish universal urea use or dose.

- Selected flow: Urea `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Collected cattle-manure preparation (`cattle_manure`)

Only actual collected cattle manure delivered for pond fertilisation; whole wet preparation and real bedding/carrier are procured once with prior burden/status. Grazing deposition and goat manure do not substitute. No guessed CH4/NH3/N/P species from total manure mass.

- Selected flow: Collected cattle-manure preparation
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Diesel fuel (`diesel`)

Only actual diesel for real equipment not included in a purchased service. Native Product Mass/kg has grade, formulation, density, heat value, refinery route, geography and provider unspecified. Keep actual engine, receipts/tank stocks/consumption and independent density/calorific evidence. Carrier kg and thermal MJ are linked dimensions, not two purchases. Add each real exhaust/intake species from evidence without fixed factors.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel shell opener (`opener_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel shell opener
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel shell opener (`opener_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel shell opener
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel graft knife (`graftknife_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel graft knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel graft knife (`graftknife_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel graft knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Handled incision knife (`incisionknife_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Handled incision knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Handled incision knife (`incisionknife_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Handled incision knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel graft carrier (`graftcarrier_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel graft carrier
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel graft carrier (`graftcarrier_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel graft carrier
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel hooked spatula (`spatula_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel hooked spatula
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Stainless-steel hooked spatula (`spatula_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Stainless-steel hooked spatula
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Metal pincher (`pincher_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Metal pincher
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Metal pincher (`pincher_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Metal pincher
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden mussel holder with clip (`holder_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden mussel holder with clip
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden mussel holder with clip (`holder_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden mussel holder with clip
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden graft cutting board (`board_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden graft cutting board
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden graft cutting board (`board_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden graft cutting board
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden shell-opening peg (`peg_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden shell-opening peg
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden shell-opening peg (`peg_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden shell-opening peg
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Polypropylene mussel tray (`tray_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Polypropylene mussel tray
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Polypropylene mussel tray (`tray_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Polypropylene mussel tray
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Synthetic polyurethane sponge (`sponge_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Synthetic polyurethane sponge
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Synthetic polyurethane sponge (`sponge_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Synthetic polyurethane sponge
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden recovery-cage frame (`cageframe_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden recovery-cage frame
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden recovery-cage frame (`cageframe_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden recovery-cage frame
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Polyethylene recovery-cage net (`net_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Polyethylene recovery-cage net
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Polyethylene recovery-cage net (`net_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Polyethylene recovery-cage net
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Pump (`pump_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. Native Pump is a fluid-moving mechanical Product at plant, Mass/kg, including water centrifugal/circulating pumps; an unrelated intimate-use synonym is not adopted. Actual water pump/provider must match. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Pump (`pump_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. Native Pump is a fluid-moving mechanical Product at plant, Mass/kg, including water centrifugal/circulating pumps; an unrelated intimate-use synonym is not adopted. Actual water pump/provider must match. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden collection boat (`boat_receipt`)

Conditional actual whole article receipt, with disjoint new/used sublots and prior burden; full gross custody V is not service burden. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden collection boat
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Wooden collection boat (`boat_service`)

Only real embodied service from this article to the observed cohort; actual use/intensity/capacity and evidenced capability determine its vector. No fixed life, whole machine per kg or repeated purchase for service. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Wooden collection boat
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A is actual embodied service attributed once. Use the sole quotient in section 8; no repeated whole-article purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Untreated wooden repair strip (`repairwood_in`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Untreated wooden repair strip
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Polyethylene repair mesh panel (`repairnet_in`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Polyethylene repair mesh panel
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Elastomer pump seal (`repairseal_in`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Elastomer pump seal
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Elementary flows

###### ground water (`groundwater_withdrawal`)

Conditional real direct groundwater abstraction: Elementary Resource water, CAS 7732-18-5, reference Volume/m3. Record actual source, full gross intake, return by receiver and net depletion separately. For the native country-dependent scarcity context use extraction country as process location; do not also add a scarcity-level flow for the same abstraction. Ambient pond volume is not automatic withdrawal. This is not purchased supply; provider abstraction already upstream is counted once.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### river water (`surfacewater_withdrawal`)

Conditional real direct RIVER-water abstraction: Elementary Resource water, CAS 7732-18-5, reference Volume/m3. Record actual source, full gross intake, return by receiver and net depletion separately. For the native country-dependent scarcity context use extraction country as process location; do not also add a scarcity-level flow for the same abstraction. Ambient pond volume is not automatic withdrawal. This is not purchased supply; provider abstraction already upstream is counted once. This UUID is specifically river water, not generic lake water, other pond water, groundwater or seawater; another actual source needs its own compatible identity and destination.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Atmospheric water vapour uptake (`humidity_culture`)

Only actual ordinary sorption/condensation into this process wet stock; not restricted to repair or cleaning. Independently measure moisture/state; not industrial steam or an emergy-labelled atmospheric-water Product. Full wet closing stock and actual influx coexist; deduplicate overlap with other real inlet terms only. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### Outputs

##### Waste flows

###### Pearl-culture process wastewater (`effluent_culture`)

Only real collected liquid wastewater transferred to an external treatment provider, one whole Waste outlet with measured composition/destination. Water and solute subledgers do not add to whole mass. Not manganese-slag washing or silicon aqueous output. No second elementary discharge for the same transfer; treatment/provider and final species once.

- Selected flow: Pearl-culture process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Dead whole freshwater pearl mussel (`mortality`)

Real host/donor deaths and failed/zero-harvest animals, counted and weighed; no assumed survival. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Dead whole freshwater pearl mussel
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Stainless-steel shell opener (`opener_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Stainless-steel shell opener
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Stainless-steel graft knife (`graftknife_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Stainless-steel graft knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Handled incision knife (`incisionknife_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Handled incision knife
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Stainless-steel graft carrier (`graftcarrier_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Stainless-steel graft carrier
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Stainless-steel hooked spatula (`spatula_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Stainless-steel hooked spatula
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Metal pincher (`pincher_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Metal pincher
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Wooden mussel holder with clip (`holder_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Wooden mussel holder with clip
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Wooden graft cutting board (`board_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Wooden graft cutting board
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Wooden shell-opening peg (`peg_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Wooden shell-opening peg
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Polypropylene mussel tray (`tray_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Polypropylene mussel tray
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Synthetic polyurethane sponge (`sponge_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Synthetic polyurethane sponge
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Wooden recovery-cage frame (`cageframe_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Wooden recovery-cage frame
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Polyethylene recovery-cage net (`net_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Polyethylene recovery-cage net
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Water pump (`pump_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Water pump
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Wooden collection boat (`boat_discard`)

Conditional real separate discard of this article, wet mass, new/used/repair origin and treatment. In a single mixed outlet retain its disjoint component pool, not another external Waste. This single actual article is not another material or a tool bundle. Verify actual supplied material/finish/form; whole article includes its components once. Real separate repair materials and installed fluids are additional atoms only when they occur; no tool/pump/boat/heater/feed is assumed from a conditional card.

- Selected flow: Waste Wooden collection boat
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste wooden repair strip (`repairwood_out`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Waste wooden repair strip
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste polyethylene repair mesh (`repairnet_out`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Waste polyethylene repair mesh
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste elastomer pump seal (`repairseal_out`)

Conditional actual separately received/removed single part of this exact material, never a whole cage/pump or a different polymer. Preserve new/used origin and full wet mass. Real influx stays even if retained in complete closing installed stock. X_in/out remove overlap with other real flow terms only; water/fluids remain separate. Actual work without permission or failing tests is still collected with original cohort and real hold/waste fate. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Waste elastomer pump seal
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_asset`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`evaporation_culture`)

Actual ordinary H2O gas loss, CAS7732-18-5, Elementary Mass/kg to non-urban air; the native includes a high-stack alternative, not asserted here. Do not adopt its heavy/tritiated-water/ice synonyms against ordinary H2O gas identity. Keep actual pond evaporation, drying and ordinary storage/handling water loss. Not discharge to water; not one residual fitting two unknowns.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Liquid water returned to freshwater (`water_return`)

Only actual controlled return to identified freshwater receiver; measure full gross volume, temperature, composition and independent density for mass closure. Net depletion does not replace this leg; no automatic entire pond exchange or Product steam/condensate return. Solute components are disjoint from whole effluent mass.

- Selected flow: Liquid water returned to freshwater
- Flow property / unit: Volume / m3
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_culture`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Ammonium ion (`ammonium_release`)

Use this Elementary flow only for independently established actual emission to a freshwater receiver; primary identity is NH4+, CAS 14798-03-9 with native Mass/kg. Measure actual species, phase, pH/analytical basis, concentration and cumulative flow or true rate/time. Total N/P, ammonia-nitrogen, COD/VOC or a residual does not establish ionic chemical mass. Different species/salts, isotopes, seawater, soil, air and long-term emissions are not interchangeable. Whole wastewater transfer to external treatment and final elementary emissions follow the real boundary once, never double counted; unresolved state/receiver is not assumed emission or zero.Native quaternary-ammonium, nitrogen-cation and deuterated aliases do not replace ordinary NH4+ established by the primary name/CAS. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: ammonium `fe0acd60-3ddc-11dd-aaa5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Nitrate ion (`nitrate_release`)

Use this Elementary flow only for independently established actual emission to a freshwater receiver; primary identity is NO3-, CAS 14797-55-8 with native Mass/kg. Measure actual species, phase, pH/analytical basis, concentration and cumulative flow or true rate/time. Total N/P, ammonia-nitrogen, COD/VOC or a residual does not establish ionic chemical mass. Different species/salts, isotopes, seawater, soil, air and long-term emissions are not interchangeable. Whole wastewater transfer to external treatment and final elementary emissions follow the real boundary once, never double counted; unresolved state/receiver is not assumed emission or zero. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: nitrate `4d9a8790-3ddd-11dd-8d68-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Orthophosphate ion (`phosphate_release`)

Use this Elementary flow only for independently established actual emission to a freshwater receiver; primary identity is PO4(3-), CAS 14265-44-2 with native Mass/kg. Measure actual species, phase, pH/analytical basis, concentration and cumulative flow or true rate/time. Total N/P, ammonia-nitrogen, COD/VOC or a residual does not establish ionic chemical mass. Different species/salts, isotopes, seawater, soil, air and long-term emissions are not interchangeable. Whole wastewater transfer to external treatment and final elementary emissions follow the real boundary once, never double counted; unresolved state/receiver is not assumed emission or zero.Only actual PO4 trianion is this species; HPO4/H2PO4 or total phosphorus cannot be relabelled without independent speciation and compatible flows. Native property → exact unit group → true reference unit: 93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg.

- Selected flow: phosphate `08a91e70-3ddc-11dd-9787-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Carbon dioxide gas (`co2_release`)

Conditional on independently established real boundary transfer. Measured CO2 and carbon origin/air compartment; shell/pearl calcification does not establish negative CO2 or credit. Stratosphere is not pond air. Retain concentration, cumulative volume or real rate/time, uncertainty and origin; no guessed molecule/amount from COD/VOC or elemental residual.

- Selected flow: Carbon dioxide gas
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_species`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

### Process: Harvest, bare-pearl drying and first release (`harvest`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_harvest`)

Conditional real customer-side grid supply below 1 kV, consumption mix to user, native location CN, reference Net calorific value/MJ. Here the native property represents electrical energy, not fuel mass. Convert metered kWh by 3.6 to MJ once. This UUID requires the matching CN interface; a Bangladesh or other site needs its actual verified local identity/provider. Do not substitute hydropower generation or high voltage. Keep actual idle, start/stop, failed operations, cleanup and any real pumping/drying electricity; no device is assumed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Tap water (`water_harvest`)

Conditional real treated potable municipal water Product, production supply at plant, Mass/kg; source, treatment and provider need collection. Native secondary Volume coefficient 0.001 is not adopted as density. Any volume/mass bridge needs independently measured actual water density/state. Do not substitute tap water for pond/river/groundwater. Purchased treatment/supply once; carrier water inside a complete purchased preparation is not another purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the manufacturing inherited burden vector after raw conversion and justified attribution. Use the sole quotient in section 8; full raw gross V remains separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_harvest`)

Only actual ordinary sorption/condensation into this process wet stock; not restricted to repair or cleaning. Independently measure moisture/state; not industrial steam or an emergy-labelled atmospheric-water Product. Full wet closing stock and actual influx coexist; deduplicate overlap with other real inlet terms only. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Pearls, natural or cultured and unworked (`finished_pearl`)

Native whole Product is natural or cultured unworked pearls, production mix at plant, treatment unspecified, Mass/kg; no CAS, fixed species, geography, bead, diameter or grade is imposed. Here use whole bare freshwater mantle-tissue-grafted pearls without added bead, separated from shell and tissue, non-abrasively cleaned only if actually necessary, dried to the declared measured moisture state and visually graded at first quality acceptance. Exclude drilling, grinding, salt polishing, bleaching, dye, wax, coating, mounting and stringing. Native broad treatment wording grants no permission for surface modification or certificate. Weigh net bare pearls on a calibrated balance, excluding tissue, shells, surface water, rejects and packaging. Sum unique first-release Q once, including pearls still in closing released FG; this reference output is 1 kg.

- Selected flow: Pearls, natural or cultured and unworked `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Uncooked freshwater mussel shell (`shell_product`)

Only actual separately marketed shell with a distinct function/status/receiver and burden decision; no free shell or credit. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Uncooked freshwater mussel shell
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Uncooked freshwater mussel soft tissue (`tissue_product`)

Only actual delivered co-function with status and destination; food/feed permission is not assumed. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Uncooked freshwater mussel soft tissue
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Waste flows

###### Pearl-culture process wastewater (`effluent_harvest`)

Only real collected liquid wastewater transferred to an external treatment provider, one whole Waste outlet with measured composition/destination. Water and solute subledgers do not add to whole mass. Not manganese-slag washing or silicon aqueous output. No second elementary discharge for the same transfer; treatment/provider and final species once.

- Selected flow: Pearl-culture process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste uncooked freshwater mussel shell (`shell_waste`)

Real segregated shell outlet only; cooked-mussel native and expert 70% estimate are not applicable. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Waste uncooked freshwater mussel shell
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste freshwater mussel soft tissue (`tissue_waste`)

Real separated donor trims/harvest tissue and treatment; not duplicate whole-animal mass or internal graft tissue. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Waste freshwater mussel soft tissue
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Mixed freshwater mussel shell and tissue waste (`mixed_biomass`)

One real combined shell/tissue outlet is one atomic Waste exchange; disjoint source pools retained, not also component Waste outputs. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Mixed freshwater mussel shell and tissue waste
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Rejected unworked pearl (`pearl_reject`)

Real rejects/samples/losses outside accepted Q retain manufacture/treatment burden; sales alone do not transfer it. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Rejected unworked pearl
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`evaporation_harvest`)

Actual ordinary H2O gas loss, CAS7732-18-5, Elementary Mass/kg to non-urban air; the native includes a high-stack alternative, not asserted here. Do not adopt its heavy/tritiated-water/ice synonyms against ordinary H2O gas identity. Keep actual pond evaporation, drying and ordinary storage/handling water loss. Not discharge to water; not one residual fitting two unknowns.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_harvest`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

### Process: Actual postrelease gate services (`service`)

#### Inputs

##### Product flows

###### Alternating current (`electricity_service`)

Conditional real customer-side grid supply below 1 kV, consumption mix to user, native location CN, reference Net calorific value/MJ. Here the native property represents electrical energy, not fuel mass. Convert metered kWh by 3.6 to MJ once. This UUID requires the matching CN interface; a Bangladesh or other site needs its actual verified local identity/provider. Do not substitute hydropower generation or high voltage. Keep actual idle, start/stop, failed operations, cleanup and any real pumping/drying electricity; no device is assumed.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; A is actual original-cohort service after raw-unit conversion. Use the sole quotient in section 8; keep full physical V separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Tap water (`water_service`)

Conditional real treated potable municipal water Product, production supply at plant, Mass/kg; source, treatment and provider need collection. Native secondary Volume coefficient 0.001 is not adopted as density. Any volume/mass bridge needs independently measured actual water density/state. Do not substitute tap water for pond/river/groundwater. Purchased treatment/supply once; carrier water inside a complete purchased preparation is not another purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is actual original-cohort service after raw-unit conversion. Use the sole quotient in section 8; keep full physical V separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Sewn Bag (`bag_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Native Sewn Bag Product is cotton fabric, fully or partially lined, consumption mix at consumer, Mass/kg; drawstring bag is an explicit synonym. Only actual whole lined cotton bag, not loose cloth, PE/PET liner or unlined bag. Native illustrative fabric quantities/areas do not set actual amounts. Whole bag/lining/thread are purchased once, component subledgers disjoint. Only actual event P: paid procurement receipt. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Sewn Bag `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Sewn Bag (`bag_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Native Sewn Bag Product is cotton fabric, fully or partially lined, consumption mix at consumer, Mass/kg; drawstring bag is an explicit synonym. Only actual whole lined cotton bag, not loose cloth, PE/PET liner or unlined bag. Native illustrative fabric quantities/areas do not set actual amounts. The whole bag, lining and thread have one actual upstream burden owner, component subledgers disjoint. Only actual event I: first non-purchased external ingress. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Sewn Bag `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Sewn Bag (`bag_er`)

Native Sewn Bag Product is cotton fabric, fully or partially lined, consumption mix at consumer, Mass/kg; drawstring bag is an explicit synonym. Only actual whole lined cotton bag, not loose cloth, PE/PET liner or unlined bag. Native illustrative fabric quantities/areas do not set actual amounts. Whole bag/lining/thread are purchased once, component subledgers disjoint. Only actual event ER: external return received. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Sewn Bag `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### corrugated board boxes (`carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Native corrugated board boxes Product, Mass/kg, production mix at plant, technology mix, explicitly 16.6% primary fibre and 83.4% recycled fibre. This conditional binding needs actual supplier composition matching those restrictions, never a default pearl packaging recipe. Different real cartons need a compatible identity. Whole assembled carton includes actual board and adhesive once. Only actual event P: paid procurement receipt. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### corrugated board boxes (`carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Native corrugated board boxes Product, Mass/kg, production mix at plant, technology mix, explicitly 16.6% primary fibre and 83.4% recycled fibre. This conditional binding needs actual supplier composition matching those restrictions, never a default pearl packaging recipe. Different real cartons need a compatible identity. Whole assembled carton includes actual board and adhesive once. Only actual event I: first non-purchased external ingress. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### corrugated board boxes (`carton_er`)

Native corrugated board boxes Product, Mass/kg, production mix at plant, technology mix, explicitly 16.6% primary fibre and 83.4% recycled fibre. This conditional binding needs actual supplier composition matching those restrictions, never a default pearl packaging recipe. Different real cartons need a compatible identity. Whole assembled carton includes actual board and adhesive once. Only actual event ER: external return received. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Pearls, natural or cultured and unworked (`fg_return`)

Native whole Product is natural or cultured unworked pearls, production mix at plant, unspecified treatment, Mass/kg with no fixed CAS/species/geography/grade. This card is only the actual external movement of already first-released whole bare tissue-grafted freshwater pearls without added bead or drilling/polishing/dye/wax/coating/mounting/stringing. Record full actual net pearl gross V, moisture/state, original lot/Q_H and observed H; do not assume return mass equals original dispatch or ignore actual added water/loss. It is not new production, procurement or Q. Changed/damaged/nonconforming returns retain real flows and original hold/waste fate under their own compatible atomic identity, not a false intact-Product binding.

- Selected flow: Pearls, natural or cultured and unworked `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Elementary flows

###### Atmospheric water vapour uptake (`humidity_service`)

Only actual ordinary sorption/condensation into this process wet stock; not restricted to repair or cleaning. Independently measure moisture/state; not industrial steam or an emergy-labelled atmospheric-water Product. Full wet closing stock and actual influx coexist; deduplicate overlap with other real inlet terms only. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

#### Outputs

##### Product flows

###### Sewn Bag (`bag_s`)

Native Sewn Bag Product is cotton fabric, fully or partially lined, consumption mix at consumer, Mass/kg; drawstring bag is an explicit synonym. Only actual whole lined cotton bag, not loose cloth, PE/PET liner or unlined bag. Native illustrative fabric quantities/areas do not set actual amounts. Whole bag/lining/thread are purchased once, component subledgers disjoint. Only actual event S: gross physical shipment. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Sewn Bag `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Sewn Bag (`bag_eo`)

Native Sewn Bag Product is cotton fabric, fully or partially lined, consumption mix at consumer, Mass/kg; drawstring bag is an explicit synonym. Only actual whole lined cotton bag, not loose cloth, PE/PET liner or unlined bag. Native illustrative fabric quantities/areas do not set actual amounts. Whole bag/lining/thread are purchased once, component subledgers disjoint. Only actual event EO: external return sent. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: Sewn Bag `a7ec2c0b-ce0e-4036-ad92-08a39f2b0d0f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### corrugated board boxes (`carton_s`)

Native corrugated board boxes Product, Mass/kg, production mix at plant, technology mix, explicitly 16.6% primary fibre and 83.4% recycled fibre. This conditional binding needs actual supplier composition matching those restrictions, never a default pearl packaging recipe. Different real cartons need a compatible identity. Whole assembled carton includes actual board and adhesive once. Only actual event S: gross physical shipment. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### corrugated board boxes (`carton_eo`)

Native corrugated board boxes Product, Mass/kg, production mix at plant, technology mix, explicitly 16.6% primary fibre and 83.4% recycled fibre. This conditional binding needs actual supplier composition matching those restrictions, never a default pearl packaging recipe. Different real cartons need a compatible identity. Whole assembled carton includes actual board and adhesive once. Only actual event EO: external return sent. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Pearls, natural or cultured and unworked (`fg_dispatch`)

Native whole Product is natural or cultured unworked pearls, production mix at plant, unspecified treatment, Mass/kg with no fixed CAS/species/geography/grade. This card is only the actual external movement of already first-released whole bare tissue-grafted freshwater pearls without added bead or drilling/polishing/dye/wax/coating/mounting/stringing. Record full actual net pearl gross V, moisture/state, original lot/Q_H and observed H; do not assume return mass equals original dispatch or ignore actual added water/loss. It is not new production, procurement or Q. Changed/damaged/nonconforming returns retain real flows and original hold/waste fate under their own compatible atomic identity, not a false intact-Product binding.

- Selected flow: Pearls, natural or cultured and unworked `a6d1d868-d12f-4b13-bdf6-0cb6a4f4eb5e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

##### Waste flows

###### Pearl-culture process wastewater (`effluent_service`)

Only real collected liquid wastewater transferred to an external treatment provider, one whole Waste outlet with measured composition/destination. Water and solute subledgers do not add to whole mass. Not manganese-slag washing or silicon aqueous output. No second elementary discharge for the same transfer; treatment/provider and final species once.

- Selected flow: Pearl-culture process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Discarded released unworked pearl (`fg_discard`)

Postrelease discard stays with original Q_H; it does not reverse Q or produce another output. Full physical V is never scaled by allocation. Ordinary waste/reject/sample sales are not automatic T_other.

- Selected flow: Discarded released unworked pearl
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

###### Waste Cotton lined sewn bag (`bag_w`)

Only real segregated waste cotton lined bags, with measured composition; a Product UUID cannot identify Waste. Only actual event W: external waste outlet. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.For actual co-collection, only mixed_packaging_waste is the total external outlet with one treatment provider; each origin_W is independently measured and disjoint, with no concurrent segregated-export card or extra treatment amount for the same material.

- Selected flow: Waste Cotton lined sewn bag
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Packaging waste, cardboard (`carton_w`)

Native cardboard packaging Waste at plant, GLO, treatment unspecified; its expert 2% estimate is not adopted. Only real segregated cardboard trim/damaged boxes; a co-collected mixed outlet is one whole Waste instead. Only actual event W: external waste outlet. A=V is its full real gross leg, not stock-corrected consumption, B_open+U-B_close, burden vector, net delivery or economic share. Use original Q_H over observed H, no new Q. P/I are mutually exclusive for the same physical incoming event, with one upstream owner for the whole article; ER is not automatic purchase. S includes gross shipments later returned. Full wet empty/attached-WIP/attached-FG/reusable opening and closing stock remains; internal reuse cancels. X only removes overlap with other real inlet/outlet terms, never new influx retained in closing stock. Gross disclosure adds no purchase/provider burden/credit; its true owner is attributed once separately. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.For actual co-collection, only mixed_packaging_waste is the total external outlet with one treatment provider; each origin_W is independently measured and disjoint, with no concurrent segregated-export card or extra treatment amount for the same material.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

###### Mixed cotton-bag and cardboard packaging waste (`mixed_packaging_waste`)

Only one actual combined outlet: one atomic whole Waste with disjoint cotton/lining/thread/cardboard source pools and measured total mass/composition. Component W remains in pool ledgers, not additional external exchanges. A=V complete real gross outlet; no stock/economic correction, extra purchase or credit. Treatment/provider once, original Q_H. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain.For actual co-collection, only mixed_packaging_waste is the total external outlet with one treatment provider; each origin_W is independently measured and disjoint, with no concurrent segregated-export card or extra treatment amount for the same material.

- Selected flow: Mixed cotton-bag and cardboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

###### water vapour (`evaporation_service`)

Actual ordinary H2O gas loss, CAS7732-18-5, Elementary Mass/kg to non-urban air; the native includes a high-stack alternative, not asserted here. Do not adopt its heavy/tritiated-water/ice synonyms against ordinary H2O gas identity. Keep actual pond evaporation, drying and ordinary storage/handling water loss. Not discharge to water; not one residual fitting two unknowns.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac07-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A=V is this complete actual gross leg. Use the sole quotient in section 8; service uses original Q_H over H.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_service`
- Sources: `fao-freshwater-pearl-1986`; `ilcd-attributional-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | all co-functions | Use only attributional modelling in the ILCD allocation-applicable context. Identify actual pearls, shells, tissue, other real co-functions and the common process gate. No free physical/economic choice, fixed ratio, free shells, avoided-product credit or ecosystem offset. | `ilcd-attributional-2010` |
| allocation_subdivision | each exchange | First isolate dedicated operations, batches, meters, materials/treatment and real or virtual subdivision. Exclusive grafting/pearl grading needs demonstrated exclusive function; do not assign all pond activity solely to pearls. Retain mortality/failure and ordinary treatment with the real cohort unless a justified distinct function/handover exists. | `ilcd-attributional-2010` |
| allocation_causality | each remaining burden dimension | Test the exchange-specific determining physical causal relationship: which function causes its type/amount and how does a quantified function change alter the exchange? Actual embodiment, intensity, occupied capacity and duration may matter, not arbitrary total output-mass share. Different exchanges may have different evidenced drivers; complete gross masses/volumes remain unchanged. | `ilcd-attributional-2010` |
| allocation_residual | true residual joint burden | Only for real residual after subdivision and determining causality use actual same-gate, same-state, same-quantity-basis, same-geography contemporaneous market values. Derive gate value transparently from later processed/packed/delivered prices by removing actual added services. Disclose dates/status/uncertainty/sensitivity. Waste or unsold status is not automatic zero, credit or a fixed ratio. Allocated vectors sum to the unallocated total. | `ilcd-attributional-2010` |
| allocation_losses | ordinary wastes and handover | Ordinary manufacturing waste/rejects/breakage/failed grafts/samples and their treatment are not T_other merely because exported or sold. Transfer a vector only for a real other cohort/function with justified allocation and recorded one-time handover; all gross legs stay complete. One physical outlet cannot simultaneously be both Product and Waste or receive automatic expansion credit. | `ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols collect unnormalized raw observations. Aggregation label per reference flow specifies the final basis only; collection does not divide by Q. Each tagged dimension uses the sole calc_quotient once after conversion and its applicable numerator rule. Gross V never receives stock correction or economic shares.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | harvest | finished_pearl | measurement | cohort; taxon; terminal; net_mass; count; moisture; grade; acceptance; first_release_flag; opening_closing_FG | Calibrated tare-free net pearl weighing with representative moisture/count sampling of the same species/grade/state lot and full range/uncertainty. Link unique first acceptance. Retain actual Q sums including closing accepted FG, never theoretical pearl yield; Q=0 retained. | kg; item | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_live | culture | host_mussels; donor_mussels | measurement | species; source; wet_mass; live_count; grafts; donor_selection; mortality; failure; harvest; opening_closing_live_WIP; inherited_vectors; count_balance; measured_wet_biomass_open_close; actual_biological_influx_outflux; independent_growth_state; disjoint_shell_tissue_pearl_subaccounts | Trace each actual cohort through receipt, donor sacrifice, implantation/recovery, deaths/failures and harvest. Opening+receipts+real births=closing+deaths+harvest+true external transfers is a measured LIVE-ANIMAL COUNT reconciliation only; actual recruitment/births require evidence and do not imply a hatchery. Reconcile wet biomass separately through full wet opening/closing stocks and independently observed actual material/water, growth, respiration, excretion, mortality and external-transfer mass flows; never apply the count equation to kg. Shell, tissue and unseparated pearls are disjoint subaccounts of whole animals, not additional mass added to the whole animal. Living animals and pearls still inside them are WIP, not released FG; graft and accepted-pearl counts are independent, with no theoretical conversion. Retain every entity stock and its exchange-specific inherited vector. | kg; item | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_energy_culture | culture | individual_carrier | measurement | meter; interval; cumulative_amount; actual_rate_time; device; start_stop_idle; tank_stocks; fuel_mass; density; heating_value; provider_scope | Use real calibrated meter/fuel/tank records including failed/idle/cleanup loads. Convert units once; independently measure needed density/heat value. Purchased service fuel and direct fuel have disjoint owners. No fixed pump, boiler, steam, thermal duty or emission factor. | MJ; kWh; kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_energy_harvest | harvest | individual_carrier | measurement | meter; interval; cumulative_amount; actual_rate_time; device; start_stop_idle; tank_stocks; fuel_mass; density; heating_value; provider_scope | Use real calibrated meter/fuel/tank records including failed/idle/cleanup loads. Convert units once; independently measure needed density/heat value. Purchased service fuel and direct fuel have disjoint owners. No fixed pump, boiler, steam, thermal duty or emission factor. | MJ; kWh; kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_energy_service | service | individual_carrier | measurement | meter; interval; cumulative_amount; actual_rate_time; device; start_stop_idle; tank_stocks; fuel_mass; density; heating_value; provider_scope | Use real calibrated meter/fuel/tank records including failed/idle/cleanup loads. Convert units once; independently measure needed density/heat value. Purchased service fuel and direct fuel have disjoint owners. No fixed pump, boiler, steam, thermal duty or emission factor. | MJ; kWh; kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_water_culture | culture | each_water_phase_direction | measurement | source; receiver; gross_intake; gross_return; net; phase; temperature; density; pond_stock; humidity; rainfall; evaporation; X_in; X_out; owner; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | Cumulative volume once, integrate only actual rates; independent actual-state density. Retain real supply/rain/overflow/seepage/return and add each real missing phase/direction. Ambient pond volume is not automatically withdrawal. Ordinary sorption/loss and repair/cleaning water coexist with full wet closing stock; X removes overlap only. Whole preparations contain carrier water once. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain. | kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_water_harvest | harvest | each_water_phase_direction | measurement | source; receiver; gross_intake; gross_return; net; phase; temperature; density; pond_stock; humidity; rainfall; evaporation; X_in; X_out; owner; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | Cumulative volume once, integrate only actual rates; independent actual-state density. Retain real supply/rain/overflow/seepage/return and add each real missing phase/direction. Ambient pond volume is not automatically withdrawal. Ordinary sorption/loss and repair/cleaning water coexist with full wet closing stock; X removes overlap only. Whole preparations contain carrier water once. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain. | kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_water_service | service | each_water_phase_direction | measurement | source; receiver; gross_intake; gross_return; net; phase; temperature; density; pond_stock; humidity; rainfall; evaporation; X_in; X_out; owner; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | Cumulative volume once, integrate only actual rates; independent actual-state density. Retain real supply/rain/overflow/seepage/return and add each real missing phase/direction. Ambient pond volume is not automatically withdrawal. Ordinary sorption/loss and repair/cleaning water coexist with full wet closing stock; X removes overlap only. Whole preparations contain carrier water once. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain. | kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_chemical | culture | each_whole_preparation | measurement | supplier; CAS; form; whole_preparation; assay; active; carrier; moisture; opening_closing; receipts; dose; losses; onsite_mixing; burden_owner | Measure whole purchased preparation once; active/assay/carrier are disjoint subledgers. Onsite recipes retain each real purchased ingredient plus actual water/energy/loss. Source lime/fertiliser wording supplies no exact chemistry or dose; add any actual feed/drug/salt atom separately before completeness. | kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_species | culture | each_actual_species | measurement | species; CAS; phase; origin; receiver; concentration; integrated_volume; true_rate_time; uncertainty; indicators; biological_element_pools | Independently identify and sample actual molecules/ions and receiving compartments. Total N/P, ammonia-nitrogen, COD, VOC are indicators, not inferred NH4/NO3/PO4/CO2 mass. Record real biological carbon/calcium/energy without inventing Resource flows or negative CO2. One residual cannot fit water and another unknown. | kg; m3 | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_outputs_culture | culture | each_real_product_or_waste | measurement | cohort; wet_mass; dry_fraction; status; destination; shell_tissue_pearl_split; mixed_source_pools; treatment; inheritance; Q_H | Weigh each actual separate outlet and disjoint source pools for one mixed outlet. Track complete live/whole mussel/shell/tissue/bare pearl mass and independent C/Ca/N/P with real free/structural/reaction water. No assumed shell fraction or pearl yield. Ordinary treatment/loss remains with original cohort absent justified one-time handover. | kg; item | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_outputs_harvest | harvest | each_real_product_or_waste | measurement | cohort; wet_mass; dry_fraction; status; destination; shell_tissue_pearl_split; mixed_source_pools; treatment; inheritance; Q_H | Weigh each actual separate outlet and disjoint source pools for one mixed outlet. Track complete live/whole mussel/shell/tissue/bare pearl mass and independent C/Ca/N/P with real free/structural/reaction water. No assumed shell fraction or pearl yield. Ordinary treatment/loss remains with original cohort absent justified one-time handover. | kg; item | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_outputs_service | service | each_real_product_or_waste | measurement | cohort; wet_mass; dry_fraction; status; destination; shell_tissue_pearl_split; mixed_source_pools; treatment; inheritance; Q_H | Weigh each actual separate outlet and disjoint source pools for one mixed outlet. Track complete live/whole mussel/shell/tissue/bare pearl mass and independent C/Ca/N/P with real free/structural/reaction water. No assumed shell fraction or pearl yield. Ordinary treatment/loss remains with original cohort absent justified one-time handover. | kg; item | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_asset | culture | each_single_article_and_repair_atom | measurement | article; actual_material; new_used_repair; full_wet_mass; installed_fluid; opening_closing; receipts_returns_outlets; actual_use_capacity; service_vector; unused_charge; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider | Keep full gross custody for each asset/part/fluid separate from embodied service. Weigh complete real same-configuration articles; no fixed life/item-to-kg guess. Retained new parts/water remain actual influx plus full wet closing mass. X only removes duplicate flow terms. Real external reusable returns require their own Product outlet, separately from discard. Add each actual separate repair/fluid atom, not a bundle. X subtracts only a proven same-event/material duplicate in another actual OTHER same-side flow; never a stock, the opposite side, card presence or real material/water retained at closing. True F_in/F_out and full wet stocks both remain. | kg; item; h | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_pack | service | bag_p; bag_i; bag_er; bag_s; bag_eo; bag_w; carton_p; carton_i; carton_er; carton_s; carton_eo; carton_w; mixed_packaging_waste | measurement | material_pool; P; I; ER; S; EO; W; owner; whole_article; wet_empty_attachedWIP_attachedFG_reusable_O_C; repair_water_X; Q_H; H; F_in; F_out; X_in; X_out; same_side_OTHER_event; full_wet_stock; independent_origin_W; single_receiver_provider ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | For each actual packaging material or whole-article pool O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C includes full wet empty, attached-WIP, attached-FG and reusable stock; S is gross shipment, never Q or net delivery. P and I are mutually exclusive for the same physical incoming event, independent of burden shares. F_in/F_out are independently measured true material or water additions/removals from actual repair, cleaning or ordinary sorption/loss, with event identity, phase and destination; never residual-fitting terms. X_in/X_out subtracts only the exact event/material amount proved duplicated in another actual OTHER incoming/outgoing flow on the SAME side. Never subtract a stock, the opposite side, mere card presence or real ingress retained in C. Complete wet articles and a mutually exclusive component bridge are alternative ledgers; internal transfers/reuse cancel once. Real segregated waste departures use their own complete card; one actual mixed_packaging_waste outlet has one measured total and one receiver/treatment provider, with independently measured disjoint origin_W subaccounts that sum to that total and are not additional exported exchanges or treatment amounts. Unknown origins remain unresolved, no invented mixture. Whole bag/lining/thread and complete preparations are procured once; actual burden ownership and allocation stay separate from full gross V.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_burden_culture | culture | each_burden_vector | measurement | exchange; cohort; upstream_owner; raw_live_WIP_open_close; used_unused; transfers; Q; Q_H; H; actual_postwork; permission; posttests; acceptance; disposition | Trace inherited exchange vectors through live/WIP stocks and first release, then actual services on original cohort. Real rework needs manufacturer/spec permission, postwork tests/acceptance/disposition. Work already performed without permission or failing tests still retains all real flows/loads and original hold/waste fate, not zero. Ordinary humidity change requires no invented work permission. | native unit; kg; h | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_burden_harvest | harvest | each_burden_vector | measurement | exchange; cohort; upstream_owner; raw_live_WIP_open_close; used_unused; transfers; Q; Q_H; H; actual_postwork; permission; posttests; acceptance; disposition | Trace inherited exchange vectors through live/WIP stocks and first release, then actual services on original cohort. Real rework needs manufacturer/spec permission, postwork tests/acceptance/disposition. Work already performed without permission or failing tests still retains all real flows/loads and original hold/waste fate, not zero. Ordinary humidity change requires no invented work permission. | native unit; kg; h | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |
| cp_burden_service | service | each_burden_vector | measurement | exchange; cohort; upstream_owner; raw_live_WIP_open_close; used_unused; transfers; Q; Q_H; H; actual_postwork; permission; posttests; acceptance; disposition | Trace inherited exchange vectors through live/WIP stocks and first release, then actual services on original cohort. Real rework needs manufacturer/spec permission, postwork tests/acceptance/disposition. Work already performed without permission or failing tests still retains all real flows/loads and original hold/waste fate, not zero. Ordinary humidity change requires no invented work permission. | native unit; kg; h | each event and opening/closing | complete observed cohort and actual H including failures/zero output | actual supplier, pond, operation and gate | per reference flow | calibration; original logs; sampling; provider scope; uncertainty; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | U is unnormalized raw observation after one valid unit conversion. kWh*3.6=MJ. Cumulative gas/liquid volume is not multiplied by time again; integrate only a true rate. Independently measure the actual substance/phase/state density and calorific value if needed; no secondary-property density or theoretical count yield. | raw records; unit; state | U | `fao-freshwater-pearl-1986` |
| calc_manufacturing | all inventory rows | For burden dimensions only: A=B_open+U_attributed-B_close-T_other. Terms are exchange-specific inherited vectors. B_close contains raw/live-WIP/unreleased pearls and unused unassigned stores/charges only, never closing released pearl FG. T_other needs real other function/cohort plus justified recorded one-time handover; ordinary waste/reject/sample sales are not T_other. If U is already stock-corrected consumption, reconcile and eliminate overlapping stock terms once. Never apply this to gross cards. | B_open; U_attributed; B_close; T_other | A | `ilcd-attributional-2010` |
| calc_service | all inventory rows | For performed postrelease service over observed H, A is actual service assigned to original cohort plus used prior service vector; Q denotes original Q_H. Closing FG never reverses performed service. Carry only unused/unassigned service/charges. Return/retest/rework adds only actual incremental service and no new manufacturing Q. | H; Q_H; actual service; unused unassigned charge | A | `ilcd-attributional-2010` |
| calc_asset | all inventory rows | Determine embodied service A from real deployment/use/intensity/capacity and evidenced service capability under subdivision/causality/residual allocation. Keep full whole-asset/part/fluid gross custody and wet installed stocks separately. No whole machine per kg, fixed life, duplicate provider purchase or automatic retirement credit. Only unused/unassigned vector carries; closing pearl FG does not remove performed service. | asset vector; actual use; capacity; cohort | A | `ilcd-attributional-2010` |
| calc_gross | all inventory rows | Every explicitly gross card uses A=V, its complete actual physical leg in native extensive units. No stock correction, B_open+U-B_close, economic share, burden vector or net delivery changes V. X_in/out eliminate only overlaps with other real inlet/outlet terms; retained additions remain influx plus full closing wet mass. Gross q is disclosure, never extra purchase/provider multiplier/credit; true burden owner is attributed once independently. X follows calc_pack: subtract only a proven same-event/material duplicate in another OTHER same-side flow. Real F increments and complete wet closing stock coexist; neither a stock nor a burden vector replaces a physical flow. | V; actual direction; disjoint source pools | A | `ilcd-attributional-2010` |
| calc_quotient | all inventory rows | q=A/Q. Execute this sole quotient once after raw conversion and the one applicable tagged burden/service/gross numerator rule. Manufacturing Q is unique first-accepted net pearl kg; service uses original Q_H over observed H. Reference output is 1 kg. Q=0 preserves every real load/physical leg with no unit q. Cards and aggregation reference this same operation and never divide q again. | A; Q; Q_H; H | q | `ilcd-attributional-2010` |
| calc_physical | all inventory rows | At manufacture, released-FG and consolidated gates separately: full wet opening stock+all real gross inflows=full wet closing stock+all real gross outflows, with only independently evidenced transformations and uncertainty. Internal transfers cancel. Reconcile live animals/grafts/shell/tissue/bare pearls and independent C/Ca/N/P pools; no indicator-to-molecule guess or two-unknown fit from one residual. Free/structural/reaction water and actual phases remain distinct; no economic scaling of physical totals. | full wet opening closing; all gross legs; independent phase and element observations | physical reconciliation | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| calc_pack | all inventory rows | For each actual packaging material or whole-article pool O + P + I + ER + F_in - X_in = C + S + EO + W + F_out - X_out. O/C includes full wet empty, attached-WIP, attached-FG and reusable stock; S is gross shipment, never Q or net delivery. P and I are mutually exclusive for the same physical incoming event, independent of burden shares. F_in/F_out are independently measured true material or water additions/removals from actual repair, cleaning or ordinary sorption/loss, with event identity, phase and destination; never residual-fitting terms. X_in/X_out subtracts only the exact event/material amount proved duplicated in another actual OTHER incoming/outgoing flow on the SAME side. Never subtract a stock, the opposite side, mere card presence or real ingress retained in C. Complete wet articles and a mutually exclusive component bridge are alternative ledgers; internal transfers/reuse cancel once. Real segregated waste departures use their own complete card; one actual mixed_packaging_waste outlet has one measured total and one receiver/treatment provider, with independently measured disjoint origin_W subaccounts that sum to that total and are not additional exported exchanges or treatment amounts. Unknown origins remain unresolved, no invented mixture. Whole bag/lining/thread and complete preparations are procured once; actual burden ownership and allocation stay separate from full gross V. | O; P; I; ER; C; S; EO; W; F_in; F_out; X_in; X_out; same_side_OTHER_event; origin_W; single_receiver_provider | packaging reconciliation | `ilcd-attributional-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Whole unworked pearl Product identity is required; each auxiliary obeys its own material/CAS/form/route/type/phase/geography/media/property restrictions. Unknown auxiliary/provider is disclosed, not zero or another family. | supplier/native context; taxon; terminal tests |
| dq_coverage | cohorts and H | Capture all life cohorts, raw/WIP, deaths/failures/zero harvest/idle/cleanup and inherited vectors; separate released FG and actual H. No theoretical pearl rate or timeline as output. | linked live/release/service registers |
| dq_measurement | each dimension | Require calibration, representative sample range, original unit/state and uncertainty; totals/components/elements/indicators do not double count. Unknown actual amounts prevent complete site results. | raw meter/scale/sample records |
| dq_allocation | burden dimensions | Retain raw/attributed vectors, causal justification, residual same-gate market evidence if needed, ownership and sensitivity. Conditional cards are not observed factory quantities. | allocation ledger and actual scope |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_terminal | finished_pearl | Reject whole animal/shell/meat/gemstone/artificial/worked/mounted reference. Confirm actual bare unworked tissue-grafted freshwater state and compatible whole native Product. A real missing core identity or terminal prevents usable guidance. | `unsd-cpc3-2025`; `fao-freshwater-pearl-1986`; `fao-marine-pearl-1991` |
| validation_q | all rows | Q includes closing released FG once, without extra FG production or burden deduction. H uses original Q_H; real unpermitted/failed work stays with actual hold/waste, not zero. | `ilcd-attributional-2010` |
| validation_measurement | all inventory rows | Execute all finite declared-reference checks. Preserve complete atomic rows, native units and sole quotient. A method check verifies neither future activity amounts nor science; unsupported relationships remain review-required. | `ilcd-attributional-2010` |
| validation_balance | all gates | Reconcile living cohorts, WIP/FG, full physical manufacture/FG/consolidated gates, packaging six legs, assets/repairs/water and independently relevant elements. No two-unknown residual, double provider, whole/component duplicate, ordinary waste burden subtraction or calcification CO2 credit. | `fao-freshwater-pearl-1986`; `ilcd-attributional-2010` |
| validation_evidence | all rules and source use | Every source retains actual product/process/route/state/need and limits. Freshwater manual provides no universal dose/yield/time; marine polishing is excluded; ILCD supports allocation only. Report ordinary auxiliary/provider gaps separately from true core holds. Mechanical checks approve no mapping/science/translation/publication. | `fao-freshwater-pearl-1986`; `fao-marine-pearl-1991`; `ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Route-specific attributional first-acceptance production plus separately identified actual original-cohort services; complete raw/gross and burden-owner bridge required. |
| excluded_use | Default factors, generic pearl industry average, natural/marine/worked extrapolation, certification, avoided credits or complete-site claims without actual measurements. |
| required_metadata | host and donor taxon; live-source provenance and provider boundary; freshwater site and route; tissue only and no added bead; cohort and opening/closing live stock; failures and mortality; harvest identity; bare whole unworked terminal; cleaning/drying history; measured moisture; net mass and count sampling range; actual grade/acceptance; first release gate and unique Q; WIP versus released FG; co-functions and allocation; actual packaging; service H and original Q_H; native and provider restrictions |
| required_quality_disclosure | Measured/unknown, conditional exchanges, ordinary auxiliary/provider gaps, any true core hold, full gross/burden reconciliation, representativeness, uncertainty and unreviewed scope. |
| update_trigger | Terminal/treatment, species/route/provider, reference property, real extra atom, cohort gate, allocation or evidence changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Version 3.0 Explanatory Notes, 30 June 2025, p.189; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38210 unworked terminal and adjacent 38220 worked pearls / 38240 jewellery; classification only, no recipe. |
| fao-freshwater-pearl-1986 | handbook | R. Pagcatipunan, FAO TCP/BGD/4508, Technical Assistance on Pearl Culture in Bangladesh (1986), Appendix 1 sections 2–6.7 and Figures 1–7; https://www.fao.org/4/S2622E/S2622E05.htm | Qualitative live source, donor mantle tissue-only route, recovery, pond care/mortality, harvest/drying; adjacent natural/artificial/gonadal routes as exclusions. No numerical recipe, universal yield/time or allocation. |
| fao-marine-pearl-1991 | handbook | FAO/UNDP Regional Seafarming Development and Demonstration Project, Pearl Oyster Farming and Pearl Culture (1991), Chapter XIII 13.1–13.3; https://www.fao.org/4/ab726e/AB726E13.htm | Counterevidence: marine bead implantation, chemical recovery and refined-salt polishing cannot be spliced into this freshwater tissue-only unworked route. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA – Detailed guidance, first edition March 2010, 7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional applicability, subdivision, exchange-specific determining causality, residual same-gate/state market value and reconciliation; not pearl production quantities. |
