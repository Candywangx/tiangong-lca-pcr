---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stand-alone-photocopiers-printers-and-facsimile-machines
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Stand-alone photocopiers, printers and facsimile machines

## 1. Scope and Applicability

Manufacture of NEW accepted complete photocopiers, label/barcode/similar printers, blueprinters and dedicated facsimile machines that cannot connect to an automatic data processing machine. Non-PC marketing mode does not prove non-connectability: verify model/version/interface specification including USB, Ethernet, Bluetooth, wireless, storage/host protocols and options. Exclude ADP inkjet45263, laser45264 and other printers45265, and machines performing two or more independent printing/scanning/copying/fax functions45266. An integrated controller is not external ADP connectivity; repeated copies of entered labels are not document photocopy. A fax scans/marks internally to transmit/receive, but any independent document copy, scan-to-file or print-from-PC function triggers the applicable neighboring boundary. Printing/bookbinding/prepress44914, office sheetfed offset45150 and separately supplied parts44942 do not become reference equipment because used beside it. Consumable paper/toner/ribbons, finished cartridges, independent generic power/electronic components and repair/refurbishment differ from new whole-equipment manufacture.

Current Brother PT-H110 explicit non-PC/Mac-connectability is a qualified label-printer example, not the whole category. Actual H110 head/cassette/cutter/LCD/power interfaces do not establish material chemistry or all included accessories. Canon2004 partial archived manual supplies a historical electrostatic-copier interface example, Navy1982 Model842 shows mechanical diazo exposure/development, and CLR1966 shows telephone-coupled fax send/receive architecture. Historical documents do not prove current manufacture or complete absence of every option; verify each real product. The category remains complete across photocopy, label/barcode/similar printing, blueprinting and fax architectures, with model-specific qualifying interfaces and evidence gaps. No universal recipe/BOM, mass, output speed, rated power, operating-media dose or lifetime yield is implied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.stand-alone-photocopiers-printers-and-facsimile-machines |
| classification_refs | CPC3.0:44917 |
| covered_products | Complete new non-ADP stand-alone photocopiers, label/barcode/similar printers, blueprinters and dedicated fax equipment |
| excluded_products | ADP-connectable and multifunction printers; other printing/offset equipment; independent parts/components/media; repair/refurbishment |
| representative_product | Actual qualified configured complete model, with supplied accessories/media retained declared |
| production_route | Actual make/buy frame/housing/optical/electronic/drive branches, assembly, local joining/cleaning, inspection/trials, delivery |
| market_state | NEW accepted complete equipment at factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted new complete qualified stand-alone equipment of the declared configuration |
| How much | 1 kg accepted net equipment |
| How well | Documented non-ADP and independent-function qualification, actual supplied BOM, inspection and acceptance |
| How long or cycle | Declared factory period/batch through final acceptance; no customer-life reference |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Stand-alone photocopiers, printers and facsimile machines `a53a7efd-a321-47a2-9460-c436ef86f4d2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual subtype/model/version/function/interface non-ADP and non-MFP qualification; site/period/order/configuration/BOM/makebuy; accepted serial numbers/Naccepted/Dnet/M; actual included/excluded cartridges/tape/batteries/adaptor/cord/trays/retained fill; acceptance/tests/reject/rework/allocation/providers/native units/assay/gaps |

Required qualifiers must be disclosed in foreground data-package metadata/reference description or equivalent fields; missing qualifiers make the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| native_quantities | all inventory rows | Actual native reference property | actual native unit | Preserve battery Item(s), cable m, flux/water/air m3 and heat/electricity actual energy datum where compatible; do not force kg or reinterpret reference internal IDs. Meter conversions require own calibration/T/P/density/assay. |
| physical_ingredients | all inventory rows | Mass | kg | Whole bought hardware and local chemical ingredients are separate branches. Every actual chemical/alloy/solution uses its own assay/moisture/reaction/stocks/returns/retained quantity; module mass is not contained chemical mass. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received raw/intermediate/component states for manufacture of NEW equipment |
| starting_condition_role | foreground_anchor |
| product_classification_scope | Full qualified non-ADP photocopy/label-barcode/blueprint/fax equipment scope |
| recursive_input_rule | Include upstream provider burden of every actually used purchased input once; exclusive complete-module versus constituent branches |
| upstream_dataset_requirement | Compatible supply grade/form/state/provider/voltage/route/period/native unit; unresolved provider identity remains a gap |
| disclosure | Make/buy and remaining work; factory trials/reject/rework; retained delivered media; packaging and measured wastes; no customer page/transmission/developer lifetime burden |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_makebuy | foreground_system_boundary | Include every actual received module or raw ingredient upstream once and measured local assembly/test/reject/rework/dispatch. Cancel paired internal transfers. Declare actual starting completion state and supplier. |  |
| boundary_tests | foreground_system_boundary | Separate consumed factory trial media from actually shipped retained media and customer operating/lifetime media; no rated use factor becomes a manufacturing quantity. | brother-manual; canon-pc150-page20; navy-blueprinter; fax-study |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Actual local frame housing and mechanical fabrication | conditional | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| assembly | Configured stand-alone equipment assembly | required | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| local | Actual local joining bonding and cleaning | conditional | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | required | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| services | Unassigned common-period factory utilities | conditional | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| dispatch | Accepted equipment delivery and packaging | required | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |
| residues | Measured outgoing wastes and direct emissions | required | Actual eligible manufacturing/acceptance activity and exchange only | foreground_process | per 1 kg reference flow |


### Process: Actual local frame housing and mechanical fabrication (`fabrication`)

#### Inputs

##### Product flows

###### cold rolled non alloy steel sheet (`steel`)

Actual cold rolled non alloy steel sheet used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: cold rolled non alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### aluminium sheet (`aluminium`)

Only actual aluminium plate/sheet/strip thicker than0.2mm, matching own alloy/form and supply interface; thinner foil and complete bought frame differ. No catalogue casing grade or thickness default.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### copper wire (`copper`)

Actual supplied copper wire, not an insulated complete cable or alloy/coil-module mass; verify own copper grade/form/assay/provider without copying the comment’s C122 example as a universal recipe.

- Selected flow: copper wire `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### ABS granulate (`abs`)

