---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-nitrate
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Crystalline potassium nitrate fertilizer by sodium-nitrate conversion

## 1. Scope and Applicability

This method covers plant-gate manufacture of uncoated crystalline potassium nitrate fertilizer from purchased solid sodium nitrate and granular fertilizer-grade KCl of the identity below. Aqueous conversion, hot NaCl-rich salt separation/washing, cooling or vacuum crystallisation, centrifuging, crystal washing, indirect drying and bulk dispatch or sack filling form one foreground unit with independent stage records. The route is supported by cn-kn-conversion-2009, description steps 1–7, and producer corroboration sqm-nitrates-route. The patent is a historical configuration, not an industry survey: no operating temperature, recipe, yield or resource-saving claim becomes a default.

Exclude ammonium-nitrate exchange/ion-exchange routes, nitric-acid neutralisation routes, natural KNO3 ore purification, nitrate feed solutions, formulated NK/NPK mixtures, sodium-potassium nitrate blends, liquid fertilizer, coatings and unrepresented additives. Mining, caliche leaching, iodine extraction and KCl manufacture remain in compatible upstream datasets, not copied into this conversion process. A different use label alone does not create another PCR identity; a changed route/state/composition needs applicability review and explicit added atomic exchanges. This method assumes external steam supply and off-site treatment of the identified aqueous wastes; actual on-site combustion/treatment or direct receiving-water discharge requires a complete evidenced extension, not omitted exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.potassium-nitrate |
| classification_refs | CPC 3.0 34646; proposed narrower route scope; no accepted mapping |
| covered_products | Uncoated crystalline potassium nitrate fertilizer of measured accepted specification; not a formulated mixed fertilizer |
| excluded_products | Other KNO3 routes, liquids, mixed salts, coatings or unrepresented formulations |
| representative_product | One actual accepted SKU with assay, moisture and particle size; no prescribed grade |
| production_route | NaNO3/KCl aqueous conversion, salt separation, crystallisation, drying and dispatch |
| market_state | Solid crystals at plant gate; net as-supplied mass with packaging separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply crystalline potassium nitrate fertilizer |
| How much | 1 kg accepted net as-supplied product |
| How well | Actual SKU KNO3 assay, moisture, Na/Cl/sulfate impurities, N and K analysis, size and acceptance specification |
| How long or cycle | Declared production and stock-accounting campaign through plant-gate availability; field use excluded |
| reference_flow_link | kn_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potassium nitrate `d92c35ee-88a1-47cf-93e9-2fd499ceee23` |
| Reference flow property | Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`) |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Site, period and SKU; supplied state and wet/dry basis; measured product and both feed compositions; KCl grade/origin/provider; mother-liquor/crystal loops and stocks; separated-salt specification/destination; steam pressure/dryness/provider reference; grid/voltage; water sources; packaging construction; all waste receivers, emission media and measurement bases; Q; allocation and cut-offs |

Required qualifiers must be declared in the data package metadata, process notes or reference-flow description. Missing qualifiers make the package reference incomplete. The generic finished-product UUID establishes product identity, not a supplier dataset, purity or recipe.

## 4. Measurement and Unit Rules

Use one complete declared site/product/state/route period, including start/stop, failed and zero-output batches, downtime, internal rework and WIP. Preserve every original period total before any normalization. Retain batch identifiers and actual positive accepted net product Q from final disposition, counting each physical parcel once within the period after rework and withdrawals. Carry in opening WIP/material burden and carry out closing WIP/material burden transparently; neither is free input or disappearance. Reconcile actual final acceptance with dispatch, returns, stock and reprocessing records rather than assuming shipments equal production. For Q > 0 divide each attributable period total by this same Q once; do not average batch intensities or exclude zero-output batches. For an entire pool with Q = 0, report raw totals and stock/destination records only; no per-kg result exists. Separate incompatible products/states/routes by documented physical assignment before forming the pool; never pool them simply to obtain a positive denominator.

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_product | kn_product | Mass | kg | Use 1 kg net accepted supplied product; Q is campaign accepted net product kg, excluding packaging, rejects and internal recycled crystals. Dry KNO3 content and N/K content are additional analyses, never alternate denominators. |
| measure_solution | all inventory rows | Mass | kg | Record whole wet-stream mass and measured dry/component fractions separately; never add carrier water a second time. Each reported amount uses per 1 kg reference flow. |
| measure_energy | steam_import, electricity, condensate_return | Mass and Net calorific value | kg and MJ | Keep steam/condensate physical kg distinct from enthalpy service MJ. Calculate heat from measured steam and return states, vents/losses and supplier convention; an MJ property alone is not net delivered heat. Electricity: MJ = kWh × 3.6. |
| measure_particles | pm_fine, pm_coarse, pm_large, pm_unsized | Mass | kg | Use mutually exclusive dry particle bins or the unsized residual for each outlet/time; collected dust and internal returns are separate. Declare outlet gas-volume standard, humidity, sampling time and abatement. |
| measure_pack | pe_liner, pp_sack, waste_pe, waste_pp | Mass | kg | Measure empty packaging components separately; filled capacity is not sack mass. Keep physically delivered and rejected quantities before allocating service burdens for demonstrated reuse. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased solid NaNO3 and specified granular KCl with traceable upstream datasets, actual startup salt, water, electricity and external steam |
| starting_condition_role | Foreground manufacturing entry, not an upstream burden exemption |
| product_classification_scope | Selected solid fertilizer conversion-route subset of CPC 3.0 34646 |
| recursive_input_rule | Recycle mother liquor, salt wash, wet crystals and recovered dust as internal equal-quantity links; purchased KNO3 cannot replace the claimed manufacturing route |
| upstream_dataset_requirement | Providers for materials, utilities, packaging, transport and waste treatment matching composition, state, origin and quantitative basis; identity success is not provider compatibility |
| disclosure | Disclose flowsheet, stocks, loops, outlets, off-site receivers, transport, capital assessment, cut-offs and allocation; keep physical and burden ledgers distinct |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | kn_conversion | Keep stage logs for dissolution/conversion → hot salt separation/washing → crystallisation/centrifuging/washing → indirect drying → acceptance/dispatch within one foreground unit. The formal exchange equation NaNO3 + KCl → KNO3 + NaCl describes conserved species in phase separation, not a guaranteed one-pass conversion or feed recipe. | cn-kn-conversion-2009 |
| boundary_loops | kn_conversion | Record internal mother liquor, wash water, condensate and dust returns with both endpoints, time, mass and composition; match equal physical transfers and opening/closing stocks. Do not count internal transfers as new upstream purchases or product outputs. | cn-kn-conversion-2009; jrc-lvic-aaf-2007 |
| boundary_complete | kn_conversion | Include actual utility production upstream, feed and receiver transport, packaging and off-site waste treatment. Review capital goods and each actual ancillary chemical/maintenance stream with evidence-based cut-offs. Where capital is included, identify each physical equipment flow separately and preserve installed mass, useful life, throughput and attributable service; never substitute an annualised service mass for installed physical stock. Record additional observed atomic exchanges before claiming dataset completeness. | jrc-ilcd-2010 |
| boundary_environment | kn_conversion | The waste-transfer boundary does not remove downstream treatment burden. Locate wastewater and air releases by stage, medium and receiver using the actual stream inventory. No positive emission is inferred from a candidate identity; missing measurement is not zero. On-site combustion requires its fuel and complete species/origin-specific emission inventory; it is not represented by purchased steam. | jrc-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| kn_conversion | KNO3 conversion, salt separation, crystallisation and dispatch | required | Selected feeds, route and gate | Foreground unit with independent stage meters | kn_product; 1 kg reference flow |

Every card is one exchange. Conditional rows carry actual measured quantities or a documented not-applicable finding; unknown quantities stay missing. Establish actual receiver/provider and add distinct unlisted chemicals, closures, equipment or discharges as separate rows when observed. No recipe or positive default amount is supplied.

### Process: KNO3 conversion and dispatch (`kn_conversion`)

#### Inputs

##### Product flows

###### Potassium nitrate (`returned_kn`)

Conditional physically returned uncoated KNO3 of the same identity/SKU for actual reprocessing, never a substitute purchased feed or a second claim of fresh synthesis. Preserve returned wet mass, assay, origin period/lot and inherited upstream burden. Contaminated or transformed returns need their own verified identity; internal rework is a loop, not this external input.

- Selected flow: Potassium nitrate `d92c35ee-88a1-47cf-93e9-2fd499ceee23`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Retain the complete same-scope period physical total for this row; divide once by Q only when Q > 0.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_product
- Sources: jrc-ilcd-2010

###### Sodium nitrate, solid feed (`feed_nano3`)

Weigh fresh solid sodium nitrate charged to the loop; record NaNO3 assay, moisture and sulfate/chloride impurities. A nitrate solution needs its own supplied-solution identity and carrier-water accounting before application.

- Selected flow: Sodium nitrate, solid feed
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_materials; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_materials
- Sources: cn-kn-conversion-2009; sqm-nitrates-route

###### Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass (`feed_kcl`)

Use this mass-reference identity only for the stated uncoated granular fertilizer-grade feed with compatible Chinese-plant origin, as limited by the native production-mix location. Verify actual KCl assay, moisture and additives; the K2O-equivalent label is not a prescribed assay or pure KCl mass. Match upstream origin/grade and delivery basis; other KCl grades require separately verified identity.

- Selected flow: Potassium chloride fertilizer, granular, K2O equivalent ≥60.0% by mass `c8585965-5595-48da-9260-2970ed1905cb`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_materials; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_materials
- Sources: cn-kn-conversion-2009; sqm-nitrates-route

###### Sodium chloride (`startup_nacl`)

Conditional fresh salt for initial mother-liquor preparation or documented replacement; this identity requires actual purity ≥99.5%. Keep initial/final liquor stocks; do not charge the full circulating salt every batch or assume recurring make-up.

- Selected flow: Sodium chloride `a413ea86-0887-42c8-be77-3bee86d5863b`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_materials; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_materials
- Sources: cn-kn-conversion-2009

###### de-ionised water (`water_process`)

Meter purchased de-ionised water for dissolution, salt/crystal washing and cleaning. Record quality and supplier; internal wash recycle and recovered condensate are tracked separately and are not fresh-water purchases.

- Selected flow: de-ionised water `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_water; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: cn-kn-conversion-2009; jrc-lvic-aaf-2007

