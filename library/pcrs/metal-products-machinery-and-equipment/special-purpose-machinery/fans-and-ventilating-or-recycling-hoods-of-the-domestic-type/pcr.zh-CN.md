---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 家用风扇及通风罩或循环排气罩

## 1. 范围与适用性

本规则用于编制一台完整家用风扇、家用通风罩或循环排气罩在工厂门口的前景数据包。声明的配置可以是独立家用风扇、内置风机的排风罩、循环式罩体，或由外部空气处理机组送风的罩体。应说明风机电机是内置、作为独立模块供应，还是不存在。芬兰吸油烟机 EPD 明确将其产品归入 CPC 44815，并记录采购零件后的装配；住宅通风研究区分局部风扇、带风机的厨房罩体与循环模式（`swegon-casa-hood-epd-2022`；`eu-residential-ventilation-2009`）。EPD 的场址和产品假设仅为案例证据，不是通用数量。

边界涵盖可归属的上游材料和采购部件供应、进厂运输、实际发生的现场制造、总装、功能测试及包装，直至可销售产品放行。安装、使用电力、使用期滤材更换、出厂后的配送及报废处理不属于本工厂门口数据集；下游模型可另行增加。非家用独立通风设备以及单独销售的风扇或罩体零件属于不同产品边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.fans-and-ventilating-or-recycling-hoods-of-the-domestic-type |
| classification_refs | CPC 3.0: 44815；仅作分类识别 |
| covered_products | 完整家用风扇；家用通风罩；家用循环排气罩 |
| excluded_products | 非家用风扇；单独销售的风扇或罩体零件；已安装通风服务；使用阶段电力 |
| representative_product | 声明型号和配置的一台验收家用风扇或罩体 |
| production_route | 采购部件总装；现场钢板加工或聚丙烯注塑为条件性路线 |
| market_state | 工厂门口的完整可销售机器；运输包装单独记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由完整机器提供所声明的家用送风、通风或循环功能。 |
| How much | 声明型号和配置的一台验收成品机器。 |
| How well | 声明额定风量、电机有无及额定参数、过滤或排风模式和验收测试标准。 |
| How long or cycle | 工厂门口的一台可销售产品；使用寿命和使用安排由下游另行声明。 |
| reference_flow_link | finished_domestic_fan_or_hood |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 家用风扇及通风罩或循环排气罩 `d241cf7b-4dd0-49d5-89d1-2cf1905189ce` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品类别；型号和配置；内置或外置电机；排风或循环路线；额定风量；验收净质量 M；工厂和报告年份 |

编制前景数据包时，所有必需限定信息应明确写入数据集元数据、产品说明或过程备注。M 针对同一验收配置测量，并非类别固定重量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_factory_gate | 前景系统 | 纳入可归属的上游部件及进厂运输、实际发生的现场制造、装配、测试和包装，直至产品在工厂门口验收放行。排除后续使用及报废。 | `swegon-casa-hood-epd-2022` |
| boundary_configuration | 产品配置 | 披露家用风扇或罩体、内置风机状态、排风或循环路线，以及金属或聚合物部件是否在现场制造。 | `swegon-casa-hood-epd-2022`, `eu-residential-ventilation-2009` |
| boundary_internal_transfer | 同类采购投入 | 采购的完整风扇或罩体应作为投入并采用独立的上游数据集；不得在本厂前景系统内递归重复计算其制造。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料与部件以实际供应状态进入生产场址；披露哪些子组件由外部采购。 |
| starting_condition_role | 部件与材料核算的工厂门口前景起点。 |
| product_classification_scope | 完整家用风扇以及家用通风罩或循环排气罩；不含单独销售的零件。 |
| recursive_input_rule | 若投入同类别的完整机器，使用其独立识别的上游数据集，避免对自身重复套用本 PCR。 |
| upstream_dataset_requirement | 上游材料、部件及进厂运输数据集须匹配实际供应状态，并披露缺口。 |
| disclosure | 列明型号、配置、内置电机、排风或循环模式、制造路线及所含包装。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| component_fabrication | 现场部件制造 | conditional | 报告场址切割或成形钢板，或注塑聚丙烯时纳入。 | 前景制造及分类废料 | 每台验收成品机器 |
| final_assembly | 总装、测试与包装 | required | 所有家用风扇或罩体成品配置。 | 前景总装与放行 | 每台验收成品机器 |