Actual ABS granulate34720 for evidenced local moulding, own blend/additives/moisture/grade/provider; finished purchased housing and its upstream polymer are exclusive branches.

- Selected flow: acrylonitrile-butadiene-styrene granulate (ABS) `4f197be0-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### polycarbonate granulate (`pc`)

Actual polycarbonate primary granulate34740 at plant with own grade/mixture/additives/moisture/provider; no source picture proves polycarbonate in every casing or keyboard.

- Selected flow: Polycarbonate granulate `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### polyoxymethylene granulate (`pom`)

Actual polyoxymethylene granulate used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: polyoxymethylene granulate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### PET film (`pet`)

Actual PET film used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: PET film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### flat glass sheet (`glass`)

Only actually received float glass sheets matching supplier evidence of float manufacture, sheet form, optical requirements, dimensions, thickness and supplied completion. Native37113 includes a ground/polished branch: verify the actual supplied float branch and actual machining; neither2mm nor a finished platen/cylindrical exposure assembly is assumed. Measure receipts/stocks/returns/cutting losses and local work; complete bought platen embeds glass upstream once.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources: canon-pc150-page17

###### silicone rubber (`silicone`)

Actual silicone rubber used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: silicone rubber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### nitrile rubber (`nbr`)

Actual nitrile rubber used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: nitrile rubber
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

### Process: Configured stand-alone equipment assembly (`assembly`)

#### Inputs

##### Product flows

###### thermal print head (`head`)

Actual thermal print head received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: thermal print head
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: brother-manual

###### laminated label tape cassette (`cassette`)

Actual complete bought cassette matching supplier/order/completion/model/interface; measure receipts/installation/stocks/returns and actual local work. Complete assembly upstream counted once. Identify each physical received complete unit once. Installed, shipped retained and trial-consumed roles partition that single receipt ledger; assigning remaining media to a retained card creates no second upstream purchase. Do not sum overlapping cards or add embedded ribbon/toner raw inputs. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: laminated label tape cassette
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: brother-h110; brother-manual; brother-tape

###### photocopier toner cartridge (`tonercart`)

Actual complete bought tonercart matching supplier/order/completion/model/interface; measure receipts/installation/stocks/returns and actual local work. Complete assembly upstream counted once. Identify each physical received complete unit once. Installed, shipped retained and trial-consumed roles partition that single receipt ledger; assigning remaining media to a retained card creates no second upstream purchase. Do not sum overlapping cards or add embedded ribbon/toner raw inputs. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: photocopier toner cartridge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page20

###### photoconductor drum (`drum`)

Actual photoconductor drum received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: photoconductor drum
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page58

###### printer fuser roller (`roller`)

Actual printer fuser roller received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: printer fuser roller
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page58

###### ultraviolet discharge lamp (`lamp`)

Actual ultraviolet discharge lamp received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: ultraviolet discharge lamp
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: navy-blueprinter

###### printed circuit board assembly (`board`)

Actual complete compatible PCBA received from upstream at plant in China, with assembly completion/supplier/order/interface verified. An embedded controller does not itself establish external ADP connectability. Do not add its embedded copper, resins, solder or purchased electronic ingredients again.

