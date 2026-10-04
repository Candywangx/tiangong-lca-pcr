---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44310-including-rolls-for-rolling-mills
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Dedicated metallurgical machinery parts including rolling-mill rolls

## 1. Scope and Applicability

This candidate covers the FULL dedicated parts category for converters, ladles, ingot moulds, casting machines and metal rolling mills, INCLUDING rolls. Its reference is one actual supplied dedicated part or declared subassembly with a verified host interface, not a whole host, arbitrary spare bundle or steel-production service. Generic hardware and independent refractory material articles do not become this reference merely because a steelworks uses them. Review complete ingot-mould versus unrelated general mould interfaces; distinguish an actual new manufactured part from a reconditioned part supplied from a declared used starting state. Source: `un-cpc-44320`.

Danieli's converter replacement example includes vessel, trunnion ring, tilting drive and detachable bottom. Its P420MHT description concerns that vessel case; it cannot establish all trunnion or other part alloys or a universal new-part recipe. Inducto describes actual ladle slide-gate adaptor frames, guides, housing, slider/gliders, rails, cylinders and seal kits; a spare list proves available interfaces, not the contents of any separate shipment. Foseco describes isostatic carbon-bonded alumina-graphite VISO, extruded VAPEX and interchangeable/base nozzle cases with steel hardware. Review actual supplied assembled mechanical gate/hardware separately from a standalone ceramic refractory article; the latter requires its own material boundary rather than automatic acceptance as this reference. Sources: `danieli-converter`; `inducto-ladle`; `foseco-flow`; `foseco-nozzles`.

Ingot-mould base plates and trumpets are actual supplied cases in JR and Simplex. Simplex's annual report supports conditional grey/ductile casting, cupola/induction melting, heat treatment, machining, inspection and assembly routes and fabricated ladles; site capacity and product catalogue do not provide part mass or recipe. The JRC foundry/smithery decomposition supports explicit raw-material preparation, melting/moulding/pouring/cooling/fettling or heating/forging/heat treatment/machining when actually performed. Match the actual casting versus forging alloy, delivered blank completion and make/buy route. Sources: `jr-ingot-parts`; `simplex-foundry`; `jrc-smithery-foundry`.

Primetals' copper repair/coating examples distinguish copper plate processing and optional nickel-sulfamate electroplating, nickel-boron, tungsten-carbide HVOF or chromium coatings. A repair service description is evidence of an operation only when the declared new or reconditioned part route actually includes it. Its caster roller architecture separates modular jacket, shaft, bearings and rotating water unions; roll manufacture lists conditional weld-overlay methods, machining and inspection. Actual pressure/leak/material or motion qualification media belong in manufacturing Q, not accepted part net mass; only evidenced retained initial fill belongs in the supplied configuration. Sources: `primetals-copper`; `primetals-roller`; `primetals-roll-manufacturing`.

UES supplies distinct monobloc cast-roll and forged SHSSII examples: differential neck/barrel hardening, water quench/hold/temper in the cast case and electroslag remelting/heat treatment in the forged case. The forged example does not require chrome plating for most applications. Neither aim chemistry/hardness, marketing capacity nor customer rolled tonnage is a universal manufacturing input, part weight or denominator. JRC metalworking distinguishes straight oil from water-miscible concentrate and actual dilution. Each card is a conditional atomic anchor; add all actual missing alloy, binder, overlay, plating/spray chemicals, factory qualification media and measured outgoing species. Bought completed parts embed their upstream manufacture once; actual subsequent site work remains separate. Sources: `ues-cast-roll`; `ues-forged-roll`; `jrc-metalworking`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44310-including-rolls-for-rolling-mills |
| classification_refs | CPC3.0:44320 |
| covered_products | Dedicated parts for converters, ladles, ingot moulds, casting machines and metal rolling mills, INCLUDING rolls |
| excluded_products | Complete hosts, customer steelmaking/casting/rolling service, generic standalone hardware, independent refractory material articles and unrelated general moulds |
| representative_product | Actual finished dedicated part of one supplied configuration; no representative mass |
| production_route | Actual casting/forging/electroslag remelting/heat treatment/machining/joining/overlay/plating/spraying, integration and part acceptance; make/buy and new/reconditioned starting states separated |
| market_state | Actual accepted dedicated part or declared subassembly with evidenced included fills/accessories; not complete host or consumed trial load |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply dedicated converter/ladle/ingot-mould/casting-machine and metal-rolling-mill parts, including rolls |
| How much | 1 kg accepted net part mass of the same supplied configuration |
| How well | Meets declared dedicated interface/material/function/safety and actual part acceptance requirements |
| How long or cycle | One manufacturing/delivery period; no default service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated converter/ladle/ingot-mould/casting-machine and metal-rolling-mill parts including rolls; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dedicated part and converter/ladle/ingot-mould/casting-machine or metal rolling mill host function; model/revision/dedicated interface; casting/forging/heat treatment/finish/mechanical/water architecture; new/reconditioned actual starting state; actual material/formulation/completion state; make-buy; supplied accessory/retained initial-fill evidence; test media; accepted calibrated net mass/count; period/site; native units/providers; waste receiver/emitted species/uncertainty |

