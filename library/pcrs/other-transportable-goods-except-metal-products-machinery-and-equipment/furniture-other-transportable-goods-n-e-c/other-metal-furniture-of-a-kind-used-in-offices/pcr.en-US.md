---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-metal-furniture-of-a-kind-used-in-offices
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Assembled powder-coated steel multi-drawer office filing cabinets

## 1. Scope and Applicability

This PCR covers cradle-to-factory-gate manufacture of complete assembled floor-standing, non-electrical steel multi-drawer office filing cabinets for paper-document storage. The bounded reference route uses supplied uncoated cold-rolled steel sheet, actual forming/joining, documented cleaning/conversion pretreatment, whole purchased thermosetting powder coating and thermal cure, complete hardware assembly and the unique first quality release. Supplier-prefabricated parts keep their complete upstream route. Real subsequent factory storage, packaging, handling, dispatch and all actual rework, including unauthorized, failed or rejected work are linked incremental services for the original release cohort and declared horizon.

This is a qualitative technical synthesis: the manufacturer route, an independent complete-cabinet market example and historical construction/test specification establish different parts of the method. They do not describe the same SKU, factory or order. No source example is a universal recipe or quantity. In particular, the historical liquid-enamel route and the manufacturer knock-down/door-cabinet variants are adjacent counterexamples, not evidence that this assembled powder-coated terminal is a parts kit.

Exclude chair frames/seating, loose sheet, single drawers/slides/doors, generic metal-furniture bundles, kitchen cabinets, electrical/instrument enclosures, fire/explosion/security-certified safes, special certified products, upholstery, installation, distribution beyond the declared factory gate, use, maintenance in use and end-of-life of the sold cabinet. No special certification or life is implied.

`un-cpc3-structure-2025`; `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.other-metal-furniture-of-a-kind-used-in-offices |
| classification_refs | CPC 3.0 38121; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38121.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete assembled floor-standing non-electrical steel multi-drawer office filing cabinets with documented powder/thermal-cure route |
| excluded_products | Seating/frames; parts; kitchen or electrical cabinets; safes; special certification; upholstery; installation/use/end-of-life |
| representative_product | One complete first-released configured office filing cabinet, measured in its net whole mass |
| production_route | Steel sheet receipt; actual cut/punch/bend/join; pretreat/rinse/dry; whole powder/thermal cure; hardware assembly; quality release; separately tracked gate services |
| market_state | New complete assembled accepted cabinet, without files, test loads or removable transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Store and retrieve paper files in a configured office cabinet |
| How much | Manufacturing reference:1kg net whole first-released cabinet; functions compared only at matched configuration/performance |
| How well | Actual declared dimensional, drawer/lock/slide, stability and finish acceptance specification; no default load or certification |
| How long or cycle | One manufacture and unique first quality release; actual subsequent factory service horizon separately stated; no use lifetime |
| reference_flow_link | finished_cabinet |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other metal furniture, of a kind used in offices `d640f8df-64e2-4ca5-b3c0-bd3c5c0b7245` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete assembled office filing cabinet; non-electrical; model and configuration; drawer count and file format; steel grade and cold-rolled uncoated supply form; actual dimensions; drawing revision; net complete cabinet mass and moisture condition; onsite versus supplier fabrication; actual cutting/punching/bending/joining; whole purchased slide/lock/handle/foot/interlock configuration and included finishes; actual whole pretreatment and powder formulation; cure route and supplier instructions; actual dimensional/function/load/anti-tilt/finish test specification and acceptance; unique first quality release Q; product/cohort ID and no repeat release; opening/closing raw/WIP/finished stocks and every inherited exchange burden; utility native property; voltage/geography/state; complete failed and zero-output periods; packaging composition and six gross legs with upstream owner; post-release service observation horizon and original cohort denominator; actual material/species destinations; allocation and upstream dataset boundary |

Product; manufactured finished product; production mix at plant. No native CAS, synonyms, particular grade, configuration or supply geography is specified. Apply only to the complete non-electrical steel filing cabinet defined here; this broad family does not identify a SKU, component, supplier, quantity or certified performance.

Required qualifiers must be declared in the foreground package. Measure each complete net cabinet mass using cp_release; do not guess kg per item or infer it from a secondary native property. One kg is an accounting basis, not a claim that two cabinets with different drawer capacity provide equal function.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of unique complete first-released cabinet net masses from cp_release; exclude removable packaging, files and test weights. Counts are never used as kg without measured complete-unit mass for the exact configuration. |
| native_energy | electricity_factory; service_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter actual kWh and convert by3.6 to native MJ before attribution; no Required Mass rule applies to energy. |
| native_extensive | all inventory rows | Actual extensive reference property of each individual exchange | each card native unit | Preserve energy, volume, mass, time or count as actually native; density is independently measured for the same material/state, integrated volume is not a rate. Count Item(s) and item are equivalent at factor1 only when genuinely that native count property, never an assumed cabinet mass. No collective Mass/kg requirement for all rows. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered uncoated cold-rolled steel sheet and separately received whole parts/formulations; complete upstream production is included by suitable supplier datasets |
| starting_condition_role | foreground_receipt |
| product_classification_scope | Narrow complete assembled cabinet subset of office metal furniture; no accepted mapping implied |
| recursive_input_rule | Same-category purchased complete cabinets are outside raw-manufacture reference; an actual returned cabinet is a gross original-cohort event with inherited burden, not new procurement or Q |
| upstream_dataset_requirement | Match actual steel supply, each whole formulation/part/packaging, electricity voltage/geography and all subcontract processes; verify included components/utilities/finishes to avoid duplication |
| disclosure | Declare raw/WIP/FG genealogy; all manufacturing/failure work; first-release Q; original service horizon; gross balances and once-only upstream ownership; unsupported fields stay gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_full_route | all inventory rows | Start at received uncoated cold-rolled steel sheet and each complete purchased formulation/part. Include actual cutting, punching, folding, deburring, resistance spot welding or evidenced wire-fed joining, cleaning/derusting, specified conversion pretreatment and rinsing, drying, electrostatic application of one actual powder formulation, thermal cure, complete drawer/slide/lock/handle/foot/interlock assembly and dimensional/function/safety/finish quality release. Packaging/handling/storage/dispatch remain separately traced cohort services. Supplier-prefabricated inputs need complete upstream fabrication/finishing datasets and a clear handoff; do not pretend onsite steelmaking, plating or a boiler. A complete subcontract coating/preparation service and its included material/energy burdens have one owner: record actual foreground flows physically but never charge both the whole provider and the same included loads again. | `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical` |
| boundary_release | all inventory rows | Q is the sum of calibrated net masses of uniquely first quality-released complete cabinets in a homogeneous declared configuration/cohort. Closing finished goods already belong to Q; do not add closing FG as another output and do not deduct their manufacturing burdens. Returns, repeat inspection, redelivery and all actual post-release rework create no new Q. The default is not net delivery. A net-delivery study requires a separate coherent method with original-delivery reversal and complete historical FG burden and cannot silently replace this denominator. | `pulage-cabinet-manufacture-2025`; `bisley-office-filing` |
| boundary_cohort | all inventory rows | Keep all target-related failed production, scrap, destructive specimens, start/stop, idle, cleaning and rework with its cohort. Carry opening/closing raw, WIP and genuinely unused/unassigned stores with a separate inherited burden vector for every exchange, state, conversion and work completed. Manufacturing B_close excludes already first-released FG. Mere waste transfer or sales never removes manufacturing or treatment burdens. A transfer to a genuinely independent other function/cohort requires a justified one-time allocation/handover and an auditable receiving vector. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| boundary_species | all inventory rows | Close gross physical mass and relevant Fe/C/H/O/P/Na and any actual Zn/Mn or other elements independently of the real chemical-species and reaction-water ledger. Cleaning, phosphating and powder cure need actual formulation/extent/emission evidence, not guessed chemistry or a universal coating recipe. Keep reaction, free, structural and phase-change water separate. Total VOC, COD, total metal, total carbon or particle-size totals do not establish any particular molecule; one residual cannot solve two unknowns. Every actual additional input, waste or emission is a named atomic card before dataset use; an unknown is a gap, never a fabricated zero or miscellaneous bundle. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| boundary_packaging | all inventory rows | For each separate packaging material/SKU reconcile opening empty plus attached WIP/FG plus reusable stock + P + I + ER + X_in = closing full corresponding stock + gross S + EO + W + X_out. Each P/I/ER/S/EO/W card is one actual direction/event and uses its complete gross V numerator. P/I ownership is counted once; first non-purchased external ingress retains its physical material and one upstream owner. Internal reuse cancels and is neither a new purchase nor product Q. These legs and repair/water X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence: actual influx remains when new material/water is in closing stock, alongside full closing wet mass. Never stock-correct or economically scale a physical gross card. Weigh each whole wet article once; record its dry substrate, adhesive, liner, metal and retained water as nonadditive composition subaccounts. Separately added onsite components are disjoint exchanges or are explicitly bridged into the whole article without a second input/provider. Natural moisture uptake, drying and ambient-humidity throughflow are recorded physical events, not invented repair water. For one actual mixed-waste outlet measure each originating material W independently: either one mixed total with nonadditive origin subaccounts OR disjoint origin exchanges summing to that total, with one actual treatment-provider charge. Never report both representations as additive outputs. Any actually occurring unlisted species, aqueous phase, component, return state or mixed outlet needs its own compatible atomic card, protocol and provider boundary before a factory dataset is complete; unknown is not zero. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| boundary_services_assets | all inventory rows | Post-release services retain actual incremental burdens, original cohort Q_c, observation horizon, opening/closing FG and returns/dispositions. Already performed service for that cohort stays attributed even when FG remains in store; only unused/unassigned service/charge may carry forward, without correcting stock-corrected consumption twice. Track machines, tools, copper electrodes, replacement parts and installed fluids as physical stocks/events separately from their current attributable service burden. No fixed life or whole-machine-per-kg charge. Record every actual repair and all incurred material, water, energy, losses and burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition govern authorization and current qualification only; they never erase actual facts, prove restoration or create new Q. New/old parts and each aqueous stream remain atomic. | `bisley-office-filing`; `jrc-ilcd-allocation-2010` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-allocation-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_factory | Sheet-to-complete-cabinet manufacture and first release | required | All actual operations through unique first quality release; documented subcontract upstream retained | foreground | first-released whole cabinet mass Q in kg |
| p_service | Post-release storage and factory-gate handling | conditional | Actual original-cohort services within declared observation horizon | supporting | original release Q_c; no second product reference |
| p_pack | Atomic packaging events and burden ownership | conditional | Every actually used material and P/I/ER/S/EO/W event | supporting | full gross V with original cohort Q_c |
| p_assets | Equipment and repair stock plus current service | conditional | Actual assets, new/old repair parts, installed fluids and aqueous legs | supporting | full physical V; service burden once; original Q_c |

The cards below are atomic conditional exchange requirements, not observed factory quantities or a universal BOM. Confirm actual presence and absence; replace a materially different supplied state with its actual individually named card. Additional actual chemicals, compounds, packaging, utilities, cooling/abatement flows or downstream treatments must be added before dataset completion. Internal same-product handoffs may stay in matched ledgers; if split into processes, pair them and cancel at consolidation without external procurement or a second Q. For every gross card the single_quotient numerator is full V, not manufacturing/service A or an allocation share. Real burden attribution is a separate once-owned dimension.

### Process: Sheet-to-complete-cabinet manufacture and first release (`p_factory`)

#### Inputs

##### Product flows

###### Uncoated cold-rolled low-carbon steel sheet (`steel_sheet`)

Actual delivered sheet through cutting, punching, bending and joining. Retain coil/sheet supply, surface condition, grade, mill, gauges and offcuts; supplier-prefabricated panels replace only the evidenced onsite steps and retain their complete upstream manufacture. Product; iron-based sheet with carbon and minor Mn/S/P/Si; native comment allows cold or hot rolling; production mix at plant; no fixed geography/CAS/grade. The native alloy/further-worked classification differs from the broad physically consistent sheet description and is disclosed as a taxonomy defect. Select actual uncoated cold-rolled low-carbon sheet only with mill/supply evidence; exclude stainless, plated sheet and prefabricated cabinet parts. No thickness, density or supplier is inferred.

- Selected flow: Steel sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

###### Steel ball-bearing drawer-slide assembly (`slide_assembly`)

One whole purchased slide assembly including its real bearings, lubricant and finish; not a bearing-only substitute. Record model, travel, load suitability, count and measured mass.

- Selected flow: Steel ball-bearing drawer-slide assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Cylinder cabinet lock assembly (`lock_assembly`)

One whole purchased cabinet lock including supplied keys and locking parts; actual separate linkage is recorded separately only if not included. Native Product manufactured finished base-metal lock/furniture-fitting family, production mix at plant, Mass/kg; no fixed grade, dimensions, supplier or geography. Positively qualify exactly one complete supplied cylinder cabinet lock with its included keys and actual locking mechanism under this family. The broad family alternatives are not an aggregate purchase: do not replace the lock with hinges, bare lock components, safe body, vending-machine frame or another fitting. Keep complete supplied BOM/finish and independently purchased linkage disjoint, without inferred safety/certification or metal recipe.

- Selected flow: Padlocks and locks, of base metal, clasps and frames with clasps, incorporating locks, of base metal, keys and parts thereof, of base metal, base metal fittings for furniture, doors, saddlery and the like `5cf66c20-e740-4088-a8a8-4a1afca932b2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Finished steel drawer pull handle (`drawer_handle`)

