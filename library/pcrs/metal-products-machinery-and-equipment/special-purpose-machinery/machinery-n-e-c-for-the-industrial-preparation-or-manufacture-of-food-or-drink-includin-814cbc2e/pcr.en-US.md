---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-the-industrial-preparation-or-manufacture-of-food-or-drink-includin-814cbc2e
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Machinery n.e.c. for the industrial preparation or manufacture of food or drink (including fats or oils)

## 1. Scope and Applicability

This methodology covers manufacture of accepted complete machinery n.e.c. whose principal function is industrial preparation or manufacture of food or drink, including fats or oils. It includes dedicated mechanical oilseed pressing and compatible extraction equipment, fruit-juice hydraulic pressing, confectionery mixing/refining/conching, dedicated food forming/cutting and food homogenization beyond cream separation. It covers the complete residual category, with actual function review for each configuration rather than a single-process machine default. Local fabrication, bought assemblies, finishing, assembly, actual factory inspection/acceptance and dispatch form the foreground; normal customer food production, recipes and lifetime maintenance are separate.

Review separately cream separators44511, cereal/dried-legume milling44513, non-electric bakery ovens/hot-drink/cooking/heating equipment44515, agricultural dryers44518 and separately supplied parts44522. General centrifuges43931, independent filtration43914, thermal-treatment43932, container cleaning/filling/packing43921, weighing43922, pumps and washing modules do not enter solely because a food line uses them. A whole machine requires actual principal-function review; an embedded bought assembly is upstream once. Non-food/pharmaceutical or animal-feed configurations require their own applicable category review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machinery-n-e-c-for-the-industrial-preparation-or-manufacture-of-food-or-drink-includin-814cbc2e |
| classification_refs | CPC3.0:44516 |
| covered_products | Entire residual industrial food/drink machinery category including mechanical fats/oils preparation |
| excluded_products | Named neighbouring machinery, separately supplied parts, customer processed foods and non-food principal functions |
| representative_product | Actual accepted complete configured mechanical oil press or food press/former/homogenizer/confectionery machine; no average example mass |
| production_route | Actual local stock fabrication and finishing or documented completed bought assemblies, then configured assembly and real acceptance |
| market_state | Accepted configured complete equipment at declared factory dispatch gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted complete configured industrial food/drink machine within the residual category |
| How much | 1 kg |
| How well | Declared principal function, order/BOM, hygienic-contact approval where applicable and actual acceptance criteria |
| How long or cycle | One declared completed manufacture/acceptance period; no lifetime food throughput |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Machinery n.e.c. for the industrial preparation or manufacture of food or drink (including fats or oils) `d646385f-0b2b-4477-81f9-43b6f354ef55` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Principal residual food/drink/fats/oils function and mechanism; model/serial/order/configuration; actual included hardware/options/spares/fills and food-contact scope; same-period accepted quantity/calibrated net mass; stock/alloy/purity/phase/chemical formula; make/buy/completion/local operations/acceptance media/rejects/rework; suppliers/geography/transport/receiver routes; native units/assays/state/returns/stocks/allocation/uncertainty and identity gaps |

