---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.drafting-tables-and-machines-and-other-drawing-marking-out-or-mathematical-calculating-817a935c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 绘图台和绘图机，以及其他绘图、划线或数学计算仪器

## 1. 范围与适用性

本 PCR 适用于绘图台、绘图机以及专用绘图、划线或数学计算仪器成品的工厂大门前景数据包，具体产品须符合下述类别识别。本 PCR 涵盖申报场址内实际发生的金属制造、表面前处理与涂装、装配与测试以及发运包装组合。每个数据集均应识别具体产品变型，并且只记录实际发生的条件性路线。

精密天平、手持长度测量仪器、单独供应的零部件和附件、通用家具以及通用电子计算机或计算器不在范围内。使用与维护、工厂大门后的分销及寿命终止阶段不在本 PCR 范围内。类别边界遵循 CPC 正式结构（`un-cpc-3-0-structure-2025`）；制造阶段覆盖参考了金属制造和表面处理的正式说明（`us-epa-municipal-pretreatment-1993`、`eu-jrc-surface-treatment-metals-plastics-2006`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.drafting-tables-and-machines-and-other-drawing-marking-out-or-mathematical-calculating-817a935c |
| classification_refs | CPC 3.0：48232，精确范围背景 |
| covered_products | 绘图台和绘图机成品，以及专用绘图、划线或数学计算仪器成品 |
| excluded_products | 精密天平；手持长度测量仪器；单独供应的零部件和附件；通用家具；通用电子计算设备 |
| representative_product | 申报设施生产的具体成品变型 |
| production_route | 零部件制造、可选表面前处理与粉末涂装、最终装配与测试以及包装的路线特定组合 |
| market_state | 工厂大门处可发运的合格成品；参考质量不含发运包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供能够实现申报绘图、制图、划线或数学计算功能的成品 |
| How much | 1 kg 合格成品净质量 |
| How well | 符合制造商针对产品变型申报的尺寸、精度或对准要求、稳定性要求和放行检验要求 |
| How long or cycle | 一次工厂大门生产输出；使用寿命另行申报，不属于参考数量 |
| reference_flow_link | 参考数量等于 `as_finished_product` 的净质量；发运包装单独列入清单且不计入该净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 绘图桌和绘图机，以及其他绘图、标注或数学计算工具 `c1e54809-bd7b-4f5b-bc54-8ef236a2889b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品系列和型号；绘图台、绘图机、绘图仪器、划线仪器或数学计算仪器；产品净质量；主要材料和外购零部件物料清单；场内工序；表面处理路线；包装配置；生产地理范围；报告期；放行测试准则 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_net_product_mass` | 参考产品和 `as_finished_product` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用经校准称量或经核验的零部件质量汇总确定净质量；排除瓦楞纸箱、薄膜、托盘、说明书和其他发运包装。 |
| `mu_material_mass` | 材料和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测质量或转换为 kg 的库存质量；当原料形态、合金或组成和含水率对识别有实质影响时保留这些限定信息。 |
| `mu_electricity_energy` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 按 1 kWh = 3.6 MJ 将电表电量从 kWh 转换为 MJ，并披露原始电表单位、电压等级、电网地理范围和共用电表分配。 |
| `mu_gas_volume` | 工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 对计量或供应商报告的气体体积说明参考温度和压力；不得将氧气和保护气合并为一个数量。 |
| `mu_water_mass` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量；按体积计量时，记录转换为 kg 所用的密度和参考条件。 |

## 5. 系统边界

