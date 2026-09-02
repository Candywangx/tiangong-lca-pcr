---
schema_version: 1
pcr_id: "pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wheat-and-meslin-flour"
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 小麦粉和混合麦粉

## 1. 范围与适用性

本 PCR 适用于面粉厂生产食用小麦粉和混合麦粉的前景过程。Meslin 指小麦与黑麦的混合物，必须声明两种谷物的比例。前景边界从磨粉用食用谷物进入工厂开始，到成品面粉在磨厂门交付为止；包括本报告工厂实施的清理、调质或润麦、研磨、分离、配粉或后处理、储存，以及包装或散装发运。

精制粉、直出粉、高出粉率面粉及全麦粉仅在数据集明确声明面粉等级、出粉率口径、谷物组成、水分口径、添加物和包装状态时纳入。Codex CXS 152 的要求只适用于该标准明示范围内的普通小麦粉或密穗小麦粉。硬粒小麦粗粒粉及碎粒、其他谷物面粉、分离淀粉或面筋、预拌粉或面团，以及烘焙制品不在本 PCR 范围内。

本 PCR 支持场址特定前景数据包和磨厂门二手数据集，不提供默认清单值。场址实测值和供应商特定的关联数据集优先于本文的筛选范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wheat-and-meslin-flour |
| classification_refs | CPC 3.0 `23110`，Wheat and meslin flour，精确类别语境 |
| covered_products | 由小麦或混合麦制成并在磨厂门销售的食用面粉，且已声明等级、出粉率口径和谷物组成 |
| excluded_products | 硬粒小麦粗粒粉或碎粒；其他谷物面粉；分离淀粉或面筋；预拌粉或面团；烘焙制品；非食用磨粉产品 |
| representative_product | 在磨厂门散装或采用已声明包装的常规精制小麦粉 |
| production_route | 谷物接收与清理；调质或润麦；辊磨或等效研磨与分级；配粉或后处理；储存及散装发运或包装 |
| market_state | 磨厂门交付的湿基成品食用面粉 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明商业规格的小麦粉或混合麦粉 |
| How much | 磨厂门 1 kg 湿基成品面粉 |
| How well | 食品级；已声明谷物组成、面粉等级或出粉率口径、水分、添加或强化情况以及包装状态 |
| How long or cycle | 一个有代表性的生产批次或生产期，包括在磨厂门转移前的储存 |
| reference_flow_link | 定量参考为 `blending_finishing_packaging` 输出的 1 kg 所选 Tiangong 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 湿基成品面粉 |
| 参考产品流 | 小麦和中筋面粉 `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 小麦或混合麦身份及小麦/黑麦比例；适用时的物种或谷物类别；精制、直出、高出粉率或全麦标识；出粉率口径；湿基面粉水分；添加、强化、漂白或处理状态；散装或包装状态及包装物料清单；工厂地域和技术；适用食品规格 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考面粉输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 定量参考固定为磨厂门 1 kg 湿基成品面粉。 |
| `as_produced_moisture` | 谷物、中间品、面粉及共产品质量 | Mass | kg 和质量百分比水分 | 在相同批次和时间口径记录称量质量与水分；未显式换算时不得混用湿基与干物质数量。 |
| `dry_matter_conversion` | 任何干基比较 | Mass | kg 干物质 | 干物质等于湿基质量乘以 `(1 - moisture_fraction)`，并保留实测水分结果。 |
| `extraction_rate` | 成品面粉产率 | Mass | % | 出粉率等于成品面粉质量除以进入第一道破碎的清洁调质谷物质量再乘以 100；声明结果仅含直出粉还是包含全部面粉流。 |
| `energy_conversion` | 外购电力和燃料 | Energy | kWh 和 MJ | 保留计量的能源载体单位，仅使用已记录的系数换算；终端能源换算采用 1 kWh = 3.6 MJ。 |
| `packaging_mass` | 随产品交付的包装 | Mass | kg | 按实际物料清单记录每种包装材料相对于 1 kg 面粉的质量；仅在核实为散装发运时填零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入报告磨厂的食品级小麦、黑麦或混合麦，声明产地、水分、质量等级、运输边界和质量口径 |
| starting_condition_role | 磨厂门前景系统的上游产品输入 |
| product_classification_scope | CPC 3.0 `23110` 小麦粉和混合麦粉成品；上游谷物及共产品仍为单独分类的产品 |
| recursive_input_rule | 已采购且已归类为小麦粉或混合麦粉的输入必须作为关联的上游产品数据集，不得在同一前景系统中再次按本 PCR 展开。报告磨厂内部产生的返工面粉是内部流，必须另行标识。 |
| upstream_dataset_requirement | 谷物生产、接收前谷物干燥或储存、入厂运输、电力、燃料、供水、配料、包装生产和废物处理须关联到地域与技术适配的上游数据集。 |
| disclosure | 声明数据集是从谷物接收开始还是包含任何上游操作；列出被排除的厂内操作、外包磨粉阶段、共产品处理、包装状态、粉尘控制覆盖和截断。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | mandatory_foreground_operations | 本报告磨厂执行时，纳入接收与清理、调质或润麦、研磨与分级、配粉或后处理、储存和磨厂门发运。 | `us-epa-ap42-wheat-milling-2003`; `epd-pcr-grain-mill-products-2013-04` |
| `boundary_rule_2` | conditional_foreground_operations | 所代表产品发生包装、强化、漂白、干燥、厂内公用工程、废水处理或粉尘收集时必须纳入；否则记录其未发生。 | `codex-cxs-152-2023`; `us-epa-ap42-wheat-milling-2003` |
| `boundary_rule_3` | upstream_and_downstream_links | 上游供应和处理建模为关联数据集；前景清单排除磨厂门后的分销、面粉使用、烘焙、消费和生命末期。 | `eu-pef-method-2021` |
| `boundary_rule_4` | cutoff_and_recursive_inputs | 不得仅因缺少 UUID 而遗漏物料或能源流；保留语义行，并在发布前解析链接或披露缺口。防止采购面粉输入被递归展开。 | `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `grain_receiving_cleaning` | 谷物接收、储存和清理 | required | 对接收的磨粉谷物始终适用 | 前景预处理 | 送往润麦的清洁谷物 kg |
| `conditioning_tempering` | 调质和润麦 | required | 磨粉前使用水或保持时间时始终适用 | 前景准备 | 送往研磨的调质谷物 kg |
| `milling_fractionation` | 研磨、筛分、清粉和分级 | required | 始终适用 | 前景转化 | 未配粉面粉 kg |
| `blending_finishing_packaging` | 配粉、后处理、储存和发运 | required | 始终适用；包装销售时包装投入为条件必需 | 最终前景过程 | 磨厂门 1 kg 成品面粉 |