Required qualifiers must be disclosed in the foreground package. Missing qualifiers make its reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Collect accepted configured net mass through cp_mass; exclude packaging, extra spare stock, rejects and consumed trial media. Retain actual included first fill. |
| native_amount | all inventory rows | actual native property | native unit | Retain each native numerator: cable Length/m, hydraulic fluid/compressed air/tap water Volume/m3 and Energy/kWh or MJ. Conversion requires own same-interface density/T/P/humidity/assay or cable kg/m; electricity3.6MJ/kWh. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actually received stock, identified chemicals or completed compatible assemblies at documented supplied state |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Complete residual industrial food/drink machinery including fats/oils, with actual neighbouring-function review |
| recursive_input_rule | Completed bought hardware embeds upstream manufacture once; local manufacture replaces it with actual ingredients/work; pair internal transfers |
| upstream_dataset_requirement | Compatible published flow type/native unit/grade/chemical phase/food-contact role/provider/geography/completion and transport interface |
| disclosure | Declared order/configuration/net mass, supplied components/options/retained fills, make/buy, actual factory tests and customer boundary |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| principal_function | CPC44516 explicitly includes fats/oils. Sigma is a decanter centrifuge and stays outside the complete reference under43931 despite olive-oil application. Census chapter84 is supplementary: HS8438 excludes fats/oils and must not narrow CPC44516. Review embedded modules separately from independently supplied whole machines. | cpc; sigma; census |
| source_architecture | Anderson distinguishes mechanical pressing, extrusion preparation and customer solvent extraction; its full plant is not one universal44516 reference. Bucher hydraulic fruit presses require actual food principal function rather than pharmaceutical or lab/pilot default. Tetra distinguishes pump/transmission and homogenizing device; an independent high-pressure pump is not automatically a complete food homogenizer. Bühler conching shears/mixes chocolate mass and the five-roll refiner is not generic cereal milling. | anderson-expeller; anderson-oil; bucher-press; tetra-handbook; buhler-conche |
| supplied_configuration | Handtmann forming/cutting, optional co-extrusion, rollers/water-spray and downstream weighing/packing interfaces follow actual orders; a depicted filler or packaging link does not establish included BOM. Anderson optional shaft water cooling/choke and closed-loop oil cooling require actual included interfaces/fills. Example empty/gross masses, throughputs, pressure, energy savings and food yields are not Dnet or factory defaults. | handtmann-fs; anderson-expeller; sigma |
| manufacture_and_tests | Collect actual local cutting/forming/machining/welding/finishing/assembly and attributable inspection, factory trials, rejects and rework. No source establishes a universal material grade, factory route or acceptance recipe. Customer commissioning/recipe development and normal food production are separately scoped; charge factory food/media only when actual acceptance records establish attribution. | anderson-expeller; bucher-press; buhler-conche; tetra-handbook |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local structural and food-contact part fabrication | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| assembly | Configured food-machine assembly | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| finish | Actual local joining cleaning and finishing | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| services | Unassigned common-period factory services | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| dispatch | Accepted equipment dispatch and packaging | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| residues | Measured waste transfers and direct emissions | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |

### Process: Local structural and food-contact part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Food-contact AISI304 stainless steel sheet (`ss304`)

Actual supplied food-contact aisi304 stainless steel sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact AISI304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Food-contact AISI316L stainless steel sheet (`ss316`)

Actual supplied food-contact aisi316l stainless steel sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact AISI316L stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Non-contact carbon steel frame sheet (`ssteel`)

Actual supplied non-contact carbon steel frame sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Non-contact carbon steel frame sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Cast iron crankcase casting (`castiron`)

Actual supplied cast iron crankcase casting with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Cast iron crankcase casting
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Aluminium structural sheet (`aluminium`)

Actual sheet thicker than0.2mm with own alloy/temper/finish/provider and local cut/form stock and returns; food-contact certification is not inferred from sheet identity.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### T2 copper rod for local conductor manufacture (`copper`)

Actual T2 copper rod, own grade/assay/dimensions/provider for local conductors; weigh receipts/cuts/retained rod and returns, excluding embedded complete-motor copper.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Food-contact316L sanitary tube (`sanitarytube`)

Actual supplied food-contact316l sanitary tube with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact316L sanitary tube
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

###### Food-grade HDPE forming plate (`peplate`)

Actual supplied food-grade hdpe forming plate with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-grade HDPE forming plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: anderson-expeller; bucher-press; buhler-conche

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured food-machine assembly (`assembly`)

#### Inputs

##### Product flows

###### Bought complete industrial food machinery (`boughtmachine`)

Only an actually completed compatible food-machine interface bought for integration; record delivered configuration/net hardware and remaining local work, embedding upstream manufacture once. It is not an allowance to buy an already finished reference and duplicate its materials.