- Selected flow: Electronic components and PCB assemblies `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### DC motor (`motor`)

Actual DC motor received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: DC motor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### power transformer (`transformer`)

Actual power transformer received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: power transformer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### LCD display module (`display`)

Actual LCD display module received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: LCD display module
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### AC DC power adaptor (`adaptor`)

Actual AC DC power adaptor received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: AC DC power adaptor
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### steel screw fastener (`fastener`)

Actual steel screw fastener received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### Installed low-voltage power cable (`cable`)

Actual compatible low-voltage power cable0.6/1kV to GB/T12706.1-2020, own conductor/sheath/cross-section/provider; native Length/m. This is not arbitrary USB data ribbon or every internal harness. Record measured installed lengths and cut/waste/returns independently.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources:

###### Bought photocopier paper tray (`papertray`)

Actual Bought photocopier paper tray received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: Bought photocopier paper tray
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page20

###### Bought appliance power cord (`powercord`)

Actual Bought appliance power cord received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: Bought appliance power cord
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page20

###### Bought fax telephone acoustic coupler (`coupler`)

Actual Bought fax telephone acoustic coupler received with its own supplier/order/completion/model/interface and installed net hardware. Measure receipts/installation/stocks/returns/remaining local work; complete bought assembly upstream counted once, never its embedded ingredient quantities again. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: Bought fax telephone acoustic coupler
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: fax-study

###### Actually retained first-supply laminated label tape cassette (`retained_cassette`)

Only separately evidenced Actually retained first-supply laminated label tape cassette delivered with the accepted equipment, matching the actual supplier/order/configuration, own composition/form/interface and physical amount. Reconcile actual shipped remaining amount with configured Dnet and acceptance; no assumed battery count, fill, cassette or cartridge inclusion. Factory trial consumption is measured on its separate trial card and excluded here. Match a unique physical receipt ledger: installed, shipped retained and trial-consumed roles partition one incoming purchase; remaining media or a retained card creates no second upstream purchase, and complete bought cassette/cartridge embeds its ingredients once. Measure issues/returns/reuse/stocks/remaining delivered amount separately. Compatible supplied identity remains unresolved; retain the UUID gap.

- Selected flow: Actually retained first-supply laminated label tape cassette
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: brother-h110; brother-manual; brother-tape

###### Actually retained first-supply photocopier toner cartridge (`retained_tonercart`)

Only separately evidenced Actually retained first-supply photocopier toner cartridge delivered with the accepted equipment, matching the actual supplier/order/configuration, own composition/form/interface and physical amount. Reconcile actual shipped remaining amount with configured Dnet and acceptance; no assumed battery count, fill, cassette or cartridge inclusion. Factory trial consumption is measured on its separate trial card and excluded here. Match a unique physical receipt ledger: installed, shipped retained and trial-consumed roles partition one incoming purchase; remaining media or a retained card creates no second upstream purchase, and complete bought cassette/cartridge embeds its ingredients once. Measure issues/returns/reuse/stocks/remaining delivered amount separately. Compatible supplied identity remains unresolved; retain the UUID gap.

- Selected flow: Actually retained first-supply photocopier toner cartridge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: canon-pc150-page20

###### Actually retained first-supply alkaline battery (`retained_alkaline`)

Only separately evidenced Actually retained first-supply alkaline battery delivered with the accepted equipment, matching the actual supplier/order/configuration, own composition/form/interface and physical amount. Reconcile actual shipped remaining amount with configured Dnet and acceptance; no assumed battery count, fill, cassette or cartridge inclusion. Factory trial consumption is measured on its separate trial card and excluded here. Match a unique physical receipt ledger: installed, shipped retained and trial-consumed roles partition one incoming purchase; remaining media or a retained card creates no second upstream purchase, and complete bought cassette/cartridge embeds its ingredients once. Measure issues/returns/reuse/stocks/remaining delivered amount separately.

- Selected flow: Alkaline battery `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: brother-manual

###### Actually retained first-supply nickel metal hydride battery (`retained_nimh`)

Only separately evidenced Actually retained first-supply nickel metal hydride battery delivered with the accepted equipment, matching the actual supplier/order/configuration, own composition/form/interface and physical amount. Reconcile actual shipped remaining amount with configured Dnet and acceptance; no assumed battery count, fill, cassette or cartridge inclusion. Factory trial consumption is measured on its separate trial card and excluded here. Match a unique physical receipt ledger: installed, shipped retained and trial-consumed roles partition one incoming purchase; remaining media or a retained card creates no second upstream purchase, and complete bought cassette/cartridge embeds its ingredients once. Measure issues/returns/reuse/stocks/remaining delivered amount separately. Compatible supplied identity remains unresolved; retain the UUID gap.

- Selected flow: Actually retained first-supply nickel metal hydride battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: brother-manual

###### Actually retained first-supply aqueous ammonia (`retained_ammonia`)

Only separately evidenced Actually retained first-supply aqueous ammonia delivered with the accepted equipment, matching the actual supplier/order/configuration, own composition/form/interface and physical amount. Reconcile actual shipped remaining amount with configured Dnet and acceptance; no assumed battery count, fill, cassette or cartridge inclusion. Factory trial consumption is measured on its separate trial card and excluded here. Match a unique physical receipt ledger: installed, shipped retained and trial-consumed roles partition one incoming purchase; remaining media or a retained card creates no second upstream purchase, and complete bought cassette/cartridge embeds its ingredients once. Measure issues/returns/reuse/stocks/remaining delivered amount separately.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_modules.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_modules
- Sources: navy-blueprinter

