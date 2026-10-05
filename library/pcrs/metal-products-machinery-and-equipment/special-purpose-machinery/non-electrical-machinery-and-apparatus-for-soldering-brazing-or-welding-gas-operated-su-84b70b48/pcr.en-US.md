---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-gas-operated-su-84b70b48
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Non-electrical soldering, brazing, welding and gas surface-tempering apparatus

## 1. Scope and Applicability

This PCR covers manufacture of complete non-electrical apparatus for soldering, brazing or welding, and gas-operated surface tempering machines and appliances. Gas joining includes oxy-acetylene welding, oxy-fuel and air-fuel brazing, and flame-heated copper-bit soldering systems. Gas surface heat treatment includes declared stationary, spin, progressive-scanning and combined rotation/scanning architectures with actual heating/quench/control assemblies. Flame-hardening examples require item-specific review against the declared surface tempering or hardening principal function; their existence does not establish every possible tempering machine. A portable iron is one architecture, not the full category. Other non-electrical joining mechanisms require their own primary supplied-configuration evidence.

Exclude independently supplied parts, replacement tips, spare hoses or burners; electrical resistance/arc/induction joining and electric metal/carbide hot spraying; unrelated furnaces, general heating/cutting-only appliances, and treated customer workpieces. Auxiliary electric controls, pumps, chillers and motion drives do not alone change a gas heat source into electrical joining. Review complete gas welding/cutting combinations and unfamiliar non-electric joining methods by actual principal function. The reference is the accepted apparatus configuration, not the mass or maximum capacity of customer workpieces. No catalogue pressure, gas consumption, torch count, heat rating, life or output is a factory default.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.non-electrical-machinery-and-apparatus-for-soldering-brazing-or-welding-gas-operated-su-84b70b48 |
| classification_refs | CPC 3.0 44242; exact semantic scope |
| covered_products | Complete non-electrical soldering/brazing/welding apparatus and gas-operated surface-tempering appliances; declared full supplied configuration |
| excluded_products | Separate replacement parts; electric joining/spray machinery; unrelated furnaces or cutting-only equipment; treated workpieces and customer operation |
| representative_product | One accepted complete gas joining or reviewed gas surface-treatment apparatus |
| production_route | Actual local metal/torch manufacture or bought completed hardware, assembly, gas-path integration, surface finish and factory leak/control/functional tests |
| market_state | Factory-gate configured complete apparatus; declared retained first-set hardware/fills, empty cylinders distinguished |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared non-electrical joining or gas-operated surface heat-treatment apparatus |
| How much | 1 kg accepted complete configured apparatus net mass |
| How well | Documented principal process, gas path and safety/control acceptance, actual supplied mechanical and cooling scope; no inferred recipe or performance |
| How long or cycle | One common production/acceptance period; no asserted customer operating lifetime |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Non-electrical machinery and apparatus for soldering, brazing or welding, gas-operated surface tempering machines and appliances `0626cfa9-ddf9-41c2-8994-44088c8ccfec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | principal solder/braze/weld or gas surface-tempering/hardening function; flame/non-electric mechanism; fuel species/mixture and oxygen/air supply; actual pressure/flow interfaces; portable/stationary/spin/progressive configuration; shipped torch/mixer/nozzle/copper bit/regulators/arrestors/hoses/cylinder empty-filled state; supplied carriage/quench/pump/chiller/control/pyrometer/flame sensor; actual alloy/polymer/chemical grades; net accepted masses and BOM/makebuy; sites/period/provider/transport/treatment; factory tests and identity gaps |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted complete apparatus net mass. Collect same-configuration accepted masses using cp_mass; exclude packing, rejects, consumed test loads and loose spares. |
| native_amount | all inventory rows | actual native property | native unit | Preserve each native numerator unit; conversion uses actual density/T/P/humidity for gas Volume and 3.6 MJ/kWh for electricity. Whole solution/formulation mass differs from contained chemical or water. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased metal/chemical feedstocks or completed compatible torch, gas-path, motion, quench and control assemblies |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | Full non-electrical joining plus gas-operated surface tempering; actual supplied principal function reviewed |
| recursive_input_rule | Bought complete gas apparatus or subassembly embeds its manufacture once; local extension/integration only. Actual local fabrication replaces the corresponding bought complete input, never adds its embedded raw materials again. |
| upstream_dataset_requirement | Match supplier geography/period, chemical and material grade, gas supplied state, assembly completion and transport/treatment boundary |
| disclosure | Delivered BOM, actual empty/filled cylinders and retained first charge, make/buy, performed tests and unsupported identities; no downstream operating fuel recipe in factory BOM |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_complete | Include attributable manufacture to dispatch of the accepted full configuration. Bought complete hardware includes upstream metal/rubber/control fabrication once. Separate local housing/torch manufacture from factory apparatus functional testing; paired internal streams cancel. Customer installation, operation, maintenance and end of life are separate. | un-cpc3; harris-catalog; sievert-kit; flame-machines |
| boundary_tests | Include actually performed gas-path leak/pressure, regulator/arrestor/control, ignition and functional solder/braze/weld or surface-heating/quench trials with rejects/rework. Test fuels/oxidant/purge gas, filler/flux/coupons and water are measured consumed streams; retained shipped charges and hardware are separate. An empty supplied cylinder proves no initial fuel fill. No operating catalogue rate implies a test duration or consumption. | harris-catalog; sievert-kit; sievert-promatic; flame-machines |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local metal and torch fabrication | conditional | Only actual metal cutting/forming/machining/joining for frames and gas-path hardware; bought completed parts embed operations upstream. | foreground | per 1 kg reference flow |
| assembly | Configured gas and mechanical assembly | conditional | Actual gas torch/iron or surface-treatment architecture with supplied regulator/arrestor/hose/controls/motion/quench/cooling hardware and retained fills separately documented. | foreground | per 1 kg reference flow |
| finish | Surface finish and cleaning | conditional | Actual local coating/cleaning/cure only; outsourced completed finish upstream. | foreground | per 1 kg reference flow |
| test | Factory leak and functional trials | conditional | Actual performed gas-path/safety/control/ignition/joining/surface-heating/quench acceptance including attributable rejects/rework; no customer lifetime fuel recipe. | foreground | per 1 kg reference flow |
| services | Unassigned residual utilities | conditional | Only actual common-period utility remainder after assigned fabrication/assembly/finish/test/dispatch loads. | foreground | per 1 kg reference flow |
| dispatch | Accepted configuration dispatch | conditional | Actual complete accepted net apparatus and separate transport packing; shipped empty/filled cylinder and retained accessories explicit. | foreground | per 1 kg reference flow |
| residues | Actual waste and elementary release accounting | conditional | Measured external waste transfers and actual post-control species releases, receiver/provider operations upstream. | foreground | per 1 kg reference flow |

### Process: Local metal and torch fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Carbon steel sheet (`steel`)

Actual frame/case sheet grade and finish only; conflicting silver/steel records unavailable. Bought complete frames embed fabrication upstream.

- Selected flow: Carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

###### Aluminium extrusion profile (`aluminium`)

Only actual documented extruded structural profile and grade; completed bought carriage embeds its extrusion and machining once.

- Selected flow: Aluminium extrusion profile `4f197be3-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

