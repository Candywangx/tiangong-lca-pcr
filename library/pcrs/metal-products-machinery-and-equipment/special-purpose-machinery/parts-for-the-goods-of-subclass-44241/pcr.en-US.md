---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44241
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Dedicated parts for electric soldering, brazing, welding and metal/carbide hot-spraying apparatus

## 1. Scope and Applicability

This PCR covers manufacture of independently supplied dedicated parts of electrically operated soldering, brazing or welding machinery AND electric machines/apparatus for hot spraying metals or sintered metal carbides. It includes applicable resistance-welding holders/current paths, arc-welding contact/gas/guide parts, soldering heaters/tips/holders, joining-specific induction work coils, dedicated power/control/cooling/feed parts and electric thermal-spray nozzles/electrodes/injectors/drive parts. Scope follows each part’s documented dedicated host and actual principal function, not one convenient tip or material. A separately supplied complete host belongs to the complete-apparatus category; generic transformers, cables, bearings and electronic components do not become dedicated parts by entering a BOM. Nonelectric joining or gas-surface-treatment dedicated parts are adjacent; ordinary cold paint/powder sprayers, cutting-only hardware, unrelated furnace coils and customer treated workpieces are excluded unless reviewed into the actual scope. Welding/soldering fillers and spray powders/wires are consumed media, not dedicated reference parts.

Manufacturer examples show materially different architectures. TUFFALOY holders contain cooling-water tubes and applicable ground/polished Class2 or nickel-plated copper bodies; Castolin lists Cu/CuCrZr contacts, steel/PTFE guides and ceramic distributors. Ambrell makes shaped copper/insulated work coils and actually tests manufactured coils, but an induction coil must specifically serve joining for this scope. Metco SF0013.1 describes water-cooled copper plasma anodes and optional tungsten linings, not a universal lining or life factor. HAKKO copper/iron/solder/chrome construction explicitly excludes RED, U, PORTABLE, MATCHLESS and JUNIOR; each actual tip model/finish remains separate. Replacement catalogues establish availability/compatibility only, not whole-host shipment or the part factory’s ingredients, coating bath, mass, yield or trial recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-for-the-goods-of-subclass-44241 |
| classification_refs | CPC 3.0 44255; exact semantic scope |
| covered_products | Independently supplied dedicated electric solder/braze/weld and electric metal/carbide hot-spray parts with reviewed host compatibility |
| excluded_products | Complete hosts; nonelectric/gas-only dedicated parts; generic electrical/mechanical goods; welding fillers/spray feed; ordinary paint sprayers; treated workpieces |
| representative_product | One documented accepted dedicated part configuration; examples do not narrow full category |
| production_route | Actual local fabrication, component assembly, surface finish and acceptance/testing, or disclosed bought completed-part boundary |
| market_state | Finished accepted independently supplied part at factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the declared dedicated electric-joining or electric hot-spray part |
| How much | 1 kg accepted configured finished part net mass |
| How well | Actual exact part number, host function/compatibility, supplied completion and documented dimensional/electrical/thermal/leak/feeding acceptance as applicable |
| How long or cycle | One matched production/acceptance period; no assumed customer replacement lifetime |
| reference_flow_link | finished_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts for the goods of subclass 44241 `6f6ed072-afd5-4b25-89d5-cf849f542440` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact part/model/configuration and dedicated host principal electric joining/hot-spray function; resistance/arc/solder/induction/plasma/arc-spray mechanism; supplied completion/interfaces and included components/fills; metal/polymer/ceramic/chemical grades and dopants/coatings; actual make/buy/local operations; accepted net masses and BOM; site/period/provider/transport/receiver; measured actual factory tests/rejects/rework; native units, assay/state conversion, allocation and identity gaps |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted configured finished part net mass. Collect calibrated same-configuration accepted masses through cp_mass; exclude packing, additional spare stock, rejects and consumed factory trial media. |
| native_amount | all inventory rows | actual native property | native unit | Preserve native numerator units including supplied cable Length/m, gas Volume/m3 and Energy. Own same-construction cable kg/m and own gas temperature/pressure/humidity/density only when needed for measured conversion; electricity 3.6MJ/kWh. Chemical solution mass is not contained species mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received stock/chemicals or compatible completed bought parts/components; document exact completion at each interface |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Full dedicated electric joining AND electric metal/carbide hot-spray part boundary |
| recursive_input_rule | Bought same-category completed part embeds its upstream manufacture once; replace it with own stock/operations only when actually manufactured locally. Pair/cancel internal transfers. |
| upstream_dataset_requirement | Each external input needs compatible upstream state/grade/native unit/provider/geography and disclosed transport/treatment interface |
| disclosure | Document make/buy and supplied BOM, local coating/test/fill/packing boundaries and all evidence gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_scope | A part must be dedicated to a reviewed electric solder/braze/weld or electric metal/carbide hot-spray host. Generic purchased goods and consumable feed are inputs only, not automatically reference parts; auxiliary controls do not establish principal heating function. | cpc |
| boundary_makebuy | Use actual complete bought modules once, excluding their embedded stock and manufacture. Actual local manufacture uses separately queried ingredients/operations; partial bought states disclose remaining work. Replacement listing never proves included host or spare shipment. | cpc; hakko-parts; hakko-tip; metco-nozzles; metco-spares; castolin-parts; resistance-parts; coil-actual |
| boundary_test | Include attributable observed part manufacture, finishing, failed/repeated factory tests and dispatch. Separate retained shipped components/fills from consumed trial coupons/fillers/gases/coolant and customer lifetime operation; leak-only inspection invents no spraying/welding recipe. | coil-actual; metco-nozzles; hakko-tip |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Dedicated conductive and structural part fabrication | conditional | actual local cutting/forming/machining/heat treatment only | foreground | per 1 kg reference flow |
| assembly | Dedicated part assembly | conditional | actual configured independent part and exact make/buy interfaces | foreground | per 1 kg reference flow |
| finish | Part cleaning and local surface finishing | conditional | actual own bath/coat route; bought finished coating upstream | foreground | per 1 kg reference flow |
| test | Actual factory inspection and functional trials | conditional | actual electrical/leak/dimensional/thermal/feeder trial only; include reject/rework | foreground | per 1 kg reference flow |
| services | Unassigned shared services | conditional | only common-period residual after assigned process loads | foreground | per 1 kg reference flow |
| dispatch | Accepted part dispatch and packaging | conditional | accepted identical configuration net part and separate packing | foreground | per 1 kg reference flow |
| residues | Actual residues and direct emissions | conditional | actual measured transfers and controlled/fugitive species | foreground | per 1 kg reference flow |