### Process: Actual local joining bonding and cleaning (`local`)

#### Inputs

##### Product flows

###### lead free tin copper solder wire (`solder`)

Actual supplied lead-free flux-free solder wire/rod42950 with own Sn/Cu/other constituents assay and diameter/provider. The flow gives no fixed SnCu fraction and cannot include embedded flux or a finished board’s upstream solder again.

- Selected flow: Lead-free solder, flux-free `a78ab927-44b9-4978-a3e3-2b9fb20d3648`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### rosin soldering flux (`flux`)

Actual rosin soldering flux used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: rosin soldering flux
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### Local DGEBA epoxy prepolymer (`epoxy`)

Actual uncured DGEBA epoxy prepolymer34740; independent hardener/solvent/additive identities and measured reaction/retained material are required if actually locally used. This is not complete formulated glue, generic resin or purchased module mass.

- Selected flow: Epoxy resin `f15bfe1c-1de6-4742-b2d4-9c6e62bf3f06`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### isopropyl alcohol (`ipa`)

Actual isopropanol34139 CAS67-63-0-compatible provider/assay/physical state, not cleaning mixture’s gross mass. Measure receipts/returns/stocks/recovery/reactions/retained and independent emitted/captured/wastewater/spent-solvent fates; no missing mass assigned to air.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### nitrogen gas (`nitrogen`)

Only actual gaseous N2 protective-atmosphere at-plant supply34210 with own purity/provider/state/temperature/pressure/density. Do not substitute liquid nitrogen or universal cleanroom/electronic-grade gas, nor infer a routine factory gas requirement.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

###### process water (`water`)

Actual process water used only on an evidenced local route, with own supplied grade/form/CAS/full chemistry/alloy or formulation/assay/moisture/state/provider. Measure receipts/reactions/retained material/stocks/returns/recovery and actual local work. Finished bought modules embed ingredients upstream once.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_materials.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_materials
- Sources:

### Process: Actual factory inspection and acceptance trials (`test`)

#### Inputs

##### Product flows

###### Factory-trial alkaline battery (`alkaline`)

Actual supplied primary Zn/MnO2 alkaline cell of evidenced compatible size/model; native Number of items / Item(s). Measure distinct factory-trial issues/returns/reuse separately from actually shipped cells and own cells mass in Dnet. Six-cell power requirement is not proof of supplied cells or six consumed factory tests.