###### Brass rod stock (`brass`)

Actual Cu-Zn bars/rods/profiles for local torch/regulator body manufacture matching semi-finished supply; record own alloy including lead content, finish and provider. Complete bought brass hardware excludes embedded stock.

- Selected flow: Brass `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

###### Copper tube (`copper`)

Actual local water-cooled flame-head or gas-path tube grade/dimensions/finish only; recreational-tubing comment conflict prevents selected identity. Finished bought burner includes its tubing upstream.

- Selected flow: Copper tube
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

###### Metalworking cutting fluid (`cutfluid`)

Actual machining liquid formulation and concentration with own water/lubricant assays and stocks; no universal dilution.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

###### Carbon steel solid welding wire (`weld`)

Only actual frame manufacture solid-wire grade, not flux-cored wire or gas-equipment customer lifetime consumables; local joining method separately declared.

- Selected flow: Carbon steel solid welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: harris-catalog

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured gas and mechanical assembly (`assembly`)

#### Inputs

##### Product flows

###### Completed oxy-fuel welding blowpipe (`torch`)

Actual completed handle/mixer-compatible assembly, gas/oxygen interfaces and accessory inclusions; separate finished modules embed metal/valve manufacture once. Cutting-only equipment is not complete joining reference.

- Selected flow: Completed oxy-fuel welding blowpipe
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Gas pressure regulator (`regulator`)

Actual gas-specific regulator with inlet/outlet connections and completion; oxygen cleanliness, fuel compatibility and pressure must be documented separately for each installed unit. Loose gas or pressure transducer is not regulator.

- Selected flow: Gas pressure regulator
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Flashback arrestor (`arrestor`)

Actual installed fuel/oxygen-compatible completed arrestor and reverse-flow protection; do not assume every catalogue option is shipped.

- Selected flow: Flashback arrestor
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Completed fuel-gas rubber hose (`hose`)

Actual completed fuel-compatible hose compound, reinforcement, connectors and pressure scope; hydraulic or green unvulcanized tube is not equivalent. Oxygen hose requires an additional distinct grade row.

- Selected flow: Completed fuel-gas rubber hose
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Brass fuel-gas valve (`valve`)

Actual completed brass valve with compatible fuel and interface; steel/extinguisher valve or generic gas is not hardware proxy.

- Selected flow: Brass fuel-gas valve
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Copper-alloy welding nozzle (`nozzle`)

Actual finished supplied nozzle alloy and mixing architecture; alloy feedstock or solder differs from finished gas hardware.

- Selected flow: Copper-alloy welding nozzle
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Copper soldering bit (`tip`)

Only documented included finished copper bit; separately sold handle may exclude it. Record actual shape/coating/supplied finish, not raw tin/copper or spare-only quantities.

- Selected flow: Copper soldering bit
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Water-cooled flame-hardening head (`burner`)

Actual completed gas/oxygen head with water passages and declared surface-treatment compatibility; unrelated furnace-burner assembly is unavailable.

- Selected flow: Water-cooled flame-hardening head
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Flame-head scanning carriage (`carriage`)

Actual supplied compatible completed motion assembly; lathe/spinning fixture/drive supplied scope declared, no workpiece mass substituted for hardware.

- Selected flow: Flame-head scanning carriage
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Quench spray ring (`quench`)

Actual completed compatible quench distribution hardware; water itself is not spray ring. Integral purchased quench assembly embeds its manifold upstream.

- Selected flow: Quench spray ring
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Centrifugal water pump (`pump`)

Only actual supplied completed liquid-water circulation pump matching broad liquid-pump identity and declared drive/flow/head/material; embedded drive counted once, tank/heat exchanger separately if outside supplied unit.

- Selected flow: Pump `bbd91be4-dc00-44c2-8bc1-f67ee79174a7`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Programmable logic controller (`plc`)

Only actual included complete compatible China-procured controller and voltage; auxiliary control does not turn gas heating into electric joining. Embedded electronics upstream once.

- Selected flow: Programmable logic controller `5b817eb4-cab3-4fed-87c9-457d66d0bb19`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Flame-head water chiller (`chiller`)

Actual supplied complete cooling unit and compressor/refrigerant only if actual architecture; customer utility connection is not shipped machinery.

- Selected flow: Flame-head water chiller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Optical pyrometer (`pyrometer`)

Actual installed complete optical temperature instrument and sensing range; broad unspecified instrumentation requires compatible optical architecture evidence.

- Selected flow: Optical pyrometer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Ultraviolet flame sensor (`sensor`)

Actual installed completed UV flame detector, not UV paint/adhesive; compatible safety/control assembly scope declared.

- Selected flow: Ultraviolet flame sensor
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Piezoelectric gas igniter (`igniter`)

Actual shipped compatible finished piezo ignition component if supplied; manual ignition and standalone automotive starter are different.

- Selected flow: Piezoelectric gas igniter
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Empty refillable steel gas cylinder (`cylinder`)

Actual included empty cylinder completion/material and valve scope; gas content specification is not proof of charge. Filled cartridge shells require their own hardware identity; no gas included in this empty-hardware mass.

- Selected flow: Empty refillable steel gas cylinder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Welding goggles (`goggles`)

Only actual supplied first-set compatible eye-protection accessory with supplier material/finished-state evidence; optional replacement listings do not establish inclusion.

- Selected flow: Welding goggles
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Wood tool box (`box`)

Only actual delivered reusable wooden tool box/BOM inclusion, separate from disposable freight packing. Steel/plastic cases require additional separately queried hardware rows.

- Selected flow: Wood tool box
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Roller bearing (`bearing`)

Only actual finished roller-bearing subtype/size/grade matching broad bearing identity; cage alone differs.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Steel screw (`screw`)

Actual supplied finished screw steel/size/finish; completed bought assemblies already embed included fasteners.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Nitrile rubber gasket (`gasket`)

Actual gas-compatible finished NBR gasket formulation and supplied state; general vulcanized sealing elements or raw NBR do not establish this grade.

- Selected flow: Nitrile rubber gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Gaseous oxygen retained shipped charge (`oxygen_retained`)

Only actual gaseous oxygen from cryogenic air separation supplied at plant, native Mass/kg; document own purity/provider and actual delivery completion. If measured by volume, use documented matching T/P/humidity/density. Liquid oxygen and actual vaporisation require a separate matched supplied-state route, no ambient-air extraction proxy. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Acetylene retained shipped charge (`acetylene_retained`)

Only actual at-plant acetylene chemical supplied for oxy-fuel tests; record grade and dissolved-cylinder acetone/DMF/porous-shell interfaces separately when applicable, never treat acetylene-generator machinery as gas. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: ethyne; acetylene `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Liquefied propane retained shipped charge (`propane_retained`)