Declare all qualifiers; normalize directly by accepted net part mass of the same configuration and period. Host capacity, marketed roll capacity and customer steel throughput mass cannot replace this denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Reference is1 kg accepted net part; cp_mass measures same-configuration/common-period net masses, excluding complete host, packing/rejects/consumed test media. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/moisture/wet-dry basis/density at actual temperature/stocks/reactions/paired returns; gross mass is not contained element. |
| `native_interfaces` | energy/gas/length | Delivered energy/volume/length | MJ; m3; m | Preserve native units; electricity1 kWh=3.6 MJ; gas uses actual T/P or declared standard state and stream-specific density. Cable/hose length uses actual construction own kg/m only if mass conversion needed. Heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought roll blank, copper plate, trunnion ring, ladle mechanism, roller jacket/shaft/bearing unit or hydraulic cylinder includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory dimensional/material/NDT/motion/pressure/leak acceptance and documented manufacturing qualification trials, actual test media, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. Customer molten metal, cast products or rolled steel and downstream plant operation are not dedicated part manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown alloy, mould binder, weld overlay, plating or spray-feed formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Dedicated parts for converters, ladles, ingot moulds, casting machines and metal rolling mills, INCLUDING rolls |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site operations only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual supplier/receiver grade/state/formulation/geography/technology/period; gaps explicit |
| disclosure | Actual part supplied list/make-buy/fill-accessory versus trial-media roles/conditional exclusions/denominator/uncertainty |

### Part architecture and supplied-interface matrix

| Configuration | Actual interface | Limits |
| --- | --- | --- |
| Converter part | Actual vessel/trunnion/tilting/bottom drawing, alloy and supplied completion | Vessel-specific P420MHT is not every part alloy; no complete host recipe |
| Ladle mechanical part | Actual gate frame/guides/cylinder/steel hardware and included refractory interface | Replacement availability is not shipment; ceramic article separately reviewed |
| Ingot-mould part | Actual cast base plate/trumpet configuration and iron grade | Catalogue/site capacity not part mass or yield; unrelated general mould excluded |
| Casting-machine part | Actual copper plate/coating or roller jacket/shaft/bearing/water union configuration | New/repair starting states distinct; optional plating/overlay and fill not universal |
| Rolling-mill part including roll | Actual cast/forged roll, remelting/heat treatment/machining and dedicated chock interface | No universal chemistry/chrome coat; customer steel production outside manufacture |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual casting/forging and dedicated part fabrication | conditional | Only actual raw/blank alloy and site melting/moulding/forging/remelting/heat treatment/machining/joining; completed bought input bypasses embedded operations | foreground | per 1 kg reference flow |
| `finish` | Actual machining cleaning and surface finishing | conditional | Actual grinding/fluid dilution/cleaning/overlay/plating/spray route and formulation only; no universal coating | foreground | per 1 kg reference flow |
| `integration` | Actual supplied part or subassembly completion | conditional | Only actual included dedicated components, assembly, seals and evidenced retained fills; not default complete host or replacement bundle | foreground | per 1 kg reference flow |
| `test` | Part acceptance and attributable rework | required | Actual dimension/material/NDT/motion/pressure/leak qualification; consumed media outside accepted part denominator | foreground | per 1 kg reference flow |
| `dispatch` | Accepted dedicated part release and packing | required | Calibrated accepted net supplied part mass with actual included components/fills; external packing separate | foreground | per 1 kg reference flow |
| `services` | Residual utility and measured outgoing streams | conditional | Only unassigned common-period utility residual and actual waste/species transfers; customer steel production excluded | foreground | per 1 kg reference flow |