- Selected flow: Alkaline battery `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: brother-manual

###### nickel metal hydride battery (`nimh`)

Actually consumed nickel metal hydride battery in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: nickel metal hydride battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: brother-manual

###### black electrophotographic toner (`toner`)

Actually consumed black electrophotographic toner in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: black electrophotographic toner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources:

###### thermal transfer black ink ribbon (`ink`)

Actually consumed thermal transfer black ink ribbon in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: thermal transfer black ink ribbon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources:

###### thermal recording paper (`thermalpaper`)

Actually consumed thermal recording paper in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: thermal recording paper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources:

###### uncoated woodfree printing paper (`paper`)

Actually consumed factory-trial woodfree uncoated graphic paper32129 of own grade/moisture/grammage/sheet area/provider; count/area require actual sheet-mass conversion. No nominal pages/minute or lifetime yield supplies factory quantity.

- Selected flow: paper, woodfree, uncoated `58075527-56bb-4c6a-a78a-7d1a3f1db2da`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: canon-pc150-page58

###### diazotype sensitized paper (`diazopaper`)

Actually consumed diazotype sensitized paper in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: diazotype sensitized paper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: navy-blueprinter

###### carbon paper (`carbonpaper`)

Actually consumed carbon paper in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: carbon paper
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: fax-study

###### Factory-trial aqueous ammonia (`ammonia`)

Actual aqueous NH3 solution34652 CAS1336-21-6 at plant, own NH3 concentration/water/density/temperature/provider and actual compatible blueprinter trial developer. The source prescribes manufacturer-approved grade, not universal25%; liquid solution is not anhydrous compressed/liquefied ammonia. Retained shipped fill differs from consumed developer, drained recoveries and customer use.

- Selected flow: Aqueous ammonia `058124f8-5e84-4070-b6c0-4bacac3a0024`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources: navy-blueprinter

###### deionized water (`di`)

Actually consumed deionized water in attributable factory inspection/trials, including failed trials and rework; record issues/returns/reuse/stocks/provider and own composition/assay/moisture or sheet/length/count conversion. Actual delivered remaining media/fill is separate; customer page yield, lifetime cartridges and operating recipe are outside manufacture.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_tests.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_tests
- Sources:

### Process: Unassigned common-period factory utilities (`services`)

#### Inputs

##### Product flows

###### tap water (`tap`)

Only actual compatible treated tap-water production/supply at a Hong Kong water-treatment plant; native Volume/m3. Verify actual provider/geography/treatment and stream-specific water fraction/density at actual temperature; the non-reference screening1000kg/m3 is not a default physical density. Other site supply needs its own identity.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources:

###### compressed air (`air`)

Actually purchased or locally supplied compressed air is a metered utility, not installed hardware. Measure actual imports/generation/exports/storage/assigned meters and attributable residual at the native Volume/m3 reference with declared own temperature/pressure/moisture and meter basis; reconcile once under cp_utilities. Purchased air and the electricity of a locally modelled compressor cannot charge the same supply twice; compressed air is excluded from equipment Dnet.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources:

###### Unassigned low-voltage hydropower electricity (`electricity`)

Only actual supplier-compatible below1kV hydropower production mix17100; native Net calorific value/MJ is an energy reporting reference, not combustible power. No generic China-grid or higher-voltage substitution; independently evidence actual delivery mix/voltage/provider and conversion of meter kWh.

- Selected flow: Alternating current `949661a5-2af6-4e66-adf8-74f5fca306a9`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources:

###### Unassigned natural-gas boiler heat (`heat`)

Only actual at-plant natural-gas-boiler heat17300 supply with native Gross calorific value/MJ; actual supply/return on same datum measured separately and return deducted once. Different heating route/energy datum needs another matching identity; purchased heat and local fuel burden are mutually exclusive.

- Selected flow: Purchased boiler thermal energy `819238bd-b7ee-4e05-a983-14765d9ee74e`
- Flow property / unit: Gross calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_utilities.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities
- Sources:

### Process: Accepted equipment delivery and packaging (`dispatch`)

#### Inputs

##### Product flows

###### corrugated board (`packboard`)

Actual corrugated paperboard32151 typeC/E/F and fibre>=80%, with actual recycled-material claim separately verified; fibre content is not recycled content. Board for local box conversion differs from bought finished container32153, whose upstream board/glue is embedded once.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_dispatch
- Sources:

###### LDPE foil (`film`)

Actual non-self-adhesive, non-cellular, unreinforced/unlaminated unsupported LDPE foil36330, own gauge/additives/provider measured; not laminated label tape or composite barrier film.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_dispatch
- Sources:

###### wood pallet (`pallet`)

Only actually supplied wooden pallets matching native31702 form and actual supplier/order are dispatch packaging. Measure pallet count and own net mass, shared-load allocation, returns and evidenced reuse history under cp_dispatch; no one-pallet-per-machine assumption. Packing pallets are excluded from configured equipment Dnet and are not installed net hardware.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_dispatch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_dispatch
- Sources:

#### Outputs

##### Product flows

###### Accepted new complete stand-alone equipment (`finished`)

Complete NEW accepted equipment with no ADP connectivity and no two independent printing/scanning/copying/fax functions. Actual photocopier, label/barcode/similar printer, blueprinter or dedicated fax model/function/interface/order/BOM/acceptance/configured net mass govern; internal fax scanning/marking is not independent scan-to-file/copy. Parts, media cartridges, connected printers and multifunction machines are not reference substitutes.

- Selected flow: Stand-alone photocopiers, printers and facsimile machines `a53a7efd-a321-47a2-9460-c436ef86f4d2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_mass
- Sources: cpc

### Process: Measured outgoing wastes and direct emissions (`residues`)

#### Outputs

##### Waste flows

###### unprocessed steel scrap (`wsteel`)

Actual post-industrial steel scrap39340 leaving local forming/machining without further treatment, own composition/moisture/stocks/returns/receiver route weighed; recovered internal steel does not cross waste boundary.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### copper scrap (`wcu`)

Actual transferred copper scrap39361 only where hydrometallurgical receiving route matches; own contamination/metal assay/moisture/stocks/returns/receiver route verified. Remelting-only receipt cannot silently share this bound route.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### mixed ABS plastic waste (`wplastic`)

Measure actual mixed ABS plastic waste transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: mixed ABS plastic waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### flat glass waste (`wglass`)

Measure actual flat glass waste transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: flat glass waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### waste printed circuit board (`wboard`)

Actual defective populated boards/components39990 generated in Chinese plant assembly, with own assay/hazard/stock/returns/receiver and transfer weighing; no customer end-of-life board burden inferred.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### waste nickel metal hydride battery (`wbattery`)

Measure actual waste nickel metal hydride battery transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: waste nickel metal hydride battery
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### waste toner (`wtoner`)

Measure actual waste toner transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: waste toner
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### spent toner cartridge (`wcartridge`)

Measure actual spent toner cartridge transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: spent toner cartridge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### spent thermal transfer ribbon (`wribbon`)

Measure actual spent thermal transfer ribbon transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: spent thermal transfer ribbon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### printed waste paper (`wpaper`)

Actual other/unsorted recovered paper39249, with printed ink/toner/developer contamination and moisture/hazard assessed individually; sensitized hazardous paper is not automatically plain recovered paper.

