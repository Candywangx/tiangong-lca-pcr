---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.remelting-scrap-ingots-of-iron-or-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fine-turnings-source alloy-steel remelting scrap ingots

## 1. Scope and Applicability

This PCR develops one narrow product boundary: remelting scrap ingots made from one segregated alloy-steel fine-machining-turnings source, genuinely melted and roughly cast, accepted as feed for another melting operation. Exact source chemistry is measured, not prescribed as a fixed recipe. The product must satisfy the conjunction in the reference card, not merely be an ingot made from scrap. Algerian Customs RTC 067/DGD (5 November 2024), reproduced in its February 2025 compendium, establishes a real rough-cast alloy-steel scrap-ingot product from remelted fine turnings or grinding fines, with irregular rough surface and unspecified exact chemistry, used as a steelmaking addition. This PCR selects only the fine-turnings subset. Grinding fines are excluded from this narrower route. The ruling establishes that physical product/route exists; it supplies no furnace technology, recipe, lot yield, utility factor or measured LCA. Its classification is not automatic qualification of another lot. Actual site source, furnace, assays and first-gate acceptance must be collected. JRC EAF operations inform conditional inventory prompts only; no EAF, induction, AOD or VOD route is imposed.

Exclude ordinary steel ingots, slabs, blooms and billets including continuous-cast products; pig iron, spiegeleisen and ferro-alloys; unmelted loose/shredded/baled/briquetted ferrous scrap; slag, dross, scale and dust; grinding-fines feed routes; unqualified primary alloy-steel forms; radioactive scrap; finished cast articles and waste-treatment service reference functions. A compressed feedstock is not a remelted ingot. No factory grade, yield, energy intensity or emission factor is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.remelting-scrap-ingots-of-iron-or-steel |
| classification_refs | CPC 3.0:39350; accepted narrower alloy-steel fine-turnings scope under docs/adr/2026-11-21-accept-cpc-39350-rough-cast-remelting-ingots-from-alloy-steel-turnings.md |
| covered_products | One segregated alloy-steel-source rough-cast remelting-feed ingot or pig satisfying the full reference conjunction |
| excluded_products | Unmelted scrap and compacts; steel primary or semifinished forms; pig iron/spiegeleisen/ferro-alloys; unqualified primary alloy-steel forms; slag/dross/scale/dust; finished articles; service references |
| representative_product | Fine-turnings-source alloy-steel remelting scrap ingots |
| production_route | Source-traceable alloy-steel turnings → actual sorting/preparation → verified melting → actual slag removal and any evidenced ladle operation → rough mould casting → solidification/demoulding → first remelting-feed acceptance; real cohort services separately |
| market_state | Dry net rough-cast remelting feed at first quality release; physical form, surface faults, chemistry, temperature and receiving specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply one declared rough-cast remelting scrap ingot as feed for another melting operation |
| How much | 1 kg dry net accepted product at unique first quality release |
| How well | Meets the full physical conjunction in released_ingot and the actual receiving remelting-feed specification; no billet equivalence |
| How long or cycle | One declared reporting period with first-release cohort history and actual service extension |
| reference_flow_link | released_ingot |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Remelting scrap ingots of iron or steel `1b39288a-f917-4c5a-8ef2-9cac5a60d8c1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | one segregated alloy-steel machining source and parent-steel/processing burdens; actual furnace and casting route; rough ingot or pig form and no feeder-head/hot-top evidence; fine-turnings feed excluding grinding fines; measured whole alloy composition without a fixed recipe; surface-fault record and photographs; whole product elemental and phase assays excluding pig iron/spiegeleisen/ferroalloy identity; agreed remelting-feed acceptance specification; first-release Q and unique cohort identifiers; dry metal and moisture basis excluding packaging and detachable residue; site and temporal coverage; raw units and all gas/liquid reference states; actual provider and voltage; opening/closing raw-stock, WIP and FG exchange-burden vectors; all failed/Q0/start-stop/idle/cleanup/rework loads; actual waste transfer state and upstream recycling allocation method; cohort storage/handling/packaging services and returns; separate ledger for each packaging article; heat/metal/oxygen/water closure with independent species evidence |

Every qualifier is required in the dataset description or linked collection evidence; original whole-stream composition and route evidence remain necessary even when a generic UUID is present.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the first-release dry net mass of the accepted rough-cast remelting feed. Include inseparable inherent product phases, not pure iron assay alone; exclude free water, detachable residue and packaging. Collect with cp_release. Reference row released_ingot is 1 kg. |
| `raw_conversion` | all inventory rows | Declared physical property | kg or MJ | Preserve raw mass, cumulative volume, concentration and energy units. Convert cumulative values once; integrate only actual rates over their measured time. Use independently measured substance density, gas composition, temperature, absolute pressure and wet/dry state. Never use water density for oil or gas, or infer density from a secondary flow-property coefficient. |
| `single_division` | all inventory rows | Declared physical property | per reference flow | Collection stores raw values without division. Establish the allocated numerator A in its row unit with calc_raw and calc_assign; calc_once performs A / Q exactly once. Cards and aggregation reference that same result. Q=0 retains the actual load and produces no unit result. |
| `energy_state` | electricity and heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | For the selected electricity, use its energy group `93a60a57-a3c8-11da-a746-0800200c9a66` and reference MJ; the group contains kWh with factor 3.6. For metered electrical work, the independent Energy property is `f6811440-ee37-11de-8a39-0800200c9a66` with the same group; never infer a provider native property from that shared group. Preserve fuel mass and its independently documented lower heating value. Keep thermal enthalpy, latent heat, losses and any real exported heat separate; an energy property does not establish electricity as a fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One source-traced supplied alloy-steel-turnings stream with its inherited parent-steel, machining, preparation and transport burdens; all real supplied utilities and consumables |
| starting_condition_role | Foreground receipt with explicit upstream provider and recycling-method linkage; not a zero-burden cut-off |
| product_classification_scope | Only the specified alloy-steel-source rough-cast 39350 remelting-feed subset |
| recursive_input_rule | If a compatible ingot is actually purchased, record its actual provider once and disclose its inherited vector; do not recursively reproduce or claim to have manufactured it. Such purchase cannot replace the present raw-scrap route evidence. |
| upstream_dataset_requirement | Require compatible source, composition, route, gate, geography and period plus actual transfer/recycling attribution. Missing core prior burdens block quantitative completion; ordinary provider matching remains disclosed collection work. |
| disclosure | All required qualifiers; complete route; actual gates; physical V and attributed A; inherited stocks; Q0; service Qc/H; packaging; unknown species; allocation and source limitations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_identity` | reference product | Apply only to one segregated alloy-steel-source rough-cast ingot/pig accepted as feed for another melting operation. Require original product and route evidence satisfying the declared physical conjunction. A familiar EAF recipe, a CPC label or generic flow name does not establish this terminal. | `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `sb_complete_route` | whole foreground | Include received-source verification, sorting, actual de-oiling/preparation, real melting, slag separation, any actual ladle treatment, rough mould casting, cooling, demoulding, inspection and first release; also actual emissions capture, residue handling, maintenance, cleaning, failed heats, startup/shutdown and idle operation. Each actual fuel, chemical, refractory, gas, packaging article, waste outlet and elementary species must have an atomic row; extend this finite candidate list when site evidence requires it. Do not silently substitute continuous casting, refined billet production or finished-ingot purchasing. | `jrc-iron-steel-2013`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `sb_upstream` | supplied scrap and other inputs | Trace the parent steel and actual scrap-generating operation, source segregation, preparation, transport and prior burden allocation through a compatible provider. State the real waste/product transfer condition and the separately justified recycling method. A recycled label creates neither zero burden nor avoided-primary-production credit. Missing prior burden or waste-transfer method blocks a quantified inventory; do not manufacture a loop count, recovery factor or market-value sign. | `ilcd-general-2010` |
| `sb_gates` | release and cohort services | Q counts a unique physical cohort only at first acceptance. Closing FG already contains its released Q and is never added again as production. Track storage, packing, handling and shipment after release in a separate service account attributed to the original fixed Qc; H is actual service duration and never a production denominator. Relay goods with their historical burden, do not remake them. In a combined view cancel internal release transfers. Identify the actual manufacturer, outsourced melt/cast provider, first quality release and physical handovers. Count outsourced production once through its verified provider or collected foreground operations, with explicit gap/overlap reconciliation. Mere transfer or resale is not new production. Gross shipment V, physical returns and reinspection are not new Q. Reverse the original delivery transaction when returned; retain original production history and charge only real incremental rework. | `ilcd-general-2010` |
| `sb_physical` | metal oxygen water and heat | Close gross physical V separately from allocated exchange vector A. Track total mass and each relevant element including Fe/C/O and real alloying or contaminant elements, with independent metal, oxide, oil and water assays. Separate free/structural/reaction water and phase changes. Reconcile electricity, actual fuel heat, sensible/latent heat, chemical heat, cooling-water enthalpy, real exported heat and losses using measured states. One residual cannot fit two unknown species; no balancing reaction water, assumed oxidation yield or invented heat export is allowed. | `jrc-iron-steel-2013` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| scrap_ingot_route | Source preparation through first rough-ingot release and linked cohort services | required | Only after actual source and route establish this specialised terminal; conditional exchanges need real presence evidence | Integrated foreground with separate preparation/melting/casting/control/service subledgers | released_ingot; 1 kg |

Maintain separately identifiable operation records in this order: (1) source verification, sorting and real chip de-oiling/preparation; (2) actual melting and measured chemistry adjustment; (3) real slag removal and any actual ladle treatment; (4) rough mould casting, cooling, demoulding, tests and unique first release; (5) extraction, cooling-water, residue and maintenance operations throughout; (6) post-release cohort storage, packing, handling and shipment services. Internal prepared turnings, melt and rework returns remain physical subledger transfers with inherited vectors; the integrated process cancels those transfers rather than purchasing them again.

The following list is an explicit finite candidate exchange set, not evidence that every conditional supply is used. Record actual presence/absence. Add every actual missing fuel, formulation, raw material, waste outlet or elementary species before claiming site completeness; never hide them in zero, an unspecified other stream, or a family binding.

### Process: Complete alloy-steel-source remelting-scrap-ingot route (`scrap_ingot_route`)

#### Inputs

##### Product flows

###### Segregated alloy-steel fine machining turnings (`raw_turnings`)

Receive one declared alloy-steel machining source as a whole supplied turnings stream. Record producer, parent steel burden, machining and collection burden, physical form, oil, moisture, oxide and elemental assays, legal transfer status and provider. Do not assume a zero-burden scrap or purchase its iron and carbon assays again. This core input identity remains unbound pending a full compatible native record.

- Selected flow: Segregated alloy-steel fine machining turnings
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_charge`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Alternating current (`electricity`)