Actual pure propane fuel grade and liquid/vapour delivery evidence required; questionable standard/ether-comment record is unavailable. No LPG mixture substitutes for a propane-specific system, and empty bottle excludes assumed fill. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: Liquefied propane retained shipped charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Liquefied n-butane retained shipped charge (`butane_retained`)

Only actual supplied pure n-butane CAS106-97-8 liquid grade with provider/vaporisation boundary and item-specific compatible apparatus; not isobutane or mixed cartridge gas. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: Butane `e02e31b8-818f-44b7-af25-f32f1e923965`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Propane-butane-propylene cartridge mixture retained shipped charge (`mix_retained`)

Only actual documented three-component cartridge formulation, supplied fill and compatible burner; pure component UUIDs never substitute for complete mixture or imply universal proportions. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: Propane-butane-propylene cartridge mixture retained shipped charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

###### Refinery liquefied petroleum gas retained shipped charge (`lpg_retained`)

Only actual accepted refinery-liquefaction propane/butane LPG mixture and at-plant supplier interface with own composition; native mass, actual vaporisation and delivered-state burden separate. No generic heating value/density or pure propane replacement. Only weighed documented shipped retained charge, exclude actual consumed factory tests; empty supplied cylinders have no inferred charge.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: harris-catalog; sievert-kit; sievert-promatic; flame-machines

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Surface finish and cleaning (`finish`)

