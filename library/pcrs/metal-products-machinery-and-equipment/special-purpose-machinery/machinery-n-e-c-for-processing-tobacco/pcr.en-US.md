---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-processing-tobacco
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Machinery n.e.c. for processing tobacco

## 1. Scope and Applicability

This candidate covers the FULL machinery n.e.c. for processing tobacco category. It includes actual eligible opening/loosening, bale slicing, conditioning, stem flattening, leaf/stem/recon cutting, blending/bulking, reconstituted-tobacco processing and secondary rod-making/combining architectures. It is not a cigarette-production recipe or only a cigarette maker. Independent dedicated parts belong to44523; agricultural dryers44518 and general dryers/packers/transport/laboratory instruments require separate principal-function review. A tobacco-specialised integral module may be included only in the actual accepted delivery scope; a product portfolio does not prove every module ships. Source: `un-cpc-44517`.

COMAS SO establishes controlled horizontal bale slicing; CLM establishes two hardened rotating rollers, adjustable gap, overload-separation side pistons and supplied feed/discharge vibratory conveyors. DCRB establishes rotating conditioning cylinder, paddles/pins, steam/water application and a supplied utilities cubicle, while heating, cylinder inclination, casing application and automated cleaning are actual model options. Neither side pistons nor steam capability proves a universal hydraulic oil fill or an initial tobacco charge. Sources: `comas-slicer`; `comas-flatten`; `comas-dcrb`.

COMAS SAM establishes single/multi-deck blending silos, band/slat retention, stainless product-contact metal including doffers and optional common blending carriage. KT4 establishes driven knife advance, sharpening wheel, knife drum/bottom knife and compacting infeed; actual knife alloys, heat treatment, wheel construction and supplied completion still need BOM evidence. Ammeraal supplies application-specific fabric/polyester belts and scrapers; a belt is not bulk polyester resin or a transport-service dataset. Sources: `comas-blending`; `koerber-cutter`; `ammeraal-belts`.

COMAS recon establishes grinding/mixing, roll-coater or laminator and steam-pan/hot-air drying alternatives; described tobacco/gum/water are customer feed recipes, not machine BOM. Körber Protos establishes paper-web handling, water-based seam adhesive, rotary cutting, filter attachment and inline inspection; Lab Maker rod and filter modules can be independent. Its sensor account establishes draw rollers, fan, enclosure interlock and format heater. MSM confirms customer-configurable combining, not one universal module set. G.D121 and the redirected Körber machine overview establish only equipment-family existence, not manufacturing recipes. Sources: `comas-recon`; `koerber-rods`; `koerber-sensors`; `koerber-msm`; `gd-maker`; `koerber-makers`.