Use only 1–35 kV grid-average consumption mix delivered to the user, including its supply-chain boundary. This is a Product flow with Net calorific value accounting in MJ, not a transmission service or a plant-generation output. Metered electricity is measured as Energy `f6811440-ee37-11de-8a39-0800200c9a66`; this is separate from the selected provider flow’s verified native Net calorific value property. Both point to Units of energy, but a shared unit group alone does not establish a native property. Its formal supply location is CN; match the actual provider, site and year, and verify a compatible separate flow for another supply geography. Meter sorting, melting, casting, extraction, cooling, idle, cleaning and cohort services without overlap; split other voltages and self-generation into separately verified flows.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Natural gas (`natural_gas`)

Conditional on an actual natural-gas burner or preheater. Record the whole delivered gas once, composition, calorific value, actual or reference volume state, meter totals and provider; gas composition is a non-additive subledger. Do not insert a boiler or steam supply by default.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Diesel fuel (`diesel`)

Conditional on actual diesel equipment for scrap preparation, on-site transport, burner or post-release handling. Keep equipment and production/cohort service records separate; measure fuel mass or independently convert its volume at the measured fuel state. No assumed fuel density.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Oxygen, gaseous (`oxygen`)

Conditional on purchased lancing or oxy-fuel supply. Record purity, pressure, temperature, moisture and metered mass; distinguish purchased gas from entrained ambient species. Argon and nitrogen are not interchangeable. Integrated gas volume is not multiplied by time again.