###### Potable mains water for cooling-tower make-up (`water_cooling`)

Conditional external make-up for a real indirect cooling circuit. Verify actual water source/treatment and upstream provider; record circulation, evaporation, drift and blowdown separately. Do not treat recirculating water as a repeated external input.

- Selected flow: Potable mains water for cooling-tower make-up
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_water; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: jrc-lvic-aaf-2007; jrc-cww-2016

###### Alternating current (`electricity`)

Selected identity is grid-average consumer electricity at <1 kV in CN; other geographies, voltages, supply mixes or delivery interfaces require matching verified identities and backgrounds. Meter mixing, pumps, vacuum equipment, centrifuges, cooling, dryer auxiliaries and packing separately before aggregation. Use a compatible grid/voltage provider; record kWh and convert to MJ by 3.6.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value (`93a60a56-a3c8-11da-a746-0800200c9a66`); unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_energy; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: jrc-lvic-aaf-2007

###### Purchased process steam for indirect heating (`steam_import`)

Record physical steam kg, absolute/gauge pressure, temperature, dryness and delivery meter. Establish supplier background reference and condensate convention; derive useful heat from the full measured enthalpy ledger. No pressure, MJ/kg or delivered-heat default is supplied. This row remains kg and is not a second purchased-heat exchange.

