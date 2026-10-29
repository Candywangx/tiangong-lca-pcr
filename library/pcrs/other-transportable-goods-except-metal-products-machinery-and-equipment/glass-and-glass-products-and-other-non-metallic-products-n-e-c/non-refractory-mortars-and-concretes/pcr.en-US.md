---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-mortars-and-concretes
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Central-mixed fresh unreinforced Portland-cement concrete

## 1. Scope and Applicability

This attributional PCR covers complete plant manufacture of one declared ordinary normal-weight unreinforced Portland-cement concrete mixture: supplied whole dry cement; natural fine sand and natural coarse gravel; separately measured mixing water; receipt and storage; calibrated weighing and moisture adjustment; complete central wet mixing; fresh-product checks and unique first plant quality release. Include real handling energy, dust control, washout, tests, failed batches, start/stop, idle periods, cleanup and permitted rework. It is a technical synthesis of EPA process guidance and NRMCA producer quality guidance, not a claim about one order, SKU or factory. No mix recipe, water/cement ratio, strength, density, hydration degree, lifetime, recycling yield or carbon credit is prescribed. `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`

Exclude clinker/cement manufacture inside this foreground; mortar and dry mixes; refractory or bituminous mixtures; foamed/lightweight/heavyweight or reinforced products; precast/cured concrete articles; truck-only mixing and shrink mixing needing completion after this gate; site placement/compaction/curing and installed construction; deliberate factory-added SCMs or chemical admixtures and deliberate thermal conditioning. Such route changes require actual evidence and an applicability reassessment with every additional purchased whole formulation, raw ingredient, energy use and loss. A compatible broader PCR may later extend the method; this selected route does not cover the whole classification leaf. Purchased finished concrete cannot replace manufacture.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.non-refractory-mortars-and-concretes |
| classification_refs | CPC 3.0 37510; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | One declared central-mixed fresh unreinforced normal-weight Portland-cement concrete mixture from whole cement, natural sand, natural coarse gravel and water |
| excluded_products | Exclude clinker/cement manufacture inside this foreground; mortar and dry mixes; refractory or bituminous mixtures; foamed/lightweight/heavyweight or reinforced products; precast/cured concrete articles; truck-only mixing and shrink mixing needing completion after this gate; site placement/compaction/curing and installed construction; deliberate factory-added SCMs or chemical admixtures and deliberate thermal conditioning. Such route changes require actual evidence and an applicability reassessment with every additional purchased whole formulation, raw ingredient, energy use and loss. A compatible broader PCR may later extend the method; this selected route does not cover the whole classification leaf. Purchased finished concrete cannot replace manufacture. |
| representative_product | Central-mixed fresh unreinforced Portland-cement concrete |
| production_route | Whole supplies → receipt/storage → weighing/moisture adjustment → complete central wet mixing → fresh QC/unique first release; controls and asset service retained |
| market_state | Fresh wet unhardened hydraulic concrete at the declared plant discharge/QC gate; no installed structure or verified cured-strength claim |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared fresh hydraulic mixture for downstream use at the plant gate; no functional equivalence across recipes, strength classes or installed structures |
| How much | 1 kg |
| How well | site and reporting period; ordinary Portland-cement binder specification and whole supplied cement ownership; natural fine-sand and coarse-gravel origins and grading; actual separately supplied ingredients and supply forms; no deliberate supplementary cementitious material or chemical admixture in this selected route; central complete wet mixing before first release; no steel reinforcement or manufactured component; actual mixture designation and permitted adjustments; aggregate free moisture and absorption; measured wet net first-release mass and timestamp; fresh slump and air content and temperature and density tests where required by the actual specification; later strength-test status without claiming cured strength at sale; water phases and hydration evidence; unique first-release lot/cohort and original Q_c; opening/closing raw and WIP inherited exchange vectors; released FG stock and true return state; gross shipments and no repeat production; service horizon h and actual incremental services; electricity voltage and supply geography; each fuel and atmospheric species where actually used; packaging ingress and upstream ownership; asset and installed-fluid stocks; actual supplier and receiving media |
| How long or cycle | One unique first fresh quality release of the actual cohort; no assumed service life or fixed workable duration |
| reference_flow_link | `first_release_concrete` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Concrete `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and reporting period; ordinary Portland-cement binder specification and whole supplied cement ownership; natural fine-sand and coarse-gravel origins and grading; actual separately supplied ingredients and supply forms; no deliberate supplementary cementitious material or chemical admixture in this selected route; central complete wet mixing before first release; no steel reinforcement or manufactured component; actual mixture designation and permitted adjustments; aggregate free moisture and absorption; measured wet net first-release mass and timestamp; fresh slump and air content and temperature and density tests where required by the actual specification; later strength-test status without claiming cured strength at sale; water phases and hydration evidence; unique first-release lot/cohort and original Q_c; opening/closing raw and WIP inherited exchange vectors; released FG stock and true return state; gross shipments and no repeat production; service horizon h and actual incremental services; electricity voltage and supply geography; each fuel and atmospheric species where actually used; packaging ingress and upstream ownership; asset and installed-fluid stocks; actual supplier and receiving media |

Every qualifier must be declared in metadata, process notes, product description or reference-flow comments. The reference UUID identifies a broad manufactured Concrete Product family at plant by mixing, on Mass/kg. Its generic comment also mentions asphalt and subsequent hardening; this PCR restricts it to the hydraulic-cement fresh mixture before downstream hardening, with no asphalt or shaped precast terminal. Its classification label points to prefabricated structural components; that isolated classification discrepancy does not establish a precast physical identity and is disclosed rather than copied as scope. No CAS, fixed strength, density, reinforcement, geometry or geography is native to this selected family. The supplied mixture and this plant gate must be established independently; a cured-component or site-cast provider is incompatible. All required qualifiers apply to the reference and to every inventory use of this family.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is independently weighed total net wet concrete in uniquely first-released lots; cp_first_release_concrete records Q. All inventory cards are per 1 kg reference flow; first_release_concrete = 1 kg. Closing released FG is already included once. No dry-solids, nominal load volume, net dispatch, packaging, samples withdrawn before release or repeat acceptance enters Q. |
| native_numerators | each inventory exchange | Actual native extensive property | kg or MJ or m3 or item as declared | Mass/kg is not imposed on electricity MJ or machine count item. Preserve native extensive units and separately retain fuel carrier mass/heat, wet physical mass and installed-fluid stocks. Unit conversion and actual allocation precede normalize_once. |
| fresh_volume_conversion | reference product and water | Mass and independently measured Volume | kg and m3 | Mass is the reference. Where a real raw volume is used, independently measure density of that same actual mixture/fluid at its temperature, pressure, air and moisture state using a calibrated volume and net mass; retain method/sample scope and uncertainty. No native 2400 kg/m3 concrete, 1000 kg/m3 water or other secondary-property coefficient is a measurement. No volume-times-time for an integrated reading. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Burden-bearing whole cement, natural fine sand, natural coarse gravel and actual utilities/maintenance supplies entering the plant; declare wet state and actual supplier/inbound-leg gate |
| starting_condition_role | supplied_material |
| product_classification_scope | CPC 3.0:37510; narrower |
| recursive_input_rule | No bought-finished-concrete substitution for manufacture. Internal recovered concrete-derived water/aggregate keeps source vectors and cancels once; actual external same-category feed needs an independent boundary/applicability decision |
| upstream_dataset_requirement | One compatible upstream provider and burden owner per whole supply and actual waste-treatment service; match recipe/form/route/geography/year and packaging/transport coverage |
| disclosure | site and reporting period; ordinary Portland-cement binder specification and whole supplied cement ownership; natural fine-sand and coarse-gravel origins and grading; actual separately supplied ingredients and supply forms; no deliberate supplementary cementitious material or chemical admixture in this selected route; central complete wet mixing before first release; no steel reinforcement or manufactured component; actual mixture designation and permitted adjustments; aggregate free moisture and absorption; measured wet net first-release mass and timestamp; fresh slump and air content and temperature and density tests where required by the actual specification; later strength-test status without claiming cured strength at sale; water phases and hydration evidence; unique first-release lot/cohort and original Q_c; opening/closing raw and WIP inherited exchange vectors; released FG stock and true return state; gross shipments and no repeat production; service horizon h and actual incremental services; electricity voltage and supply geography; each fuel and atmospheric species where actually used; packaging ingress and upstream ownership; asset and installed-fluid stocks; actual supplier and receiving media |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_route | all processes | Carry one compatible upstream burden for each whole supplied material plus actual inbound legs not already included. Whole cement is one purchase: clinker, gypsum, CaO and cement assay constituents are not additional purchases. Included packaging ingress has one supplier/foreground upstream owner. Include real test/QC resources and controls; do not replace manufacture with finished-concrete handling. Add every actual omitted single material, formulation, fuel, water phase, packaging component, waste and measured emitted species before dataset completion. | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| fresh_first_release | mix; services | Q is the independently weighed net wet concrete uniquely first released at the declared plant discharge/QC interface for this cohort. Record approved mixture, mixing completion and applicable fresh tests before release. Strength is a later sample result and is not assumed verified in fresh Q. Sampling/reject mass removed before release is excluded from Q but retains loads. Closing released FG is already in Q: do not add it as another production output or subtract its manufacturing vector as WIP. Retest, delivery, transfer, return and permitted postrelease work produce no new Q. | `nrmca-quality-2022`; `jrc-ilcd-2010` |
| cohort_vectors | all inventory rows | Retain opening and closing inherited burdens separately for every exchange and raw/WIP/unassigned non-WIP store. A_i carries opening inheritance plus actual attributable current loads plus genuine inward burden transfers less still-unreleased closing stores and justified once-only outward transfers. All failed/zero-output/idle/startup/cleanup/rework and waste-treatment loads remain. A waste sale or removal alone never justifies a transfer to another function. Stock-corrected consumption is not corrected twice. Released FG is outside this manufacturing closing subtraction. | `jrc-ilcd-2010` |
| actual_services | services | Retain actual incremental within-plant postrelease holding/agitation, loading, dispatch, return reception, follow-up QC and permitted rework under original cohort Q_c and observed horizon h; no guessed future service. Already performed service is not removed because FG remains in stock; only unused/unassigned service stores carry forward. Offsite customer transport, placement and curing are outside this plant-gate dataset; any separately reported transport module needs its actual route and fuel/emission rows. Do not normalize by net deliveries. Combine modules by cancelling internal first-release Q and matching internal return/rework transfers. | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| returns_permission | mix; controls; services | Measure each returned load in its actual wet state, age, additions, contamination, loss and hydration condition; retain original delivery/lot links without assuming returned mass equals original delivered mass. Reuse or postrelease adjustment requires manufacturer/specification permission, documented additions, complete mixing and postwork tests/acceptance/disposition. Hardened or contaminated material is not assumed restored to fresh concrete. Actual internal recovered water/aggregate has its measured composition and inherited vector; cancel internal transfer once and never purchase it again or grant avoided-production credit. Independently document actual elapsed age, temperature, hydration/setting/plasticity and continued same-mixture permission over the observed interval. No universal workable/storage time is supplied. Material that has set, expired its actual specification permission or hardened cannot remain labelled usable fresh FG or be presumed restored by water/agitation. Record the actual changed-state stock, testing/rejection/recovery/disposition and all new/removed material/water; original first-release Q and historical burdens stay unchanged. Permission/specification, postwork tests, acceptance and disposition govern authorization and continuing qualification ONLY. They never erase actually incurred unauthorized, failed or rejected work material/water/energy/loss/treatment or historical burdens. F_to/F_back and specific physical outlets record ALL real work regardless of approval or test outcome; assign once to the real original/new cohort, without reopening first Q. Held FG and a distinct repair-WIP stock are disjoint once. Qualification still depends on actual age/hydration/plasticity/specification and disposition evidence, never presumed restoration by water/agitation. | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| water_species_physical | all processes | Close gross wet mass and relevant C/H/O/N/S/Ca/Si balances independently of LCI attribution. Whole wet sand/gravel and supplied formulations include their carrier water; absorbed/free water and dry solids are subledgers. Separately observe mixing/wash water, vapour, liquid purge, water retained in wet residues, free water and chemically bound hydration water. Hydration transfers internal water into phases without creating external water; no fixed hydration degree or residual fitting of two unknowns. Each actual exhaust/air species and receiving medium is separate; total NOx/VOC/COD or total PM is not a chemical species. Purchased electricity and diesel retain their distinct energy/mass units, with fuel heat as a linked subledger rather than a second purchase. No boiler, steam or condensate export is assumed. Actual introduced steam/heat needs distinct carrier mass, state/enthalpy, supplier ownership and real liquid-return rows. If external heat/steam/hot water or process/cooling-water return actually exists, independently meter carrier/return gross kg, liquid/vapour phase, actual temperature/pressure/enthalpy and each real Product return; never derive mass from MJ, default density/state or a net-return difference. Heat MJ and water/steam mass are linked views of ONE actual supplier transaction with ONE upstream burden owner; invent no boiler/thermal supply when absent. Manufacturing physical incoming/returns use V/Q and only actual postrelease service uses original Q_c/h. Incoming/return cards add no second water/heat purchase/treatment charge or negative credit; contaminated liquids and direct environmental releases need their real Waste/Elementary interfaces. | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| packaging_assets | all processes | For each actual paper sack, PE-LD liner and wooden pallet: opening empty plus attached WIP/FG plus reusable stock plus external supply plus external returns received = closing corresponding stocks plus packaging on gross physical shipments plus outward returns plus waste. Include supplier-included real ingress even if it remains in closing stock; its upstream owner pays once. Internal reuse cancels without new procurement or product Q. Assets, spare/new/old repair pieces and installed fluids likewise retain full wet physical opening + real inward supply + X_in = closing + retirement/returns/waste + X_out. X only deduplicates another inward/outward term, never cancels new ingress retained in stock. Physical quantities are not reduced by economic shares; capital/service burden is assigned separately from physical stock without assumed lifetime or one whole machine per kg. Record actual purchases P, first non-purchased external receipts I, external-return receipts ER, gross shipment S, empty outward returns EO and waste W as independent directions per material. Actual repair Radd/Rremove and water H2Oin/H2Oout require their own specific exchanges: disjoint opening pools+P+I+ER+Radd+H2Oin = closing pools+S+EO+W+Rremove+H2Oout. Deduplicate the same material/water only against another same-side flow term of this bridge; closing wetstock, opposite directions or another atomiccard do not erase real retained influx. Whole wetarticles carry their included water/material once. Independently measure drymaterial, free/absorbed water, actual added and removed parts/water and physical asset/fluid custody; no assumed package repair, life or weight.  Apply packaging_receipt_basis to distinguish each actual P/I/ER receipt. | `nrmca-quality-2022`; `jrc-ilcd-2010` |
| packaging_receipt_basis | each packaging receipt | For every actual packaging article, classify each whole external receipt once. P is paid procurement, including paid packaging bundled with another supply without a separate invoice. I is all first non-purchased external ingress: standalone gifts, loans, rental or pool receipts and non-purchased supplier-attached packaging; supplier attachment is only an I subset. ER requires this same item or an auditable configuration-matched batch linked to this site's own prior outward record; custody or another party's use alone does not prove a return. P, I and ER are disjoint. Existing I cards and their raw protocols cover the same physical article for every such I origin; no new material, UUID or quantity is presumed. X_in/X_out remain disjoint material/water-change terms, never a substitute for whole-article receipt. Retain gross physical quantity, owner/custodian, payment or non-purchase basis, origin, prior-outward link where required, native state/unit and inherited manufacturing/service vector. Non-purchase is neither a new manufacture nor automatic zero burden: attribute actual used service and incremental transport/handling once to its proper original cohort and denominator, retaining unused service separately without a default lifetime or credit. This is the declared conserving foreground accounting implementation, not a claim that the cited source prescribes these variable names. | `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| mix | Receipt, calibrated batching, central wet mixing and first fresh quality release | required | Complete selected route; actual conditional utilities and supplier packaging only | foreground manufacturing chain | per 1 kg reference flow; original Q_c for services |
| controls | Contained washout, dust and actual recovery/disposition | required | Actual cleanup/control interfaces including service-cohort washout; separated recovery only with permission | pollution control and internal-recovery process | per 1 kg reference flow; original Q_c for services |
| assets | Equipment, repair and installed-fluid service | required | Real service and stocks; new supplies/retirements only when actually occurring | separately attributed capital and maintenance | per 1 kg reference flow; original Q_c for services |
| services | Original-cohort postrelease plant services and gross dispatch | required | Actual observed services over horizon h; no assumed offsite delivery or future work | incremental services on original Q_c | per 1 kg reference flow; original Q_c for services |

