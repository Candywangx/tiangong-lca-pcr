---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegeta-f4d653a2
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Parts of machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables; parts n.e.c. for the goods of subclasses 44513 and 44516

## 1. Scope and Applicability

This methodology covers manufacture of NEW accepted dedicated parts and subassemblies for three full host families: machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables; non-farm cereal/dried-legume milling machinery; and residual industrial preparation or manufacture of food/drink including fats/oils. Examples include dedicated cleaner screens/wear dividers, milling rolls/sieve frames, oil-press worms/barrel liners/choke components, food-forming/knockout plates and food homogenizing valve/compression-block parts. Actual host function, dedicated interface and supplied completion state control inclusion, rather than one sanitary plate or a whole food machine. Generic motors/bearings/fasteners, separate pumps/filters, ordinary material products, interchangeable unmounted tools and food ingredients retain their own identities; they are not reference parts solely because a food line uses them. Returned-roll grinding or oil-press rebuilds are service/reconditioning boundaries and cannot silently be represented as new parts. Normal customer food processing and lifetime replacements are excluded from new-part manufacturing quantities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegeta-f4d653a2 |
| classification_refs | CPC3.0:44522 |
| covered_products | Dedicated NEW parts for the full three named cleaner/milling/food-drink-fats-oils host families |
| excluded_products | Whole hosts;44523 tobacco parts; unrelated thermal/dryer/cream-separator parts; general machinery/materials/tools; customer foods and undeclared refurbishment |
| representative_product | Actual accepted dedicated cleaner screen, flour-roll assembly, oil-press worm or food-former/homogenizer part; no common part mass |
| production_route | Actual local casting/sintering/moulding where evidenced, precision machining/fluting/grinding, finishing or bought completed parts, assembly/inspection/acceptance/dispatch |
| market_state | New accepted dedicated part at declared factory gate; identify blank/finished state and extra spares separately |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted NEW dedicated part for the declared seed/grain/dry-legume cleaner, cereal/dry-legume milling or residual food/drink/fats/oils manufacturing host |
| How much | 1 kg |
| How well | Declared host principal function, dedicated part drawing/interface, new finished supply state, order/BOM, part-specific food-contact approval where applicable and actual acceptance criteria |
| How long or cycle | One declared completed manufacture/acceptance period; no lifetime food throughput |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables, parts n.e.c. for the goods of subclasses 44513 and 44516 `95bf0657-db42-4437-b05e-d3e4d51494a2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual cleaner/milling/food-drink-fats-oils host function and mechanism; dedicated part drawing/interface and new-versus-returned state; model/serial/order/configuration; actual included hardware/options/spares/fills and food-contact scope; same-period accepted quantity/calibrated net mass; stock/alloy/purity/phase/chemical formula; make/buy/completion/local operations/acceptance media/rejects/rework; suppliers/geography/transport/receiver routes; native units/assays/state/returns/stocks/allocation/uncertainty and identity gaps |

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
| declared_starting_condition | Actual received identified raw ingredients, blanks or completed bought compatible parts |
| starting_condition_role | foreground_input_boundary |
| product_classification_scope | Dedicated parts for the three full named host families; actual principal function and dedicated interface review |
| recursive_input_rule | Bought complete parts embed upstream once; local manufacture uses measured ingredient/work; pair/cancel internal transfers |
| upstream_dataset_requirement | Matching completion/grade/phase/provider/geography/native quantity; raw powder is distinct from finished insert |
| disclosure | Host/model/drawing/order/new or returned state, accepted net part mass, makebuy/local routes/test media/retained fill |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| host_and_state | CPC44522 includes seed/grain/dry-legume cleaning/sorting/grading parts and parts n.e.c. for44513 and44516, including fats/oils. Identify actual host and specialized part interface; do not substitute a complete host, general component or unmounted tool. New manufacture and returned-part refurbishment are independently declared starting states. | cpc; buhler-roll; anderson-rebuild |
| supplied_architecture | Cimbria wear packages apply only to named Delta models; recycling configurations need different host review. NovaPur/NovaTec stainless/PU/no-wood/no-fastener design is a model example, not every sieve. GEA valve material/geometry follows actual model/order; finished inserts versus local powders, binder and pressing/sintering are exclusive make/buy branches. Food/non-food compression blocks and pharmaceutical approvals require actual supplied scope. | cimbria; buhler-plansifter; gea-valvematerials; gea-oldguide |
| local_route | JT shell/core manufacture supports conditional centrifugal casting and actual machining/fluting/balancing, never fixed alloy assays/hardness/layer depth or zero-defect assumptions. Anderson shaft/barrel/choke subassemblies and Meatec forming/knockout tooling follow their dedicated drawings and supply orders; replacement lists do not establish included BOM. Collect actual local materials, work, factory inspection/acceptance, rejects/rework and dispatch. Customer processing/recipes, R&D and commissioning are separately scoped, not default factory trial media. | jtrolls; anderson-sub; meatec; buhler-roll |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Local structural and food-contact part fabrication | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| assembly | Configured dedicated-part assembly | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| finish | Actual local joining cleaning and finishing | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| test | Actual factory inspection and acceptance trials | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| services | Unassigned common-period factory services | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| dispatch | Accepted part dispatch and packaging | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |
| residues | Measured waste transfers and direct emissions | conditional | Actual compatible observed operation only; common services include only unassigned residual | foreground | per 1 kg reference flow |

### Process: Local structural and food-contact part fabrication (`fabrication`)

#### Inputs

##### Product flows

###### Food-contact AISI304 stainless steel sheet (`ss304`)

Actual supplied food-contact aisi304 stainless steel sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact AISI304 stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Food-contact AISI316L stainless steel sheet (`ss316`)

Actual supplied food-contact aisi316l stainless steel sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact AISI316L stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Non-contact carbon steel frame sheet (`ssteel`)

Actual supplied non-contact carbon steel frame sheet with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Non-contact carbon steel frame sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Chilled cast iron flour-roll blank (`castiron`)

Actual supplied chilled cast iron flour-roll blank with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Chilled cast iron flour-roll blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Aluminium structural sheet (`aluminium`)

Actual sheet thicker than0.2mm with own alloy/temper/finish/provider and local cut/form stock and returns; food-contact certification is not inferred from sheet identity.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### T2 copper rod for local conductor manufacture (`copper`)

Actual T2 copper rod, own grade/assay/dimensions/provider for local conductors; weigh receipts/cuts/retained rod and returns, excluding embedded complete-motor copper.

- Selected flow: copper rod `776e80f1-8f0e-44ee-9a7e-baa9e747291a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Food-contact316L sanitary tube (`sanitarytube`)