- Selected flow: waste paper (unspecified) `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### industrial manufacturing wastewater (`ww`)

Measure actual industrial manufacturing wastewater transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: industrial manufacturing wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### metal hydroxide sludge (`sludge`)

Measure actual metal hydroxide sludge transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: metal hydroxide sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### spent isopropyl alcohol (`wipa`)

Measure actual spent isopropyl alcohol transferred at its own handover state, with composition/contamination/hazard/moisture/period stocks/returns, calibrated transfer quantity and actual receiver route. Compatible supplied identity remains unresolved; disclose the actual receiver and measured identity gap. No liquid/captured-material transfer is direct air.

- Selected flow: spent isopropyl alcohol
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

###### plastic packaging waste (`wfilm`)

Actually transferred plastic packaging waste39270, own polymer/contamination/moisture/stocks/returns and receiver route; not toner, paper-backed ribbon, cured coatings or electronic cartridges.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_wastes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### carbon dioxide fossil air (`co2`)

Only actual emitted carbon dioxide fossil air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### carbon monoxide air (`co`)

Only actual emitted carbon monoxide air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### isopropanol air (`ipair`)

Only actual emitted isopropanol air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### ammonia air (`ammoniaair`)

Only actual emitted ammonia air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: ammonia `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### ozone air (`ozone`)

Only actual emitted ozone air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: ozone `08a91e70-3ddc-11dd-9756-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### nitrogen dioxide air (`no2`)

Only actual emitted nitrogen dioxide air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder. Compatible identity remains unresolved; actual physical exchange remains required.

- Selected flow: nitrogen dioxide air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### Actual urban-high-stack PM10 emission (`pm10`)

Only actually measured non-overlapping PM10 at urban high-stack air compartment1.3.8; not PM2.5–10 alone, total powder handled, unspecified-air PM or indoor dust. Match actual exhaust geometry/compartment, post-control size-selective concentration with matched flow/time/state and measured fugitives.

- Selected flow: particles (PM10) `9fbb5096-ed5b-11e6-bc64-92361f002671`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### water vapour air (`vapor`)

Only actual emitted water vapour air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### copper air (`copperair`)

Only actual emitted copper air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

###### tin air (`tinair`)

Only actual emitted tin air of evidenced species/origin at the ordinary air compartment1.3.4, after actual controls. Match concentration with actual exhaust flow/time/T/P and separate measured fugitive discharge; measured capture/destruction/retention/liquid fate stays separate. Molecular species and contained-element mass differ from gross salts, toner or handled powder.

- Selected flow: tin `08a91e70-3ddc-11dd-99bb-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_air.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_air
- Sources:

## 7. Allocation and Co-product Handling