Conditional separate external pull handle. An integral sheet pull is already in the fabricated drawer, not another purchased handle; keep supplier finish upstream.

- Selected flow: Finished steel drawer pull handle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Polyethylene cabinet foot pad (`foot_pad`)

Conditional confirmed PE foot pad supplied as a complete part; verify material and geometry, not a footwear or resin-pellet identity. Use actual separate levelling-foot assembly if different.

- Selected flow: Polyethylene cabinet foot pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Steel drawer anti-tilt interlock assembly (`anti_tilt`)

Actual specified anti-tilt mechanism for the complete cabinet. Record compatibility, included linkage and tests; no unverified safety rating.

- Selected flow: Steel drawer anti-tilt interlock assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Finished steel drawer label holder (`label_holder`)

Conditional separate purchased label holder, including supplier finish; integral stamped holder stays in original sheet/part account.

- Selected flow: Finished steel drawer label holder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Steel screw (`screw`)

Conditional independent purchased screw used for actual assemblies; welding-only carcases do not create fictitious fasteners. Product; steel screw auxiliary assembly fastener; GLO at-plant production mix; no native CAS, grade, coating, geometry or provider. Match one actually purchased screw specification and included finish. No bolts, rivets, nuts or whole slide/lock contents are added again as this screw purchase.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Solid carbon-steel welding wire (`welding_wire`)

Only for actual wire-fed welding; resistance spot welding does not consume filler wire. Keep exact solid-wire grade and supplier route; flux-cored wire is a different whole supply.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Carbon dioxide welding shielding gas (`co2_shield`)

Conditional actually purchased single CO2 gas for the documented welding route. Keep cylinder tare, supplied state and composition; any premixed shielding gas is one whole purchased mixture with component subaccounts, not two simultaneous purchases.

- Selected flow: Carbon dioxide welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Sheet-metal forming lubricating-oil formulation (`forming_oil`)

Conditional one whole purchased forming-oil preparation, including its supplied carrier; no substitute from a cold-rolling-mill-only oil. Separate onsite dilution and losses if performed.

- Selected flow: Sheet-metal forming lubricating-oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

###### Gaseous argon welding shielding gas (`argon_shield`)

Conditional independently purchased single gaseous argon for the actual documented joining route; preserve actual purity, supply state, bottle tare and full measured gas quantity. An actual whole premix is purchased once instead and its Ar fraction is only a subaccount. Not atmospheric argon or liquid-argon delivery without its real conversion boundary.

- Selected flow: Gaseous argon welding shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Whole alkaline metal-cleaning formulation (`alkaline_cleaner`)

Actual whole as-supplied wet cleaner for degreasing; supplier-included water/actives are composition subaccounts, not new chemical purchases. If genuinely mixed onsite, replace the purchased formulation with each purchased chemical plus actual water, energy and losses. Product; alkaline compound detergent at plant, native pH above7 and NaOH/carbonate examples; Mass/kg. Native surfactant classification does not establish formulation composition. No CAS, supplier, concentration, physical supply form or geography fixed. Use for one confirmed whole purchased alkaline cleaning formulation with actual water/active content; not an optical solvent degreaser or pure NaOH substitute. Separate only chemicals and dilution water actually purchased outside that formulation.

