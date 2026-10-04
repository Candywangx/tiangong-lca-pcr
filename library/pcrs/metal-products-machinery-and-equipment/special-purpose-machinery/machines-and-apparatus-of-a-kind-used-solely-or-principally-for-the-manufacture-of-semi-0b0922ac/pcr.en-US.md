---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-and-apparatus-of-a-kind-used-solely-or-principally-for-the-manufacture-of-semi-0b0922ac
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Machines and apparatus used solely or principally to manufacture semiconductor boules, wafers, devices, integrated circuits or flat panel displays

## 1. Scope and Applicability

This PCR covers manufacture of machines/apparatus used solely or principally for semiconductor boule or wafer production, semiconductor-device manufacture, electronic integrated-circuit manufacture or flat-panel-display manufacture. Review each supplied machine’s principal function: applicable crystal growers, semiconductor wafer preparation/dicing, deposition/sputtering, lithography, etching, cleaning and device/IC bonding equipment are distinct configurations rather than one universal fab-tool recipe. Display deposition equipment is explicitly included. Customer substrates, semiconductor devices and display panels made by the machine are not the reference product. Independently supplied parts, general-purpose pumps/chillers/water-treatment units, general testing/metrology equipment and unrelated/solar-only machines require adjacent principal-function review, rather than automatic inclusion because they serve a fab. Auxiliary electrical drives and controls do not define the manufacturing machine’s principal function.

The sources establish contrasting physical architectures and manufacturing interfaces. PVA documents its own vacuum-chamber fabrication and semiconductor CZ configurations; ASML documents supplier modules, own optical parts and cleanroom assembly/test. ULVAC display sputtering uses chamber/transport/pumping structures; Oxford demonstrates plasma/deposition, vacuum loadlocks and gas distribution; EVG covers device/IC bonding, and DISCO a configured wafer dicer. These examples establish applicable interfaces only. Factory documentation must establish the actual stock, module, local processing and acceptance-media amounts. Customer fabrication recipes, catalogue performance and life, generic machine masses and installed-base consumables are never manufacturing defaults.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-and-apparatus-of-a-kind-used-solely-or-principally-for-the-manufacture-of-semi-0b0922ac |
| classification_refs | CPC 3.0 44918; full original semiconductor boule/wafer/device/IC/flat-panel-display manufacturing-machinery scope |
| covered_products | Actual complete principally dedicated machines across all five manufacturing objects and applicable architectures |
| excluded_products | Customer processed goods; independent parts; generic utility/testing units; unreviewed solar-only or unrelated machinery |
| representative_product | One actual accepted configured complete machine, no subtype or component proxy |
| production_route | Actual stock fabrication and/or bought modules; local joining/finishing/cleanroom integration; measured factory acceptance; dispatch |
| market_state | Accepted configured machine with declared supplied hardware/accessory/fill scope |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Actual complete accepted configured machine within the full principal-function category |
| How much | 1 kg accepted configured-machine net mass |
| How well | Actual acceptance requirements and demonstrated configuration, interface cleanliness/leak/electrical/function checks; no default yield or device throughput |
| How long or cycle | One common equipment-manufacturing and acceptance period; no customer lifetime processing cycle |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted configured semiconductor or display manufacturing machine |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Machine model/serial/configuration; actual principal semiconductor boule/wafer/device/IC/display function and mechanism; supplied hardware/options/spares/software/retained fills; own stock/grade/purity/phase/makebuy/cleanroom route; calibrated accepted net mass/BOM; site/period/provider/transport/receiver; actual tests/rejects/rework; native units/state/assays/allocation and identity gaps |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted configured complete-machine net mass collected through cp_mass. Same configuration excludes packing, extra spare stock, rejects and consumed trial substrates/media. |
| native_amount | all inventory rows | actual native property | native unit | Retain each native numerator, including cable Length/m, compressed-air Volume/m3 and Energy; electricity conversion 3.6MJ/kWh. Actual cable kg/m, gas T/P/humidity/density and liquid concentration/density require own same-interface evidence when converting. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received stock/chemicals or completed compatible modules with documented completion |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Entire solely/principally semiconductor boule/wafer/device/IC/display manufacturing-machine category |
| recursive_input_rule | External complete modules embed upstream stock/processing once; local manufacture instead accounts actual ingredients and work; pair and cancel internal transfers |
| upstream_dataset_requirement | Compatible state/type/native unit/chemistry/grade/phase/provider/geography and transport interface |
| disclosure | Actual supplied BOM/options/retained fill/software scope, makebuy/local manufacture and measured test boundary |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_makebuy | Separate complete bought power/optics/vacuum/robot/control/thermal-field modules from local stock fabrication. Component classification does not establish complete machine identity; a bought partly processed item states remaining work. Embedded module chemicals remain upstream once; local assembly ingredients are separate. | asml-manufacture; pva-cz; pva-cgs |
| boundary_test | Include attributable observed manufacture, cleanroom integration, inspection and actual failed/repeated acceptance trials. Separately meter retained shipped fills, consumed/returned test water/gas/chemicals/substrates and customer use. No catalogue recipe, process throughput or stated power × assumed hours establishes factory burden. | asml-manufacture; pva-cz; linde-gases |
| boundary_supply | PVA CGS1218 is a semiconductor example; solar-only1000PV requires review. The hotzone is 32-inch crucible capacity, not 32 crucibles; separate hotzone licence/software and included/available/excluded hardware follow actual order. Example 23000kg is without magnet and excludes concrete pedestal. DISCO DAD weight/power are example ratings; blade inclusion is actual receipt-specific. DWR1722 is an independently supplied DI accessory with optional RO and separate chiller water, not automatic complete44918 equipment; no default99.5% recovery or zero wastewater. | pva-cz; pva-cgs; disco-dicer; disco-water |
| boundary_gases | Air Liquide booklet concerns Research Centres and Universities and Linde lists electronic gases/supply modes. They establish possible chemical identities and supply distinctions, not factory trial adoption or recipe. Actual provider, purity, gas/liquid/solution phase, containers/vaporisation and trial records are required; industrial nitrogen/oxygen cannot automatically replace high-purity electronics gases. | airliquide-gases; linde-gases |
| boundary_controls | Atlas combustion and Proteus plasma are contrasting controls. Proteus does not require hydrocarbon/natural gas; destruction may yield acids captured in wet scrubbers and NOx may occur. Use actual configured control and measured species/byproducts/water/sludge; no catalogue DRE, universal fuel, disappearance assumption or captured-as-destroyed balance. | edwards-atlas; edwards-proteus |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local structural and vacuum-part fabrication | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| assembly | Configured machine assembly | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| finish | Local joining cleaning and surface finishing | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| services | Unassigned shared factory services | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| dispatch | Accepted equipment dispatch and packaging | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |
| residues | Actual waste transfers and direct emissions | conditional | Actual observed compatible equipment operation only; services include only unassigned residual | foreground | per 1 kg reference flow |