### Process: Dedicated conductive and structural part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### T2 copper rod for local conductive parts (`copper`)

Only actual T2 rod supply for locally machined tip or holder; document own assay, dimensions and surface state. Completed bought tip excludes its upstream rod.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Copper tubing for local work coils (`cutube`)

Actual joining-coil or cooled-part tube grade, wall, temper and provider; recreational-tubing comment conflict is unresolved. Bought finished coil embeds tube fabrication upstream.

- Selected flow: Copper tubing for local work coils
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### CuCrZr rod for contact parts (`cucrzr`)

Actual chromium-zirconium copper alloy rod for local contact-tip/holder manufacture, own alloy assay and heat treatment. Brass, pure copper and nichrome do not establish CuCrZr.

- Selected flow: CuCrZr rod for contact parts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Brass rod for dedicated fittings (`brass`)

Only actual Cu-Zn rod/bar/profile interface for local dedicated fittings; own lead/Cu/Zn assay and machining stock. Completed fittings exclude embedded rod.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Carbon steel sheet for local dedicated housings (`steel`)

Actual sheet grade/finish for locally made dedicated housing; steel/silver and plate/rod bilingual conflicts unavailable, no customer workpiece included in part BOM.

- Selected flow: Carbon steel sheet for local dedicated housings
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Structural aluminium profile (`aluminium`)

Only actual extruded structural profile for locally made dedicated mount or housing, documented grade and interface; not raw aluminium or finished bought chassis.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Tungsten rod for local refractory inserts (`tungsten`)

Only actual chemically documented tungsten rod supply matching the manufactured insert. Own purity/dopant assay and provider are required; TIG rod discussion does not establish every plasma cathode, tungsten lining, WC-Co powder or doped recipe.