- Selected flow: Oxygen, gaseous
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Argon, gaseous (`argon`)

Conditional on purchased bath stirring or actual shielding supply. Record purity, pressure, temperature, moisture and metered mass; distinguish purchased gas from entrained ambient species. Argon and nitrogen are not interchangeable. Integrated gas volume is not multiplied by time again.

- Selected flow: Argon, gaseous
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Nitrogen, gaseous (`nitrogen`)

Conditional on purchased actual stirring or purge supply. Record purity, pressure, temperature, moisture and metered mass; distinguish purchased gas from entrained ambient species. Argon and nitrogen are not interchangeable. Integrated gas volume is not multiplied by time again.

- Selected flow: Nitrogen, gaseous
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Graphite electrode (`electrode`)

Only for a verified electrode-consuming electric-arc route. Record installed stock, purchases, remaining stock, recovered pieces and actual consumption; do not assign this to an induction furnace.

- Selected flow: Graphite electrode
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Graphite carburizer (`carburizer`)

Include only if graphite of the documented grade is actually charged. Count the whole supplied material once; carbon assay is not another purchase. Other carbon-bearing supplies require their own atomic cards.

- Selected flow: Graphite carburizer
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Quicklime (`quicklime`)

Conditional actual whole supplied CaO-based quicklime flux. Assay, impurities and hydration are subledger fields; do not repurchase the analysed calcium or oxygen.

- Selected flow: Quicklime
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Dolomite (`dolomite`)

Conditional actual carbonate dolomite flux. Do not relabel calcined dolomitic lime as carbonate; capture reaction CO2 only with the actual carbonate assay and reaction evidence.

- Selected flow: Dolomite
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Ferro-silicon (`ferrosilicon`)

Conditional one whole purchased ferro-silicon addition with grade and supplier assay; silicon and iron assays are not separate purchases. Verify the final product remains inside the declared non-alloy-source scope.

- Selected flow: Ferro-silicon
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Ferro-manganese (`ferromanganese`)

Conditional one whole purchased ferro-manganese addition; retain grade, carbon content and assay once. No assumed recipe or automatic alloy addition.

- Selected flow: Ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Magnesia refractory brick (`magnesia_brick`)

Conditional actual whole brick consumption or replacement attributable to this campaign, with composition, lining opening/closing stocks and recovered brick. Allocate a multi-campaign lining using measured use and wear, not a full replacement for every batch.

- Selected flow: Magnesia refractory brick
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Silica refractory lining material (`silica_lining`)

Conditional actual supplied lining material of one composition. It is an alternative only where the real furnace uses it; never substitute silica and magnesia by a generic refractory family binding.

- Selected flow: Silica refractory lining material
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Cast-iron ingot mould (`mould`)

Conditional durable mould used for rough ingot casting without feeder heads or hot tops. Record mould identity, lifetime use, repairs, breakage and measured wear; charge its provider burden once over documented service. Mould composition does not become charge metal unless actually transferred.

- Selected flow: Cast-iron ingot mould
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Graphite mould coating suspension (`mould_coating`)

Conditional one purchased whole supplied graphite coating suspension. Count carrier water and solids only as non-additive analyses. If mixed on site, replace this purchase with each actual purchased ingredient plus mixing energy and loss; do not keep both routes.

- Selected flow: Graphite mould coating suspension
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Lubricating oil (`lubricating_oil`)

Conditional one actual supplied mineral lubricating oil for mechanical equipment. Track the full oil rather than its hydrocarbon assays; split a different real lubricant or formulation.

- Selected flow: Lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Ethylene glycol coolant solution (`coolant`)

Conditional one purchased whole ethylene-glycol coolant solution actually used in a closed cooling circuit. Record solution concentration, replenishment, drain and stock; do not buy active glycol or carrier water again.