### 过程：部件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 冷轧非合金钢板（`cold_rolled_steel_sheet`）

仅在工厂为罩体或风扇零件切割、成形冷轧非合金钢板时纳入。记录归属于验收成品机器的钢板净投入；采购的成品壳体则按具体型号物料清单核算。

- 选定流：冷轧非合金钢板
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_fabrication_materials 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`eu-residential-ventilation-2009`

###### 注塑用聚丙烯粒料（`polypropylene_granules`）

仅在工厂注塑聚丙烯壳体或叶轮时纳入。前景记录应说明树脂牌号及再生料含量；采购的注塑件按其具体产品流核算。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_fabrication_materials 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：`eu-residential-ventilation-2009`

#### 输出

##### 废物流

###### 钢板边角料（`steel_offcuts`）

现场切割钢板时纳入分类收集的钢边角料。扣除有记录的厂内回用后，记录转出工厂的废物。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_fabrication_waste 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste`
- 来源：`eu-residential-ventilation-2009`

###### 聚丙烯注塑废料（`polypropylene_scrap`）

仅在现场注塑时纳入单独称量的聚丙烯不合格品和清机料；扣除有记录且留在过程内部的闭环回用料。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_fabrication_waste 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_waste`
- 来源：`eu-residential-ventilation-2009`

### 过程：总装、测试与包装（`final_assembly`）

#### 输入

##### 产品流

###### 采购电动机（`electric_motor`）

仅在验收配置装有风扇且电机未包含在采购风机模块中时，纳入单独采购的电动机。记录电机类型、额定功率及供应商质量。