- Selected flow: Tungsten Rod `d1ae0b3b-722a-4590-8022-dc6245bb357b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

###### Machining cutting liquid (`cutfluid`)

Actual liquid machining formulation, own oil/water fractions, stocks and return; catalogue does not specify a universal dilution or cutting burden.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; metco-nozzles; resistance-parts; coil-actual

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Dedicated part assembly (`assembly`)

#### Inputs

##### Product flows

###### Bought completed dedicated joining or spray part (`boughtpart`)

Same-category completed part only with actual exact part number, host electric joining/hot-spray compatibility, completion and included subparts. Its upstream manufacture is embedded once; raw stock/local manufacture replaces this interface rather than adding both.

- Selected flow: Parts for the goods of subclass 44241 `6f6ed072-afd5-4b25-89d5-cf849f542440`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Alumina electrical insulating part (`ceramic`)

Only actual finished alumina ceramic insulator grade/geometry, own supplier assay and electrical interface; chemical alumina powder, epoxy-filled insulator and tableware are different. Local ceramic manufacture requires its own raw ingredients and firing inventories.

- Selected flow: Alumina electrical insulating part
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Finished PTFE tube (`ptfe`)

Actual finished PTFE tube for a documented dedicated liner or insulation interface. Primary resin and plastic sheet do not prove tube completion; steel spiral and composite liners have separate supplied identities.

- Selected flow: Finished PTFE tube
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Moulded silicone rubber part (`silicone`)

Only actual finished silicone rubber insulating or flexible part with own formulation, cure and supplied scope; sealant caulk and unrelated consumer mouldings unavailable.

- Selected flow: Moulded silicone rubber part
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Nitrile rubber gasket (`gasket`)

Actual finished NBR gasket formulation, dimensions and gas/cooling compatibility; generic rubber sealing elements do not establish NBR or substitute for every seal.

- Selected flow: Nitrile rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Supplied low-voltage copper cable (`cable`)

Only actual <=1000V power cable construction matching this supply interface; verify copper conductor, insulation/sheath and flexible-current duty, and retain cut/installed/returned Length in m. Own same-construction kg/m only for physical mass reconciliation; generic control cable Energy is unavailable.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed populated control board (`pcb`)

One completed board with actual part number, populated electronics and supplied control interface; bare FR4 PWB, generic mixed electronic components and other-device modules are not complete controller proxies.

- Selected flow: Completed populated control board
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed dedicated welding transformer (`transformer`)

Actual completed transformer part with winding/core/cooling inclusion and electrical interface; casing alone and complete welder do not establish this module. Local winding/core assembly requires additional measured atomic ingredients.

- Selected flow: Completed dedicated welding transformer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed soldering iron ceramic heater (`heater`)

Actual finished non-carbon electrical heating part with ceramic/resistance construction and temperature sensor inclusion. CTUe reference is unavailable for physical quantity; complete station is not heater.

- Selected flow: Completed soldering iron ceramic heater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed induction brazing work coil (`coil`)

Actual formed joining work coil with conductor/insulation/cooling and connections; dedicated principal joining host compatibility documented. Do not select generic induction furnace coil or raw tubing as completed work coil.

- Selected flow: Completed induction brazing work coil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed steel-spiral MIG wire liner (`liner`)

One actual finished steel-spiral guide compatible with specified gun and wire diameter. PTFE/composite guide is another atomic grade; weld wire is consumed filler, not guide hardware.

- Selected flow: Completed steel-spiral MIG wire liner
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed tungsten-lined copper plasma nozzle (`nozzle`)

One actual completed electric-plasma nozzle with copper anode, optional lining actually included and water/electrical interfaces. Unlined nozzle is a separate configuration; feedstock copper/tungsten and ordinary paint or combustion nozzle are not this part.

- Selected flow: Completed tungsten-lined copper plasma nozzle
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Completed electric-arc-spray wire feed roller (`wirefeed`)

Actual supplied feed roller matched to electric metal/carbide hot-spray platform and wire/interface. Complete feeder, generic axle and welding consumable wire differ from roller.

- Selected flow: Completed electric-arc-spray wire feed roller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Steel assembly screw (`screw`)

Actual separately supplied finished screw grade, size and coating installed in dedicated part; complete bought assemblies already include their internal fasteners once.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Roller bearing installed in dedicated feeder part (`bearing`)

Actual finished roller bearing subtype/size/grade and supplied inclusion; completed bought drive already embeds included bearing, and a loose cage is not bearing.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Tin silver copper solder alloy for local part manufacture (`solder_manufacture`)

Actual local manufacture of the supplied part only, separate from factory functional trials and customer use. Only actual measured solder used in local part assembly, own alloy assay and flux inclusion. Optical-assembly-only generic lead-free row is unavailable; retained coating and trial consumption separately measured.

- Selected flow: Tin silver copper solder alloy for local part manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Silver copper zinc brazing alloy for local part manufacture (`braze_manufacture`)

Actual local manufacture of the supplied part only, separate from factory functional trials and customer use. Actual measured filler joining a manufactured coil/part, own assay and return; alloy rod and full machine are not finished brazing filler.

- Selected flow: Silver copper zinc brazing alloy for local part manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Rosin soldering flux for local part manufacture (`flux_manufacture`)

Actual local manufacture of the supplied part only, separate from factory functional trials and customer use. Actual distinct rosin formulation, carrier and concentration for observed solder process; combined solder-with-flux does not identify separate flux supply. Add other actual flux ingredients individually.

- Selected flow: Rosin soldering flux for local part manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Carbon steel solid welding wire for local part manufacture (`weld_manufacture`)

Actual local manufacture of the supplied part only, separate from factory functional trials and customer use. Only actual consumed solid filler for local part joining, own grade and mass; not flux-cored wire, liner or customer lifetime usage.

- Selected flow: Carbon steel solid welding wire for local part manufacture
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Gaseous oxygen for local joining or trial for local part manufacture (`oxygen_manufacture`)

Actual local manufacture of the supplied part only, separate from factory functional trials and customer use. Only actual gaseous cryogenic-air-separation atplant supply matching provider/purity/state and measured local manufacture. Native Mass retained; volume requires own T/P/humidity/density. Not ambient-air oxygen or liquid delivery without vaporisation.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

###### Retained supplied deionised water fill (`retained_di`)

Only actual measured deionised water retained within the accepted supplied part, with own supplier/purity/temperature/density and delivered mass records. Empty water passages and replacement lists do not prove filling; consumed/recovered factory-test water is separate.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cpc; hakko-parts; metco-spares; castolin-parts; resistance-parts; coil-actual

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Part cleaning and local surface finishing (`finish`)

#### Inputs

##### Product flows

###### Isopropanol cleaning liquid (`ipa`)

Actual CN chemical-atplant IPA feed only with own supplier purity and compatible delivery; measure stocks/returns and separately locate all air/non-air fates. Not a mixed cleaner or generic solvent.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Ferrous chloride plating ingredient (`ferrous`)

Only when actual local iron-plating bath records specify FeCl2, exact hydrate and own assay. Water-treatment grade/oxide classification conflict is unresolved; iron layer alone does not prove this bath chemistry.

- Selected flow: Ferrous chloride plating ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Chromium trioxide plating ingredient (`chromium`)

Only actual CrO3 chrome-plating route and supplier CAS1333-82-0 with own assay; organic-classification conflict unresolved. Trivalent chrome or outsourced plating needs different actual inputs, not assumed CrO3.

- Selected flow: Chromium trioxide plating ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Anhydrous nickel sulphate plating ingredient (`nickel`)

Only actual anhydrous NiSO4 bath feed supplier and own assay; metal-intermediate classification and stated20–25%Ni do not establish anhydrous grade. Hydrated salts and retained water are distinct.

- Selected flow: Anhydrous nickel sulphate plating ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Nickel sulphate hexahydrate plating ingredient (`nickelhyd`)

Only actual NiSO4·6H2O supplier CAS10101-97-0 and own purity/moisture; rare-earth-compound classification conflict is unresolved. Not anhydrous salt mass or metallic nickel.

- Selected flow: Nickel sulphate hexahydrate plating ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Sulfuric acid feed (`acid`)

Only actual industrial atplant93–98%H2SO4 feed matching CAS7664-93-9, sealed delivery and own assay for observed cleaning/plating route; own dilution water and reactions measured, no standard bath concentration.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Sodium hydroxide cleaning ingredient (`alkali`)

Actual supplier physical state, concentration and CAS1310-73-2 for observed clean/neutralisation route. Miscellaneous-product and solid/30%-solution conflicts cannot define own bath concentration.

- Selected flow: Sodium hydroxide cleaning ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Tin rod retained by local tinning (`tin`)

Actual pure tin rod CAS7440-31-5 feed for measured local tinning only; alloy solder differs. Retained coating, bath stocks, returns and dross use own assays; HAKKO coating exception models remain separate.

- Selected flow: Tin Rod `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Process washing water (`water`)