- Selected flow: Ethylene glycol coolant solution
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Industrial process water (`process_water`)

Record actual purchased make-up, casting or cooling water by source and circuit with physical state and supplier water/energy agreement. Internal recirculation is not another external purchase; natural abstraction needs separately identified elementary source rows.

- Selected flow: Industrial process water
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Steel strapping band (`steel_band`)

Conditional first external receipt of the actual band for the declared cohort, whether purchased, hired or free-issued. Count the physical receipt once; a purchase invoice is not an additional receipt. Maintain its separate empty/WIP/FG/reusable stock and external-return ledger; band carried by gross shipments is not part of net metal Q.

- Selected flow: Steel strapping band
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Wooden pallet (`wood_pallet`)

Conditional first external receipt of one actual pallet type, whether purchased, hired or free-issued, with its actual provider and lifetime. External returns belong only to pallet_return_in. Internal reuse is neither a new purchase nor a coproduct credit. Record each other packaging article separately.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Steel strapping band (`band_return_in`)

Actual external return received, identified separately from new purchases and internal reuse. Preserve its inherited article/lifetime burden and actual return transport; do not repurchase its material.

- Selected flow: Steel strapping band
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Wooden pallet (`pallet_return_in`)

Actual external return received, identified separately from new purchases and internal reuse. Preserve its inherited article/lifetime burden and actual return transport; do not repurchase its material.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### Waste flows

##### Elementary flows

###### Oxygen in ambient air (`air_oxygen`)

Record the actual entrained or combustion-air species independently from purchased industrial gas. Establish composition and measured gas flow/state for the relevant system; any unmeasured constituent remains an explicit balance gap rather than an invented fraction.

- Selected flow: Oxygen in ambient air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Nitrogen in ambient air (`air_nitrogen`)

Record the actual entrained or combustion-air species independently from purchased industrial gas. Establish composition and measured gas flow/state for the relevant system; any unmeasured constituent remains an explicit balance gap rather than an invented fraction.

- Selected flow: Nitrogen in ambient air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Argon in ambient air (`air_argon`)

Record the actual entrained or combustion-air species independently from purchased industrial gas. Establish composition and measured gas flow/state for the relevant system; any unmeasured constituent remains an explicit balance gap rather than an invented fraction.

- Selected flow: Argon in ambient air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

#### Outputs

##### Product flows

###### Remelting scrap ingots of iron or steel (`released_ingot`)

One net kilogram at the unique first feed-quality release gate after actual melting, rough mould casting, solidification, demoulding and acceptance. The native Product identity is manufactured remelting scrap ingots, production mix at plant, with Mass/kg and no fixed grade, CAS or geography. It does not prove a particular furnace or alloy-steel source. Require rough-cast ingot/pig condition, obvious surface faults, no feeder heads/hot tops for ingots, non-pig-iron/non-spiegeleisen/non-ferroalloy chemistry, traceable source and agreed remelting-feed acceptance. Exclude continuous-cast billets, ordinary steel primary forms, unmelted compacted scrap, slag and dross. This row is the only production reference; shipment, reinspection, returns and rejected recasts do not create additional production.

- Selected flow: Remelting scrap ingots of iron or steel `1b39288a-f917-4c5a-8ef2-9cac5a60d8c1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026`

###### Returned industrial cooling water (`return_water`)

Conditional actual water physically returned across the external supplier boundary. Record mass, temperature, pressure, dissolved load and enthalpy relative to the agreed state, including provider treatment of water and energy. Do not create a return for an internal heat exchanger or clone a steam/condensate circuit that does not exist.

- Selected flow: Returned industrial cooling water
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Steel strapping band (`band_on_ship`)

Actual bands accompanying gross physical shipments, recorded outside net metal Q and reconciled once to the band stock ledger.

- Selected flow: Steel strapping band
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Wooden pallet (`pallet_on_ship`)

Actual pallets accompanying gross physical shipments; disclose whether ownership transfers and retain the single actual provider/lifetime burden.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Steel strapping band (`band_return_out`)

Conditional separate outward return to an external owner, never an internal reuse or another purchase.

- Selected flow: Steel strapping band
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Wooden pallet (`pallet_return_out`)

Conditional separate outward pallet return to an external owner with actual transport and handling burden.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### Waste flows

###### Rejected alloy-steel fine machining turnings (`reject_turnings`)

The single segregated rejected metallic turnings stream leaving the site. Keep its full mass, contamination and actual destination; a return to an internal preparation stage cancels internally.

- Selected flow: Rejected alloy-steel fine machining turnings
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Alloy-steel remelting furnace slag (`slag`)

One real multicomponent furnace-slag stream, with whole mass, metal entrainment, oxygen-bearing phases and moisture assayed independently. Its source partitions and constituent assays do not add extra whole outputs; no generic beneficiation iron slag UUID is implied.

- Selected flow: Alloy-steel remelting furnace slag
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Alloy-steel ladle slag (`ladle_slag`)

Conditional separate actual ladle-slag outlet only if ladle treatment occurs. It is not automatically present and must not be added to the same mixed furnace-slag outlet a second time.

- Selected flow: Alloy-steel ladle slag
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Captured alloy-steel remelting baghouse dust (`bag_dust`)