The consolidated manufacturing gate comprises mix, controls and assets. Internal recovery and washout are matched physical transfers; only the unique linked product output establishes the reference. All normative ancestor conditions, qualifiers and source restrictions apply to every card. Listed conditional exchanges are not claimed to have occurred; actual additional ingredients, lab resources, package components, fluids and species must be added individually before a dataset is complete.

### Process: Receipt, calibrated batching, central wet mixing and first fresh quality release (`mix`)

#### Inputs

##### Product flows

###### Whole supplied Portland cement (`cement`)

One whole supplied grey Portland hydraulic cement powder, production mix at plant, enters receipt/storage and batching. Native grade, geography and provider are not fixed; match the actual mill certificate and delivered supply boundary. Record included gypsum, clinker and other constituents only as composition subaccounts, not separate purchases. Declare bulk delivery or actual supplier-included paper sack/liner/pallet ingress with one upstream owner. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_cement; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cement`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Natural fine aggregate (`fine_sand`)

One uncoated natural sand fraction for the specified concrete grading, supplied whole at actual moisture. Record mineralogy, origin, grading, free water and absorption separately; no pure-quartz identity or manufactured-sand route is inferred. The unresolved UUID must not be filled by gravel-sized material or a Korean soil-remediation sand case.

- Selected flow: Natural fine sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_fine_sand; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fine_sand`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Natural coarse aggregate (`coarse_gravel`)

One natural coarse-gravel supply fraction, with whole wet mass and actual specified grading. Native Gravel Sand describes rounded natural rock fragments coarser than sand, typically above 2 mm, and use with cement; it is not the fine-sand input. The native also mentions crushed gravel as an alternative; this selected card uses natural gravel only. Match actual origin, lithology, grading, washing and provider without inventing density. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Gravel Sand `73f1241c-e77d-4e9e-b290-e755a40acf81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_coarse_gravel; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coarse_gravel`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Separately supplied mixing water (`mixing_water`)

Treated potable municipal tap-water Product supply only; not raw abstraction, recovered alkaline washwater, steam or heat. Native reference is Mass/kg and its secondary Volume coefficient is 0.001 m3/kg; that secondary coefficient is not a measurement of actual density and is not adopted for conversion. Match real source/treatment/provider and record a separate aliquot for this role without duplicating another water meter. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_mixing_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mixing_water`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Mixer and sampling-tool wash water (`mixer_wash_water`)

Treated potable municipal tap-water Product supply only; not raw abstraction, recovered alkaline washwater, steam or heat. Native reference is Mass/kg and its secondary Volume coefficient is 0.001 m3/kg; that secondary coefficient is not a measurement of actual density and is not adopted for conversion. Match real source/treatment/provider and record a separate aliquot for this role without duplicating another water meter. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_mixer_wash_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mixer_wash_water`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`

###### Mixing and receipt electricity (`mix_electricity`)

Native identity is grid-average customer-side alternating-current Product supply below 1 kV in China; use only for that real interface and match year/provider. This is not higher-voltage or at-power-plant generation. Its reference property is Net calorific value with MJ as reference unit; convert the raw kWh once by 3.6 MJ/kWh. Include actual conveyor, mixer, compressor, controls and test equipment use without adding self-generated electricity and its generation fuel twice. A different real voltage/geography requires its own compatible atomic identity. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_mix_electricity; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mix_electricity`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Conditional loader diesel (`loader_diesel`)