- Selected flow: Machinery n.e.c. for the industrial preparation or manufacture of food or drink (including fats or oils) `d646385f-0b2b-4477-81f9-43b6f354ef55`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Food-contact PTFE seal (`ptfe`)

Actual supplied food-contact ptfe seal and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact PTFE seal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Food-contact EPDM gasket (`epdm`)

Actual supplied food-contact epdm gasket and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact EPDM gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Food-contact nitrile rubber seal (`nitrile`)

Actual supplied food-contact nitrile rubber seal and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact nitrile rubber seal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Food-contact polyurethane conveyor belt (`pu`)

Actual supplied food-contact polyurethane conveyor belt and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact polyurethane conveyor belt
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Supplied juice-press filter cloth (`filter`)

Actual supplied supplied juice-press filter cloth and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Supplied juice-press filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Supplied low-voltage power cable (`cable`)

Actual <=1000V power cable compatible with its construction/provider and supply standard; retain native Length/m receipts, installed lengths/cuts/returns. Physical reconciliation alone uses own same-construction kg/m.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Supplied roller bearing (`bearing`)

Actual completed roller-bearing subtype/size/finish/provider; weigh independent supplied bearings and returns, excluding bearings embedded in complete bought drives.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Supplied steel assembly screw (`screw`)

Actual completed steel assembly screw with own size/grade/finish/provider and installed/returned stock, not a default screw count or stainless food-contact grade.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought AC electric drive motor (`motor`)

Actual completed compatible AC motor for special-purpose machine assembly and matched CN supplied interface; weigh independent received/installed/returned motors. Rating or IE5 marketing is not a factory energy amount.

- Selected flow: Electric motor `eb4e9abb-abd4-4f75-84a8-638c4d845e85`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought industrial gearbox (`gearbox`)

Actual supplied bought industrial gearbox and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought hydraulic power unit for food press (`hydpump`)

Actual supplied bought hydraulic power unit for food press and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought hydraulic power unit for food press
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought hydraulic cylinder (`actuator`)

Actual completed linear hydraulic cylinder under its own stroke/bore/seal/provider interface; weigh supplied module and distinguish local charging and factory stroke-test utilities.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought complete oilseed screw-press module (`screwpress`)

Actual supplied bought complete oilseed screw-press module and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought complete oilseed screw-press module
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought centrifuge rotating bowl assembly (`bowl`)

Actual supplied bought centrifuge rotating bowl assembly and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought centrifuge rotating bowl assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought food homogenization valve assembly (`homvalve`)

Actual supplied bought food homogenization valve assembly and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought food homogenization valve assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought complete food-machine control cabinet (`hmi`)

Actual supplied bought complete food-machine control cabinet and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought complete food-machine control cabinet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought steel isolation valve (`valve`)

Actual bought completed steel isolation valve and supplier/alloy/pressure/supplied finish; this generic identity does not certify a hygienic food-contact or homogenizer valve.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Bought complete pressure instrument (`sensor`)

Actual supplied bought complete pressure instrument and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought complete pressure instrument
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Local food-grade lubricating oil (`luboil`)