Actual purchased process water source and supplier; own water fraction, measured temperature/density, rinse/return/stocks and discharge rather than gross chemical solution mass.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

###### Deionised process water (`di`)

Actual deionised supply for documented rinse or bath preparation; own assay/temperature/density and stocks/returns. No generic coolant mixture or assumed shipment fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: hakko-tip; resistance-parts

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual factory inspection and functional trials (`test`)

#### Inputs

##### Product flows

###### Tin silver copper solder alloy (`solder`)

Only actual factory functional-trial consumption; local manufacture is the separate assembly row. Only actual measured solder used in factory functional trials, own alloy assay and flux inclusion. Optical-assembly-only generic lead-free row is unavailable; retained coating and trial consumption separately measured.

- Selected flow: Tin silver copper solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Silver copper zinc brazing alloy (`braze`)

Only actual factory functional-trial consumption; local manufacture is the separate assembly row. Actual measured filler consumed by factory tests, own assay and return; alloy rod and full machine are not finished brazing filler.

- Selected flow: Silver copper zinc brazing alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Rosin soldering flux (`flux`)

Only actual factory functional-trial consumption; local manufacture is the separate assembly row. Actual distinct rosin formulation, carrier and concentration for observed solder process; combined solder-with-flux does not identify separate flux supply. Add other actual flux ingredients individually.

- Selected flow: Rosin soldering flux
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Carbon steel solid welding wire (`weld`)

Only actual factory functional-trial consumption; local manufacture is the separate assembly row. Only actual consumed solid filler for factory test, own grade and mass; not flux-cored wire, liner or customer lifetime usage.

- Selected flow: Carbon steel solid welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Gaseous argon test medium (`argon`)

Actual factory welding/plasma trial gas, supplier purity/delivery with measured state conversion. Liquid argon needs actual vaporisation burdens; gaseous candidate miscellaneous-chemical classification needs review and no generic shielding mix substitutes.

- Selected flow: Gaseous argon test medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Nitrogen protective purge gas (`nitrogen`)

