---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.gymnasium-or-athletics-articles-and-equipment
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Fixed-weight cast-iron dumbbell manufacture from supplied castings

## 1. Scope and Applicability

This PCR covers manufacture of one complete single fixed-weight solid cast-iron dumbbell with both ends and an integral cast grip, from a specified supplied uncoated casting through remaining cleaning, edge/grip/body grinding, actual liquid-paint surface finishing, specified inspection and first whole-article quality release. The supplier casting carries its actual metal charge, moulding, melting, pouring, cooling and supplied cleaning burden once. There is no on-site melting process in this bounded route. Actual supplied casting state must distinguish cleaning already performed from remaining work. A casting alone is not the terminal. Sources: vic-dumbbell-process; athy-casting-finish; kingstone-dumbbell-grind.

The route is an explicit technical synthesis, not evidence that VIC, Athy and Goldens share one order, factory, alloy or coating recipe. VIC gives actual dumbbell casting-to-finish operations and defect/weight/coating/drop-check context. Athy independently establishes cleaned/fettled castings supplied before optional machining/painting. Goldens establishes a complete cast-iron dumbbell terminal with a cast textured grip and final coating, sold in pairs; a sales pair is two physical articles, not a different reference flow. Its ductile blend and recycled feedstock are not universal defaults. Kingstone supports real remaining dumbbell grinding and its coating-line interface; adjacent bicycle, golf, aluminium and composite examples are excluded. Factory records must establish the actual uncoated supplied casting and actual compatible liquid coating. No nominal catalogue mass, density claim, melt/cooling time, temperature, alloy ratio, coating thickness, yield, warranty, strength, certification or lifetime is adopted.

Exclude adjustable dumbbells, detachable bar/plate sets, multi-piece bolted or welded-head structures, kettlebells, rubber/urethane overmoulded principal routes, whole gyms, other moving apparatus, toys, pig iron, scrap, unfinished castings/parts as terminal, gym training and stadium services, use and end-of-life of the sold dumbbell. On-site foundry production or another principal structure/coating route requires a separately evidenced applicability decision and its actual atomic inventory before use; do not add it to this bought-casting route by default. Actual packaging, storage, maintenance and gate services remain visible; future auxiliary/provider gaps are not zero amounts.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.gymnasium-or-athletics-articles-and-equipment |
| classification_refs | CPC 3.0 38430; narrower fixed-weight integral-cast dumbbell scope; no mapping acceptance |
| covered_products | Complete solid cast-iron fixed-weight dumbbell with integral grip and actual liquid-paint finish |
| excluded_products | Exclude adjustable dumbbells, detachable bar/plate sets, multi-piece bolted or welded-head structures, kettlebells, rubber/urethane overmoulded principal routes, whole gyms, other moving apparatus, toys, pig iron, scrap, unfinished castings/parts as terminal, gym training and stadium services, use and end-of-life of the sold dumbbell. On-site foundry production or another principal structure/coating route requires a separately evidenced applicability decision and its actual atomic inventory before use; do not add it to this bought-casting route by default. Actual packaging, storage, maintenance and gate services remain visible; future auxiliary/provider gaps are not zero amounts. |
| representative_product | One complete actual specified dumbbell; nominal sales weight is not measured net mass |
| production_route | Supplied uncoated casting; remaining cleaning/grip/body finishing; actual liquid coating/drying; inspection and first release |
| market_state | Complete first quality-released article; actual later factory-gate services recorded separately by original cohort |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete fixed-weight hand-held resistance article for exercise |
| How much | 1 kg of complete first-released dumbbells of one declared configuration; mass inventory basis does not imply equal training performance |
| How well | Complete cast body/integral grip and actual accepted coating; actual manufacturer inspection and disposition records; no PCR-invented rating |
| How long or cycle | One first-release manufacturing cohort; use life outside scope; later services have explicit original cohort Q_H and observed H |
| reference_flow_link | finished_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Gymnasium or athletics articles and equipment `ad8b56f9-28ab-4cdb-93e8-3e6c7466513d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | complete single fixed-weight article with integral cast grip and both ends; actual drawing and shape; actual cast-iron grade and supplied blank state; supplier geography and upstream boundary; actual liquid coating formulation and complete coating state; grip and edge condition; manufacturer acceptance specification and actual test records; unique first-release cohort and release time; calibrated complete net masses excluding packaging; raw and WIP inheritance vectors; packaging pools and water states; original-cohort service horizon and denominator |

Product flow; finished manufactured gymnasium/athletics article; production mix at plant; no fixed material, grade, geography, CAS or performance is specified. Qualify it here as ONE complete fixed-weight cast-iron dumbbell with integral cast grip and both ends, actual finished coating and unique first release; raw metal, blank, detached grip, plates, adjustable set and kettlebell cannot use this reference role. The broad family alone establishes neither manufacturer nor performance.

Every qualifier above must be declared in the concrete data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| first_release_mass | finished_release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the calibrated sum of complete accepted net article masses at unique first release, excluding transport packaging and rejects. Do not use catalogue 5/10/20 kg labels. Retain individual configuration, scale/tare and release records; no per-item-to-kg assumption. |
| native_quantities | all inventory rows | Actual native extensive property per card | Native kg or MJ or m3 as explicitly stated on the individual card | Mass rules do not overwrite electricity/heat energy or gas volume. Convert raw source units once with traceable state/geometry/density. Integrated gas/liquid volume is already extensive; integrate time only for a measured rate. Never invert a secondary coefficient to manufacture density. |
| single_denominator | all inventory rows | Per-card native property | Native numerator unit per kg reference product | Collect raw undivided records. Section 8 owns the only quotient. Manufacturing burden A and gross physical V are different channels; post-release A_H/V_H use original Q_H and observed H. Card and aggregation basis labels reference that same result and do not divide again. At zero denominator keep loads but no unit value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specified supplied uncoated integral cast-iron dumbbell casting; actual supplied cleaning state and upstream foundry coverage |
| starting_condition_role | Purchased intermediate casting at receiving gate; not a finished dumbbell |
| product_classification_scope | Complete finished exercise article within narrower CPC 38430 scope |
| recursive_input_rule | No purchased complete dumbbell may replace blank-to-finish manufacturing. Real released returns remain original-cohort service flows with inherited vectors and no new Q. |
| upstream_dataset_requirement | Compatible casting supplier inventory includes real metal/mould/melt/pour/cool/clean route once; other actual purchased inputs need compatible upstream providers. Match geography, grade, supply state and quality; do not infer supply from identity alone. |
| disclosure | Actual make/buy state; complete terminal; first-release cohort; raw/WIP/FG and service ledgers; all provider and identity gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_start | all inventory rows | Use the supplied uncoated casting boundary and retain its real upstream foundry inventory once. Each actual additional chemical, fuel, water phase, abrasive, packaging article, fluid, asset and waste outlet is an atomic exchange. Supplier-included packaging is a real ingress with one upstream owner, not an omission or another purchase. No generic other-material zero bucket is allowed. | vic-dumbbell-process; athy-casting-finish |
| b_q | all inventory rows | Q is newly first-released complete net kg, including that cohort left in closing FG. Reinspection, delivery, returned goods and permitted or failed rework never create another Q for the same article. Keep every failure, sample, start/stop, idle, cleanup and rework load. At Q=0 retain raw loads and dispositions but issue no unit result. Do not reduce manufacturing burdens merely because ordinary rejects/waste/samples are sold or sent away. | vic-dumbbell-process; ilcd-2010-attributional |
| b_stocks | all inventory rows | Maintain independent physical wet opening/closing stocks for raw materials, WIP, unassigned non-WIP stores, installed fluids/assets and finished goods, with each exchange-specific inherited burden vector. Manufacturing B_close contains only raw/WIP and unused/unassigned non-WIP burden, never already released closing FG or already performed services. If raw consumption is already stock-corrected, do not correct it again. Newly entering water/material retained in closing stock remains an actual influx; full closing wet mass remains too. | ilcd-2010-attributional |
| b_physical | all inventory rows | Close physical mass and relevant measured Fe/C/H/O or other element ledgers independently of burden allocation. Manufacture uses actual external receipts and opening stocks versus newly released output, actual rejects/waste/gases and closing unreleased/raw stores. The FG/service gate bridges opening FG plus first-release handoff and real returns to gross dispatch, closing FG, actual damage/waste and real water/material changes. On consolidation cancel only paired internal handoffs; never add Q and its released closing FG as two products. Gross mass is never multiplied by economic share. Reaction, free, vapour, condensate and structural water require independent evidence; no residual fits two unknowns. COD/VOC/NOx/element totals are not molecular masses. | ilcd-2010-attributional |
| b_service | all inventory rows | Actual post-release services stay with their original first-release cohort Q_H and observed horizon H; do not use current unrelated Q or delete performed work because FG is held. Carry forward only genuinely unused/unassigned service or charges with their full vectors. Actual post-release repair needs manufacturer/specification permission plus postwork tests, acceptance and disposition before continued qualification is claimed. Missing permission or failed acceptance never erases already incurred unauthorised/failed work, material or waste; keep hold/disposal and original-cohort burden. Ordinary humidity exchange needs no invented repair event. A net-delivery study requires a different complete historical gross-dispatch/return/original-delivery reversal bridge, not this first-release denominator. | goldens-dumbbell-spec; ilcd-2010-attributional |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| finish | Casting receipt and remaining complete dumbbell manufacture | required | Actual supplied casting to unique whole release | foreground | 1 kg first-released complete dumbbell |
| service | Original-cohort post-release gate services | conditional | Actual packing/storage/handling/dispatch/retest/work during observed H | foreground | Supplementary service per kg original cohort Q_H; no new production Q |

For every card, conditions govern applicability, never permission to erase real activity. Add the actual missing single input/output before a dataset is complete. Gross-disclosure rows carry full physical V, with no second provider acquisition/credit; burden-bearing dimensions are independently assigned once by the raw vector ledger. Description restrictions are normative and accompany the row.

### Process: Dumbbell manufacture (`finish`)

#### Inputs

##### Product flows

###### Supplied uncoated dumbbell casting (`cast_blank`)

Receive a specified dumbbell casting whose supplier has already performed the declared metal charge, moulding, melting, pouring, cooling and only the cleaning stated on its delivery record. Inherit its supplier burden once; remaining cleaning and grip/body finishing are foreground. Never add pig iron, scrap charge or a fictional furnace for these same castings.

Product flow, metal part blank, cast or forged, production mix at plant China; machining input with upstream-output continuity and actual scrap/swarf allowance. This row selects the CAST branch only: a supplied solid uncoated cast-iron dumbbell-shaped blank with integral handle, not a forged steel blank or complete finished dumbbell. Retain actual grade, supplied cleaning state and Chinese supply geography. A different geography or route needs a compatible identity decision. No alloy recipe or machining yield is supplied.

- Selected flow: Metal part blank `571c5e05-13e8-499c-87a9-284220c814cb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `athy-casting-finish`