Weigh the actual captured multicomponent dust stream. Separate captured dust from residual airborne species; laboratory metal concentrations are non-additive characterisation, not extra metal coproducts.

- Selected flow: Captured alloy-steel remelting baghouse dust
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Spent magnesia refractory brick (`spent_magnesia`)

Conditional actual removed brick waste by composition and destination. Link lining stocks, repair and metal accretion without assuming all purchased lining becomes waste this period.

- Selected flow: Spent magnesia refractory brick
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Spent silica refractory lining (`spent_silica`)

Conditional actual separate silica-lining waste; do not combine it with magnesia waste or change its composition.

- Selected flow: Spent silica refractory lining
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Rejected alloy-steel rough casting (`reject_cast`)

Record only actual external reject removal here. Internal returns to remelting carry each inherited exchange burden and measured incremental remelt burden in the WIP ledger, cancel internally and never add new external raw supply or Q.

- Selected flow: Rejected alloy-steel rough casting
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Spent mineral lubricating oil (`spent_oil`)

One segregated spent-oil outlet with measured mass, water and actual licensed destination; oil assays are not separate waste masses.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Separated aqueous cutting-fluid waste (`cutting_fluid`)

Conditional one actual whole fluid removed from incoming turnings by the documented preparation operation. Record water, oil and metals as subledger assays and separately model the actual treatment provider once.

- Selected flow: Separated aqueous cutting-fluid waste
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Spent ethylene glycol coolant solution (`spent_coolant`)

Conditional drained whole coolant formulation with its measured composition, not another discharge of both full solution and analysed glycol or carrier water.

- Selected flow: Spent ethylene glycol coolant solution
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Alloy-steel remelting process wastewater (`wastewater`)

One actual external process-wastewater outlet with measured whole solution mass and destination; choose one provider for this outlet. Dissolved constituents, COD and suspended solids are characterisation subledgers. Direct environmental releases require their own species/media cards and cannot also use a treatment provider.

- Selected flow: Alloy-steel remelting process wastewater
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Waste steel strapping band (`band_waste`)

Actual band waste reconciled to its separate packaging ledger; do not add reused bands as waste or subtract a recycling credit.

- Selected flow: Waste steel strapping band
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Waste wooden pallet (`pallet_waste`)

Actual pallet waste reconciled to its separate packaging ledger and actual treatment destination; exclude internal reuse.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

##### Elementary flows

###### Carbon dioxide to air (`co2`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Carbon monoxide to air (`co`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Nitrogen monoxide to air (`no`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Nitrogen dioxide to air (`no2`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Sulfur dioxide to air (`so2`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Water vapour to air (`vapour`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Oxygen to air (`o2_out`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Oxygen to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Nitrogen to air (`n2_out`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Nitrogen to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Argon to air (`ar_out`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Argon to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Iron(III) oxide particulate to air (`fe2o3_air`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Iron(III) oxide particulate to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

###### Zinc oxide particulate to air (`zno_air`)

Conditional on actual species and medium evidence at the final release point, including measured fugitive releases. Convert concentration and gas flow on the same wet/dry, temperature, pressure and time basis. This is species mass, not NOx as NO2-equivalent, TOC, VOC, COD, total dust or metal-equivalent mass. For oxide aerosol also verify chemical phase and size; never assume all dust is this substance. Include all real start/stop, failed heats, idle and cleanup loads. If further species are real, add individual cards before completeness can be claimed.