Actual supplied food-contact316l sanitary tube with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-contact316L sanitary tube
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Food-grade HDPE forming plate (`peplate`)

Actual supplied food-grade hdpe forming plate with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Food-grade HDPE forming plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Alloy steel oil-press worm blank (`caststeel`)

Actual supplied alloy steel oil-press worm blank with own grade/form/dimensions/assay/food-contact scope and provider. Weigh receipts/cuts/retained parts, stocks and returns; measure local work separately. The queried UUID remains a grade/form gap.

- Selected flow: Alloy steel oil-press worm blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Tungsten carbide powder for local valve manufacture (`carbide`)

Actual WC powder compatible with raw powder-preparation supply, own chemistry/purity/particle grade/provider and measured receipts/stocks/returns for documented LOCAL valve-part pressing/sintering. Measure cobalt/binder separately by own assay; do not infer WC-Co binder fraction from the GEA valve catalogue or replace a bought finished insert with powder ingredients.

- Selected flow: Tungsten carbide powder `e2c47d47-229c-44f3-9ed0-e74fbbf0176f`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Structural silicon-nitride valve blank (`ceramic`)

The silicon-nitride candidate is qualified for wafer production rather than a structural homogenizing-valve blank. Actual Si3N4 structural grade, sintering state and dedicated interface remain unresolved.

- Selected flow: Structural silicon-nitride valve blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Nickel-metal foundry charge (`nickel`)

Electrolytic nickel candidates conflict their nickel-matte/intermediate classification; no compatible actual supplied alloying-metal identity was established. Measure own elemental assay and received form rather than adopt that conflict.

- Selected flow: Nickel-metal foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Ferrochromium foundry charge (`chromium`)