### Process: Local structural and vacuum-part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Stainless steel sheet for local vacuum-chamber fabrication (`stainless`)

Actual stainless steel sheet for local vacuum-chamber fabrication crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Stainless steel sheet for local vacuum-chamber fabrication
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Aluminium sheet for local structural fabrication (`aluminium`)

Only actual aluminium sheet thicker than 0.2 mm with own alloy/temper/finish and supplier receipts; local cutting/forming is measured separately.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### T2 copper rod for local conductors (`copper`)

Only actual T2 rod for locally machined conductors or cooling parts, own assay/dimensions/provider; bought complete modules exclude embedded rod.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured machine assembly (`assembly`)

#### Inputs

##### Product flows

###### Bought complete semiconductor manufacturing machine (`boughtmachine`)

Actual bought complete semiconductor manufacturing machine crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought complete semiconductor manufacturing machine
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought complete graphite thermal field (`graphite`)

Only actual bought complete graphite thermal field and exact supplied hotzone configuration, grade and hardware scope. It is a component, never the complete equipment reference; no assumed heater or crucible count.

- Selected flow: Graphite thermal field `b20109c6-15a3-431f-b5e5-21df0a2da18f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied fused-silica crucible (`quartz`)

Actual supplied fused-silica crucible crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied fused-silica crucible
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied alumina ceramic insulator (`alumina`)

Actual supplied alumina ceramic insulator crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied alumina ceramic insulator
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied PFA tube (`pfa`)

Actual supplied pfa tube crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied PFA tube
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied fluoroelastomer gasket (`viton`)

Actual supplied fluoroelastomer gasket crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied fluoroelastomer gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied low-voltage power cable (`cable`)

Only actual <=1000 V power-cable construction and provider; measure received/cut/installed/returned Length in m. Same-construction measured kg/m is required only for physical mass reconciliation; RF cable is distinct.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied roller bearing (`bearing`)

Actual finished roller-bearing subtype, size, grade and supplied state; weigh received installed bearings and returns, excluding those embedded in complete bought stages or spindles.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied steel assembly screw (`screw`)

Actual finished steel assembly screw with own size/grade/finish/provider and measured installed stock/returns; no generic fastener count.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought complete vacuum chamber (`chamber`)

Actual bought complete vacuum chamber crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought complete vacuum chamber
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought dry vacuum pump (`drypump`)

Actual bought dry vacuum pump crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought dry vacuum pump
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought turbomolecular pump (`turbo`)

Actual bought turbomolecular pump crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought turbomolecular pump
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought RF power generator (`rf`)

Actual bought rf power generator crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought RF power generator
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought mass flow controller (`mfc`)

Actual bought mass flow controller crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought mass flow controller
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought precision wafer stage (`stage`)

Actual bought precision wafer stage crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought precision wafer stage
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought wafer handling robot (`robot`)

Actual bought wafer handling robot crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought wafer handling robot
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought industrial water chiller (`chiller`)

Only an actually included complete non-household refrigeration water-chiller interface with compatible supplier, circuit and charge. Embedded refrigerant manufacture remains upstream once; locally added fill is independently identified.

- Selected flow: Refrigerating and freezing equipment and heat pumps, except household type equipment `0c1bef08-e0fc-465a-aff0-c3a43837edbc`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Bought lithography projection optics module (`optics`)

Actual bought lithography projection optics module crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Bought lithography projection optics module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied graphite resistance heater (`heater`)

Actual supplied graphite resistance heater crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied graphite resistance heater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied electromagnet (`magnet`)

Actual supplied electromagnet crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied electromagnet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied populated control board (`pcb`)

Actual supplied populated control board crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied populated control board
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Supplied dicing saw spindle (`spindle`)

Actual supplied dicing saw spindle crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Supplied dicing saw spindle
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

###### Retained supplied deionised-water fill (`retained_di`)

Only actual measured DI water retained within the supplied accepted configured machine, own supplier/purity/water fraction/temperature/density. Empty cooling passages or a catalogue option do not establish fill; factory-test consumption and returns are separate.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: pva-cgs; ulvac-display; evg-bond; asml-euv; oxford-etch; disco-dicer

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Local joining cleaning and surface finishing (`finish`)

#### Inputs

##### Product flows

###### Factory process water (`water`)

Actual treated industrial process-water interface and own water quality/fraction/temperature/density, supply/return stocks and local cleaning burden; not ultrapure process water by name.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local equipment-cleaning isopropanol (`ipa`)

Only actual compatible CN at-plant isopropanol supply for local equipment cleaning, own purity/water/contaminant assay; electronic-grade purity is not inferred.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local equipment-cleaning acetone (`acetone`)

Actual local equipment-cleaning acetone crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Local equipment-cleaning acetone
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local surface-finishing nitric acid (`nitric`)

Only actual 40% nitric acid supplied for local equipment finishing, own concentration/provider/density and measured preparation/reaction/returns; not a universal electronic wet-clean recipe.

- Selected flow: Nitric acid `bf883501-c052-414e-8e21-e6f53cc257ba`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local surface-finishing sulfuric acid (`acid`)

Only actual industrial sulfuric acid 93–98% supplied for local fabrication/finishing, own assay/provider and dilution; high-purity electronic supply is distinct.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local cleaning sodium hydroxide (`alkali`)

Only actual solid industrial NaOH 95–98%, own purity/moisture/provider and preparation records; weigh physical product, not assumed active mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

###### Local chamber-joining stainless steel welding wire (`weld`)

Actual local chamber-joining stainless steel welding wire crossing the declared equipment-fabrication or assembly boundary; record own grade/completion/dimensions/provider, measured stock and returns. Complete bought modules embed their manufacture once; an unmatched generic component does not establish this interface.

- Selected flow: Local chamber-joining stainless steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: pva-cz; asml-manufacture

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual factory inspection and acceptance trials (`test`)

#### Inputs

##### Product flows

###### Supplied indium tin oxide sputtering target (`target`)

Only actual supplied indium tin oxide sputtering target consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Supplied indium tin oxide sputtering target
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test deionised water (`di`)

Only actual factory-test DI water, matching own ion-exchange/RO supply purity, water fraction and temperature/density. Meter supply/returns, retained shipment fill and discharged test water separately; no default ultrapure specification or recovery.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test high-purity argon gas (`argon`)

Only actual factory-test high-purity argon gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test high-purity argon gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test high-purity nitrogen gas (`nitrogen`)

Only actual factory-test high-purity nitrogen gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test high-purity nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test helium gas (`helium`)

Only actual factory-test helium gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test helium gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test high-purity hydrogen gas (`hydrogen`)

Only actual factory-test high-purity hydrogen gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test high-purity hydrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test gaseous oxygen (`oxygen`)

Only actual gaseous oxygen at-plant cryogenic air-separation supply, matched provider/purity/phase and measured factory trial receipts. This industrial interface does not establish electronic high-purity oxygen; no liquid supply without vaporisation accounting.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test monosilane gas (`silane`)

Only actual pure monosilane SiH4 CAS7803-62-5 gas from the compatible disproportionation supply interface, own electronics-grade purity/provider/phase and cylinder consumption; not an organosilane or universal deposition recipe.

- Selected flow: Silane `2b6e6900-7be6-41d1-bda9-060e8303f96f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test ammonia gas (`ammonia`)

