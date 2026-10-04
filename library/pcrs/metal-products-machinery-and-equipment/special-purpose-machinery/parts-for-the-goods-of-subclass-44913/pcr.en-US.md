---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44913
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Dedicated parts for pulp, paper and paperboard making, finishing and converting machinery

## 1. Scope and Applicability

This candidate covers the FULL dedicated parts category for machinery making pulp of fibrous cellulosic material, making or finishing paper/paperboard and making up/converting pulp, paper or paperboard, except bookbinding. Review actual host principal function, part geometry and supplied assembly interface across wood/nonwood/recovered fibrous pulping, stock preparation, paper forming/pressing/drying/finishing and paper/paperboard conversion. HS8439.91/.99 and8441.90 are boundary evidence, not a substitute for the actual item review. A complete host, bookbinding/printing part, independent general dryer, motor/pump/bearing or packaging machine part retains its own product boundary. Sources: `un-cpc-44941`; `andritz-cooking`.

ANDRITZ actual screening supply describes baskets and rotors for recycled, chemical and mechanical pulp and approach flow; rebuild/rechroming and foil/bearing-housing/seal repair are distinct refurbishment/service interfaces. Refiner sources describe matched rotor/stator plate families, bar/groove geometry and installation of segments ground to a common circle thickness without mixing sets. The installation table316/A4-70 is BOLT material, not refiner-plate alloy. Muncy's historical foundry/plate manufacture supports a conditional foundry route, not a present-day universal alloy, charge, yield or factory output. Actual newly cast part production, bought finished plates and used-part refurbishment have separate starting states. Sources: `andritz-screen`; `andritz-refiner`; `andritz-lowplates`; `andritz-muncy`.

Voith actual roll-cover portfolio distinguishes forming/press, sizing/coating and reeling/winding interfaces with rubber, polyurethane, composite resin, hard-metal and thermal-coating alternatives. BHS describes proprietary steel corrugating rolls and tungsten-carbide versus chrome coating and finishing. Actual roll shell, cover, bond layer and complete covered roll supply are different completion states. Do not impose one steel recipe, PU chemistry, cover mass/thickness, roughness, chromium bath, tungsten binder or number of regrinds. Purchased completed covers/rolls embed their manufacture once; local casting, machining, formulation, bonding, cure, spraying or grinding requires the actual raw inputs and operations. Sources: `voith-covers`; `bhs-rolls`; `jrc-smithery-foundry`.

Voith's actual doctor-blade production describes glass/carbon-fibre and proprietary resin alternatives, thermal coating/ceramic tips and geometry processing. An independently supplied blade/tool or ceramic/glass/material article is not automatically a dedicated machinery part; review the complete supplied article and material-specific boundary. Valmet's actual QuickChange top-slitter-holder passage describes holder, brake/bearing/lockring, guard/adapters and safety interlocks. A dedicated assembled holder may qualify separately from its independently supplied cutting blade. Development rigs, repair/modernisation and customer operating performance do not establish default new-part production tests or quantities. Sources: `voith-doctors`; `valmet-winding`.