#### Inputs

##### Product flows

###### Powder coating (`coat`)

Only actual dry polymer coating formulation/grade and local cure; outsourced coated components embed finish upstream.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Isopropanol cleaning solvent (`ipa`)

Only actual compatible CN at-plant chemical feed with own IPA/water assay and measured cleaning consumption; not whole uncharacterized cleaner.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

###### Process water (`water`)

Actual supplied process-water input for local cleaning, not internal recirculation counted as fresh supply. Own water fraction/density and returns recorded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Factory leak and functional trials (`test`)

#### Inputs

##### Product flows

###### Gaseous oxygen for actual factory testing (`oxygen`)

Only actual gaseous oxygen from cryogenic air separation supplied at plant, native Mass/kg; document own purity/provider and actual delivery completion. If measured by volume, use documented matching T/P/humidity/density. Liquid oxygen and actual vaporisation require a separate matched supplied-state route, no ambient-air extraction proxy.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Acetylene for actual factory testing (`acetylene`)

Only actual at-plant acetylene chemical supplied for oxy-fuel tests; record grade and dissolved-cylinder acetone/DMF/porous-shell interfaces separately when applicable, never treat acetylene-generator machinery as gas.

- Selected flow: ethyne; acetylene `0ee52d35-6fea-4c7a-8922-fe2164a5d84b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Liquefied propane for actual factory testing (`propane`)

Actual pure propane fuel grade and liquid/vapour delivery evidence required; questionable standard/ether-comment record is unavailable. No LPG mixture substitutes for a propane-specific system, and empty bottle excludes assumed fill.

- Selected flow: Liquefied propane for actual factory testing
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Liquefied n-butane for actual factory testing (`butane`)

Only actual supplied pure n-butane CAS106-97-8 liquid grade with provider/vaporisation boundary and item-specific compatible apparatus; not isobutane or mixed cartridge gas.

- Selected flow: Butane `e02e31b8-818f-44b7-af25-f32f1e923965`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Gaseous propylene for actual factory testing (`propylene`)

Only actual gaseous propene from compatible steam-cracking at-plant supply, own grade/purity/state; chemical-grade refinery supply and multicomponent cartridge are different.

- Selected flow: propene (propylene) `4f1a182b-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Propane-butane-propylene cartridge mixture for actual factory testing (`mix`)