Only actual factory-test ammonia gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test ammonia gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test nitrogen trifluoride gas (`nf3`)

Only actual factory-test nitrogen trifluoride gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test nitrogen trifluoride gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test sulfur hexafluoride gas (`sf6`)

Only actual factory-test sulfur hexafluoride gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test sulfur hexafluoride gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test tetrafluoromethane gas (`cf4`)

Only actual factory-test tetrafluoromethane gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test tetrafluoromethane gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test octafluorocyclobutane gas (`c4f8`)

Only actual factory-test octafluorocyclobutane gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test octafluorocyclobutane gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test nitrous oxide gas (`n2o`)

Only actual factory-test nitrous oxide gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test nitrous oxide gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test tungsten hexafluoride (`wf6`)

Only actual factory-test tungsten hexafluoride consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test tungsten hexafluoride
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test dichlorosilane (`sich2`)

Only actual factory-test dichlorosilane consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test dichlorosilane
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test tetraethyl orthosilicate (`teos`)

Only actual factory-test tetraethyl orthosilicate consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test tetraethyl orthosilicate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test aqueous hydrofluoric acid (`hf`)

Only actual factory-test aqueous hydrofluoric acid consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test aqueous hydrofluoric acid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test 30% aqueous hydrochloric acid (`hcl`)