###### Finishing and inspection electricity (`electricity_finish`)

Meter actual clean/grind, coating application and drying when electrical, extraction, inspection, failed runs, startup, shutdown, idle, cleanup and rework electricity; separate measured shared services and avoid counting compressor electricity when purchased air already owns it.

Product flow, alternating current below 1 kV supplied in China (CN), grid-average supply, consumption mix to user. Native reference property is Net calorific value with MJ reference unit, used here as its electrical-energy interface, not material mass or fuel LHV. Match site geography, voltage, time and grid/provider; convert measured kWh to MJ once using 3.6 MJ/kWh. Other geography, voltage or dedicated generation requires another compatible row and provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Whole black liquid coating preparation (`liquid_paint`)

Actual specified liquid-paint finishing is the bounded technical variant. Weigh the whole supplied formulation and match the actual manufacturer application/drying specification; this synthesis does not establish a current factory recipe. For genuine on-site formulation add every purchased ingredient and mixing energy/loss separately, replacing the overlapping supplied preparation.

Product flow of liquid paint: supplied pigment/binder/carrier formulation that dries to a film; oil-based or water-based supply is possible but no formula, solid fraction, colour, density or grade is fixed. This row is ONE actual black liquid coating preparation purchased whole; record its SDS and supplier recipe identity. Pigment, resin and supplied solvent/water are component subaccounts, not second purchases. It does not represent powder, plating or a rubber sleeve.