前景边界始于外购材料坯料、可直接装配的零部件、处理化学品、公用工程和包装进入报告设施之时，止于合格产品通过放行测试并完成发运包装之时。所有外购投入的上游生产与交付均应连接供应商特定或具有代表性的上游数据集；场内制造、表面处理、装配、测试、不合格品和废物管理转移属于前景记录。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 设施接收处的外购坯料和可直接装配零部件，并申报材料牌号、零部件状态、供应商和交付质量 |
| starting_condition_role | 上游与前景的交接点 |
| product_classification_scope | 语义上属于 CPC 3.0 子类 48232 边界的成品，不受外部分类目录路径支配 |
| recursive_input_rule | 已满足同一成品类别的外购投入应作为具有独立数据集的上游产品投入记录，不在前景模型内递归拆分 |
| upstream_dataset_requirement | 每项外购材料、零部件、化学品、公用工程和包装流均连接地理和技术具有代表性的上游数据集，并披露代理数据 |
| disclosure | 申报纳入与排除的工艺路线、产品变型、净质量方法、物料清单、表面处理化学品、放行测试、废物去向、地理范围、报告期、分配和代理数据集 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 所有数据集 | 纳入从接收至完成包装的工厂大门输出；除非另一个研究扩展边界，否则排除下游分销、使用、维护和寿命终止。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `sb_route_specificity` | 条件性过程和清单行 | 仅当申报产品变型和场址记录表明相应路线实际发生时，才纳入条件性过程或交换；不得把互斥路线同时填作默认值。 | `us-epa-municipal-pretreatment-1993`; `eu-jrc-surface-treatment-metals-plastics-2006` |
| `sb_upstream_links` | 外购投入 | 供应商生产保留在前景大门之外，但每项外购投入均应连接上游数据集，并披露地理、技术和产品状态。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `metal_component_fabrication` | 金属零部件切割、成形、机械加工和连接 | `conditional` | 当钢或铝坯料在场内切割、成形、机械加工或连接时纳入；所有金属零部件均以可直接装配状态进厂时省略 | 前景零部件制造 | 计入合格输出的金属零部件净质量（kg） |
| `surface_preparation_and_powder_coating` | 金属表面前处理和粉末涂装 | `conditional` | 场内进行水基清洗、化学前处理或粉末涂装时纳入 | 前景表面处理 | 同时报告处理面积（m2）和涂装零件输出质量（kg） |
| `final_assembly_and_testing` | 最终装配、调整和放行测试 | `required` | 对申报成品始终纳入 | 前景产品装配和质量放行 | 发运包装前的合格成品质量（kg） |
| `packaging` | 发运包装 | `required` | 始终纳入；零用量须有可重复使用或无包装发运的记录证明 | 前景包装 | 完成发运包装的合格成品质量（kg） |

### 过程：金属零部件切割、成形、机械加工和连接（`metal_component_fabrication`）

#### 输入

##### 产品流

###### 冷轧碳钢板（`mf_cold_rolled_steel_sheet`）

当申报物料清单包含冷轧碳钢板时，记录进入场内切割、成形、机械加工或连接的该项投入。由于板材候选项存在中英文识别冲突，其 Tiangong UUID 仍未解决。

- 选定流：冷轧碳钢板
- 流属性/单位：Mass / kg
- 数量规则：归属于合格生产的实测收料或领料质量，加上相应实测钢废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：

###### 铝板材（`mf_aluminium_sheet`）

仅对使用铝板材的产品变型记录进入场内制造的铝板材。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：归属于合格生产的实测收料或领料质量，加上相应实测铝废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：

###### 制造用电力（`mf_electricity`）

记录切割、成形、机械加工、焊接、抽排和直接相关制造设备消耗的外购电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或依据制造设备和生产批次形成文件的设施总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

###### 热切割或焊接用工业氧气（`mf_industrial_oxygen`）

仅在采用场内热切割或耗氧焊接路线时记录工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在申报参考条件下，归属于纳入路线的计量体积或供应商钢瓶领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_gases`
- 来源：

###### 二氧化碳保护气（`mf_carbon_dioxide_shielding`）

仅在纳入的焊接路线将二氧化碳产品用作保护气时记录。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：归属于纳入焊接路线的钢瓶质量领用量，或供应商交付量减期末库存量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_gases`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`mf_post_industrial_steel_scrap`）

记录离开制造过程、送往回收或处理的分流碳钢边角料、切屑和不合格金属件。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量的出厂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_scrap`
- 来源：

###### 铝废料（`mf_aluminium_scrap`）

记录离开制造过程、送往回收或处理的分流铝边角料、切屑和不合格金属件。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向计量的出厂质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_scrap`
- 来源：

##### 基本流