Microcarbon ferrochromium has ore classification and low-carbon ferrochromium has alloy-steel classification, conflicting their chemical supplies; retain actual Fe-Cr assay/grade/form/provider gap.

- Selected flow: Ferrochromium foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Ferromolybdenum foundry charge (`molybdenum`)

The ferro-molybdenum candidate has ore classification, conflicting its alloying-metal identity; retain own Fe-Mo assay/form/provider gap.

- Selected flow: Ferromolybdenum foundry charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Structural zirconium-oxide valve blank (`zirconia`)

Generic zirconium compounds/composite metal oxides do not establish ZrO2 structural valve blank grade/sintering state; match actual phase/chemistry/provider instead of chemical-name proxy.

- Selected flow: Structural zirconium-oxide valve blank
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Cobalt metal powder for local WC-Co binder (`cobalt`)

The cobalt candidate uses Cobalt content as reference property rather than physical supplied powder mass; it cannot represent gross binder powder. Collect actual powder purity/moisture/provider and independently measured binder formulation; WC does not imply any Co fraction.

- Selected flow: Cobalt metal powder for local WC-Co binder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Foundry pig iron charge (`pigiron`)

Anode-additive pig iron is the wrong use; high-purity pig iron has conflicting English/Chinese purity thresholds. Actual casting charge grade/assay/provider remains a gap, without a default shell/core recipe.

- Selected flow: Foundry pig iron charge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

###### Food-contact polyurethane moulding resin (`pu`)

Generic polyurethane/adhesive/filler identities do not establish the actual structural food-contact sieve-frame moulding resin. Collect own formulation, cure/reaction, retained mass, moisture/stocks/returns and specific approvals; no catalogue resin recipe.

- Selected flow: Food-contact polyurethane moulding resin
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-plansifter; gea-valvematerials

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Configured dedicated-part assembly (`assembly`)

#### Inputs

##### Product flows

###### Food-contact PTFE seal (`ptfe`)

Actual supplied food-contact ptfe seal and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact PTFE seal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Food-contact EPDM gasket (`epdm`)

Actual supplied food-contact epdm gasket and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact EPDM gasket
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Food-contact nitrile rubber seal (`nitrile`)

Actual supplied food-contact nitrile rubber seal and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Food-contact nitrile rubber seal
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Supplied juice-press filter cloth (`filter`)

Actual supplied supplied juice-press filter cloth and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Supplied juice-press filter cloth
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Supplied low-voltage power cable (`cable`)

Actual <=1000V power cable compatible with its construction/provider and supply standard; retain native Length/m receipts, installed lengths/cuts/returns. Physical reconciliation alone uses own same-construction kg/m.

- Selected flow: Low-voltage cable `49101b44-20cc-46a0-adfb-af07e4cc8908`
- Flow property / unit: Length / m
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Supplied roller bearing (`bearing`)

Actual completed roller-bearing subtype/size/finish/provider; weigh independent supplied bearings and returns, excluding bearings embedded in complete bought drives.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Supplied steel assembly screw (`screw`)

Actual completed steel assembly screw with own size/grade/finish/provider and installed/returned stock, not a default screw count or stainless food-contact grade.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought industrial gearbox (`gearbox`)

Actual supplied bought industrial gearbox and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought industrial gearbox
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought hydraulic cylinder (`actuator`)

Actual completed linear hydraulic cylinder under its own stroke/bore/seal/provider interface; weigh supplied module and distinguish local charging and factory stroke-test utilities.

- Selected flow: Linear acting (cylinders) hydraulic and pneumatic power engines and motors `aea61250-788d-4a2b-9c63-ff24b8113469`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought completed dedicated oil-press worm-shaft subassembly (`screwpress`)

Only an actually completed dedicated interrupted-flight oil-press worm-shaft subassembly with its own host/drawing/shaft/flight/interface and new finished supply state. Weigh independently received and installed hardware, returns and stock; embed its upstream manufacture once and separately measure remaining local assembly/testing. Complete oil-press hosts and rebuilt returned shafts are distinct. Bounded worm-shaft query did not establish a compatible UUID; retain the specific completion/interface gap.

- Selected flow: Bought completed dedicated oil-press worm-shaft subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought food homogenization valve assembly (`homvalve`)