- Selected flow: Paint `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `athy-casting-finish`; `goldens-dumbbell-spec`

###### Liquid cleaning and process water (`tap_water_finish`)

Conditionally measure each real water use, coolant make-up or cleanup in disjoint event subaccounts. Supplied preparation water is already included and not repurchased. Record in-process water, drain, captured wet residue and evaporation independently; absence of a wet process requires evidence, not a default zero.

Product flow of treated municipal/potable tap-water supply, production mix at plant; treatment varies with actual source and location. Mass/kg is native; its secondary volume coefficient is not a site density measurement. Do not use it for raw abstraction, wastewater, humidity, boiler steam or heat. Preserve each actual use and water stock separately.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Purchased compressed air (`compressed_air`)

Conditional supplied pneumatic/atomising air only. If generated on site, retain metered compressor electricity and disjoint atmospheric gas intake instead of this second external purchase. Internal supply/discharge handoffs cancel.

Product flow of air compressed above atmospheric pressure for pneumatic tools or paint atomisation; Volume/m3 is native. Record pressure, temperature, humidity and meter normal/reference conditions, then measure actual carrier kg independently for physical closure. Purchased whole compressed air and its in-situ compressor electricity are mutually exclusive ownership paths; gas species are composition disclosures, not extra purchased gas.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Purchased coating-drying heat (`bought_heat`)

Only if actually supplied for the specified coating route. Heating state, carrier mass, return water and supply contract are independently observed. Electrical drying uses its actual electricity and does not automatically add bought heat.

Product flow of natural-gas-fuelled district/industrial heat at plant, native energy reference MJ; native secondary volume and its property coefficient are not measured carrier density or metered enthalpy. Use only a verified compatible purchased heat service. Record actual carrier water/steam mass and inlet/outlet temperature, pressure, phase and enthalpy, plus supplier ownership of water and energy. No on-site boiler, steam supply or return is presumed; do not purchase the same heat and its supplier fuel twice.

- Selected flow: Heat `260672cc-62f0-48c3-b09e-22e71519be74`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Bonded alumina grinding wheel (`bonded_wheel`)

Conditional actual bonded aluminium-oxide grinding wheel. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Bonded aluminium-oxide grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Cast-steel shot for residual cleaning (`blasting_shot`)

Conditional actual cast-steel blasting shot. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Cast-steel blasting shot
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Whole aqueous alkaline cleaning preparation (`cleaner_preparation`)

Conditional actual aqueous alkaline degreasing preparation. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Aqueous alkaline degreasing preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Cotton wiping cloth (`cotton_wipe`)

Conditional actual unprinted cotton wiping cloth. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Unprinted cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Mineral lubricating oil charge (`mineral_lube`)

Conditional actual petroleum-based lubricating oil preparation. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Petroleum-based lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Dry-dust filter cartridge (`dust_filter`)

Conditional actual dry-dust filter cartridge. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Dry-dust filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual purchased-heat carrier water input (`carrier_water_in`)

One actual heat-supply water carrier in its observed liquid/steam phase and actual direction, never assumed from a heat-energy record alone. Measure full carrier kg, phase, temperature, pressure, enthalpy, water quality and supplier return obligation independently. Whole heat and water share one documented provider/burden convention, with no double purchase or default boiler. Actual condensate is a separate Product return only where really returned; other drains/emissions remain separate actual outlets.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Heat-supply carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### New complete grinding machine receipt (`grinder_new`)

One configured complete metal-finishing grinder; native Product manufactured at plant, Mass/kg, not a free-standing service or a second machine per kg of product. Record actual complete new/used asset gross mass and installed-fluid/part component bridge. Full gross V is physical disclosure with no acquisition provider duplicated on the normalized manufacturing matrix. The historical asset burden stock and actual period service draw are independent exchange-specific vectors in cp_assets; only unused/unassigned service can carry forward, not already performed service to held FG.

Product flow of a complete manufactured metal-removing/abrasive-finishing machine-tool at plant; native family includes other machine-tools but this row is only the configured grinding machine. No fixed material, life, rated power or mass is supplied. Use actual complete asset mass and configuration; a wheel, repair part or service is not the same object.

- Selected flow: Machine-tools for deburring, sharpening, grinding, honing, lapping, polishing or otherwise finishing metal, sintered metal carbides or cermets by means of grinding stones, abrasives or polishing products, machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine-tools working by removing metal, sintered metal carbides or cermets n.e.c. `84023a05-6bd8-46e1-9d67-a9b99457f876`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Used complete grinding machine receipt (`grinder_used`)

One configured complete metal-finishing grinder; native Product manufactured at plant, Mass/kg, not a free-standing service or a second machine per kg of product. Record actual complete new/used asset gross mass and installed-fluid/part component bridge. Full gross V is physical disclosure with no acquisition provider duplicated on the normalized manufacturing matrix. The historical asset burden stock and actual period service draw are independent exchange-specific vectors in cp_assets; only unused/unassigned service can carry forward, not already performed service to held FG.

Product flow of a complete manufactured metal-removing/abrasive-finishing machine-tool at plant; native family includes other machine-tools but this row is only the configured grinding machine. No fixed material, life, rated power or mass is supplied. Use actual complete asset mass and configuration; a wheel, repair part or service is not the same object.

- Selected flow: Machine-tools for deburring, sharpening, grinding, honing, lapping, polishing or otherwise finishing metal, sintered metal carbides or cermets by means of grinding stones, abrasives or polishing products, machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine-tools working by removing metal, sintered metal carbides or cermets n.e.c. `84023a05-6bd8-46e1-9d67-a9b99457f876`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Steel rolling-element grinder bearing (`bearing_new`)

One actual new or removed bearing of the configured grinder only. Verify its complete bearing material/construction and supplier; no whole machine, steel raw material or pallet identity is substituted. In the full asset mass bridge the bearing is disjoint from remaining machine body. Keep actual new influx and full in-place closing mass together, and separately own its real service burden once.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel rolling-element grinder bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

##### Waste flows

##### Elementary flows

###### Atmospheric O2 intake (`air_o2_in`)

Actual ventilation/process/combustion intake species where material balance requires it. Do not add the same species already entering in a whole purchased compressed-air stream. No fabricated fixed air composition.

Elementary resource from air; molecular oxygen CAS 7782-44-7; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Atmospheric N2 intake (`air_n2_in`)

Actual ventilation/process/combustion intake species where material balance requires it. Do not add the same species already entering in a whole purchased compressed-air stream. No fabricated fixed air composition.

Elementary resource from air; dinitrogen CAS 7727-37-9; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Atmospheric AR intake (`air_ar_in`)

Actual ventilation/process/combustion intake species where material balance requires it. Do not add the same species already entering in a whole purchased compressed-air stream. No fabricated fixed air composition.

Elementary resource from air; argon CAS 7440-37-1; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Atmospheric humidity entering manufacture (`humidity_in`)

Includes actual condensation and sorption during ordinary handling/storage as well as processing; no repair permission or operation is invented for natural exchange.

Elementary resource Water, in air; renewable material resource from air, native Volume/m3. No official Chinese basename is provided. It represents actual atmospheric water-vapour intake, including ordinary storage/handling sorption and process humidity, not liquid purchased water. Use measured vapour state and independent state-specific density to obtain kg for closure; no liquid-water density or inverse secondary coefficient.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

#### Outputs

##### Product flows

###### Complete grinding machine outward transfer (`grinder_out`)

One configured complete metal-finishing grinder; native Product manufactured at plant, Mass/kg, not a free-standing service or a second machine per kg of product. Record actual complete new/used asset gross mass and installed-fluid/part component bridge. Full gross V is physical disclosure with no acquisition provider duplicated on the normalized manufacturing matrix. The historical asset burden stock and actual period service draw are independent exchange-specific vectors in cp_assets; only unused/unassigned service can carry forward, not already performed service to held FG.

Product flow of a complete manufactured metal-removing/abrasive-finishing machine-tool at plant; native family includes other machine-tools but this row is only the configured grinding machine. No fixed material, life, rated power or mass is supplied. Use actual complete asset mass and configuration; a wheel, repair part or service is not the same object.

- Selected flow: Machine-tools for deburring, sharpening, grinding, honing, lapping, polishing or otherwise finishing metal, sintered metal carbides or cermets by means of grinding stones, abrasives or polishing products, machine-tools for planing, shaping, slotting, broaching, gear cutting, gear grinding or gear finishing, sawing, cutting-off and other machine-tools working by removing metal, sintered metal carbides or cermets n.e.c. `84023a05-6bd8-46e1-9d67-a9b99457f876`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Complete dumbbell first release (`finished_release`)

Unique finished Product reference output. Q is the sum of calibrated net kg of complete conforming dumbbells at their FIRST documented quality release. The cast body, integral grip and accepted coating are complete. Released closing finished stock is already included in Q and must neither be added as a second manufacturing output nor removed from its manufacturing burden.

Product flow; finished manufactured gymnasium/athletics article; production mix at plant; no fixed material, grade, geography, CAS or performance is specified. Qualify it here as ONE complete fixed-weight cast-iron dumbbell with integral cast grip and both ends, actual finished coating and unique first release; raw metal, blank, detached grip, plates, adjustable set and kettlebell cannot use this reference role. The broad family alone establishes neither manufacturer nor performance.

- Selected flow: Gymnasium or athletics articles and equipment `ad8b56f9-28ab-4cdb-93e8-3e6c7466513d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `vic-dumbbell-process`; `goldens-dumbbell-spec`

###### Actual carrier-water return to supplier (`carrier_water_return`)

One actual heat-supply water carrier in its observed liquid/steam phase and actual direction, never assumed from a heat-energy record alone. Measure full carrier kg, phase, temperature, pressure, enthalpy, water quality and supplier return obligation independently. Whole heat and water share one documented provider/burden convention, with no double purchase or default boiler. Actual condensate is a separate Product return only where really returned; other drains/emissions remain separate actual outlets.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Returned heat-supply carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

##### Waste flows

###### Separately collected cast-iron machining chips (`iron_chips`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Cast-iron machining chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Captured mixed grinding dust (`captured_dust`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Captured cast-iron and abrasive grinding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Rejected whole dumbbell casting or article (`rejected_dumbbell`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Rejected solid cast-iron dumbbell article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Separately collected paint residue (`coating_residue`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Waste black liquid-paint residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Spent bonded grinding wheel (`spent_wheel`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Spent bonded aluminium-oxide grinding wheel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual cleaning effluent shipment (`wet_effluent`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Cast-iron finishing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### One actual mixed finishing-waste outlet (`mixed_solids`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Mixed cast-iron finishing solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Separated spent lubricating oil (`used_oil`)

Only separately collected oil; if part of an actual mixed outlet, retain its origin ledger instead of a second shipment. Include fluid remaining in installed assets in closing stock.

Waste flow of used/contaminated petroleum or synthetic lubricating oil at generation, Mass/kg, treatment unspecified. Measure the actual separately shipped spent-oil stream; regeneration, combustion or disposal needs its own provider. It is not virgin oil or all maintenance waste.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual retired grinder waste (`grinder_scrap`)

One actually retired complete machine waste outlet, with independently measured fluids/removed parts disjoint from the whole body. No fixed machine life, whole-machine-per-kg purchase or automatic recovery credit.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Retired metal-finishing grinding machine waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Removed steel rolling-element grinder bearing waste (`bearing_removed`)