Only actual protective-atmosphere atplant nitrogen supply and measured factory purge/leak-test load, provider/purity/delivery matched. Plasma working-gas grade has a separate supplier/interface review.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Gaseous helium test medium (`helium`)

Actual observed plasma or leak-test helium gas, supplier purity and delivery state; electricity/steel sludge does not identify helium.

- Selected flow: Gaseous helium test medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Gaseous hydrogen test medium (`hydrogen`)

Actual observed plasma-gas hydrogen supply and factory test load, own purity/state/stock; peroxide, HCl, converter or raw gas do not prove hydrogen.

- Selected flow: Gaseous hydrogen test medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Gaseous oxygen for local joining or trial (`oxygen`)

Only actual factory functional-trial consumption; local manufacture is the separate assembly row. Only actual gaseous cryogenic-air-separation atplant supply matching provider/purity/state and measured factory trial. Native Mass retained; volume requires own T/P/humidity/density. Not ambient-air oxygen or liquid delivery without vaporisation.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Aluminium spray-test wire (`alwire`)

Only actual finished solid aluminium wire grade/diameter/provider compatible with factory arc-spray trial; weigh consumed and returned wire. Not installed feed roller or lifetime spray throughput.

- Selected flow: Aluminum wire `89db8507-09bd-45f8-ba96-4e459058412c`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### WC-Co thermal spray test powder (`wc`)

Actual sprayable WC-Co powder grade, particle state and own W/C/Co assay for measured test only; tungsten powder, ferro-tungsten and finished carbide part are unavailable.

- Selected flow: WC-Co thermal spray test powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Carbon steel factory test coupon (`coupon`)

Actual weighed test coupon grade and reused/rejected mass records; exclude it from accepted part net mass, and no host customer-workpiece capacity becomes part mass.

- Selected flow: Carbon steel factory test coupon
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

###### Factory test deionised water (`test_di`)

Actual factory cooling/leak-test load and measured returned water, own purity/temperature/density; distinguish actual retained shipment fill and customer utilities.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: coil-actual; metco-nozzles; hakko-tip

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned shared services (`services`)

#### Inputs

##### Product flows

###### Factory electricity (`electricity`)

Actual matched user-side CN<1kV imported electricity; meter fabrication/assembly/finish/test/dispatch, generation/exports/storage and only unassigned shared-service residual.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Factory compressed air (`air`)

Actual purchased compressed-air volume and delivery pressure/temperature/moisture; onsite compressor instead counts its measured energy and separate losses once.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Purchased industrial heat (`heat`)

Only actual matching CN natural-gas industrial heat provider; own supplied/returned enthalpy on one datum, gross return deducted once, already-net not deducted twice. Supplier boiler fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Service tap water (`tap`)