Only actual diesel-fired plant loading/handling uses this mass-reference whole diesel-fuel Product. Native grade, formulation, density, heating value, refinery route, geographic supply and provider are unspecified and must be recorded for the real supply. Retain separately measured fuel energy/composition and combustion species; no generic litre-to-kg or heat factor. No actual combustion means documented non-applicability, not an invented diesel load. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_loader_diesel; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_loader_diesel`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Conditional cement paper sack (`paper_sack`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One complete actual kraft open-mouth/valve cement sack from the native Paper bag family, production mix at plant, Mass/kg without fixed CAS/geography/provider. Virgin/recovered fibre, plies, coating, glue and moisture protection need actual specification; general recyclability is not site disposal or certification. Actual integral liner/adhesive already in a whole supplier-owned sack/whole cement background is a physical subaccount, not another purchase; only a truly separately supplied liner has its own upstream supply. This card is actual paid procurement P only, standalone or bundled, of a matching new or used article; supplier-included I and external-return receipt ER are separate rows. Whole wet mass and upstream ownership count once, with no presumed packaging presence.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional PE-LD cement-sack liner (`ldpe_liner`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. One actual low-density polyethylene foil/film liner, native Product Mass/kg without fixed grade/thickness/treatment/geography/provider. Match measured PE-LD composition and film form, not resin pellets, PET/PP/PVC, multilayer bag or whole cement sack. Integral supplier-owned liner is a physical subaccount when already included in the whole sack/cement provider; no second upstream purchase. Actual independent liner supply has its own owner once. This card is actual paid procurement P only, standalone or bundled, of a matching new or used article; supplier-included I and external-return receipt ER are separate rows. Whole wet mass and upstream ownership count once, with no presumed packaging presence.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional wooden supply pallet (`wood_pallet`)

This P card records paid procurement of this same physical article, standalone or bundled; first non-purchased receipt and true return use I and ER instead. Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg without fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; only the actual whole supply pallet is selected, with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-pallet kg or lifetime is inferred; included whole-article contents count once and separately supplied repairs have specific identities. This card is actual paid procurement P only, standalone or bundled, of a matching new or used article; supplier-included I and external-return receipt ER are separate rows. Whole wet mass and upstream ownership count once, with no presumed packaging presence.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Internal recovered washwater received at batching (`recovered_water_in`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered alkaline concrete washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_water_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_water_in`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Internal recovered fine aggregate received at batching (`recovered_fine_in`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered concrete fine aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_fine_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_fine_in`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Internal recovered coarse aggregate received at batching (`recovered_coarse_in`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered concrete coarse aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_coarse_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_coarse_in`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Paper bag (`paper_sack_with_supply`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only complete first non-purchased packaging I, whether standalone or supplier-attached, disjoint from paid standalone/bundled P and true external-return receipt ER; independent full gross receipt with one correctly identified upstream burden owner. One complete actual kraft open-mouth/valve cement sack from the native Paper bag family, production mix at plant, Mass/kg without fixed CAS/geography/provider. Virgin/recovered fibre, plies, coating, glue and moisture protection need actual specification; general recyclability is not site disposal or certification. Actual integral liner/adhesive already in a whole supplier-owned sack/whole cement background is a physical subaccount, not another purchase; only a truly separately supplied liner has its own upstream supply.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack_with_supply; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack_with_supply`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Paper bag (`paper_sack_return_received`)

Only actual externally returned same complete package ER, disjoint from P and I; retain current wet condition, ownership, original shipment and inherited burden without a new purchase/production/automaticcredit. One complete actual kraft open-mouth/valve cement sack from the native Paper bag family, production mix at plant, Mass/kg without fixed CAS/geography/provider. Virgin/recovered fibre, plies, coating, glue and moisture protection need actual specification; general recyclability is not site disposal or certification. Actual integral liner/adhesive already in a whole supplier-owned sack/whole cement background is a physical subaccount, not another purchase; only a truly separately supplied liner has its own upstream supply.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack_return_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack_return_received`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Low-density polyethylene foil (PE-LD) (`ldpe_liner_with_supply`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only complete first non-purchased packaging I, whether standalone or supplier-attached, disjoint from paid standalone/bundled P and true external-return receipt ER; independent full gross receipt with one correctly identified upstream burden owner. One actual low-density polyethylene foil/film liner, native Product Mass/kg without fixed grade/thickness/treatment/geography/provider. Match measured PE-LD composition and film form, not resin pellets, PET/PP/PVC, multilayer bag or whole cement sack. Integral supplier-owned liner is a physical subaccount when already included in the whole sack/cement provider; no second upstream purchase. Actual independent liner supply has its own owner once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner_with_supply; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner_with_supply`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Low-density polyethylene foil (PE-LD) (`ldpe_liner_return_received`)

Only actual externally returned same complete package ER, disjoint from P and I; retain current wet condition, ownership, original shipment and inherited burden without a new purchase/production/automaticcredit. One actual low-density polyethylene foil/film liner, native Product Mass/kg without fixed grade/thickness/treatment/geography/provider. Match measured PE-LD composition and film form, not resin pellets, PET/PP/PVC, multilayer bag or whole cement sack. Integral supplier-owned liner is a physical subaccount when already included in the whole sack/cement provider; no second upstream purchase. Actual independent liner supply has its own owner once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner_return_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner_return_received`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet_with_supply`)

This I card records first non-purchased receipt of this same physical article, including standalone gift, loan, rental/pool or unpaid supplier-attached receipt; P and true ER are excluded. Only complete first non-purchased packaging I, whether standalone or supplier-attached, disjoint from paid standalone/bundled P and true external-return receipt ER; independent full gross receipt with one correctly identified upstream burden owner.  Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg without fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; only the actual whole supply pallet is selected, with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-pallet kg or lifetime is inferred; included whole-article contents count once and separately supplied repairs have specific identities.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet_with_supply; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet_with_supply`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet_return_received`)

Only actual externally returned same complete package ER, disjoint from P and I; retain current wet condition, ownership, original shipment and inherited burden without a new purchase/production/automaticcredit.  Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg without fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; only the actual whole supply pallet is selected, with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-pallet kg or lifetime is inferred; included whole-article contents count once and separately supplied repairs have specific identities.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet_return_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet_return_received`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

##### Elementary flows

###### Atmospheric oxygen entering actual combustion/entrainment (`oxygen_in`)

Only where actual diesel combustion, pneumatic conveying or mixer entrainment crosses the modeled gate. Oxygen CAS 7782-44-7 is an Elementary resource from air, not a purchased industrial oxygen Product. Retain actual gaseous molecular oxygen entering combustion and any entrained-gas material subledger; no aggregate air input is added on top. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_oxygen_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oxygen_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Atmospheric molecular nitrogen ingress (`nitrogen_in`)

Only where actual diesel combustion, pneumatic conveying or mixer entrainment crosses the modeled gate. Dinitrogen CAS 7727-37-9 is the air-resource node. Use molecular N2 gas only; it is neither a total-nitrogen indicator nor an industrial liquid-nitrogen purchase. Retain gross actual ingress and entrained share separately from chemical conversion. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_nitrogen_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrogen_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Atmospheric argon ingress (`argon_in`)

Only where actual diesel combustion, pneumatic conveying or mixer entrainment crosses the modeled gate. Argon CAS 7440-37-1 is the air-resource node. Use naturally present gaseous argon only; isotope synonyms do not authorize a radioactive tracer purchase. Keep actual ingress rather than assuming an unexplained dry-air mass. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_argon_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_argon_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Incoming air humidity (`air_humidity_in`)

One real H2O-vapour ingress species in combustion/conveying/entrained air; keep independent humidity, state and moisture observations. An emissions-to-air vapour UUID is not an air-resource identity; leave unresolved rather than reversing its direction.

- Selected flow: Atmospheric water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_air_humidity_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_air_humidity_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Incoming ambient carbon dioxide (`ambient_co2_in`)

One actual ambient CO2 species entering with the observed air; it is not newly generated fossil CO2 or an assumed sequestration credit. Keep pass-through and any independently proven uptake separately without netting gross mass.

- Selected flow: Atmospheric carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ambient_co2_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ambient_co2_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

#### Outputs

##### Product flows

###### Conditional cement paper sack returned externally (`paper_sack_return`)

One actual kraft-paper open-mouth or valve sack for whole cement; the native Paper bag family includes kraft and virgin/recovered paper. It does not establish actual ply count, fibre source, adhesive, coating or provider. Use only the paper sack body; a separate real PE liner and pallet are separately retained. Bulk pneumatic cement has no invented mandatory sack. This is the same physical packaging article leaving for its supplier/owner, not product Q or an automatic coproduct. Retain gross mass and one ownership/stock transfer. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack_return; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack_return`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional PE-LD cement-sack liner returned externally (`ldpe_liner_return`)

One actual low-density polyethylene foil liner only, with measured composition and film form. Native record supplies no grade, thickness, treatment, geography or provider; match those to the actual article. It is not PE resin pellets or a mixed-polymer bag. Exclude paper and pallet mass from this liner. This is the same physical packaging article leaving for its supplier/owner, not product Q or an automatic coproduct. Retain gross mass and one ownership/stock transfer. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner_return; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner_return`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional wooden supply pallet returned externally (`wood_pallet_return`)

 Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg without fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; only the actual whole supply pallet is selected, with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-pallet kg or lifetime is inferred; included whole-article contents count once and separately supplied repairs have specific identities.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet_return; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet_return`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Unique first-released fresh concrete (`first_release_concrete`)

The reference UUID identifies a broad manufactured Concrete Product family at plant by mixing, on Mass/kg. Its generic comment also mentions asphalt and subsequent hardening; this PCR restricts it to the hydraulic-cement fresh mixture before downstream hardening, with no asphalt or shaped precast terminal. Its classification label points to prefabricated structural components; that isolated classification discrepancy does not establish a precast physical identity and is disclosed rather than copied as scope. No CAS, fixed strength, density, reinforcement, geometry or geography is native to this selected family. The supplied mixture and this plant gate must be established independently; a cured-component or site-cast provider is incompatible. All required qualifiers apply to the reference and to every inventory use of this family. This single selected reference output is net wet hydraulic concrete at the central mixer plant discharge after the applicable first fresh-QC decision. It excludes test/reject withdrawals and all packaging; it includes first-released closing FG once. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Concrete `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_first_release_concrete`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

##### Waste flows

###### Conditional cement paper sack waste (`paper_sack_waste`)

One actual discarded packaging article. Measure complete wet mass and any attached cement/moisture as composition subaccounts; no duplicate separated cement unless actually removed. Retain its source burden and real treatment; sale/removal does not grant credit. Exact waste identity/provider remains unresolved.

- Selected flow: Spent kraft-paper cement sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack_waste`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional PE-LD cement-sack liner waste (`ldpe_liner_waste`)

One actual discarded packaging article. Measure complete wet mass and any attached cement/moisture as composition subaccounts; no duplicate separated cement unless actually removed. Retain its source burden and real treatment; sale/removal does not grant credit. Exact waste identity/provider remains unresolved.

- Selected flow: Spent PE-LD cement-sack liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner_waste`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional wooden supply pallet waste (`wood_pallet_waste`)

One actual discarded packaging article. Measure complete wet mass and any attached cement/moisture as composition subaccounts; no duplicate separated cement unless actually removed. Retain its source burden and real treatment; sale/removal does not grant credit. Exact waste identity/provider remains unresolved.

- Selected flow: Discarded wooden supply pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet_waste; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet_waste`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Contained mixer washout transfer (`washout_to_controls`)

One real wet concrete/cement/sand washout slurry stream, identified by collection point and measured wet solids/free water/phase state. It is a physical mixture exchange, not pure water, sulfate slag or paper sludge. The actual internal transfer to controls is linked and cancels on consolidation; retained water/solids are not repeated external inputs. No fixed hydration/recovery fraction.

- Selected flow: Cementitious concrete washout slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_washout_to_controls; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_washout_to_controls`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`

###### Rejected fresh batches and uncured samples (`rejected_fresh_concrete`)

One fresh rejected concrete stream including real failed/trial-batch and pre-release specimen withdrawals; measure at actual wet state. Link internal treatment transfers or external receiver exactly once. Do not subtract its manufacturing burdens because it leaves or is sold. Later hardened test pieces and chemical lab waste have separate real outlets.

- Selected flow: Rejected fresh Portland-cement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_rejected_fresh_concrete; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejected_fresh_concrete`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### Elementary flows

###### Actual fossil carbon dioxide (`fossil_co2`)

CO2 CAS 124-38-9, fossil-source gas, Elementary emission to air unspecified. Use only actual fossil-carbon-derived generation, independently distinguished from ambient pass-through, carbonate dust and biogenic carbon. No CO2-credit assumption or total-carbon conversion. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_fossil_co2; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fossil_co2`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual fossil carbon monoxide (`fossil_co`)

CO CAS 630-08-0, fossil-source gas, Elementary emission to air unspecified. Record actual incomplete-combustion CO only, not CO2, VOC or a carbon residual. Broad native synonyms including refrigerated-liquid forms do not change the selected measured gaseous emission. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_fossil_co; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fossil_co`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual sulfur dioxide (`sulfur_dioxide`)

SO2 CAS 7446-09-5, Elementary emission to air unspecified, is one gaseous species. Native names/synonyms include sulphur dioxide and sulfurous anhydride. It is not a total-sulfur or SOx indicator, nor dissolved sulfate. Use actual species measurement and fuel/material sulfur evidence without assuming all sulfur emits as SO2. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_sulfur_dioxide; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_sulfur_dioxide`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Gross outgoing molecular nitrogen (`nitrogen_out`)

N2 CAS 7727-37-9, Elementary emission to air unspecified. Preserve gross measured gas mass and actual nitrogen conversion/entrainment separately; do not use NOx data to infer molecular nitrogen or copy the input air-resource UUID as output. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_nitrogen_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrogen_out`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Gross outgoing argon (`argon_out`)

Argon CAS 7440-37-1, Elementary emission to air unspecified, is the gas leaving the actual air-throughput gate. Preserve actual incoming/outgoing/entrained quantities; it is not a purchased pure-gas supply. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_argon_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_argon_out`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Mixer/combustion water vapour (`mix_vapour`)

H2O CAS 7732-18-5, Elementary emission to air unspecified, is actual gaseous water. Broad water/ice/isotope synonyms do not authorize liquid purge, heavy water, bound hydrate water or exported steam substitutions. Separate ambient humidity, evaporation and fuel-derived water by independent evidence; no fixed hydration water or generic density. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_mix_vapour; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mix_vapour`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual emitted dust at most 2.5 micrometres (`dust_fine`)

A single emitted particle-size fraction PM2.5, Elementary emission to air unspecified, measured at the actual release. It is a physical particle fraction without a specific chemical CAS; do not call it silica, cement oxide or total PM. Captured dust is excluded and any overlapping PM10 measurement is only a parent subledger. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_dust_fine; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dust_fine`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual emitted dust from 2.5 to 10 micrometres (`dust_mid`)

A single actual non-overlapping PM2.5-to-PM10 size fraction, Elementary emission to air unspecified. Use independently observed size distribution; only compatible nested samplings permit subtraction of PM2.5 from PM10 with propagated uncertainty. Do not select the long-term or soil node, or add total PM/PM10 again. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_dust_mid; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dust_mid`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Gross residual oxygen (`oxygen_out`)

Actual outgoing gaseous O2 is distinct from its air-resource input and from chemically bound oxygen in solids, water, CO2 and oxides. Retain independently measured gross excess oxygen and material-entrained gas; no resource UUID is reversed as an emission.

 Native ordinary neutral gaseous O2 CAS7782-44-7, contemporary unspecified-air emission Mass/kg. Full liquid/medical/ionic/excited/isotope aliases do not authorize those states, indoor/long-term substitution or purchased pure oxygen. Independently measured gross outlet is distinct from air resource inlet, combustion consumption and net generation.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_oxygen_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oxygen_out`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Gross ambient carbon dioxide pass-through (`ambient_co2_out`)

One independently distinguished ambient CO2 pass-through stream. Separate from newly formed fossil CO2 and from any measured carbonate reaction/uptake; not a negative fossil emission or automatic credit. Actual additional chemical species require their own atomic rows.

- Selected flow: Atmospheric carbon dioxide pass-through to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ambient_co2_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ambient_co2_out`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual nitrogen monoxide (`nitrogen_monoxide`)

Actual NO gas requires species-resolved measurement, not NOx expressed as NO2-equivalent. The selected native record also lists HNO/nitrosyl hydride among its synonyms; those chemically different species are excluded from this NO-only exchange.

 Native molecular NO CAS10102-43-9, contemporary unspecified-air emission Mass/kg. Primary name/CAS/media describe NO; HNO/nitroxyl/nitrosyl-hydride or NO2 mistranslation aliases do not authorize different chemistry. Use independently identified actual NO, never total NOx or NO2-equivalent mass, with actual gas-state/monitoring uncertainty.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_nitrogen_monoxide; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrogen_monoxide`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual nitrogen dioxide (`nitrogen_dioxide`)

Actual NO2 gas is separately sampled from NO and N2O4 and cannot be inferred from NOx. UUID unresolved because the candidate synonyms identify dinitrogen tetroxide; the CAS/name alone does not resolve that structural ambiguity.

- Selected flow: Gaseous nitrogen dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_nitrogen_dioxide; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrogen_dioxide`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

###### Actual coarse emitted particles (`dust_coarse`)

One actual non-overlapping emitted particulate fraction above 10 micrometres; no PM10 node is used to represent it. Keep real particle-size evidence and chemical assay separately. Parent total-PM measurements are subledgers, not another additive flow.

- Selected flow: Emitted concrete-batching dust above 10 micrometres
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_dust_coarse; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_dust_coarse`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

### Process: Contained washout, dust and actual recovery/disposition (`controls`)

#### Inputs

##### Product flows

###### Containment and control makeup water (`control_water`)

Treated potable municipal tap-water Product supply only; not raw abstraction, recovered alkaline washwater, steam or heat. Native reference is Mass/kg and its secondary Volume coefficient is 0.001 m3/kg; that secondary coefficient is not a measurement of actual density and is not adopted for conversion. Match real source/treatment/provider and record a separate aliquot for this role without duplicating another water meter. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_control_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_control_water`
- Sources: `epa-concrete-batching-2012`; `epa-concrete-washout-2012`

###### Recovery and containment electricity (`control_electricity`)

Native identity is grid-average customer-side alternating-current Product supply below 1 kV in China; use only for that real interface and match year/provider. This is not higher-voltage or at-power-plant generation. Its reference property is Net calorific value with MJ as reference unit; convert the raw kWh once by 3.6 MJ/kWh. Include actual conveyor, mixer, compressor, controls and test equipment use without adding self-generated electricity and its generation fuel twice. A different real voltage/geography requires its own compatible atomic identity. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_control_electricity; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_control_electricity`
- Sources: `epa-concrete-batching-2012`; `epa-concrete-washout-2012`

##### Waste flows

###### Received mixer washout (`washout_received`)

One real wet concrete/cement/sand washout slurry stream, identified by collection point and measured wet solids/free water/phase state. It is a physical mixture exchange, not pure water, sulfate slag or paper sludge. The actual internal transfer to controls is linked and cancels on consolidation; retained water/solids are not repeated external inputs. No fixed hydration/recovery fraction.

- Selected flow: Cementitious concrete washout slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_washout_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_washout_received`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`

#### Outputs

##### Product flows

###### Internal recovered washwater handed to batching (`recovered_water_out`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered alkaline concrete washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_water_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_water_out`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Internal recovered fine aggregate handed to batching (`recovered_fine_out`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered concrete fine aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_fine_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_fine_out`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Internal recovered coarse aggregate handed to batching (`recovered_coarse_out`)

Only actual separated internal recovery within the declared plant is included. Record whole wet material, solids/free water/phase/composition, source cohort and inherited exchange vector. Manufacturer/specification permission and actual contaminant/quality tests must allow its use in this mixture; the observed absence of recovery is recorded explicitly. No external recyclate feed is inferred. Matching input/output cancel once when consolidated, without another upstream purchase, virgin-material credit or newly first-released concrete Q.

- Selected flow: Recovered concrete coarse aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_recovered_coarse_out; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_recovered_coarse_out`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### Waste flows

###### Separated liquid purge (`washwater_purge`)

One separated alkaline aqueous effluent actually sent to a named treatment receiver; retain wet liquid mass, suspended/dissolved constituents, pH, flow state and receiver boundary. COD is a test index, not a named chemical mass. Do not also book its carrier water as a separate identical waste purchase or elementary discharge.

- Selected flow: Alkaline concrete washwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_washwater_purge; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_washwater_purge`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Settled wet solids (`settled_sludge`)

One actually separated wet cementitious sludge. Retain whole wet mass plus independent dry-solid, free-water and hydrated-phase subaccounts. Do not bind paper sludge or sulfate/carbide slag. Treatment/export retains burdens, with no automatic aggregate substitution credit.

- Selected flow: Settled cementitious concrete washout sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_settled_sludge; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_settled_sludge`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Hardened residue and tested specimens (`hardened_residue`)

One actual hardened concrete residue stream from this cohort, including follow-up test specimens when present; preserve measured added curing water, losses and actual phase/age. Crushing or recovery is an actual operation with energy and tests, not presumed reversal to fresh mixture. No automatic avoided-landfill credit.

- Selected flow: Hardened unreinforced concrete residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_hardened_residue; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hardened_residue`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Captured batching dust (`captured_dust`)

One captured cement-dominant batching dust stream, with real mineralogy/moisture and collection boundary. Reuse requires actual permitted composition/quality and a linked internal transfer; captured material is not an emitted elemental species. Retain real discarded dust and treatment burdens.

- Selected flow: Captured Portland-cement batching dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_captured_dust; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_captured_dust`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### Elementary flows

###### Actual washout evaporation (`control_vapour`)

Actual H2O gas CAS 7732-18-5 to air unspecified from contained washout treatment. Separate measured free-water evaporation from hydration, liquid export and retained moisture; no evaporation-as-default disposal or double count with mixer vapour. Native broad water/ice/isotope synonyms do not alter this gas-only role. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_control_vapour; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_control_vapour`
- Sources: `epa-concrete-washout-2012`

### Process: Equipment, repair and installed-fluid service (`assets`)

#### Inputs

##### Product flows

###### Conditional carbon-steel hopper repair plate (`repair_steel`)

One actual carbon-steel repair plate for hopper/handling equipment, within the broad iron-carbon Steel Product family at plant; its native synonyms also include alloy/stainless alternatives, which are not selected here. Match real plate form, grade, fabrication and supply boundary. A whole purchased fabricated part is one supplied article, not another plate plus its embedded metal. Record new/spare/installed/old stock physically and assign service burdens separately. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Steel `b5e4fcbb-ad3f-4511-b007-67131b98866a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_repair_steel; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_steel`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional whole mineral lubricating oil (`lubricating_oil`)

One whole petroleum-fraction lubricating-oil formulation used for actual plant equipment maintenance, including its supplied additives. Native calorific display is 40.5 MJ/kg but the reference is Mass/kg; the displayed value is not a measured fuel factor and is not used here. No synthetic oil, hydraulic-fluid chemistry or refrigerant is inferred. Keep installed oil and topups/retirement independently; no duplicate additive purchase. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_lubricating_oil; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_lubricating_oil`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional new stationary mixer asset (`central_mixer_asset`)

One actual complete stationary concrete mixer asset when it enters the plant; do not substitute road rollers or concrete product UUIDs. Keep count, configuration and independently weighed net machine mass plus real fluids/attached moisture subledgers. A supplied assembly is purchased once. Existing equipment stays in the asset register without a fictitious current purchase; actual service burden is assigned by asset_service and never one machine per kg.

- Selected flow: Stationary central concrete mixer
- Flow property / unit: Number of items / item
- Amount rule: Reuse the single section 8 normalized result associated with cp_central_mixer_asset; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_central_mixer_asset`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Conditional maintenance wash water (`maintenance_water`)

Treated potable municipal tap-water Product supply only; not raw abstraction, recovered alkaline washwater, steam or heat. Native reference is Mass/kg and its secondary Volume coefficient is 0.001 m3/kg; that secondary coefficient is not a measurement of actual density and is not adopted for conversion. Match real source/treatment/provider and record a separate aliquot for this role without duplicating another water meter. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_maintenance_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance_water`
- Sources: `nrmca-quality-2022`

###### Measured repair electricity (`maintenance_electricity`)

Native identity is grid-average customer-side alternating-current Product supply below 1 kV in China; use only for that real interface and match year/provider. This is not higher-voltage or at-power-plant generation. Its reference property is Net calorific value with MJ as reference unit; convert the raw kWh once by 3.6 MJ/kWh. Include actual conveyor, mixer, compressor, controls and test equipment use without adding self-generated electricity and its generation fuel twice. A different real voltage/geography requires its own compatible atomic identity. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_maintenance_electricity; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance_electricity`
- Sources: `nrmca-quality-2022`

#### Outputs

##### Waste flows

###### Actual oil drainage (`spent_oil`)

Only the actual individual discarded article/fluid leaves this gate, in its measured wet and contaminated condition. Retain original asset/part/fluid links and real treatment; no scrap-sale burden deletion. Attached concrete/water is a subaccount until actually separated. Physical retirement and current asset-service burden are separate ledgers.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_spent_oil; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_oil`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Actual old repair plate (`spent_repair_plate`)

Only the actual individual discarded article/fluid leaves this gate, in its measured wet and contaminated condition. Retain original asset/part/fluid links and real treatment; no scrap-sale burden deletion. Attached concrete/water is a subaccount until actually separated. Physical retirement and current asset-service burden are separate ledgers.

- Selected flow: Removed carbon-steel hopper repair plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_spent_repair_plate; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_repair_plate`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Actual retired mixer (`retired_mixer`)

Only the actual individual discarded article/fluid leaves this gate, in its measured wet and contaminated condition. Retain original asset/part/fluid links and real treatment; no scrap-sale burden deletion. Attached concrete/water is a subaccount until actually separated. Physical retirement and current asset-service burden are separate ledgers.

- Selected flow: Retired stationary concrete mixer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_retired_mixer; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_retired_mixer`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Actual maintenance cleaning wastewater (`oily_washwater`)

One actual separated aqueous equipment-maintenance wastewater stream with measured oil, solids and water subaccounts. It is not assumed identical to alkaline concrete washout; retain the actual receiver and treatment. Any separately removed oil or solids are separate physical outlets and are not counted twice within this wet mixture.

- Selected flow: Oily equipment-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_oily_washwater; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oily_washwater`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

### Process: Original-cohort postrelease plant services and gross dispatch (`services`)

#### Inputs

##### Product flows

###### Internal first-release FG received (`released_fg_received`)

The reference UUID identifies a broad manufactured Concrete Product family at plant by mixing, on Mass/kg. Its generic comment also mentions asphalt and subsequent hardening; this PCR restricts it to the hydraulic-cement fresh mixture before downstream hardening, with no asphalt or shaped precast terminal. Its classification label points to prefabricated structural components; that isolated classification discrepancy does not establish a precast physical identity and is disclosed rather than copied as scope. No CAS, fixed strength, density, reinforcement, geometry or geography is native to this selected family. The supplied mixture and this plant gate must be established independently; a cured-component or site-cast provider is incompatible. All required qualifiers apply to the reference and to every inventory use of this family. Receive the matched internal first-release transfer Q with its manufacturing vector once; cancel against first_release_concrete when consolidating. Opening released FG keeps its own original lot/vector. No new upstream purchase or new production is created. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Concrete `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_released_fg_received; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_released_fg_received`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Actual externally returned wet load (`returned_wet_concrete`)

One actual returned wet load in its measured present state, not a presumed reverse of original delivered concrete. Record elapsed time, extra water/ingredients, hydration, contamination and losses; retain original delivery references. Do not assign the accepted fresh-reference UUID before confirming identity and manufacturer/spec permission. No fresh-production Q is created; real recovery and disposition remain traceable.

- Selected flow: Returned wet Portland-cement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_returned_wet_concrete; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_returned_wet_concrete`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Actual incremental FG-service water (`service_water`)

Treated potable municipal tap-water Product supply only; not raw abstraction, recovered alkaline washwater, steam or heat. Native reference is Mass/kg and its secondary Volume coefficient is 0.001 m3/kg; that secondary coefficient is not a measurement of actual density and is not adopted for conversion. Match real source/treatment/provider and record a separate aliquot for this role without duplicating another water meter. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`

###### Actual holding and dispatch electricity (`service_electricity`)

Native identity is grid-average customer-side alternating-current Product supply below 1 kV in China; use only for that real interface and match year/provider. This is not higher-voltage or at-power-plant generation. Its reference property is Net calorific value with MJ as reference unit; convert the raw kWh once by 3.6 MJ/kWh. Include actual conveyor, mixer, compressor, controls and test equipment use without adding self-generated electricity and its generation fuel twice. A different real voltage/geography requires its own compatible atomic identity. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200c9a66` → unit group `93a60a57-a3c8-11da-a746-0800200c9a66` → reference unit MJ. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_electricity; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_electricity`
- Sources: `nrmca-quality-2022`

###### Wooden packaging-pallet repair board (`pallet_repair_wood`)

Only actual separate repair-board receipts for original-cohort packaging services, with wood species/treatment, drywood, free/absorbed water, provider and ownership. Not a whole pallet or duplicate whole-supply included component; separate nails/glue need specific identities. Retained added material/water remains influx without assumed life or repair occurrence.

- Selected flow: Wooden packaging-pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pallet_repair_wood; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pallet_repair_wood`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Tap water (`pack_repair_water`)

Only actual externally treated potable municipal tap water for original-cohort package cleaning/repair, native Product Mass/kg without fixed geography/CAS and requiring compatible real provider/treatment. Not extra concrete mixwater, rawresource or recirculation. Measure state/additions and retained wetmaterial/wastewater/vapour destinations; secondary Volume coefficient is not measured density and whole-supply carried water is not repurchased.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pack_repair_water; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_repair_water`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`

##### Elementary flows

###### Atmospheric water vapour absorbed by packaging (`pack_humidity_in`)

Only actual original-cohort packaging uptake of ambient gaseous H2O CAS7732-18-5, independently measured humidity/T/P and uptake mass without fixed air fraction/density or fitting drymaterial and water from one wetresidual. Disjoint from water carried in P/I/ER/repairmaterial; retained uptake remains influx, never zeroed because another atomiccard exists.

- Selected flow: Atmospheric water vapour absorbed by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pack_humidity_in; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_humidity_in`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

#### Outputs

##### Product flows

###### Gross physical dispatch of released concrete (`gross_dispatched_concrete`)

The reference UUID identifies a broad manufactured Concrete Product family at plant by mixing, on Mass/kg. Its generic comment also mentions asphalt and subsequent hardening; this PCR restricts it to the hydraulic-cement fresh mixture before downstream hardening, with no asphalt or shaped precast terminal. Its classification label points to prefabricated structural components; that isolated classification discrepancy does not establish a precast physical identity and is disclosed rather than copied as scope. No CAS, fixed strength, density, reinforcement, geometry or geography is native to this selected family. The supplied mixture and this plant gate must be established independently; a cured-component or site-cast provider is incompatible. All required qualifiers apply to the reference and to every inventory use of this family. This is actual gross physical dispatch of still-qualified fresh concrete from the original cohort; verify state/age and specification at dispatch. It is not a second reference output or a net-delivery Q. Offsite delivery transport and site curing are separately outside this plant gate. Native reference chain: property `93a60a56-a3c8-11da-a746-0800200b9a66` → unit group `93a60a57-a4c8-11da-a746-0800200c9a66` → reference unit kg. Preserve the actual form, route, medium and provider restrictions above.

- Selected flow: Concrete `db3cc6e8-4eb4-4812-9f9c-580dd75a67ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_gross_dispatched_concrete; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gross_dispatched_concrete`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Paper bag (`paper_sack_gross_shipped`)

Only actual complete packaging S carried on gross physical shipments during original-cohort services, including real repeated shipments; disjoint from empty outward returns EO and waste W. Measure full wet mass without economic scaling, new concreteQ or purchase. Observed absence needs evidence; fresh concrete is not presumed bagged. One complete actual kraft open-mouth/valve cement sack from the native Paper bag family, production mix at plant, Mass/kg without fixed CAS/geography/provider. Virgin/recovered fibre, plies, coating, glue and moisture protection need actual specification; general recyclability is not site disposal or certification. Actual integral liner/adhesive already in a whole supplier-owned sack/whole cement background is a physical subaccount, not another purchase; only a truly separately supplied liner has its own upstream supply.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_paper_sack_gross_shipped; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_paper_sack_gross_shipped`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Low-density polyethylene foil (PE-LD) (`ldpe_liner_gross_shipped`)

Only actual complete packaging S carried on gross physical shipments during original-cohort services, including real repeated shipments; disjoint from empty outward returns EO and waste W. Measure full wet mass without economic scaling, new concreteQ or purchase. Observed absence needs evidence; fresh concrete is not presumed bagged. One actual low-density polyethylene foil/film liner, native Product Mass/kg without fixed grade/thickness/treatment/geography/provider. Match measured PE-LD composition and film form, not resin pellets, PET/PP/PVC, multilayer bag or whole cement sack. Integral supplier-owned liner is a physical subaccount when already included in the whole sack/cement provider; no second upstream purchase. Actual independent liner supply has its own owner once.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_ldpe_liner_gross_shipped; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ldpe_liner_gross_shipped`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Pallets, box pallets and other load boards, of wood, pallet collars of wood (`wood_pallet_gross_shipped`)

Only actual complete packaging S carried on gross physical shipments during original-cohort services, including real repeated shipments; disjoint from empty outward returns EO and waste W. Measure full wet mass without economic scaling, new concreteQ or purchase. Observed absence needs evidence; fresh concrete is not presumed bagged.  Native complete finished manufactured wooden portable load-platform Product family, production mix at plant, Mass/kg without fixed geography/CAS. Other members include post/collar/side-rail/end-rail platforms and separate hinged collars; only the actual whole supply pallet is selected, with measured wood construction/treatment, integral fasteners, moisture, ownership and compatible provider. No EURO geometry, per-pallet kg or lifetime is inferred; included whole-article contents count once and separately supplied repairs have specific identities.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_wood_pallet_gross_shipped; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wood_pallet_gross_shipped`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`


##### Waste flows

###### Discarded original-cohort released concrete (`discarded_released_concrete`)

One actual original-cohort discard, with current wet/solid phase measured and destination identified. Original manufacture is retained once and incremental service/treatment is attributed to that cohort. Do not reverse original Q or assume postrelease work can restore a hardened load. Additional physically separated water/solid outlets require their own rows.

- Selected flow: Discarded previously released Portland-cement concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_discarded_released_concrete; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_discarded_released_concrete`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Actual postrelease service washout (`service_washout_to_controls`)

One real wet concrete/cement/sand washout slurry stream, identified by collection point and measured wet solids/free water/phase state. It is a physical mixture exchange, not pure water, sulfate slag or paper sludge. The actual internal transfer to controls is linked and cancels on consolidation; retained water/solids are not repeated external inputs. No fixed hydration/recovery fraction. Link this actual service-generated transfer to its original cohort and controls receipt; it is not another manufacture output.

- Selected flow: Cementitious concrete washout slurry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_service_washout_to_controls; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_washout_to_controls`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

###### Discarded packaging-pallet repair board (`removed_pallet_wood`)

Actual old wood board removed from original-cohort packaging repair, independently measured drymaterial/water/contamination and destination. Not whole-pallet disposal or duplicate W; export/sale does not automatically subtract manufacture/treatment burden or establish credit.

- Selected flow: Discarded packaging-pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_removed_pallet_wood; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_removed_pallet_wood`
- Sources: `nrmca-quality-2022`; `jrc-ilcd-2010`

###### Packaging cleaning and repair wastewater for offsite treatment (`pack_repair_wastewater`)

Only actual original-cohort package cleaning/repair wastewater sent for offsite treatment, with measured liquid, wood/contaminants and receiving destination; disjoint from retained wetwood/package water, vapour and other exits. Not internal concretewashout transfer or direct environmental liquid release and no guessed COD/element molecule. Other actual treatment routes need their matching interface, not a fixed cleaningdose.

- Selected flow: Packaging cleaning and repair wastewater for offsite treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pack_repair_wastewater; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_repair_wastewater`
- Sources: `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010`

##### Elementary flows

###### water vapour (`pack_water_vapour`)

Only actual original-cohort packaging repair/storage gaseous H2O CAS7732-18-5, contemporary unspecified-air Mass/kg. Ice/heavywater/ionic aliases do not authorize different phases/isotopes; evaporation and drymaterial loss are independently measured, not two unknowns fitted to one residual. No duplicate water carried by another same-side outgoing flow term; actual retained uptake remains input and closing wetmass.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result associated with cp_pack_water_vapour; no further denominator division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_water_vapour`
- Sources: `epa-concrete-batching-2012`; `nrmca-quality-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| attributional_hierarchy | all inventory rows | Use this hierarchy only for the declared attributional allocation situation. First assign dedicated observations and use real or virtual subdivision to isolate the function. For remaining multifunctional exchanges establish the exchange-specific determining physical causal relationship and quantitative driver; do not choose mass or energy merely for convenience. Only the genuine residual common process uses contemporaneous market value of actual co-functions at the same process gate, condition and quantity basis; justify adjusted prices and uncertainty. No fixed share, optional physical/economic choice or automatic system-expansion credit. | `jrc-ilcd-2010` |
| waste_is_not_credit | mix; controls; services | Returned concrete, recovered water, dust and rejected/test concrete are not automatic coproducts. Retain source manufacturing and real recovery/treatment burdens, physical gross exits and carryover. A genuine independent other cohort/function and a defensible allocation/handover decision are required for one outward burden-vector transfer; a positive scrap price is insufficient. Recovered material used within this gate is one internal circulation, not another purchase or a negative virgin input. | `epa-concrete-washout-2012`; `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Protocols collect only original unnormalized observations. The aggregation label identifies the sole reporting result from normalize_once; it is not another calculation during collection. Preserve raw denominator Q and original-cohort Q_c separately from all numerators.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cement | mix | Whole supplied Portland cement | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; whole supplied wet mass; supplier and grade; batch ticket; dry solids assay; free moisture; actual inlet state; upstream and inbound-leg ownership | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_fine_sand | mix | Natural fine aggregate | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; whole supplied wet mass; supplier and grade; batch ticket; dry solids assay; free moisture; actual inlet state; upstream and inbound-leg ownership | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_coarse_gravel | mix | Natural coarse aggregate | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; whole supplied wet mass; supplier and grade; batch ticket; dry solids assay; free moisture; actual inlet state; upstream and inbound-leg ownership | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_mixing_water | mix | Separately supplied mixing water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_mixer_wash_water | mix | Mixer and sampling-tool wash water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_mix_electricity | mix | Mixing and receipt electricity | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; original integrated kWh; meter start/end and interval; submeter reconciliation; actual voltage; supply country and grid/year; process use and unused carryover | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | MJ | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_loader_diesel | mix | Conditional loader diesel | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; fuel receipts and tank stocks; integrated mass/volume; measured fuel density and LHV at actual state; loader service logs; actual grade and sulfur/carbon/hydrogen assay | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack | mix | Conditional cement paper sack | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack_return | mix | Conditional cement paper sack returned externally | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack_waste | mix | Conditional cement paper sack waste | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner | mix | Conditional PE-LD cement-sack liner | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner_return | mix | Conditional PE-LD cement-sack liner returned externally | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner_waste | mix | Conditional PE-LD cement-sack liner waste | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet | mix | Conditional wooden supply pallet | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet_return | mix | Conditional wooden supply pallet returned externally | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet_waste | mix | Conditional wooden supply pallet waste | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_first_release_concrete | mix | Unique first-released fresh concrete | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; unique batch and first-release ID/time; approved mixture; completion of central mixing; calibrated net wet discharge weighing; sample/reject withdrawal; actual fresh tests; original cohort; first-release Q; opening/closing FG; repeat-release flags | Weigh the accepted fresh net discharge using calibrated load cells or traceable weighed gross/tare observations at the declared release state. Sum unique first-release lots only. Volumetric production tickets require independently measured same-mixture fresh density; no assumed normal-weight density. Retain fresh QC and later specimen results separately. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_washout_to_controls | mix | Contained mixer washout transfer | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy; actual_elapsed_age_temperature; measured_hydration_setting_plasticity; original_delivery_specific_record; actual_new_old_material_water; actual_permission_tests_disposition; actual_elapsed_age_temperature; measured_hydration_setting_plasticity; original_delivery_specific_record; actual_new_old_material_water; actual_permission_tests_disposition; actual_elapsed_age_temperature; measured_hydration_setting_plasticity; original_delivery_specific_record; actual_new_old_material_water; actual_permission_tests_disposition | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_washout_received | controls | Received mixer washout | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_rejected_fresh_concrete | mix | Rejected fresh batches and uncured samples | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_control_water | controls | Containment and control makeup water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_control_electricity | controls | Recovery and containment electricity | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; original integrated kWh; meter start/end and interval; submeter reconciliation; actual voltage; supply country and grid/year; process use and unused carryover | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | MJ | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_washwater_purge | controls | Separated liquid purge | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_settled_sludge | controls | Settled wet solids | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_hardened_residue | controls | Hardened residue and tested specimens | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_captured_dust | controls | Captured batching dust | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_repair_steel | assets | Conditional carbon-steel hopper repair plate | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; actual part ID and grade; whole supplied wet mass; new/spare/installed opening and closing; work order; old-part removal; retained water and attached concrete; service logs and measured allocation driver | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_lubricating_oil | assets | Conditional whole mineral lubricating oil | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; oil product and formulation; measured charge/topup/drain wet mass; installed and spare opening/closing; contamination and moisture; service interval; supplier and waste receiver | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_central_mixer_asset | assets | Conditional new stationary mixer asset | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; asset ID; item count; configuration; calibrated independent net mass; complete wet mass; fluids included by supplier; installed/spare opening/closing; service logs; retirement and burden ownership | Count real complete machines and retain supplier serial/configuration records; independently weigh net machine mass on a calibrated scale, excluding separate packaging, and account for wet additions. No guessed kg/item, fixed life or secondary-property mass coefficient. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | item | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_maintenance_water | assets | Conditional maintenance wash water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_maintenance_electricity | assets | Measured repair electricity | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; original integrated kWh; meter start/end and interval; submeter reconciliation; actual voltage; supply country and grid/year; process use and unused carryover | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | MJ | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_spent_oil | assets | Actual oil drainage | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_spent_repair_plate | assets | Actual old repair plate | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_retired_mixer | assets | Actual retired mixer | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_released_fg_received | services | Internal first-release FG received | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_gross_dispatched_concrete | services | Gross physical dispatch of released concrete | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_returned_wet_concrete | services | Actual externally returned wet load | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_service_water | services | Actual incremental FG-service water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_service_electricity | services | Actual holding and dispatch electricity | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; original integrated kWh; meter start/end and interval; submeter reconciliation; actual voltage; supply country and grid/year; process use and unused carryover | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | MJ | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_discarded_released_concrete | services | Discarded original-cohort released concrete | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_oxygen_in | mix | Atmospheric oxygen entering actual combustion/entrainment | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_nitrogen_in | mix | Atmospheric molecular nitrogen ingress | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_argon_in | mix | Atmospheric argon ingress | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_air_humidity_in | mix | Incoming air humidity | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ambient_co2_in | mix | Incoming ambient carbon dioxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_fossil_co2 | mix | Actual fossil carbon dioxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_fossil_co | mix | Actual fossil carbon monoxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_sulfur_dioxide | mix | Actual sulfur dioxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_nitrogen_out | mix | Gross outgoing molecular nitrogen | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_argon_out | mix | Gross outgoing argon | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_mix_vapour | mix | Mixer/combustion water vapour | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_dust_fine | mix | Actual emitted dust at most 2.5 micrometres | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_dust_mid | mix | Actual emitted dust from 2.5 to 10 micrometres | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_oxygen_out | mix | Gross residual oxygen | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ambient_co2_out | mix | Gross ambient carbon dioxide pass-through | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_nitrogen_monoxide | mix | Actual nitrogen monoxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_nitrogen_dioxide | mix | Actual nitrogen dioxide | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_dust_coarse | mix | Actual coarse emitted particles | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_control_vapour | controls | Actual washout evaporation | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_water_out | controls | Internal recovered washwater handed to batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_water_in | mix | Internal recovered washwater received at batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_fine_out | controls | Internal recovered fine aggregate handed to batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_fine_in | mix | Internal recovered fine aggregate received at batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_coarse_out | controls | Internal recovered coarse aggregate handed to batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_recovered_coarse_in | mix | Internal recovered coarse aggregate received at batching | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_oily_washwater | assets | Actual maintenance cleaning wastewater | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_service_washout_to_controls | services | Actual postrelease service washout | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack_with_supply | mix | Paper bag | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack_return_received | mix | Paper bag | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_paper_sack_gross_shipped | services | Paper bag | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner_with_supply | mix | Low-density polyethylene foil (PE-LD) | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner_return_received | mix | Low-density polyethylene foil (PE-LD) | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_ldpe_liner_gross_shipped | services | Low-density polyethylene foil (PE-LD) | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet_with_supply | mix | Pallets, box pallets and other load boards, of wood, pallet collars of wood | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider ; packaging P/I/ER origin and payment/non-purchase evidence; same-item prior outward ID; inherited service owner/vector | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage.  For packaging receipts apply packaging_receipt_basis; standalone non-purchase is I, never a fabricated ER or X. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet_return_received | mix | Pallets, box pallets and other load boards, of wood, pallet collars of wood | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_wood_pallet_gross_shipped | services | Pallets, box pallets and other load boards, of wood, pallet collars of wood | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_pallet_repair_wood | services | Wooden packaging-pallet repair board | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_pack_repair_water | services | Tap water | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; integrated supplied volume or mass; water temperature and pressure; independently measured applicable water density if volume-to-mass conversion is needed; tank opening/closing; sampling quality; final destination; included upstream owner; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_pack_humidity_in | services | Atmospheric water vapour absorbed by packaging | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_removed_pallet_wood | services | Discarded packaging-pallet repair board | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; component mass and count; supplier-included ingress; single upstream owner; opening empty/attached/reusable stock; external returns received; closing corresponding stocks; gross shipment attachments; outward returns; waste; actual moisture; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_pack_repair_wastewater | services | Packaging cleaning and repair wastewater for offsite treatment | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; transfer ID and cohort; wet mass; separately measured solids/free water; phase/contamination assay; receiving tank stocks; actual disposition and treatment energy; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Use calibrated net weighing and traceable receipt/stock/transfer records for the actual whole wet exchange; retain its state, sampling and calibration evidence. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |
| cp_pack_water_vapour | services | water vapour | raw_foreground_record | timestamp; batch/cohort; original unit; physical direction; opening/closing stock; whole supply/transfer; actual wet state; supplier/receiver; inherited exchange vector; ownership/transfer ID; uncertainty; gas/particle species and chemical identity; receiving medium/subcompartment; gas flow integrated volume versus rate; actual temperature/pressure; wet/dry basis; independent composition/density; measured duration only for rates; blanks/detection limit; gross inlet/outlet; source attribution; sampler calibration; actual_gross_direction; disjoint_pool_owner; actual_repair_material_water; original_cohort_Qc_h; no_duplicate_provider | Retain original species-resolved samples and calibrated actual-state gas/particle observations. Integrate a true rate once over its measured interval; an integrated gas volume has no second time multiplier. Obtain mass from independently justified species concentration/density at the same dry/wet state. Preserve gross input/output species and independent mass/element evidence; unknown species or water phase cannot be fitted from one residual. Keep raw values only; no division by product Q during collection. Conversion and allocation occur in the calculation stage. | kg | each receipt/batch/meter interval and stock boundary | complete actual production cohort including failed/zero-output periods; original-cohort horizon h for services | actual plant and named supplier/receiver interface | per 1 kg reference flow | calibration; traceable raw originals; actual state/species tests; permissions; stock/ownership reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert original observations once to each row native extensive unit before allocation. Integrated measurements are summed once; only true rates are integrated over measured time. Electricity kWh * 3.6 = MJ. Actual gas/liquid mass needs independently applicable concentration/density and temperature/pressure/wet-dry conditions; no second time factor for integrated volume, no generic water density for oil/gas, and no secondary-property density or kg/item. Keep energy, mass, volume and count separate. | raw_observations; actual_states; independent_densities; measured_intervals | converted_raw | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| manufacture_vector | all inventory rows | A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i. Every term is the same-unit inherited exchange vector after dedicated assignment, subdivision and justified exchange-specific allocation. C_i retains failed batches, zero output, start/stop, idle, test, cleanup, recovery and treatment. B_close_i contains only still-unreleased raw/WIP and unassigned non-WIP stores, never released FG. T_out_i requires a real other cohort/function and one justified burden handover; physical waste/scrap sales alone do not qualify. Do not subtract the same stock-corrected consumption twice. Explicitly declare gross receipt/occurrence versus already-stock-adjusted net issue/consumption and the corrections already included for every exchange. Apply only stock adjustments not included yet, retaining independent opening/closing raw/WIP/unassigned non-WIP physical quantities and each complete exchange history, including consumed opening-material upstream burdens. This equation determines assigned burden vectors ONLY, not ledger-only gross physical quantities. For physical asset/new-old-part/installed-fluid/waste and actual thermal-carrier or process-water Product incoming/return cards, retain full native-unit V_i independently; never replace or scale the real gross leg with B_open+C+T_in-B_close-T_out, an economic/service share or old manufacturing history. Actual assigned capital-service/operation/supply burdens retain their separate per-exchange vectors, with one acquisition/supplier scope and no duplicate charge. | B_open_i; C_i; T_in_i; B_close_i; T_out_i | A_i | `jrc-ilcd-2010` |
| service_vector | services | A_service_i_c_h contains only actual incremental postrelease services/treatment assigned to original cohort c over observed horizon h, with original first-release Q_c and manufacture vector retained separately. Use dedicated logs or the allocation hierarchy. Only unused/unassigned service stores carry forward; performed service remains even if FG stays in closing stock. Rework retains permission, tests and disposition and never creates fresh Q. For FG receipt/return/dispatch and packaging physical movement cards, A_service_i_c_h means the full actual measured gross specific leg after native-unit conversion, not inherited manufacturing/purchase burden, a second stock correction or an economic burden share. Report ledger-only physical results separately from actual supplier/operation burdens; normalization creates no new provider purchase or credit. Preserve independently matched original-delivery quantities distinct from actual changed wet returns. | original_cohort; Q_c; h; actual_service_records; unused_service_vectors | A_service_i_c_h | `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| normalize_once | all inventory rows | u_i = A_i / Q; u_i is the exchange amount per 1 kg reference flow. For a separately reported service use A_service_i_c_h and Q_c in this same operation. Q must be positive; Q = 0 retains all original burdens and produces no unit result. This is the only division by the product denominator. Cards and collection aggregation refer to this same result without another division. first_release_concrete is exactly 1 kg net wet first-released concrete. Ledger-only physical FG/package movement numerators are complete measured legs with no burden-vector addition, second stock correction or economic scaling, using the actual owning Q or original Q_c once. Actual already-performed holding/agitation/QC/loading services remain at their original cohort Q_c and observed h even when goods are held at closing. The full-gross-physical exception also applies to actual assets, parts, fluids, wastes and thermal-carrier/process-water Product incoming/returns, not only FG/packaging. Their same once-displayed result is V_i/Q or V_i/Q_c for actual original-cohort service, after conversion to EACH native extensive unit, with independent wet mass for physical reconciliation. V_i is not a stock-burden difference, second stock correction, allocated share, old manufacture/acquisition/treatment addition or return credit. Actual performed service and supply burdens remain separately normalized once under their real original cohort and observed h; listing gross legs never erases them. | A_i; Q; A_service_i_c_h; Q_c; cp_first_release_concrete; V_i | u_i | `jrc-ilcd-2010` |
| manufacture_physical_gate | mix; controls; assets | Manufacture gross wet mass: opening raw/WIP/unreleased stores/packaging/physical assets/installed fluids + actual external physical ingress + original-FG material withdrawn for actual work F_to = corresponding closing unreleased/in-place wet stocks + first-release net wet Q + actual attached packaging transfer P_Q + original-cohort material returned after work F_back + actual other external solid/liquid/gas exits. Include atmospheric species, supplier-included packages, new repair pieces and water even when retained in closing stock. Cancel matched internal washout/recovery transfers; no economic shares scale this equation. Electricity and heat are separate energy ledgers. | opening_manufacture_stocks; external_ingress; F_to; closing_manufacture_stocks; Q; P_Q; F_back; external_exits | manufacture_gross_balance | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| fg_physical_gate | services | FG concrete-material mass: opening released FG + Q + actual physical customer returns R + F_back + X_in = closing released FG + gross dispatch G + F_to + actual FG waste + consumed samples + X_out. X records actual additional water/material or genuine exits only when not already in another term; retained added water is still real ingress and is also in complete closing wet mass. Returned R is measured in its current state and is not presumed the original delivery reverse. Packaging follows its own complete component ledger. For combined gates cancel Q, P_Q, F_to/F_back and matched internal packaging transfers; retain external returns, added water and real losses. | opening_FG; Q; R; F_back; X_in; closing_FG; G; F_to; FG_waste; samples; X_out; P_Q | FG_and_combined_gross_balances | `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| water_phase_check | all inventory rows | Independently measure total wet material, dry mineral solids, free/absorbed water, bound water by actual hydrate phases, gas humidity, water vapour, liquid outlets and retained wet residue. Hydration conserves total mass while changing phases; source cement composition does not prove hydration degree. Resolve actual chemical reaction and oxygen/carbon transfers separately. Check water and relevant elements using independent evidence; one residual cannot solve both evaporation and hydration. Do not turn COD/VOC/total carbon or PM size into a specific chemical mass. | wet_materials; dry_solids; free_water; independent_hydrate_phases; humidity; vapour; liquid_outlets; retained_water; species_elements | water_phase_and_element_check | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012` |
| asset_service | assets | Keep full actual machine/part/fluid physical receipts, installed/spare stocks, removals, moisture and disposal in their native units plus independently measured wet mass. Assign only capital-manufacture service burden using justified actual usage/capacity records and exchange-specific causality; retain the measured driver and denominator. No fixed lifetime, guessed kg per item or entire machine per kg concrete. New replacement and maintenance materials are real whole supplies; unused stock carries its vector once without erasing physical influx. | asset_register; actual_usage; measured_service_driver; driver_denominator; physical_mass; unused_stock_vectors | capital_service_burden | `nrmca-quality-2022`; `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and every exchange | Retain all native restrictions, complete qualifiers, whole formulation/article state, actual origin and compatible provider. A family UUID is not proof of supplier equivalence. | Native identity support; supplier certificates; whole-article records |
| dq_raw | every raw field | Retain raw originals before conversion, allocation and normalization, including calibration, timestamps, stock boundaries, density state, detection limits and uncertainty. Future foreground measurements are requirements, not claimed collected numbers. | Meter/scale records; sampling methods; independent tests |
| dq_scope | all processes and periods | Include unsuccessful and zero-output intervals, idle/start-stop, cleanup, tests, stocks, recovery, actual air/aqueous/solid species and original-cohort services; document observed absence and every added atomic exchange. | Whole-site/cohort reconciliation; original ledgers |
| dq_source | external sources and rules | EPA supports process/control and washout distinctions, not allocation or a universal mixture/factor. NRMCA supports producer QC and perishable fresh state; the sample QC plan is illustrative and contains a slump-method inconsistency, so use body C143 context and actual applicable methods rather than copying sample C173. ILCD is used only for the attributional hierarchy. Technical sources are independent documents, not multiple registrations of one source. | Source context; adjacent alternatives; source-specific applicability appraisal |
| dq_bilingual | both renderings and projection | Preserve every row/rule/protocol ID, official Chinese UUID name, source field/list, qualifier, formula input/output, physical gate and full description. Aligned translation is not reviewed translation or scientific approval. | Full-field bilingual and raw-to-typed audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all inventory rows | Require complete reference qualifiers and atomic physical identity with original native restrictions. Reference-family use must remain plant-mixed hydraulic fresh concrete; reject substituted asphalt, installed or precast product identity. Providers require independent route/form/grade/geography/year/gate compatibility. Missing auxiliary UUIDs are visible unresolved identities and never generic collection bindings. | `epa-concrete-batching-2012`; `nrmca-quality-2022` |
| validate_release | mix; services | Check unique first-release IDs, weighed Q and sampling/reject exclusions. Verify actual permitted mix and fresh QC; disclose later strength findings without creating a second first release. Q=0 retains all real burdens and yields no normalized result. Closing released FG is neither second output nor manufacturing burden subtraction. | `nrmca-quality-2022`; `jrc-ilcd-2010` |
| validate_balances | all processes | Reconcile manufacture, FG service and combined physical gates, full wet inventories, every packaging balance and every inherited exchange vector. Keep independent water-phase/species/element observations; report unresolved closure, detection limits and uncertainty rather than claim success from one residual. Verify no source/constituent/provider double purchase, no repeated normalization and no waste-sale burden deletion. | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |
| validate_completeness | all processes | Before using a completed dataset resolve real core terminal/method gaps; obtain actual foreground quantities, permissions, all additional exchanges and compatible upstream data. An absent conditional exchange requires observed absence evidence, not a convenient zero. A recipe or thermal-conditioning change outside scope requires reassessment. Engineering checks establish neither scientific approval nor publication or classification mapping acceptance. | `epa-concrete-batching-2012`; `nrmca-quality-2022`; `epa-concrete-washout-2012`; `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Selected fresh concrete supply at first plant quality release with compatible upstream providers and separately disclosed observed plant services |
| excluded_use | Installed construction, cured/precast articles, generic mortar coverage, EPD approval, unqualified strength/lifetime equivalence or carbon-credit claims |
| required_metadata | site and reporting period; ordinary Portland-cement binder specification and whole supplied cement ownership; natural fine-sand and coarse-gravel origins and grading; actual separately supplied ingredients and supply forms; no deliberate supplementary cementitious material or chemical admixture in this selected route; central complete wet mixing before first release; no steel reinforcement or manufactured component; actual mixture designation and permitted adjustments; aggregate free moisture and absorption; measured wet net first-release mass and timestamp; fresh slump and air content and temperature and density tests where required by the actual specification; later strength-test status without claiming cured strength at sale; water phases and hydration evidence; unique first-release lot/cohort and original Q_c; opening/closing raw and WIP inherited exchange vectors; released FG stock and true return state; gross shipments and no repeat production; service horizon h and actual incremental services; electricity voltage and supply geography; each fuel and atmospheric species where actually used; packaging ingress and upstream ownership; asset and installed-fluid stocks; actual supplier and receiving media |
| required_quality_disclosure | Actual foreground coverage; unresolved identities/providers; failed/zero-output loads; stock/return/vector closure; permissions; source limitations; observed service horizon; pending independent review |
| update_trigger | Actual mixture, ingredient/supply form, process, terminal, water phase, provider, native restriction, measurement method or quality specification changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-concrete-batching-2012 | official_guidance | US EPA, AP-42 11.12 Concrete Batching, June 2006 with January 2012 editorial corrections; https://www.epa.gov/sites/default/files/2020-10/documents/c11s12.pdf | Raw constituents, central-mix manufacture, contrasting truck/precast routes, dust controls and emission-factor limitations; no recipe or factor adopted |
| nrmca-quality-2022 | handbook | NRMCA, Quality Control Guide for Ready-Mixed Concrete Producers, April 2022; https://www.nrmca.org/wp-content/uploads/2022/04/Quality_Guide.pdf | Fresh unfinished/perishable terminal, receipt/batching/central-mixer QC, moisture and density/yield tests, traceability, adjustments and nonconformance; example plan is not a universal plant prescription |
| epa-concrete-washout-2012 | official_guidance | US EPA, Stormwater Best Management Practice Concrete Washout, EPA-833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Contained washout, actual returns, liquid/solid separation and recovery with specification restrictions; construction-site examples are limited to actual plant interfaces and do not authorize credit |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional dedicated/virtual subdivision, determining exchange-specific physical causality and residual same-gate economic allocation; cohort vector attribution is the declared foreground implementation |