Subdivide actual manufacturing configurations and directly assigned meters/records first. Allocate only remaining common burden by evidenced causal manufacturing drivers. Include attributable rejects, failed trials and rework; Naccepted excludes rejects and Dnet includes only same-configuration accepted equipment. Internal recycled media/parts cancel paired transfers, not negative purchases or double upstream credit. External waste receiver treatment/transport follows actual route and declared boundary; recycling credit cannot be presumed. Retained supplied cartridge/media is distinct from consumed trial material and customer lifetime replacements.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | calibrated acceptance ledger | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record.  | kg | each accepted unit | declared period | same configuration site | accepted net mass per machine | calibration and accepted serial list |
| cp_materials | fabrication; local | local raw material and ingredient | receipts/issues/cuts/assay/stock/reaction record | grade/form/CAS/full chemistry/assay/moisture; delivered gross quantity; stocks/returns; reactions/retained/recovered/non-air fates; model/order/provider | Measure each actual physical raw/chemical stream independently; use its own calibration/density/T/P/assay and measured cut/reaction/retention. Purchased complete hardware’s embedded ingredients remain upstream once. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_modules | assembly | completed hardware or retained supplied chemical/media | supply drawing/order/BOM/acceptance ledger | hardware completion/interface/order/provider/native quantity/installed stocks/returns; separately chemical/media formulation/assay/moisture/T/P/density/reacted/retained/returns | Hardware branch: weigh/count/measure actual completed receipts and configured installation, upstream ingredients once. Ingredient/media branch: its own actual physical native quantity, composition/state/assay/water/stocks/reactions/retention/returns; complete cartridge/cassette embeds consumable manufacture once, remaining content and tests reconcile without duplicate purchase. Whole hardware mass is not chemical content. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_tests | test | actual factory trial media | acceptance run/issue/return/reuse record | test purpose/configuration/time; actual issued/reused/drained/returned/consumed; native quantity; own state/assay/media grade; rejects/rework | Measure attributable factory acceptance and failed/rework trials, distinct from customer operation and shipped retained supply; reusable battery energy services and fresh consumed cells must not double count. No source pages/minute, lifetime yield, six-cell requirement or historic developer operating recipe sets test quantity. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_utilities | services | unassigned residual utilities | import/generation/export/storage/meter ledger | actual imported/generated/exported/storage delta; assigned process meters; residual driver; same-datum heat supply/return; voltage/provider/mix; water/air T/P/density | Reconcile actual imports and generation minus exports/storage/assigned meters; allocate remaining measured residual once. Actual water/air native state/normalization is declared. Heat supply and independently measured return use same datum and return is deducted once; purchased heat and locally generated fuel burden cannot overlap. Electricity kWh to MJ uses3.6, not invented efficiency. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_dispatch | dispatch | actual packaging and accepted shipment | packing/weigh/return/reuse ledger | configured accepted unit; actual board/film/pallet count/net mass; shared pack/returns/reuse cycles | Measure actual packaging independently from equipment Dnet. Convert native counts/area with actual individual mass/gauge/area, allocate evidenced shared reusable packaging by actual use history; no one-pallet-per-machine assumption. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_wastes | residues | actual outgoing waste | transfer weigh/receiver/assay/stock record | own outgoing gross/native amount/composition/moisture/hazard; receiver route; stocks/returns/capture/liquid fates; internal recycle | Measure transferred waste independently with own composition/water/native state/period stocks and actual receiver/transport/treatment; separate internal returns from outgoing waste and direct released species. Generic service/other-waste labels do not resolve specific toner/ribbon/cartridge/battery/solvent/wastewater identity. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |
| cp_air | residues | actual emitted species | post-control sampling/flow/time/fugitive record | actual species/valence/CAS/carbon origin/compartment; own concentration and matched flow/time/T/P/moisture; control capture/destruction; fugitive measurement; uncertainty | Post-control species concentration times matched exhaust flow and duration/state plus separately measured fugitives; captured/liquid/retained/destroyed material is not air. Select actual compartment/time horizon and non-overlapping particle sizes; oxide/salt gross mass differs from contained Cu/Sn, and NOx-as-NO2 differs from molecular NO2. | actual native unit | each lot/run/period | declared period | same configuration/site | attributable quantity / accepted machines | calibrated raw records and independent reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | reference product | Require full four-family actual non-ADP and independent-function review including real interface/options and supplied completion. Modern standalone mode, accessory listing or historic example cannot qualify every product. | model interface/function declarations, original manual/order and acceptance |
| quality_qnd | all inventory rows | For one declared configuration/period Qattr includes attributable manufacture/assembly/trials/reject/rework. Naccepted counts accepted complete machines, Dnet sums their calibrated configured net masses. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Retain per-machine quantities and actual included accessories/media; catalogue400g excluding batteries/cassette,46lb historical empty/gross fields and customer pages are not interchangeable denominators. | calibrated same-configuration acceptance records |
| quality_physical | all inventory rows | Every own physical stream has grade/form/assay/moisture/T/P/density/stocks/returns/reactions/retention. Whole solution/chemical/alloy/module mass differs from active ingredient/contained element. Each water stream uses its own water fraction/density/temperature and independent reaction/fill/evaporation/discharge/stocks, with paired internal returns. Battery Item(s) stays physical count, not assumed mass or charge energy. | own supplier assays, native meter/state and stock records |
| quality_solvent | ipa; wipa; ipair; ww | IPA own assay/stock/returns/reaction/retained/recovered/captured/destroyed/spent-solvent/wastewater terms reconcile independently measured air; missing residual is not all evaporated. Ammonia solution own NH3 and water fractions reconcile residual developer/retained/discharge and independent NH3 air, no automatic25% assumption. | independently measured fate balances |
| quality_identity | all inventory rows | Match published100/type/full supplier/chemistry/CAS/completion/native reference internalID/property/group/unit/official bilingual identity. Reject forced ADP machines/parts or wrong-grade/formulation/phase/class/species/compartment proxies. Add every actual unlisted supplied material/ingredient/transport/retained/test/waste/emitted species as individually queried measured atomic rows. Gap differs from zero; not-applicable requires actual absence evidence. | fresh full direct/native review and physical supplier record |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require actual complete NEW accepted non-ADP equipment and full function/interface/options review. Internal fax scanning/marking or repeated label print alone is not independent copy/scan; actual independent two-function machines/PC-connectable printers are excluded. | cpc; brother-h110; brother-manual; fax-study |
| validate_reference | Require accepted configured net machine mass, included/excluded retained supply list and same Qattr/Naccepted/Dnet basis; catalogue empty/gross weights and page/transmission yield cannot supply M or trial amounts. | brother-manual; canon-pc150-page20; fax-study |
| validate_makebuy | Require exclusive bought complete module versus locally used ingredients, actual failed/rework tests and retained fill/media separated. Reject default toner/ribbon chemistry, battery count, media lifetime/operating recipes and PET-vs-PE tape inference. | brother-manual; brother-tape; navy-blueprinter |
| validate_balances | Require own physical assays/water/T/P/density/stocks/returns/reaction and measured non-air fates; actual utility imports/generation/exports/storage/assigned meters/residual reconcile once, heat actual same-datum supply/return return once. Direct air uses actual post-control species concentration times matched flow/time/state plus independent fugitives, molecular species/valence/carbon origin and actual compartment/PM non-overlap. Report actual findings/performed/skipped checks and completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual qualified configured complete stand-alone equipment manufacture |
| excluded_use | ADP/MFP/general part/media/repair/customer lifetime proxies or catalogue factory factors |
| required_metadata | Reference qualifiers; actual function/interface/order/BOM/makebuy/acceptance; Qattr/Naccepted/Dnet/M; native units/assays/providers/receiver/allocation/gaps |
| required_quality_disclosure | Measured/estimated/missing; calibration/sampling/uncertainty/fate balances; source date/partial archive limits and performed/skipped checks |
| update_trigger | Function/connectivity/option/configuration/supplied media/chemical/provider/makebuy/site/period/acceptance/treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Full not-ADP-connectable photocopier/label-barcode/similar-printer/blueprinter/fax scope and ADP/MFP exclusions, original242. |
| brother-h110 | handbook | Brother PT-H110 official product specifications | https://www.brother.com.au/en/labellers/all-labellers/pt-h110 | Actual PT-H110 non-PC/Mac-connectability and model-specific box contents; page snapshot is not universal supply or manufacturing BOM. Generic driver menu does not override explicit non-connectability. |
| brother-manual | handbook | Brother P-touch H110 User’s Guide, English | https://download.brother.com/welcome/docp100243/pth110_areng_ug_d00nvg001.pdf | D00NVG001 actual head/cassette/cutter/feed interface, repeated copies of entered label, batteries and optional adaptor;400g excludes batteries/cassette. Replacement accessories do not prove first included supply or factory consumption. |
| brother-tape | handbook | Durability test data for Brother laminated TZe labels | https://www.brother.com.au/-/media/ap2/australia/supplies/pdf/tze_tapes_technical_data.pdf?rev=55b1f034e9754734965019cea8a12248 | Laminated label layer diagram and thermal-transfer interface only; diagram PET conflicts with prose polyethylene laminate. Preserve supplier confirmation gap; do not infer pure film/adhesive recipes or use label durability tests as equipment factory factors. |
| navy-blueprinter | handbook | Engineering Aid 3 & 2, Volume2, Rate Training Manual | https://files.eric.ed.gov/fulltext/ED249091.pdf | Historical Navy1982 primary Model842 mechanical feed/glass exposure/lamp/pump/aqueous-ammonia developer architecture and actual grade requirement; not current availability/default fill/recipe or every blueprinter. Operating media and rates are user operation, not factory trial quantities. |
| fax-study | handbook | Telefacsimile Services Between Libraries with the Xerox Magnavox Telecopier | https://files.eric.ed.gov/fulltext/ED032075.pdf | Primary Nevada/CLR1966 trial of Magnavox/Xerox transceivers+telephone couplers; send/receive carbon-set interface. Internal scanning/marking is part of fax transmission; independent copying/scan-to-file/PC print must still be checked for the actual delivered model. Historical46lb/page-time/transmission counts are not manufacture factors. |
| canon-pc150-page1 | handbook | Canon PC150 Operator’s Manual, partial archived page1 | https://manualsnet.com/pdf-content/RfsqUNLldcbQBIOozDjcfNxM/html/1.page.html | Partial archived CANON2004 FA7-6152(000) manufacturer manual page; model-specific platen/electrostatic organic-photoconductor/fusing architecture or supplied cartridge/powercord/trays. These four pages form one publication, not a full acquired PDF or independent sources. Supply/interface and configured net weighing still required; page yield/empty mass not defaults. |
| canon-pc150-page17 | handbook | Canon PC150 Operator’s Manual, partial archived page17 | https://manualsnet.com/pdf-content/RfsqUNLldcbQBIOozDjcfNxM/html/17.page.html | Partial archived CANON2004 FA7-6152(000) manufacturer manual page; model-specific platen/electrostatic organic-photoconductor/fusing architecture or supplied cartridge/powercord/trays. These four pages form one publication, not a full acquired PDF or independent sources. Supply/interface and configured net weighing still required; page yield/empty mass not defaults. |
| canon-pc150-page20 | handbook | Canon PC150 Operator’s Manual, partial archived page20 | https://manualsnet.com/pdf-content/RfsqUNLldcbQBIOozDjcfNxM/html/20.page.html | Partial archived CANON2004 FA7-6152(000) manufacturer manual page; model-specific platen/electrostatic organic-photoconductor/fusing architecture or supplied cartridge/powercord/trays. These four pages form one publication, not a full acquired PDF or independent sources. Supply/interface and configured net weighing still required; page yield/empty mass not defaults. |
| canon-pc150-page58 | handbook | Canon PC150 Operator’s Manual, partial archived page58 | https://manualsnet.com/pdf-content/RfsqUNLldcbQBIOozDjcfNxM/html/58.page.html | Partial archived CANON2004 FA7-6152(000) manufacturer manual page; model-specific platen/electrostatic organic-photoconductor/fusing architecture or supplied cartridge/powercord/trays. These four pages form one publication, not a full acquired PDF or independent sources. Supply/interface and configured net weighing still required; page yield/empty mass not defaults. |