- 选定流：家用风扇用电动机
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_purchased_parts 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_parts`
- 来源：`eu-residential-ventilation-2009`

###### 工厂电网电力（`grid_electricity`）

纳入归属于装配、配置、功能测试及包装的计量电力。披露场址电网及共用电表的分配依据。

- 选定流：家电装配所用电网电力
- 流属性/单位：电能 / kWh
- 数量规则：使用 cp_electricity 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`swegon-casa-hood-epd-2022`

###### 瓦楞运输纸箱（`corrugated_box`）

验收机器采用瓦楞纸箱出货时纳入。记录实际纸箱质量，并按有记录的周转次数核算重复使用的运输包装。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：使用 cp_packaging 采集每台验收成品机器的归属数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`swegon-casa-hood-epd-2022`

#### 输出

##### 产品流

###### 验收的家用风扇或通风循环罩成品（`finished_domestic_fan_or_hood`）

记录工厂门口同一声明配置的一台完整、已验收且可销售的机器。运输包装不计入产品净质量 M。

- 选定流：家用风扇及通风罩或循环排气罩 `d241cf7b-4dd0-49d5-89d1-2cf1905189ce`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`swegon-casa-hood-epd-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | 工厂共用过程 | 优先使用独立电表、领料单、工单和产品专属人工或设备工时。仅对无法避免的共用电力与热量按同一场址和期间记录的作业工时分配，并披露分配依据。 | `swegon-casa-hood-epd-2022` |
| allocation_scrap | 制造废料 | 有记录的内部回用或返工留在过程内。向外转移的边角料作为废物记录；任何经济抵扣另行披露，不得对同一质量重复计入抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | final_assembly | 验收参考产品 | 称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每个型号或配置抽样及每次变更 | 报告年份 | 报告工厂 | 每台验收净质量 | 校准证书；签字验收记录 |
| cp_fabrication_materials | component_fabrication | 钢板与聚丙烯投入 | 领料和退料台账 | 材料牌号；领料质量；退料质量；型号；验收数量 | 核对称量的领料、退料及物料清单与验收产量。 | kg | 每个生产批次 | 报告年份 | 现场制造 | 归属净材料质量 / 验收机器数量 | 采购及批次领料记录 |
| cp_fabrication_waste | component_fabrication | 分类钢与聚丙烯废料 | 废物转移台账 | 材料身份；废料总质量；内部返回质量；验收数量 | 分别称量废物流，并核对有记录的内部回用与外部转移。 | kg | 每个生产批次 | 报告年份 | 现场制造 | 外转废物质量 / 验收机器数量 | 秤单及转移记录 |
| cp_purchased_parts | final_assembly | 采购电机 | 供应商及领用记录 | 电机规格；供应商质量；领用数量；验收数量 | 将电机规格及供应商质量与验收配置和领用记录核对。 | kg | 每次型号或供应商变更 | 报告年份 | 报告工厂 | 归属电机质量 / 验收机器数量 | 供应商物料清单；收货记录 |
| cp_electricity | final_assembly | 电网电力 | 电表记录 | 电表期初；电表期末；测试周期；验收数量；分配动因 | 读取总装、测试和包装所用经校准的电表，并核对任何共用电表的分配。 | kWh | 每月及每个生产批次 | 报告年份 | 报告工厂 | 归属电量 / 验收机器数量 | 电表校准；工单工时 |
| cp_packaging | final_assembly | 瓦楞纸箱 | 包装物料清单 | 纸箱规格；纸箱质量；领用数量；周转次数；验收数量 | 称量每个已验收产品领用的纸箱，或使用可追溯的供应商质量记录。 | kg | 每次包装规格变更 | 报告年份 | 报告工厂 | 归属瓦楞纸箱质量 / 验收机器数量 | 包装记录；供应商质量证明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_unit_average | 除 finished_domestic_fan_or_hood 外的所有清单行 | 每台数量 = 归属批次数量 / 同一配置的验收机器数量；相除前扣除有记录的内部退料。 | 归属批次数量；验收机器数量 | 每台交换数量 | `swegon-casa-hood-epd-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_bom | 所有采购材料和部件 | 核对完整的型号专属物料清单，包括存在时的电机、电子件、滤材、玻璃与包装；数据集放行前，每项遗漏交换均应补充为独立的具体流。 | 批准的物料清单；收货记录 |
| dq_route | 条件性制造和电机行 | 证明实际场址路线与验收配置；对未纳入的条件性行记录“不适用”的依据，不得默认其为零。 | 工艺路线单；产品规格 |
| dq_mass | 参考产品 | 对同一验收配置核实 M，并排除运输包装。 | 校准称重和验收记录 |
| dq_period | 所有前景数量 | 使用同一报告期间与场址；披露供应商或电表缺口以及分配动因。 | 有日期的台账；电表日志；供应商声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | 参考产品 | 缺少已确认的 CPC 44815 成品身份、一台验收配置、以 kg 计量的净质量 M，或 M kg 的产出行时，应拒绝数据集。 | `swegon-casa-hood-epd-2022` |
| validate_inventory | 前景清单 | 依据型号物料清单和场址路线检查每项应纳入的材料、能源、包装及废物流；每一行仅保留一个原子交换。 | `swegon-casa-hood-epd-2022`, `eu-residential-ventilation-2009` |
| validate_balance | 制造与放行 | 核对材料领用、内部退料、成品质量与外转废料；解释差额，不强制采用固定成品率。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完整家用风扇或罩体的工厂门口前景数据包。 |
| downstream_use | 作为产品专属下游过程或生命周期模型的 secondary_dataset；background_dataset。 |
| allowed_use | 仅用于声明的型号、配置、工厂路线、地区与报告年份；其他使用应披露代表性限制。 |
| excluded_use | 不得由本工厂门口清单推断使用期性能、寿命影响或报废影响。 |
| required_metadata | 产品类别；型号；验收净质量 M；电机配置；风量；排风或循环路线；制造路线；场址；年份；所含包装。 |
| required_quality_disclosure | 物料清单完整性；电表与称重证据；分配动因；未解决的流 UUID；上游数据集缺口。 |
| update_trigger | 型号、电机、材料、供应商、场址、路线、能源结构或包装发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `swegon-casa-hood-epd-2022` | 发布数据集（`dataset`） | EPD Swegon CASA cooker hoods (2022), https://ecowise.lv/wp-content/uploads/2023/09/EPD.pdf | 罩体成品身份、物料清单、采购零件总装、工厂投入、包装及分配。 |
| `eu-residential-ventilation-2009` | 官方指导（`official_guidance`） | Study on residential ventilation - Final report (2009), https://circabc.europa.eu/sd/a/773b634f-9e34-444c-9406-3693982e00b3/V%20_%20Ventilation%20_%20final%20report.pdf | 住宅风扇与带风机罩体边界；风扇材料类别。风扇案例并非罩体经验数量范围。 |