### 过程：谷物接收、储存和清理（`grain_receiving_cleaning`）

#### 输入

##### 产品流

###### 食品级磨粉谷物（`received_milling_grain`）

记录用于所代表面粉的小麦、黑麦或预混混合麦。确认具有正确食品级分类和参考属性的 Tiangong 谷物流之前，不指定输入 UUID。

- 选定流：食品级小麦或混合麦磨粉谷物
- 流属性/单位：Mass / kg
- 数量规则：分配给合格生产批次的称量接收质量，仅通过显式水分规则修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grain_lot_mass_quality`
- 来源：`usda-ars-soft-wheat-milling-methods`

###### 接收和清理能源（`receiving_cleaning_energy`）

记录输送、吸风、分离、储存和清理的计量电力与燃料；共享仪表按已记录的运行数据分配。

- 选定流：按实际载体和供应地域确定的外购电力与燃料
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：计量消耗扣除无关负荷，归一化至合格清洁谷物或成品面粉
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 废物流

###### 筛除物和清理残渣（`cleaning_residues`）

按实测去向和分类记录石块、异物、拒收谷物及其他清理残渣；可销售的动物饲料输出属于产品共产品而非废物。

- 选定流：按实际处理路线确定的清理残渣
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或衡算的残渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_balance`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 基本流

除非具有空气环境舱室流和实测或许可排放依据，否则此处不记录颗粒物基本流。送处理的捕集物是废物或产品流，不是基本排放。