- Selected flow: Alkaline detergent `a0f63f93-1a65-4485-a2cf-36adab2762ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

###### Whole iron-phosphating solution formulation (`phosphate_formulation`)

Conditional actual supplied formulation for the declared immersion conversion coating. Keep bath make-up, replenishment, drag-out, spent-bath stock and purchased additives separate from included composition; a nonphosphate process cannot use this card. Product; at-plant phosphating solution for ferrous conversion pretreatment; native comment lists iron/zinc/manganese variants and immersion; no fixed CAS, concentration, provider or geography. Select one actual supplied iron-phosphating formulation for the declared immersion route; confirm whole wet mass and SDS/assay. It is not pure phosphoric acid, dry salt, zinc-phosphate default or a spent bath. A different spray/nonphosphate route requires its own verified exchange context.

- Selected flow: Phosphating solution `fbf49587-4fb7-4264-83f1-24a662469072`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

###### Whole thermosetting polyester or epoxy-based powder coating formulation (`powder_coating`)

One documented purchased powder formulation per SKU/colour. Determine actual chemistry and cure route; do not sum alternative formulations as one recipe. Internal recovered overspray is paired and cancels, not a second fresh purchase. Product; whole free-flowing dry formulated polymer powder including flow/levelling additives; electrostatic application and heat or UV cure mentioned; no native CAS, mix, geography or fixed resin/grade. This route uses a documented thermosetting polyester or epoxy-based purchased formulation and actual thermal cure, not UV cure or neat resin. Purchase the whole supplied formulation once; component assays are subaccounts. Confirm resin/curative/pigment/additive SDS and supplier cure instructions; no default recipe, solvent absence or zero emissions.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

###### Treated municipal process water (`tap_water`)

Actual separately added process and rinse water; excludes water already inside a purchased wet preparation. Preserve cleaning, failures, bath change and residual water stocks. Product; treated municipal/potable water production and supply at plant/to consumer; no fixed geography. Reference is Mass/kg; native secondary Volume coefficient is not a measured density. Match actual treatment, quality and provider; not untreated abstraction, deionised water, steam or recovered effluent. Measure density for a volume-to-mass conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `pulage-cabinet-manufacture-2025`

###### De-ionised rinse water (`di_water`)

Conditional externally purchased de-ionised final rinse water. Onsite preparation uses source-water and actual purification inventory once; internal purified-water handoffs cancel. Product; de-ionised water; single native Mass property with internal reference1. No native CAS, detailed purity, production route, mix, provider or geography. Verify actual de-ionisation and supplied water quality; do not infer conductivity or use for untreated water. Onsite purification keeps the source-water purchase and actual purification consumables/energy once; its internal water handoff is not a second purchase.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `pulage-cabinet-manufacture-2025`

###### Purchased manufacturing electricity (`electricity_factory`)

Cutting, punching, bending, joining, ventilation, compressed-air generation, bath heating, drying, powder spraying, thermal curing, assembly and actual factory tests. Submeter stages without duplicating a whole-site bill; retain idle/startup/cleanup/failed work. Product; CN supply; 1–35 kV medium-voltage grid-average consumption mix to user. Only the matching purchased meter boundary can use this identity; verify actual voltage, location, grid period and included transformer/distribution losses. Replace identity for another voltage/geography; downstream low-voltage submeter use does not prove purchased low-voltage supply. Reference property is Net calorific value in MJ; convert metered kWh by 3.6, not by material mass.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `pulage-cabinet-manufacture-2025`

###### Pipeline natural-gas fuel (`natural_gas`)

Conditional actual direct-fired dryer/curing burner, not a presumed boiler. Keep full carrier mass and independently measured composition/LHV and delivered energy subaccount; one provider burden. For electric cure demonstrate absence instead of a zero guessed gas amount.

- Selected flow: Pipeline natural-gas fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `pulage-cabinet-manufacture-2025`

###### Sodium hydroxide aqueous make-up formulation (`sodium_hydroxide`)

Conditional independently purchased wet NaOH formulation; declare actual concentration. Not the 95–98% solid candidate or the NaOH already in a whole cleaner.

- Selected flow: Sodium hydroxide aqueous make-up formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

###### Phosphoric-acid aqueous make-up formulation (`phosphoric_acid`)

Conditional independent purchased surface-treatment acid formulation with actual grade/concentration and supply route; weak-acid intermediate from a specified wet-process separation is not assumed equivalent. Native Product manufactured finished phosphoric-acid family, production mix at plant, Mass/kg; no native CAS, grade, concentration, geography or provider fixed. Use only a compatible independently purchased single phosphoric-acid supply with actual state, assay/concentration and complete supplier route; distinguish whole wet supplied mass from its active-acid and included-water subaccounts, counting water once. A proprietary multi-active pretreatment, weak wet-process intermediate, or fixed 85% solution is not established by this family identity. No concentration or reaction recipe is inferred.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_materials`
- Sources: `pulage-cabinet-manufacture-2025`

##### Elementary flows

###### Carbon dioxide in atmospheric process air (`co2_atmospheric_in`)

Actual independently measured species in process/combustion air; disclose complete gross air composition and state without an overlapping air-aggregate exchange. Do not turn this into a purchased industrial gas.

- Selected flow: Carbon dioxide in atmospheric process air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Dioxygen in atmospheric process air (`oxygen_in`)

Actual independently measured species in process/combustion air; disclose complete gross air composition and state without an overlapping air-aggregate exchange. Do not turn this into a purchased industrial gas. Native Elementary flow; O2, CAS7782-44-7, resource from air, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Dinitrogen in atmospheric process air (`nitrogen_in`)

Actual independently measured species in process/combustion air; disclose complete gross air composition and state without an overlapping air-aggregate exchange. Do not turn this into a purchased industrial gas. Native Elementary flow; N2, CAS7727-37-9, resource from air, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Argon in atmospheric process air (`argon_in`)

Actual independently measured species in process/combustion air; disclose complete gross air composition and state without an overlapping air-aggregate exchange. Do not turn this into a purchased industrial gas. Native Elementary flow; Ar, CAS7440-37-1, resource from air, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Water vapour in atmospheric process air (`humidity_in`)

Actual independently measured species in process/combustion air; disclose complete gross air composition and state without an overlapping air-aggregate exchange. Do not turn this into a purchased industrial gas.

- Selected flow: Water vapour in atmospheric process air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

#### Outputs

##### Product flows

###### Complete first-released steel office filing cabinet (`finished_cabinet`)

The sole reference output is the unique newly quality-released complete assembled cabinet configuration; Q includes all its accepted drawers, slide assemblies, lock, actual handles/feet/interlock and cured finish, excluding files, test weights, removable packaging and unaccepted/released-again items. The same accepted cabinet in closing finished stock is already in Q. Product; manufactured finished product; production mix at plant. No native CAS, synonyms, particular grade, configuration or supply geography is specified. Apply only to the complete non-electrical steel filing cabinet defined here; this broad family does not identify a SKU, component, supplier, quantity or certified performance.

- Selected flow: Other metal furniture, of a kind used in offices `d640f8df-64e2-4ca5-b3c0-bd3c5c0b7245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical`

##### Waste flows

###### Uncoated steel cutting and punching offcuts (`steel_offcuts`)

Actual segregated gross offcut mass and destination; include associated fabrication/handling/treatment burdens regardless of sale. Waste; unprocessed at-plant production steel scrap from mechanical-part machining/forming; GLO production mix. Apply only to segregated uncoated steel offcuts leaving without further treatment; document alloy/oil contamination and destination. Not coated finished-cabinet rejects, mixed sludge or consumer scrap. Sale does not establish a coproduct, burden deduction or substitution credit.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Rejected powder-coated steel cabinet body (`coated_reject`)

Actual unsalvageable coated body, including failed cabinets and destructive test articles; distinct from uncoated cutting scrap. Approved rework remains within its original cohort and never creates Q again.

- Selected flow: Rejected powder-coated steel cabinet body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Discarded uncured coating-powder formulation (`spent_powder`)

Actual unreturned purge/contaminated overspray with resin/pigment/additive identity; separate captured reused powder and uncaptured aerosol.

- Selected flow: Discarded uncured coating-powder formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Wet iron-phosphating sludge (`pretreat_sludge`)

Actual wet sludge with separately measured solids, water and chemical composition; total metal assay is not a specific molecular salt or emission.

- Selected flow: Wet iron-phosphating sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Spent aqueous alkaline-cleaning bath (`spent_cleaner`)

Whole spent bath shipped for treatment; retain wet mass, oil/chemical assay, water and destination; not an elementary water discharge.

- Selected flow: Spent aqueous alkaline-cleaning bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Aqueous metal-pretreatment rinse effluent (`rinse_effluent`)

Actual rinse wastewater to the stated treatment provider; characterize acidity, dissolved/suspended constituents and water. Treatment upstream boundary must not double count onsite treatment.

- Selected flow: Aqueous metal-pretreatment rinse effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Captured steel-welding fume residue (`weld_fume_captured`)

Actual collected particulate residue with measured species, moisture and filter separation; not total fume magically assigned to Fe2O3.

- Selected flow: Captured steel-welding fume residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

###### Powder-coated steel test-coupon waste (`coupon_waste`)

Destructive quality coupons consumed from original steel/powder inventories, not additional product output or unexplained purchased steel.