Actual supplied bought food homogenization valve assembly and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought food homogenization valve assembly
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought steel isolation valve (`valve`)

Actual bought completed steel isolation valve and supplier/alloy/pressure/supplied finish; this generic identity does not certify a hygienic food-contact or homogenizer valve.

- Selected flow: Steel valve `3cb88a81-618f-4fa5-814e-46399b121622`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Local food-grade lubricating oil (`luboil`)

Actual supplied local food-grade lubricating oil and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local food-grade lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Local petroleum hydraulic-fluid charge (`hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-food-contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no food-grade approval is inferred.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Local food-grade lubricating grease (`grease`)

Actual supplied local food-grade lubricating grease and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Local food-grade lubricating grease
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Factory treated process water (`water`)

Actual treated industrial process-water supplier/quality and own water fraction/temperature/density, receipts/returns/reacted water/stocks; distinct from DI and tap water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought completed dedicated machinery part (`boughtpart`)

Only actual completed compatible dedicated parts received for integration into the accepted reference part assembly. Record drawings/host/model/finished supplied state, weigh received and returned parts, and identify remaining local manufacture. Its embedded materials/processes are upstream once; a finished bought reference with no local transformation does not justify duplicating upstream ingredients.

- Selected flow: Parts of machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables, parts n.e.c. for the goods of subclasses 44513 and 44516 `95bf0657-db42-4437-b05e-d3e4d51494a2`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought finished fluted flour-mill roll (`roll`)

Actual supplied bought finished fluted flour-mill roll and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought finished fluted flour-mill roll
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought dedicated grain-cleaner screen (`screen`)

Actual supplied bought dedicated grain-cleaner screen and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought dedicated grain-cleaner screen
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought food-former knockout plate (`forming`)

Actual supplied bought food-former knockout plate and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought food-former knockout plate
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Bought grain-sieve cleaning rubber ball (`rubberball`)

Actual supplied bought grain-sieve cleaning rubber ball and its own completed configuration/material/food-contact approval/provider; measure receipts/installed amount/stocks/returns and remaining local work. Complete bought hardware embeds upstream manufacture once; local ingredients and tests remain separately measured. The queried UUID remains unresolved.

- Selected flow: Bought grain-sieve cleaning rubber ball
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Retained supplied deionised water (`retained_di`)

Actual DI supply through compatible ion-exchange/RO interface, own conductivity/water fraction/temperature/density and measured factory-test receipts/stocks/returns; the equipment customer water rate is not a factory default. Record only actual measured charge retained in the accepted shipped part assembly, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

###### Retained supplied petroleum hydraulic-fluid charge (`retained_hydfluid`)

Only actual compatible >=70% petroleum-oil hydraulic preparation for a non-food-contact drive circuit. Measure native Volume/m3 at actual temperature and own composition/density, receipts/stocks/returns/retained charge; no food-grade approval is inferred. Record only actual measured charge retained in the accepted shipped part assembly, distinct from consumed trials and returns; empty circuits and catalogue options do not establish included fill.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume / m3
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_modules
- Sources: cimbria; anderson-sub; meatec; gea-oldguide

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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### Local surface-finishing50% nitric acid (`nitric`)

Actual50% aqueous nitric-acid industrial finishing/cleaning reagent CAS7697-37-2; own concentration/provider/density and reaction/dilution records. Measure physical solution, not anhydrous acid; no universal hygienic passivation recipe.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### Local cleaning30% sodium hydroxide (`alkali`)

Actual30% aqueous NaOH CAS1310-73-2 and supplier/assay/density for documented local cleaning; record physical solution and dilution/reaction/returns separately. This is not automatic customer CIP consumption.

- Selected flow: Sodium hydroxide（30%） `47926319-2558-4b19-bbab-0ff264fca360`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### Local stainless-steel welding filler wire (`weld`)

Actual locally consumed matching stainless filler wire, own alloy assay/coating/diameter/provider receipts/retained weld mass/cuts/stocks/returns. Generic flux wire or steel strip is not the supplied stainless grade; embedded bought-part joining remains upstream once.

- Selected flow: Local stainless-steel welding filler wire
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### Local gaseous argon welding shield (`argon`)

Actual locally consumed gaseous welding-shield argon, own CAS7440-37-1 purity/phase/provider/cylinder-pressure-temperature stocks/returns and measured factory joining demand. Queried candidates do not establish the correct supplied gas identity; no module hardware mass or lifetime customer consumption.

- Selected flow: Local gaseous argon welding shield
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### White fused alumina local grinding abrasive (`alumina`)

Actual white fused alumina CAS1344-28-1 for documented local grinding/lapping, with own abrasive grade/purity/particle size/provider, measured receipts/consumption/recovered stocks/returns. Unfused Bayer alumina or an assumed ceramic valve composition is distinct.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

###### Oil-water emulsion metalworking fluid (`cutfluid`)

Generic cutting-fluid comments enumerate oils/emulsions/pastes/gels/gases and do not identify the supplied oil-water emulsion. Collect actual concentrate/carrier formula, water/density, dilution/reaction/stocks/returns and receiver; no finished-hardware mass treatment.

- Selected flow: Oil-water emulsion metalworking fluid
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_materials
- Sources: jtrolls; buhler-roll

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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: jtrolls; gea-oldguide

###### Factory protective-atmosphere nitrogen (`nitrogen`)

Only actual factory protective-atmosphere nitrogen supply with matched purity/provider/gas phase/container and measured cylinder/line stocks/returns. Food-packaging lifetime gas and electronic-grade supply are distinct.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: jtrolls; gea-oldguide

###### Food-grade non-seed wheat factory trial medium (`seed`)

Only actual attributable factory acceptance load of food-grade non-seed wheat, own species/grade/moisture/provider and measured received/reused/returned/sold/discarded mass. Grain stored for ordinary customer milling is outside part manufacture. Existing feed-grade wheat with seed classification cannot establish this identity; retain the queried gap.

- Selected flow: Food-grade non-seed wheat factory trial medium
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_tests
- Sources: jtrolls; gea-oldguide

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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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

Actual C/E/F corrugated board with fibre>=80%, supplier/recycled content/moisture and weighed dispatch material/returns. Packing stays outside equipment net mass.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; meatec

###### LDPE packaging foil (`film`)

Actual non-cellular unreinforced non-adhesive LDPE foil supplier/thickness/moisture and dispatch/returned mass. This is not PVA, PET or HDPE forming stock.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; meatec

###### Dispatch wood pallet (`pallet`)

Actual wood pallet supplied for dispatch, own construction/moisture/receipts/reuse/return ledger. It is packaging outside Dnet and not an assumed EURO or one-pallet-per-part mass.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: cpc; meatec

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configured dedicated seed/mill/food machinery part (`finished`)

Accepted NEW manufactured dedicated part or subassembly for seed/grain/dry-legume cleaning, sorting or grading, non-farm cereal/dry-legume milling, or residual industrial food/drink/fats/oils machinery. Identify its host and dedicated interface; net accepted part mass excludes its complete host and packaging. Reground rolls or rebuilt subassemblies require a separately declared reconditioning boundary, never an assumed new-part identity.

- Selected flow: Parts of machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables, parts n.e.c. for the goods of subclasses 44513 and 44516 `95bf0657-db42-4437-b05e-d3e4d51494a2`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_mass
- Sources: cpc; meatec

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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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
- Amount rule: Measured attributable native-unit amount divided by accepted configured-part net mass.
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

Only actual independently measured fossil carbon dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Fossil origin requires own fuel/carbon evidence; biogenic trial-food carbon is separate.

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

Only actual independently measured isopropanol to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

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

Only actual independently measured water vapour to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air.

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

Only actual independently measured molecular nitrogen dioxide to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Molecular NO2 differs from NOx as NO2-equivalent.

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

Only actual independently measured pm10 to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. PM10 includes finer fractions; avoid overlapping constituent-element/particle reporting.

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

###### Copper to air (`copperair`)

Only actual independently measured copper to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

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

###### Hexavalent chromium to air (`chromiumair`)

Only actual independently measured hexavalent chromium to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own Cr(VI) assay, not total chromium or alloy mass, is required.

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

###### Nickel to air (`nickelair`)

Only actual independently measured nickel to air after configured local controls, CAS/species/origin and ordinary unspecified-air compartment matched to concentration × simultaneous flow/time with state/unit correction plus fugitives. Captured sludge/wastewater/stocks and unexplained residuals are non-air. Own contained element differs from gross oxide/salt/alloy. Generic metal-and-ion flow requires preference for separately matched individual species when the actual LCIA method differentiates them.

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


## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_configuration | Separate actual configurations/site/process meters first. Allocate common-period residual by measured causal service demand or work, not catalogue food throughput. Include attributable failed trials/rework/rejects in accepted-part burdens. Cancel paired internal transfers; disclose reusable returned test food, saleable co-products and receiver allocation/treatment without invented avoided burdens. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted part | foreground_record | model/configuration/serial; net mass; Naccepted; Dnet; included hardware/fills; excluded packing/spares | Calibrated traceable weighings reconcile accepted complete parts with actual order/BOM within one configuration/period. Sum accepted net mass excluding packing/spare stock/rejects/consumed trials. Include only actually retained shipped fill. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_materials | fabrication | local stock and chemical ingredients | foreground_record | Qattr; own gross mass/assay/moisture/density; alloy/formulation; stocks/returns/reactions/retained parts; actual local route | Weigh actual supplied stock and each local finishing/joining/cleaning ingredient; reconcile own-stream element/moisture/chemical contents with retained hardware, reaction products, baths/recovery/waste/stocks/returns. Actual surface alloy or sanitary approval is specific to the contacted part, never every frame. Embedded complete-module materials stay upstream once. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_modules | assembly | completed hardware and retained fill | foreground_record | Qattr; BOM/completion/options; hardware mass/length; separate fill formula/assay/T/P/density; receipts/installed/returns/stocks | Hardware branch weighs actual completed received/installed/returned assemblies and cable lengths, documenting remaining local work. Chemical branch independently measures local fill/lubricant/gas in its own native units and own composition/moisture/T/P/density, stocks/reactions/retention/returns. Complete bought modules embed their chemicals upstream once; whole hardware mass never substitutes chemical amount. First retained supply fill is distinct from trial consumption and customer maintenance. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_tests | test | observed factory trial media | foreground_record | Qattr; actual acceptance order/trial/repeat/reject; water/food/gas receipts; own composition/state; returned/reused/sold/discarded stocks | Meter actual attributed factory tests and repeated/failed trials, using each food/chemical/water/gas own measured amount and composition. Record returned/reused/recovered and saleable food independently, never as disappearance. Exclude normal customer production, catalogue recipe/capacity, R&D demonstrations or customer commissioning unless an explicit declared manufacturing attribution is evidenced. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_utilities | services | each unassigned utility | foreground_record | Qattr; common period/site/import/self-generation/export/storage; assigned meters; gross/net heat datum; independent return; T/P/humidity/density | Reconcile each common-period imported and actually generated utility minus exports/storage with assigned local/test meters; allocate only residual once. Cable/energy/volume units remain native. Gross heat deducts separately measured same-datum return once; net heat never twice. Process water/DI/service water and internally circulated cooling flows are independent interfaces; paired returns cancel. | native unit | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_dispatch | dispatch | each packaging item | foreground_record | Qattr; packing grade/moisture/dimensions; dispatch receipts; returns/reuse/stocks; packing outside Dnet | Weigh actual board/foil/pallet independently and reconcile dispatch/returns/reuse/stocks within the accepted configuration/period. No generic packaging ratio or catalogue shipping gross mass establishes net part mass. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_wastes | residues | each outgoing waste stream | foreground_record | Qattr; transfer weight; own composition/assay/moisture/density; stocks/returns/recovery; receiver/transport/treatment route | Measure each outgoing waste independently at its actual handover state; retain own-stream wet/dry/composition and chemical/metal contents, returned stock and receiver route. Wastewater/sludge/spent solvent/captured dust/food/oil remain separate. Treatment is distinct from direct environmental discharge; captured material is not air. Missing compatible identity remains a gap rather than wrong-origin waste proxy. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |
| cp_emissions | residues | each direct emitted species | foreground_record | Qattr; CAS/species/origin/compartment; post-control concentration; simultaneous flow/time; T/P/wet-dry/O2 correction; fugitive sampling; capture/reaction/byproducts | Use independently observed post-control concentration times matched actual flow and time with unit/state correction plus separately sampled fugitives. Reconcile input/retained/recovered/destroyed/sludge/wastewater/stocks by own assays; capture is not destruction and non-air/unexplained residuals never infer air. Molecular NO2 differs from NOx-equivalent; contained Cr(VI)/Ni/Cu differs from total metal/oxide/salt/alloy and avoids PM overlap. | kg | each actual batch/matched interval | one common production period | same declared configuration/site | per 1 kg reference flow | original receipts/calibration/own assays/acceptance/BOM/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Within one actual configuration/period divide attributable native-unit total by the sum of calibrated accepted complete-part net masses. Retain per-part quantities and actual denominator evidence. | Qattr; Dnet; Naccepted; cp_mass | native-unit amount per kg reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_qnd | all inventory rows | Same configuration/period Qattr includes attributable manufacture/assembly/tests/reject/rework burden. Naccepted counts accepted parts; Dnet sums their calibrated net masses. M=Dnet/Naccepted; q_item=Qattr/Naccepted; q_ref=Qattr/Dnet. Catalogue empty/gross mass or food throughput is not a denominator. | calibrated configuration-specific accepted ledger |
| quality_physical | all inventory rows | Every element/chemical term uses its own gross mass, assay/moisture/wet-dry basis, reactions/stocks/returns/retention. Alloy/sludge/solution mass differs from contained element/active chemical. Each water stream requires own water fraction/density at actual temperature, independent reaction/retained fill/evaporation/discharge/stocks; internal returns pair and cancel. | own-stream assays and state/stock/reaction records |
| quality_solvent | ipa; spentipa; ipair; wastewater | Reconcile each solvent own assay, stocks/reactions/retained/recovered/captured/destroyed/wastewater/spent-media terms against independently measured air. Capture differs from destruction; non-air and unexplained residual cannot become emitted IPA. | independent measured fate and air records |
| quality_scope | reference product | Maintain all three named host part families with actual host-function, dedicated-interface and NEW manufactured state review. Food-contact grade/approval is component-specific, not a whole-frame claim. Catalogue option, empty/gross mass, customer recipe/yield/utility demand, marketing savings and maintenance consumables are not factory manufacture defaults. | actual order/BOM/acceptance and primary original technical body |
| quality_identity | all inventory rows | Match actual published100/type/native reference internal ID/property/unitgroup and official bilingual names with full chemistry/CAS/grade/phase/provider/completion/compartment. Add every actual unlisted material, ingredient/fuel/fill/module/test food, transport, waste and emitted species as independently queried atomic measured exchanges. Unresolved identities remain gaps; missing differs from zero and not-applicable requires physical evidence. | own full direct and supplier/interface review |


## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_scope | Require the accepted dedicated new part, actual cleaner/milling/food-drink-fats-oils host/function/drawing/interface, one-kg net reference and disclosed completion/new-versus-returned state. Reject whole-host, general machinery, ordinary material/tool or food proxies. | cpc; anderson-sub; meatec |
| validate_makebuy | Require actual supplied order/BOM, part-specific food-contact approval, exclusive raw-ingredient versus bought-complete branches and actual trial attribution. Reject catalogue alloy/binder recipes/weights/energy/customer yield/lifetime replacement defaults; include attributable rejects/rework/failed trials. | cpc; cimbria; jtrolls; buhler-plansifter; buhler-roll; anderson-sub; anderson-rebuild; meatec; gea-valvematerials; gea-oldguide |
| validate_balances | Require each stream own assay/water/density/stocks/returns/reactions and measured non-air solvent fates; each emission actual species/origin/compartment and post-control concentration times matched flow/time/state plus independent fugitives. Utility imports/actual generation/exports/storage reconcile assigned meters and residual once, with independent same-datum gross heat return deducted once. |  |
| validate_species | Require molecular NO2 not NOx-equivalent, Cr(VI) not total Cr, contained Ni/Cu not gross salts/oxides and non-overlapping PM. Prefer matched individual species where the actual LCIA method differentiates them. Fossil versus biogenic trial-food carbon and measured air versus captured/liquid fates remain separate. Report performed/skipped checks, findings and actual completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset; process; lifecyclemodel |
| allowed_use | Actual accepted configured new seed-cleaner, milling and food/drink/fats/oils dedicated-part manufacture |
| excluded_use | Whole-host/general-component/material/customer-food proxies, catalogue mass/process recipe or universal factory assumption |
| required_metadata | All reference qualifiers; Qattr/Naccepted/Dnet; native units/own assays/state; order/BOM/makebuy/actual tests/providers/receiver/allocation/gaps |
| required_quality_disclosure | Measured/estimated/missing, calibration/sampling/uncertainty, residuals, identity/scope gaps and performed/skipped check completeness |
| update_trigger | Principal function/order/configuration/contact alloy/chemical phase/provider/makebuy/site/period/acceptance/treatment change |


## 11. Data Sources

| source_id | type | title | reference | used_for |
| --- | --- | --- | --- | --- |
| cpc | official_guidance | Central Product Classification Version 3.0, Explanatory Notes | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Whole dedicated parts for seed/grain/dry-legume cleaning/sorting/grading and44513/44516 hosts; parts are distinct from whole hosts and44523 tobacco parts. |
| cimbria | handbook | DELTA Screen Cleaner | https://www.cimbria.com/en/products/processing/screen-cleaner/ | Actual dedicated screens and screen-cleaning rubber balls; Ducol wear armour is limited to named Delta models. Bearings/belts retain their general product identities; dry plastic-recycling machine configuration is outside automatic seed-host scope. |
| jtrolls | handbook | Flour Mill Rolls | https://www.jtrolls.com/flour-mill-rolls | Ni-Cr-Mo alloy shell/grey-iron core, centrifugal composite casting and machined journals/flutes/balancing establish a possible local manufacture route. Hardness, layer thickness, zero porosity and life/yield claims are not universal assays or factors. |
| buhler-plansifter | handbook | Bühler Plansifters | https://www.buhlergroup.com/global/en/product-families/Plansifters.html | NovaPur/NovaTec stainless steel and polyurethane, no wood/screw fasteners near product, and dedicated sieve-cleaner/frame examples apply only to actually supplied models. Catalogue capacity increases are not manufacturing values. |
| buhler-roll | handbook | Keep on rolling | https://www.buhlergroup.com/global/en/stories/inspiration-hub/roll-refurbishment.html | Fluted/smooth/grinding rolls and sieve framing/tensioning require the actual grain/cocoa/food host. Returned-roll reconditioning and non-food ink/battery/feed applications require distinct starting state and scope; customer energy savings are not factory factors. |
| anderson-sub | handbook | The Advantages of Screw Press Subassemblies | https://www.andersonintl.com/the-advantages-of-screw-press-subassemblies/ | Oilseed press barrel liners/knife bars/bolts, shaft interrupted worm flights and choke jaws/die plates are actual subassemblies; completed parts and rebuilt returned assemblies require separate supply states. |
| anderson-rebuild | handbook | Choose Anderson for Your Expeller Press Machine Rebuild | https://www.andersonintl.com/?p=9640 | Actual used-machine teardown/cleaning/rebuild tools and tolerances are a reconditioning counterexample, not a default new-part route or2/3tonne part mass. |
| meatec | handbook | Meatec Food Forming Parts | https://www.meatec.co.uk/ | Dedicated food forming plates/moulds and knockout assemblies/blocks/cups follow the actual supported host, part drawing and order. R&D sample tools or customer food trials do not establish factory manufacturing load. |
| gea-valvematerials | handbook | GEA Homogenizing valves | https://efps.gr/wp-content/uploads/2023/06/GEA_Homogenizing-valve_LR-244290-1.pdf | Actual Standard/Re+VALVE WC or Si3N4/ZrO2, NanoVALVE NVHC WC and NVHP WC or ceramic depend on model/order. Finished insert versus local raw powder/sintering is separate; no cobalt binder recipe or pharmaceutical certification inferred. |
| gea-oldguide | handbook | GEA Homogenization technology – State-of-the-art equipment and solutions for your production | https://cdn.gea.com/-/media/migratedfromtridion/stories/homogenization-guide-brochure-71437.pdf?rev=ecd54d06a70c4deb9faa476c531a8379 | Compression block and homogenizing-valve assemblies are configurable and serve food and non-food applications;3-A/FDA declarations are not every part/alloy/use approval. Customer energy/water/steam saving packages are outside default manufacture. |