Only actual documented three-component cartridge formulation, supplied fill and compatible burner; pure component UUIDs never substitute for complete mixture or imply universal proportions.

- Selected flow: Propane-butane-propylene cartridge mixture for actual factory testing
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Refinery liquefied petroleum gas for actual factory testing (`lpg`)

Only actual accepted refinery-liquefaction propane/butane LPG mixture and at-plant supplier interface with own composition; native mass, actual vaporisation and delivered-state burden separate. No generic heating value/density or pure propane replacement.

- Selected flow: Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Gaseous industrial fuel natural gas for actual factory testing (`ng`)

Actual torch/surface-heating fuel supply composition/T/P/provider required; state20, drying-only/project NGCC/industrial-furnace-combusted records cannot establish compatible inlet gas.

- Selected flow: Gaseous industrial fuel natural gas for actual factory testing
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Gaseous nitrogen purge for actual factory testing (`nitrogen`)

Only actual compatible GLO at-plant gaseous protective/purge supply and documented grade; bottling headspace make-up and assumed purge absent from test programme are excluded.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Tin-zinc solder alloy (`solder`)

Only actually consumed soft-solder trial alloy, own Sn/Zn/other-element assay and grade; no fixed ratio or leaded-solder substitution.

- Selected flow: Tin-zinc solder alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Silver-copper-zinc brazing alloy (`braze`)

Actual hard-braze trial grade and own elemental assay only; generic copper alloy does not prove Ag-containing filler.

- Selected flow: Silver-copper-zinc brazing alloy
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Boric acid flux ingredient (`flux`)

Only actual separately supplied orthoboric-acid ingredient with chemistry/provider assay; B2O3-route/CAS conflict and miscellaneous-article classification unavailable. Finished flux formulation has separate atomic identity and ingredients not added twice.

- Selected flow: Boric acid flux ingredient
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Carbon steel trial coupon (`coupon`)

Actually consumed joining/surface heat-treatment steel coupon grade, geometry and returns only; test workpiece is outside apparatus Dnet and capacity figures never determine consumption.

- Selected flow: Carbon steel trial coupon
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Process water for quench trials (`water_trial`)

Actual fresh quench/heat-exchanger make-up for performed factory trials; recirculation cancels, retained shipment liquid separate. Own temperature/density/water fraction/stocks measured.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Deionised water (`di`)

Only actual factory flame-head cooling test grade and fresh make-up; no universal delivered cooling fill or deionisation requirement.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

###### Aqueous polyalkylene-glycol quench fluid (`quenchfluid`)

Only actual documented factory trial PAG formulation/concentration with water fraction and recovery; water-only source never implies glycol, oil/antifreeze not equivalent.

- Selected flow: Aqueous polyalkylene-glycol quench fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: harris-catalog; sievert-kit; flame-machines

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned residual utilities (`services`)

#### Inputs

##### Product flows

###### Low-voltage electricity (`electricity`)

Only actual compatible CN user-side <1kV supply; meter local machinery and auxiliary factory trials. Other voltages/geographies require separate compatible provider, no implied electric principal heating.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Compressed air (`air`)

Actual compatible supplied compressed air native Volume/m3 with T/P/humidity/density; own compressor electricity is not counted again under bought air.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Purchased industrial heat from natural gas (`heat`)

Only actual compatible CN purchased district/industrial NG heat native Energy/MJ; supplier fuel/combustion upstream, no fictional onsite torch gas.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Tap water (`tap`)

Actual compatible fresh facility water supply, actual water fractions/density/storage/returns; not closed-loop gross circulation.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
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

### Process: Accepted configuration dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated cardboard (`board`)

Actual C/E/F corrugated board with >=80% cellulose fibre and documented recycled share; only compatible packaging grade, not universal carton.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; harris-catalog; sievert-kit

###### LDPE foil (`film`)

Only actual non-self-adhesive/noncellular/nonreinforced/nonlaminated/unsupported PE-LD foil; real packing mass and own grade.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; harris-catalog; sievert-kit

###### Wood EURO pallet (`pallet`)