- Selected flow: Purchased process steam for indirect heating
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_energy; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: jrc-lvic-aaf-2007

###### Polyethylene film (`pe_liner`)

Conditional PE liner for actual bagged deliveries; weigh installed liner film and losses, verify PE resin/grade and chemical-product compatibility. The native CPC classification is inconsistent with its film name/CAS/comment; disclose this defect and obtain provider clarification. Do not apply this identity to PET or whole multilayer bags.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_pack; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

###### Woven polypropylene fertilizer sack (`pp_sack`)

Conditional actual PP outer sack excluding the separately weighed PE liner. Collect sack count and sampled empty-sack net mass, seam/closure construction, composition and reuse cycles; inventory the supplied sack mass, not its nominal filled-product capacity. Add any distinct closure material as an atomic exchange.

- Selected flow: Woven polypropylene fertilizer sack
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_pack; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

#### Outputs

##### Product flows

###### Polyethylene film (`delivered_pe`)

Conditional PE liner physically accompanying dispatched product, at its own full measured mass; not part of net KNO3 kg and not an independently saleable co-function. Preserve the physical packaging destination; do not allocate production burden to this auxiliary output or duplicate the upstream film supply. The input row identity restrictions and classification defect apply equally.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Retain the complete same-scope period physical total for this row; divide once by Q only when Q > 0.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