- Selected flow: Powder-coated steel test-coupon waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `pulage-cabinet-manufacture-2025`; `bis-is3313-1983-historical`

##### Elementary flows

###### Carbon dioxide to air (`carbon_dioxide_air`)

Conditional actual molecular CO2 from fuel, welding or documented formulation chemistry; separate fossil/biogenic/process origin, media and actual sources. No CO2-equivalent factor substitutes for measured CO2.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Carbon monoxide to air (`carbon_monoxide_air`)

Conditional measured molecular CO; distinguish from CO2 and total carbon, include abnormal burner states if present.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Nitrogen monoxide to air (`nitrogen_monoxide_air`)

Conditional independently speciated NO CAS10102-43-9, not N2O and not a conversion of undifferentiated NOx. Native Elementary flow; NO, CAS10102-43-9, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Nitrogen dioxide to air (`nitrogen_dioxide_air`)

Conditional actual NO2 CAS10102-44-0; do not adopt a native row whose conflicting tetroxide identity has not been resolved, or infer from total NOx. Native Elementary flow; NO2, CAS10102-44-0, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Methane to air (`methane_air`)

Conditional actual CH4 CAS74-82-8 from documented supply leakage or incomplete combustion; polluted carbon-black/nanotube synonyms are not compatible identity evidence.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Water vapour to air (`water_vapour_air`)

Actual molecular H2O evaporation from washing/drying plus independently evidenced reaction/combustion water. Distinguish humidity throughflow, free/structural water and phase changes; never infer reaction water from one mass residual. Native Elementary flow; H2O, CAS7732-18-5, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Argon to air (`argon_air`)

Conditional independently measured atmospheric/actual shielding argon throughflow; pure argon, a premixed shielding supply and combustion air are distinct owners. Native Elementary flow; Ar, CAS7440-37-1, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Dinitrogen to air (`nitrogen_air`)

Measured molecular N2 actual outlet; distinguish atmospheric throughflow from actual conversion. No air aggregate is added over the same gas components. Native Elementary flow; N2, CAS7727-37-9, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Dioxygen to air (`oxygen_air`)

Measured unreacted O2 outlet with actual gas conditions; oxygen consumption requires independent chemistry and not inferred complete combustion. Native Elementary flow; O2, CAS7782-44-7, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Uncured coating-powder aerosol to air (`powder_aerosol_air`)

Conditional emitted physical particles of the actual whole powder formulation, with composition, capture efficiency and size distribution separately measured. Not a claim that mixed particles are one pure chemical or that total PM equals any species.

- Selected flow: Uncured coating-powder aerosol to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

###### Iron(III) oxide particulate to air (`iron_oxide_air`)

Only independently confirmed Fe2O3 molecular/solid identity and particle structure from actual welding/abatement sampling; total iron or total welding fume cannot establish this species. Native Elementary flow; Fe2O3, CAS1309-37-1, emission to air, unspecified, reference Mass/kg. Select only the independently confirmed actual molecule, phase, origin and receiving compartment; no assumed occurrence, air fraction, complete conversion or quantity. Gross inlet/outlet and unchanged atmospheric throughflow remain independent physical measurements, without a duplicate purchased-air provider. Native aliases are retained evidence, never permission to substitute another molecule, isotope, mixture, NOx-equivalent or total particulate.

- Selected flow: iron(iii)oxide `c821ef9c-3ec2-4c39-947f-a628c9e9baf3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `pulage-cabinet-manufacture-2025`

### Process: Post-release storage and factory-gate handling (`p_service`)

#### Inputs

##### Product flows

###### Post-release handling electricity (`service_electricity`)

Only actual incremental storage, packing, handling and dispatch energy within the declared observation horizon, attached to each original release cohort Q_c. Completed service is not deducted because a cabinet remains in finished stock. No second whole-site electricity bill. Product; CN supply; 1–35 kV medium-voltage grid-average consumption mix to user. Only the matching purchased meter boundary can use this identity; verify actual voltage, location, grid period and included transformer/distribution losses. Replace identity for another voltage/geography; downstream low-voltage submeter use does not prove purchased low-voltage supply. Reference property is Net calorific value in MJ; convert metered kWh by 3.6, not by material mass.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole final section8 report for this card attributable raw burden numerator and original release Q_c; linked protocol collects raw values and this card does not divide again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `pulage-cabinet-manufacture-2025`

###### Returned complete steel filing cabinet (`returned_cabinet_in`)

Conditional gross physical return, identified by original unit/cohort and original delivery, current measured state/mass and permission to work. It is not a new purchased cabinet or new production Q; carry original burden unchanged and attach only real incremental inspection/rework/handling. Native whole manufactured office-metal-furniture Product/Mass family applies only to the actual complete compatible cabinet in this physical Product movement, retaining its actual condition and original cohort. The selected flow does not assert current acceptance, permission or restoration. Record all actual unauthorized/failed movements; parts, mixed discards or an actually different Waste state require their own compatible atomic identity/protocol before dataset completeness, without deleting the original facts. Full actual V is divided once by original Q_c, never by current dispatch or an allocated burden share.

- Selected flow: Other metal furniture, of a kind used in offices `d640f8df-64e2-4ca5-b3c0-bd3c5c0b7245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `pulage-cabinet-manufacture-2025`

#### Outputs

##### Product flows

###### Dispatched complete steel filing cabinet (`dispatch_cabinet_out`)

Gross physical dispatch leg, including previously released stock and authorized reworked units; pair returns by original delivery rather than assuming equal weights. This disclosure is not a second quantitative reference or another manufactured output. Native whole manufactured office-metal-furniture Product/Mass family applies only to the actual complete compatible cabinet in this physical Product movement, retaining its actual condition and original cohort. The selected flow does not assert current acceptance, permission or restoration. Record all actual unauthorized/failed movements; parts, mixed discards or an actually different Waste state require their own compatible atomic identity/protocol before dataset completeness, without deleting the original facts. Full actual V is divided once by original Q_c, never by current dispatch or an allocated burden share.