Voith forming, press and dryer clothing descriptions support woven yarns, base cloth/batt/elastomer, seam and spiral alternatives. Independently supplied textile fabrics/felts remain material-specific products, even if shaped for a paper machine; they are not automatically this reference. A genuinely supplied composite/mechanical part assembly is reviewed on its actual construction and interface. The finite cards are conditional measured anchors, not an exhaustive universal BOM: extend every actual alloy, bond/cover constituent, dedicated component, qualification medium, waste and release atomically. Factory trial pulp/paper/board, water/gas and consumed lubricant enter attributable Q only when actual part acceptance consumes them; they never enter accepted net part mass Dnet. Customer mill recipe, production throughput and downstream operating replacement demand are outside part manufacture. Spare availability does not prove shipment; initial fill and accessories require actual supply evidence. Sources: `voith-fabrics`; `un-cpc-44941`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44913 |
| classification_refs | CPC3.0:44941 |
| covered_products | Dedicated parts across machinery for making pulp of fibrous cellulosic material, making/finishing paper or paperboard, and making up/converting pulp/paper/paperboard except bookbinding |
| excluded_products | Complete hosts, customer pulp/paper production, general hardware, bookbinding/printing parts, independently classified textile clothing, material articles and cutting/grinding tools |
| representative_product | Actual finished dedicated part of one supplied configuration; no representative mass |
| production_route | Actual forming/heat treatment/machining/joining/grinding/cleaning/conditional coating, assembly and part acceptance; make/buy and new/reconditioned starting states separated |
| market_state | Actual accepted dedicated part or declared subassembly with evidenced included fills/accessories; not complete host or consumed trial load |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and supply dedicated parts across fibrous pulping, paper/paperboard making, finishing and converting interfaces except bookbinding |
| How much | 1 kg accepted net part mass of the same supplied configuration |
| How well | Meets declared dedicated interface/material/function/safety and actual part acceptance requirements |
| How long or cycle | One manufacturing/delivery period; no default service life |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Dedicated parts for pulp paper paperboard making finishing and converting machinery; UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | dedicated part and fibrous pulping/stock preparation/paper-paperboard forming/pressing/finishing/converting host principal function; model/drawing/revision/dedicated interface; forming/heat treatment/machining/finish/mechanical and relevant water/gas architecture; independent tool/textile/ceramic/glass/material and general packaging boundaries; new/reconditioned actual starting state; actual material/formulation/completion state; make-buy; supplied accessory/retained initial-fill evidence; test media; accepted calibrated net mass/count; period/site; native units/providers; waste receiver/emitted species/uncertainty |

Declare all qualifiers; normalize directly by accepted net part mass of the same configuration and period. Marketed host capacity and customer pulp/paper/paperboard throughput mass cannot replace this denominator.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass | kg | Reference is 1 kg accepted net part; cp_mass measures same-configuration/common-period net masses, excluding complete host, packing/rejects/consumed test media. |
| `physical_basis` | material/water/species | Mass | kg | Each term uses own assay/moisture/wet-dry basis/density at actual temperature/stocks/reactions/paired returns; gross mass is not contained element. |
| `native_interfaces` | energy/gas/length | Delivered energy/volume/length | MJ; m3; m | Preserve native units; electricity 1 kWh=3.6 MJ; gas uses actual T/P or declared standard state and stream-specific density. Cable/hose length uses actual construction own kg/m only if mass conversion needed. Heat supply/return each own mass times own enthalpy/common datum; distinguish gross/already-net, return deducted once. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include actual receipt, site fabrication, mechanical/control assembly, integration, factory test/rework, common services, waste and packing through accepted release. |  |
| `make_buy` | supplier_interface | For each component choose its actual make/buy state: complete bought screen basket/rotor, matched refiner plate, roll shell/cover or dedicated holder assembly includes embedded inputs once; own fabrication uses actual feedstocks and operations instead. Charge only subsequent site work. Pair internal transfers; do not list site-made intermediates as purchased imports. |  |
| `factory_use` | production | Include actual factory dimensional/material/hardness/motion and actually applicable safety acceptance and documented manufacturing qualification trials, actual test media, cleaning water, electricity and consumed lubricant. Recovered trial materials uses measured returns and stocks. Customer pulp, paper or paperboard and downstream plant operation are not dedicated part manufacturing output. |  |
| `bom_extension` | route | Cards are specific conditional anchors, not universal recipes. Audit actual BOM, formulations, test media, packaging, fuels, waste and species. Add each missing atomic actual exchange; document not_applicable only with absence evidence, unknown differs from zero. Unknown actual alloy, heat-treatment medium, coating, adhesive or trial-media formulation requires actual supplied-state evidence. |  |
| `upstream` | links | Link supplier production and transport at actual grade, state, delivery geography/voltage and period; external treatment after measured waste transfer is distinct from site emissions. Without completed providers this factory package is not a complete cradle-to-gate result. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual input supplied grade/state/delivery interface |
| starting_condition_role | Factory receipt boundary |
| product_classification_scope | Dedicated parts across machinery for making pulp of fibrous cellulosic material, making/finishing paper or paperboard, and making up/converting pulp/paper/paperboard except bookbinding |
| recursive_input_rule | Same-category bought precursor upstream once; subsequent site operations only; pair/cancel internal transfers |
| upstream_dataset_requirement | Actual supplier/receiver grade/state/formulation/geography/technology/period; gaps explicit |
| disclosure | Actual part supplied list/make-buy/fill-accessory versus trial-media roles/conditional exclusions/denominator/uncertainty |