Only actual 30% aqueous HCl CAS7647-01-0 used in a documented factory acceptance trial, matched provider and own assay/density. It cannot stand for gaseous electronic hydrogen chloride.

- Selected flow: Hydrochloric acid (30%) `56414d25-a353-4d67-b362-87212ce6011d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test hydrogen peroxide solution (`peroxide`)

Only actual factory-test hydrogen peroxide solution consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test hydrogen peroxide solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test semiconductor silicon wafer (`siwafer`)

Only actual factory-test semiconductor silicon wafer consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test semiconductor silicon wafer
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-test positive photoresist (`resist`)

Only actual factory-test positive photoresist consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-test positive photoresist
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory-growth-test semiconductor polysilicon (`silicon`)

Only actual factory-growth-test semiconductor polysilicon consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory-growth-test semiconductor polysilicon
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory EUV-source-test tin rod feed (`tin`)

Only actual compatible metallic tin rod CAS7440-31-5 delivered for an observed EUV-source factory trial with measured own purity and rod-to-melt preparation. Supplier tin rod is not automatically droplet-ready feed; no catalogue pulse-rate consumption.

- Selected flow: Tin Rod `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory protective-atmosphere nitrogen (`nitrogenpurge`)

Only actual at-plant protective-atmosphere nitrogen used for equipment assembly/purge/inspection with matching provider/purity/gas state. It is not automatically high-purity deposition nitrogen.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

###### Factory combustion-abatement natural gas (`ng`)

Only actual factory combustion-abatement natural gas consumed in documented equipment factory acceptance, with own purity/assay/phase/provider, pressure/temperature and stocks/returns. Equipment customer processing recipes and lifetime media are excluded; an unresolved supply identity is not a proxy.

- Selected flow: Factory combustion-abatement natural gas
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: asml-manufacture; pva-cz; airliquide-gases; linde-gases

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned shared factory services (`services`)

#### Inputs

##### Product flows

###### Factory electricity (`electricity`)

Only actual compatible CN user-side <1kV grid-average electricity, common-period fabrication/assembly/cleanroom/factory-test/dispatch meters. Reconcile imports, actual generation, exports/storage and only unassigned service residual.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Factory compressed air (`air`)

Actual bought compressed-air volume with own delivery pressure/temperature/humidity and provider. Onsite compressed-air production instead counts own measured power and separate losses once.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Purchased industrial heat (`heat`)