One actual new or removed bearing of the configured grinder only. Verify its complete bearing material/construction and supplier; no whole machine, steel raw material or pallet identity is substituted. In the full asset mass bridge the bearing is disjoint from remaining machine body. Keep actual new influx and full in-place closing mass together, and separately own its real service burden once.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Removed steel rolling-element grinder bearing waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

##### Elementary flows

###### Actual o2 air out (`o2_air_out`)

Actual emitted species/particulate mass only, including failed/idle/cleanup operation and natural water loss where applicable. Keep gross gas balances independent of energy and economic attribution. Other identified molecular emissions get new separate cards; VOC/NOx/COD/element totals are analytical indicators, never fabricated individual molecules.

Elementary emission to air, unspecified subcompartment; molecular oxygen CAS 7782-44-7; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual n2 air out (`n2_air_out`)

Actual emitted species/particulate mass only, including failed/idle/cleanup operation and natural water loss where applicable. Keep gross gas balances independent of energy and economic attribution. Other identified molecular emissions get new separate cards; VOC/NOx/COD/element totals are analytical indicators, never fabricated individual molecules.

Elementary emission to air, unspecified subcompartment; dinitrogen CAS 7727-37-9; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual ar air out (`ar_air_out`)

Actual emitted species/particulate mass only, including failed/idle/cleanup operation and natural water loss where applicable. Keep gross gas balances independent of energy and economic attribution. Other identified molecular emissions get new separate cards; VOC/NOx/COD/element totals are analytical indicators, never fabricated individual molecules.

Elementary emission to air, unspecified subcompartment; argon CAS 7440-37-1; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual water vapour out (`water_vapour_out`)

Actual emitted species/particulate mass only, including failed/idle/cleanup operation and natural water loss where applicable. Keep gross gas balances independent of energy and economic attribution. Other identified molecular emissions get new separate cards; VOC/NOx/COD/element totals are analytical indicators, never fabricated individual molecules.

Elementary emission to air, unspecified subcompartment; water vapour CAS 7732-18-5; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual pm air out (`pm_air_out`)

Actual emitted species/particulate mass only, including failed/idle/cleanup operation and natural water loss where applicable. Keep gross gas balances independent of energy and economic attribution. Other identified molecular emissions get new separate cards; VOC/NOx/COD/element totals are analytical indicators, never fabricated individual molecules.