### Process: Actual casting/forging and dedicated part fabrication (`fabrication`)

Only actual raw/blank alloy and site melting/moulding/forging/remelting/heat treatment/machining/joining; completed bought input bypasses embedded operations。

#### Inputs

##### Product flows

###### Non-alloy steel plate (`steel`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Non-alloy steel plate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: danieli-converter

###### Alloy steel forging billet (`alloy_billet`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ues-forged-roll; jrc-smithery-foundry

###### Foundry pig iron (`pig_iron`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual supplied foundry pig iron in compatible primary form, with own alloy carbon/impurity assay and supplier. Mass reference internal1 measures whole pig iron; CAS7439-89-6 and approximateFe formula do not make pig iron pure elemental iron or supply a carbon fraction.

- Selected flow: Pig iron `a636ed9e-f90a-48cb-a180-c75b1fc92cf1`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-smithery-foundry

###### Ferrochromium (`ferrochrome`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Ferrochromium
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Ferrosilicon (`ferrosilicon`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual supplied ferro-silicon alloy matching measuredSi/Fe/other assay, grade, form and actual at-plant provider. No particular silicon fraction, universal charge or foundry recipe is inferred.

- Selected flow: Ferrosilicon `33cf9edf-84e6-41c7-8986-2983e91391d8`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-smithery-foundry

###### Synthetic graphite carburiser (`graphite`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Synthetic graphite carburiser
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Copper alloy mould plate blank (`copper_plate`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Copper alloy mould plate blank
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-copper

###### Silica foundry sand (`sand`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-smithery-foundry

###### Bentonite foundry binder (`bentonite`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual natural bentonite clay CAS1302-78-9 from the compatible mining-site supply interface; subsequent actual drying/milling/preparation is separately collected when performed. It is not a finished formulated foundry binder or wine/drilling preparation.

- Selected flow: Clay, bentonite `93806a54-46f5-409c-99c5-4144a1e73b5d`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-smithery-foundry

###### Alloy steel weld-overlay wire (`weldwire`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Alloy steel weld-overlay wire
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-roll-manufacturing

###### Gaseous argon (`argon`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Gaseous argon
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous oxygen (`oxygen`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual supplied gaseous oxygen from compatible cryogenic air-separation at-plant provider and purity/state, for evidenced factory welding or thermal-spray work. Not liquid oxygen, ambient-air intake, customer steelmaking or universally required gas.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous natural gas (`naturalgas`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Gaseous natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Electroslag remelting flux (`flux`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Electroslag remelting flux
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ues-forged-roll

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

### Process: Actual machining cleaning and surface finishing (`finish`)

Actual grinding/fluid dilution/cleaning/overlay/plating/spray route and formulation only; no universal coating。

#### Inputs

##### Product flows

###### Water-miscible metalworking fluid concentrate (`coolant`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Water-miscible metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-metalworking

###### Bonded alumina grinding wheel (`abrasive`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Bonded alumina grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-metalworking

###### Isopropanol (`ipa`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`water`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Deionised water (`deionized`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual deionised supplied water with compatible purity and provider; no municipal water, arbitrary process water or universal plating-water default.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Nickel plating anode (`nickel`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Nickel plating anode
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-copper

###### Nickel sulfamate (`nickel_sulfamate`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Nickel sulfamate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-copper

###### Raw tungsten carbide powder for onsite spray-feed preparation (`wc`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual raw tungsten-carbide powder used in evidenced onsite spray-feed preparation with compatible chemistry, powder form and GLO-at-plant provider. Finished formulated thermal-spray powder, WC-Co mixture or carbide part is a different supply; no binder/additive recipe is assumed.

- Selected flow: Tungsten carbide powder `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-copper

###### Delivered alternating-current electricity (`finish_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

### Process: Actual supplied part or subassembly completion (`integration`)

Only actual included dedicated components, assembly, seals and evidenced retained fills; not default complete host or replacement bundle。

#### Inputs

##### Product flows

###### Cast steel rolling-mill roll blank (`cast_blank`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only the actual compatible upstream P1 output with its exact specified name and as-cast supplied completion; a possible mass above 1 kg is not a yield/input default. A finished roll is distinct. Only actual as-cast steel metallurgical-roll blank from the compatible upstreamP1 interface, verified exact grade/assay, geometry and completion. Actual subsequent fettling, heat treatment and machining are collected separately; the generic comment supplies no yield or mass default and does not identify a finished roll.

- Selected flow: cast metallurgy machinery part blank `6e891969-edcf-4307-80af-1294c15056c7`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ues-cast-roll

###### Forged alloy steel rolling-mill roll blank (`forged_blank`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Forged alloy steel rolling-mill roll blank
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: ues-forged-roll

###### Finished converter trunnion ring (`trunnion`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished converter trunnion ring
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: danieli-converter

###### Finished detachable converter bottom (`bottom`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished detachable converter bottom
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: danieli-converter

###### Finished ladle slide-gate mechanism frame (`ladle_frame`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished ladle slide-gate mechanism frame
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: inducto-ladle

###### Finished cast-iron ingot-mould base plate (`base_plate`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished cast-iron ingot-mould base plate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: simplex-foundry; jr-ingot-parts

###### Finished caster roller jacket (`jacket`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished caster roller jacket
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-roller

###### Finished caster roller shaft (`shaft`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished caster roller shaft
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-roller

###### Complete spherical roller bearing (`bearing`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-roller

###### Finished rolling-mill roll chock (`chock`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Finished rolling-mill roll chock
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete caster roller rotary water union (`union`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Complete caster roller rotary water union
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-roller

###### Complete hydraulic cylinder (`cylinder`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred.

- Selected flow: Complete hydraulic cylinder
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: inducto-ladle

###### Finished alumina-carbon ladle nozzle (`refractory`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. This is an actual included alumina-carbon nozzle input to an eligible assembled mechanical part, not automatic classification of every standalone refractory article as reference output.

- Selected flow: Finished alumina-carbon ladle nozzle
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: foseco-nozzles

###### Reinforced rubber hydraulic hose (`hose`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only an actual included completed vulcanized nonhard-rubber hydraulic hose, compatible reinforcement, internal diameter, pressure, fluid and supplier. Native Mass/kg; any length-to-mass reconciliation uses that same measured construction kg/m, never cable conductor or voltage fields.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Insulated copper power cable (`cable`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Collect attributable quantity with cp_length; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_length`
- Sources:

###### Petroleum lubricating oil (`oil`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral hydraulic oil (`hydraulic`)

Only this actual supplied grade, chemistry, completion state and dedicated component configuration, with actual supplier interface and measured stocks/returns. Complete bought input embeds manufacture once; own manufacture instead records actual feedstocks and subsequent operations. No complete host, universal alloy or steelworks customer throughput is inferred. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity with cp_volume; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

###### Delivered alternating-current electricity (`integration_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

### Process: Part acceptance and attributable rework (`test`)

Actual dimension/material/NDT/motion/pressure/leak qualification; consumed media outside accepted part denominator。

#### Inputs

##### Product flows

###### Tap water factory pressure trial (`test_water`)

Only actual factory qualification medium consumed in this dedicated part acceptance, with own measured state, stocks and returns; customer molten metal or rolling throughput is excluded. Consumed test medium is excluded from accepted part Dnet; retained initial fill is separately evidenced. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: primetals-copper

###### Gaseous nitrogen factory leak trial (`nitrogen`)

Only actual factory qualification medium consumed in this dedicated part acceptance, with own measured state, stocks and returns; customer molten metal or rolling throughput is excluded. Consumed test medium is excluded from accepted part Dnet; retained initial fill is separately evidenced. Only actual at-plant GLO protective-atmosphere gaseous nitrogen supply compatible with the documented factory qualification medium, purity/state and provider. No liquid/bottled gas or customer steelworks consumption inferred.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Delivered alternating-current electricity (`test_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
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

### Process: Accepted dedicated part release and packing (`dispatch`)

Calibrated accepted net supplied part mass with actual included components/fills; external packing separate。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Corrugated fibreboard packing (`board`)

Actual measured external packing is separate from accepted dedicated part net mass; trace genuine returns and reuse cycles, with no universal packaging recipe. Actual C/E/F corrugated fibreboard with fibre≥80% and evidenced recycled-content construction; supplied board not complete crate.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### LDPE packing foil (`foil`)

Actual measured external packing is separate from accepted dedicated part net mass; trace genuine returns and reuse cycles, with no universal packaging recipe. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Wooden EURO pallet (`pallet`)

Actual measured external packing is separate from accepted dedicated part net mass; trace genuine returns and reuse cycles, with no universal packaging recipe. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Manufactured dedicated metallurgical machinery part including rolling-mill rolls (`reference_product`)

One actual accepted dedicated part of its declared supplied configuration and host interface; 1kg accepted net part mass, excluding complete host, packing, rejected output and consumed factory test medium. No universal mass, alloy or customer steel-production service is inferred.

- Selected flow: Manufactured dedicated metallurgical machinery part including rolling-mill rolls
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44320

##### Waste flows

##### Elementary flows

### Process: Residual utility and measured outgoing streams (`services`)

Only unassigned common-period utility residual and actual waste/species transfers; customer steel production excluded。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual attributable subprocess electricity. Shared services include only unassigned residual after common-period imports, actual generation, exports, storage and all subprocess-meter reconciliation. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased industrial natural-gas heat (`heat`)

Actual metered compatible purchased heat interface; retain provider and supply/return thermodynamic states, reconcile unassigned residual without counting supplier boiler fuel as site combustion. Only actual matching CN natural-gas industrial-heat delivered Energy interface; provider must match actual factory-test delivery. Own metering, gross/net return and supply state required; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Delivered energy / MJ
- Amount rule: Collect attributable quantity with cp_energy; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Compressed air (`compressed_air`)

Actual metered compressed-air delivery at declared pressure/temperature and own measured density; separate bought air from site compressor electricity to avoid duplicate manufacture. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Collect attributable quantity with cp_volume; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_volume`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Untreated steel machining scrap (`scrap`)

Actual measured outgoing untreated steel machining scrap only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit. This UUID is post-industrial steel scrap untreated within the factory and transferred without further treatment; confirm actual composition and receiving treatment. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Copper machining scrap (`copper_waste`)

Actual measured outgoing copper machining scrap only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit. Only actual copper machining waste matching its own metal assay, moisture, contamination, stock and measured outgoing receiver interface; the selected hydrometallurgical recycling route requires an actual matching receiver. No arbitrary copper waste, internal-return double counting or avoided credits.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent silica foundry sand (`sand_waste`)

Actual measured outgoing spent silica foundry sand only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit.

- Selected flow: Spent silica foundry sand
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Ferrous foundry slag (`slag`)

Actual measured outgoing ferrous foundry slag only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit.

- Selected flow: Ferrous foundry slag
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Industrial cleaning wastewater (`wastewater`)

Actual measured outgoing industrial cleaning wastewater only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit.

- Selected flow: Industrial cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Nickel-containing plating sludge (`sludge`)

Actual measured outgoing nickel-containing plating sludge only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit.

- Selected flow: Nickel-containing plating sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Used lubricating oil waste (`oil_waste`)

Actual measured outgoing used lubricating oil waste only. Use this stream own composition/assay, moisture, beginning/end stocks and paired internal returns; separate actual external receiver route from on-site recycling and elementary releases. No avoided-product credit. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to ordinary air (`co2`)

Actual measured fossil carbon dioxide to ordinary air from this factory boundary only. Post-control species concentration and matched common-period exhaust flow/duration/state determine release; fugitives independently measured, own assay/stocks/reactions retained. Captured material or an unexplained balance residual is not this release. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Fossil carbon monoxide to ordinary air (`co`)

Actual measured fossil carbon monoxide to ordinary air from this factory boundary only. Post-control species concentration and matched common-period exhaust flow/duration/state determine release; fugitives independently measured, own assay/stocks/reactions retained. Captured material or an unexplained balance residual is not this release. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Water vapour to ordinary air (`vapour`)

Actual measured water vapour to ordinary air from this factory boundary only. Post-control species concentration and matched common-period exhaust flow/duration/state determine release; fugitives independently measured, own assay/stocks/reactions retained. Captured material or an unexplained balance residual is not this release. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Isopropanol to ordinary air (`ipa_air`)

Actual measured isopropanol to ordinary air from this factory boundary only. Post-control species concentration and matched common-period exhaust flow/duration/state determine release; fugitives independently measured, own assay/stocks/reactions retained. Captured material or an unexplained balance residual is not this release. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Whole PM10 particulate to ordinary air (`pm10`)

Actual measured whole pm10 particulate to ordinary air from this factory boundary only. Post-control species concentration and matched common-period exhaust flow/duration/state determine release; fugitives independently measured, own assay/stocks/reactions retained. Captured material or an unexplained balance residual is not this release. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_emission; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `causal` | site | Separate configurations and subdivisions first; allocate common residual by measured causal load, operating time or appropriate physical driver, retain numerator and denominator records and uncertainty. Do not average unrelated part configurations or use part mass automatically for every utility. |  |
| `rejects` | accepted | Include actual rejects, rework and qualification burdens in attributable Q for accepted output; only accepted net mass/count enters denominator. Segregate recycling transfer and treatment; do not assume avoided-product credits or zero upstream recycled burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | part drawing/revision; configuration; accepted part identifiers; gross/tare and each calibrated accepted net mass; Naccepted; Dnet; included components/fills; exclusions | Weigh the accepted dedicated part on a calibrated scale, excluding transport packaging and consumed trial media; reconcile the same configuration and acceptance record. | kg | each accepted lot | common manufacturing period | same configuration/site | per 1 kg reference flow | calibration/tare/included accessories/acceptance |
| cp_material | all | actual inputs | meter_issue | specific species/grade; supplied state; issue; each moisture/density/assay; make/buy; stocks; Q; N | Reconcile each exchange metering/stores/recipe and paired returns in common period; Q includes rejects/rework and each term own assay. | kg | each batch or continuous meter | common manufacturing period | same configuration/site and supplier | per 1 kg reference flow | grade/composition tests/meters/stocks |
| cp_energy | all | electricity and heat | meter | process meters; gross imports; actual generation; exports; storage; each supply/return steam mass pressure temperature enthalpy; net invoice; Q; N | Reconcile process meters in same period/units; shared services only unassigned residual, investigate negative residual. Each steam supply/return uses own kg and MJ/kg/common zero, return deducted once. | MJ | continuous meters/each test | common manufacturing period | same configuration/site | per 1 kg reference flow | calibrated meters/delivery interface/thermodynamics/allocation uncertainty |
| cp_waste | all | specific waste | transfer | each stream mass and own moisture/assay; beginning/end stocks; internal return; external treatment; Q; N | Weigh/sample treatment transfers, distinguish return/reuse/recycling/disposal without assumed substitution credit. | kg | each transfer lot | common manufacturing period | same configuration/site and treatment interface | per 1 kg reference flow | waste tickets/sampling/stocks |
| cp_emission | all | specific species/compartment | species_measurement | actual species/compartment; concentration; exhaust or liquid flow; wet/dry temperature/pressure; capture/destruction; own assays; Q; N | Use matched species/compartment measured or verified actual technology factors; investigate closure, capture not destruction, residual not air emission. | kg | actual tests/emission periods | common manufacturing period | same configuration/site boundary | per 1 kg reference flow | sampling/flow/combined uncertainty |
| cp_volume | all | specific supplied gas/fluid | meter | gas/fluid identity; delivered volume; actual T/P or standard conditions; density; Q; N | Meter native volume at actual state: gas T/P, liquid temperature and composition state. Mass conversion uses that actual stream measured density, not generic factors. | m3 | each batch/continuous meter | common manufacturing period | same configuration/supply interface | per 1 kg reference flow | T/P/flow/density/calibration |
| cp_length | integration | actual supplied cable or eligible hose | length_meter | actual linear-product construction; cable branch conductor/insulation/sheath/voltage; hose branch material/reinforcement/internal diameter/pressure and gas-liquid compatibility; measured length m; cutting/installed/return; own linear density kg/m; stocks; Q; N | Reconcile native m against received/cut/installed length and return/stocks. If BOM mass is needed use that actual cable or hose measured linear density kg/m, not a generic copper-mass or energy proxy. | m | each cut/installation lot | common manufacturing period | actual configuration linear-product supply interface | per 1 kg reference flow | calibrated length/cut sheet/actual construction/linear density |

Raw-period protocol: N is accepted count of the same configuration, D the sum of calibrated accepted net masses, M=D/N. Each Q is the attributable common-period exchange including reject, rework and factory-test burden; first q_item=Q/N then q_ref=Q/D. Packaging/reject mass stays out of D. Retain actual original units, own composition, stocks and reaction records.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `direct_cohort_normalization` | all inventory rows | Divide each attributable native quantity by the sum of calibrated accepted net part masses of the same configuration and period; raw fields are retained in collection and quality tables. | Qattr; Dnet; cp_mass | per 1 kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | actual configuration | Cover all actual exchanges; separate make/buy/accessories/fills/test charges; gaps explicit | actual BOM/routes/suppliers |
| scrap_state | steel waste | Actual post-industrial steel scrap untreated within factory and transferred without further treatment; retain own composition/moisture/stocks/paired internal returns and receiving treatment interface, no generic recycling proxy. | actual scrap tickets/composition/state/receiver evidence |
| mass_period | cohort | Same configuration/period/acceptance, calibrated mass/stocks; no cross-family mean | calibration/period ledger |
| balance_uncertainty | physical balances | Own water fraction/density/assay/reactions/paired returns; compare combined uncertainty | measurement/sampling/reaction/allocation evidence |
| cohort_raw | cohort | Naccepted, Dnet and Qattr share configuration/period. Dnet sums calibrated accepted net masses; M=Dnet/Naccepted, q_item=Qattr/Naccepted, q_ref=Qattr/Dnet. Qattr includes rejects/rework/factory tests; Dnet excludes packing/rejects/consumed trial charge. Preserve each native numerator unit. | calibration/actual-period ledgers |
| species_sampling | emissions | Post-control species concentration times matched same-period gas/liquid flow and duration with T/P/wet-dry/unit corrections; fugitives independently measured. Unknown residual not air release, capture not destruction; each metal/chemical/water term uses own assay/water fraction/density/stocks/reactions/paired returns. | actual concentration/flow/period/state records |
| contained_assay | physical balances | Each input/product/scrap/sludge/liquid/release uses own measured gross mass times own assay and wet/dry basis; gross alloy/sludge is not contained metal. Every water term uses own water fraction and density at actual temperature, including product retention/reaction/evaporation/discharge/beginning-end stocks; internal returns pair/cancel. | term-specific measurement/assay/moisture/stocks |
| solvent_fates | solvent records | Record recovered return/product retention/captured liquid or media/demonstrated destruction/wastewater separately. Recovered/retained/captured and wastewater/media are non-air fates; capture not destruction. Investigate unknown residual, never turn it into air release. | actual material/sampling/abatement records |
| utility_residual | energy | Reconcile common-period imports plus actual generation minus exports/storage changes against fabrication/finish/integration/test/dispatch loads; shared row ONLY unassigned residual. Investigate negative residual against period/units/combined uncertainty without clipping. | calibrated subprocess/site meters |
| heat_return | thermal interface | Gross heat equals measured supply kg times own MJ/kg minus independently measured return kg times return own MJ/kg, with common datum and actual T/P. Gross supply deducts return once; already-net bill never deducts again. Physical steam/condensate mass separate from heat; supplier boiler fuel not onsite combustion. | separate supply/return metering/thermodynamic state/invoice |
| cohort | all inventory rows | Same configuration/common period Qattr includes attributable reject/rework/test; Naccepted counts accepted complete parts; Dnet sums calibrated accepted net masses including actual supplied installed part components/retained fills/accessories, excluding packing/rejects/consumed test charge. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Preserve each numerator native unit and explicit conversion; no mixed configurations. | calibrated net mass/supplied list/acceptance/cohort raw-period records |
| provider_gaps | links | Each actual upstream/treatment matches state/geography/period; unverified not complete footprint | direct records/substitution disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | dataset | Confirm dedicated part interface and host function for converter, ladle, ingot mould, casting machine or metal rolling mill, model/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| danieli-converter | handbook | New converter commissioned for AG der Dillinger Hüttenwerke; undated actual body; original snapshot2026-10-02UTC; https://www.danieli-corus.com/news/new-converter-commissioned-for-ag-der-dillinger-huttenwerke/ | Product architecture/category boundary; not factory recipe or quantitative default |
| primetals-copper | handbook | Continuous caster mold copper repair and coatings; undated actual body; original snapshot2026-10-02UTC; https://www.primetals.com/en/portfolio/solutions/continuous-casting/continuous-caster-mold-copper-repair-and-coatings/ | Product architecture/category boundary; not factory recipe or quantitative default |
| ues-cast-roll | handbook | Cast Steel Roll; ©2020 actual footer; https://www.uniones.com/wp-content/uploads/3-chrome_bur.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| ues-forged-roll | handbook | Forged roll cold mill work roll SHSS-II; ©2020 actual footer; https://www.uniones.com/wp-content/uploads/shss-ii.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| jr-ingot-parts | handbook | MS ingot mould and base plate products; undated actual body; original snapshot2026-10-02UTC; https://www.jrgroup.co.in/jr-ispat/ms-ingot-mould-ispat-products | Product architecture/category boundary; not factory recipe or quantitative default |
| simplex-foundry | handbook | Simplex Castings Annual Report 2018-19; Annual Report2018-19 actual cover and body; https://www.simplexcastings.com/public/asset/docs/investor/financials/ar/Simplex-Annual-Report-2018-19.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| primetals-roller | handbook | Eco Fast Roller; undated actual body; original snapshot2026-10-02UTC; https://www.primetals.com/en/portfolio/solutions/continuous-casting/eco-fast-roller/ | Product architecture/category boundary; not factory recipe or quantitative default |
| primetals-roll-manufacturing | handbook | Continuous caster roll manufacturing and reconditioning; undated actual body; original snapshot2026-10-02UTC; https://www.primetals.com/en/portfolio/solutions/continuous-casting/continuous-caster-roll-manufacturing-and-reconditioning/ | Product architecture/category boundary; not factory recipe or quantitative default |
| inducto-ladle | handbook | Ladle Slide Gate System 1QC and 2QC; undated actual body; original snapshot2026-10-02UTC; https://www.inductoconcastindia.com/ladle-slide-gate-system-1qc-%26-2qc.php | Product architecture/category boundary; not factory recipe or quantitative default |
| foseco-flow | handbook | Melt shop refractories and flow control; undated actual body; original snapshot2026-10-02UTC; https://www.foseco.com/en/products/refractory-linings-and-flow-control | Product architecture/category boundary; not factory recipe or quantitative default |
| foseco-nozzles | handbook | Stoppers and nozzles for iron and steel foundries; undated actual body; original snapshot2026-10-02UTC; https://www.foseco.com/en/products/refractory-linings-and-flow-control/stoppers-and-nozzles-for-iron-and-steel-foundries | Product architecture/category boundary; not factory recipe or quantitative default |
| jrc-smithery-foundry | handbook | Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry; 2024 final BREF; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| jrc-metalworking | handbook | Best Environmental Management Practice in the Fabricated Metal Products sector; EUR 30025 EN, 2020; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44320 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