###### Woven polypropylene fertilizer sack (`delivered_pp`)

Conditional actual PP outer sack delivered with product, PE liner excluded. Preserve measured physical kg leaving the boundary with net product; it is packaging disposition, not another fertiliser product or a co-product for allocation. Record stock/reuse and reject destinations separately.

- Selected flow: Woven polypropylene fertilizer sack
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Retain the complete same-scope period physical total for this row; divide once by Q only when Q > 0.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

###### Potassium nitrate (`kn_product`)

Accepted dry crystalline fertilizer product at plant gate. Reference amount is 1 kg net supplied product, including measured residual moisture/impurities, excluding packaging. Intermediate wet crystals are internal; retain their stage weighing and assay without a second reference-product exchange.

- Selected flow: Potassium nitrate `d92c35ee-88a1-47cf-93e9-2fd499ceee23`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `source_rule`
- Collection protocol: cp_product
- Sources: cn-kn-conversion-2009; sqm-nitrates-route

###### Recovered sodium-chloride-rich salt with residual nitrate (`salt_coproduct`)

Only the actually saleable accepted fraction with receiver/specification evidence is a co-product. Weigh total wet salt, dry fraction, NaCl, KNO3/NaNO3 and impurities; a pure sodium chloride identity is not established for this mixed recovered salt. Retain its full physical output even when allocating burdens.

- Selected flow: Recovered sodium-chloride-rich salt with residual nitrate
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_salt; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_salt
- Sources: cn-kn-conversion-2009; jrc-ilcd-2010

###### Returned steam condensate (`condensate_return`)

Conditional external return to the steam supplier; measure actual kg, temperature and receiver at the return point. Link to the steam ledger and credit only the provider convention actually used. Process-vapour condensate internally recycled is a distinct internal stream and not this row.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_energy; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_energy
- Sources: jrc-lvic-aaf-2007

##### Waste flows

###### Potassium-nitrate-rich rejected crystals (`rejected_kn`)

Conditional actual solid KNO3-rich rejected product leaving for treatment, distinct from NaCl waste and captured dust. Record whole wet mass, moisture, all salt constituents, reason for rejection and receiver. Material redissolved or reworked within the same boundary remains an internal loop and is not an external waste output.

- Selected flow: Potassium-nitrate-rich rejected crystals
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Retain the complete same-scope period physical total for this row; divide once by Q only when Q > 0.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: jrc-ilcd-2010; jrc-cww-2016

###### Nitrate/chloride-bearing aqueous mother-liquor purge (`brine_purge`)

External purge/wash effluent from the declared common collection tank to a verified off-site receiver; retain total water and all dissolved species. Record density, volume/mass, nitrate as ion versus N, K, Na, Cl, sulfate and treatment suitability. Separate different receiver/composition streams; do not model this waste transfer as a freshwater emission.

- Selected flow: Nitrate/chloride-bearing aqueous mother-liquor purge
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_waste; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: cn-kn-conversion-2009; jrc-cww-2016

###### Cooling-tower blowdown water (`cooling_blowdown`)

Conditional actual cooling-circuit blowdown transferred off site, separate from nitrate mother liquor. Record wet mass, salts, treatment additives and receiver; no industrial-paper-mill wastewater identity is reused. Any actual direct discharge requires separate receiving-medium water/species rows and treatment inventory.

- Selected flow: Cooling-tower blowdown water
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_waste; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: jrc-cww-2016

###### Sodium chloride waste (`salt_waste`)

Actual rejected NaCl-dominated salt cake leaving for treatment/disposal, exclusive of the saleable fraction; record wet/dry mass and nitrate/K content and receiver. Broad waste identity supports the salt waste physically, not a pure-NaCl assay or a prescribed disposal process.

- Selected flow: Sodium chloride waste `f5950ab1-1f6e-4ff6-a769-242cae592daa`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_salt; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_salt
- Sources: cn-kn-conversion-2009; jrc-cww-2016

###### Dust (`collected_dust`)