### 过程：金属表面前处理和粉末涂装（`surface_preparation_and_powder_coating`）

#### 输入

##### 产品流

###### 表面前处理和漂洗用工艺用水（`sf_process_water`）

记录纳入的表面处理路线中用于水基清洗、槽液配制和漂洗并跨越过程边界的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应至纳入表面处理线的计量用水或批次记录用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_inputs`
- 来源：

###### 碱性清洗用氢氧化钠（`sf_sodium_hydroxide`）

仅在申报的水基碱性清洗或槽液控制配方中使用氢氧化钠产品时记录；溶液浓度另行报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据归属于纳入生产的采购、补加和浓度记录计算氢氧化钠有效质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集值计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_inputs`
- 来源：

###### 粉末涂层（`sf_powder_coating`）

记录纳入涂装线消耗的粉末涂层，并申报树脂化学组成、颜色和回收粉末做法。

- 选定流：粉末涂层 `0c581697-0eed-4b86-a070-b94966eb7344`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加收料减期末库存和单独计量的可回收退料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集值计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_inputs`
- 来源：

###### 表面处理用电力（`sf_electricity`）

记录清洗线泵、通风、粉末施涂、固化和直接相关处理设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或依据表面处理线形成文件的设施总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面处理废水（`sf_surface_treatment_wastewater`）

记录清洗、漂洗和槽液维护产生的水性废物流在场内处理前或处理后的转移，并申报转移点和化学组成。尚未确认精确 Tiangong UUID。

- 选定流：表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：归属于纳入表面处理生产的实测排放或转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：

###### 金属氢氧化物处理污泥（`sf_metal_hydroxide_sludge`）

仅在场内处理表面处理废水产生脱水金属氢氧化物污泥时记录，并申报干固体分数和危险废物分类。尚未确认精确 Tiangong UUID。

- 选定流：金属氢氧化物处理污泥
- 流属性/单位：Mass / kg
- 数量规则：转移出厂的实测湿质量，并附实测或实验室测定的干固体分数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：

###### 粉末涂装废弃物（`sf_powder_coating_waste`）

将无法回收的过喷粉、喷房清理残留物和不合格粉末涂层作为一项分流粉末涂装废弃物流记录。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass / kg
- 数量规则：归属于纳入表面处理生产的实测出厂废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_outputs`
- 来源：

##### 基本流

### 过程：最终装配、调整和放行测试（`final_assembly_and_testing`）

#### 输入

##### 产品流

###### 外购 ABS 塑料组件（`as_abs_component`）

仅在申报物料清单包含外购、可直接装配的 ABS 组件时记录。初级形态 ABS 粒料不能替代该组件身份，尚未确认精确 Tiangong UUID。

- 选定流：外购 ABS 塑料组件
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品批次的收料组件质量，扣除另行记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：

###### 层压中密度纤维板工作台面（`as_laminated_mdf_worktop`）

仅对包含该部件的绘图台变型记录外购层压中密度纤维板工作台面。尚未确认精确 Tiangong UUID。

- 选定流：层压中密度纤维板工作台面
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品批次的收料组件质量，扣除另行记录的退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：

###### 装配与测试用电力（`as_electricity`）

记录装配工具、调整设备、放行测试设备、分配至生产线的照明以及直接相关抽排所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或依据装配与测试形成文件的设施总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品（`as_finished_product`）

只记录通过申报放行检验的产品；不合格品保留在返工流程中，废弃时按其具体材料废物流列入清单。