### Part architecture and supplied-interface matrix

| Configuration | Actual interface | Limits |
| --- | --- | --- |
| Pulping/stock-preparation part | Actual dedicated host geometry, pressure-screen basket/rotor or refiner matched plate interface | Whole host and general pump separate; bolt grade not plate alloy |
| Paper forming/press/drying part | Actual dedicated roll shell, cover or supplied mechanical/composite assembly | Standalone fabric/felt, ceramic/glass article reviewed separately; no universal grade |
| Paper finishing part | Actual coater/sizing/calender/doctor interface and supplied part construction | Independent blade/tool not automatically part; resin/coating chemistry actual |
| Paper/paperboard converting part | Actual winder slitter-holder or corrugating roll interface and compatible host | No bookbinding/printing or generic packaging proxy; blade and holder separate |
| New or refurbished supply | Actual drawing/revision, raw or used starting state, make/buy and final acceptance | Service not new-part recipe; replacement listing not shipment |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | Actual dedicated part fabrication | conditional | Only actual casting/forming/machining/joining/heat treatment; complete bought inputs bypass embedded manufacture | foreground | per 1 kg reference flow |
| `finish` | Actual precision finishing cleaning and surface treatment | conditional | Only actual grinding, cleaning and coating/cover/bond route and formulation | foreground | per 1 kg reference flow |
| `integration` | Actual supplied part or assembly completion | conditional | Actual supplied dedicated components, assembly and retained fill/accessories, not whole host | foreground | per 1 kg reference flow |
| `test` | Part acceptance and attributable rework | required | Actual dimensions/material/fit and applicable functional/safety qualification; documented trial media outside Dnet | foreground | per 1 kg reference flow |
| `dispatch` | Accepted part release and packing | required | Calibrated accepted net part mass and actual separate shipment packing | foreground | per 1 kg reference flow |
| `services` | Residual utilities and outgoing streams | conditional | Unassigned common-period utility residual and actual wastes/emissions, no customer mill production | foreground | per 1 kg reference flow |

### Process: Actual dedicated part fabrication (`fabrication`)

Only actual casting/forming/machining/joining/heat treatment; complete bought inputs bypass embedded manufacture。

#### Inputs

##### Product flows

###### Non-alloy steel plate (`steel`)

Only actual non-alloy steel plate supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

- Selected flow: Non-alloy steel plate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Cold-rolled stainless steel sheet (`stainless`)

Only actual cold-rolled stainless steel sheet supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

- Selected flow: Cold-rolled stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Alloy steel billet (`alloy_billet`)

Only actual alloy steel billet supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual compatible alloy steel primary/semi-finished billet with matching declared chemistry, shape and supplied steel-production/provider interface; no alloy grade, billet dimensions or forging completion assumed.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Foundry pig iron (`pig_iron`)

Only actual foundry pig iron supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual supplied foundry pig iron in compatible primary form, with own alloy carbon/impurity assay and supplier. Mass reference internal1 measures whole pig iron; CAS7439-89-6 and approximateFe formula do not make pig iron pure elemental iron or supply a carbon fraction.

- Selected flow: Pig iron `a636ed9e-f90a-48cb-a180-c75b1fc92cf1`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: jrc-smithery-foundry; andritz-muncy

###### Ferro-silicon alloy (`ferrosilicon`)