Only captured nitrate-salt dust that actually leaves for disposal. Record source stage, dry composition and receiver. Captured dust returned internally is recorded in the loop ledger, not added to waste output or airborne emissions.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_waste; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_waste
- Sources: jrc-cww-2016

###### Nitrate-contaminated polyethylene liner waste (`waste_pe`)

Conditional process packaging loss; weigh PE separately with contamination and receiver records. Cleaned PE at a mechanical recycler is not the identity of this untreated contaminated transfer.

- Selected flow: Nitrate-contaminated polyethylene liner waste
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_pack; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

###### Nitrate-contaminated polypropylene sack waste (`waste_pp`)

Conditional PP sack loss; exclude PE liner mass and shipped packaging. Record contamination and actual recovery/disposal receiver; do not use the product capacity as waste mass.

- Selected flow: Nitrate-contaminated polypropylene sack waste
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_pack; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_pack
- Sources: jrc-ilcd-2010

##### Elementary flows

###### particles (PM2.5) (`pm_fine`)

Measured dry escaped particles ≤2.5 micrometres from feed handling, drying, screening and filling after abatement; air, unspecified. Include fugitive releases. Do not infer a fraction from total dust; salt composition informs element balance without duplicating mass as separate gaseous nitrate.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_air; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### particles (PM2.5 - PM10) (`pm_coarse`)

Dry escaped particles >2.5 and ≤10 micrometres, air unspecified. Derive from measured nested totals only when sampling and bases are compatible; never sum nested PM10 with PM2.5.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_air; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### particles (> PM10) (`pm_large`)

Dry escaped particles >10 micrometres, air unspecified. Differentiate collected salt dust and actual atmospheric loss; do not assign zero from absence of a size measurement.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_air; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### Particulate matter, particle size unspecified (`pm_unsized`)

Alternative for the portion of measured dry escaped dust lacking defensible size resolution, air unspecified. Use either this row or the resolved size fractions for the same outlet/time/mass, never both. Disclose missing size evidence and resulting LCIA coverage.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_air; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_air
- Sources: jrc-cww-2016

###### water vapour (`water_vapour`)

Actual uncondensed vacuum/dryer vapour and cooling evaporation reaching air unspecified; distinguish measured evaporated molecular water from recovered condensate and liquid drift. Use circuit water/enthalpy records and humidity measurements; disclose residual uncertainty rather than forcing water closure.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_water; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: cn-kn-conversion-2009; jrc-lvic-aaf-2007; jrc-cww-2016

###### Liquid water drift to air (`water_drift`)

Conditional measured cooling-tower drift, air unspecified. Quantity is only the liquid water component; dry dissolved salt carried by droplets belongs in the mutually exclusive particulate rows. Do not substitute a water-vapour UUID for liquid droplets.

- Selected flow: Liquid water drift to air
- Flow property / unit: Mass (`93a60a56-a3c8-11da-a746-0800200b9a66`); unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect actual campaign quantity for this row and divide by Q using cp_water; no case default.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: cp_water
- Sources: jrc-cww-2016

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocate_status | salt_coproduct, salt_waste | Determine actual saleable co-function from specification, receiver and market evidence. Split saleable and rejected salt physically; unsaleable salt receives treatment burdens and no product credit. Do not presume all stoichiometric NaCl is saleable. | jrc-ilcd-2010 |
| allocate_hierarchy | kn_conversion | For the declared attributional LCI, first subdivide separable activities and assign exclusive finishing/packing directly. Allocate remaining shared burdens by demonstrated determining physical causality; chemical stoichiometry alone does not establish that relationship. If it cannot be demonstrated, use period-matched net realisable product revenue at the separation gate with price/quality sensitivity. State quantities, prices, system model and allocation sum explicitly; no default share. | jrc-ilcd-2010 |
| allocate_physical | kn_conversion | Close the unallocated mass/water/element ledgers first. Apply allocation only to environmental burden contributions in a separate ledger; retain full real KNO3, salt, waste and emission quantities in the physical ledger and equal amounts across internal links. Do not multiply co-product physical outputs by allocation factors. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