Only matching actual CN natural-gas industrial heat supply, own supplied/returned enthalpy on one datum. Deduct gross return once; already-net heat is not reduced twice; supplier fuel stays upstream.

- Selected flow: Heat, district or industrial, natural gas `eb581eb3-c707-41a0-b4e6-ee1854551714`
- Flow property / unit: Energy / MJ
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utilities
- Sources:

###### Service tap water (`tap`)

Actual tap-water supplier and measured common-period service supply/returns, own water fraction/temperature/density; only unassigned shared residual, no duplicated cleaning or test water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
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

### Process: Accepted equipment dispatch and packaging (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated packaging board (`board`)

Actual C/E/F corrugated board with >=80% fibre, own provider/recycled fraction and measured packing mass outside equipment Dnet.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; pva-cgs

###### LDPE packaging foil (`film`)

Only actual PE-LD non-self-adhesive/noncellular/nonreinforced/nonlaminated/unsupported foil with own thickness/grade/provider; weigh packing outside Dnet.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; pva-cgs

###### Dispatch wood pallet (`pallet`)

Only actual wood EURO pallet construction/provider and measured mass with documented reuse/return share, outside equipment net mass.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; pva-cgs

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configured semiconductor or display manufacturing machine (`finished`)

One complete accepted machine used solely or principally for the declared semiconductor boule/wafer/device/IC/flat-panel-display manufacturing function, calibrated configured net mass excluding packaging, rejects and consumed trial substrates/media.

- Selected flow: Accepted configured semiconductor or display manufacturing machine
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; pva-cgs

##### Waste flows

##### Elementary flows

### Process: Actual waste transfers and direct emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Outgoing steel machining scrap (`wsteel`)

Only unprocessed actual industrial steel machining scrap leaving site, own alloy/oil/water assay, stock/returns and receiving route; internal recycled stock is separate.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing copper machining scrap (`wcu`)

Only actual weighed copper scrap transfer compatible with hydrometallurgical receiver route, own Cu/alloy/moisture/oil composition, stock/returns and receiver records.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing graphite machining waste (`wgraphite`)

Actual weighed outgoing graphite machining waste leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Outgoing graphite machining waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing waste quartz crucible (`wquartz`)

Only actual waste quartz crucible transferred after equipment factory trial or rejection, own silica/contamination/moisture assay and receiving route; no assumed lifetime replacement.

- Selected flow: Waste quartz crucible `3db2ae0b-f79d-42d1-9c1f-7d9594085dbd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing spent isopropanol (`spentipa`)

Actual weighed outgoing spent isopropanol leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Outgoing spent isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing industrial wastewater (`wastewater`)

Actual weighed outgoing industrial wastewater leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Outgoing industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing metal hydroxide sludge (`sludge`)

Actual weighed outgoing metal hydroxide sludge leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Outgoing metal hydroxide sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing calcium fluoride waste (`fluoride`)

Only actual measured calcium-fluoride waste from observed local factory-test treatment, own CaF2/moisture/contaminant assay and receiving route. Gross mixed sludge is not contained fluoride mass.

- Selected flow: Calcium fluoride waste `b0edd7b4-ad53-4d05-8bcd-cdb05a6eae03`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing silicon factory-test scrap (`testwaste`)

Only actual silicon scrap transferred from factory acceptance trials, own Si/dopant/coating/moisture assay, reuse/stock/returns and receiver route; not all mixed test substrates.

- Selected flow: Silicon scrap `14ed622c-2306-4edb-b860-2a0779216299`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Transferred collected metal grinding dust (`dust`)

Actual weighed transferred collected metal grinding dust leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Transferred collected metal grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

###### Outgoing LDPE packaging waste (`wfilm`)

Actual weighed outgoing ldpe packaging waste leaving the equipment manufacturing site: collect its own composition/moisture, stocks/returns and receiving route. The queried unmatched identity remains unavailable; non-air waste is separate from measured air.

- Selected flow: Outgoing LDPE packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources: edwards-atlas; edwards-proteus

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only actual fossil carbon dioxide to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Fossil origin must be independently documented; supplier electricity/heat emissions remain upstream.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Fossil carbon monoxide to air (`co`)

Only actual fossil carbon monoxide to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Fossil origin must be independently documented; supplier electricity/heat emissions remain upstream.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Isopropanol to air (`ipair`)

Only actual isopropanol to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Acetone to air (`acetair`)

Only actual acetone to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Water vapour to air (`vapor`)

Only actual water vapour to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Molecular nitrogen dioxide to air (`no2`)

Only actual molecular nitrogen dioxide to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Molecular NO2 is distinct from NOx reported as NO2-equivalent; carbon closure cannot infer it.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### PM10 to air (`pm10`)

Only actual pm10 to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. PM10 includes finer fractions; avoid double-counting constituent elemental emissions.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Hydrogen fluoride to air (`hf_air`)

Only actual hydrogen fluoride to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: Hydrogen fluoride to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Hydrogen chloride to air (`hcl_air`)

Only actual hydrogen chloride to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Ammonia to air (`ammonia_air`)

Only actual ammonia to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Nitrogen trifluoride to air (`nf3_air`)

Only actual nitrogen trifluoride to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: nitrogen trifluoride `23bfd19e-9751-4b06-81f4-93b069a3fd56`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Sulfur hexafluoride to air (`sf6_air`)

Only actual sulfur hexafluoride to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: sulphur hexafluoride `fe0acd60-3ddc-11dd-ac51-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Tetrafluoromethane to air (`cf4_air`)