#### 输出

##### 产品流

###### 清洁磨粉谷物（`cleaned_grain_internal`）

以内部前景流转移清洁谷物，并保留批次身份和水分。

- 选定流：清洁磨粉谷物，内部流
- 流属性/单位：Mass / kg
- 数量规则：送往润麦的称量或质量衡算清洁谷物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 清洁谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grain_lot_mass_quality`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 废物流

除 `cleaning_residues` 外无默认废物输出；单独管理的废物须建立独立稳定行。

##### 基本流

不规定默认基本流输出。

### 过程：调质和润麦（`conditioning_tempering`）

#### 输入

##### 产品流

###### 来自接收过程的清洁谷物（`cleaned_grain_input`）

将清洁谷物内部批次带入调质，不重复其上游负担。

- 选定流：清洁磨粉谷物，内部流
- 流属性/单位：Mass / kg
- 数量规则：等于 `cleaned_grain_internal` 转移输出，并记录储存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 调质谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tempering_water_moisture`
- 来源：`usda-ars-soft-wheat-milling-methods`

###### 润麦用水（`tempering_water`）

记录为达到已声明目标水分而实际加入的水；物质性损失或循环水另行记录。

- 选定流：适配工厂供水的工艺用水
- 流属性/单位：Mass / kg
- 数量规则：计量或批量加水，并与谷物调质前后质量和水分衡算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 调质谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tempering_water_moisture`
- 来源：`usda-ars-soft-wheat-milling-methods`

###### 润麦能源（`tempering_energy`）

可与其他磨厂负荷分开时，记录输送、制水和调质的计量能源。

- 选定流：按实际载体和供应地域确定的外购电力与燃料
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：计量用量或已记录的共享仪表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 废物流

仅当排水或废水以受管理废物流离开过程时记录。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 调质谷物（`conditioned_grain_internal`）

将调质谷物转移至研磨过程，并记录实测水分和润麦时间。

- 选定流：调质小麦或混合麦，内部流
- 流属性/单位：Mass / kg
- 数量规则：加水和保持后实测的调质谷物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 调质谷物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_tempering_water_moisture`
- 来源：`usda-ars-soft-wheat-milling-methods`

##### 废物流

不规定默认废物输出。

##### 基本流

不规定默认基本流输出。

### 过程：研磨、筛分、清粉和分级（`milling_fractionation`）

#### 输入

##### 产品流

###### 进入第一道破碎的调质谷物（`conditioned_grain_input`）

以转移的调质谷物质量作为出粉率分母，并保留实测水分。

- 选定流：调质小麦或混合麦，内部流
- 流属性/单位：Mass / kg
- 数量规则：等于 `conditioned_grain_internal` 转移输出，扣除另行实测的搬运损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_balance`
- 来源：`usda-ars-soft-wheat-milling-methods`

###### 研磨能源（`milling_energy`）

记录破碎辊与心磨辊、筛理、清粉、气力输送和粉尘收集的电力及其他磨粉能源。

- 选定流：按实际载体和供应地域确定的外购电力与燃料
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：将研磨阶段计量能源归一化到成品面粉；范围仅作筛选，不得作为默认值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`odunfa-joel-flour-milling-energy-2022`
- 数量范围：研磨阶段能源强度的文献筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.18749
  - 上限：0.28037
  - 单位：MJ
  - 基准：每 1 kg 面粉输出；由两个磨厂报告的 187.49 至 280.37 MJ/t 换算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`odunfa-joel-flour-milling-energy-2022`

##### 废物流

###### 捕集的磨粉粉尘和不可销售残渣（`captured_milling_dust`）

按实测质量和处理路线记录捕集粉尘与不可销售残渣。除非与实际物料一致，不得使用带有饲料级或其他限定的数据库流。

- 选定流：按实际处理路线确定的捕集粉尘或残渣
- 流属性/单位：Mass / kg
- 数量规则：称量收集量或经衡算的粉尘控制记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_and_air_records`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 基本流

###### 排入空气的颗粒物（`particulate_to_air`）