Actual supplied local food-grade lubricating oil and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local food-grade lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Local petroleum hydraulic-fluid charge (`hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-food-contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no food-grade approval is inferred.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Local food-grade lubricating grease (`grease`)

Actual supplied local food-grade lubricating grease and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local food-grade lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Factory treated process water (`water`)

Actual treated industrial process-water supplier/quality and own water fraction/temperature/density, receipts/returns/reacted water/stocks; distinct from DI and tap water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Retained supplied deionised water (`retained_di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default. Record only actual measured charge retained in the accepted shipped machine, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

###### Retained supplied petroleum hydraulic-fluid charge (`retained_hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-food-contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no food-grade approval is inferred. Record only actual measured charge retained in the accepted shipped machine, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: anderson-expeller; bucher-press; tetra-handbook; handtmann-fs

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual local joining cleaning and finishing (`finish`)

#### Inputs

##### Product flows

###### Local equipment-cleaning isopropanol (`ipa`)

Actual compatible China at-plant isopropanol for local equipment cleaning; own purity/water/density/provider and measured preparation/stock/returns/reaction/retention. It is not the optical-assembly or assumed70%-antiseptic supply.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

###### Local surface-finishing50% nitric acid (`nitric`)

Actual50% aqueous nitric-acid industrial finishing/cleaning reagent CAS7697-37-2; own concentration/provider/density and reaction/dilution records. Measure physical solution, not anhydrous acid; no universal hygienic passivation recipe.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

###### Local cleaning30% sodium hydroxide (`alkali`)

Actual30% aqueous NaOH CAS1310-73-2 and supplier/assay/density for documented local cleaning; record physical solution and dilution/reaction/returns separately. This is not automatic customer CIP consumption.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

###### Local peracetic-acid disinfectant solution (`peracid`)

Actual supplied local peracetic-acid disinfectant solution and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local peracetic-acid disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

###### Local stainless-steel welding filler wire (`weld`)

Actual supplied local stainless-steel welding filler wire and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local stainless-steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

###### Local gaseous argon welding shield (`argon`)

Actual supplied local gaseous argon welding shield and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local gaseous argon welding shield
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: buhler-conche; tetra-handbook

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Actual factory inspection and acceptance trials (`test`)

#### Inputs

##### Product flows

###### Factory-test deionised water (`di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: anderson-expeller; bucher-press; tetra-handbook

###### Factory protective-atmosphere nitrogen (`nitrogen`)

Only actual factory protective-atmosphere nitrogen supply with matched purity/provider/gas phase/container and measured cylinder/line stocks/returns. Food-packaging lifetime gas and electronic-grade supply are distinct.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: anderson-expeller; bucher-press; tetra-handbook

###### Actual factory-trial pasteurized liquid milk (`milk`)

Only actual purchased pasteurized processed liquid milk used in a documented attributable factory acceptance trial; own supplier/composition/water/density and stocks/returns/saleable or discarded test output. No customer dairy output recipe is adopted.

- Selected flow: Processed liquid milk `02cfe33a-6f85-4477-bfde-c8057d01cfa1`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: anderson-expeller; bucher-press; tetra-handbook

###### Actual factory-trial soft white sugar (`sugar`)

Only actual supplied soft white sugar in documented factory trials, matched supplier/product form and own sucrose/invert-sugar/moisture assay. Granulated sugar or total recipe solids are not automatically this exchange.

- Selected flow: Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: anderson-expeller; bucher-press; tetra-handbook

###### Actual factory-trial refined sunflower oil (`oil`)

Only actual refined sunflower oil supplied for a documented factory trial and compatible refined sunflower/safflower family interface; own species/refining/quality/water/composition/provider. Crude seed oil, seed feed and normal customer oil-production output are distinct.

- Selected flow: Sunflower-seed and safflower-seed oil, refined `1b88e515-861e-4552-b494-67bb3d645aa7`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: anderson-expeller; bucher-press; tetra-handbook

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Unassigned common-period factory services (`services`)

#### Inputs

##### Product flows

###### Factory low-voltage electricity (`electricity`)

Only actual compatible CN user-side grid-average AC <1kV supply; retain metered Energy/kWh and3.6MJ/kWh conversion. Allocated local work and trial meters take priority; shared service includes only unassigned common-period residual.

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

Actual compressed-air supplier/pressure/purity and native Volume/m3 at stated T/P/wet-dry state; actual meter/density corrections only. Account shared residual once and exclude customer forming-air lifetime demand.

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

###### Purchased natural-gas industrial heat (`heat`)

Only actual compatible CN natural-gas industrial-heat supply and metered native Energy/MJ. Declare gross/net meter datum; subtract independently measured same-datum return once for gross heat, never subtract twice for net supply.

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

Only actual compatible Hong Kong treated-water production/supply interface; retain native Volume/m3 and own temperature/density/water fraction when reconciling mass. Unassigned service residual excludes already measured cleaning/trial water.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
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

Actual C/E/F corrugated board with fibre>=80%, supplier/recycled content/moisture and weighed dispatch material/returns. Packing stays outside equipment net mass.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; handtmann-fs

###### LDPE packaging foil (`film`)

Actual non-cellular unreinforced non-adhesive LDPE foil supplier/thickness/moisture and dispatch/returned mass. This is not PVA, PET or HDPE forming stock.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; handtmann-fs

###### Dispatch wood pallet (`pallet`)

Actual wood pallet supplied for dispatch, own construction/moisture/receipts/reuse/return ledger. It is packaging outside Dnet and not an assumed EURO or one-pallet-per-machine mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; handtmann-fs

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configured industrial food machinery (`finished`)

Only the accepted complete configured machine whose principal function is residual industrial food/drink preparation or manufacture, including mechanical fats/oils pressing; calibrated net mass and actual included hardware/fill follow cp_mass. A centrifuge or packing machine is not qualified solely by food application.

- Selected flow: Machinery n.e.c. for the industrial preparation or manufacture of food or drink (including fats or oils) `d646385f-0b2b-4477-81f9-43b6f354ef55`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_mass
- Sources: cpc; handtmann-fs

##### Waste flows

##### Elementary flows

### Process: Measured waste transfers and direct emissions (`residues`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Outgoing steel machining scrap (`wsteel`)

Measured outgoing unprocessed steel machining/forming scrap, own alloy/metal content/moisture/stocks/recovery/returns and actual receiver route; no avoided burden assumed.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing copper machining scrap (`wcu`)

Measured outgoing copper scrap with own contained-Cu/contaminant/moisture/stocks and receiver. Selected supply interface requires an actual hydrometallurgical recycling route; direct-remelt shipments require another identity.

- Selected flow: Copper Scrap `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing HDPE forming-plate machining waste (`wplastic`)

Only actual cleaned polyethylene machining waste handed over at the compatible mechanical-recycling interface; own polymer/additive/moisture/contamination/stocks/returns and receiver route. Untreated food-soiled mixture is distinct.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing spent isopropanol solution (`spentipa`)

Measure actual transferred outgoing spent isopropanol solution independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing spent isopropanol solution
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing factory industrial wastewater (`wastewater`)

Measure actual transferred outgoing factory industrial wastewater independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing factory industrial wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing metal-hydroxide finishing sludge (`sludge`)

Measure actual transferred outgoing metal-hydroxide finishing sludge independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Outgoing metal-hydroxide finishing sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing human-food factory-trial debris (`wtestfood`)

Only measured discarded human-food debris from actual factory acceptance trials, own ingredient composition/moisture/stocks/returns and food-waste receiver route. Saleable or customer-returned test food is not silently waste.

- Selected flow: Food Debris `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing machining lubricating oil waste (`wasteoil`)

Measured spent lubricating/cutting oil from local machining or equipment-maintenance tests under compatible supply scope; own oil/water/metal assay, stocks/returns and treatment receiver. Spent food oil is distinct.

- Selected flow: Waste oil `2a68e97a-21fe-43f7-a86e-3e39b653e10a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Transferred captured metal grinding dust (`dust`)

Measure actual transferred transferred captured metal grinding dust independently, with own composition/assay/moisture, period stocks/returns/recovery and actual receiver/treatment route. The queried identity remains unresolved; no unrelated waste or direct-air proxy.

- Selected flow: Transferred captured metal grinding dust
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

###### Outgoing LDPE packaging waste (`wfilm`)

Only actual cleaned LDPE packaging waste at the compatible mechanical-recycling interface; independently weigh dispatch offcuts/returns, composition/moisture/stocks and receiver. No automatic recovery percentage.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_wastes
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`co2`)

Only actual independently measured fossil carbon dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Fossil origin requires own fuel/carbon evidence; biogenic trial-food carbon is separate.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Isopropanol to air (`ipair`)

Only actual independently measured isopropanol to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Water vapour to air (`vapor`)

Only actual independently measured water vapour to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Molecular nitrogen dioxide to air (`no2`)

Only actual independently measured molecular nitrogen dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Molecular NO2 differs from NOx as NO2-equivalent.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### PM10 to air (`pm10`)

Only actual independently measured pm10 to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. PM10 includes finer fractions; avoid overlapping constituent-element/particle reporting.

- Selected flow: particles (PM10) `08a91e70-3ddc-11dd-91be-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Copper to air (`copperair`)

Only actual independently measured copper to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Hexavalent chromium to air (`chromiumair`)

Only actual independently measured hexavalent chromium to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own Cr(VI) assay, not total chromium or alloy mass, is required.

- Selected flow: chromium (vi) `08a91e70-3ddc-11dd-950b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emissions
- Sources:

###### Nickel to air (`nickelair`)

Only actual independently measured nickel to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-machine net mass.
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
| allocate_configuration | Separate actual configurations/site/process meters first. Allocate common-period residual by measured causal service demand or work, not catalogue food throughput. Include attributable failed trials/rework/rejects in accepted-machine burdens. Cancel paired internal transfers; disclose reusable returned test food, saleable co-products and receiver allocation/treatment without invented avoided burdens. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted machine | foreground_record | model/configuration/serial; net mass; Naccepted; Dnet; included hardware/fills; excluded packing/spares | Calibrated traceable weighings reconcile accepted complete machines with actual order/BOM within one configuration/period. Sum accepted net mass excluding packing/spare stock/rejects/consumed trials. Include only actually retained shipped fill. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_materials | fabrication | local stock and chemical ingredients | foreground_record | Qattr; own gross mass/assay/moisture/density; alloy/formulation; stocks/returns/reactions/retained parts; actual local route | Weigh actual supplied stock and each local finishing/joining/cleaning ingredient; reconcile own-stream element/moisture/chemical contents with retained hardware, reaction products, baths/recovery/waste/stocks/returns. Actual surface alloy or sanitary approval is specific to the contacted part, never every frame. Embedded complete-module materials stay upstream once. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_modules | assembly | completed hardware and retained fill | foreground_record | Qattr; BOM/completion/options; hardware mass/length; separate fill formula/assay/T/P/density; receipts/installed/returns/stocks | Hardware branch weighs actual completed received/installed/returned assemblies and cable lengths, documenting remaining local work. Chemical branch independently measures local fill/lubricant/gas in its own native units and own composition/moisture/T/P/density, stocks/reactions/retention/returns. Complete bought modules embed their chemicals upstream once; whole hardware mass never substitutes chemical amount. First retained supply fill is distinct from trial consumption and customer maintenance. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_tests | test | observed factory trial media | foreground_record | Qattr; actual acceptance order/trial/repeat/reject; water/food/gas receipts; own composition/state; returned/reused/sold/discarded stocks | Meter actual attributed factory tests and repeated/failed trials, using each food/chemical/water/gas own measured amount and composition. Record returned/reused/recovered and saleable food independently, never as disappearance. Exclude normal customer production, catalogue recipe/capacity, R&D demonstrations or customer commissioning unless an explicit declared manufacturing attribution is evidenced. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_utilities | services | each unassigned utility | foreground_record | Qattr; common period/site/import/self-generation/export/storage; assigned meters; gross/net heat datum; independent return; T/P/humidity/density | Reconcile each common-period imported and actually generated utility minus exports/storage with assigned local/test meters; allocate only residual once. Cable/energy/volume units remain native. Gross heat deducts separately measured same-datum return once; net heat never twice. Process water/DI/service water and internally circulated cooling flows are independent interfaces; paired returns cancel. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_dispatch | dispatch | each packaging item | foreground_record | Qattr; packing grade/moisture/dimensions; dispatch receipts; returns/reuse/stocks; packing outside Dnet | Weigh actual board/foil/pallet independently and reconcile dispatch/returns/reuse/stocks within the accepted configuration/period. No generic packaging ratio or catalogue shipping gross mass establishes net equipment mass. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_wastes | residues | each outgoing waste stream | foreground_record | Qattr; transfer weight; own composition/assay/moisture/density; stocks/returns/recovery; receiver/transport/treatment route | Measure each outgoing waste independently at its actual handover state; retain own-stream wet/dry/composition and chemical/metal contents, returned stock and receiver route. Wastewater/sludge/spent solvent/captured dust/food/oil remain separate. Treatment is distinct from direct environmental discharge; captured material is not air. Missing compatible identity remains a gap rather than wrong-origin waste proxy. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_emissions | residues | each direct emitted species | foreground_record | Qattr; CAS/species/origin/compartment; post-control concentration; simultaneous flow/time; T/P/wet-dry/O2 correction; fugitive sampling; capture/reaction/byproducts | Use independently observed post-control concentration times matched actual flow and time with unit/state correction plus separately sampled fugitives. Reconcile input/retained/recovered/destroyed/sludge/wastewater/stocks by own assays; capture is not destruction and non-air/unexplained residuals never infer air. Molecular NO2 differs from NOx-equivalent; contained Cr(VI)/Ni/Cu differs from total metal/oxide/salt/alloy and avoids PM overlap. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Within one actual configuration/period divide attributable native-unit total by the sum of calibrated accepted complete-machine net masses. Retain per-machine quantities and actual denominator evidence. | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Same configuration/period Qattr includes attributable manufacture/assembly/tests/reject/rework burden. Naccepted counts accepted machines; Dnet sums their calibrated net masses. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Catalogue empty/gross mass or food throughput is not a denominator. | calibrated configuration-specific accepted ledger |
| quality_physical | all inventory rows | Every element/chemical term uses its own gross mass, assay/moisture/wet-dry basis, reactions/stocks/returns/retention. Alloy/sludge/solution mass differs from contained element/active chemical. Each water stream requires own water fraction/density at actual temperature, independent reaction/retained fill/evaporation/discharge/stocks; internal returns pair and cancel. | own-stream assays and state/stock/reaction records |
| quality_solvent | ipa; spentipa; ipair; wastewater | Reconcile each solvent own assay, stocks/reactions/retained/recovered/captured/destroyed/wastewater/spent-media terms against independently measured air. Capture differs from destruction; non-air and unexplained residual cannot become emitted IPA. | independent measured fate and air records |
| quality_scope | reference product | Maintain the entire food/drink/fats/oils residual category with actual principal-function and configuration review. Food-contact grade/approval is component-specific, not a whole-frame claim. Catalogue option, empty/gross mass, customer recipe/yield/utility demand, marketing savings and maintenance consumables are not factory manufacture defaults. | actual order/BOM/acceptance and primary original technical body |
| quality_identity | all inventory rows | Match actual published100/type/native reference internal ID/property/unitgroup and official bilingual names with full chemistry/CAS/grade/phase/provider/completion/compartment. Add every actual unlisted material, ingredient/fuel/fill/module/test food, transport, waste and emitted species as independently queried atomic measured exchanges. Unresolved identities remain gaps; missing differs from zero and not-applicable requires physical evidence. | own full direct and supplier/interface review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require complete accepted residual industrial food/drink/fats/oils machine function and equivalent bilingual one-kg net reference. Reject general centrifuges, independent pumps/filtration/packing, parts or customer foods as whole-equipment substitutes. | cpc; census; sigma |
| validate_makebuy | Require actual completed supply/order/BOM, food-contact component approval and local make/buy/test boundaries. Reject duplicate embedded upstream modules, assumed options/fills, catalogue factory recipes and lifetime customer consumables. Include attributable failed trials/rework/rejects. | cpc; anderson-expeller; anderson-oil; bucher-press; buhler-conche; tetra-handbook; handtmann-fs; sigma; census |
| validate_balances | Require own-stream physical/chemical/water/solvent balances and post-control species concentration × matched flow/time/state plus independent fugitives. Common-period utilities reconcile imports/actual generation/exports/storage with assigned meters and residual only; gross heat return is independently deducted once. |  |
| validate_species | Require measured molecular NO2, actual Cr(VI), contained Ni/Cu and non-overlapping PM. Prefer individual Ni/Cu species if the actual LCIA method differentiates them. Fossil CO2 needs origin evidence distinct from biogenic food carbon. Captured/dissolved material remains non-air; report checks performed/skipped, findings and actual completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual accepted configured residual industrial food/drink/fats/oils machinery manufacture |
| excluded_use | Neighbour-machine/component/customer-food proxies, catalogue mass/process recipe or universal factory assumption |
| required_metadata | All reference qualifiers; Qattr/Naccepted/Dnet; native units/own assays/state; order/BOM/makebuy/actual tests/providers/receiver/allocation/gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty, residuals, identity/scope gaps and performed/skipped check completeness |
| update_trigger | Principal function/order/configuration/contact alloy/chemical phase/provider/makebuy/site/period/acceptance/treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Whole44516 including fats/oils; adjacent4451/44522 and43931/43914/43921/43932 review. |
| anderson-expeller | handbook | Anderson International – Superior Oil Pressing Solutions That Set the Global Standard | https://www.andersonintl.com/wp-content/uploads/2026/04/260238_Anderson-International_Expeller-Press-Brochure-updates-compressed.pdf | Mechanical screw press, actual dual pressing/bearings/coupling/cooling and optional water/choke; empty mass is not accepted configured Dnet. |
| anderson-oil | handbook | Anderson oilseed equipment mechanical and chemical extraction | https://www.andersonintl.com/oilseed-equipment/ | Oilseed press and extrusion preparation interfaces; customer solvent extraction and entire plant are not automatic complete reference. |
| bucher-press | handbook | Bucher HPX hydraulic fruit juice press | https://www.bucherunipektin.com/en/bucher-hpx-presses | Hydraulic piston/drainage/cylinder rotation food press, with actual food vs pharmacy/lab/pilot function and empty/gross supply review. |
| buhler-conche | handbook | Bühler Finer S Edition26 and ELK S Edition26 | https://www.buhlergroup.com/global/en/media/media-releases/finer-s-ed-26-and-elk-s-ed-26.html | Food-grade component/frame/drives and five-roll/single-shaft mechanical chocolate processing; no alloy, marketing savings or recipe defaults. |
| tetra-handbook | handbook | Tetra Pak Dairy Processing Handbook Homogenizers | https://dairyprocessinghandbook.tetrapak.com/chapter/homogenizers | Pump/transmission/pistons/seals and precision-ground homogenizing device; customer milk pressure/flow/steam are not factory trial quantities. |
| handtmann-fs | handbook | Handtmann FS525 forming system | https://www.us.processing.handtmann.com/_Resources/Persistent/3/7/4/4/3744f681e461d09e41db8449cb7f5bfa216a4eb2/Produktdatenblatt_FS%20525_EN.pdf | Food forming/cutting with optional co-extrusion, rollers/water spray and downstream weighing/packing; actual order determines included interfaces. |
| sigma | handbook | Alfa Laval Sigma range of olive-oil decanter centrifuges | https://www.alfalaval.fr/globalassets/documents/products/separation/centrifugal-separators/decanters/alfa-laval-sigma-range-olive-oil-decanter-centrifuge.pdf | Excluded complete-reference counterexample: decanter centrifuge43931 even when olive-oil dedicated; actual included/optional assemblies and gross mass must not be generalized. |
| census | official_guidance | Schedule B Book - Chapter 84 | https://www.census.gov/foreign-trade/schedules/b/2022/c84.html | Supplementary HS precedence/general centrifuge boundary only; HS8438 fats/oils exclusion cannot narrow the explicit CPC44516 scope. |