Only actual tetrafluoromethane to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: Tetrafluoromethane to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Octafluorocyclobutane to air (`c4f8_air`)

Only actual octafluorocyclobutane to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: Octafluorocyclobutane to air
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Nitrous oxide to air (`n2o_air`)

Only actual nitrous oxide to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Copper to air (`copperair`)

Only actual copper to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Gross alloy/oxide/salt mass differs from contained element. Native generic flow covers metal and ions; prefer separately queried matching individual species if the actual LCIA method differentiates them.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Hexavalent chromium to air (`chromiumair`)

Only actual hexavalent chromium to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Own Cr(VI) assay is required, not total chromium or metallic coating mass.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus

###### Nickel to air (`nickelair`)

Only actual nickel to air from observed local equipment manufacture or factory acceptance, with species/CAS/origin and ordinary unspecified-air compartment; sample after actual controls with matched concentration, flow, time and state plus independent fugitive measurement. Captured or dissolved species remain non-air. Gross alloy/oxide/salt mass differs from contained element. Native generic flow covers metal and ions; prefer separately queried matching individual species if the actual LCIA method differentiates them.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources: edwards-atlas; edwards-proteus


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_configuration | Separate configurations, fabrication/assembly/test meters and actual accepted outputs first; same-period allocation uses causal measured machine-hours or service demand, never generic catalogue throughput. Include attributable failed trials/rejects/rework in accepted-equipment burdens; paired internal transfers cancel. Recovered sale products and receiver treatment disclose separate allocation without invented avoided burdens. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted configured machine | foreground_record | model; configuration; serial; calibrated accepted net masses; Naccepted; Dnet; included options/fills | Use calibrated traceable weighing of the accepted complete machine and its actual supplied configuration, excluding packaging, extra spare stock, rejects and consumed trials; reconcile accepted ledger and sum net masses within one configuration/period. | kg | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_materials | fabrication | local stock and ingredients | foreground_record | Qattr; own gross mass/assay/moisture/density; stock; returns; reactions; retained hardware; bath/coat/cleaning route | Weigh actual own stock/chemical receipts, use own grade/formulation and each stream assay to reconcile cutting/retention/reaction/recovery/waste stocks and returns; upstream embedded complete-module materials are excluded. | kg | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_modules | assembly | hardware and retained ingredient interfaces | foreground_record | Qattr; BOM; completion; hardware mass/length; included options/software; separate chemical formula/assay/phase; stock/return/retained fill | Hardware branch weighs or measures actual completed received/installed/returned modules and cable lengths, then documents remaining local work; embedded chemical manufacture is upstream once. Chemical-ingredient branch measures each local added gas/fill/flux separately in its own native units, with own composition/moisture/T/P/density, stocks/reactions/retention/returns. Whole module hardware mass never establishes a chemical amount; actual local joining ingredients remain separate. | native unit | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_tests | test | actual acceptance media | foreground_record | Qattr; test purpose/configuration; trials/repeats/failures; own chemical/gas/substrate purity/phase/provider; amount/stocks/returns; source/deposition/etch/bond/dice/growth load | Meter or weigh only observed attributable factory acceptance media and utilities, including failed/repeated tests. Measure each species, retained shipment fill and consumed/recovered/returned media independently. Supplier architecture/media listings provide no factory recipe; customer processing and later maintenance remain outside equipment manufacture. | native unit | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_utilities | services | factory utilities | foreground_record | Qattr; common-period imports; actual generation; exports; storage; process meters; supply/return state/enthalpy | Reconcile common-period imported and actual generated utilities against exports/storage and measured fabrication/assembly/cleanroom/test/dispatch loads; services allocate only unassigned residual. Investigate negative balances without clipping. Gross heat subtracts independently measured return mass times its own enthalpy once on the same datum; net heat never deducts twice. Keep physical water/steam separate from energy and supplier boiler fuel upstream. | native unit | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_dispatch | dispatch | supplied machine and packing | foreground_record | Qattr; accepted BOM/net mass; packing stock/reuse/returns; supplier/transport; actual included hardware/fill | Measure actual supplied configuration net hardware/fill through cp_mass and weigh each packing material separately with own reuse/return basis. No catalogue option, replacement list or customer operating consumable establishes shipment. | kg | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_wastes | residues | actual non-air transfers | foreground_record | Qattr; weighed transfers; own composition/moisture/species; stock/returns; receiver; treatment route; water fraction/density | Measure each actual external waste separately, reconcile own wet/dry/composition stocks/reuse/returns and receiver route; contained metals/fluoride differ from gross waste. Actual wastewater uses its own fraction/density/dissolved/suspended load and discharge interface. Captured/dissolved media remain non-air; external receiver emissions are upstream treatment, not fictional site releases. | kg | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |
| cp_emissions | residues | each observed emitted species | foreground_record | Qattr; CAS/species/origin/compartment; post-control concentration; matched flow/time; T/P/wet-dry/O2/unit correction; fugitive sampling; control/byproducts | Measure actual species after configured controls as concentration times matched gas/liquid flow and same-period time with actual state corrections plus independent fugitives. Actual inlet/deposited/retained/recovered/destruction/scrubber/sludge stocks are independent; catalogue DRE and unexplained residuals never infer air. Molecular NO2 differs from NOx-equivalent; own elemental assay differs from gross oxide/PM and prevents overlap. | kg | each actual batch and matched interval | one common production period | same declared configuration and sites | per 1 kg reference flow | calibration; original receipts; own assays; acceptance/BOM; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Within one actual configuration/period divide each attributable native-unit exchange total by the sum of calibrated accepted complete-machine net masses; retain raw quantities and uncertainty. | Qattr; Dnet; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Same configuration/period Qattr includes attributable stock/assembly/cleanroom/test/reject/rework burdens; Naccepted counts accepted complete machines and Dnet sums their calibrated net masses. Per-machine exchange=Qattr/Naccepted; actual mean net mass=Dnet/Naccepted; per-kg exchange=Qattr/Dnet. Keep native numerator; no catalogue weight, process throughput or trial duration is a default. | same-configuration calibrated weighing and accepted ledger |
| quality_physical | all inventory rows | Every element/species term uses its own gross mass, assay, moisture/wet-dry basis, stocks/reactions/retention/returns; alloy/sludge/solution mass differs from contained elements/chemicals. Each water stream uses own water fraction/density at actual temperature, reactions, retained fill, evaporation, discharge and stocks; paired internal returns cancel. | own stream assay/stock/reaction/state measurements |
| quality_solvent | ipa; acetone; spentipa; ipair; acetair; wastewater | Reconcile each solvent’s own assays and stock/retained/recovered/captured/destruction/wastewater/spent-media fates against independent actual air measurement. Capture differs from destruction; non-air and unexplained residual cannot become air. | independent fate measurements |
| quality_gases | all inventory rows | Each factory-test gas/precursor requires actual CAS/species, phase/purity/provider/container/vaporisation and cylinder/line stock/return records. Own reaction/byproduct retention and wet-scrubber fates are independent of inlet gas or catalogue DRE. Industrial O2/protective N2 are not electronic-grade by default; electronic supply listing is not factory consumption evidence. | actual suppliers/assays/test and control records |
| quality_scope | reference product | Retain entire boule/wafer/device/IC/display principal-function boundary and actual supplied hardware/options/software/retained fills. PVA32-inch crucible is a size; its without-magnet weight is not general Dnet. General DI recycling/chillers/pumps/metrology and independently supplied parts require adjacent review. | actual order/BOM and primary technical originals |
| quality_identity | all inventory rows | Match actual published state100/type/native reference internal ID/property/unitgroup, official bilingual name, full classification/chemistry/grade/phase/provider/geography and elementary origin/compartment. Add every actual unlisted material, chemical gas/fuel/refrigerant/fill, module, blade/filter/resin, transport, waste and emission as an independently queried atomic measured exchange. Unresolved reference/components/chemicals/wastes remain gaps; missing differs from zero and not-applicable requires physical evidence. | own full direct identity and supplier/configuration evidence |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require actual complete configured machine’s principal semiconductor boule/wafer/device/IC/display manufacturing function and equivalent bilingual one-kg net reference; reject graphite hotzone/Al-Si-Ag mixture, independent utility or customer product as full machinery proxy. | cpc |
| validate_makebuy | Require actual completed supply/configured BOM and local makebuy/cleanroom/test boundary; reject duplicated embedded module manufacture, assumed catalogue fill/options, customer recipes and lifetime consumables as factory burden. Include attributable failed/repeated trials and rework. | cpc; pva-cz; pva-cgs; ulvac-display; evg-bond; asml-manufacture; asml-products; asml-euv; tel-product; oxford-deposition; oxford-etch; disco-dicer; disco-water; edwards-atlas; edwards-proteus; airliquide-gases; linde-gases |
| validate_balances | Require own-stream element/water/solvent balances and post-control species concentration × matched flow/time/state plus independent fugitives. Utility common-period imports/actual generation/exports/storage reconcile assigned meters and only unassigned residual; gross heat deducts independent same-datum return once and net heat never twice. |  |
| validate_species | Require molecular NO2 rather than NOx-equivalent, actual Cr(VI) rather than total Cr, own contained metal rather than gross salts/oxides, and non-overlapping PM/element accounting. Prefer individually differentiated Ni/Cu species for applicable LCIA methods. Catalogue DRE and chemistry name cannot establish destruction, supply phase, purity or emitted species; captured/dissolved species stay non-air. Report actual performed/skipped checks, findings and completeness. | edwards-atlas; edwards-proteus |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual declared configured manufacture of principally dedicated semiconductor boule/wafer/device/IC/display machinery |
| excluded_use | Component/utility proxies, customer processed products/recipes, catalogue mass/performance or universal factory gas assumptions |
| required_metadata | All reference qualifiers, same-configuration Qattr/Naccepted/Dnet, native units and own assays/state, actual BOM/makebuy/test/provider/transport/receiver/allocation and gaps |
| required_quality_disclosure | Measured/estimated/missing, calibrated sampling/uncertainty, physical residuals and identity/scope gaps, actual performed/skipped check completeness |
| update_trigger | Machine principal function/configuration/BOM/grade/purity/phase/provider/makebuy/site/period/acceptance or treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| pva-cz | handbook | Czochralski Process | https://www.pvatepla.com/products-technologies/crystal-growth/czochralski-process/ | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| pva-cgs | handbook | Czochralski crystal growing system CGS1218 | https://www.pvatepla.com/fileadmin/sitepackage/pdf/brochures/PVA_CGS1218.pdf | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| ulvac-display | handbook | SMD vertical sputtering system | https://www.ulvac.co.jp/en/products/sputtering_system/smd-vertical/ | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| evg-bond | handbook | Wafer bonding systems | https://www.evgroup.com/products/bonding/ | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| asml-manufacture | handbook | Manufacturing at ASML | https://www.asml.com/careers/teams/manufacturing | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| asml-products | handbook | ASML lithography products | https://www.asml.com/en/products | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| asml-euv | handbook | EUV lithography systems | https://www.asml.com/en/products/euv-lithography-systems | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| tel-product | handbook | Semiconductor production process | https://www.tel.com/product/ | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| oxford-deposition | handbook | PlasmaPro 100 ICPCVD | https://plasma.oxinst.com/products/icpcvd/plasmapro-100-icpcvd | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| oxford-etch | handbook | Deep Silicon Etch System 100 | https://plasma.oxinst.com/assets/uploads/Estrelas_Brochure.pdf | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| disco-dicer | handbook | DAD3651 Automatic Dicing Saw | https://www.disco.co.jp/eg/products/dicer/dad3651.html | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| disco-water | handbook | DWR1722 DI water recycling unit | https://www.disco.co.jp/eg/products/accessory/dwr1722.html | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| edwards-atlas | handbook | Atlas combustion gas abatement | https://www.edwardsvacuum.com/en-us/semiconductor/our-products/atlas | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| edwards-proteus | handbook | Proteus plasma gas abatement | https://www.edwardsvacuum.com/en-us/semiconductor/our-products/proteus | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| airliquide-gases | handbook | Air Liquide – one supplier for gases, equipment and services: Delivering expertise to Research Centres and Universities | https://uk.airliquide.com/statics/2022-08/ra_nwe_brochure_2_0.pdf | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
| linde-gases | handbook | First choice for electronics specialty gases worldwide | https://www.linde-gas.com/products-and-services/gases/specialty-gases-for-electronics | Actual primary category/architecture/manufacturing or supply/control interface only; no universal mass, inclusion, recipe, yield, load, life or destruction factor. |
