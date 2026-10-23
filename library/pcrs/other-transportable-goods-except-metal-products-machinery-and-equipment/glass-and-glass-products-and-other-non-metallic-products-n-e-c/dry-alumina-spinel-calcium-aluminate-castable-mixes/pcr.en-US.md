---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.dry-alumina-spinel-calcium-aluminate-castable-mixes
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Factory dry-blended alumina-spinel calcium-aluminate castable mixes

## 1. Scope and Applicability

This attributional PCR covers factory manufacture of dry unused calcium-aluminate-bonded dense alumina-spinel castable mixes: actual mineral and binder receipt, any actual on-site sizing/preparation, separate or whole supplied dispersant dosing, dry blending, dust extraction, bag filling/sealing, representative batch sampling and first final quality release. Trent documents real Scunthorpe blending/bagging and cement-class castables; IDEM documents a real stand-alone Vesuvius line using already dried/graded feeds; Almatis documents the alumina-spinel/CAC ingredient system and its hydratable-binder counterexample. These independent subjects form an explicit technical synthesis, not one SKU recipe, same factory or current order. No source recipe, water percentage, permitted throughput, dust factor or laboratory result is a default factory amount. [`almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `trent-castable-testing`; `lancaster-refractory-mixing`]

Exclude installed linings, precast shapes, fired bricks, pressed unfired articles, ordinary construction cement/concrete, single oxide powder, porcelain/technical-ceramic bodies, cement-free hydratable-alumina and sol-bonded routes, magnesia gunning/ramming masses and lightweight insulating castables. Buying a complete final dry castable and merely repacking it is not this raw-to-formulated-mix manufacturing route. Customer water addition, installation, cure/dry-out, use and end of life are outside the dry supplied-mix gate; actual factory QC specimen preparation, cure/heating and waste remain included. Later storage/dispatch/returns are separately observed services tied to the original first-release cohort.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.dry-alumina-spinel-calcium-aluminate-castable-mixes |
| classification_refs | CPC3.0:37330; narrower method scope; classification does not establish an accepted mapping |
| covered_products | Dry unused factory-formulated calcium-aluminate-bonded dense alumina-spinel castable mixes |
| excluded_products | Installed/cured linings; fired bricks; shaped unfired goods; single minerals; ordinary cement/concrete; ceramic bodies; non-CAC and lightweight routes |
| representative_product | A bagged factory dry castable; actual Trent manufacturing terminal with independently supported Almatis alumina-spinel CAC ingredient concept, not an identified Trent recipe |
| production_route | actual supplied feed receipt and preparation; batching; dry mixing; bag fill/seal; actual QC; first release |
| market_state | Dry uninstalled unused blend; no customer-added water; separable packaging outside net mix mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A specified dry refractory formulation for later casting as an alumina-spinel lining |
| How much | 1 kg net dry-supplied mix at unique first final quality release |
| How well | actual composition grain distribution homogeneity moisture net fill sealing application-specific flow/set/strength/other QC acceptance; test specimens are not shipped product |
| How long or cycle | one first-release manufacturing gate; no assumed installed service life; later services use original Qc and observed H |
| reference_flow_link | finished_mix |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Refractory material `02bb10a7-9104-49e4-88d9-119c33628d96` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual site period region and provider boundary; specified dry unused dense alumina-spinel CAC castable and intended refractory application; whole supplied formulation and separately purchased ingredient identities including phase moisture assay and size distributions; actual dry blending and any on-site preparation with batch traceability and homogeneity; cement bonding family actual binder and additive preparations without recipe double purchase; net fill sealed sack moisture protection and actual representative QC acceptance tests; unique first-release net-mix Q including released closing FG; opening closing raw WIP unassigned stores and per-exchange inherited burden vectors; failures zero output start stop idle cleanout trials and actual rework; original cohort Qc observed service horizon H gross FG receipts dispatch returns and condition changes; each packaging empty attached WIP FG reusable pools ownership and gross stock transactions; physical new used asset repair lining mould and installed-fluid stocks versus current service burden; independent species phase element reaction and free structural reaction-water evidence; actual native units density temperature pressure supplier heat and water agreements when applicable; exact compatible native restrictions providers missing data and uncertainty |

Every required qualifier must enter actual dataset metadata, process notes, reference-flow description or equivalent. Native broad family applicability is limited by its complete consuming description and this specified dry terminal.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | cp_release measures net supplied dry mix at actual moisture excluding all packaging; Q includes unique released closing FG once. No bag capacity or laboratory fired density establishes net product mass. |
| native_extensive | all inventory rows | each row native extensive property | declared row unit | Keep kg MJ m3 and t*km distinct. Mass/kg constrains the mix reference, not every energy/water/transport input. Silica native volume requires independently measured powder state/density for kg reconciliation. |
| single_normalization | all inventory rows | row property | row unit per reference flow | Protocols keep undivided raw quantities; raw conversion and actual attribution precede normalize_once. Cards read the same final result only; original-cohort services use Qc and H, not current production Q. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual supplied sintered alumina aggregate, fine oxide supplies, spinel, MgO, silica fume, CAC and actual whole additive preparations; any in-house preparation declared |
| starting_condition_role | foreground_gate |
| product_classification_scope | CPC3.0:37330 narrower dry dense alumina-spinel CAC castable |
| recursive_input_rule | Use upstream whole supplied preparations once; buying final same-category castable and repacking is a different route; internal returns retain inheritance |
| upstream_dataset_requirement | Compatible actual supplied form grade route region and native extensive unit; no automatic zero for unavailable provider |
| disclosure | Complete first-release manufacture and original-cohort observed service boundaries with all raw/WIP/FG history gross packaging assets reactions and missing records |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_manufacture | manufacturing gate | Include actual receiving transport sampling raw-material conditioning/sizing when performed dosing dry mixing transfer dedusting filling/sealing QC specimen preparation testing and first final release. Already dried/graded feed is a valid starting supply, but does not remove factory batching/mixing. Do not import the adjacent tar-taphole process or every plant dryer into the castable line. | `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-factory-castables`; `trent-castable-testing` |
| b_terminal | supplied-state applicability | The output is a complete dry uninstalled formulation, not a single oxide or installed lining. Keep customer water addition casting curing initial lining dry-out and use outside this gate, while including actual factory test-water specimen heating tests and waste. No source proves a common recipe, same manufacturer or blanket interchangeability of CAC and hydratable/sol binders. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `trent-castable-testing` |
| b_supply | whole supplied preparations | Purchase each actual whole preparation only once; its carrier water active ingredient and assay fractions are subledgers. If prepared on site, retain each real purchased substance and preparation energy/loss. Real unlisted ingredients fuel heat cleaning agents species or wastes require separate atomic rows before modelling; zero and other cannot hide them. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing` |
| b_q | first-release accounting | Q is unique actual net as-released dry-mix mass at first final batch acceptance; exclude bag/liner/pallet mass and samples already consumed. Include newly released closing FG in Q once. Manufacturing closing inherited burden contains only unreleased raw/WIP and genuinely unassigned non-WIP stores, never already released FG; do not subtract released closing-FG manufacturing load or add that FG as a second output. All failure zero-output startup shutdown idle cleanout trial and rework loads remain. | `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `ilcd-detailed-guidance-2010` |
| b_service | released cohort | Keep manufacturing burden attached to its first-release cohort. Later warehouse handling secondary packing dispatch return retest and incremental rework are observed services on original cohort Qc over explicit H; no assumed lifetime. Actual return mass/state and original dispatch are traced independently. This is not net-delivery normalization: delivery and reacceptance create no new Q and no automatic historical manufacture reversal. | `trent-factory-castables`; `ilcd-detailed-guidance-2010` |
| b_water_air | physical and species gates | Reconcile independent whole physical mass and relevant Al Mg Ca Si H O balances at manufacturing FG service and consolidated gates. Actual neutral gas species inlet/outlet and each particulate phase stay separate from PM/VOC/COD indicators. Free liquid moisture atmospheric vapour crystal/structural water reaction water and true condensate are distinct; one residual cannot fit two unknowns. Integral gas/liquid volumes are not multiplied by time again; only actual rates are integrated, with substance/state-specific density. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `ilcd-detailed-guidance-2010` |
| b_heat_assets | actual utilities and assets | No steam/boiler is assumed for a dry electric blending line. If real purchased heat/steam occurs, add the specific carrier and external condensate/hot-water Product return with measured mass actual thermodynamic state enthalpy and supplier water/energy convention; do not duplicate carrier mass as a second whole-provider purchase. Separate gross new/used machines tools moulds linings maintenance parts and installed fluids from current observed service burdens; no fixed lifetime or whole machine per kg. | `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `ilcd-detailed-guidance-2010` |
| b_pack | each packaging article | For each distinct article independently: opening empty + attached WIP/FG + reusable pools + new purchase + incoming attached + external return received = closing corresponding pools + gross dispatch outward + external return outward + waste. Cancel internal reuse/transfers; exclude packaging from Q. Keep new procurement and inherited packaging burdens distinct from gross physical movements, without economic shrinkage or automatic coproduct/credit. Integral bought components enter once. Add independently measured repair material Radd/Rremove and moisture H2Oin/H2Oout per article: opening pools+P+I+ER+Radd+H2Oin = closing pools+G+EO+W+Rremove+H2Oout. Deduplicate the same water/material only when already carried by another same-side flow term of this bridge, never against closing stock or an opposite-direction flow. A specifically named atomic exchange may supply this bridge term and is not by itself a reason to set it to zero. Real influx remains when added mass is retained in closing stocks. Dry wood/material and free/absorbed water have separate ledgers; one wet residual cannot fit two unknowns. Actual fasteners/glue/other added water/material and removed outlets need specific atomic identity/destination and original Q or Qc/H ownership. | `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`; `ilcd-detailed-guidance-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Mineral binder preparation dry blending and first quality release | required | actual first-release manufacture including pre-release packing; each optional exchange only when real | manufacturing reference | finished_mix |
| packaging | Individual packaging supply and gross physical ledgers | required | actual first-release manufacture including pre-release packing; each optional exchange only when real | physical/service support; not another production output | false |
| service | Observed original-cohort storage dispatch and returns | conditional | actual observed later service H on original Qc | physical/service support; not another production output | false |

All cards below require the actual exchange. Conditional absence requires evidence; unknown is not zero. Actual new flows are added atomically. Before-release packaging/QC belongs to manufacture; later packaging/services use the original cohort. Asset gross stock changes are disclosed physical accounts, while only separately demonstrated current service vectors enter the LCA numerator.

### Process: Mineral binder preparation dry blending and first quality release (`manufacture`)

#### Inputs

##### Product flows

###### Tabular alumina aggregate (`tabular_coarse`)

Receive and dose the whole sintered tabular aggregate across its actual size fractions; weigh supplied product and keep moisture/assay subledgers. It is a manufactured mineral feed, not a finished brick. Native Sintered Corundum is Al2O3 CAS1344-28-1 made by sintering, with at-plant production-mix identity. Use only actual sintered alpha-alumina/tabular grade and measured grain size/purity; exclude fused alumina, raw bauxite, hydrated alumina and metal. Native Chinese synonyms loosely mention bauxite while the CAS, English synonyms and manufacturing comment consistently describe sintered oxide; the unwrought-aluminium classification defect is disclosed, never a reason to ignore physical identity. No supplier or grade is established by this family.

- Selected flow: Sintered Corundum `24fba0c7-58f4-4480-9b1f-3a170b6ce0e7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Calcined alumina fine powder (`calcined_fine`)

Dose one actual calcined alpha-alumina fine supply; distinguish it from separately bought reactive alumina. Assay Al2O3 is contained mass and not another purchase. Native alumina is a Product at plant through the Bayer route; its comment mentions natural corundum/hydrated occurrences and synthetic bauxite-derived oxide, but supplies no fixed CAS, particle size or grade. Restrict this row to actual unformulated calcined alpha-Al2O3 from a compatible Bayer-derived supply and the stated fine grade. Exclude hydroxide, bauxite, fused grain and a whole dispersant preparation; retain supplier calcination/milling and phase evidence without assuming them from the name.

- Selected flow: alumina `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Reactive alumina fine powder (`reactive_fine`)

Weigh the actual separately purchased reactive fine grade with phase and milling history; it is neither activated porous adsorbent nor hydratable binder. Do not split a bought combined fine preparation into additional constituent purchases.

- Selected flow: Reactive alpha-alumina powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Preformed alumina-rich spinel aggregate (`spinel`)

Use one supplied preformed oxide spinel aggregate such as the AR78-type material in the technical example; record excess alumina and grain distribution. It is not magnesium aluminide, an Al-Mg alloy or separately purchased MgO plus Al2O3 equal to its assay.

- Selected flow: Alumina-rich magnesium aluminate spinel aggregate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Magnesia fine addition (`magnesia`)

Record actual separately supplied MgO fines and their calcination/reactivity state for the selected formulation. Medical MgO, light-burned powder and a formed magnesia brick cannot establish this grade automatically; no recipe fraction is prescribed.

- Selected flow: Refractory magnesium oxide fine powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Densified silica-fume addition (`silica_fume`)

Collect actual delivered volume or weighed dry/as-received mass with independently measured same-state bulk density in cp_material. Physical mass accounting uses the independently determined mass; normalized inventory preserves native volume. Native silica fume is densified CAS69012-64-2, a silicon/ferrosilicon-production by-product; drying/calcination label, at-plant production mix and reference Volume/m3. Use only compatible densified supplied powder, not fumed silica, quartz or silica sol. Record actual moisture, densification and packing/settling state; determine same-state bulk density independently for any mass-volume conversion. Native volume has no permission to import water density or invent a powder density.

- Selected flow: silica fume `cf0bbd10-aa7a-42eb-af87-fb8f0915fdaf`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Calcium-aluminate cement binder (`cac`)

Dose whole actual hydraulic calcium-aluminate cement, such as CA14S-type binder in the technical example, with actual phase/purity and supply state. Do not bind Portland, sulpho-aluminate clinker or various cement types; CaO/Al2O3 assay is not an additional lime/alumina purchase.

- Selected flow: Calcium aluminate cement dry binder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### ADS3 dispersing-alumina preparation (`ads3`)

Record one whole supplied ADS3-type powder preparation only when separately bought. Carrier alumina, active dispersant and moisture remain subledgers; the supplier formulation is not pure alumina and is not inferred from trade name. If actually formulated on site, add each real purchased chemical, energy and loss instead of the bought-preparation exchange.

- Selected flow: ADS3-type supplied dispersing-alumina preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### ADW1 dispersing-alumina preparation (`adw1`)

Record one whole supplied ADW1-type powder preparation only when separately bought. Carrier alumina, active dispersant and moisture remain subledgers; the supplier formulation is not pure alumina and is not inferred from trade name. If actually formulated on site, add each real purchased chemical, energy and loss instead of the bought-preparation exchange.

- Selected flow: ADW1-type supplied dispersing-alumina preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_material. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_material
- Sources: `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Factory electricity (`electricity`)

Meter actual receipt handling, screening/milling when on site, dosing, mixing, conveyors, bag filling, compressors, extraction and QC furnace/test loads, including failures and idle modes. Keep the actual voltage/geography/provider unresolved until matched; CN medium-voltage candidates do not prove UK factory supply. Convert kWh to MJ once before attribution; no aggregate air or on-site fuel is hidden in the power row.

- Selected flow: Alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_energy. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_energy
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-factory-castables`; `trent-castable-testing`

###### Factory QC and actual cleaning water (`qc_water`)

Include water for actual laboratory specimen mixing/cure, cleaning or other evidenced factory use; customer installation water is outside this dry-mix gate. Separate retained specimen free/structural/reaction water and discharge; no assumed water percentage or moisture-loss speciation. Native Tap water is treated potable supply to industrial/household users, at-plant production mix, with no fixed geography. Its reference is Mass/kg and nonreference Volume coefficient0.001 is not independent density evidence. Use actual treated supply only; exclude direct natural-water resource and unknown industrial effluent. Weigh or independently establish density for volume records in their actual state.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_water. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_water
- Sources: `almatis-alumina-spinel-castables`; `trent-castable-testing`

###### Inbound dry-feed road freight (`inbound_freight`)

Collect real payload including carried packaging and route distance for each actual road leg; t*km is gross payload tonnes times km before LCA attribution. The inspected mass-reference lorry candidate cannot stand in for transport work; preserve actual vehicle/provider and other real modes in separately added exchanges. Do not also buy the carrier fuel already inside a whole freight provider.

- Selected flow: Non-refrigerated lorry freight service
- Flow property / unit: Transport work / t*km
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_transport. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_transport
- Sources: `idem-vesuvius-castable-line-2003`; `ilcd-detailed-guidance-2010`

###### Complete dry-powder mixer (`asset_mixer`)

Conditional on an actual complete dry-powder mixer. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Complete dry-powder mixer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Electric laboratory test furnace (`asset_furnace`)

Conditional on an actual electric laboratory test furnace. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Electric laboratory test furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Steel laboratory specimen mould (`asset_mould`)

Conditional on an actual steel laboratory specimen mould. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Steel laboratory specimen mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Steel mixer replacement blade (`asset_blade`)

Conditional on an actual steel mixer replacement blade. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Steel mixer replacement blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Polyester dust-collector filter bag (`asset_filter`)

Conditional on an actual polyester dust-collector filter bag. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Polyester dust-collector filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Alumina laboratory-furnace lining brick (`asset_lab_lining`)

Conditional on an actual alumina laboratory-furnace lining brick. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Alumina laboratory-furnace lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

###### Mineral lubricating-oil preparation (`asset_oil`)

Conditional on an actual mineral lubricating-oil preparation. Retain new/reused receipts, ownership, installed/loose and opening/closing physical stocks, actual mass/configuration and maintenance records; physical stock is never divided by a presumed life or purchased as a whole asset per kg mix. Track in-installation fluid and water separately. Assign only the observed current service burden under cp_asset; no provider or fixed lifetime is invented.

- Selected flow: Mineral lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_asset. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_asset
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `trent-castable-testing`

##### Waste flows

##### Elementary flows

###### Atmospheric nitrogen inlet (`n2_in`)

For actual extraction/compressor/lab ventilation crossing the physical gate, record this single incoming species with actual temperature, pressure, humidity, composition and independent mass. Integrated volume is not multiplied by time again. Record each additional actual carrier species separately and do not purchase a total-air bundle. Native dinitrogen CAS7727-37-9 is an Elementary resource from air in Mass/kg; no geography. Broad aliases mention liquid and isotope14, but this row is only neutral molecular gaseous N2 in measured incoming atmospheric carrier, never a manufactured separated gas or total nitrogen excluding N2. Retain actual inlet composition/state independently; no standard air fraction.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Atmospheric oxygen inlet (`o2_in`)

For actual extraction/compressor/lab ventilation crossing the physical gate, record this single incoming species with actual temperature, pressure, humidity, composition and independent mass. Integrated volume is not multiplied by time again. Record each additional actual carrier species separately and do not purchase a total-air bundle. Native oxygen CAS7782-44-7 is an Elementary air resource with Mass/kg. Use actual neutral molecular gaseous O2 in the incoming carrier, not manufactured air-separation oxygen, dissolved oxygen, ozone, liquid or excited/ionic alias forms. Require observed composition and state, with no fixed air fraction or density.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### argon (`ar_in`)

For actual extraction/compressor/lab ventilation crossing the physical gate, record this single incoming species with actual temperature, pressure, humidity, composition and independent mass. Integrated volume is not multiplied by time again. Record each additional actual carrier species separately and do not purchase a total-air bundle.  Native neutral natural Ar gas CAS7440-37-1, renewable-element resource from air, Mass/kg. Ar41/Ar40 synonym noise establishes neither isotope nor activity and does not authorize radioactive gas. Independently measure actual atmospheric state/composition; no fixed air fraction, residual fitting or purchased air-separation Product.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Carried inlet water vapour (`humidity_in`)

For actual extraction/compressor/lab ventilation crossing the physical gate, record this single incoming species with actual temperature, pressure, humidity, composition and independent mass. Integrated volume is not multiplied by time again. Record each additional actual carrier species separately and do not purchase a total-air bundle.

- Selected flow: Molecular water vapour in incoming ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

###### Carried inlet atmospheric carbon dioxide (`co2_in`)

For actual extraction/compressor/lab ventilation crossing the physical gate, record this single incoming species with actual temperature, pressure, humidity, composition and independent mass. Integrated volume is not multiplied by time again. Record each additional actual carrier species separately and do not purchase a total-air bundle.

- Selected flow: Carbon dioxide in incoming ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

#### Outputs

##### Product flows

###### First quality-released dry castable (`finished_mix`)

One unique output is the complete specified dry manufactured mix after batch formulation/homogeneity, net fill, intact moisture-protective sack and required quality acceptance. Net mix excludes all packaging and sample rejects. Q includes newly released closing FG once; neither sale nor later retest makes new output. Native Product identity is a manufactured inorganic refractory family explicitly including castables; primary production route and consumption-mix label. It fixes no CAS, grade, geography, installed state or recipe. Here it identifies only one specified dry unused calcium-aluminate-bonded alumina-spinel castable mix at first release or an intact same-cohort transfer; exclude bricks, fibers, coatings, spent linings and an installed/cured lining. No national consumption-mix provider or burden is inferred.

- Selected flow: Refractory material `02bb10a7-9104-49e4-88d9-119c33628d96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_release
- Sources: `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `trent-castable-testing`

##### Waste flows

###### Rejected dry alumina-spinel castable powder (`waste_dry_mix`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Rejected dry alumina-spinel castable powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Discarded hardened castable laboratory specimen (`waste_test_piece`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Discarded hardened castable laboratory specimen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Collected alumina-spinel castable filter dust (`waste_dust`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Collected alumina-spinel castable filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Castable-test and cleaning wastewater (`waste_water`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Castable-test and cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Spent mineral-contaminated polyester filter bag (`waste_filter`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Spent mineral-contaminated polyester filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Discarded steel mixer blade (`waste_blade`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Discarded steel mixer blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Discarded steel specimen mould (`waste_mould`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Discarded steel specimen mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Spent alumina laboratory-furnace lining brick (`waste_lining`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Spent alumina laboratory-furnace lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Waste mineral lubricating oil (`waste_oil`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Retired complete dry-powder mixer (`waste_mixer`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Retired complete dry-powder mixer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

###### Retired electric laboratory furnace (`waste_furnace`)

Record this actual separate external waste with as-exited moisture, contamination, retained fluid and real treatment route. Never use an aluminium-production spent-refractory identity for factory castable waste. Internal recovered material is a transfer with inherited burdens, not this external waste or an automatic sale/credit. Whole retired machines and dismantled parts are disjoint exits; split disassembled outputs and their fluids only in the actual state.

- Selected flow: Retired electric laboratory furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_waste. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_waste
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

##### Elementary flows

###### Atmospheric nitrogen outlet (`n2_out`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission. Native dinitrogen CAS7727-37-9 is an Elementary emission to unspecified air in Mass/kg. Use measured current neutral gaseous N2 leaving the defined gate only; no liquid/isotope-specific or total-N interpretation of broad aliases, and no substitution of indoor, high-stack or long-term media. Keep gross outlet separately from inlet and cancel matching carrier transfers only in consolidation.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### Atmospheric oxygen outlet (`o2_out`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission. Native oxygen CAS7782-44-7 is an Elementary current unspecified-air outlet with Mass/kg. Synonyms include liquid, excited and dioxygenyl-ion terms; those are not adopted. This role is independently confirmed neutral gaseous molecular O2, not total oxygen, ozone or a Product gas. Keep matched gross inlet and outlet and any actual reaction independently.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### argon (`ar_out`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.  Native neutral natural Ar gas CAS7440-37-1, contemporary unspecified-air emission, Mass/kg. Keep actual gross outlet distinct from its resource inlet and any material uptake; Ar41/Ar40 aliases do not authorize isotope/activity, radioactive-noble-gas, long-term or indoor substitution. No aggregate-air duplicate or economic scaling of physical gas mass.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### Carried atmospheric carbon dioxide outlet (`co2_out`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.

- Selected flow: Carried carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### Molecular water-vapour outlet (`water_out`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission. Native water vapour CAS7732-18-5 is current Elementary emission to unspecified air with Mass/kg. Its wide aliases include ice, ions and isotopically labelled/heavy water; adopt only independently established ordinary molecular gaseous H2O. Separate carried inlet humidity, free water, structural water and actual reaction water; do not infer species or reaction yield from total mass loss. It is not a liquid fresh-water outlet.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### oxo(oxoalumanyloxy)alumane (`alumina_air`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.  Native Al2O3 CAS1344-28-1, contemporary unspecified-air Elementary Mass/kg; full chemical family permits only independently confirmed actual alpha-alumina particulate in this row. Native aliases mix activated/fused/tabular grades, catalyst preparations, zirconia blends and mistranslated silica/bauxite; these do not authorize their whole formulation, other chemistry or a predicted phase. Retain independently measured alpha phase and particle/gas boundary, not total Al or PM converted into Al2O3. A different known size/compartment needs its matching identity.

- Selected flow: oxo(oxoalumanyloxy)alumane `e4ecfc13-79bd-4c36-babc-50372fe1b70e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### Independently speciated spinel dust (`spinel_air`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.

- Selected flow: Magnesium aluminate spinel particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### Independently speciated MgO dust (`mgo_air`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.

- Selected flow: Magnesium oxide particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

###### silicon dioxide (`silica_air`)

Record the actual species and physical phase at its real outlet, separating indoor recirculation, building exhaust, external atmospheric emission and collected waste. PM/particle size, total elemental assay, COD and VOC are indicators, not proof of this molecular/mineral mass. Measure carrier pass-through separately; changes and actual reactions need independent evidence. Mixed dust total is a check subledger and not an extra summed emission.  Native SiO2 CAS7631-86-9, contemporary unspecified-air Elementary Mass/kg; this row is only independently identified actual amorphous SiO2 particulate. Many silica-gel/sol/catalyst/trade names and isolated quartz or sodium-phosphate alias noise do not authorize those mixtures, water, crystalline quartz CAS14808-60-7 or a supply Product. Preserve measured phase/size/boundary; total Si, feed silica-fume receipt or PM cannot establish emitted molecular mass. Identified fractions replace their share, never duplicate the total.

- Selected flow: silicon dioxide `37e31ea4-0317-4d50-a77e-54fe9eedcc33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_air. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_air
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

### Process: Individual packaging supply and gross physical ledgers (`packaging`)

#### Inputs

##### Product flows

###### Dry-mix paper sack — New external purchase (`pack_paper_purchase`)

This is only the dry-mix paper sack for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Paper bag is a manufactured paper/kraft open-mouth or valve bag in Mass/kg; virgin or recycled fibers may be present. Here it is one actual dry-mix sack, with its own construction, coating and supplier; it is not raw sack paper or a shopping-bag quantity default. Confirm moisture barrier and load rating. Include an integral supplied liner once within the whole sack; separately purchased liners are distinct only when not already included. No recyclability or avoided-impact claim follows from the native general comment.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Dry-mix paper sack — Incoming attached packaging (`pack_paper_inbound`)

This is only the dry-mix paper sack for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Paper bag is a manufactured paper/kraft open-mouth or valve bag in Mass/kg; virgin or recycled fibers may be present. Here it is one actual dry-mix sack, with its own construction, coating and supplier; it is not raw sack paper or a shopping-bag quantity default. Confirm moisture barrier and load rating. Include an integral supplied liner once within the whole sack; separately purchased liners are distinct only when not already included. No recyclability or avoided-impact claim follows from the native general comment.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Dry-mix paper sack — External return received (`pack_paper_returned`)

This is only the dry-mix paper sack for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Paper bag is a manufactured paper/kraft open-mouth or valve bag in Mass/kg; virgin or recycled fibers may be present. Here it is one actual dry-mix sack, with its own construction, coating and supplier; it is not raw sack paper or a shopping-bag quantity default. Confirm moisture barrier and load rating. Include an integral supplied liner once within the whole sack; separately purchased liners are distinct only when not already included. No recyclability or avoided-impact claim follows from the native general comment.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — New external purchase (`pack_woven_purchase`)

This is only the woven polypropylene refractory sack for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — Incoming attached packaging (`pack_woven_inbound`)

This is only the woven polypropylene refractory sack for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — External return received (`pack_woven_returned`)

This is only the woven polypropylene refractory sack for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — New external purchase (`pack_liner_purchase`)

This is only the separate polyethylene sack liner for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — Incoming attached packaging (`pack_liner_inbound`)

This is only the separate polyethylene sack liner for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — External return received (`pack_liner_returned`)

This is only the separate polyethylene sack liner for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — New external purchase (`pack_pallet_purchase`)

This is only the wooden transport pallet for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg. Family also includes post/collar/side-rail/end-rail platforms and separate wooden collars; this card selects only the actual complete transport pallet, with its measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. Other family members require their own specific article. No EURO geometry, per-pallet mass or service life is inferred. The prior lumber-mill/boards-slats record did not establish its supply-stage/completeness clearly enough; it is not declared unassembled-only merely from absent wording. Whole bought contents are counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — Incoming attached packaging (`pack_pallet_inbound`)

This is only the wooden transport pallet for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg. Family also includes post/collar/side-rail/end-rail platforms and separate wooden collars; this card selects only the actual complete transport pallet, with its measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. Other family members require their own specific article. No EURO geometry, per-pallet mass or service life is inferred. The prior lumber-mill/boards-slats record did not establish its supply-stage/completeness clearly enough; it is not declared unassembled-only merely from absent wording. Whole bought contents are counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — External return received (`pack_pallet_returned`)

This is only the wooden transport pallet for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg. Family also includes post/collar/side-rail/end-rail platforms and separate wooden collars; this card selects only the actual complete transport pallet, with its measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. Other family members require their own specific article. No EURO geometry, per-pallet mass or service life is inferred. The prior lumber-mill/boards-slats record did not establish its supply-stage/completeness clearly enough; it is not declared unassembled-only merely from absent wording. Whole bought contents are counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — New external purchase (`pack_film_purchase`)

This is only the polyethylene pallet stretch film for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — Incoming attached packaging (`pack_film_inbound`)

This is only the polyethylene pallet stretch film for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — External return received (`pack_film_returned`)

This is only the polyethylene pallet stretch film for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — New external purchase (`pack_strap_purchase`)

This is only the polypropylene transport strap for new external purchase. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — Incoming attached packaging (`pack_strap_inbound`)

This is only the polypropylene transport strap for incoming attached packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — External return received (`pack_strap_returned`)

This is only the polypropylene transport strap for external return received. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden pallet repair board (`pallet_repair_wood`)

Only an actual independently received specific wood board for packaging-pallet repair, with measured species/treatment, dry wood, free/absorbed water, provider and ownership. Not a whole pallet or its UUID; actual separate fasteners/glue need specific rows. Included whole-package contents are child ledgers; closing retention does not erase real material/water influx. Tag manufacture Q or observed original Qc/H, without assumed repair/life.

- Selected flow: Wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Tap water (`pack_repair_water`)

Only actual externally supplied treated potable tap water for package repair/cleaning, native Mass/kg without fixed geography/provider. Not customer casting water; do not presume wetting the dry castable, raw resource, recirculation or unknown effluent. Measure actual additions/state/temperature and density independently; native secondary Volume coefficient0.001 is not density evidence. Retain water in wood/packages and actual wastewater/vapour outlets with manufacture-Q/original-Qc/H ownership; no duplicate water already carried by another supply.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `almatis-alumina-spinel-castables`; `trent-castable-testing`

##### Waste flows

##### Elementary flows


###### Atmospheric water vapour absorbed by packaging (`pack_humidity_in`)

Only actual observed ambient H2O-vapour uptake by packaging, CAS7732-18-5; independently measure gaseous humidity/state/temperature/pressure and water uptake mass, without standard air fractions or secondary density. Disjoint from water already carried in packages/repair wood/external make-up. Retained actual uptake remains an influx; no reversible castable hydration is assumed.

- Selected flow: Atmospheric water vapour absorbed by packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`

#### Outputs

##### Product flows

###### Dry-mix paper sack — Packaging on gross physical dispatch (`pack_paper_shipped`)

This is only the dry-mix paper sack for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Paper bag is a manufactured paper/kraft open-mouth or valve bag in Mass/kg; virgin or recycled fibers may be present. Here it is one actual dry-mix sack, with its own construction, coating and supplier; it is not raw sack paper or a shopping-bag quantity default. Confirm moisture barrier and load rating. Include an integral supplied liner once within the whole sack; separately purchased liners are distinct only when not already included. No recyclability or avoided-impact claim follows from the native general comment.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Dry-mix paper sack — Packaging returned externally (`pack_paper_return`)

This is only the dry-mix paper sack for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Paper bag is a manufactured paper/kraft open-mouth or valve bag in Mass/kg; virgin or recycled fibers may be present. Here it is one actual dry-mix sack, with its own construction, coating and supplier; it is not raw sack paper or a shopping-bag quantity default. Confirm moisture barrier and load rating. Include an integral supplied liner once within the whole sack; separately purchased liners are distinct only when not already included. No recyclability or avoided-impact claim follows from the native general comment.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — Packaging on gross physical dispatch (`pack_woven_shipped`)

This is only the woven polypropylene refractory sack for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — Packaging returned externally (`pack_woven_return`)

This is only the woven polypropylene refractory sack for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — Packaging on gross physical dispatch (`pack_liner_shipped`)

This is only the separate polyethylene sack liner for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — Packaging returned externally (`pack_liner_return`)

This is only the separate polyethylene sack liner for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — Packaging on gross physical dispatch (`pack_pallet_shipped`)

This is only the wooden transport pallet for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg. Family also includes post/collar/side-rail/end-rail platforms and separate wooden collars; this card selects only the actual complete transport pallet, with its measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. Other family members require their own specific article. No EURO geometry, per-pallet mass or service life is inferred. The prior lumber-mill/boards-slats record did not establish its supply-stage/completeness clearly enough; it is not declared unassembled-only merely from absent wording. Whole bought contents are counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — Packaging returned externally (`pack_pallet_return`)

This is only the wooden transport pallet for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native complete finished manufactured wooden portable load-platform family, production mix at plant, Mass/kg. Family also includes post/collar/side-rail/end-rail platforms and separate wooden collars; this card selects only the actual complete transport pallet, with its measured wood construction, treatment, integral fasteners, moisture, ownership and compatible provider. Other family members require their own specific article. No EURO geometry, per-pallet mass or service life is inferred. The prior lumber-mill/boards-slats record did not establish its supply-stage/completeness clearly enough; it is not declared unassembled-only merely from absent wording. Whole bought contents are counted once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — Packaging on gross physical dispatch (`pack_film_shipped`)

This is only the polyethylene pallet stretch film for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — Packaging returned externally (`pack_film_return`)

This is only the polyethylene pallet stretch film for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again. Native Polyethylene film is CAS9002-88-4 manufactured film at plant; neither resin nor a PET sheet. Its comment compares PET as a competing material, not the selected chemistry. The luggage classification is an isolated taxonomy defect; consistent PE chemistry/film form governs this bounded use. Verify the actual grade, gauge, additives and single film article in this role; no supplier, density, article mass or performance is inferred.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — Packaging on gross physical dispatch (`pack_strap_shipped`)

This is only the polypropylene transport strap for packaging on gross physical dispatch. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — Packaging returned externally (`pack_strap_return`)

This is only the polypropylene transport strap for packaging returned externally. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

##### Waste flows

###### Dry-mix paper sack — Discarded packaging (`pack_paper_waste`)

This is only the dry-mix paper sack for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste dry-mix paper sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Woven polypropylene refractory sack — Discarded packaging (`pack_woven_waste`)

This is only the woven polypropylene refractory sack for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste woven polypropylene refractory sack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Separate polyethylene sack liner — Discarded packaging (`pack_liner_waste`)

This is only the separate polyethylene sack liner for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste separate polyethylene sack liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Wooden transport pallet — Discarded packaging (`pack_pallet_waste`)

This is only the wooden transport pallet for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polyethylene pallet stretch film — Discarded packaging (`pack_film_waste`)

This is only the polyethylene pallet stretch film for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste polyethylene pallet stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Polypropylene transport strap — Discarded packaging (`pack_strap_waste`)

This is only the polypropylene transport strap for discarded packaging. Keep actual empty, attached WIP/FG and reusable opening/closing pools, moisture, ownership and gross transaction IDs. New procurement alone adds its upstream purchase once; attached incoming packaging already included in a whole supplier delivery is not another purchase, and an own-item external return is not new production. Internal reuse cancels. Packaging is outside net mix Q, is never physically reduced by an economic share and generates no automatic coproduct credit. Only a real intact reusable returned article may retain its Product identity; damaged material is this article-specific waste. An integral bought liner is not separately purchased again.

- Selected flow: Waste polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Discarded wooden pallet repair board (`removed_pallet_wood`)

Actual old wood board removed during repair, independently weighed by dry wood/water/contamination and true destination. Not whole-pallet retirement and no duplicate W/other exit. Actual usable Product needs correct function/boundary; a sale alone does not reduce burden or generate credit.

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-factory-castables`

###### Packaging cleaning and repair wastewater (`pack_repair_wastewater`)

Only actual package-cleaning/repair wastewater sent for treatment, with measured water, wood/other contaminants and destination. No such wet operation is assumed for dry blending. Disjoint from retained wood/package water, vapour and other outlets; not direct environmental liquid water and no guessed COD/total-element molecule.

- Selected flow: Packaging cleaning and repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `trent-castable-testing`

##### Elementary flows


###### water vapour (`pack_water_vapour`)

Only actual package-repair/storage H2O vapour, CAS7732-18-5, contemporary unspecified-air Mass/kg. Native ice/heavy-water/ionic aliases are not adopted. Measure evaporation independently; dry-wood loss and water cannot both be fitted from one wet residual. No duplicate water carried in other recorded streams; tag manufacture Q/original Qc/H, never whole package loss as vapour.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_pack. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_pack
- Sources: `idem-vesuvius-castable-line-2003`; `almatis-alumina-spinel-castables`; `lancaster-refractory-mixing`

### Process: Observed original-cohort storage dispatch and returns (`service`)

#### Inputs

##### Product flows

###### Released mix received for original-cohort service (`fg_receipt`)

Record the actual gross intact dry mix received from the first-release gate or opening released-FG stock for its original cohort. This is an internal hand-off with inherited manufacturing burden, not another external purchase or first production output. Consolidation cancels the same internal quantity. Native Product identity is a manufactured inorganic refractory family explicitly including castables; primary production route and consumption-mix label. It fixes no CAS, grade, geography, installed state or recipe. Here it identifies only one specified dry unused calcium-aluminate-bonded alumina-spinel castable mix at first release or an intact same-cohort transfer; exclude bricks, fibers, coatings, spent linings and an installed/cured lining. No national consumption-mix provider or burden is inferred.

- Selected flow: Refractory material `02bb10a7-9104-49e4-88d9-119c33628d96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_fg. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_fg
- Sources: `trent-factory-castables`; `ilcd-detailed-guidance-2010`

###### Actual unused dry-mix customer return (`fg_return`)

Trace actual gross returned mass, original dispatch/lot and measured moisture/composition/loss. No returned mass is blindly equated with original delivered mass; preserve wetting, contamination, sample loss and real incremental retest/rework/waste as separately identified exchanges. A wet, cured or degraded return is outside intact dry-mix identity and needs reassessment. No historical manufacture is reversed or newly counted under this first-release denominator.

- Selected flow: Returned unused dry refractory castable mix
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_fg. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_fg
- Sources: `trent-factory-castables`; `ilcd-detailed-guidance-2010`

###### Observed cohort storage and handling electricity (`service_electricity`)

Meter only real later storage, handling, repacking, retest and rework increments for original cohort Qc over declared horizon H. No assumed service lifetime, new output Q or prospective unobserved service; supplier voltage/geography remain actual conditions.

- Selected flow: Alternating-current electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_service. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_service
- Sources: `trent-factory-castables`; `ilcd-detailed-guidance-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross physical dry-mix dispatch (`gross_dispatch`)

Retain actual gross dry-mix shipments, including repeat shipments of the original first-release cohort, under cp_fg. This is a service-gate movement and not a second quantitative production reference. Packaging and any changed-state waste are separate physical exits; no economic share shrinks the gross dispatch. Native Product identity is a manufactured inorganic refractory family explicitly including castables; primary production route and consumption-mix label. It fixes no CAS, grade, geography, installed state or recipe. Here it identifies only one specified dry unused calcium-aluminate-bonded alumina-spinel castable mix at first release or an intact same-cohort transfer; exclude bricks, fibers, coatings, spent linings and an installed/cured lining. No national consumption-mix provider or burden is inferred.

- Selected flow: Refractory material `02bb10a7-9104-49e4-88d9-119c33628d96`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_fg. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_fg
- Sources: `trent-factory-castables`; `ilcd-detailed-guidance-2010`

##### Waste flows

###### Dry castable lost during observed service (`service_waste`)

Weigh actual discarded dry mix and retain inherited original-cohort burden and incremental service treatment. Add actual wet or hardened waste as separate state-specific rows; neither delivery nor reacceptance creates first-release production.

- Selected flow: Discarded unused dry castable from storage and returns
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole unit result defined in Section 8 for this row and its tagged manufacturing Q or original service Qc; cp_fg. Preserve the actual numerator unit and do not divide again.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: cp_fg
- Sources: `trent-factory-castables`; `ilcd-detailed-guidance-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_scope | attributional study | Apply this hierarchy only within the declared attributional study and its valid multifunctionality decision context; no unrestricted choice between physical/economic allocation and no consequential substitution or automatic avoided credit. | `ilcd-detailed-guidance-2010` |
| a_subdivide | each shared operation | First separate dedicated lines campaigns batches tests and services through actual or virtual subdivision and direct assignment. Preserve inherited input vectors and traceable submeter/task records. Lack of metering does not justify an arbitrary share; disclose remaining uncertainty and distortion. | `ilcd-detailed-guidance-2010` |
| a_physical | each residual exchange | Identify and justify the determining physical causal relationship specific to that exchange: actual power/mixer duty, dedicated ingredient embodiment, observed occupied storage area/volume-time or measured handling work as applicable. A convenient mass share or the same key for every exchange is not established causality. | `ilcd-detailed-guidance-2010` |
| a_residual | genuine remaining common process | Only after subdivision and determining causality leave a genuine residual, use documented contemporaneous market values of actual co-functions at the same process gate and physical condition. Align grade moisture delivery basis and period; do not use unrelated retail delivered or installed-lining prices. Retain sensitivities and absence of reliable prices as a gap, not fixed fractions. | `ilcd-detailed-guidance-2010` |
| a_waste | dust rejects packaging and assets | Internal reclaim retains burden and no new procurement; rejects/wastes are not saleable coproducts by default. Evidence of an actual distinct functional output and market is required before coproduct allocation. Never reduce gross physical packaging FG gas or asset stock balances by an LCA/economic share; allocate burdens in a separately linked account. | `jrc-ceramic-bref-2007`; `ilcd-detailed-guidance-2010` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | first release net mix | release and net-scale record | unique lot IDs; first-release timestamp; net mix mass; measured moisture; gross fill and separate tare; QC result; samples consumed; released closing FG | Calibrated net weighing plus batch fill/seal/homogeneity and actual acceptance records; count each first release once. Q is supplied dry-mix net mass at recorded moisture, not an oven-dry extrapolation. Collect undivided released net kg and cohort IDs; final denominator formed only in normalize_once. | kg | each batch and period close | whole reporting period including failures | actual line and QC lab | per reference flow | scale calibration; signed batch and acceptance evidence |
| cp_material | manufacture | each separate supplied material | batch dose and stock record | row_id; supplier lot; whole preparation; mass or volume; original units; independent density and material packing state; assay; water; opening/closing raw WIP unassigned vectors; actual recovery and waste; receipt_or_consumption_basis; already_applied_stock_adjustment; consumed_opening_history | Weigh each whole supply and dose by lot; obtain phase and composition records. For silica volume independently measure same-state bulk volume/density with calibrated vessel and balance, packing procedure and representative sampling; no secondary coefficient density. Raw undivided exchange totals and inherited vectors only; preserve source units; final once through normalize_once. | kg; m3 | each receipt batch and stock close | whole reporting period | feed stores and blending line | per reference flow | calibration; dose sheets; supply assays; inventory tags |
| cp_energy | manufacture | electricity by operation/mode | meter record | meter and row IDs; readings; kWh or MJ; process/mode times; idle failures QC compressor extraction; supplier voltage geography; observed allocation driver | Calibrated meters/submeters; retain failed batches start stop and cleanout; distinguish utility generation and downstream consumption to avoid duplicates. Collect raw undivided meter totals; kWh conversion and allocation precede normalize_once; no quotient in collection. | kWh; MJ | each meter interval and operating mode | whole reporting period | actual line and support equipment | per reference flow | meter calibration and reconciliation |
| cp_water | manufacture | QC and cleaning supply/discharge | water and specimen record | row IDs; gross supplied mass/volume; independent density temperature; retained liquid/structural/reaction water; specimens; spills; wastewater; condensate if real | Weigh or meter actual supply and discharge; independently analyse species and water phases/reaction stoichiometry; mass loss alone is insufficient. Raw totals without denominator; separate supply retained water reaction and exits; normalize_once only. | kg; m3 | each actual test cleaning and period | whole reporting period | factory QC and actual cleaning system | per reference flow | meter and lab QA; independent phase evidence |
| cp_air | manufacture | each actual gas or mineral species | inlet outlet and species record | row_id; true medium; species phase CAS evidence; inlet/outlet integral volumes or real rates/time; pressure temperature humidity; composition; mass; internal circulation; particulate capture; uncertainty | Actual flow/species measurement with independent state-specific conversion; integrate rates only. PM and elemental equivalents remain subledgers, not identified species. Preserve undivided gross inlet/outlet species totals and internal paths; cancel only consolidation; normalize_once once. | kg; m3; actual rate units | representative operation including failures | whole period and actual test episodes | inlet physical gate building exhaust and actual external outlets | per reference flow | independent analytical/speciation evidence and calibration |
| cp_waste | manufacture | each separate material waste | waste exit and treatment record | row_id; exact material state contamination moisture; gross exit mass; recipient; treatment; internal reclaimed transfer; inherited burden; whole versus dismantled exit | Weigh actual waste separately with manifests and composition records; distinguish collected powder from emitted species and wastewater. Collect gross undivided exits; preserve physical totals independent of allocation; normalization once in normalize_once. | kg | each exit and period close | whole period including failed production | actual waste gates | per reference flow | weigh tickets; treatment chain; actual water/species QA |
| cp_pack | packaging | each packaging article and transaction | gross stock transaction ledger | article row and transaction IDs; stage manufacture/service; original cohort; new purchase; incoming attached; external returns received; empty attached WIP FG reusable opening/closing; gross physical dispatch; outward returns; waste; ownership; independently measured tare; Radd; Rremove; independent_H2Oin; independent_H2Oout; dry_wood; free_absorbed_water; repair_identity_destination; actual_state_density | Count and independently weigh each actual article/configuration; reconcile every physical pool under b_pack. Item(s) equals item with factor1 only; do not infer article kg from capacity or secondary property. Raw undivided article-specific stock/transaction totals; no new-purchase burden on own returns/internal reuse; normalize_once selects manufacturing Q or original service Qc exactly once. Add independently measured repair material Radd/Rremove and moisture H2Oin/H2Oout per article: opening pools+P+I+ER+Radd+H2Oin = closing pools+G+EO+W+Rremove+H2Oout. Deduplicate the same water/material only when already carried by another same-side flow term of this bridge, never against closing stock or an opposite-direction flow. A specifically named atomic exchange may supply this bridge term and is not by itself a reason to set it to zero. Real influx remains when added mass is retained in closing stocks. Dry wood/material and free/absorbed water have separate ledgers; one wet residual cannot fit two unknowns. Actual fasteners/glue/other added water/material and removed outlets need specific atomic identity/destination and original Q or Qc/H ownership. | kg; item | every movement and stock close | manufacturing period and stated original-cohort H | empty packaging stores line WIP FG return and waste gates | per reference flow | stock reconciliation; scale calibration; ownership and supplier invoices |
| cp_asset | manufacture | machine part mould lining and fluid | physical asset and service record | asset/part IDs; new/used ownership; configuration net mass; opening/closing installed/loose stock; measured water/fluid; additions repairs retirement; actual service driver and period; inherited upstream burden vector; gross_receipts_returns; actual_added_material_water; removed_old_material; actual_water_loss; parent_child_disjoint_scope | Maintain independent gross physical stock balance; measure net parts/machines and fluids, with installation/removal history and observed duty. Current service burden is separate from whole physical procurement and may not be estimated from an invented life. Raw undivided physical ledger and service evidence only; do not sum a full-asset purchase and its service share twice; normalize_once applies solely to attributable current burden. Separately reconcile physical opening+actual gross receipts+independently measured added material/water = closing+outward returns+retirement/waste+wear into other recorded streams+actual water loss/other exits. Terms are disjoint; whole-asset included components/fluids are child ledgers, wear is not disposed twice, closing retention never cancels influx and physical mass is not scaled by service-burden shares. | kg; item; actual service driver | each asset event and observed interval | actual manufacturing period or explicit cohort H | line lab maintenance stores | per reference flow | asset register; weigh records; actual service and repair evidence |
| cp_transport | manufacture | each inbound freight leg | route payload record | row_id; actual payload tonnes including packaging; distance km; mode; empty returns; provider scope; source units | Weighbill and real route for each leg; prove allocation driver before attribution and distinguish own fleet from a whole bought service. Raw payload and distance only; raw_unit_conversion forms transport work once before normalize_once; no pre-divided load. | t; km; t*km | each actual trip | whole reporting period | actual delivery routes | per reference flow | delivery records; route; allocation and provider scope |
| cp_fg | service | original-cohort FG movements | FG stock and return record | original first-release lot and Qc; observed H; opening and closing FG mass; gross G dispatch; gross R return; each original dispatch link; actual changed water/composition/loss; retest rework waste and internal handoffs; actual_manufacturer_permission; dry_unused_grade_compatibility; hydration_contamination_evidence; actual_rework_route; reacceptance_tests_disposition; added_material_water; removed_old_material; independent_water_loss | Trace serial lot movements with calibrated actual net weighing and measured changed condition; no assumed equality of return/original delivered mass and no new acceptance output. Raw undivided gross FG and inherited burden records; original Qc and H retained; normalize_once service branch only. Any real rework requires actual manufacturer-compatible permission for the same unused dry grade, whole formulation and terminal, followed by actual reacceptance of homogeneity, moisture/hydration state, grading, relevant bonding/workability and net fill after actual reblend/rebag. Wet/hydrated/cured/degraded returns are not assumed reversible or equivalent; determine separate applicability/disposition and state-specific waste while retaining original manufacture/Qc/H. Do not assume repairability, a pass or customer installation inside this gate. | kg | each movement and stock close | explicit observed original-cohort H | warehouse dispatch and actual returns | per reference flow | original release receipt; dispatch/return/condition evidence |
| cp_service | service | incremental observed service energy | meter task record | row_id; original cohort Qc; H; actual meter totals; repack retest rework tasks; observed causal drivers; real packaging and waste links | Meter the actual observed service tasks only; keep original manufacturing inheritance apart from real later increments. Raw undivided service energy; conversion and attribution before normalize_once using original Qc, no current-period production denominator. | kWh; MJ | each observed task interval | explicit observed H | actual warehouse and handling/retest | per reference flow | task logs; calibration; original cohort linkage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_unit_conversion | all inventory rows | Convert each raw extensive numerator into its row unit before attribution. kWh*3.6 gives MJ. Sum payload_t*distance_km for actual freight legs. Mass=independently measured same-substance same-state density*volume when actually needed; silica m3 retains its native reference. Integrate true rates over their recorded times only; never multiply an already integrated volume by time. Counts require independently measured article mass/configuration for kg; item and Item(s) alone differ by factor1. | raw_e; raw_units; independent_state; density; payload_t; distance_km; rate_e; time_e | U_e | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `ilcd-detailed-guidance-2010` |
| manufacturing_attribution | manufacturing burdens | For each exchange vector form A_e from converted actual current loads plus opening inherited raw/WIP/unassigned-store burden minus closing unreleased raw/WIP/genuinely unassigned-store burden, using Section7 attribution. Do not subtract released closing FG already in Q. Include failures Q=0 trials idle cleanout and actual rework. Internal recycle transfers retain inheritance and cancel. Declare per exchange the receipt/occurrence or already-stock-adjusted actual consumption basis. Net-consumption material is not corrected for the same stock again; actually consumed opening material retains its upstream history and unreleased WIP/non-WIP vectors use a consistent basis. Ordinary waste transfer/sale does not automatically remove original manufacture/treatment burden; apply Section7 actual function/attribution. | U_e; Bopen_e; Bclose_e; allocation_e; cp_material; cp_energy; cp_asset | A_e | `idem-vesuvius-castable-line-2003`; `ilcd-detailed-guidance-2010` |
| service_attribution | original-cohort services | Form S_e only from actual incremental storage handling secondary packaging dispatch retest rework and treatment over observed H, allocated to original cohort Qc under Section7. Keep its inherited manufacturing vector attached without reallocation, removal or new production. Changes in returned water and discarded material are explicit physical exchanges, not a net-delivery denominator or automatic reversal. | U_e; Qc; H; service_driver; cp_fg; cp_service; cp_pack | S_e | `trent-factory-castables`; `ilcd-detailed-guidance-2010` |
| physical_reconciliation | manufacture FG service consolidation | Retain unallocated gross physical ledgers separately: manufacturing opening raw/WIP + actual receipts = closing unreleased raw/WIP + first-release mix + actual waste/emissions/transfers, including independent water/reaction changes. FG opening + manufacturing receipt + actual R = closing + actual G + measured losses/other exits, with explicit changed condition terms. Add internal gates then cancel matched handoffs; combine with each b_pack packaging ledger and asset/fluid balances. The mix-material subbalance excludes packaging/assets; full manufacturing, FG and consolidated gates include the separately reconciled attached packaging, asset/fluid movements and gross atmospheric carriers. No economic share shrinks these physical totals. FG actual-state mass bridge explicitly retains opening+first-release receipts+gross returns+independently added material/water = closing+gross dispatch+destruction+removed old material+independent water loss+other actual exits, with disjoint terms and carried water/material counted once. Closing retention leaves actual influx intact. Dry-supply reference quantity/original Qc remain separate from wet physical changes. | gross_receipts; gross_exits; physical_stocks; reaction_evidence; cp_release; cp_fg; cp_pack; cp_air; cp_asset | physical_gate_checks | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `jrc-ceramic-bref-2007`; `ilcd-detailed-guidance-2010` |
| normalize_once | all inventory rows | This is the only final normalization. For a manufacturing burden row x_e=A_e/Q; for an observed service increment x_e=S_e/Qc over H. A gross physical-movement row instead retains its corresponding unallocated actual movement G_e and reports G_e/Q or G_e/Qc once for its tagged stage, without adding a second purchase or production reference. First-release output is exactly1 kg reference flow. Asset stock movements are physical-account entries; only attributable current service vectors enter A_e/S_e, never a full-asset purchase plus its service share. No unit result when the relevant denominator is zero: retain actual loads and unresolved carry-forward fate. Cards and aggregation refer to this same single result, never divide it again. | A_e; S_e; G_e; Q; Qc; H; stage_e; cp_release | x_e | `idem-vesuvius-castable-line-2003`; `ilcd-detailed-guidance-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all core and auxiliary identities | Keep exact native restrictions in consumer descriptions and actual supplier evidence. Blank auxiliary IDs preserve specific chemical/physical names; no broad wrong-family fill. Source registration/read status is not applicability approval. | complete native records and actual supplier specifications |
| dq_collection | all amounts and inheritances | Retain raw units calibration representative operating modes period boundaries original cohorts all stock vectors and zero/missing distinctions. These are future collection requirements, not a fabricated completed factory inventory. | calibrated meter/scale stock task release records |
| dq_chemistry | species and physical gates | Independent species phase reaction free/structural-water measurements supplement total mass/element checks; do not solve two unknowns by one residual or treat PM/COD/VOC as chemicals. | independent chemical phase and state evidence |
| dq_sources | primary and method evidence | Distinguish real factory manufacture from laboratory formulation and application tests. Almatis CAC and Alphabond columns, on-top additives and added test water are not one closed dry factory recipe. Vendor cycle examples and IDEM potential emissions are not actual current measurements. Only ILCD supports this allocation hierarchy; industrial PDFs do not. | full primary context source-specific uses and limits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | product and process | Check complete dry CAC-bonded alumina-spinel formulation manufacture through first quality release, actual composition supplied forms and application-specific QC. Reject wrong material/bonding family, single-oxide, bought-final-mix-repack and installed-lining substitution. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `trent-castable-testing` |
| v_native | every consuming row | Verify whole native identity including all names aliases CAS route form grade geography medium type properties and reference units, and the complete restriction in its consuming description. Hard conflicts cannot be cured by taxonomy labels. Core unresolved identity is a usability hold; ordinary auxiliary/provider or future measurements alone are not a scientific hold. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing` |
| v_basis | all denominators and history | Check unique Q with released closing FG included once, all raw/WIP/unassigned inheritance, real failures and no subtraction of released-FG production. Services bind original Qc and H. No Q=0 unit result, double normalization, duplicate supplier ingredient, assumed density/mass per article or retest production. | `idem-vesuvius-castable-line-2003`; `ilcd-detailed-guidance-2010` |
| v_physical | all physical gates | Check independent total mass relevant elements actual gas/mineral species and water/reaction/phase evidence, gross FG returns/condition changes, each complete packaging ledger and machine/part/fluid stocks. Internal transfers cancel only on consolidation. One residual is not independent chemistry evidence. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `lancaster-refractory-mixing`; `ilcd-detailed-guidance-2010` |
| v_complete | bilingual content projection and checks | Every applicable actual exchange, raw protocol, unit, one final result, source field and normative/native context must survive in both languages and the typed projection. Unknown amount or applicability is not zero/passing. Schema, fingerprints and finite measurement checks are engineering evidence only, not scientific/translation approval, accepted mapping or publication. | `almatis-alumina-spinel-castables`; `idem-vesuvius-castable-line-2003`; `trent-factory-castables`; `trent-castable-testing`; `jrc-ceramic-bref-2007`; `ilcd-detailed-guidance-2010` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Actual dry supplied CAC alumina-spinel castable manufacture, with separately tagged observed original-cohort services |
| allowed_use | Compatible dry blend gate, declared formulation/provider/native units, real attribution and complete physical/history records |
| excluded_use | Installed-lining performance or lifetime comparisons; inferred recipes; ordinary cement; all37330 coverage; automatic credits; future unobserved services |
| required_metadata | All reference qualifiers; Q Qc H; supplier and whole-preparation scope; raw/WIP/FG inherited vectors; gross packaging assets and water/species records |
| required_quality_disclosure | Actual versus planned collection, auxiliary/provider/species/stock uncertainties, source limitations and pending scientific/translation review |
| update_trigger | Changed bonding chemistry mix supply state raw processing QC release endpoint native restrictions provider allocation evidence or observed-service horizon |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| idem-vesuvius-castable-line-2003 | official_guidance | Indiana IDEM, Vesuvius USA 089-16134-00075, January7 2003; TSD pp1–2/13 and AppendixA pp1–2; https://permits.air.idem.in.gov/16134f.pdf | Real EU011 dry prepared-feed batch/mix/bag manufacture and dust controls. Adjacent EU010 tar/solvent and shared dryer are counter-scope. Historical permit maxima and potential-to-emit calculations are not actual castable recipe, LCA allocation, current operating load or molecular emissions. |
| almatis-alumina-spinel-castables | literature | Racher et al., Almatis, Improvements in Workability Behavior of Calcia-Free Hydratable Alumina Binders, full six-page paper, Table3 and Figs3–4 with surrounding comparisons; https://www.almatis.com/sites/default/files/technical_papers/media/gqlnq0wj/improvements-in-workability-behaviour-of-calcia-free-hydratable-alumina-binders.pdf | Independent alumina-spinel/MgO/silica-fume/CAC and whole ADS3/ADW1 preparation roles; comparison with hydratable Alphabond. Laboratory formulations and wet test-piece properties are not a disclosed Trent/Vesuvius factory recipe, universal acceptance limits or added water in the supplied dry bag. |
| trent-factory-castables | literature | Trent Refractories, Castables, official complete HTML; https://www.trentrefractories.com/castables | Real Scunthorpe in-house blending/bagging and cement-class castables versus separate shaped products. No claim that its proprietary recipe equals the independent Almatis test mix; ratings are application-specific. |
| trent-castable-testing | literature | Trent Refractories, Testing Capabilities – In House, official complete HTML; https://www.trentrefractories.com/testing-capabilities-in-house | Actual batch-relevant grading, flow, setting, strength and dimensional test capabilities plus supplementary testing. Select actual product acceptance protocol and laboratory burdens; no unsupported standard-version or certification claim, fixed acceptance values or universal test schedule. |
| lancaster-refractory-mixing | handbook | Lancaster Products, Refractory Applications, full two-page equipment-manufacturer paper; https://www.lancasterproducts.com/wp-content/uploads/2020/04/4.-Refractory-Applications-Final-Copy.pdf | Mineral mixing before monolithic bagging and contrasting formed-product steps; dry/wet sequence and mixer limitations. Vendor speed/time examples are not factory energy factors, prescribed cycle times or an LCA allocation method. |
| jrc-ceramic-bref-2007 | official_guidance | European Commission JRC, Ceramic Manufacturing Industry BREF, August2007, §§2.2.10–2.2.12, printed31–32; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/cer_bref_0807.pdf | Unshaped refractory weighing/bags/pallets, moisture-sensitive warehousing and actual recovery/contamination distinctions. Fired-ceramic kiln routes and hazardous spent lining are not automatic dry-castable operations or clean recycled feed. |
| ilcd-detailed-guidance-2010 | official_guidance | European Commission JRC, ILCD Handbook – General guide for LCA – Detailed guidance, first edition March2010, §§7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only declared attributional multifunctionality context: dedicated actual/virtual subdivision, exchange-specific determining physical causality and genuinely remaining common-gate contemporaneous market-value allocation. General bookkeeping/consistency method, not castable chemistry or predetermined shares; unrelated QFD figure fractions are not adopted. |