- Selected flow: Other metal furniture, of a kind used in offices `d640f8df-64e2-4ca5-b3c0-bd3c5c0b7245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `pulage-cabinet-manufacture-2025`

### Process: Atomic packaging events and burden ownership (`p_pack`)

#### Inputs

##### Product flows

###### Corrugated shipping carton (`pack_carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Corrugated shipping carton (`pack_carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Corrugated shipping carton (`pack_carton_er`)

Conditional externally returned packaging received event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Expanded polyethylene protective-foam piece (`pack_foam_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole foamed-plastic family; Mass/kg; broad synthetic-resin cellular material for cushioning, heated to foam, flexible or rigid. The noncellular-sheet taxonomy contradicts the coherent bilingual cellular identity and remains metadata debt. Positively qualify only the actual complete polyethylene cellular cushioning sheet/article and evidenced production/supply state; no PU Polyfoam, EPS, resin pellets or plain film substitution. No polymer recipe, density, blowing agent, moisture or supplier is fixed by this record; measure the whole wet article and keep included components nonadditive.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Expanded polyethylene protective-foam piece (`pack_foam_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole foamed-plastic family; Mass/kg; broad synthetic-resin cellular material for cushioning, heated to foam, flexible or rigid. The noncellular-sheet taxonomy contradicts the coherent bilingual cellular identity and remains metadata debt. Positively qualify only the actual complete polyethylene cellular cushioning sheet/article and evidenced production/supply state; no PU Polyfoam, EPS, resin pellets or plain film substitution. No polymer recipe, density, blowing agent, moisture or supplier is fixed by this record; measure the whole wet article and keep included components nonadditive.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Expanded polyethylene protective-foam piece (`pack_foam_er`)

Conditional externally returned packaging received event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole foamed-plastic family; Mass/kg; broad synthetic-resin cellular material for cushioning, heated to foam, flexible or rigid. The noncellular-sheet taxonomy contradicts the coherent bilingual cellular identity and remains metadata debt. Positively qualify only the actual complete polyethylene cellular cushioning sheet/article and evidenced production/supply state; no PU Polyfoam, EPS, resin pellets or plain film substitution. No polymer recipe, density, blowing agent, moisture or supplier is fixed by this record; measure the whole wet article and keep included components nonadditive.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Paperboard protective corner (`pack_corner_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Paperboard protective corner (`pack_corner_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Paperboard protective corner (`pack_corner_er`)

Conditional externally returned packaging received event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polyethylene transport film (`pack_film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polyethylene transport film (`pack_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polyethylene transport film (`pack_film_er`)

Conditional externally returned packaging received event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polypropylene packing strap (`pack_strap_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polypropylene packing strap (`pack_strap_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polypropylene packing strap (`pack_strap_er`)

Conditional externally returned packaging received event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole wooden transport pallet (`pack_pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole wooden transport pallet (`pack_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole wooden transport pallet (`pack_pallet_er`)

Conditional externally returned packaging received event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel transport band (`pack_steel_band_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel transport band (`pack_steel_band_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel transport band (`pack_steel_band_er`)

Conditional externally returned packaging received event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole HDPE chemical drum (`pack_chemical_drum_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Whole HDPE chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole HDPE chemical drum (`pack_chemical_drum_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Whole HDPE chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole HDPE chemical drum (`pack_chemical_drum_er`)

Conditional externally returned packaging received event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Whole HDPE chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole kraft-paper powder-coating bag (`pack_powder_bag_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled empty packaging event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_P, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole paper-bag family, production mix at plant, Mass/kg; paper usually kraft, virgin or recycled fibres, open-mouth or valve construction. This positively covers a confirmed complete kraft powder bag under its actual construction/lining/moisture and provider boundary. No fixed fibre ratio, mass, reuse life, coating or supplier is inferred. The fruit-bag record is a separate incompatible use, and neither paper stock nor an unevidenced plastic composite replaces this whole article.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole kraft-paper powder-coating bag (`pack_powder_bag_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional first non-purchased external ingress packaging event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_I, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole paper-bag family, production mix at plant, Mass/kg; paper usually kraft, virgin or recycled fibres, open-mouth or valve construction. This positively covers a confirmed complete kraft powder bag under its actual construction/lining/moisture and provider boundary. No fixed fibre ratio, mass, reuse life, coating or supplier is inferred. The fruit-bag record is a separate incompatible use, and neither paper stock nor an unevidenced plastic composite replaces this whole article.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole kraft-paper powder-coating bag (`pack_powder_bag_er`)

Conditional externally returned packaging received event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_ER, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole paper-bag family, production mix at plant, Mass/kg; paper usually kraft, virgin or recycled fibres, open-mouth or valve construction. This positively covers a confirmed complete kraft powder bag under its actual construction/lining/moisture and provider boundary. No fixed fibre ratio, mass, reuse life, coating or supplier is inferred. The fruit-bag record is a separate incompatible use, and neither paper stock nor an unevidenced plastic composite replaces this whole article.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`pack_carton_s`)

Conditional packaging on gross outward dispatch event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Corrugated shipping carton (`pack_carton_eo`)

Conditional packaging returned outward to provider event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Expanded polyethylene protective-foam piece (`pack_foam_s`)

Conditional packaging on gross outward dispatch event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole foamed-plastic family; Mass/kg; broad synthetic-resin cellular material for cushioning, heated to foam, flexible or rigid. The noncellular-sheet taxonomy contradicts the coherent bilingual cellular identity and remains metadata debt. Positively qualify only the actual complete polyethylene cellular cushioning sheet/article and evidenced production/supply state; no PU Polyfoam, EPS, resin pellets or plain film substitution. No polymer recipe, density, blowing agent, moisture or supplier is fixed by this record; measure the whole wet article and keep included components nonadditive.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Expanded polyethylene protective-foam piece (`pack_foam_eo`)

Conditional packaging returned outward to provider event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole foamed-plastic family; Mass/kg; broad synthetic-resin cellular material for cushioning, heated to foam, flexible or rigid. The noncellular-sheet taxonomy contradicts the coherent bilingual cellular identity and remains metadata debt. Positively qualify only the actual complete polyethylene cellular cushioning sheet/article and evidenced production/supply state; no PU Polyfoam, EPS, resin pellets or plain film substitution. No polymer recipe, density, blowing agent, moisture or supplier is fixed by this record; measure the whole wet article and keep included components nonadditive.

- Selected flow: Foamed Plastic `3a86ddd1-28f8-45ba-9255-74a405e09f03`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Paperboard protective corner (`pack_corner_s`)

Conditional packaging on gross outward dispatch event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Paperboard protective corner (`pack_corner_eo`)

Conditional packaging returned outward to provider event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polyethylene transport film (`pack_film_s`)

Conditional packaging on gross outward dispatch event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polyethylene transport film (`pack_film_eo`)

Conditional packaging returned outward to provider event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polypropylene packing strap (`pack_strap_s`)

Conditional packaging on gross outward dispatch event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Polypropylene packing strap (`pack_strap_eo`)

Conditional packaging returned outward to provider event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole wooden transport pallet (`pack_pallet_s`)

Conditional packaging on gross outward dispatch event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole wooden transport pallet (`pack_pallet_eo`)

Conditional packaging returned outward to provider event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel transport band (`pack_steel_band_s`)

Conditional packaging on gross outward dispatch event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel transport band (`pack_steel_band_eo`)

Conditional packaging returned outward to provider event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole HDPE chemical drum (`pack_chemical_drum_s`)

Conditional packaging on gross outward dispatch event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Whole HDPE chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole HDPE chemical drum (`pack_chemical_drum_eo`)

Conditional packaging returned outward to provider event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Whole HDPE chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole kraft-paper powder-coating bag (`pack_powder_bag_s`)

Conditional packaging on gross outward dispatch event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_S, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole paper-bag family, production mix at plant, Mass/kg; paper usually kraft, virgin or recycled fibres, open-mouth or valve construction. This positively covers a confirmed complete kraft powder bag under its actual construction/lining/moisture and provider boundary. No fixed fibre ratio, mass, reuse life, coating or supplier is inferred. The fruit-bag record is a separate incompatible use, and neither paper stock nor an unevidenced plastic composite replaces this whole article.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole kraft-paper powder-coating bag (`pack_powder_bag_eo`)

Conditional packaging returned outward to provider event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_EO, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Native Product whole paper-bag family, production mix at plant, Mass/kg; paper usually kraft, virgin or recycled fibres, open-mouth or valve construction. This positively covers a confirmed complete kraft powder bag under its actual construction/lining/moisture and provider boundary. No fixed fibre ratio, mass, reuse life, coating or supplier is inferred. The fruit-bag record is a separate incompatible use, and neither paper stock nor an unevidenced plastic composite replaces this whole article.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

##### Waste flows

###### Waste corrugated shipping carton (`pack_carton_w`)

Conditional packaging discarded as waste event for one confirmed corrugated shipping carton; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_carton_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste expanded polyethylene protective-foam piece (`pack_foam_w`)

Conditional packaging discarded as waste event for one confirmed expanded polyethylene protective-foam piece; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_foam_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste expanded polyethylene protective-foam piece
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste paperboard protective corner (`pack_corner_w`)

Conditional packaging discarded as waste event for one confirmed paperboard protective corner; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_corner_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste paperboard protective corner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste polyethylene transport film (`pack_film_w`)

The following supplied-article Product facts are origin history only, not the discarded Waste identity or its UUID. Qualify actual contaminated/discarded state and receiver independently; Conditional packaging discarded as waste event for one confirmed polyethylene transport film; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_film_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; polyethylene film CAS9002-88-4; at-plant production mix; no fixed geography, grade, gauge, provider or recycled content. Native luggage taxonomy is inconsistent with the otherwise coherent PE-film physical identity. Comment distinguishes competing PET rather than identifying this film as PET. Use only confirmed PE film of actual supply composition; not foam, PET film or resin pellets.

- Selected flow: Waste polyethylene transport film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste polypropylene packing strap (`pack_strap_w`)

Conditional packaging discarded as waste event for one confirmed polypropylene packing strap; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_strap_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste whole wooden transport pallet (`pack_pallet_w`)

The following supplied-article Product facts are origin history only, not the discarded Waste identity or its UUID. Qualify actual contaminated/discarded state and receiver independently; Conditional packaging discarded as waste event for one confirmed whole wooden transport pallet; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_pallet_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels. Product; whole wooden board/slat pallet, production mix in lumber mill; Mass/kg; no geography, species, moisture, dimensions, reuse life or provider fixed. The electrical-energy classification is an isolated taxonomy defect; the preserved source classification is wooden packaging. Verify actual whole pallet and treatment/moisture; this does not bind resin or steel pallets. Count steel nails already embodied in a purchased pallet only in its composition subaccount.

- Selected flow: Waste whole wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste steel transport band (`pack_steel_band_w`)

Conditional packaging discarded as waste event for one confirmed steel transport band; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_steel_band_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste steel transport band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste whole hdpe chemical drum (`pack_chemical_drum_w`)

Conditional packaging discarded as waste event for one confirmed whole hdpe chemical drum; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_chemical_drum_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste whole hdpe chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Waste whole kraft-paper powder-coating bag (`pack_powder_bag_w`)

Conditional packaging discarded as waste event for one confirmed whole kraft-paper powder-coating bag; keep material/SKU, whole measured wet mass, tare, composition and event timestamp/destination. This quantity numerator is the complete actual gross leg V_powder_bag_W, never a stock-corrected consumption or a burden/allocation share. It creates no extra procurement, supplier burden or credit. Attribute any real upstream/treatment/service burden once in the separate owner ledger. P and I are mutually exclusive ownership events for the same received article; external return receipt is not a new purchase. Internal reuse cancels.

- Selected flow: Waste whole kraft-paper powder-coating bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

### Process: Equipment and repair stock plus current service (`p_assets`)

#### Inputs

##### Product flows

###### Complete sheet-metal press brake (`asset_press_brake_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Complete sheet-metal press brake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel shear blade (`asset_shear_blade_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Steel shear blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Steel bending die (`asset_bend_die_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Steel bending die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Copper resistance-welding electrode (`asset_electrode_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Copper resistance-welding electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Whole hydraulic-oil formulation (`asset_hydraulic_oil_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Whole hydraulic-oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Replacement steel drawer-slide assembly (`asset_repair_slide_in`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Replacement steel drawer-slide assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Cooling-water make-up (`cooling_in`)

Conditional actual separate aqueous stream; retain independently measured volume/state-specific density and full wet mass. Real added water retained in closing equipment/stock remains both an influx and part of full closing mass. Pair internal cooling circulation without a new purchase; actual evaporation is separately species-resolved. Product; treated municipal/potable water production and supply at plant/to consumer; no fixed geography. Reference is Mass/kg; native secondary Volume coefficient is not a measured density. Match actual treatment, quality and provider; not untreated abstraction, deionised water, steam or recovered effluent. Measure density for a volume-to-mass conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`

###### Repair cleaning water (`repair_water_in`)

Conditional actual separate aqueous stream; retain independently measured volume/state-specific density and full wet mass. Real added water retained in closing equipment/stock remains both an influx and part of full closing mass. Pair internal cooling circulation without a new purchase; actual evaporation is separately species-resolved. Product; treated municipal/potable water production and supply at plant/to consumer; no fixed geography. Reference is Mass/kg; native secondary Volume coefficient is not a measured density. Match actual treatment, quality and provider; not untreated abstraction, deionised water, steam or recovered effluent. Measure density for a volume-to-mass conversion.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`

#### Outputs

##### Waste flows

###### Discarded complete sheet-metal press brake (`asset_press_brake_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded complete sheet-metal press brake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Discarded steel shear blade (`asset_shear_blade_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded steel shear blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Discarded steel bending die (`asset_bend_die_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded steel bending die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Discarded copper resistance-welding electrode (`asset_electrode_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded copper resistance-welding electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Discarded whole hydraulic-oil formulation (`asset_hydraulic_oil_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded whole hydraulic-oil formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Discarded replacement steel drawer-slide assembly (`asset_repair_slide_out`)

Conditional actual new/reused repair or asset physical event with full state, attached fluid/moisture, composition and measured gross amount. X_in/X_out are de-duplicated only against an OTHER same-event flow on the SAME side (inflow against inflow, outflow against outflow), never against stocks, the opposite side or mere card existence; new material remaining in closing stock keeps its real influx and the full closing mass. Do not subtract both. Keep asset stock and once-attributed current service burden separate; no fixed lifetime or one whole machine charged per kg. Retain every actual post-release repair and its incurred flows/burdens, including unauthorized, failed or rejected work. Manufacturer/specification permission, post-work tests, acceptance and disposition determine authorization and current qualification only, never deletion, presumed restoration or new Q.

- Selected flow: Discarded replacement steel drawer-slide assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010`

###### Cooling-water blowdown (`cooling_out`)

Conditional actual separate aqueous stream; retain independently measured volume/state-specific density and full wet mass. Real added water retained in closing equipment/stock remains both an influx and part of full closing mass. Pair internal cooling circulation without a new purchase; actual evaporation is separately species-resolved.

- Selected flow: Cooling-water blowdown
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`

###### Repair aqueous cleaning effluent (`repair_water_out`)

Conditional actual separate aqueous stream; retain independently measured volume/state-specific density and full wet mass. Real added water retained in closing equipment/stock remains both an influx and part of full closing mass. Pair internal cooling circulation without a new purchase; actual evaporation is separately species-resolved.

- Selected flow: Repair aqueous cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full actual gross leg V for this card, reported once by the sole final report in section8 with original release Q_c; no stock correction or burden allocation of V and no second purchase/burden/credit.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `pulage-cabinet-manufacture-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | Use this hierarchy only for declared attributional modelling where allocation is required. First assign exclusive inventories to the actual cabinet/order and subdivide operations; next use justified virtual subdivision. Actual material embodiment, meter boundaries, batch work, fixtures and oven loads must be understood before choosing a key. | `jrc-ilcd-allocation-2010` |
| allocation_causality | all inventory rows | For each remaining exchange independently establish the determining physical causal relation between the delivered co-functions and changes in that exchange. For a shared cleaning/coating line this may require actual treated surface and coverage, cycle intensity and time; merely having mass or price data proves no causality. Do not impose the same physical key on materials, energy, ventilation, equipment and storage or treat a checklist as an arbitrary choice. | `jrc-ilcd-allocation-2010` |
| allocation_residual | all inventory rows | Only the demonstrably inseparable residual of a common multifunctional process may use actual contemporaneous market value at the same process gate, quantity and state. Correct later packaging, transport and conditioning costs back to that gate; disclose zero/negative values, evidence gaps, sensitivity and review. Do not use downstream retail prices or a fixed share. This is not QFD allocation between functions of a multifunctional consumer product and not permission for automatic recycling credits. | `jrc-ilcd-allocation-2010` |
| allocation_gross_waste | all inventory rows | All physical gross inputs/outputs, packaging legs, waste masses and asset movements remain unscaled by burden allocation. Ordinary failed cabinets, samples, scrap, powder, sludge and wastewater keep their causal manufacturing and treatment burdens even if sent away or sold. Internal transfers/recovered powder pair and cancel without new procurement, Q or credits. An independent real coproduct/recycling handover needs its specific methodology and receiving inventory once; sales alone never justify T_other. Allocated burden vectors must sum to the unallocated burden. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocol collection_method cells retain unnormalised original records. Only single_quotient executes the division; aggregation_rule is reporting granularity and refers to the same result. Manufacturing burden, service burden and unscaled physical gross quantities remain separately labelled dimensions. No generic all-rows stock correction or allocation is applied to physical V cards.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_factory | finished_cabinet and stock genealogy | calibrated_acceptance_ledger | unit/lot ID; model; drawing/configuration; drawer/slide/lock/handle/feet/interlock; cured coating; complete net accepted mass; tare; moisture state; first-release timestamp; tests; defects; opening/closing raw/WIP/FG; original cohort and inherited vectors | Owner: production QA and warehouse. Weigh each complete accepted cabinet on a calibrated scale excluding removable transport packaging, contents and test weights; preserve raw mass, calibrated uncertainty and signed first acceptance. Q sums only these unique first-release masses. Reconcile every stock/return/rework event without creating Q twice. No per-output division during collection. | kg | every unit/lot and movement | complete matched manufacturing cohort and adjacent-period carry | actual sheet-to-finished cabinet line and all external fabrication providers | per 1 kg reference flow | calibration; signed test/acceptance; configuration; full stock and vector bridge |
| cp_materials | p_factory | each whole supply and actual independent additive | receipt_issue_composition | exchange ID; lot; supplier; whole supply mass; included water/actives/packaging; SDS/COA; grade/form; work order; raw/WIP stocks; failures; subcontract boundary; inherited burden vector; unique owner | Owner: material custodian and laboratory. Retain raw receipts, calibrated net issues and representative independent assay; separate whole purchased formulations from their subaccounts and actual onsite purchases. Preserve full failed/cleanup orders and opening/closing per-exchange burden. No normalization. | kg; item; measured kg per complete part; assay | each receipt/issue plus representative lot assays | full same cohort including zero-output orders and WIP carry | each actual stock supplier and onsite/subcontract stage | per 1 kg reference flow | invoices; weigh records; drawing/BOM; SDS/COA; assay and owner reconciliation |
| cp_utilities | p_factory | one carrier at a time | raw_meter_and_state | carrier; meter boundary; voltage/location; start/end; kWh/MJ/kg/m3; integrated-vs-rate; duration; pressure/temperature/composition; independent density/LHV; furnace type; idle/start/stop/failures; double-count flags; allocation relation | Owner: utilities engineer. Preserve actual raw meters, invoices, operating logs and independent state/composition measurements; disaggregate common equipment electricity once. No assumed steam/boiler; actual purchased steam/heat, condensate or heat-exchange water would need separate atomic mass/state/enthalpy/provider contracts before extension. No collection division. | kWh; MJ; kg; m3 with conditions; rate and time | continuous plus each operating event | full cohort including start/stop/idle/cleaning/failures | cutting to inspection and shared utilities inside stated bill boundary | per 1 kg reference flow | meter calibration; supplier bill; state/composition tests; causal allocation proof |
| cp_water | p_factory | each purchased/added aqueous stream and water subaccount | wet_stock_flow_and_sample | stream/phase; gross wet mass; volume; measured density at temperature/composition; water/solids/active assay; dilution; bath stocks; dragout; recirculation; drains; actual water reaction extent; humidity and vapour links | Owner: water/pretreatment engineer and laboratory. Preserve independent actual intake/outlet meters, wet weighing and matched samples; distinguish supplied formulation water, additional water and internal reuse. Keep full wet closing stocks and real added influx together. Do not derive reaction water or a second outlet from a common residual; no normalization. | kg; m3; measured density; assay | continuous meters and each bath change/sample | full matched period including cleaning/failures and wet-stock carry | actual cleaning/phosphating/rinse/dry supply and external treatment handoff | per 1 kg reference flow | sampling chain; laboratory method; moisture/density calibration; water balance |
| cp_species | p_factory | each actual atmospheric and emitted species | independent_species_monitoring | species; CAS; molecular/particle structure; medium; origin; stack/fugitive/source; raw concentration; actual integrated carrier volume or rate/time; state/density; detection limit; capture/control status; full inlet/outlet; failures; uncertainty | Owner: environmental engineer and competent laboratory. Independently sample actual speciated inlet/outlet and uncontrolled releases across normal/abnormal operation. Preserve raw concentration and matched physical carrier/state with no output division. Atmospheric gross gas components are not provider purchases. Mixed formulation aerosol has measured composition/size, never an assumed pure species. Total NOx/VOC/COD/metals cannot stand in for actual molecules. | kg; concentration; integrated m3; rate; time; state | representative continuous/event samples including failures | entire matching cohort and controls downtime | actual vents/stacks/fugitives and gas inlets; destination-specific media | per 1 kg reference flow | sample chain; species method; detection limits; independent gas/density records |
| cp_waste | p_factory | each actual waste and treatment burden owner | wet_waste_manifest | waste ID; gross full wet mass; solids/water; composition; contaminated state; origin cohort; stocks; rejects/samples; recipient; actual treatment; gate fee/sale; provider coverage; assigned vector | Owner: waste manager and laboratory. Preserve raw weighed tickets, assays, treatment/transport receipts and actual provider boundaries. For any actual mixed outlet independently measure every material-origin W and use one mixed total with nonadditive origin subaccounts OR disjoint origin exchanges summing to that total; one treatment provider only. Add a compatible atomic mixed-Waste card/protocol before factory dataset completeness if that real outlet occurs. Physical V stays full; ordinary manufacturing/treatment burden stays with originating cohort unless a justified independent-function handover is documented once. No subtraction for sale or movement alone; no collection normalization. | kg; wet/dry assay; treatment service records | each discard/dispatch and representative sample | full cohort and opening/closing waste stocks | forming/finishing/quality stages to actual recipient boundary | per 1 kg reference flow | scale; manifests; assay; recipient proof; exact once burden owner |
| cp_pack | p_pack | each material/SKU and each P/I/ER/S/EO/W event | six_leg_physical_and_owner_ledger | material/SKU; event and direction; full wet mass; measured piece tare; composition/moisture; empty/attached WIP/attached FG/reusable opening/closing; P; I; ER; gross S; EO; W; measured X_in/X_out and OTHER same-side duplicates; independent origin W for an actual mixed outlet and total-OR-partition representation; whole-article/component bridge; natural humidity; internal reuse; upstream owner; actual burden dimensions; original cohort; service horizon ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Owner: receiving/packaging warehouse. Retain full actual six-leg records separately for each material including supplier-included packaging and external returns. Weigh whole wet pieces; keep included component subaccounts without purchasing twice. Reconcile opening + P + I + ER + X_in = closing + S + EO + W + X_out per material. X is only the distinct repair/addition/removal flow not already in another SAME-side event; stocks and opposite-side flows are never duplicate deductions. One measured mixed outlet uses a mixed total with nonadditive measured origin W subaccounts OR disjoint origin exchanges, never both, with one provider. Preserve natural moisture exchange without inventing repair water. Reconcile opening + P + I + ER + X_in = closing + S + EO + W + X_out per material. X is only the distinct repair/addition/removal flow not already in another SAME-side event; stocks and opposite-side flows are never duplicate deductions. One measured mixed outlet uses a mixed total with nonadditive measured origin W subaccounts OR disjoint origin exchanges, never both, with one provider. Preserve natural moisture exchange without inventing repair water. No netting influx against closing stock, no economic scaling, and no procurement/credit from physical disclosure. Attribute genuine production/treatment/service once in owner ledger; never use stock-corrected A for gross cards. No division during collection.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; item; independently measured whole wet piece mass | each packaging event and stock count | complete cohort plus explicit post-release observation horizon | all external packaging ingress/egress and attached/empty/reusable stocks | per 1 kg reference flow | scale; stock movement; supplier included-owner proof; six-leg closure |
| cp_service | p_service | actual service increments and physical cabinet movements | original_cohort_horizon | original unit/cohort Q_c; original delivery; gross dispatch/return masses separately; opening/closing FG inherited burden; service horizon; raw electricity; work permission; added/removed parts/water; post-work tests; acceptance; disposition; unused/unassigned service | Owner: warehouse, service engineer and QA. Preserve unnormalised actual service meters/work orders and each independent gross leg linked to original cohort. Keep original manufacturing once; completed storage/handling service is not removed for remaining FG. Return mass is not assumed equal to original delivery; actual increments/losses are measured. No repeated Q and no collection division. | kg; MJ; kWh; actual service time/state | each event and observation-horizon closure | declared horizon bound to original release cohort | on-site storage/packing/handling/dispatch and all actual post-release work, including unauthorized, failed or rejected work | per 1 kg reference flow | meter records; stock bridge; original delivery; permission; signed post-tests/disposition |
| cp_assets | p_assets | each machine/tool/repair part and aqueous/fluid event | physical_asset_service_split | asset/part/fluid ID; new/reused state; receipt/removal X_in/X_out; full wet mass; installed fluid/moisture; full opening/closing; in/out duplicates; measured service/load/time/capacity; actual remaining capacity; maintenance; original cohort; manufacturer work permission; tests/disposition; once burden owner | Owner: maintenance/asset engineer and QA. Retain physical receipts/removals and independently measured full wet stock, fluids and water. Deduplicate X only against an OTHER same-event flow on the SAME side, never against stock, the opposite side or mere card existence; never cancel a real addition merely retained in closing stock. Keep physical gross V unscaled and asset service burden separately attributed once by measured actual service/capacity evidence and justified method. No assumed lifetime or double whole-provider charge; no collection normalization. | kg; item; measured moisture/fluid; service time/capacity | each acquisition/repair/removal and full stock close | full manufacturing cohort and specific post-release horizon | actual machine, tooling, installed fluids, cooling and all actual repair, including unauthorized, failed or rejected work | per 1 kg reference flow | asset register; weighing; fluid/water sampling; measured capacity; permission and post-tests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | all inventory rows | Convert raw values before attribution: tonnes to kg; measured count times independently measured complete-part mass; volume times independently measured density of that material at the actual composition/temperature/pressure. Integrate actual rates over their durations; do not multiply integrated volumes by time again. Electrical kWh times3.6 gives MJ. Fuel carrier mass/composition/LHV and burner heat are separate linked dimensions with one upstream owner. Native secondary properties are not measurements of density or cabinet mass. | cp_release; cp_materials; cp_utilities; cp_species; cp_water; cp_pack; cp_assets | converted raw unnormalised amounts | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| match_manufacturing | all inventory rows | For each exchange e, construct manufacturing A_e = B_open,e + U_e - B_close,e - T_other,e after actual unit conversion and valid exclusive/causal/residual allocation. B terms are traced exchange burden vectors in raw/WIP/unused unassigned stores, not inventory mass subtracted from energy. B_close excludes all first-released FG already in Q. Stock-corrected consumption is not corrected again. Keep ordinary failures, samples, waste and their treatment; T_other is allowed only for a true independent cohort/function with a justified one-time handover and a receiving vector. Preserve zero-Q loads and genealogy. | convert_raw; cp_release; cp_materials; cp_waste; cp_assets | manufacturing A_e and positive release cohort Q | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| match_service | all inventory rows | For each actual post-release service exchange use A_e,c = B_open_unused,e,c + U_service,e,c - B_close_unused,e,c - justified one-time other-function handover. Retain original cohort Q_c and declared observation horizon, even for zero current dispatch or closing FG. Never remove performed service because the cabinet is still in stock or because original manufacturing was already carried. Returns/rework retain original burden and add all actual incremental work, including unauthorized, failed or rejected work; record permission, tests, acceptance and disposition as separate qualification facts, never as data-inclusion filters. Service packet covers that horizon only; no future lifetime is assumed. | convert_raw; cp_service; cp_release; cp_assets | service A_e,c bound to original Q_c and horizon | `bisley-office-filing`; `jrc-ilcd-allocation-2010` |
| select_gross_numerator | all inventory rows | For every physical gross disclosure card the numerator is exactly its complete measured gross leg V_e after raw unit conversion, including packaging P/I/ER/S/EO/W, actual waste, gas/aqueous species and asset/repair/water events. Do not substitute manufacturing/service A_e, B_open+U-B_close, consumption net of stocks or any economic share. Preserve influx and full closing wet mass together. This is a physical disclosure; it creates no second purchase, treatment obligation, upstream burden or credit. Link any real burden to its single owner separately. | convert_raw; cp_pack; cp_waste; cp_species; cp_assets; cp_service | unscaled complete gross numerator V_e | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| single_quotient | all inventory rows | The only normalization: reported quantity = selected numerator / Q_c once. For manufacturing burden dimensions select match_manufacturing A_e; for service burden dimensions select match_service A_e,c; for physical gross dimensions select the full V_e from select_gross_numerator, never a burden vector or allocation share. Q_c is that packet original unique first-release whole-cabinet mass in kg, not dispatch, material input or another cohort. The reference finished_cabinet is fixed at1kg. Cards and aggregation rules reference this same report and do not divide again. Record observed service horizon h separately; it is not an additional divisor. Actual rate integration in convert_raw is retained. Record observed service horizon h separately; it is not an additional divisor. Actual rate integration in convert_raw is retained. If Q_c=0 retain real loads for explicit later attribution and issue no unit result. | match_manufacturing; match_service; select_gross_numerator; cp_release | one per1kg reference-flow report | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| physical_closure | all inventory rows | Before allocation close total gross physical mass and each relevant elemental ledger: opening raw/WIP/FG/packaging/equipment wet stocks plus all actual external inflows = full closing stocks plus actual external outflows. Include atmospheric species, attached/installed water and every repair/packaging influx without cancelling an influx against its own closing stock. Internal handoffs cancel. At the manufacturing-to-FG gate Q transfers internally; full-gate closure cancels it rather than adding Q and closing FG as two products. Separately reconcile genuine chemistry, species, free/structural/reaction water and phase change using independent measurements; do not residual-fit two unknowns. | cp_release; cp_materials; cp_water; cp_species; cp_pack; cp_assets; cp_service; cp_waste | physical elemental and independently evidenced species/water closure | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Each bound flow must match every native name, CAS, supply form, route, geography, medium, dataset type and reference property. Broad compatible families retain explicit primary product constraints; hard conflicts require another identity. Missing auxiliary/provider matching is disclosed and cannot justify false quantitative data. | complete native identity and supply documents |
| dq_completeness | all inventory rows | No default cabinet weight, steel thickness, drawer count recipe, coating thickness, cure temperature/time, lifetime, certification, strength or emission factor. Future actual data must cover all manufacturing, zero-output work, stock vectors, services, packaging gross legs and atomic species; a missing real core method/input remains a hold for the affected dataset. | full process and material/species reconciliation |
| dq_traceability | all inventory rows | Keep calibrated original records, sampling uncertainty/detection limits, accountable owner, reporting geography/time, supplier versus onsite boundary, all allocation rationales and sensitivity. Historical and manufacturer examples establish qualitative scope, not contemporary site recipes, numbers or scientific certification. | original records; calibration; source applicability; uncertainty and sensitivity |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | all inventory rows | Verify complete cabinet terminal, configuration, unique quality release, every required qualifier and all native restrictions; component-only, electrical, safe or kitchen-cabinet identities cannot stand in for this reference. Confirm mass basis independently of native family wording. | `un-cpc3-structure-2025`; `pulage-cabinet-manufacture-2025`; `bisley-office-filing` |
| validate_basis | all inventory rows | Verify single_quotient is the only division: collection raw, conversion then actual attribution, chosen numerator then original Q_c once. All gross cards use full V, not B/A/price shares. Q=0 gives no unit result. Closing FG is already in first-release Q and manufacturing burden; service completed for it stays with its original cohort. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| validate_balance | all inventory rows | Independently close manufacturing, FG/service and combined external-gate gross physical, elemental, actual species and water ledgers. Pair internal transfers without external procurement or a second Q. Check each packaging material has six event cards and full stock bridge, not merely a six-leg protocol. Preserve every real repair/water influx plus full closing mass; report unresolved imbalances without residual-fitting. | `pulage-cabinet-manufacture-2025`; `jrc-ilcd-allocation-2010` |
| validate_route_quality | all inventory rows | Confirm actual joining and complete powder-coat pretreatment/application/cure/assembly route, whole formulation ownership, real losses/wastes/species and actual dimensional/function/finish/load/safety tests per manufacturer and intended specification. Reject unsupported whole-core substitutions and fabricated zero flows. Retesting is not new production. All actual post-release rework and incurred flows/burdens must remain recorded, including unauthorized, failed or rejected work. Permission, post-tests, acceptance and disposition qualify authorization/current state only, with no deletion, presumed restoration or new Q. | `pulage-cabinet-manufacture-2025`; `bisley-office-filing`; `bis-is3313-1983-historical` |
| validate_readiness | all inventory rows | This method requires real foreground collection before a dataset can be complete. Mechanical schema/measurement checks do not establish methodology, translation, certification, mapping or publication approval. Missing real information remains explicit; no draft or unverified method is counted as accepted classification coverage. | `jrc-ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | A complete actual configured cabinet manufacture dataset, with explicit original-cohort factory service packets and their observation horizon |
| allowed_use | Matched complete steel office filing cabinet supply after verifying identity, route, quality and whole-unit mass; no function equivalence from kg alone |
| excluded_use | Parts, purchased finished-cabinet repackaging as manufacturing, electrical/special safes, chairs, kitchen cabinets, unspecified furniture, use lifetime or automatic recycling credit |
| required_metadata | All reference qualifiers; model/drawing and full BOM; actual site/time/providers; raw/WIP/FG and burden genealogy; Q event; utilities; gross packaging/asset/water/species; source applicability; original service horizon; uncertainty |
| required_quality_disclosure | Measured coverage and all gaps; native identity restrictions; source limitations; full gross and elemental/species closure; actual allocation; missing/failing work; first-release and service distinction; no scientific/translation/certification claim from machine checks |
| update_trigger | Changed steel/formulation/route or supplier boundary, cabinet configuration, cure/test specification, utility conditions, waste treatment, packaging, identity restrictions or observed service horizon |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-structure-2025 | official_guidance | United Nations, CPC Ver.3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification context38121 and adjacent furniture/parts categories; not canonical identity or coverage acceptance. |
| pulage-cabinet-manufacture-2025 | handbook | Pulage Furniture, How Steel Filing Cabinets Are Made: Inside the Manufacturing Process, 1 December 2025. https://pulage-furniture.com/blogs/%E6%96%B0%E9%97%BB/how-steel-filing-cabinets-are-made-inside-the-manufacturing-process | Qualitative sheet-to-cabinet process, cleaning/phosphating, whole powder/thermal cure, hardware assembly, inspection and packaging prompts. Different cabinet/KD variants; no adopted numerical recipe, thickness, cure setting or emission claim. |
| bisley-office-filing | handbook | Bisley, Office Filing, complete manufacturer product page, undated. https://www.bisley.com/products/filing/cabinets/ | Independent complete welded, powder-finished office filing-cabinet function, drawer hardware and safety configuration. No imported dimensions, loading figures, warranty-as-life or certification. |
| bis-is3313-1983-historical | standard | IS3313:1983 (second revision), Steel Filing Cabinets for General Office Purposes, historical BIS primary document via public mirror. https://law.resource.org/pub/in/bis/S03/is.3313.1983.pdf | Historical sections1–11, Fig.1 complete cabinet and adjacent construction/finish/testing context. Historic liquid-enamel alternative does not establish powder chemistry or present certification; no old dimensions, thickness, cycles or loads adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide for LCA – Detailed Guidance, First edition March2010, sections7.9.2–7.9.3, printed255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality and residual process-gate market-value hierarchy; not an industrial production recipe, default share, QFD method or automatic recycling credit. |