Only actual ferro-silicon alloy supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual supplied ferro-silicon alloy matching measuredSi/Fe/other assay, grade, form and actual at-plant provider. No particular silicon fraction, universal charge or foundry recipe is inferred.

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

###### Silica foundry sand (`sand`)

Only actual silica foundry sand supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

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

###### Natural bentonite clay (`bentonite`)

Only actual natural bentonite clay supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual natural bentonite clay CAS1302-78-9 from the compatible mining-site supply interface; subsequent actual drying/milling/preparation is separately collected when performed. It is not a finished formulated foundry binder or wine/drilling preparation.

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

###### Uncoated steel welding wire (`weldwire`)

Only actual uncoated steel welding wire supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

- Selected flow: Uncoated steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Gaseous argon (`argon`)

Only actual gaseous argon supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

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

###### Gaseous natural gas (`naturalgas`)

Only actual gaseous natural gas supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

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

###### Delivered alternating-current electricity (`fabrication_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Actual precision finishing cleaning and surface treatment (`finish`)

Only actual grinding, cleaning and coating/cover/bond route and formulation。

#### Inputs

##### Product flows

###### Water-miscible metalworking fluid concentrate (`coolant`)

Only actual water-miscible metalworking fluid concentrate supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

- Selected flow: Water-miscible metalworking fluid concentrate
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Bonded alumina grinding wheel (`abrasive`)

Only actual bonded alumina grinding wheel supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium.

- Selected flow: Bonded alumina grinding wheel
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Only actual isopropanol supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual matching supplied subtype, composition, completion state, geography and provider interface, documented for this configuration.

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

Only actual tap water supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

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

Only actual deionised water supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual deionised supplied water with compatible purity and provider; no municipal water, arbitrary process water or universal plating-water default.

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

###### Epoxy powder coating (`powder`)

Only actual epoxy powder coating supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Actual dry polymer powder formulation, own resin/additive grade, reclaim and cure; not a default polymer type.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Raw tungsten carbide powder (`wc`)

Only actual raw tungsten carbide powder supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual raw tungsten-carbide powder used in evidenced onsite spray-feed preparation with compatible chemistry, powder form and GLO-at-plant provider. Finished formulated thermal-spray powder, WC-Co mixture or carbide part is a different supply; no binder/additive recipe is assumed.

- Selected flow: Tungsten carbide powder `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: bhs-rolls

###### Delivered alternating-current electricity (`finish_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Actual supplied part or assembly completion (`integration`)

Actual supplied dedicated components, assembly and retained fill/accessories, not whole host。

#### Inputs

##### Product flows

###### Finished pulp pressure-screen basket (`screenbasket`)

Actual supplied finished pulp pressure-screen basket with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished pulp pressure-screen basket
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-screen

###### Finished pulp-screen rotor (`screenrotor`)

Actual supplied finished pulp-screen rotor with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished pulp-screen rotor
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-screen

###### Finished matched pulp-refiner plate segment (`refinersegment`)

Actual supplied finished matched pulp-refiner plate segment with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished matched pulp-refiner plate segment
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: andritz-refiner; andritz-lowplates

###### Finished paper-machine press-roll shell (`rollshell`)

Actual supplied finished paper-machine press-roll shell with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished paper-machine press-roll shell
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-covers

###### Finished polyurethane paper-machine roll cover (`pucover`)

Actual supplied finished polyurethane paper-machine roll cover with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished polyurethane paper-machine roll cover
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-covers

###### Finished vulcanized rubber paper-machine roll cover (`rubbercover`)

Actual supplied finished vulcanized rubber paper-machine roll cover with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Finished vulcanized rubber paper-machine roll cover
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: voith-covers

###### Complete dedicated paper-machine doctor-holder assembly (`doctormodule`)

Actual supplied complete dedicated paper-machine doctor-holder assembly with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use. The actual supplied holder assembly needs its own drawing/interface evidence; the doctor-blade source does not prove holder construction.

- Selected flow: Complete dedicated paper-machine doctor-holder assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete paper-winder top-slitter holder (`slitterholder`)