Only actual EURO-standard pallet with measured mass/count and return share; other crates/pallet formats need own identities.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; harris-catalog; sievert-kit

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete non-electrical joining or gas surface-tempering apparatus (`finished`)

Actual accepted full delivered configuration and declared retained hardware/fills; exclude transport packing, rejects, loose spare parts and consumed test coupons/fuels from net reference mass.

- Selected flow: Non-electrical machinery and apparatus for soldering, brazing or welding, gas-operated surface tempering machines and appliances `0626cfa9-ddf9-41c2-8994-44088c8ccfec`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: un-cpc3; harris-catalog; sievert-kit

##### Waste flows

##### Elementary flows

### Process: Actual waste and elementary release accounting (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`wsteel`)

Actual weighed untreated external steel waste transfer with own alloy/contaminant assay, receiver route and stocks/returns; internal recoverable scrap cancels.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Copper scrap (`wcu`)

Only actual weighed external copper waste to documented matching hydrometallurgical receiver route; own Cu/Zn/insulation/moisture assay and returns, not contained Cu element. Receiver treatment is upstream, no invented site hydrometallurgy.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Paint sludge (`sludge`)

Actual outgoing collected coating sludge gross mass, own water/resin/metal composition, stocks/returns and documented receiver treatment; dry paint product differs.

- Selected flow: Paint sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Spent isopropanol solvent (`spentipa`)

Actual outgoing spent cleaning stream own IPA/water/contaminant assay, measured transfer and recovery/destruction receiver route; captured solvent never automatically emitted air.

- Selected flow: Spent isopropanol solvent
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Industrial wastewater (`wastewater`)

Actual transferred factory effluent gross mass/water fraction and own pollutant assays, stocks/returns/receiver route; no air compartment or paper-mill default.

- Selected flow: Industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Spent aqueous PAG quench fluid (`quenchwaste`)

Only actual transferred spent PAG/water formulation from performed trials with own composition, recovery/returns and receiver; clean make-up water and waste oil differ.

- Selected flow: Spent aqueous PAG quench fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Captured metal grinding dust (`dust`)

Actual outgoing captured dust own particle/element/moisture composition and receiver route; measured collection/stock/returns separate from released PM.

- Selected flow: Captured metal grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to ordinary air (`co2`)

Only actual independently quantified onsite fossil combustion release after controls, actual gas flow/time/state; supplier heat boiler and carbon residual excluded.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Fossil carbon monoxide to ordinary air (`co`)

Only independently measured post-control molecular fossil CO with matched actual flow/time and fugitives; carbon closure cannot infer CO.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Isopropanol to ordinary air (`ipair`)

Actual post-control IPA concentration × matched flow/time/state plus independent fugitives; recovery/capture/retention/wastewater/destruction are measured non-air fates.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Water vapour to ordinary air (`vapor`)

Actual net evaporated/reaction-generated water release reconciled with each water fraction, stocks, quench returns and actual measured exhaust state.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Nitrogen dioxide to ordinary air (`no2`)

Only molecular NO2 CAS10102-44-0 independently measured after controls with matching flow/time/state; NOx as NO2-equivalent is not this species.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### PM10 to ordinary air (`pm10`)

Only post-control measured <=10um aerodynamic fraction including finer particles and own sampling/flow/time; captured dust and PM2.5–10 alone differ.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Copper to ordinary air (`copperair`)

Only independently measured released elemental Cu contained in actual fume after controls; whole alloy/oxide dust is not Cu. Match flow/time and avoid PM component overlap.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Zinc to ordinary air (`zincair`)