No operational throughput, blade lifetime, dimension, moisture recipe, reduction percentage, nameplate, customer rod/leaf mass or product safety marketing claim establishes factory machine mass or manufacture quantity. Actual factory acceptance runs are separately attributable burdens; consumed tobacco, paper, adhesive and water never enter accepted machine net mass.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-processing-tobacco |
| classification_refs | CPC3.0:44517 |
| covered_products | Complete machinery n.e.c. for processing tobacco, including actual primary opening/slicing/conditioning/cutting/blending and eligible secondary rod-making/combining/reconstitution architectures |
| excluded_products | Independently supplied dedicated tobacco machinery parts44523, agricultural dryers44518, separately classified general-purpose dryers, packing machinery and independent conveyance/measurement equipment. Tobacco crops, prepared tobacco, cigarettes and customer processing service are not this machine output. For hybrid lines review actual principal function and supplied machine boundary |
| representative_product | Complete accepted machine of one actual configuration; no representative mass |
| production_route | Actual mechanical fabrication, supplied tobacco opening/slicing/conditioning/cutting/blending/reconstitution/rod-making architecture, finishing, drive/control and factory testing; make/buy |
| market_state | Complete accepted delivered configuration with actual included components and retained initial lubricant; net mass excludes packing/test materials |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply complete tobacco processing machinery, not customer tobacco processing service |
| How much | 1 kg accepted net complete machine mass of the same configuration |
| How well | Meets declared material/mechanism/safety and actual acceptance plan |
| How long or cycle | One manufacturing/delivery period; no default lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery n.e.c. for processing tobacco `dc39ea23-5c74-4ba8-ab4d-6459d81cc7dd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal tobacco-processing function; model revision; opening/slicing/conditioning/flattening/cutting/blending/reconstitution/rod-making/combining architecture; electric/pneumatic/hydraulic design; heat-water-steam supply/return; make-buy; actual supplied tools/modules/retained fills/accessories; factory tobacco-paper-adhesive trial grade and recipe; calibrated net mass/N; site/period; native unit/utility interfaces; waste/releases/uncertainty |

Declare all qualifiers in the package; the category reference establishes no factory recipe, quantity or performance default.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/water fraction/wet-dry basis/density at actual temperature/stocks/reactions/returns; gross mass not contained element. |
| `utility_basis` | energy and gases | Delivered energy or volume | MJ; m3 | Electricity1 kWh=3.6 MJ; gas keeps m3 and actual T/P or declared standard conditions, mass conversion uses matching measured density; heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought frame/cylinder/knife/roll/conveyor/motor/controller includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory loaded tobacco opening/slicing/conditioning/cutting/blending/reconstitution/rod-making trials, actual test materials, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. User tobacco/cigarettes/rods and downstream plant operation are not machine manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown knife/roll/contact-surface or treatment formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/completion state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Complete machinery n.e.c. for processing tobacco, including actual primary opening/slicing/conditioning/cutting/blending and eligible secondary rod-making/combining/reconstitution architectures |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site work only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual grade/formulation/state/geography/period/provider; gaps explicit |
| disclosure | supplied list/make-buy/retained fill/factory test charge/conditional absence/denominator/uncertainty |

### Configuration and supplied-state matrix

| Configuration | Actual conditional interface | Evidence limits |
| --- | --- | --- |
| Bale opening and slicing | Actual opening/cutting mechanism, feed conveyor, controls and accepted supplied scope | Horizontal slicer is one architecture; no assumed universal bale or machine dimensions |
| Conditioning and casing | Actual cylinder/paddles, water/steam manifolds, services cubicle, optional heater/cleaning/casing | Test water/steam/tobacco are consumption, not dry machine steel or retained fills |
| Flattening and cutting | Actual hardened rolls, overload-separation actuators, blade drum, grinding and driven infeed | Actual steel alloy, supplied heat-treated state and electric/pneumatic/hydraulic design require records |
| Blending/bulking and dedicated handling | Actual stainless contact surfaces/doffers, band/slats, conveyors and optional carriage | Whole machine manufacture distinct from belt supplier and standalone generic conveyor |
| Reconstitution and integral thermal modules | Actual grinder/mixer, roll-coater or laminator and actual integrated dryer technology | Do not import customer gum/tobacco recipes; independent general dryers need separate scope |
| Secondary rod making and combining | Actual paper feed/draw rollers, seam heater, rotary cutters, fan, controls/sensors and included filter/inspection modules | Factory trials only actual grade and throughput; customer cigarettes not machine output, packer not automatically included |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Mechanical structure and processing-component fabrication | conditional | Actual forming/welding/machining/grinding and heat treatment only; complete bought components bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Cleaning and protective finishing | conditional | Actual surface cleaning/coating and formulation; no presumed food-hygiene standard or treatment recipe | foreground | per 1 kg reference flow |
| `integration` | Tobacco processing machinery integration | required | Actual declared primary or secondary architecture, mechanisms/drives/utility manifolds/control and supplied accessories | foreground | per 1 kg reference flow |
| `test` | Factory qualification and rework | required | Actual no-load and loaded acceptance/cleaning/rework; specific tobacco/paper/adhesive consumption separate from machine mass | foreground | per 1 kg reference flow |
| `dispatch` | Packing and accepted release | required | Actual complete accepted machine delivered scope and calibrated net mass; packing/reject/test feed excluded | foreground | per 1 kg reference flow |
| `services` | Residual utilities and actual generation | conditional | Only unassigned common-period residual and actual onsite generation | foreground | per 1 kg reference flow |

### Process: Mechanical structure and processing-component fabrication (`fabrication`)

Actual forming/welding/machining/grinding and heat treatment only; complete bought components bypass embedded manufacture。

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel plate (`steel`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Hot-rolled non-alloy steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cold-rolled stainless steel sheet (`stainless`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Cold-rolled stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-blending

###### Alloy tool-steel bar for cutter knives (`tool_steel`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Alloy tool-steel bar for cutter knives
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Uncoated non-alloy steel welding wire (`weldwire`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Uncoated non-alloy steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous argon welding shielding gas (`argon`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Gaseous argon welding shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Aluminium-oxide grinding wheel (`abrasive`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Aluminium-oxide grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Water-miscible metalworking emulsion concentrate (`coolant`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Water-miscible metalworking emulsion concentrate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### External untreated steel production scrap (`scrap`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Cleaning and protective finishing (`finish`)

Actual surface cleaning/coating and formulation; no presumed food-hygiene standard or treatment recipe。

#### Inputs

##### Product flows

###### Isopropanol cleaning solvent (`ipa`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Municipal tap water (`water`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Polyester coating powder (`powder`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`finish_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Transferred industrial cleaning wastewater (`wastewater`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit.

- Selected flow: Transferred industrial cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Dry powder-coating overspray waste (`powder_waste`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Tobacco processing machinery integration (`integration`)

Actual declared primary or secondary architecture, mechanisms/drives/utility manifolds/control and supplied accessories。

#### Inputs

##### Product flows

###### Completed steel machine frame (`frame`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Completed steel machine frame
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Completed conditioning cylinder with paddles (`drum`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Completed conditioning cylinder with paddles
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Finished steel tobacco cutter knives (`knives`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Finished steel tobacco cutter knives
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-cutter

###### Hardened steel stem flattener rollers (`rolls`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Hardened steel stem flattener rollers
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-flatten

###### Steel rolling bearings (`bearing`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Completed industrial speed reducer (`gearbox`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Completed industrial speed reducer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating-current industrial motor (`motor`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual supplied industrial AC induction motor fitting CPC46112 interface and actual voltage/power/type; generic entry does not determine winding, magnet or metal recipe. Bundled drive counted once.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Completed centrifugal blower (`blower`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Completed centrifugal blower
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Completed liquid centrifugal pump (`pump`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only an actual complete centrifugal liquid-water pump included in the delivered tobacco machine for evidenced water supply, cleaning or conditioning service, with compatible medium, mechanism, pressure/temperature, supplied state and provider verified. An independently supplied general pump remains a separate category and is not the complete tobacco-processing reference machine.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Steam regulation valve (`valve`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual bought delivered steel valve with evidenced steam pressure/temperature, regulation design and compatible seal/steel grade; no universal valve-material assumption or complete steam supply as a component.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Dedicated vibratory tobacco conveyor (`conveyor`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual finished continuous-action goods/material conveyor with compatible dedicated vibratory feed/discharge configuration and provider; actual supply scope, no transport service or underground-specific conveyor proxy.

- Selected flow: Pneumatic and other continuous action elevators and conveyors, for goods or materials `f7693db3-d2af-46be-88aa-8d3a4a4aa276`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-flatten

###### Finished polyester conveyor belt (`belt`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Finished polyester conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ammeraal-belts

###### Completed programmable logic controller (`plc`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual CN bought PLC hardware component, voltage≤1000V and compatible hardware supply; not entire cabinet/software/service.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Electronic process pressure sensor (`sensor`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Electronic process pressure sensor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-sensors

###### Electric resistance format heater (`heater`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual supplied manufactured noncarbon electric heating resistor, compatible format-heater construction and provider; excludes complete heater assembly and unsupported heat-source defaults.

- Selected flow: Electric heating resistors, except of carbon `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-sensors

###### Insulated low-voltage copper cable (`cable`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_length.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### Mineral-base lubricating grease (`grease`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match.

- Selected flow: Mineral-base lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral lubricating oil (`oil`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral hydraulic oil retained fill (`hydraulic`)

Only this actual supplied grade, chemistry, finished or unfinished state and configuration. Complete bought components include embedded manufacturing once; own fabrication instead records actual feedstocks and subsequent operations. Record own moisture/assay/stocks and returns; actual provider interface must match. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory qualification and rework (`test`)

Actual no-load and loaded acceptance/cleaning/rework; specific tobacco/paper/adhesive consumption separate from machine mass。

#### Inputs

##### Product flows

###### Unmanufactured flue-cured tobacco leaf for factory trials (`tobacco`)

Only actual recorded factory loaded acceptance trials using this precise supplied test grade. Measure own issue/recovered returns/moisture/stocks and chemistry; included in attributable factory burden Qattr, never machine net output Dnet. Catalogue customer throughput or recipes are not manufacturing defaults; paper/adhesive are not machine construction materials.

- Selected flow: Unmanufactured flue-cured tobacco leaf for factory trials
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Manufactured smoking tobacco cut filler for factory trials (`cut_tobacco`)

Only actual recorded factory loaded acceptance trials using this precise supplied test grade. Measure own issue/recovered returns/moisture/stocks and chemistry; included in attributable factory burden Qattr, never machine net output Dnet. Catalogue customer throughput or recipes are not manufacturing defaults; paper/adhesive are not machine construction materials. Only actual finished manufactured tobacco cut filler compatible with the supplied25091/HS24.03 interface and supplier, actual tobacco or substitute composition and cut/form reviewed. Official Chinese display does not establish an artificially synthesised material; extracts and uncut mixtures are not this cut feed. Intermediate uncut blend, fresh leaf, recon sheet and complete cigarettes are different supplies; no one grade or recipe presumed. Factory trials only, excluded from machine Dnet.

- Selected flow: Manufactured tobacco `0b1039e5-6251-4030-a2fd-707a1f32f365`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-rods

###### Cigarette paper for factory trials (`paper`)

Only actual recorded factory loaded acceptance trials using this precise supplied test grade. Measure own issue/recovered returns/moisture/stocks and chemistry; included in attributable factory burden Qattr, never machine net output Dnet. Catalogue customer throughput or recipes are not manufacturing defaults; paper/adhesive are not machine construction materials. Only actual cigarette paper supplied in compatible cut shape/booklet/tube or roll width≤5cm; actual grade, width, wet mass and paper-web provider reviewed; no general tissue/packing board or wider roll proxy.

- Selected flow: Cigarette Paper `ae3a445e-c064-4cba-abd3-cfeab698f8ca`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-rods

###### Water-based polyvinyl-acetate adhesive for factory trials (`adhesive`)

Only actual recorded factory loaded acceptance trials using this precise supplied test grade. Measure own issue/recovered returns/moisture/stocks and chemistry; included in attributable factory burden Qattr, never machine net output Dnet. Catalogue customer throughput or recipes are not manufacturing defaults; paper/adhesive are not machine construction materials.

- Selected flow: Water-based polyvinyl-acetate adhesive for factory trials
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: koerber-rods

###### Municipal tap water for factory conditioning tests (`test_water`)

Only actual factory test consumption at this supplied interface and native state, not customer operation. Reconcile issue, recovery/return and retained versus consumed state. For gross heat deduct independent condensate return once using own enthalpies at common zero; already-net invoices no second subtraction. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: comas-dcrb

###### Purchased industrial heat for factory tests (`test_heat`)

Only actual factory test consumption at this supplied interface and native state, not customer operation. Reconcile issue, recovery/return and retained versus consumed state. For gross heat deduct independent condensate return once using own enthalpies at common zero; already-net invoices no second subtraction. Only actual matching CN natural-gas industrial-heat delivered Energy interface; provider must match actual factory-test delivery. Own metering, gross/net return and supply state required; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: comas-dcrb

###### Delivered compressed air (`compressed_air`)

Only actual factory test consumption at this supplied interface and native state, not customer operation. Reconcile issue, recovery/return and retained versus consumed state. For gross heat deduct independent condensate return once using own enthalpies at common zero; already-net invoices no second subtraction. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Factory-test tobacco solid residue (`tobacco_waste`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit.

- Selected flow: Factory-test tobacco solid residue
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-test cigarette paper scrap (`paper_waste`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit.

- Selected flow: Factory-test cigarette paper scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Used mineral lubricating oil (`oil_waste`)

Only this actual named outgoing Waste transfer, own measured gross mass/assay/moisture/dry-wet basis/stocks and paired internal returns. Actual receiver route documented. Physical wastewater transfer is separate from elementary water emission; factory-test tobacco/paper offcuts are not bought components or shipped machine output. No fictional recycling or avoided credit. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

### Process: Packing and accepted release (`dispatch`)

Actual complete accepted machine delivered scope and calibrated net mass; packing/reject/test feed excluded。

#### Inputs

##### Product flows

###### Corrugated packing board (`board`)

Only actual supplied packing construction. Measure own issue/returns/stocks and evidenced reuse; packing excluded from accepted machine net mass, no assumed reuse or lifetime. Actual C/E/F corrugated fibreboard with fibre≥80% and evidenced recycled-content construction; supplied board not complete crate.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE packing film (`foil`)

Only actual supplied packing construction. Measure own issue/returns/stocks and evidenced reuse; packing excluded from accepted machine net mass, no assumed reuse or lifetime. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Only actual supplied packing construction. Measure own issue/returns/stocks and evidenced reuse; packing excluded from accepted machine net mass, no assumed reuse or lifetime. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Machinery n.e.c. for processing tobacco (`reference_product`)

Complete accepted declared tobacco-processing machine configuration only; include actual supplied installed components/accessories and retained initial fills. Weigh calibrated accepted net mass, exclude transport packing, rejects and consumed tobacco/paper/adhesive/media. No presumed hydraulic oil, spare blades or initial tobacco charge. Only actual complete eligible manufactured tobacco-processing machine, at plant, compatible delivered category and provider; classification44517 is not a machine weight or performance default.

- Selected flow: Machinery n.e.c. for processing tobacco `dc39ea23-5c74-4ba8-ab4d-6459d81cc7dd`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44517

##### Waste flows

##### Elementary flows

### Process: Residual utilities and actual generation (`services`)

Only unassigned common-period residual and actual onsite generation。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual measured allocated process electricity; common services ONLY unassigned same-period residual after all process submeter loads, imports/generation/exports/storage reconcile. Negative residual investigated not clipped; no nameplate or customer-use default. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide to unspecified air (`co2`)

Only this actual measured emitted species, origin and air compartment. Matched post-control concentration and exhaust flow over same period with actual T/P and wet/dry corrections; fugitives independently measured. Captured material is Waste, not air release; unexplained closure residual not release. Assign each actual emitting process once; supplier energy production emissions not onsite. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon monoxide to unspecified air (`co`)

Only this actual measured emitted species, origin and air compartment. Matched post-control concentration and exhaust flow over same period with actual T/P and wet/dry corrections; fugitives independently measured. Captured material is Waste, not air release; unexplained closure residual not release. Assign each actual emitting process once; supplier energy production emissions not onsite. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to unspecified air (`vapour`)

Only this actual measured emitted species, origin and air compartment. Matched post-control concentration and exhaust flow over same period with actual T/P and wet/dry corrections; fugitives independently measured. Captured material is Waste, not air release; unexplained closure residual not release. Assign each actual emitting process once; supplier energy production emissions not onsite. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Isopropanol to unspecified air (`ipa_air`)

Only this actual measured emitted species, origin and air compartment. Matched post-control concentration and exhaust flow over same period with actual T/P and wet/dry corrections; fugitives independently measured. Captured material is Waste, not air release; unexplained closure residual not release. Assign each actual emitting process once; supplier energy production emissions not onsite. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Whole PM10 particles to unspecified air (`pm10`)

Only this actual measured emitted species, origin and air compartment. Matched post-control concentration and exhaust flow over same period with actual T/P and wet/dry corrections; fugitives independently measured. Captured material is Waste, not air release; unexplained closure residual not release. Assign each actual emitting process once; supplier energy production emissions not onsite. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated machine models or use machine mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | accepted net mass per machine | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | attributable quantity / accepted machines | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | attributable energy / accepted machines | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | attributable waste / accepted machines | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | attributable emission / accepted machines | sampling/flow/combined uncertainty |
| cp_volume | all | specific supplied gas/fluid | meter | gas/fluid identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature and composition state. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | attributable volume / accepted machines | T/P/flow/density/calibration |
| cp_length | integration | actual insulated low-voltage copper cable | length_meter | actual conductor/insulation/sheath and voltage; measured length m; cutting/installed/return; own linear density kg/m; stocks; Q; N | Reconcile native m against received/cut/installed length and return/stocks. If BOM mass is needed use that actual cable measured linear density kg/m, not a generic copper-mass or energy proxy. | m | each cut/installation lot | common manufacturing period | actual configuration cable supply interface | attributable length / accepted machines | calibrated length/cut sheet/actual construction/linear density |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| cohort | all inventory rows | Same configuration/common period Qattr includes attributable reject/rework/test; Naccepted counts accepted complete machines; Dnet sums calibrated accepted net masses including actual supplied installed tools/retained fills/accessories, excluding packing/rejects/consumed test charge. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Preserve each numerator native unit and explicit conversion; no mixed configurations. | calibrated net mass/supplied list/acceptance/cohort raw-period records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm principal function, tobacco tobacco opening/slicing/conditioning/cutting/blending/reconstitution/rod-making function, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
| `denominator` | all inventory rows | All inventory uses the same accepted cohort and common period. Verify calibrated accepted net mass and N; reject and packaging mass excluded. Check q_item=Q/N then normalization by same mean M; mixed configurations are invalid. |  |
| `double_count` | make_buy | Reconcile complete bought modules versus own materials and operations, retained fills/accessories versus factory consumption, paired internal transfers and external inputs. Count each actual burden once. |  |
| `water_close` | physical water records | For each term use its own measured water fraction, density and wet/dry basis: fresh and input moisture plus reaction water and beginning stocks minus final stocks, retained product, discharge and evaporation; internal returns cancel paired. Investigate measured closure against combined sampling/meter/allocation uncertainty; no universal tolerance. |  |
| `species_close` | material and chemical records | Close each contained metal/chemical separately using each input, product, scrap, sludge, liquid and release own matched assay and dry/wet basis, reaction stoichiometry and stocks. Gross mass is not contained element. No all-inventory mass rule applies to energy or transport. |  |
| `solvent_close` | solvent records | Distinguish retained solvent, recovered return, captured liquid/media, demonstrated destruction, wastewater/non-air residual and actual species air release. Capture is not destruction; an unexplained residual must be investigated, not assigned to air. |  |
| `utility_close` | energy records | Reconcile purchased imports, actual on-site generation, exports and storage changes with assigned fabrication/finish/integration/test/dispatch loads in the same period and units. Shared row ONLY unassigned residual; investigate negative residual against period, unit and combined measurement uncertainty without clipping. |  |
| `steam_close` | steam and condensate | Use supply kg times supply own MJ/kg and return kg times return own MJ/kg at measured pressure/temperature relative to common zero. If gross supply, subtract return once; if already-net invoice, do not subtract again. Keep physical steam/condensate mass balance independent from energy. |  |
| `species_emissions` | air releases | Validate every emitted species and compartment independently. Fuel carbon balance cannot alone establish CO or NOx. NO2 mass is not NOx reported as NO2 equivalent; keep reporting conventions and actual species identities distinct. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual configuration factory foreground production and models with explicit completed upstream links |
| excluded_use | Cross-family functional equivalence, default customer processing service, default weight/manufacturing factors, complete footprint with missing providers |
| required_metadata | Section3 qualifiers, raw-period denominator, actual architecture/make-buy/boundary |
| required_quality_disclosure | collection coverage, provider/identity/recipe gaps, allocation/combined uncertainty, all conditions/exclusions |
| update_trigger | model/architecture/recipe/supply state/geography/measurement/factory-test/treatment changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| comas-dcrb | handbook | DCRB Direct Conditioning Cylinder; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/dcrb-series-conditioning | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-slicer | handbook | SO Horizontal Tobacco Bale Slicer; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/horizontal-slicer-so-series | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-flatten | handbook | CLM Tobacco Stem Flattening Machine; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/clm-series-flattening | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-recon | handbook | Reconstituted Tobacco Process Line; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/recon-process-line | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-primary | handbook | Primary Tobacco Processing; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/solutions/machinery-and-process-equipment/primary | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-makers | handbook | Tobacco Processing and Making Machines; undated; actual original HTML snapshot 2026-10-02; https://www.koerber-technologies.com/en/products/machines | Product architecture/category boundary; not factory recipe or quantitative default |
| comas-blending | handbook | SAM Tobacco Blending Silos; undated; actual original HTML snapshot 2026-10-02; https://www.comasitaly.com/en/solutions/product/silos-sam-series | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-cutter | handbook | KT4 Tobacco Cutter; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/high-performance-tobacco-cutter | Product architecture/category boundary; not factory recipe or quantitative default |
| gd-maker | handbook | 121 Double Rod Cigarette Maker; undated; actual original HTML snapshot 2026-10-02; https://www.gidi.it/en/solutions/product/121 | Product architecture/category boundary; not factory recipe or quantitative default |
| ammeraal-belts | handbook | Tobacco Primary Processing Belts; undated; actual original HTML snapshot 2026-10-02; https://ammeraalbeltech.com/en/industries/tobacco/primary-processing/ | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-rods | handbook | Rod Making Machinery; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/solutions/machinery-and-process-equipment/secondary/rod-making | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-sensors | handbook | Protos M5e Process Sensors; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/sensors-machine-performance-development | Product architecture/category boundary; not factory recipe or quantitative default |
| koerber-msm | handbook | Modular THP Maker; undated; actual original HTML snapshot 2026-10-02; https://www.koerber.com/en/insights-and-events/modular-thp-maker | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44517 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