Elementary particulate emission to air, unspecified subcompartment and size; Mass/kg. No fixed chemistry, particle distribution, stack height or LCIA factor. Native cement-source amount is an example only and is not reused. Measure actual remaining emission after control, distinguish captured solids, and do not call metal PM elemental gaseous iron.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Fossil carbon dioxide (`finish_co2_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary fossil carbon dioxide emission to air, unspecified subcompartment; CAS 124-38-9; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Fossil carbon monoxide (`finish_co_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary fossil carbon monoxide emission to air, unspecified subcompartment; CAS 630-08-0; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Nitrogen monoxide (`finish_no_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary nitrogen monoxide emission to air, unspecified subcompartment; CAS 10102-43-9; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Nitrogen dioxide (`finish_no2_exact`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary nitrogen dioxide emission to air, unspecified subcompartment; CAS 10102-44-0; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Identified coating toluene emission (`actual_toluene`)

Conditional only when actual supplied formulation/SDS and measured emission speciation establish toluene. It is not a default paint ingredient or the whole VOC result. Add every other actual chemical species independently before completing the inventory.

Elementary toluene emission to air, unspecified subcompartment; CAS 108-88-3; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: toluene `4d9a8790-3ddd-11dd-9bb5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_manufacture`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

### Process: Original-cohort gate services (`service`)

#### Inputs

##### Product flows

###### Actual post-release service electricity (`service_electricity`)

Meter actual storage, packing, handling, dispatch, retest and post-release work by original cohort and observation horizon H, including held finished goods, failed/rejected and unauthorised work. A_H uses the original released cohort Q_H; no new production is created.

Product flow, alternating current below 1 kV supplied in China (CN), grid-average supply, consumption mix to user. Native reference property is Net calorific value with MJ reference unit, used here as its electrical-energy interface, not material mass or fuel LHV. Match site geography, voltage, time and grid/provider; convert measured kWh to MJ once using 3.6 MJ/kWh. Other geography, voltage or dedicated generation requires another compatible row and provider.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Handling diesel fuel (`service_diesel`)

Conditional actual handling fuel; raw opening/receipt/closing fuel mass and actual combustion emissions stay separately traceable to original cohorts.

Product flow of diesel fuel on Mass/kg basis; fuel grade, formulation, density, heating value, refinery route, geography and provider unspecified. Match actual mobile handling fuel; independent fuel density/LHV is required if converting records, with combustion emissions measured separately. Do not import an assumed refinery, sulphur grade or fuel rate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Post-release liquid water input (`service_water`)

Every actual cleaning, pallet repair, wet handling and other liquid-water event is retained even if the new water remains in closing stock. Whole wet incoming articles already include their water once. X_in removes only overlap with another same-side incoming flow term, never with closing mass.

Product flow of treated municipal/potable tap-water supply, production mix at plant; treatment varies with actual source and location. Mass/kg is native; its secondary volume coefficient is not a site density measurement. Do not use it for raw abstraction, wastewater, humidity, boiler steam or heat. Preserve each actual use and water stock separately.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Corrugated transport carton (`carton_p`)

Conditional separately purchased for this material pool only. Use the complete actual gross leg V_carton_P in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow, primary/secondary packaging, production mix at plant gate GLO, Mass/kg. In this card the official generic basename identifies exactly ONE supplied corrugated transport carton only, qualified by actual board/adhesive/printing composition, moisture and provider. It is not an assortment of packaging. Included whole-carton components are not separately purchased; loose PE film, pallet, strap and coating pail have separate pools.

- Selected flow: Corrugated transport carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Corrugated transport carton (`carton_i`)

Conditional supplier-included ingress for this material pool only. Use the complete actual gross leg V_carton_I in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow, primary/secondary packaging, production mix at plant gate GLO, Mass/kg. In this card the official generic basename identifies exactly ONE supplied corrugated transport carton only, qualified by actual board/adhesive/printing composition, moisture and provider. It is not an assortment of packaging. Included whole-carton components are not separately purchased; loose PE film, pallet, strap and coating pail have separate pools.

- Selected flow: Corrugated transport carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Corrugated transport carton (`carton_er`)

Conditional external return received for this material pool only. Use the complete actual gross leg V_carton_ER in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow, primary/secondary packaging, production mix at plant gate GLO, Mass/kg. In this card the official generic basename identifies exactly ONE supplied corrugated transport carton only, qualified by actual board/adhesive/printing composition, moisture and provider. It is not an assortment of packaging. Included whole-carton components are not separately purchased; loose PE film, pallet, strap and coating pail have separate pools.

- Selected flow: Corrugated transport carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Polyethylene protective film (`pe_p`)

Conditional separately purchased for this material pool only. Use the complete actual gross leg V_pe_P in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of polyethylene FILM, CAS 9002-88-4, production mix at plant; no PE branching grade fixed. The native comment contrasts polyester as a competing material; it does not turn PE into PET. Match actual PE film and supplier; exclude PET film, resin pellets and a whole multilayer bag. No thickness/density defaults.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Polyethylene protective film (`pe_i`)

Conditional supplier-included ingress for this material pool only. Use the complete actual gross leg V_pe_I in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of polyethylene FILM, CAS 9002-88-4, production mix at plant; no PE branching grade fixed. The native comment contrasts polyester as a competing material; it does not turn PE into PET. Match actual PE film and supplier; exclude PET film, resin pellets and a whole multilayer bag. No thickness/density defaults.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Polyethylene protective film (`pe_er`)

Conditional external return received for this material pool only. Use the complete actual gross leg V_pe_ER in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of polyethylene FILM, CAS 9002-88-4, production mix at plant; no PE branching grade fixed. The native comment contrasts polyester as a competing material; it does not turn PE into PET. Match actual PE film and supplier; exclude PET film, resin pellets and a whole multilayer bag. No thickness/density defaults.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Whole wooden pallet (`pallet_p`)

Conditional separately purchased for this material pool only. Use the complete actual gross leg V_pallet_P in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of ONE wooden pallet made from wooden boards/slats, production mix at lumber mill; Mass/kg. Native classification wrongly includes electricity while the retained source tree identifies wood packaging; disclose this taxonomy inconsistency without changing the physical wooden identity. Match actual whole pallet construction, moisture and supplier; no mass, reuse count or life is assumed. Repair block or nail is not this whole pallet.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Whole wooden pallet (`pallet_i`)

Conditional supplier-included ingress for this material pool only. Use the complete actual gross leg V_pallet_I in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of ONE wooden pallet made from wooden boards/slats, production mix at lumber mill; Mass/kg. Native classification wrongly includes electricity while the retained source tree identifies wood packaging; disclose this taxonomy inconsistency without changing the physical wooden identity. Match actual whole pallet construction, moisture and supplier; no mass, reuse count or life is assumed. Repair block or nail is not this whole pallet.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Whole wooden pallet (`pallet_er`)

Conditional external return received for this material pool only. Use the complete actual gross leg V_pallet_ER in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of ONE wooden pallet made from wooden boards/slats, production mix at lumber mill; Mass/kg. Native classification wrongly includes electricity while the retained source tree identifies wood packaging; disclose this taxonomy inconsistency without changing the physical wooden identity. Match actual whole pallet construction, moisture and supplier; no mass, reuse count or life is assumed. Repair block or nail is not this whole pallet.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel transport strapping (`strap_p`)

Conditional separately purchased for this material pool only. Use the complete actual gross leg V_strap_P in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel transport strapping (`strap_i`)

Conditional supplier-included ingress for this material pool only. Use the complete actual gross leg V_strap_I in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel transport strapping (`strap_er`)

Conditional external return received for this material pool only. Use the complete actual gross leg V_strap_ER in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel liquid-paint pail (`pail_p`)

Conditional separately purchased for this material pool only. Use the complete actual gross leg V_pail_P in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel liquid-paint pail (`pail_i`)

Conditional supplier-included ingress for this material pool only. Use the complete actual gross leg V_pail_I in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel liquid-paint pail (`pail_er`)

Conditional external return received for this material pool only. Use the complete actual gross leg V_pail_ER in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Internal released dumbbell handoff (`fg_receipt`)

Physical complete article V only, linked to original first-release cohort and its historical burden vector. Internal release handoff is paired and cancels on consolidation; gross dispatch and returned goods do not create new Q. Closing FG remains a stock, not another manufacturing output. Actual returned mass may differ due to coating loss, water or damage; do not equate it blindly with original delivery.

Product flow; finished manufactured gymnasium/athletics article; production mix at plant; no fixed material, grade, geography, CAS or performance is specified. Qualify it here as ONE complete fixed-weight cast-iron dumbbell with integral cast grip and both ends, actual finished coating and unique first release; raw metal, blank, detached grip, plates, adjustable set and kettlebell cannot use this reference role. The broad family alone establishes neither manufacturer nor performance.

- Selected flow: Gymnasium or athletics articles and equipment `ad8b56f9-28ab-4cdb-93e8-3e6c7466513d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Actual whole dumbbell return receipt (`fg_return`)

Physical complete article V only, linked to original first-release cohort and its historical burden vector. Internal release handoff is paired and cancels on consolidation; gross dispatch and returned goods do not create new Q. Closing FG remains a stock, not another manufacturing output. Actual returned mass may differ due to coating loss, water or damage; do not equate it blindly with original delivery.

Product flow; finished manufactured gymnasium/athletics article; production mix at plant; no fixed material, grade, geography, CAS or performance is specified. Qualify it here as ONE complete fixed-weight cast-iron dumbbell with integral cast grip and both ends, actual finished coating and unique first release; raw metal, blank, detached grip, plates, adjustable set and kettlebell cannot use this reference role. The broad family alone establishes neither manufacturer nor performance.

- Selected flow: Gymnasium or athletics articles and equipment `ad8b56f9-28ab-4cdb-93e8-3e6c7466513d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### New pallet repair wood block (`repair_wood_in`)

Actual new pallet repair wood block event only, with measured new/removed mass, moisture, supply identity and disposition. This specific material is not the whole pallet. Keep actual new ingress even when installed in closing stock; full wet closing stock remains. X only removes overlap with another same-side incoming/outgoing flow term. A whole-pallet/component bridge is disjoint; removed origin W is not added to a mixed-waste total. Real burden belongs once to the original serviced cohort.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Solid sawn softwood pallet repair block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### New pallet repair steel nails (`repair_nails_in`)

Actual new pallet repair steel nails event only, with measured new/removed mass, moisture, supply identity and disposition. This specific material is not the whole pallet. Keep actual new ingress even when installed in closing stock; full wet closing stock remains. X only removes overlap with another same-side incoming/outgoing flow term. A whole-pallet/component bridge is disjoint; removed origin W is not added to a mixed-waste total. Real burden belongs once to the original serviced cohort.

Product flow, steel fasteners, auxiliary for final assembly of unspecified type, at plant China; Mass/kg. Qualify ONE actual supplied steel pallet repair nail. Native bolts/screws/nuts/rivets are aliases, not evidence that the nail has another construction. Preserve Chinese supply geography and actual coating/grade; no whole pallet, raw steel or mixed hardware kit is represented.

- Selected flow: Steel fasteners `691b2092-38f6-4125-bfb4-cab3d86af41f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Post-release Whole black liquid coating preparation (`service_liquid_paint`)

Actual specified liquid-paint finishing is the bounded technical variant. Weigh the whole supplied formulation and match the actual manufacturer application/drying specification; this synthesis does not establish a current factory recipe. For genuine on-site formulation add every purchased ingredient and mixing energy/loss separately, replacing the overlapping supplied preparation. Record actual original-cohort post-release work, including unauthorised or rejected attempts, with Q_H and observed H; permission/tests/acceptance are required for continued qualification, never to erase actual burdens.

Product flow of liquid paint: supplied pigment/binder/carrier formulation that dries to a film; oil-based or water-based supply is possible but no formula, solid fraction, colour, density or grade is fixed. This row is ONE actual black liquid coating preparation purchased whole; record its SDS and supplier recipe identity. Pigment, resin and supplied solvent/water are component subaccounts, not second purchases. It does not represent powder, plating or a rubber sleeve.

- Selected flow: Paint `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `athy-casting-finish`; `goldens-dumbbell-spec`

###### Post-release Cotton wiping cloth (`service_cotton_wipe`)

Conditional actual unprinted cotton wiping cloth. Verify supplied whole article/formulation, grade, supplier and use; no raw constituent is a substitute UUID for this supplied object. Record receipts, opening/closing unused and in-use stock, replacement, actual loss and disposition. Retain real activity even if unauthorised or failed; each other actual material needs its own atomic card before dataset completion. Record actual original-cohort post-release work, including unauthorised or rejected attempts, with Q_H and observed H; permission/tests/acceptance are required for continued qualification, never to erase actual burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Unprinted cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Undivided attributable raw numerator A divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

##### Waste flows

##### Elementary flows

###### Ordinary post-release humidity intake (`service_humidity_in`)

Actual ordinary storage/handling atmospheric sorption and condensation are collected by physical state and cohort. Natural exchange requires no invented repair occurrence or work permission.

Elementary resource Water, in air; renewable material resource from air, native Volume/m3. No official Chinese basename is provided. It represents actual atmospheric water-vapour intake, including ordinary storage/handling sorption and process humidity, not liquid purchased water. Use measured vapour state and independent state-specific density to obtain kg for closure; no liquid-water density or inverse secondary coefficient.

- Selected flow: Water, in air `d73aff1b-0b31-434f-8e44-87a08c93e13f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service o2 in (`service_o2_in`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary resource from air; molecular oxygen CAS 7782-44-7; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service n2 in (`service_n2_in`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary resource from air; dinitrogen CAS 7727-37-9; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service ar in (`service_ar_in`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary resource from air; argon CAS 7440-37-1; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

#### Outputs

##### Product flows

###### Corrugated transport carton (`carton_s`)

Conditional with gross physical shipment for this material pool only. Use the complete actual gross leg V_carton_S in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow, primary/secondary packaging, production mix at plant gate GLO, Mass/kg. In this card the official generic basename identifies exactly ONE supplied corrugated transport carton only, qualified by actual board/adhesive/printing composition, moisture and provider. It is not an assortment of packaging. Included whole-carton components are not separately purchased; loose PE film, pallet, strap and coating pail have separate pools.

- Selected flow: Corrugated transport carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Corrugated transport carton (`carton_eo`)

Conditional external return outward for this material pool only. Use the complete actual gross leg V_carton_EO in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow, primary/secondary packaging, production mix at plant gate GLO, Mass/kg. In this card the official generic basename identifies exactly ONE supplied corrugated transport carton only, qualified by actual board/adhesive/printing composition, moisture and provider. It is not an assortment of packaging. Included whole-carton components are not separately purchased; loose PE film, pallet, strap and coating pail have separate pools.

- Selected flow: Corrugated transport carton `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Polyethylene protective film (`pe_s`)

Conditional with gross physical shipment for this material pool only. Use the complete actual gross leg V_pe_S in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of polyethylene FILM, CAS 9002-88-4, production mix at plant; no PE branching grade fixed. The native comment contrasts polyester as a competing material; it does not turn PE into PET. Match actual PE film and supplier; exclude PET film, resin pellets and a whole multilayer bag. No thickness/density defaults.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Polyethylene protective film (`pe_eo`)

Conditional external return outward for this material pool only. Use the complete actual gross leg V_pe_EO in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of polyethylene FILM, CAS 9002-88-4, production mix at plant; no PE branching grade fixed. The native comment contrasts polyester as a competing material; it does not turn PE into PET. Match actual PE film and supplier; exclude PET film, resin pellets and a whole multilayer bag. No thickness/density defaults.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Whole wooden pallet (`pallet_s`)

Conditional with gross physical shipment for this material pool only. Use the complete actual gross leg V_pallet_S in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of ONE wooden pallet made from wooden boards/slats, production mix at lumber mill; Mass/kg. Native classification wrongly includes electricity while the retained source tree identifies wood packaging; disclose this taxonomy inconsistency without changing the physical wooden identity. Match actual whole pallet construction, moisture and supplier; no mass, reuse count or life is assumed. Repair block or nail is not this whole pallet.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Whole wooden pallet (`pallet_eo`)

Conditional external return outward for this material pool only. Use the complete actual gross leg V_pallet_EO in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Product flow of ONE wooden pallet made from wooden boards/slats, production mix at lumber mill; Mass/kg. Native classification wrongly includes electricity while the retained source tree identifies wood packaging; disclose this taxonomy inconsistency without changing the physical wooden identity. Match actual whole pallet construction, moisture and supplier; no mass, reuse count or life is assumed. Repair block or nail is not this whole pallet.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel transport strapping (`strap_s`)

Conditional with gross physical shipment for this material pool only. Use the complete actual gross leg V_strap_S in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel transport strapping (`strap_eo`)

Conditional external return outward for this material pool only. Use the complete actual gross leg V_strap_EO in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel liquid-paint pail (`pail_s`)

Conditional with gross physical shipment for this material pool only. Use the complete actual gross leg V_pail_S in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Steel liquid-paint pail (`pail_eo`)

Conditional external return outward for this material pool only. Use the complete actual gross leg V_pail_EO in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Gross whole dumbbell dispatch (`fg_dispatch`)

Physical complete article V only, linked to original first-release cohort and its historical burden vector. Internal release handoff is paired and cancels on consolidation; gross dispatch and returned goods do not create new Q. Closing FG remains a stock, not another manufacturing output. Actual returned mass may differ due to coating loss, water or damage; do not equate it blindly with original delivery.

Product flow; finished manufactured gymnasium/athletics article; production mix at plant; no fixed material, grade, geography, CAS or performance is specified. Qualify it here as ONE complete fixed-weight cast-iron dumbbell with integral cast grip and both ends, actual finished coating and unique first release; raw metal, blank, detached grip, plates, adjustable set and kettlebell cannot use this reference role. The broad family alone establishes neither manufacturer nor performance.

- Selected flow: Gymnasium or athletics articles and equipment `ad8b56f9-28ab-4cdb-93e8-3e6c7466513d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `goldens-dumbbell-spec`; `ilcd-2010-attributional`

##### Waste flows

###### Corrugated carton waste (`carton_w`)

Conditional actual waste leg for this material pool only. Use the complete actual gross leg V_carton_W in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Only if this is a separate waste outlet; in one actual mixed outlet retain this pool W as a non-additive measured origin account and model the single mixed outlet once. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Corrugated carton waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Used polyethylene film waste (`pe_w`)

Conditional actual waste leg for this material pool only. Use the complete actual gross leg V_pe_W in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Only if this is a separate waste outlet; in one actual mixed outlet retain this pool W as a non-additive measured origin account and model the single mixed outlet once. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Used polyethylene film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Scrapped whole wooden pallet (`pallet_w`)

Conditional actual waste leg for this material pool only. Use the complete actual gross leg V_pallet_W in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Only if this is a separate waste outlet; in one actual mixed outlet retain this pool W as a non-additive measured origin account and model the single mixed outlet once. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Scrapped whole wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Waste steel transport strapping (`strap_w`)

Conditional actual waste leg for this material pool only. Use the complete actual gross leg V_strap_W in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Only if this is a separate waste outlet; in one actual mixed outlet retain this pool W as a non-additive measured origin account and model the single mixed outlet once. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Waste steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Waste steel liquid-paint pail (`pail_w`)

Conditional actual waste leg for this material pool only. Use the complete actual gross leg V_pail_W in its stated native unit as numerator: never a burden vector, stock difference or economic share. P and I are disjoint receipts with exactly one upstream owner, including supplier-included ingress; ER is a real returned article, not internal reuse. Whole wet P/I includes water/components once. S follows all gross goods physically shipped, not net first-release Q. EO/W are actual returns/waste. Internal reuse cancels; opening/closing empty, attached WIP/FG and reusable stocks remain fully measured. No new purchase, provider burden, coproduct or credit arises from gross disclosure. A separately attributed real burden dimension is owned once in cp_service. Only if this is a separate waste outlet; in one actual mixed outlet retain this pool W as a non-additive measured origin account and model the single mixed outlet once. Package-pool mass excludes the sale-product payload. When a filled container is weighed, use separately measured payload and a disjoint paired whole/component bridge; do not infer its mass from a nominal capacity. Wet container residue is either included in that actual outlet or separately removed and measured, never both.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Waste steel liquid-paint pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `goldens-dumbbell-spec`; `ilcd-2010-attributional`

###### Removed wet pallet wood (`repair_wood_out`)

Actual removed wet pallet wood event only, with measured new/removed mass, moisture, supply identity and disposition. This specific material is not the whole pallet. Keep actual new ingress even when installed in closing stock; full wet closing stock remains. X only removes overlap with another same-side incoming/outgoing flow term. A whole-pallet/component bridge is disjoint; removed origin W is not added to a mixed-waste total. Real burden belongs once to the original serviced cohort.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Removed pallet repair wood block waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Removed pallet steel nails (`repair_nails_out`)

Actual removed pallet steel nails event only, with measured new/removed mass, moisture, supply identity and disposition. This specific material is not the whole pallet. Keep actual new ingress even when installed in closing stock; full wet closing stock remains. X only removes overlap with another same-side incoming/outgoing flow term. A whole-pallet/component bridge is disjoint; removed origin W is not added to a mixed-waste total. Real burden belongs once to the original serviced cohort.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Removed steel pallet nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assets_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Actual post-release cleaning effluent (`service_effluent`)

Conditional actual single physical exchange only. Record actual material, phase, wet mass, new/used status, separate supplier/provider and matched incoming/outgoing event. This identity is not a whole pallet or another material. Retain new material/water influx even if left in complete closing stock; X removes overlap only with another incoming/outgoing same-side flow term. Whole-article component bridges are disjoint and paired, never total plus components. A mixed outlet owns treatment once.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Post-release dumbbell handling wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### One mixed post-release waste outlet (`service_mixed_waste`)

Conditional actual single physical exchange only. Record actual material, phase, wet mass, new/used status, separate supplier/provider and matched incoming/outgoing event. This identity is not a whole pallet or another material. Retain new material/water influx even if left in complete closing stock; X removes overlap only with another incoming/outgoing same-side flow term. Whole-article component bridges are disjoint and paired, never total plus components. A mixed outlet owns treatment once.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Mixed post-release dumbbell handling solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Post-release Separately collected paint residue (`service_coating_residue`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens. Record actual original-cohort post-release work, including unauthorised or rejected attempts, with Q_H and observed H; permission/tests/acceptance are required for continued qualification, never to erase actual burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Waste black liquid-paint residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Post-release Rejected whole dumbbell casting or article (`service_rejected_dumbbell`)

Record this one actual physical waste stream only when present. If these origins leave in one mixed outlet, use mixed_solids once and keep each origin as independently measured disjoint component W subaccounts; do not add total plus components. Retain actual wet mass/composition, ordinary failure/sample burdens and actual treatment/provider once. Sale, off-site transfer and failed acceptance do not automatically subtract manufacturing or treatment burdens. Record actual original-cohort post-release work, including unauthorised or rejected attempts, with Q_H and observed H; permission/tests/acceptance are required for continued qualification, never to erase actual burdens.

Identity UUID remains unconfirmed for this specific supplied article/preparation/species or actual waste stream; it must not be replaced with a different material, component or collective flow.

- Selected flow: Rejected solid cast-iron dumbbell article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

##### Elementary flows

###### Ordinary post-release water-vapour loss (`service_evaporation`)

Actual storage/handling drying, cleanup and repair evaporation, disjoint from gross article exits and measured liquid drains. X_out applies only to a duplicated same-side outgoing term; never cancel against full closing wet stock.

Elementary emission to air, unspecified subcompartment; water vapour CAS 7732-18-5; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Fossil carbon dioxide (`service_co2_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary fossil carbon dioxide emission to air, unspecified subcompartment; CAS 124-38-9; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Fossil carbon monoxide (`service_co_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary fossil carbon monoxide emission to air, unspecified subcompartment; CAS 630-08-0; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Nitrogen monoxide (`service_no_out`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary nitrogen monoxide emission to air, unspecified subcompartment; CAS 10102-43-9; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### Nitrogen dioxide (`service_no2_exact`)

Only when actually identified from this process, such as real fuel use. Preserve all actual emissions and failed/idle periods; metered source evidence and true species/phase/carbon origin are required. This is not an assumed burner/furnace or emission factor. Process ownership is disjoint from other cards.

Elementary nitrogen dioxide emission to air, unspecified subcompartment; CAS 10102-44-0; native Mass/kg. Use only this real identified molecular species and actual carbon origin where applicable. The complete native alias list is interpreted against this CAS/form; ionic or substituted molecules are not this gas. No NOx, VOC, COD, total-carbon or exhaust-volume indicator may be assigned here. No emission factor or actual quantity is supplied by identity.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service o2 out (`service_o2_out`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary emission to air, unspecified subcompartment; molecular oxygen CAS 7782-44-7; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service n2 out (`service_n2_out`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary emission to air, unspecified subcompartment; dinitrogen CAS 7727-37-9; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

###### service ar out (`service_ar_out`)

Actual species gross leg for observed original-cohort storage/handling/combustion only; record true measured composition, phase and state. No double counting with supplied whole air.

Elementary emission to air, unspecified subcompartment; argon CAS 7440-37-1; Mass/kg. Read all aliases in the molecular/phase context; aliases for liquid, ion or isotope do not change this selected gas. Record actual gross species mass and direction once. It is not total element, purchased industrial gas, NOx, COD or aggregate air. Whole-air and constituent ledgers must be disjoint in the model.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Full measured gross-leg numerator V divided once by the applicable release-cohort denominator; use the single result described in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `vic-dumbbell-process`; `ilcd-2010-attributional`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_avoid | all inventory rows | For attributional multifunctionality, first separate dedicated operations and exchanges, then real or virtual subdivision. Assign each embodied casting/coating and directly metered exchange to its actual function. Demonstrate determining physical causality separately for remaining exchanges, including actual operating duration with the physical determinant when relevant; neither mass nor price is a freely selectable universal key. | ilcd-2010-attributional |
| a_residual | all inventory rows | Only the demonstrably unresolved residual common process uses contemporaneous market values of actual co-functions in their real technical condition and at the common process gate. Retain price period, quantity, quality, treatment of negative values and sensitivity. No fixed fraction, automatic scrap coproduct, avoided-product credit or automatic burden subtraction for ordinary waste/reject shipment/sale. Transfer a vector once only for a real separate cohort/function and a justified allocation/handover decision; all physical gross legs stay complete. | ilcd-2010-attributional |
| a_capital | all inventory rows | Capital machines, fixtures and maintenance have full new/used/installed/removed/disposed physical ledgers and separate historical burden stocks. Allocate actual service draw by documented exchange-specific determinants and period; no fixed lifetime or purchase of one whole grinder per kg. Gross asset/packaging/water V is never stock-corrected or economically shrunk. Already performed service for original-cohort held FG stays charged; installed fluids and new/removed parts remain atomic and disjoint from whole-asset mass. | ilcd-2010-attributional |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect only raw undivided observations. The aggregation_rule cell declares the target basis of the single downstream result; it instructs no division at collection. Per reference flow means 1 kg first-release product for manufacturing and 1 kg of the recorded original first-release cohort Q_H for supplementary services, within observed H. Keep raw vectors and gross V in separate channels. No generic all-row stock/economic formula is applied to gross cards.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | Unique first whole-article release | foreground_record | article id; configuration; casting grade; coating identity; net mass; tare; scale calibration; first release timestamp; acceptance tests; failed sample and reject dispositions; original cohort Q_H | Weigh each complete accepted article on a calibrated scale excluding transport packaging. Reconcile first release identity and manufacturer tests; count sales pairs as two actual articles. Preserve all rejects and failures independently. | kg | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |
| cp_manufacture | finish | Every manufacturing exchange and inherited vector | foreground_record | row id; native unit and meter state; undivided receipt/use/export; event and batch; original cohort; opening/closing raw; WIP; non-WIP unused/unassigned stores; per-exchange inherited burden vectors; already-stock-corrected flag; supplier includes; gas species and phase; all failures; actual permission and disposition | Use calibrated meters/scales and supplier records for each atomic event; record source-unit rates versus integrated quantities and independently measured state-specific density. Retain all failed/idle/cleanup/test/rework raw records and real extra materials, emissions and exits. Physical wet stocks and element assays are independent observations. | native extensive unit per row | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |
| cp_service | service | Original-cohort actual service and water/energy ownership | foreground_record | row id; original cohort; Q_H; observed H; gross V_H; attributable undivided service vector; opening/closing FG mass and inherited vectors; internal handoff; actual gross dispatch; return identity and mass; actual new water/parts/loss; permission; postwork tests; hold/waste; carrier mass and enthalpy; provider agreement | Measure every actual post-release event including ordinary sorption/evaporation and unauthorised/rejected work. Trace cohort history and actual performed service; do not delete held-FG service or create new release. Supplier heat/water/return ownership and physical state are independently documented. Future unobserved horizons remain unknown. | native extensive unit per row | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |
| cp_pack | service | Separate packaging pools and six physical directions | foreground_record | pool; event; material and supplier; P; I; ER; gross S; EO; W; opening/closing empty; attached WIP; attached FG; reusable stock; CP actual repair/water changes; whole/component bridge; moisture; gross native V; upstream owner; original Q_H; H | Measure each pool and direction separately. Opening + P + I + ER + CP_in = closing + gross S + EO + W + CP_out with full wet masses; CP is real component/water change only, paired and disjoint from article legs. P/I whole article includes components and supplied water once. X_in/out only remove overlap with other same-side flow terms, never stocks. Keep independently measured origin W when one mixed outlet is the only export; do not add total and origins. No reuse credit or artificial purchase. | kg | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |
| cp_assets | finish | Gross assets/parts/fluids and separate actual service burden | foreground_record | asset id; new/used receipts; installed/removed parts; each fluid; full physical wet opening/closing mass; actual transfers and scrap; inherited burden stock; actual service use; unused/unassigned charge; true determinant; period; function; vector ownership; X_in; X_out | Record complete gross physical assets without economic scaling; maintain independent full historical provider-vector stock and actual service draw using justified determinants. Installed fluids and new/old repair parts have disjoint whole/component bridges. Retained new water/material influx and full wet closing stock both remain. Do not purchase a complete asset again for every unit of output. | kg | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |
| cp_assets_service | service | Gross assets/parts/fluids and separate actual service burden | foreground_record | asset id; new/used receipts; installed/removed parts; each fluid; full physical wet opening/closing mass; actual transfers and scrap; inherited burden stock; actual service use; unused/unassigned charge; true determinant; period; function; vector ownership; X_in; X_out | Record complete gross physical assets without economic scaling; maintain independent full historical provider-vector stock and actual service draw using justified determinants. Installed fluids and new/old repair parts have disjoint whole/component bridges. Retained new water/material influx and full wet closing stock both remain. Do not purchase a complete asset again for every unit of output. | kg | Each actual event and closing reconciliation | Whole declared cohort; include zero-output and observed original-cohort H | Actual supply/manufacturing/service boundary | per reference flow | Raw signed records; calibration; state; identities; independent reconciliation; no invented values |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| attributable_raw | all inventory rows | For burden-bearing manufacturing dimensions only: A = B_open + U - B_close - T_other, after source-unit conversion and the justified exchange-specific allocation. B_close is limited by b_stocks. T_other requires a real separate function/cohort and justified single transfer, never ordinary waste sale. Already-net consumption is not corrected again. Gross physical rows do not use this equation. | B_open; U; B_close; T_other; cp_manufacture; cp_assets | A | ilcd-2010-attributional |
| service_raw | all inventory rows | For actual post-release burden only: A_H is the actual service vector performed for the original released cohort during observed H, plus any properly inherited service draw and actual incremental work/treatment, after justified exchange-specific attribution. Carry only unused/unassigned service stock; do not subtract closing FG or ordinary waste/sale. Gross V_H remains a separate full physical channel. | cp_service; cp_assets_service; cp_pack; Q_H; H | A_H | ilcd-2010-attributional |
| single_quotient | all inventory rows | Exactly once: a = N / D. For manufacturing burden rows N=A and D=Q; for physical gross rows N=the complete actual gross leg V and D=Q. Post-release burden rows use N=A_H and D=Q_H; post-release gross rows use complete actual V_H and D=Q_H. Native numerator unit is retained per kg. Cards and aggregation labels cite this same a without further division, stock correction or economic scaling of V. D=0 retains records without unit result. | N; D; cp_release; cp_manufacture; cp_service; cp_pack; cp_assets | a | ilcd-2010-attributional |
| gross_pack_balance | all inventory rows | Each pool: opening + P + I + ER + CP_in = closing + gross S + EO + W + CP_out. CP contains only actual disjoint repair components or water-state exchanges. Whole wet P/I and their components are not added together. Internal reuse cancels and creates no new Q, purchase, burden or credit. | P; I; ER; S; EO; W; CP_in; CP_out; cp_pack | closed_pool_ledger | ilcd-2010-attributional |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_complete | all inventory rows | Complete terminal and route; every raw table cell/card field/qualifier/source/native limitation survives projection; all real atoms, failed/zero-output periods and stock vectors present. Unresolved actual data are gaps rather than zero. | BOM; supplier boundary; actual tests; material and gas assays; raw ledgers; bilingual rule correspondence |
| dq_uncertainty | all inventory rows | Disclose measurement uncertainty, unresolved provider/auxiliary identity, period/site coverage, density/state evidence, unobserved future service horizons and actual allocation sensitivity. Engineering consistency is not scientific or translation approval. | Calibrations; actual records; explicit missing fields and review needs |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | all inventory rows | Verify complete integral-grip dumbbell terminal, actual supplied casting route, coating specification and native role/material/form/type/geography/property compatibility on every selected row. Inspect cracks/pinholes, edge/grip, mass, coating and actual required tests under the manufacturer specification; do not infer a load rating, drop height, lifetime or certification from this PCR. Core reference identity is mandatory; auxiliary gaps and missing factory quantities remain explicit, never zero. | vic-dumbbell-process; goldens-dumbbell-spec |
| v_accounting | all inventory rows | Reconcile unique Q, all failures/Q=0, raw/WIP/non-WIP inheritance vectors, gross physical gates, six-direction packaging, new/removed repair parts, natural and operational water phases, actual gas species and energy-provider ownership. Gross cards use V only; burden cards use attributed raw vectors only. No component/whole, total/origin, internal/external, provider/carrier, or already-net stock duplication. | ilcd-2010-attributional |
| v_units | all inventory rows | Check each native extensive property, source-unit conversion and exact observed state before normalisation. Integrated volume is not multiplied by time; only a true rate is integrated. Independent measured state-specific density supports mass conversion. No nominal dumbbell weight or secondary property coefficient supplies actual mass/density. One quotient is executed once, and Q=0 is not a unit result. Unsupported or missing actual relationships remain unresolved. | ilcd-2010-attributional |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Specified first-release product inventory with separately disclosed observed original-cohort gate services |
| allowed_use | Attributional modelling only after actual applicability, inventories and quality verification |
| excluded_use | Whole CPC coverage; training performance/lifetime comparison; equipment sets; net delivery without historical reversal bridge; unobserved factory numbers; automatic credit or scientific approval |
| required_metadata | complete single fixed-weight article with integral cast grip and both ends; actual drawing and shape; actual cast-iron grade and supplied blank state; supplier geography and upstream boundary; actual liquid coating formulation and complete coating state; grip and edge condition; manufacturer acceptance specification and actual test records; unique first-release cohort and release time; calibrated complete net masses excluding packaging; raw and WIP inheritance vectors; packaging pools and water states; original-cohort service horizon and denominator |
| required_quality_disclosure | Actual source/provider and native identity compatibility; measurement uncertainty; all unresolved rows; first release versus observed service H; physical and burden ledgers separately |
| update_trigger | Changed complete structure, casting supply state, principal coating, geography/identity restrictions, acceptance spec, upstream route, actual new flow or revised evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| vic-dumbbell-process | handbook | VIC, How to make a dumbbell, https://vietnamcastiron.com/casting-dumbbell/ | Whole cast dumbbell terminal and qualitative casting/remaining finishing/inspection; adjacent adjustable products excluded; no numeric reuse |
| athy-casting-finish | handbook | Athy Co-operative Foundry, Finishing, https://www.athyfoundry.ie/finishing.html | Independent actual cleaned/fettled casting supply before optional machining/paint; generic castings not same dumbbell order |
| goldens-dumbbell-spec | handbook | Goldens Cast Iron, Dumbbells, https://www.goldenscastiron.com/product-category/cast-iron-dumbbells/ | Independent complete cast-iron dumbbell/grip/coating terminal and pair versus article; no recipe/weight/life defaults |
| kingstone-dumbbell-grind | handbook | Kingstone Robotics, Sports Equipment, https://automatedpolish.com/sports-equipment/ | Actual dumbbell grinding/finishing and coating-line interface; other materials/apparatus are countercontext |
| ilcd-2010-attributional | official_guidance | European Commission JRC, ILCD Handbook Detailed Guidance, first edition March 2010, sections 7.9.2 and 7.9.3, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining causality, residual actual process-gate market value, physical/service distinctions; no manufacturer process or numeric inventory evidence |