Only independently measured released Zn amount from actual local joining or factory trials after controls with matching flow/time; gross brass/zinc oxide and captured residue differ.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-apparatus net mass.
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
| cp_mass | dispatch | accepted configured reference | foreground_record | configuration; serial/BOM; Naccepted; each calibrated accepted net mass; Dnet; included accessories/fills; excluded packing/spares/reject/test loads | Use calibrated weighing/traceable weighing records for accepted complete apparatus of same configuration; reconcile acceptance and actual supplied BOM. For disassembled shipment sum each included module once. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_materials | fabrication | each actual material/formulation | foreground_record | identity/grade; gross Qattr; own assay/water fraction; stocks; reactions; returns; local operations; bought completion; uncertainty | Weigh each purchase/use stream and measure own chemistry/water fraction; reconcile supplied finish and stock-adjusted local fabrication, gas-path fabrication, surface finish, reject/rework. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_modules | assembly | each completed component and retained fill | foreground_record | part/serial; native Qattr; compatibility; supplier/BOM; embedded materials/operations; included torch/regulator/hose/cylinder/motion/quench/control/fill; rejected/reworked amounts | Use actual receipts and measured masses of each supplied hardware unit; installed count converts through same-unit measured mass. Retained gas charges preserve native mass/volume and actual T/P/density, supplier completion and stocks; no hardware mass is a gas amount. Bought completed modules embed manufacture once. Local torch or quench-assembly manufacture requires its own atomic route and actual upstream replacements. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_tests | test | each actual factory test exchange | foreground_record | configuration; test programme; actual performed intervals; measured Qattr; gas inlet/return/vent and actual auxiliary electrical load; media/coupon consumption and returns; coolant stocks; acceptance/reject/rework | Meter actual gas-path leak/pressure/control/ignition or functional weld/solder/braze/surface-heat/quench trials; retain all attributable failed/repeated tests. Distinguish retained first-set hardware/fills from consumed media and user lifetime quantities. Leak-only checks do not invent joining filler or surface-quench consumption; validate actual performed test state only. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_utilities | services | each actual utility meter | foreground_record | native Qattr; common-period imports/actual onsite energy generation/exports/storage; process/test assigned meters; residual shared services; voltage/provider; gas T/P/humidity/density; gross/net heat and returns | Reconcile actual imports/generation/exports/storage with assigned fabrication/assembly/finish/test/dispatch loads; allocate only unassigned residual, investigate negatives/uncertainty without clipping. Gross heat kg×its own MJ/kg less independent return kg×its own MJ/kg on one datum, deducted once; already-net heat excludes second return deduction. Physical steam/condensate mass is separate from energy; upstream heat provider boiler excluded from onsite fuel. | native unit | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_dispatch | dispatch | each packaging and finished output | foreground_record | accepted configuration/BOM/net output; packaging Qattr; actual polymer/board/pallet grade; return share; external transport native activity | Weigh actual dispatch packaging separately from accepted net apparatus; retain supplier/transport interface and actual returned packaging, never a standard packaging ratio. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_wastes | residues | each actual waste stream | foreground_record | gross Qattr; own water/element/chemical assays; stocks/internal returns/recovery; actual external transfer/provider and treatment | Use weighed transfer manifests and own stream samples; whole sludge/alloy/wastewater differs from contained species. Captured dust/solvent stay non-air until measured release; external provider emissions belong to provider. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_emissions | residues | each elementary species | foreground_record | CAS/origin/compartment; Qattr; actual post-control concentration; matched gas/liquid flow and time; T/P/wet-dry/oxygen/unit correction; independent fugitive basis; retention/capture/destruction | Measure species after actual controls using measured concentration × matched flow × same period with state/unit corrections plus independent fugitive measurement. Element/species assay is distinct from gross dust/oxide; prevent overlapping total PM/component emissions. Unexplained mass residual and carbon closure cannot infer CO/NO2. | kg | each actual batch and matched meter interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For one configuration and period divide each attributable native-unit exchange total by the sum of accepted configured-apparatus net masses; keep raw amounts, units and uncertainty. | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Qattr includes attributable reject/rework/test burdens for one configuration and common period; Naccepted counts accepted apparatus whose masses form Dnet. Per-item exchange=Qattr/Naccepted; measured mean net mass=Dnet/Naccepted; per-kg exchange=Qattr/Dnet. Count conversion uses measured same-configuration mean mass, never rated heat/gas consumption/workpiece capacity or catalogue machine weight. | calibrated net masses and acceptance ledger |
| quality_physical | all inventory rows | Each element/species term uses its own gross mass and own assay/moisture/wet-dry basis, stocks, reactions, retained product, returns and waste. Gross alloy/sludge is not contained element. Each water stream uses own water fraction and measured/documented density at actual temperature, reactions/retention/evaporation/discharge/stocks; pair and cancel internal returns. | stream-specific assay and stock/reaction records |
| quality_solvent | ipa; spentipa; ipair | Reconcile own IPA assay in inputs, stocks, retained product, recovery/capture, wastewater/spent media, destruction and independently measured air. Capture is not destruction and non-air fates never become air residual. | independent fate measurements and assays |
| quality_identity | all inventory rows | Match state/type, native reference property/unit, metal/polymer/chemical/species, completed supplied state, provider/geography and elementary compartment. Add every actual unlisted transport service, titanium/stainless/plastic feedstock, torch mixer, cartridge shell, tank/heat exchanger/drive, joining alloy/flux ingredient, supplied refrigerant, test media, gas, waste or emission as a separately queried measured atomic row. Missing differs from zero; absence requires proof. | original supplier/BOM and disclosed identity gaps |
| quality_scope | reference product | Unobserved non-electric joining mechanisms and mixed cutting/joining, furnace or gas/electric architectures need item-specific primary principal-function review. Flame-hardening examples do not prove every surface-tempering apparatus. Supplied controls/pumps remain auxiliary to actual gas heat. Replacement lists do not prove shipment, empty cylinders exclude assumed fuel fill and a cooling/quench tank does not prove delivered liquid or glycol. Examples never impose a universal operating recipe or factory load. | primary configuration and semantic review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require actual non-electrical principal joining or gas-operated surface-tempering function and full supplied BOM. Reject spare torch/nozzle/hose, unrelated furnace, electric heat-source apparatus or treated customer workpiece as complete reference. Both languages use the same one-kg net reference and native numerator. | un-cpc3 |
| validate_interfaces | Reject duplicated bought-module manufacture, unpaired internal returns, assumed accessory/fill inclusion and customer lifetime operation presented as factory loads; retain actual attributable factory test rejects/rework. | harris-catalog; sievert-kit; sievert-promatic; flame-machines |
| validate_balances | Require own-stream element/water/solvent balances and measured post-control species concentration × matched flow/time/state plus independent fugitives. Reconcile utilities common-period imports/actual generation/exports/storage and assigned process loads; only unassigned residual shared services. Gross heat deducts independently measured return on same datum once; already-net heat never deducts twice. |  |
| validate_completeness | NOx as NO2-equivalent differs from molecular NO2; gross metal oxide/fume differs from contained elemental species and PM must not overlap constituent reporting. State20, wrong reference property/compartment and unqueried identities are unavailable. Report accepted input, performed/skipped checks, findings, missing evidence and completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Declared non-electrical joining and gas surface-tempering apparatus manufacture and compatible supplied scenario |
| excluded_use | Universal customer fuel/joining/heat-treatment recipes, lifetime/efficiency factors, unrelated electric/furnace/spare outputs without reviewed scope |
| required_metadata | All qualifiers; Qattr/Naccepted/Dnet and native units; actual BOM/makebuy/configuration/route/site/period/provider/transport/treatment; factory tests, allocation and gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty and physical residuals, supplier/identity/classification gaps, performed/skipped checks/completeness |
| update_trigger | Principal function/architecture/BOM/grade/makebuy/provider/site/period or actual supplied/test scope changes |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| un-cpc3 | official_guidance | Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025 | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full non-electrical joining and gas surface-tempering apparatus versus electric apparatus and separate parts. |
| harris-catalog | handbook | Harris International Industrial Equipment Catalogue, undated, AB_INT0623_EN | https://d347awuzx0kdse.cloudfront.net/harrisproducts/content-file/Harris%20International%20Industrial%20Equipment%20Catalogue.pdf?v=ebf3379622181d378ba2d3273b0d324d22333bb8 | Oxy-acetylene and alternate-fuel welding/brazing configurations and complete kit-specific handle/mixer/regulator/hoses/arrestor/accessory supplied scope; cutting combinations need actual principal-function review. |
| sievert-kit | handbook | Pro 95 Soldering Iron Kits, undated | https://sievert.se/en/products/soldering-iron-systems/pro-95-soldering-iron/kits/ | Actual propane copper-bit soldering assembly and included hose/regulator/empty refillable cylinder; filled No overrides gas-capacity label. |
| sievert-promatic | handbook | Promatic Soldering Iron, undated | https://sievert.se/en/products/soldering-iron-systems/promatic-soldering-iron/ | Propane torch system with piezo ignition and separately sold handle without copper bit; compatible spare list does not prove delivered scope. |
| flame-machines | handbook | Flame Hardening Machines, undated | https://flametreatingsystems.com/flame-hardening-machines/ | Gas/oxygen surface hardening stationary/spin/progressive/combination assemblies, water-cooled heads, quench tank/heat exchange/pump/PLC/pyrometer/chiller/UV sensor; actual tempering/hardening principal function and shipped fluid scope require review. |