per 1 kg reference flow; retain complete same-scope raw period totals including failed/zero-output batches and rework/WIP; divide once only if Q > 0, no result at Q = 0.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | kn_conversion | Product acceptance and output | foreground_record | SKU; lot; final accepted net kg; failed/zero-output batches; rework identity; opening/closing WIP and finished stock; dispatch; rejects; external returned mass/assay/inherited burden; moisture; size; Q | Reconcile calibrated weighing/traceable mass and release records of the same SKU; inventory opening/closing product; trace dispatch, returns and rework to unique lots. | kg | Each lot; campaign aggregation | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_materials | kn_conversion | Feed and stock | foreground_record | supplier; delivery; issue; return; NaNO3/KCl/NaCl; water; sulfate; additives; opening/closing raw and loop stock; assay uncertainty | Weigh actual receipts and charges; assay components and wet/dry bases; stage-meter and reconcile raw stores and loop stocks; retain total feed and pure-component masses separately. | kg | Each batch, start/stop and stocktake | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_water | kn_conversion | Water and loops | foreground_record | water source; purchased kg; meter volume; measured density/T; wash recycle; condensate; cooling circulation; evaporation; drift; moisture; opening/closing water | Use meters/weighing with measured temperature/density; match both ends of every circuit transfer; reconcile water destinations with humidity, condensate recovery and liquid-drift measurement. | kg | Continuous or each batch, including start/stop | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_energy | kn_conversion | Steam, condensate and electricity | foreground_record | stage meters; kWh; steam kg; pressure absolute/gauge; T; dryness; condensate kg/T; vent kg; heat loss; supplier reference; enthalpy method | Reconcile calibrated stage, steam and return meters; derive enthalpies using a declared steam-property method and common reference state; distinguish steam mass, net heat and background reference. | kg; kWh; MJ | Continuous and supplier billing periods | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_salt | kn_conversion | Separated salt destinations | foreground_record | wet salt kg; dry mass; NaCl; nitrate ion/N; K; Na; chloride; saleable/reject split; buyer; specification; receipt | Weigh and representatively sample separated salt; assay wet/dry bases and major ions; split product/waste by actual acceptance and receipts, not pure-salt assumptions. | kg | Each lot and transfer | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_waste | kn_conversion | Waste and receivers | foreground_record | stream origin; wet kg; density; water; nitrate/N; K; Na; Cl; sulfate; dust composition; receiver; treatment route; transfer manifest | Individually weigh solids, dust and aqueous transfers, flow-proportionally sample/analyse; trace external treatment and transport; split differing receiver conditions. | kg | Each transfer; matched production interval | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_pack | kn_conversion | Packaging | foreground_record | component resin; empty count and sampled net mass; PE liner; PP sack; closures; filled net kg; rejects; shipped kg; reuse records | Sample empty component masses with calibrated scales; reconcile purchases, use, loss and delivery; separately retain reuse life/cycles; bag capacity or filled mass cannot replace physical packaging mass. | kg | Each lot and packaging-specification change | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_air | kn_conversion | Escaped dust | foreground_record | stage; outlet; fugitive source; gas flow; standard T/P; dry/wet gas basis; sample time; filter mass; size distribution; abatement; operating hours | Measure representative post-abatement outlet dust and size with suitable methods; record blanks, detection limits, gas basis and time; separately survey fugitives; retain unsized residual where size is unknown. | kg | Cover normal, abnormal and start/stop periods | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |
| cp_assets | kn_conversion | Capital and completeness | foreground_record | equipment id; installed physical kg; actual material/BOM; life; cumulative throughput; shared service; maintenance; cut-off evidence | Record installed physical mass and service life for each equipment; if included in burdens, calculate attributable service separately and add atomic equipment exchanges. Evidence inclusion/cut-off decisions for unlisted ancillary, treatment and logistics flows. | kg; year | Installation/replacement and annual review | Complete declared period, including downtime and stock changes | Same site, route and SKU | per 1 kg reference flow | Traceable calibration, batch, analysis, transfer and stock records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | kn_product | Q = actual accepted net output uniquely counted at final disposition for the complete same-scope period; reconcile acceptance, dispatch, external returns, opening/closing stocks and rework through cp_product, excluding packaging and rejected material. Returns, internal rework and WIP are not new free product; retain all failed/zero-output batches in the same total pool. If Q = 0 do not normalize. | cp_product | Q in kg | jrc-ilcd-2010 |
| calc_normalise | all inventory rows | For Q > 0, normalized exchange = complete same-scope attributable period exchange total / Q, divided once; retain original stage totals, failed batches, stock changes and physical/burden carryovers for opening/closing WIP. Reference output is 1 kg; allocate environmental burdens only after physical reconciliation. Q = 0 has no normalized result. | campaign quantities; Q | exchange per 1 kg reference flow | jrc-ilcd-2010 |
| calc_components | kn_conversion | Component mass = whole wet mass × measured component mass fraction on the declared wet basis. Where assay is dry-basis, multiply measured dry fraction first. Balance total mass and Na/K/N/Cl plus H/O and all material impurity elements from inputs + opening stocks = products + wastes + air losses + closing stocks. NaNO3 + KCl → KNO3 + NaCl is a molar conservation check, not an actual-yield assumption. | cp_materials; cp_salt; cp_product; cp_air | unallocated component ledger | cn-kn-conversion-2009; jrc-ilcd-2010 |
| calc_water | kn_conversion | For each process and cooling circuit: external molecular water + opening water = product/wet-salt water + aqueous transfers + external condensate return + vapour + liquid drift + closing water. Internal transfers cancel only after matching both endpoints; retain measured moisture in feeds/products and condensate recovered internally. This exchange reaction has no stoichiometric net water generation. | cp_water; cp_energy; cp_waste | molecular water ledger | jrc-lvic-aaf-2007 |
| calc_heat | steam_import, condensate_return | Energy crossing the delivery boundary = sum(steam mass × supply specific enthalpy) − sum(external return mass × return specific enthalpy), with a common enthalpy datum; reconcile vent/condensation/cooling losses and stock/energy changes to obtain useful process heat. Use the verified provider reference convention; never count steam kg and derived heat MJ as two supplies. | cp_energy | kg steam and separate MJ heat ledger | jrc-lvic-aaf-2007 |
| calc_emissions | pm_fine, pm_coarse, pm_large, pm_unsized | With a volume flow rate, emission mass = sum(dry concentration × compatible dry standard volume flow rate × interval duration). With already integrated gas volume, emission mass = sum(dry concentration × compatible dry standard volume), without another time multiplier. Preserve raw period emission totals, then divide once by Q. Split nested totals only by compatible measured differences; keep dry PM distinct from liquid/vapour water, with no default size distribution. | cp_air | actual dry released particle kg | jrc-cww-2016 |
| calc_service | pp_sack, pe_liner | Physical packaging = measured empty component mass × actual component count; retain physical issued/shipped/lost mass. Any reuse allocation is a separate burden service fraction from documented cycles. Capital service uses each measured installed equipment mass × attributable lifetime service fraction, with installed stock preserved separately. | cp_pack; cp_assets | physical and burden service ledgers | jrc-ilcd-2010 |