- Selected flow: Zinc oxide particulate to air
- Flow property / unit: Mass / kg
- Amount rule: a (the sole normalized result in Section 8)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `jrc-iron-steel-2013`; `ilcd-general-2010`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_hierarchy` | each attributed exchange | For attributional cases where allocation is justified, first assign dedicated records and subdivide or virtually subdivide separable functions. For each remaining exchange demonstrate the determining physical causality that quantitatively links that exchange to the functions; do not choose a single mass or economic key for the whole plant. Only genuinely residual common-process loads use contemporaneous market values at the same actual gate, quantity, quality and state with disclosed adjustments. Preserve the full vector sum across functions. | `ilcd-general-2010` |
| `al_residues` | scrap slag dust and services | Classify each actual outlet as product, waste or a separate treatment service using documented transfer and market state before allocation. A useful slag or dust does not automatically earn a coproduct share or credit. Waste/recycling system boundaries and cross-life allocation need their own supported method; the generic multifunctional-process hierarchy is not a complete recycling formula. Never infer positive value, fixed shares, avoided emissions or free upstream steel. | `ilcd-general-2010` |
| `al_inheritance` | raw stocks WIP FG rework and internal metal | Carry opening and closing raw-material stocks, WIP and FG by lot/cohort and every inherited exchange in its own unit, with provider, historical amount, price basis and prior allocation linkage. Issue only the actual consumed raw-stock vector to WIP; receipts left in raw stock do not become current production consumption. Keep already released FG production history separate from incremental services and never add its historical vector to new production. Internal prepared charge, molten metal, returns and remelt loops have matching sender/receiver physical records and inherited vectors and cancel on consolidation. Count external purchases once. Keep all Q0, idle, cleaning and start/stop loads with their actual cohort or a disclosed unresolved burden account, never discard them to improve yield. Correct only demonstrated same-side duplicate entries against original records; no arbitrary balance plug. | `ilcd-general-2010` |
| `al_packaging` | each packaging article | For each band and pallet separately require opening empty + opening attached WIP/FG + opening reusable + first external receipts N + external returns received ER = closing empty/attached/reusable + packaging accompanying gross shipments S + external returns out EO + waste W. N = P_received + NP_received: separately record actual purchased receipts P_received and first non-purchase external receipts NP_received, including packaging arriving with feed, separately borrowed/hired or freely transferred, whether or not supplier inventory covers it. Purchase invoices P are reconciled to P_received, not added to N again. Reconcile every physical movement and stock location independently from burden coverage. Count actual purchase, transport and service burdens once; if already carried in the supplied feed/provider vector, do not add them again. Missing supplier coverage is an explicit pending investigation, never zero. Every ER must link to an earlier outward transaction of that same article, including verified prior-period history; preserve event order and gross movements instead of netting returns into purchases or shipments. Internal reuse cancels. Attribute metering, real return transport and measured service wear to the serviced cohort and preserve its original Qc; attach the article's provider/lifetime burden once. No packaging enters metal Q, becomes a repurchase on reuse, or earns automatic coproduct credit. | `ilcd-general-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_release` | scrap_ingot_route | release and stocks | primary_record | cohort id; parent heat; gross scale ticket; tare; measured free water; detachable residue; net first-release mass Q; first-release timestamp; acceptance tests; photographs; source-to-heat-to-casting-to-release lot links; actual producer and any outsourced melting/casting supplier; actual handover tickets, gate and burden coverage; named first receiving melt shop; receiving feed specification and linked acceptance/use evidence; opening and closing WIP/FG; gross shipments V; returned lot and original delivery id; Qc | Use calibrated weighing and independent moisture/residue sampling; reconcile unique acceptance and physical stock transitions. Reinspection is a linked event, not another first release. Preserve the first receiver evidence separately from the production gate: later dispatch or receiving acceptance does not create a second Q. | kg | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_charge` | scrap_ingot_route | source scrap | primary_record | supplier; parent steel provider and process; machining source; legal transfer state; upstream burden vector; scrap form; lot mass; moisture; oil; metal/oxide assays; relevant elemental composition; sorting rejects; internal transfers | Receive traceable delivery records and matched primary composition tests; inspect the actual physical form. Match the supplied stream and source operation to the provider boundary, including its separately justified recycling allocation. | kg | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_material` | scrap_ingot_route | each supplied material | primary_record | row id; supplier; whole formulation; grade; unit; raw receipt; opening stock; closing stock; use; return; loss; assay; equipment lifetime use; measured wear; raw exchange vector by cohort | Use purchasing, stores and calibrated consumption records for each atomic supply; identify real mixing and repair records. Durable mould and lining records retain lifetime and actual service wear. | kg | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_energy` | scrap_ingot_route | electricity and each actual fuel | primary_record | row id; meter opening; meter closing; raw kWh; raw fuel mass or volume; fuel state and independent density; calorific value; voltage; provider; operation and idle intervals; cohort; allocation drivers | Use calibrated main and submeters, invoices, tank stocks and equipment logs. Reconcile main/submeter totals, including extraction, cooling, start/stop, failed and cleaning loads; no repeated counting of a shared meter. | raw kWh; kg; m3 | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_gas` | scrap_ingot_route | each gas and actual air species | primary_record | row id; bought or ambient; composition; cumulative volume or rate; rate unit; time interval; temperature; absolute pressure; moisture; independent density or equation basis; mass; discharge fate | Use calibrated gas meters, delivered mass records and actual composition/state measurements. Establish actual rate integration and consistent wet/dry standardisation before calculating mass; retain conversion uncertainty. | raw m3; kg; measured rate | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_water` | scrap_ingot_route | water and coolant | primary_record | circuit and row id; purchased whole formulation; raw water mass or cumulative volume; independent liquid density; temperature and pressure; enthalpy basis; opening and closing stocks; makeup; evaporation; blowdown; return; reaction water evidence; supplier water/energy convention | Meter each external boundary and sample the real liquid. Record free, structural and reaction water separately and establish phase/enthalpy with actual states. Do not re-purchase internal circulation or double-count solution water and whole solution. | kg; raw m3; MJ | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_residue` | scrap_ingot_route | each residue outlet | primary_record | row and outlet id; whole mass; moisture; composition and phase; captured or emitted; origin partitions; destination; legal transfer; one provider; inherited vector; internal recovery transactions | Weigh each real outlet and retain independent water/metal/phase assays, transfer notes and actual treatment or receiver records. Whole outlet and non-additive source partitions reconcile to the same physical mass. | kg | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_emission` | scrap_ingot_route | each elementary species | primary_record | species; CAS where applicable; final medium; stack and fugitive source; concentration; wet/dry basis; oxygen correction; gas flow; cumulative or rate; interval; temperature; pressure; capture; chemical phase; particle size; detection limit; uncertainty | Use actual source measurements and phase-specific tests; align concentration, flow, time and oxygen-reference conditions. Keep indicator equivalents separate from true species; below detection is a censored record, not measured zero. | raw concentration; flow; kg | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_pack` | scrap_ingot_route | each packaging article | primary_record | article id; cohort; opening empty; opening attached WIP; opening attached FG; opening reusable; first external receipts N split into P_received purchased and NP_received non-purchase (with incoming feed, borrowed/hired or free transfer regardless of supplier coverage); purchase invoices P reconciled to P_received; supplier embedded burden coverage and missing-data inquiry; external returns received ER with earlier outward transaction ids and timestamps; closing empty/attached/reusable; gross shipment packaging S; external returns out EO; waste W; internal reuse; provider; lifetime burden; serviced cohort original Qc; meter and return-service assignment | Independently count and weigh each article type across all stock locations and actual external movements. Link returns, repairs, service wear and delivery ids; reconcile al_packaging in article units and mass without assumed piece weights. | kg; actual article count | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |
| `cp_vector` | scrap_ingot_route | raw attribution and services | primary_record | cohort and exchange id; original raw unit; gross physical V; opening and closing raw-stock vectors; actual external receipt vectors; actual issue vectors; each provider, historical quantity, price and prior allocation; opening WIP vector; current operation exchanges; dedicated assignment; virtual subdivision; causal drivers; residual gate prices and dates; closing WIP vector; opening and closing FG historical vectors; incremental FG service vectors; non-cohort transfers; Q; original Qc; service H; service raw load; return/reversal ids; actual incremental rework; Q0 hold account | Reconcile raw transactions and each inherited exchange over the full reporting period, including failed, idle and cleanup intervals. Freeze original first-release Qc for services; allocate each raw service burden to its real cohort before calc_once. Preserve all unknown relationships as unresolved, never as a passing balance. | row-native raw units | Each transaction/heat and continuous meter interval; stocktake at period boundaries | Full declared reporting period including failed/Q0/idle/cleanup intervals and cohort histories | One declared site/source and separately identified suppliers and cohorts | per 1 kg reference flow | Calibrations; original tickets; matched stock and provider evidence; uncertainty; source limitations |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw` | all inventory rows | Convert each raw observation to the declared row unit using supported exact unit factors or separately measured state/composition/density; integrate only rates. Do not divide by production. Keep whole supplied formulations once and assays as non-additive subledgers. | raw_observation; state; conversion_evidence | converted_raw_exchange | `jrc-iron-steel-2013` |
| `calc_assign` | all inventory rows | First reconcile opening raw-stock vector plus actual external receipt vectors less closing raw-stock vector and documented external removals to obtain actual issues, retaining each original provider, quantity, price and prior allocation. Transfer those issue vectors to WIP once; never also charge the receipts as consumption. For each exchange f and cohort c, obtain numerator A_f,c from opening inherited WIP plus actual dedicated/allocated issues and current operation exchanges and actual returned inherited vectors, less closing inherited WIP and documented transfers to other cohorts. FG retains its existing first-release production vector; assign only incremental FG services to original Qc, never copy the historical FG vector into current production. Assign actual incremental rework separately; matched internal transactions cancel. Preserve residual common-process allocation and Q0 balances explicitly. Keep gross physical V independent of this attributed vector. | converted_raw_exchange; opening_raw_vector; closing_raw_vector; opening_WIP_vector; closing_WIP_vector; FG_vector; assignment_records; returns | A | `ilcd-general-2010` |
| `calc_once` | all inventory rows | a = A / Q for a positive first-release cohort Q in kg; use original Qc as Q for the same cohort service extension. This is the sole production division; amount cards and collection aggregation only reference a. For Q=0 retain A with its unresolved or failed cohort and do not calculate a. The released_ingot reference row is 1 kg, not a second calculation. | A; Q; Qc; cp_release; cp_vector | a | `ilcd-general-2010` |
| `calc_pack` | steel_band; wood_pallet; band_return_in; pallet_return_in; band_on_ship; pallet_on_ship; band_return_out; pallet_return_out; band_waste; pallet_waste | For each article apply al_packaging using raw stock and actual first external receipts N, not purchase invoices P as a proxy for receipts. Reconcile ER to its earlier outward article transaction before aggregation. Cancel internal reuse; separately retain lifetime/provider burden and real return services. Reconcile mass and article count using actual weighed article configurations; this rule does not divide by Q. | packaging_stocks; N; P; ER; S; EO; W; cp_pack | packaging_balance | `ilcd-general-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference and raw_turnings | Provide source-specific primary evidence for the actual alloy-steel scrap source, furnace, rough mould route, first feed-quality release and full physical product identity. Link the original source lot, heat, casting, unique release and named first receiving melt shop with its actual remelting-feed specification and acceptance/use records. Generic factory capability or a trade definition alone leaves the source-specific method gap. | Source records; photographs; assays; accepted receiving specification |
| `dq_completeness` | each exchange and period | Retain every row, unit, raw field, zero-output load, stock carry, origin partition, whole outlet and provider relation. Extend actual absent-from-template exchanges atomically. A not-applicable observation requires evidence of absence, never a silent zero. | Raw ledgers; detector limits; calibrated meters; balance reports |
| `dq_allocation` | all functions | Document goal-consistent upstream recycling and current-process allocation methods separately. Keep evidence for real transfer state, subdivision, causal drivers and residual comparable gate prices. Report unresolved basis and sensitivity without substituting a convenient fraction. | Provider inventories; actual contracts; assignment calculations |
| `dq_scope` | dataset metadata | Declare geography, reporting dates, source and technology representativeness, configuration, uncertainty and all exclusions. Future factory quantities are collection obligations, not PCR defaults; mechanical checks cannot certify scientific or translation approval. | Quality statement; measurement records; source limitations |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_terminal` | reference and product evidence | Require all declared qualifiers and the full physical conjunction before accepting this specialised terminal. Evidence for generic EAF steel, slabs, billets, unmelted scrap or beneficiation slag is insufficient. Reject a physically contradictory native candidate even when its name or classification matches. | `un-cpc3-2025`; `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `v_native` | selected flows and providers | Inspect full native identity, dataset type, route, grade, phase, form, CAS where present, medium, geography, all comments and properties; reference property and real unit must agree. Distinguish explicit identity restrictions from generic taxonomy or descriptive comments, which do not create an unstated hard grade. Positively establish the actual supplied state and function before binding; a generic name alone is insufficient. Generic reference flow identity does not qualify a specific alloy-steel source or actual furnace. Selected electricity has formal supply location CN and is only the stated 1–35 kV user-side consumption mix. Unbound raw-material and auxiliary rows stay specific row obligations; an ordinary unresolved UUID alone is not a global methodology hold and cannot be replaced with a family label. | `dz-customs-rtc067-2024`; `cbp-n351850-2025`; `usitc-ch72-2026` |
| `v_balances` | whole period and every cohort | Require independent gross mass/element/species/water/heat closures, all raw-unit conversions, first-release Q and its FG relation, opening/closing WIP vectors, failed/Q0 loads, actual returns and incremental rework, and separate packaging and service ledgers. Do not count mixed-outlet whole mass and its origin partitions twice, or attach two providers to one outlet. Reject incomplete species evidence rather than balancing it with COD/VOC/NOx/total dust. | `jrc-iron-steel-2013`; `ilcd-general-2010` |
| `v_no_defaults` | quantified dataset | No default grade, recipe, furnace, yield, oil/water content, energy intensity, density, emission factor, allocation ratio, recycling credit or production quantity is supplied. Unknown core product/route, source burden or physical species is a substantive hold; missing future site values and ordinary compatible-provider gaps require collection and disclosure. Mechanical projection/measurement checks do not establish scientific applicability or translation approval. | `ilcd-general-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply only the declared compatible remelting-feed function after its product, route and burden evidence is complete |
| allowed_use | Source-, state- and route-matched remelting-feed modelling with explicit uncertainty and provider linkage |
| excluded_use | Billet/slab or ordinary steel substitution; unidentified scrap sources; universal steel average; zero-burden or recycling-credit claims; automatic classification or methodology approval |
| required_metadata | All reference qualifiers; primary terminal and route evidence; complete raw/attributed vectors; actual recycling and allocation method; source, site, period, provider and physical states |
| required_quality_disclosure | Core evidence holds; unbound identities; collection gaps; provider limits; balance and species uncertainty; Q0 and stocks; no numerical defaults |
| update_trigger | Change in source, grade, physical form, casting/furnace route, acceptance gate, provider, species, legal transfer/recycling method or supported evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | `official_guidance` | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.202–204, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Separate 39350 identity from 39340 unmelted ferrous scrap and 39310 steelmaking residues. The notes do not supply a detailed manufacture recipe. |
| `jrc-iron-steel-2013` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for Iron and Steel Production, 2013, Chapter 8 §§8.1–8.2.1, printed pp.419–429, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf | Adjacent industrial EAF operations, atomic supply/emission candidates and collection needs only. Does not prove specialised rough scrap-ingot production. Table8.1 is per liquid steel across surveyed EU routes; no numerical reuse, fixed steam route or automatic AOD/VOD. |
| `ilcd-general-2010` | `official_guidance` | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment — Detailed guidance, First edition March 2010, §§7.9.2–7.9.3, printed pp.255–272, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional dedicated assignment/subdivision, exchange-specific determining physical causality, residual same-gate/state market values and inventory conservation. No automatic recycling formula, free scrap, infinite loop, fixed recovery rate or avoided-production credit; upstream recycling still needs separately applicable evidence. |
| `dz-customs-rtc067-2024` | `official_guidance` | Direction Générale des Douanes, Recueil de Décisions de Classement Tarifaire 2025, February 2025, RTC 067/DGD of 5 November 2024, PDF p.74 / printed p.68, https://www.douane.gov.dz/IMG/pdf/recueil_des_decisions_de_classement_tarifaire_2025_.pdf | Real rough-cast alloy-steel scrap ingot made from remelted fine turnings or grinding fines, rough irregular surface, no exact chemistry, for steelmaking addition; 7204.50.00.00. This method selects fine turnings only. No furnace, recipe, site inventory or quantitative default. |
| `cbp-n351850-2025` | `official_guidance` | US CBP, NY N351850, 12 August 2025, pp.1–3, https://rulings.cbp.gov/api/getdoc/ny/2025/N351850.pdf | Counterexample: billets intended for foundry steelmaking remain semifinished stock. Remelt intention alone is insufficient; inspect physical form, casting/working history and composition. No tariff rate or generic lot approval is adopted. |
| `usitc-ch72-2026` | `official_guidance` | USITC, HTSUS Revision 23 (2026), Chapter 72 Notes 1(g) and 1(ij), printed p.72-2 / PDF p.6, publisher snapshot retrieved 21 November 2026, https://hts.usitc.gov/reststop/file?release=currentRelease&filename=Chapter%2072 | Rough cast form, surface faults, no feeder-heads/hot tops for ingots and exclusion of pig iron/spiegeleisen/ferroalloy composition; distinct semifinished definition. Retained dated edition, no tariff-rate or lot-qualification claim. |