只记录控制后的实测、许可或其他有依据排放，并使用具备正确空气环境舱室和粒径定义的 Tiangong 基本流。

- 选定流：带环境舱室的空气颗粒物，UUID 未解析
- 流属性/单位：Mass / kg
- 数量规则：控制后烟道或许可结果，或以通量乘以有记录的场址特定因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_and_air_records`
- 来源：`us-epa-ap42-wheat-milling-2003`

#### 输出

##### 产品流

###### 未配粉面粉流（`unblended_flour_internal`）

记录送往配粉或后处理的全部面粉流，并区分直接销售的流。

- 选定流：未配粉小麦粉或混合麦粉，内部流
- 流属性/单位：Mass / kg
- 数量规则：按流和等级称量的面粉输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_balance`
- 来源：`asb-extraction-rate`; `usda-ars-soft-wheat-milling-methods`
- 数量范围：常规高效精制面粉出粉率筛选范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：72
  - 上限：76
  - 单位：percent
  - 基准：常规精制成品面粉除以进入第一道破碎的清洁调质谷物；不得用作全麦或产品特定高出粉率路线的限值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`asb-extraction-rate`

###### 可销售麸皮、胚芽、次粉及其他组分（`milling_coproducts`）

将每种可销售组分作为产品共产品记录，包含实际名称、水分、数量、去向和未解析或已核验的流身份。

- 选定流：按实际产品身份确定的可销售磨粉组分
- 流属性/单位：Mass / kg
- 数量规则：按组分和批次称量的输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_balance`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 废物流

捕集粉尘记入 `captured_milling_dust`；其他不可销售组分须建立独立行。

##### 基本流

颗粒物排放记入 `particulate_to_air`；仅添加有依据且带环境舱室的排放。

### 过程：配粉、后处理、储存和发运（`blending_finishing_packaging`）

#### 输入

##### 产品流

###### 最终配粉用面粉流（`flour_streams_input`）

转移实测面粉流，不重复其上游负担。

- 选定流：未配粉小麦粉或混合麦粉，内部流
- 流属性/单位：Mass / kg
- 数量规则：分配给所代表产品的转移面粉流之和
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass_balance`
- 来源：`codex-cxs-152-2023`

###### 配料、强化剂和加工助剂（`ingredients_additives`）

仅记录实际添加的物料，并区分留在产品中的配料、加工助剂和非故意残留。

- 选定流：实际配料、强化剂或加工助剂产品流
- 流属性/单位：Mass / kg
- 数量规则：分配给放行产品的批次单或加料系统数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blend_pack_dispatch`
- 来源：`codex-cxs-152-2023`

###### 包装材料（`packaging_materials`）

记录随产品交付的实际一级、二级和三级包装；仅核实为散装发运时省略。

- 选定流：与物料清单一致的包装材料流
- 流属性/单位：Mass / kg
- 数量规则：采购或领用包装扣除经核实损失，再除以包装面粉输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blend_pack_dispatch`
- 来源：`codex-cxs-152-2023`

###### 配粉、储存和发运能源（`finishing_energy`）

记录配粉、气力输送、储存、包装和装运的计量能源。

- 选定流：按实际载体和供应地域确定的外购电力与燃料
- 流属性/单位：Energy / kWh 或 MJ
- 数量规则：计量用量或已记录的共享仪表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 磨厂门成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`us-epa-ap42-wheat-milling-2003`

##### 废物流

按实测去向记录不合格面粉、包装废物和清洁废物；内部返工面粉仍为内部产品流。

##### 基本流

不规定默认基本流输入。

#### 输出

##### 产品流

###### 成品小麦粉或混合麦粉（`finished_flour_reference`）

该输出承载定量参考和全部必需产品限定信息。

- 选定流：小麦和中筋面粉 `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：磨厂门恰好 1 kg 湿基放行成品面粉
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：磨厂门 1 kg 成品面粉
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_blend_pack_dispatch`
- 来源：`codex-cxs-152-2023`

##### 废物流

不合格产品或包装废物仅在离开前景系统送往处理时记录。

##### 基本流