Actual supplied complete paper-winder top-slitter holder with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use.

- Selected flow: Complete paper-winder top-slitter holder
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: valmet-winding

###### Finished dedicated paper-machine forming foil assembly (`formingfoil`)

Actual supplied finished dedicated paper-machine forming foil assembly with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use. This conditional physical assembly requires its own foreground drawing/material-specific boundary proof; the retained sources do not establish a particular forming-foil product.

- Selected flow: Finished dedicated paper-machine forming foil assembly
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete ball or roller bearing (`bearing`)

Actual supplied complete ball or roller bearing with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use. Only actual supplied complete ball/roller bearing, compatible material, geometry and actual supplier; not shaft, housing or roller itself.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Complete alternating-current motor (`motor`)

Actual supplied complete alternating-current motor with dedicated drawing/host fit or declared assembly inclusion, completion/material and supplier evidence. Bought completion embeds its manufacture once; own fabrication is collected instead. Independently classified material/tool/textile and generic hardware interfaces do not become the reference simply by paper-machine use. Only actual supplied industrial AC induction motor fitting CPC46112 interface and actual voltage/power/type; generic entry does not determine winding, magnet or metal recipe. Bundled drive counted once.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Petroleum lubricating oil (`oil`)

Only actual petroleum lubricating oil supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual petroleum-derived lubricating oil supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil, consistent with the CPC333 supplied interface, matching actual grade/additives, delivered state and provider; do not invent formulation fractions. Native Mass/kg; separate installed retained fill from actual factory consumption, losses and used contaminated Waste. Calorific namefield does not make oil an Energy flow or assume combustion.

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

###### Insulated copper power cable (`cable`)

Only actual insulated copper power cable supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual insulated copper <=1000V power cable with extruded insulation/sheath. Native Length m; own actual cable linear density kg/m if a separate BOM mass conversion is needed.

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

###### Mineral hydraulic oil (`hydraulic`)

Only actual mineral hydraulic oil supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual evidenced mineral-petroleum-base compatible hydraulic system/fill and supplier formulation, supplied as a petroleum fraction or a verified preparation containing at least70wt% petroleum oil consistent with the CPC33380 interface; arbitrary synthetic or high-water fluid is not established by this identity; mineral/synthetic possibilities do not establish oil presence on every machine. Native Volume/m3, own density at actual temperature for retained net mass, separate consumed/drained losses.

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

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

Actual dimensions/material/fit and applicable functional/safety qualification; documented trial media outside Dnet。

#### Inputs

##### Product flows

###### Bleached kraft wood pulp factory trial (`pulp_trial`)

Only actual documented part-factory qualification consumes bleached kraft wood pulp factory trial, with own supplied composition/grade/state, moisture, metered issue, recovery and stocks. Include attributable trial burden in Qattr, exclude consumed media from Dnet; no customer mill production or R&D default. Only actual compatible finished non-dissolving chemical wood pulp, with the actual bleached kraft trial grade, wood fibre origin, wet/dry basis and supplier verified. No dissolving-grade, recovered-paper, mechanical, nonwood or customer-production proxy. Consumed documented part-factory qualification only, outside part Dnet.