Actual tap-water supplier and metered unassigned services, own water fraction/temperature/density/return; excludes water already assigned to finishing/testing.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Accepted part dispatch and packaging (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated packaging board (`board`)

Only actual C/E/F corrugated board with at least 80% fibre matching supported material interface, own supplier recycled fraction; measured packing mass outside net accepted part.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc

###### LDPE packaging foil (`film`)

Only actual PE-LD non-self-adhesive/noncellular/nonreinforced/nonlaminated/unsupported foil, own thickness/grade and measured wrapping burden; other polymer grade requires separate identity.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc

###### Dispatch wood pallet (`pallet`)

Only actual wood EURO pallet construction and supplier/state, measured mass and documented reuse/return share, not default pallet count or included part mass.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dedicated electric-joining or hot-spray part (`finished_output`)

One accepted configured dedicated part matching electric joining or electric metal/carbide hot-spray host and exact supply scope. Calibrated net mass excludes freight packing, extra spare stock, rejected parts and consumed coupons/media.

- Selected flow: Parts for the goods of subclass 44241 `6f6ed072-afd5-4b25-89d5-cf849f542440`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc

##### Waste flows

##### Elementary flows

### Process: Actual residues and direct emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Outgoing steel machining scrap (`wsteel`)

Only actual unprocessed post-industrial steel scrap transfer, own alloy/moisture/oil assays, stocks/returns and receiver; recovered sale product and internal return separately accounted.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing copper machining scrap (`wcu`)

Only actual copper-containing scrap transfer matching hydrometallurgical receiver route; own Cu/alloy/oil/water assay and stocks/returns. Receiver treatment is not invented onsite process.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing tungsten machining scrap (`wtungsten`)

Actual weighed tungsten scrap transfer with own metal/dopant/oil/moisture composition, stocks/returns and documented receiving route; ore tailings are not machining scrap.

- Selected flow: Outgoing tungsten machining scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Rejected alumina insulating ceramic (`wceramic`)

Actual weighed ceramic rejects leaving site, own alumina/additive/moisture assays and receiver route, distinguishing reused returns from external transfer; red mud and metal slag differ.

- Selected flow: Rejected alumina insulating ceramic
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing spent isopropanol (`spentipa`)

Actual solvent-waste transfer with own IPA/water/contaminant assay, stocks/recovery/returns and receiver treatment; recovered solvent, destruction and air emissions remain independently measured.

- Selected flow: Outgoing spent isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing industrial wastewater (`wastewater`)

Actual discharged/transferred industrial water with own water fraction and dissolved/suspended species, density at measured temperature, stocks/returns and receiver route. Manganese-slag washing or municipal source unavailable; wastewater is not air release.

- Selected flow: Outgoing industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing metal hydroxide plating sludge (`sludge`)

Actual weighed transferred sludge with own dry solids/moisture/Fe/Ni/Cr valence assays, retained chemicals, stocks/returns and receiver route; gross sludge differs from contained metal.

- Selected flow: Outgoing metal hydroxide plating sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred collected metal grinding dust (`dust`)

Actual collected weighed non-air dust transfer with own metal/abrasive/moisture composition and stocks/returns/receiver. Feed-grade grinding dust is unrelated; measured uncaptured air is separate.

- Selected flow: Transferred collected metal grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Collected thermal spray test overspray (`testwaste`)

Actual collected metallic/carbide overspray from factory test with own metal/binder/moisture assay, coupons excluded, stocks/recovery and receiver route; ordinary polymer powder paint waste unavailable.

- Selected flow: Collected thermal spray test overspray
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing insulated copper cable offcuts (`cablewaste`)

Actual weighed copper-core insulated offcuts with own conductor/polymer/oil/water composition, returned reusable lengths and receiver. Municipal-collection mechanical-recovery identity does not prove factory transfer route.

- Selected flow: Outgoing insulated copper cable offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing LDPE packaging offcuts (`wfilm`)

Actual weighed PE-LD offcuts transferred with own polymer/additive/moisture contamination, stocks/returns and receiver; cleaned recycling-plant HDPE context differs from untreated factory LDPE.

- Selected flow: Outgoing LDPE packaging offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only actual independently documented fossil carbon release from observed local process or solvent destruction; imported heat/electricity provider emissions remain upstream. Match ordinary unspecified air, not biogenic or long-term.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Isopropanol to air (`ipair`)

Own actual IPA species after controls, measured concentration × matched flow/time/state plus independent fugitive measurement. Stocks/captured/recovered/wastewater/destruction are separate fates, not unexplained air residual.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Water vapour to air (`vapor`)

Actual water species evaporation after controls, own water fraction and matched measured gas state/flow/time plus fugitives. Returned coolant, retained water and wastewater are non-air fates.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Molecular nitrogen dioxide to air (`no2`)

Only observed manufacturing or factory welding/plasma trial molecular NO2 after controls, measured species/flow/time/state and independent fugitives. NOx as NO2-equivalent and carbon closure do not establish NO2.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### PM10 to air (`pm10`)

Actual post-control PM10 emitted from fabrication or factory trial, matched sampled concentration/flow/time/state and fugitive basis. Includes finer fractions; captured dust non-air and element reporting must avoid overlap.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Elemental copper to air (`copperair`)

Only own measured contained Cu after controls from copper machining/plasma-nozzle trials, matched concentration/flow/time/state and independent fugitives. Gross alloy dust or CuO is not elemental Cu mass.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Elemental nickel to air (`nickelair`)

Only own observed nickel-plating/trial emission after controls with contained Ni assay and matched concentration/flow/time/state plus independent fugitives; aqueous nickel and collected sludge remain non-air. The native generic nickel record covers metal and ions; if the actual LCIA method distinguishes individual species flows, query and prefer that matching species flow. Ni(II) salt gross mass is not contained Ni, and generic Ni cannot substitute unconditionally for every form.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Hexavalent chromium to air (`chromiumair`)

Only own measured Cr(VI) species after actual local chrome controls, matched concentration/flow/time/state and independent fugitives. Total Cr or metallic chrome coating cannot establish Cr(VI); wastewater/sludge remain non-air.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_burdens | Separate configuration/site/common-period records first. Direct component/operation/test records precede allocation; shared services use a documented causal metered basis only for unassigned residual. Attributable reject/rework/test burden remains; do not dilute with total unrelated plant output. |  |
| allocate_scrap | Retained recoverable materials are stock/paired returns; actual external coproducts need explicit allocation/substitution method and compatible output state. Waste transfer receives no automatic avoided-primary-metal credit. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted configured reference | foreground_record | configuration; serial/BOM; Naccepted; each calibrated accepted net mass; Dnet; included accessories/fills; excluded packing/spares/reject/test loads | Use calibrated weighing/traceable weighing records for accepted configured finished part of same configuration; reconcile acceptance and actual supplied BOM. For disassembled shipment sum each included module once. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_materials | fabrication | each actual material/formulation | foreground_record | identity/grade; gross Qattr; own assay/water fraction; stocks; reactions; returns; local operations; bought completion; uncertainty | Weigh each purchase/use stream and measure own chemistry/water fraction; reconcile supplied finish and stock-adjusted local fabrication, conductive/coil/insulation fabrication, surface finish, reject/rework. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_modules | assembly | each completed hardware component, local joining ingredient and retained fill | foreground_record | part/serial; native Qattr; chemical formulation/assay/moisture; actual gas temperature/pressure/density; stocks/reactions/part retention/returns; compatibility; supplier/BOM; embedded materials/operations; included conductor/coil/liner/nozzle/electrode/insulation/board/cooling/fill; rejected/reworked amounts | Hardware branch: use actual receipts and measured masses of each supplied hardware unit; installed count converts through same-unit measured mass. Retained gas charges preserve native mass/volume and actual T/P/density, supplier completion and stocks; no hardware mass is a gas amount. Chemical-ingredient branch: independently measure actual local joining filler, flux and gas in native physical units, with own supplied formulation/contained fraction, moisture, gas temperature/pressure/density, stocks, reactions, accepted-part retention and returns. Whole hardware mass is not chemical amount. Bought completed modules embed manufacture and their included chemicals once; actual local joining has its separately measured ingredients. Local coil, contact, insulation or dedicated control assembly requires its own atomic route and actual upstream replacements. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_tests | test | each actual factory test exchange | foreground_record | configuration; test programme; actual performed intervals; measured Qattr; gas inlet/return/vent and actual auxiliary electrical load; media/coupon consumption and returns; coolant stocks; acceptance/reject/rework | Meter actual dimensional/electrical/insulation/leak/feeding or functional weld/solder/braze/electric-spray part trials; retain all attributable failed/repeated tests. Distinguish retained first-set hardware/fills from consumed media and user lifetime quantities. Leak-only checks do not invent joining filler or electric-spray consumption; validate actual performed test state only. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_utilities | services | each actual utility meter | foreground_record | native Qattr; common-period imports/actual onsite energy generation/exports/storage; process/test assigned meters; residual shared services; voltage/provider; gas T/P/humidity/density; gross/net heat and returns | Reconcile actual imports/generation/exports/storage with assigned fabrication/assembly/finish/test/dispatch loads; allocate only unassigned residual, investigate negatives/uncertainty without clipping. Gross heat kg×its own MJ/kg less independent return kg×its own MJ/kg on one datum, deducted once; already-net heat excludes second return deduction. Physical steam/condensate mass is separate from energy; upstream heat provider boiler excluded from onsite fuel. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_dispatch | dispatch | each packaging and finished output | foreground_record | accepted configuration/BOM/net output; packaging Qattr; actual polymer/board/pallet grade; return share; external transport native activity | Weigh actual dispatch packaging separately from accepted configured-part net mass; retain supplier/transport interface and actual returned packaging, never a standard packaging ratio. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_wastes | residues | each actual waste stream | foreground_record | gross Qattr; own water/element/chemical assays; stocks/internal returns/recovery; actual external transfer/provider and treatment | Use weighed transfer manifests and own stream samples; whole sludge/alloy/wastewater differs from contained species. Captured dust/solvent stay non-air until measured release; external provider emissions belong to provider. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_emissions | residues | each elementary species | foreground_record | CAS/origin/compartment; Qattr; actual post-control concentration; matched gas/liquid flow and time; T/P/wet-dry/oxygen/unit correction; independent fugitive basis; retention/capture/destruction | Measure species after actual controls using measured concentration × matched flow × same period with state/unit corrections plus independent fugitive measurement. Element/species assay is distinct from gross dust/oxide; prevent overlapping total PM/component emissions. Unexplained mass residual and carbon closure cannot infer CO/NO2. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For one configuration and period divide each attributable native-unit exchange total by the sum of accepted configured-part net masses; keep raw amounts, units and uncertainty. | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | For one identical part configuration and period, Qattr includes attributable manufacture/finish/reject/rework/factory-test burdens; Naccepted counts accepted parts whose calibrated masses sum to Dnet. Per-part exchange=Qattr/Naccepted; measured mean net part mass=Dnet/Naccepted; per-kg exchange=Qattr/Dnet. Native numerator remains unchanged and no catalogue host/part/workpiece mass, life or test throughput is assumed. | calibrated net masses and same-configuration acceptance ledger |
| quality_physical | all inventory rows | Each physical element/species term uses own gross mass, assay, moisture/wet-dry basis, stocks, reactions, retained part, returns and waste. Gross alloy/sludge/solution differs from contained Cu/Fe/Ni/Cr/W/tin/chemical mass. Each water stream uses own water fraction and measured/documented density at actual temperature, reaction/retention/evaporation/discharge/stocks; pair/cancel internal returns. | own stream assays and stock/reaction measurements |
| quality_solvent | ipa; spentipa; ipair | Reconcile own IPA assays across inputs, stock, retained part, recovery/capture, wastewater/spent media, destruction and independent measured air. Capture is not destruction; non-air fates and unexplained residual never become air. | independent fate measurements and own assays |
| quality_native | cable | Retain actual cable construction and measured received/cut/installed/returned Length in m, stock and actual losses. If mass closure needs conversion, measure same-construction kg/m independently; a cable Energy or capacity reference cannot establish physical cable mass. | original cable supplier and length/mass records |
| quality_identity | all inventory rows | Match publication state100/type, native reference internal-ID/property/unitgroup, chemistry/CAS/hydrate/grade, supplied completion/provider/geography and elementary species/origin/compartment. Add every actual unlisted dedicated power/control/cooling/feeder part, magnetic stock/winding/insulation/plating ingredient, gas/fuel/refrigerant/fill, transport, waste or emission as a separately queried measured atomic exchange. Generic electronic collection, raw stock and complete host are not dedicated-part proxies. Missing differs from zero; not-applicable requires physical evidence. | original supplier/BOM and explicit identity gaps |
| quality_scope | reference product | Review each dedicated host and exact part completion, including electrical resistance/arc/inverter/transformer joining, induction brazing and electric plasma/arc hot-spray architectures. HAKKO layer exception models and Metco optional tungsten lining remain item-specific. Catalogue spare availability, gas compatibility/power/lifetime claims and maximum workpiece/host ratings prove no universal shipment, factory chemistry, part mass or trial recipe. | primary original configuration and principal-function review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require exact dedicated part and reviewed electric joining/electric metal-carbide hot-spray host compatibility, full supplied state and identical bilingual one-kg net reference. Reject complete host, generic component, consumable powder/wire, nonelectric dedicated part or ordinary paint-spray item as category reference. | cpc |
| validate_makebuy | Reject duplicated completed bought-module manufacture, unpaired internal transfers, assumed replacement shipment/fill or customer use presented as factory load. Retain actual attributable failed/repeated tests/rework; coatings and bought electronics must match actual completed state. | cpc; hakko-parts; hakko-tip; metco-nozzles; metco-spares; castolin-parts; resistance-parts; coil-actual |
| validate_balances | Require own-stream element/water/solvent balances, post-control species-specific concentration × matched flow/time/state plus independent fugitive basis. Utility common-period imports/actual generation/exports/storage reconcile assigned process loads and only unassigned residual. Gross heat deducts independent return once on same datum; net heat never deducts twice. |  |
| validate_species | Total Cr differs from Cr(VI); gross oxide/fume differs from contained element; PM10 includes finer fractions and must not duplicate constituent emission accounting. Molecular NO2 differs from NOx as NO2-equivalent. State20, CTUe or cable-Energy physical proxies, conflicting grades/routes/compartments and unqueried identities are unavailable. Report accepted input/performed/skipped checks/findings/completeness truthfully. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared actual dedicated electric joining and electric metal/carbide hot-spray part manufacture with compatible supplied configuration |
| excluded_use | Complete-host/generic-part substitutions, universal coating/trial recipes, customer lifetime replacements and unreviewed adjacent nonelectric/cold-spray hardware |
| required_metadata | All qualifiers; actual Qattr/Naccepted/Dnet/native units; part/BOM/makebuy/route/site/period/provider/transport/treatment; tests/allocation and gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty, physical residuals, supplier/identity/scope gaps and performed/skipped check completeness |
| update_trigger | Dedicated host/part/BOM/grade/coating/completion/makebuy/provider/site/period/test or treatment changes |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| hakko-parts | handbook | HAKKO FX-971 Replacement Parts | https://www.hakko.com/english/products/hakko_fx971_parts.html | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| hakko-tip | handbook | Tip life | https://www.hakko.com/english/support/maintenance/detail.php?seq=163 | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| metco-nozzles | handbook | 3MB and 9MB Tungsten-Lined Nozzles | https://www.oerlikon.com/ecoma/files/SF-0013_3MB_9MB_W-Nozzles_EN.pdf?download=true | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| metco-spares | handbook | Oerlikon Metco graded spares | https://www.oerlikon.com/ecoma/files/FLY-0003_SpareParts_EN.pdf?download=true | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| castolin-parts | handbook | MIG/MAG torches and accessories | https://shop.castolin.com/en-gb/products/welding-torch/mig-mag-torches-accessories | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| resistance-parts | handbook | TUFFALOY Straight Welding Electrode Holders | https://tjsnow.com/resistance-welding-supplies/tuffaloy-resistance-welding-products/electrode-holders/straight-welding-electrode-holders/ | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
| coil-actual | handbook | The Art and Science of Coil Manufacturing at Ambrell | https://www.ambrell.com/blog/art-and-science-of-induction-coil-manufacturing | Actual original dedicated-part scope, construction and observed manufacturing interfaces only; not a universal recipe, mass, load or life. |