不规定默认基本流输出。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | process_subdivision | 在技术可行时，对清理、润麦、研磨、配粉、包装和独立运行的产品线分别计量，从而避免分配。 | `eu-pef-method-2021` |
| `allocation_rule_2` | joint_milling_inventory | 分配前，将面粉、麸皮、胚芽、次粉及其他可销售组分保留在同一套经衡算的联合质量平衡中；不得仅为避免分配而把可销售共产品归为废物。 | `eu-pef-method-2021`; `us-epa-ap42-wheat-milling-2003` |
| `allocation_rule_3` | multifunctionality_hierarchy | 无法通过细分解决多功能性时，在有可靠被替代功能记录的情况下采用系统扩展或替代；否则采用相关物理因果关系，只有无法建立物理因果关系时才采用经济分配等其他关系。 | `eu-pef-method-2021` |
| `allocation_rule_4` | allocation_disclosure | 报告所选方法、分配系数、数量、水分口径；采用经济分配时报告价格地域和平均期，并对任何重要选择给出敏感性结果。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_grain_lot_mass_quality` | `grain_receiving_cleaning` | 接收谷物和清洁谷物 | 地磅、进料和实验室记录 | 批号；供应商；物种；小麦/黑麦比例；毛重和净重；水分；质量等级；拒收 | 校准秤和代表性水分、质量采样 | kg；质量 % | 每批 | 代表期内全部批次 | 报告磨厂 | 汇总合格批次质量；保留批次质量加权水分和组成 | 校准、采样和验收记录 |
| `cp_tempering_water_moisture` | `conditioning_tempering` | 清洁谷物、用水和调质谷物 | 批次和实验室记录 | 批号；调质前后谷物质量；调质前后水分；加水量；保持时间 | 校准加水计量或批量加水，并进行水分检测 | kg；质量 %；h | 每批或每班 | 代表性生产期和季节 | 报告磨厂 | 按批衡算加水和水分变化，再按质量加权 | 仪表检查、水分方法、批次衡算 |
| `cp_process_energy` | 全部前景过程 | 电力和燃料 | 仪表、账单、运行时间和设备记录 | 仪表编号；始末读数；载体；设备工时；生产量；分配驱动 | 优先分表；否则采用有记录的共享仪表分配 | kWh；MJ；载体单位 | 连续或每班；按月与账单核对 | 季节性重要时至少覆盖 12 个代表月 | 报告磨厂 | 扣除无关负荷，按有记录单位换算并归一化到放行面粉 | 仪表校准、账单、运行日志、核对 |
| `cp_output_mass_balance` | `grain_receiving_cleaning`; `milling_fractionation`; `blending_finishing_packaging` | 面粉、共产品、残渣和转移 | 生产、筒仓、包装、发运和废物记录 | 输入输出质量；水分；流身份；去向；返工；库存变化 | 校准秤和库存核对 | kg；质量 % | 每批或每班 | 包含期初期末库存的代表生产期 | 报告磨厂 | 按流汇总，计入库存变化，并按湿基与干物质衡算 | 秤校准、筒仓核对、签署的发运或废物记录 |
| `cp_dust_and_air_records` | `grain_receiving_cleaning`; `milling_fractionation` | 捕集粉尘和颗粒物排放 | 收集、烟道测试、许可和控制记录 | 来源；粒径；环境舱室；控制状态；捕集质量；排放浓度；气体流量；时长 | 称量捕集物，排放采用场址测试或许可数据 | kg；mg/m3；m3；h | 每次收集和测试；与运行期核对 | 代表性运行期 | 全部相关排放点 | 捕集物与排放基本流分开，并按粒径汇总 | 测试报告、许可、控制运行日志 |
| `cp_blend_pack_dispatch` | `blending_finishing_packaging` | 配料、包装和成品面粉 | 批次单、加料、包装领用和发运记录 | 配方；剂量；包装材料和质量；包装或散装数量；产品水分；放行规格 | 校准加料与包装设备，并进行放行检测 | kg；质量 % | 每批或每产品代码 | 代表性产品组合 | 报告磨厂 | 按产品代码直接归属；核对领用包装和放行输出 | 批准批次单、包装 BOM、放行证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | 清单归一化 | 将每个可归属前景量除以同一湿基口径的放行成品面粉质量。 | 可归属数量；放行面粉质量 | 每 1 kg 成品面粉的数量 |  |
| `calc_rule_2` | 干物质平衡 | `dry_mass = as_produced_mass × (1 - moisture_fraction)`；分别对每个输入输出批次计算。 | 湿基质量；实测水分 | kg 干物质 | `usda-ars-soft-wheat-milling-methods` |
| `calc_rule_3` | 出粉率 | `extraction_rate_percent = finished_flour_mass / clean_conditioned_grain_to_first_break × 100`；声明包含哪些面粉流。 | 成品面粉质量；清洁调质谷物质量 | 出粉率，% | `asb-extraction-rate`; `usda-ars-soft-wheat-milling-methods` |
| `calc_rule_4` | 能源换算 | `MJ = kWh × 3.6`；没有已记录的一次能源系数时，不得把文献中的一次能源值换算为电力。 | 计量 kWh | 终端能源 MJ |  |
| `calc_rule_5` | 过程质量平衡 | 按湿基和干物质口径衡算谷物、润麦水、留存配料、输出、废物、实测排放和库存变化；发布前调查不明差异。 | 全部过程输入、输出、水分和库存变化 | 平衡闭合及不明差异 | `eu-pef-method-2021` |
| `calc_rule_6` | 分配 | 对经衡算的联合清单按第 7 节顺序层级处理，保留未分配数量和系数供审核。 | 联合清单；共产品数量；因果关系或经济数据 | 每参考流的分配清单 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_req_1` | 代表性 | 覆盖所声明技术、地域、面粉等级、谷物组合和运行季节；季节性采购或运行对结果有实质影响时至少覆盖 12 个月，否则说明较短代表生产期的理由。 | 生产计划、产品组合、供应商和仪表覆盖 |
| `quality_req_2` | 计量 | 使用经校准的质量、水分、加料和能源仪器；分别标识估算与共享仪表分配。 | 校准证明、实验室方法、账单、分配表 |
| `quality_req_3` | 质量平衡 | 对每个过程及全厂按湿基和干物质闭合平衡；说明库存变化、返工、蒸发和所有物质性残差。 | 带未闭合差异审查的签署衡算 |
| `quality_req_4` | 产品合规 | 记录适用食品规格。对 CXS 152 范围内产品，核验已声明要求，包括水分质量分数不超过 15.5%；不得将此限值自动用于该范围外产品。 | 放行证明和引用规格 |
| `quality_req_5` | 来源关联 | 发布前把产品、能源、包装、共产品、废物和基本流解析到语义正确的数据集；不得以相似但错误的 UUID 代替，并记录每项剩余缺口。 | UUID 审查记录和未解析流清单 |
| `quality_req_6` | 不确定性 | 出粉率和能源范围仅作筛选；以场址观测替换，并披露范围语境、样本量、变异和离群值。 | 原始数据摘要和不确定性声明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 要求恰好一个 1 kg 湿基成品面粉参考输出，使用产品流 `2e07a69d-fe87-4f0f-9d12-b50ecdb9d8b4`、Mass `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 和 kg。 |  |
| `validation_rule_2` | product_identity | 要求第 3 节全部参考流限定信息，包括小麦/混合麦组成、面粉等级及出粉率口径、水分口径、处理或添加、包装状态、地域和适用规格。 | `codex-cxs-152-2023` |
| `validation_rule_3` | process_completeness | 要求第 6 节四个过程 ID 全部存在，并对任何不适用或外包操作给出理由。 | `us-epa-ap42-wheat-milling-2003` |
| `validation_rule_4` | mass_and_moisture_balance | 要求湿基和干物质平衡闭合；不明差异超过报告磨厂已记录的计量不确定度时必须调查。 | `eu-pef-method-2021` |
| `validation_rule_5` | co_products_and_allocation | 要求记录每种可销售磨粉组分、多功能性处理层级、分配系数，并在分配选择重要时披露敏感性。 | `eu-pef-method-2021` |
| `validation_rule_6` | emissions_and_waste | 禁止把捕集粉尘同时作为废物和空气排放重复计算；颗粒物基本流必须有空气环境舱室和粒径定义。 | `us-epa-ap42-wheat-milling-2003` |
| `validation_rule_7` | source_and_uuid_integrity | 拒绝搜索摘要、虚构标识符、固定版本的 UUID 替代或语义不匹配流；非参考流未解析时须保持显式状态，直到取得经核验链接。 |  |
| `validation_rule_8` | codex_scope | 产品声称符合 CXS 152 时，必须证明产品属于该标准范围，并核验适用的组成、卫生、包装、标签和水分要求；否则不得作该声明。 | `codex-cxs-152-2023` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 小麦粉或混合麦粉生产的场址特定磨厂门前景数据集 |
| downstream_use | 当声明面粉符合使用者所需规格时，作为食品、饲料、淀粉、配料或其他产品系统的背景输入 |
| allowed_use | 核查地域、技术、谷物组合、面粉等级、分配、包装和时间代表性后，用于比较性或非比较性 LCA |
| excluded_use | 未经调整直接代表硬粒小麦粗粒粉、其他谷物面粉、分离淀粉或面筋、预制面团、烘焙制品或不同面粉等级 |
| required_metadata | 工厂地域；参考期；技术；小麦/黑麦比例；物种或谷物类别；面粉等级和出粉率口径；水分；添加、强化、漂白或处理；包装 BOM 或散装状态；过程覆盖；上游数据集选择；共产品和分配；适用食品规格 |
| required_quality_disclosure | 一手数据占比；仪表和批次覆盖；质量平衡闭合；不确定性；筛选范围使用；分配敏感性；未解析数据集链接；偏离本 PCR 的情况 |
| update_trigger | 谷物组合、面粉等级、出粉率、过程技术、能源供应、产品配方、包装、分配、法规或规格发生实质变化，或数据超出所声明代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-152-2023` | standard | Codex Alimentarius, CXS 152-1985 Standard for Wheat Flour, amended 2023, https://www.fao.org/input/download/standards/50/CXS_152e.pdf | 普通和密穗小麦粉的产品范围、定义、水分、配料、卫生、包装和标签控制；仅在该标准范围内适用 |
| `us-epa-ap42-wheat-milling-2003` | official_guidance | US EPA, AP-42 Section 9.9.1 Grain Elevators and Processes, wheat flour milling section, final 2003, https://www.epa.gov/sites/default/files/2020-10/documents/c9s0909-1.pdf | 磨厂过程分解、清理和润麦操作、研磨与分级、物料处理和颗粒物源覆盖 |
| `epd-pcr-grain-mill-products-2013-04` | standard | EPD International, PCR 2013:04 Grain mill products, version 3.0.5, https://www.environdec.com/pcr-library/pcr2013-04 | UN CPC 2311 类别和 LCA 方法语境；项目页面声明该 PCR 于 2026-05-30 失效，因此不作为当前有效的定量权威 |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 系统边界完整性、上游关联数据集、数据质量和多功能性处理层级 |
| `usda-ars-soft-wheat-milling-methods` | official_guidance | USDA Agricultural Research Service, Soft Wheat Quality Laboratory Materials and Methods, https://www.ars.usda.gov/midwest-area/wooster-oh/corn-soybean-and-wheat-quality-research/docs/soft-wheat-quality-laboratory-materials-and-methods/ | 批次水分记录、润麦方法、磨粉流计量和面粉产率计算协议 |
| `asb-extraction-rate` | handbook | American Society of Baking, Extraction Rate, https://asbe.org/article/extraction-rate/?topic=analytical-methods | 高效常规精制面粉的出粉率定义和 72-76% 筛选语境 |
| `odunfa-joel-flour-milling-energy-2022` | literature | Odunfa M. K. and Joel O. T., Energy audit and conservation opportunities in flour milling industry in Nigeria, Global Journal of Engineering and Technology Advances 13(1), 2022, DOI 10.30574/gjeta.2022.13.1.0120 | 报告的 187.49-280.37 MJ/t 研磨阶段能源强度范围，仅用于语境性 QA 筛选 |