- Selected flow: Chemical wood pulp, other than dissolving grades `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Uncoated woodfree paper web factory trial (`paper_trial`)

Only actual documented part-factory qualification consumes uncoated woodfree paper web factory trial, with own supplied composition/grade/state, moisture, metered issue, recovery and stocks. Include attributable trial burden in Qattr, exclude consumed media from Dnet; no customer mill production or R&D default. Only actual finished uncoated woodfree graphic paper supplied as the compatible converting input, with actual web grade, width, moisture and provider verified. No printed sheet, cigarette paper, coated paper or arbitrary pulp proxy; consumed documented factory trials only, outside part Dnet.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_material; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources:

###### Unprinted corrugated paperboard factory trial (`board_trial`)

Only actual documented part-factory qualification consumes unprinted corrugated paperboard factory trial, with own supplied composition/grade/state, moisture, metered issue, recovery and stocks. Include attributable trial burden in Qattr, exclude consumed media from Dnet; no customer mill production or R&D default. Actual C/E/F corrugated fibreboard with fibre≥80% and evidenced recycled-content construction; supplied board not complete crate.

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

###### Tap water factory qualification (`test_water`)

Only actual documented part-factory qualification consumes tap water factory qualification, with own supplied composition/grade/state, moisture, metered issue, recovery and stocks. Include attributable trial burden in Qattr, exclude consumed media from Dnet; no customer mill production or R&D default. Actual tap-water supply and provider; industrial or deionised water is separate. Own measured water fraction/density and stock/returns.

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

###### Gaseous nitrogen factory qualification (`nitrogen`)

Only actual documented part-factory qualification consumes gaseous nitrogen factory qualification, with own supplied composition/grade/state, moisture, metered issue, recovery and stocks. Include attributable trial burden in Qattr, exclude consumed media from Dnet; no customer mill production or R&D default. Only actual GLO at-plant protective-atmosphere gaseous nitrogen compatible with documented factory part qualification, actual purity/state and supplier; not universal bottled/liquid gas, vent loss or customer production consumption.

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

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

### Process: Accepted part release and packing (`dispatch`)

Calibrated accepted net part mass and actual separate shipment packing。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`dispatch_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

Actual corrugated fibreboard packing issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Actual C/E/F corrugated fibreboard with fibre≥80% and evidenced recycled-content construction; supplied board not complete crate.

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

Actual ldpe packing foil issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Only actual noncellular, nonselfadhesive, nonreinforced, nonlaminated unsupported PE-LD foil; other polymer/supported film separately resolved.

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

Actual wooden euro pallet issued for shipment, measured independently of accepted net part mass; document composition, stocks, returns and actual reuse, without default box dimensions or reuse count. Only actual EURO wooden pallet; issue/returns/reuse documented, no default reuse count.

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

###### Finished dedicated pulp paper and paperboard machinery part (`reference_product`)

Actual accepted dedicated pulp/paper/paperboard machinery part of one supplied configuration, calibrated net mass including evidenced supplied components, retained fills and accessories. Exclude whole hosts, independent material/tool/textile articles, arbitrary spare bundles, packing, rejects and consumed trial media; no catalogue mass or customer mill output denominator.

- Selected flow: Finished dedicated pulp paper and paperboard machinery part
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: un-cpc-44941

##### Waste flows

##### Elementary flows

### Process: Residual utilities and outgoing streams (`services`)

Unassigned common-period utility residual and actual wastes/emissions, no customer mill production。

#### Inputs

##### Product flows

###### Delivered alternating-current electricity (`services_electricity`)

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual user-side 1–35kV alternating-current consumption mix and matching actual provider/geography/period; independent voltage transformation or a different low-voltage/geographical supply needs its own identity.

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

Actual metered attributable energy for this process in the common manufacturing period, including rejects/rework and evidenced factory trials. Shared services carries only the unassigned residual after process meters, generation, exports and storage reconciliation; no purchased heat/provider fuel duplication. Only actual compatible CN at-plant natural-gas industrial heat Energy delivery and factory provider/period. Independently meter supply/return gross/net thermodynamic state; supplier fuel stays upstream, not site combustion.

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

Only actual compressed air supplied or consumed by the selected part-factory route, with own grade/composition/form/completion/provider and measured issue/returns/stocks. No universal recipe; distinguish retained part fill from actual consumed processing medium. Only actual compatible supplied compressed air with own delivery T/P/standard state, purity and supplier; native Volume/m3. Onsite compressor electricity and bought compressed-air provider burden cannot be counted twice.

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

Actual measured outgoing untreated steel machining scrap transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Only actual untreated industrial steel machining/forming scrap at plant, leaving without further treatment; own composition, moisture/contamination, stocks, paired internal returns and actual receiver route. No prepared secondary steel or avoided credits.

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

###### Segregated copper-metal cable offcut waste (`copper_waste`)