### Data Quality Requirements

In the physical total-mass ledger include co-delivered packaging and packaging rejects separately from net KNO3; retain packaging C/H and relevant impurities in the element ledger. Material and water ledgers distinguish any evidenced reaction production/consumption from transfers: this salt exchange produces no net molecular water by stoichiometry. Do not derive water, evaporation, conversion or product yield from COD or an unexplained balance residual. Aqueous analyses as nitrate ion versus nitrate-N require explicit stoichiometric conversion; neither is an additional wet-stream exchange.

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Check complete native identity and provider quantity basis; blank UUID is not zero amount; classification labels cannot override physical chemistry. | cp_materials; cp_product |
| quality_closure | kn_conversion | Preserve full physical ledger before burden ledger; explain residuals using meter/analysis uncertainty, without forced closure or a universal tolerance. | cp_materials; cp_water; cp_salt; cp_air |
| quality_coverage | kn_conversion | Cover start/stop, releases, waste salt, cleaning, packaging and stocks; record included, not-applicable, unmeasured and actual cut-offs individually; external receipt does not erase burdens. | cp_waste; cp_pack; cp_assets |
| quality_no_defaults | kn_conversion | No default recipe, yield, purity, water/heat/power consumption or emission factor is supplied. | primary site records; cn-kn-conversion-2009 limitations |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | kn_product | Require exactly one final KNO3 product output and all reference qualifiers, Q and common wet net kg denominator in both languages. Verify product/grade and reject use of an incompatible route or mixture identity. | jrc-ilcd-2010; jrc-cww-2016 |
| validate_balance | kn_conversion | Check raw physical total/element/water balances with stock changes before allocation; conserve internal transfer mass at both endpoints. Include Na/K/N/Cl in sold salt, waste salt, liquor and dust, as well as product; include moisture and uncondensed losses. Investigate residuals against measured uncertainty. | jrc-ilcd-2010; jrc-cww-2016 |
| validate_utility | steam_import, condensate_return, electricity | Verify native property/unit, supplier pressure/state/reference and actual quantity conversion separately. An identity UUID is not evidence of a compatible background. Unresolved steam enthalpy/provider data prevents a complete linked dataset, not an invented steam pressure. | jrc-ilcd-2010; jrc-cww-2016 |
| validate_destinations | salt_coproduct, salt_waste, brine_purge, collected_dust | Retain real sales/reject evidence and receiver links. Split chemical species analyses from whole wet-stream exchange mass; do not duplicate liquor as elemental emissions, or use a pure salt provider for a contaminated mixed co-product. | jrc-ilcd-2010; jrc-cww-2016 |
| validate_particles | pm_fine, pm_coarse, pm_large, pm_unsized, water_drift | Reconcile each escaped-dust parcel once in compatible disjoint size bins or unsized residual; disclose unknown size and medium precision. Captured/recycled dust is not emitted. Keep liquid drift water distinct from vapour and dry salt particles. | jrc-ilcd-2010; jrc-cww-2016 |
| validate_completeness | kn_conversion | Check all stage/material/utility/packaging/transport/treatment/capital decisions and actual extra exchanges; report unmeasured quantities, blank identities, provider gaps, checks skipped and remaining coverage. No claim of a complete inventory from a mechanical PCR check alone. | jrc-ilcd-2010; jrc-cww-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Plant-gate KNO3 input with compatible route, grade and delivery basis, retaining evidence and applicability qualifiers. |
| allowed_use | Selected solid fertilizer sodium-nitrate conversion route with actual site, period, SKU and providers. |
| excluded_use | Field efficacy or fertilizer-use emissions, other routes or formulated liquids, substitution of pure-active basis, default factory quantities. |
| required_metadata | Reference qualifiers, Q, flowsheet, physical/burden ledgers, stocks/loops, product/salt composition and destinations, providers/receivers/transport, allocation, cut-offs and methodology version. |
| required_quality_disclosure | Measurement/analysis methods and uncertainty, temporal/site coverage; blank UUID and provider compatibility debts; particle-size/steam-basis gaps; actual extra exchanges, capital and review scope. |
| update_trigger | Changes in product/feed composition, route, steam/grid/water, packaging, abatement, receivers, capital, allocation markets or evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cn-kn-conversion-2009 | literature | CN100532260C, 2009-08-26, description steps1–7 and claims; original Chinese. https://patents.google.com/patent/CN100532260C/zh | Original route evidence for conversion, nitrate-bearing hot salt, washing, recycle, crystallisation and drying. Historical patent, no temperature/ratio/yield/water/energy-saving defaults. |
| sqm-nitrates-route | literature | SQM Industrial Chemicals, Natural Resources, sodium nitrate & potassium nitrate; undated producer page. https://sqmindustrialchemicals.com/natural-resources/ | Producer corroboration of sodium nitrate/KCl conversion with crystallisation, refining and drying; its upstream mining case is not a generic input/capacity assumption. |
| jrc-lvic-aaf-2007 | official_guidance | European Commission JRC, LVIC-AAF BREF, August2007, scope and section1.5.1; printed33/PDF61. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf?download=1 | Common energy audits, N/water/steam balances and recycling management; no KNO3-specific emission level, recipe or energy default. |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF,2016, BAT2–3, printed543–544/PDF573–574. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Chemical stream/reaction side-product/outlet inventories, salt/N-species characterisation and risk-based monitoring; no positive emission or present compliance inferred from a candidate flow. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, first edition2010, sections7.4.2 and7.9.2–7.9.3; printed197/205/255–264. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Composition/element/energy checks, subdivision, determining physical causality and subsequent economic allocation in attributional LCI; no automatic mass allocation, price/share or closure-tolerance default. |
| unsd-cpc3-2025 | official_guidance | UNSD CPC Ver3.0 Structure,30Jun2025,34641–34647. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification product boundary and adjacent fertilizer distinctions; mapping evidence only, not manufacturing methodology. |