- 选定流：绘图桌和绘图机，以及其他绘图、标注或数学计算工具 `c1e54809-bd7b-4f5b-bc54-8ef236a2889b`
- 流属性/单位：Mass / kg
- 数量规则：合格放行产品的经校准净质量，不含发运包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product`
- 来源：

##### 废物流

##### 基本流

### 过程：发运包装（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`pk_corrugated_board_boxes`）

记录在工厂大门处随成品交付的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：实测纸箱单位质量乘以合格输出批次消耗的纸箱数量，并扣除退回的未使用纸箱
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集值计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：

###### 低密度聚乙烯薄膜（`pk_ldpe_film`）

记录随成品交付、用作包裹或保护包装的 PE-LD 薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：归属于合格输出批次的实测卷材领用量，扣除退回的未使用薄膜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：

###### 包装用电力（`pk_electricity`）

记录包裹、封装、捆扎、贴标和直接相关包装线设备消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或依据发运包装形成文件的设施总表分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivision_first` | 共用过程和计量表 | 在物理上可分时，首先按生产线、设备、批次或实测运行时间细分。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `al_shared_burdens` | 剩余共用电力、用水、处理和包装负荷 | 细分后，依据机器时间、计量吞吐量、处理面积或包装件数等有文件记录的因果驱动因素分配剩余共用负荷；仅在没有更佳因果驱动因素时使用质量，并披露敏感性。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `al_scrap_and_rework` | 废料、不合格品和返工 | 将返工负荷归回产生返工的生产批次。废料按工厂大门处实测废物转移量记录；不得在本归因型前景清单内扣除避免初级材料的抵扣。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `metal_component_fabrication` | 钢和铝坯料投入 | 收料、库存领用和退料记录 | 材料身份；牌号；坯料形态；批次；期初质量；收料；退料；期末质量 | 将经校准秤记录与库存变动和物料清单核对 | kg | 每批次，按月汇总 | 有代表性的连续 12 个月或完整的较短生产周期 | 服务于该产品的所有场内制造线 | 净领料质量除以合格产品净质量 | 秤校准；材料证书；库存核对 |
| `cp_process_energy` | 所有纳入过程 | 电力 | 分表或设施能源记录 | 电表编号；期初和期末读数；原始单位；过程运行时间；分配驱动因素 | 读取分表；否则根据有文件记录的运行数据分配经核对的设施总表 | kWh 和 MJ | 每月或每个生产周期 | 与生产分母相同的期间 | 所有纳入设备和直接相关服务 | 转换 kWh 为 MJ，分配后除以合格产品净质量 | 电表校准或发票核对；分配工作表 |
| `cp_fabrication_gases` | `metal_component_fabrication` | 工业氧气和二氧化碳保护气 | 气表、钢瓶和采购记录 | 气体身份；纯度；期初库存；收料；期末库存；退瓶；参考温度和压力 | 将计量或钢瓶领用量与供应商记录核对 | m3 或 kg | 每个钢瓶或每月抄表 | 与纳入的切割或焊接路线相同期间 | 所有纳入的用气设备 | 归属于产品的净消耗除以合格产品净质量 | 供应商规格；钢瓶日志；仪表检查 |
| `cp_fabrication_scrap` | `metal_component_fabrication` | 分流钢废料和铝废料 | 废物地磅单和内部废料日志 | 废物身份；合金系列；毛重、皮重和净重；批次；去向 | 称量每项出厂分流，并与材料平衡核对 | kg | 每次转移 | 与制造投入相同期间 | 所有纳入的制造线 | 按材料求和的净质量除以合格产品净质量 | 地磅单；废物转移记录；材料平衡核对 |
| `cp_finishing_inputs` | `surface_preparation_and_powder_coating` | 水、氢氧化钠和粉末涂层 | 仪表、采购、槽液和库存记录 | 材料身份；浓度；期初库存；收料；期末库存；用水读数；回收粉末 | 核对仪表和库存；根据溶液质量与实测浓度计算有效化学品质量 | kg | 每批次和每月 | 与纳入表面处理输出相同期间 | 所有纳入的场内表面处理线 | 净投入或计算有效质量除以合格产品净质量 | 仪表检查；浓度测试；采购和库存核对 |
| `cp_finishing_outputs` | `surface_preparation_and_powder_coating` | 废水、金属氢氧化物污泥和粉末涂装废弃物 | 排放表、处理日志、实验室结果和废物单据 | 流身份；转移点；湿质量；干固体分数；化学组成；危险状态；去向 | 计量废水并称量每项出厂废物；保留有代表性的分析结果 | kg | 每次排放或转移 | 与纳入表面处理投入相同期间 | 所有纳入的表面处理和处理设备 | 各原子流实测质量求和后除以合格产品净质量 | 实验室报告；仪表记录；废物转移文件；水平衡 |
| `cp_assembly_materials` | `final_assembly_and_testing` | 外购 ABS 组件和层压 MDF 工作台面 | 物料清单、收料、领料和退料记录 | 零部件身份；组成；供应商；批次；单位质量；领用数量；退料 | 核验单位质量，并将领用数量与合格批次核对 | kg | 每个产品批次 | 有代表性的连续 12 个月或完整的较短生产周期 | 服务于该产品的所有装配线 | 净领用零部件质量除以合格产品净质量 | 经批准物料清单；供应商规格；秤检查 |
| `cp_finished_product` | `final_assembly_and_testing` | 合格成品 | 经校准称量和放行记录 | 型号；序列号或批次；毛质量；包装皮重；净质量；测试结果；不合格或返工状态 | 称量放行输出或核验零部件质量汇总，然后排除发运包装 | kg | 每批次 | 与所有清单分子相同期间 | 纳入数据集的所有产品变型 | 合计合格净质量；将清单归一化至 1 kg | 秤校准；签署的放行记录；质量汇总核对 |
| `cp_packaging_materials` | `packaging` | 瓦楞纸箱和 PE-LD 薄膜 | 包装领用、单位质量、卷材和退料记录 | 包装身份；规格；单位质量；领用数量；卷材期初和期末质量；退料 | 称量代表性单元，并将领用或卷材消耗与已包装批次核对 | kg | 每批次，按月汇总 | 与完成包装的合格输出相同期间 | 服务于该产品的所有发运包装工位 | 净消耗质量除以合格产品净质量 | 包装规格；秤检查；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单行 | 归一化数量 = 归属该行的数量 / 合格成品净质量 | 清单行分子；`as_finished_product` 净质量 | 每 1 kg 参考产品的数量 | |
| `calc_electricity_conversion` | 电力行 | 归一化前，电力（MJ）= 电表电量（kWh）× 3.6 | 经核对的 kWh；过程分配驱动因素；产品净质量 | 每 1 kg 参考产品的 MJ | |
| `calc_active_sodium_hydroxide` | `sf_sodium_hydroxide` | 有效 NaOH 质量 = 溶液质量 × 实测 NaOH 质量分数 | 溶液质量；实验室或供应商浓度 | 每 1 kg 参考产品的有效 NaOH 质量（kg） | |
| `calc_packaging_box_mass` | `pk_corrugated_board_boxes` | 纸箱质量 = 经核验单位质量 × 消耗纸箱数量 - 退回未使用纸箱质量 | 单位质量；领用数量；退料质量 | 每 1 kg 参考产品的纸箱质量（kg） | |
| `calc_material_balance` | 制造和表面处理 | 分材料核对投入与进入产品质量、同材质废料、库存变化和有记录损失，不得合并不同材料或废物流 | 材料特定投入；输出；废料；库存变化 | 材料特定闭合率和差值 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 所有产品和废物行 | 保留原子流身份、产品或废物状态、组成或牌号、供应商、地理范围和 Tiangong UUID 状态；不得无说明地替换为更宽泛的流。 | 供应商规格、UUID 直读身份、物料清单、废物特性 |
| `dq_temporal` | 所有前景记录 | 采用有代表性的连续 12 个月；仅当覆盖完整生产周期且季节性无实质影响时，才允许较短生产周期。 | 带日期的仪表、库存、生产和转移记录 |
| `dq_completeness` | 所有纳入过程 | 核对投入、产品、废料、废水和库存变化记录；解释材料差值及任何省略路线。 | 材料平衡和水平衡；路线检查表；核对工作表 |
| `dq_measurement` | 实测数量 | 使用经校准或核验的仪表和秤，保留原始单位，并记录每次转换和共用仪表分配。 | 校准证书；仪表日志；发票；计算工作簿 |
| `dq_representativeness` | 上游连接 | 匹配地理、技术、产品状态、材料牌号、电网和废物去向；披露每个代理及其预期影响。 | 供应商数据；数据集元数据；代理理由 |
| `dq_range_status` | 所有重要流 | 在两项独立且边界兼容的范围证据通过审查前，只使用前景值而不采用来源支持不足的默认值，并通过材料、用水和能源核对标记异常值。 | 前景记录和未解决范围证据登记表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认 UUID、Mass 属性、kg 单位、精确产品变型限定信息，以及参考数量与归一化 `as_finished_product` 相等。 | `un-cpc-3-0-structure-2025` |
| `val_process_routes` | 过程图和清单 | 确认每个必需过程均存在，每个条件性过程均说明条件是否适用，且未发生路线不带非零交换。 | `us-epa-municipal-pretreatment-1993`; `eu-jrc-surface-treatment-metals-plastics-2006` |
| `val_atomic_inventory` | 所有清单行 | 确认每行仅包含一项物理、化学、废物或能源交换；UUID 为空的行须与 manifest 未解决登记表完全一致。 | |
| `val_mass_and_water_balance` | 制造和表面处理 | 检查分材料质量闭合和表面处理水平衡；在放行前调查并记录差值。 | `us-epa-municipal-pretreatment-1993` |
| `val_energy_and_units` | 电力和气体行 | 确认 kWh 至 MJ 转换、气体参考条件、原始单位保留以及与仪表或供应商记录核对。 | |
| `val_allocation_disclosure` | 共用过程 | 确认已优先尝试细分，并记录每个剩余分配驱动因素、分母和敏感性。 | `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` |
| `val_bilingual_and_uuid` | 发布数据包 | 确认带 UUID 的中文显示采用 Tiangong 精确中文 baseName，并确认产品状态、属性、单位组、地理、技术和 generalComment 审查仍兼容。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从经核验前景数据包派生的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 适用于申报产品变型、路线、地理、技术和报告期范围的归因型过程数据集和生命周期模型 |
| allowed_use | 当使用者匹配必需限定信息，并纳入兼容的上游数据集和废物处理连接时，可用作工厂大门产品数据集 |
| excluded_use | 不得用作使用寿命功能比较，不得用于排除类别，也不得替代产品质量、物料清单、表面处理路线、地理或技术存在实质差异的产品 |
| required_metadata | 规范 PCR id；产品型号和功能；产品净质量；主要材料和外购零部件；纳入过程；表面处理路线；包装；地理；技术；报告期；分配；UUID 和未解决身份；上游连接 |
| required_quality_disclosure | 初级数据占比；仪表和秤核验；时间覆盖；材料、用水和能源核对；分配驱动因素；代理数据集；废物去向；未解决 UUID 和范围证据需求 |
| update_trigger | 产品实质重新设计；主要材料或零部件变化；新增或移除场内工序；涂层化学品变化；供应商或电网变化；废物处理变化；生产搬迁；或前景数据超过申报代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-07） | 产品类别身份和相邻 CPC 子类排除项 |
| `hk-csd-merchandise-trade-july-2007` | `dataset` | 中国香港特别行政区政府统计处，《香港商品贸易统计》，2007 年 7 月，https://www.statistics.gov.hk/pub/B10200032007MM07B0700.pdf（检索于 2026-09-07） | 核验产品类别标题的专业中文术语 |
| `us-epa-municipal-pretreatment-1993` | `official_guidance` | 美国环境保护署，《Guides to Pollution Prevention: Municipal Pretreatment Programs》，EPA/625/R-93/006，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004M80.TXT（检索于 2026-09-07） | 金属制造、清洗、涂装、机械加工和废水过程分解 |
| `eu-jrc-surface-treatment-metals-plastics-2006` | `official_guidance` | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics BREF》，2006 年 8 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索于 2026-09-07） | 条件性水基化学和电解表面处理边界 |
| `eu-jrc-ilcd-handbook-lca-detailed-guidance-2010` | `official_guidance` | 欧盟委员会联合研究中心，《International Reference Life Cycle Data System (ILCD) Handbook — General guide for Life Cycle Assessment — Detailed guidance》，EUR 24708 EN，2010 年，https://publications.jrc.ec.europa.eu/repository/handle/JRC48157（检索于 2026-09-07） | 系统边界、清单、报告、分配和审查框架 |