Actual measured outgoing segregated copper-metal cable offcut waste transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Only actual segregated copper-metal cable offcuts matching own Cu assay/moisture/contamination/stocks and measured outgoing receiver interface; selected hydrometallurgical route requires the actual compatible receiver. Entire insulated cable mixture is not copper metal; collect polymer and other residue separately if actual. No avoided credit.

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

###### Factory-trial pulp solid residue (`pulp_waste`)

Actual measured outgoing factory-trial pulp solid residue transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Actual solid pulp residue is not a recovered-pulp Product or assumed paper-production sludge.

- Selected flow: Factory-trial pulp solid residue
- Flow property / unit: Mass / kg
- Amount rule: Collect attributable quantity with cp_waste; normalize by the accepted net part mass of the same configuration and period per 1 kg reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources:

###### Factory-trial paper offcut waste (`paper_waste`)

Actual measured outgoing factory-trial paper offcut waste transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Only actual measured outgoing factory-trial paper offcuts compatible with unspecified recovered paper CPC39249, own composition/moisture/contamination/stocks and receiver route; no customer paper throughput, internal-return double count or avoided credit.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
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

Actual measured outgoing used lubricating oil waste transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Only actual used contaminated mineral lubricant Waste transfer mass; measured own water/contamination and receiver treatment, no disposal or recycling default.

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

###### Industrial cleaning wastewater (`wastewater`)

Actual measured outgoing industrial cleaning wastewater transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits.

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

###### Dry epoxy-powder overspray waste (`powder_waste`)

Actual measured outgoing dry epoxy-powder overspray waste transfer from part manufacture or documented factory trial; record own composition, moisture, contamination, stocks, paired internal returns and actual receiver route. Physical waste transfer is separate from elementary emission; no avoided credits. Only actual dry powder-coating overspray waste matching supplied waste type; wet sludge or captured liquid/filter media separately needs exact identity and assay.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
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

Actual independently measured fossil carbon dioxide to ordinary air after control with species/size matched concentration, same-period flow/duration and temperature/pressure/wet-dry basis or measured fugitives. Captured media, wastewater and unexplained residual remain separate fates. Only actual measured fossil-origin CO2 to ordinary unspecified air; not biogenic, indoor, water or long-term release.

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

Actual independently measured fossil carbon monoxide to ordinary air after control with species/size matched concentration, same-period flow/duration and temperature/pressure/wet-dry basis or measured fugitives. Captured media, wastewater and unexplained residual remain separate fates. Only actual measured fossil-origin CO to ordinary unspecified air; carbon closure alone cannot determine CO.

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

Actual independently measured water vapour to ordinary air after control with species/size matched concentration, same-period flow/duration and temperature/pressure/wet-dry basis or measured fugitives. Captured media, wastewater and unexplained residual remain separate fates. Only independently measured actual water-vapour release to ordinary unspecified air; retained cooling water, wastewater and unrelated residual are not air.

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

Actual independently measured isopropanol to ordinary air after control with species/size matched concentration, same-period flow/duration and temperature/pressure/wet-dry basis or measured fugitives. Captured media, wastewater and unexplained residual remain separate fates. Only actual emitted IPA CAS67-63-0 to ordinary unspecified air, matched post-control sampling; not indoor, soil, liquid capture or long-term release.

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

Actual independently measured whole pm10 particulate to ordinary air after control with species/size matched concentration, same-period flow/duration and temperature/pressure/wet-dry basis or measured fugitives. Captured media, wastewater and unexplained residual remain separate fates. Only actual independently measured whole PM10 particle release to ordinary unspecified air, including its fine fraction, using size-resolved same-period post-control concentration/flow/state and measured fugitive basis. PM2.5–PM10 coarse-only fraction, soot, total unspecified dust or captured powder must not replace this identity; prevent overlap if a fine fraction is separately reported.

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
| dedicated_scope | reference product | Verify actual pulp/paper/paperboard host principal function and dedicated part drawing/interface across fibrous pulping, stock preparation, forming/pressing/finishing/converting. Review standalone material/tools/textile clothing/ceramic/glass and general hardware separately; paper-factory use alone insufficient. Declare new/refurbished starting state; proprietary alloys/resins/coatings and bolt-only material tables do not establish universal part grade. | actual drawings/supply list/host-function primary evidence/acceptance |
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
| `identity` | dataset | Confirm dedicated part interface and pulp/paper/paperboard host principal function across pulping/stock preparation/forming/pressing/finishing/converting architecture, and independent material/tool/general packaging boundaries, model/drawing/revision, delivered configuration and activated architecture. Every actual exchange needs matching identity/property/unit/provider; absent, zero and unknown remain distinct. |  |
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
| andritz-screen | handbook | Screen baskets and rotors; undated actual technical body; retained snapshot2026-10-03; https://www.andritz.com/products-en/group/pulp-and-paper/engineered-wear-products/screening-baskets-rotors | Product architecture/category boundary; not factory recipe or quantitative default |
| andritz-refiner | handbook | Low consistency refiner plates installation instructions; Copyright ANDRITZ AG2012; PW.inst-locoDisc.01.eng.8.12 actualfooter; https://www.andritz.com/resource/blob/231426/d2e8606cd767805c8563aa810d1ecf37/pp-service-refinerplatesfillings-installation-instruction-en-data.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| voith-covers | handbook | Roll covers; undated actual technical body; retained snapshot2026-10-03; https://www.voith.com/corp-en/papermaking/roll-covers.html | Product architecture/category boundary; not factory recipe or quantitative default |
| voith-doctors | handbook | Theresienfeld production facility for customized doctor blades; undated actual technical body; retained snapshot2026-10-03; https://www.voith.com/corp-en/industry-solutions/papermaking/nextlevel/theresienfeld-the-voith-production-facility-for-customized-doctor-blades.html | Product architecture/category boundary; not factory recipe or quantitative default |
| valmet-winding | handbook | Improving Winder Safety and Capacity; Published April30,2015 actualheader; Improving Winder Safety and Capacity; https://www.valmet.com/globalassets/media/downloads/white-papers/process-improvements-and-parts/wpp_windimpvmts.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| bhs-rolls | handbook | Material and coating corrugating rolls; undated actual technical body; retained snapshot2026-10-03; https://www.bhs-world.com/en/portfolio/corrugating-rolls/material-coating | Product architecture/category boundary; not factory recipe or quantitative default |
| voith-fabrics | handbook | Forming press and dryer fabrics; undated actual technical body; retained snapshot2026-10-03; https://www.voith.com/corp-en/papermaking/forming-press-dryer-fabrics.html | Product architecture/category boundary; not factory recipe or quantitative default |
| andritz-muncy | handbook | History of ANDRITZ Inc Muncy; undated actual technical body; retained snapshot2026-10-03; https://www.andritz.com/pulp-and-paper-en/locations/muncy-usa/history-of-andritz-inc-muncy-pulp-and-paper | Product architecture/category boundary; not factory recipe or quantitative default |
| andritz-lowplates | handbook | Low-consistency refiner plates; undated actual technical body; retained snapshot2026-10-03; https://www.andritz.com/products-en/pulp-and-paper/engineered-wear-products/low-consistency-refiner-plates-lemaxx | Product architecture/category boundary; not factory recipe or quantitative default |
| andritz-cooking | handbook | A-ConApex cooking technology; undated publisher page; HTML snapshot 2026-10-02; https://www.andritz.com/products-en/power-to-x/pulp-and-paper/pulp-production/a-conapex-technology | Product architecture/category boundary; not factory recipe or quantitative default |
| jrc-smithery-foundry | handbook | Best Available Techniques (BAT) Reference Document for the Smitheries and Foundries Industry; 2024 final BREF; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2024-12/SF_BREF_2024-bref.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
| un-cpc-44941 | official_guidance | Central Product Classification Version3.0 Explanatory Notes; Version3.0 30 June2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product architecture/category boundary; not factory recipe or quantitative default |
