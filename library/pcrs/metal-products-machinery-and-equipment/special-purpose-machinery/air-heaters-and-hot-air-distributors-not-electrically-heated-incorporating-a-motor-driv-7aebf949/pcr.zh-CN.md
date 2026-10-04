---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或钢制非电热空气加热器及电机驱动热空气分配器制造

## 1. 范围与适用性

本 PCR 覆盖内置电机驱动风扇/鼓风机且不采用电阻加热的完整铁或钢制空气加热器及热空气分配器的工厂制造。电动风机、点火及控制不使热源成为电加热。区分直接燃烧、经换热器间接燃烧、外供水/蒸汽供热及外部加热空气分配。分配器须实际输送热空气，不是普通通风风机。排除电热器、热泵、被动中央供暖散热器、产热水/蒸汽锅炉、独立风机、单独备件及已安装供暖系统。制造产出是设备，不是交付热量单位。来源确立构型，实际型号与供应记录确立实施路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.air-heaters-and-hot-air-distributors-not-electrically-heated-incorporating-a-motor-driv-7aebf949 |
| classification_refs | CPC 3.0 44824 |
| covered_products | 声明实际配置的铁/钢制非电热风机空气加热器及热空气分配器 |
| excluded_products | 电热器；热泵；被动散热器；锅炉；普通风机；备件；安装系统 |
| representative_product | 一台已验收完整声明加热器或热空气分配器，不是通用燃烧平均机型 |
| production_route | 实际金属制造及表面处理或购入总成，部件装配、配置特定工厂检验及包装 |
| market_state | 出厂验收成品设备，排除安装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一台完整声明空气加热或外供热空气分配设备用于下游建模 |
| How much | 一台验收成品设备，以实测净质量 M 千克表示 |
| How well | 实际配置声明的热/风量、安全及验收要求，不规定效率或额定热量 |
| How long or cycle | 一个工厂生产/验收周期，不代表寿命供热服务 |
| reference_flow_link | `final_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器 `bab3c9c3-6018-402d-835f-c56ee7db029c` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号及配置；铁/钢壳体及换热材料牌号；直燃、间接燃烧、水/蒸汽盘管或外供热空气分配技术；实际燃料或传热介质；风扇/鼓风机及电机规格；燃烧器及换热器有无；声明风量及测试条件；实际加热器额定热输出，外供热空气且无热源的分配器为 not_applicable；控制及安全装置；工厂验收程序；涂层；出厂状态；场址及报告期；实测净质量 M；供应方地域/年份 |

前景数据包须声明必需限定信息。实际配置分别记录；仅在披露产量权重与技术分层时可作质量加权产品族平均。同等设备质量不代表同等供热服务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| component_mass | 金属/部件核算 | Mass | kg | 分别记录实际复合钢材、铝、购入部件及保留涂层质量。钢制产品总质量不是元素 Fe 质量，元素平衡须化验。M 排除包装。 |
| energy_units | 电力及燃料 | Energy | MJ | 区分电力 kWh 与燃料低位热值 MJ，1 kWh = 3.6 MJ。燃料体积换算须实际温度/压力、密度及热值基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收出口实际购入板/管、加工壳体/换热器或成品部件，含声明上游生产 |
| starting_condition_role | foreground_starting_state |
| product_classification_scope | CPC 3.0 44824 |
| recursive_input_rule | 购入同类设备用于装配/返工时为有来源的上游产品，不自身递归或重复供应制造。 |
| upstream_dataset_requirement | 关联匹配供应材料/部件制造、电力供应、燃料供应、入厂运输及废物处理各一次，披露地域/年份及起始状态。 |
| disclosure | 实际路线、委外、供应工序、安装部件范围、检验类型、热源、污染物去向及排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_factory | all processes | 纳入出厂前实际制造、表面处理、装配、检验/复试、返工、包装、公用工程及污染控制。购入成品部件保留上游材料及制造负荷，抵消内部中间转移。 | `reznor-udx-specification` |
| boundary_use | factory_acceptance | 本处仅计工厂测试能耗/排放。安装、现场调试、寿命燃料/风机电力、维护更换及报废排除，须独立下游情景。除实际测试供热外，外供热空气分配器不在该工厂生产其上游热量。 | `dantherm-direct-indirect` |
| boundary_atomic | site audit | 每种实际燃料、溶剂、连接合金、购入部件、废物及排放物种增设原子行。这些候选行须路线审计，不漏计为零。发生固化燃烧、购入测试蒸汽/热、直接取水或其他服务时，逐项增加交换及匹配上游/直接排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metal_fabrication | 接收、切割、成形与换热结构制造 | conditional | 场内制造壳体、风道或换热器时，纳入板/管准备、冲孔、折弯、压制、机械加工及实际连接。购入总成仅跳过供应方已完成工序。 | 前景制造 | 每台验收成品设备 |
| surface_finish | 表面准备、涂装与固化 | conditional | 实际脱脂、冲洗、磨料清理、液体或粉末涂装与固化；购入成品零件保留供应涂装负荷。 | 前景制造 | 每台验收成品设备 |
| assembly | 风机、热源与控制装配 | required | 安装实际风扇/鼓风机、电机、护罩、紧固件、接线及控制；仅存在时装配燃烧器与换热器。外供热空气分配器可无燃烧器及换热器。 | 前景制造 | 每台验收成品设备 |
| factory_acceptance | 工厂验收与返工 | required | 记录实际风机/控制/电气及尺寸检验。泄漏/压力试验适用于密封燃料/传热回路；燃烧检验仅适用于该工厂实际测试的燃烧配置。不设通用测试时长或燃料。 | 前景制造 | 每台验收成品设备 |
| dispatch | 包装与出厂放行 | required | 放行一台已验收完整声明配置，保护包装与机器净质量分开。 | 前景制造 | 每台验收成品设备 |
| site_services | 共享公用工程及污染控制 | required | 将实际维护、压缩空气制备、水处理及排气捕集归属一次，不与工序表重复。 | 前景制造 | 每台验收成品设备 |

### 过程：接收、切割、成形与换热结构制造 (`metal_fabrication`)

#### 输入

##### 产品流

###### 低碳钢板 (`carbon_steel_sheet`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 低碳钢板
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_carbon_steel_sheet 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_carbon_steel_sheet`
- 来源: `reznor-udx-specification`

###### 不锈钢换热管 (`stainless_tube`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 不锈钢换热管
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_stainless_tube 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_stainless_tube`
- 来源: `reznor-udx-specification`

###### 镀铝钢板 (`aluminized_sheet`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 镀铝钢板
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_aluminized_sheet 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminized_sheet`
- 来源: `reznor-udx-specification`

###### 铝制换热翅片板 (`aluminium_fin`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 铝制换热翅片板
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_aluminium_fin 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium_fin`
- 来源: `reznor-udx-specification`

###### 碳钢焊丝 (`weld_wire`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 碳钢焊丝
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_weld_wire 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_wire`
- 来源: `reznor-udx-specification`

###### 铜磷钎料 (`braze_alloy`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 铜磷钎料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_braze_alloy 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_braze_alloy`
- 来源: `reznor-udx-specification`

###### 含氟硼酸钾钎焊助焊剂 (`braze_flux`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 含氟硼酸钾钎焊助焊剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_braze_flux 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_braze_flux`
- 来源: `reznor-udx-specification`

###### 金属加工切削油 (`cutting_oil`)

仅计实际牌号/配方及工序。镀铝钢板为一种购入复合板，不重复增加镀层金属。压制换热器可无焊接/钎焊；实际其他合金或助焊配方须独立卡片。

- 选定流: 金属加工切削油
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_cutting_oil 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cutting_oil`
- 来源: `reznor-udx-specification`

###### 焊接保护用氩气 (`argon`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 焊接保护用氩气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_argon 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_argon`
- 来源:

###### 购入工厂电力 (`metal_fabrication_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_metal_fabrication_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_metal_fabrication_electricity`
- 来源:

###### 铜制水热换热管 (`copper_tube`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 铜制水热换热管
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_copper_tube 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_copper_tube`
- 来源: `reznor-hydronic-manual`

#### 输出

##### 废物流

###### 碳钢加工废料 (`steel_scrap`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 碳钢加工废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_steel_scrap 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_scrap`
- 来源:

###### 不锈钢加工废料 (`stainless_scrap`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 不锈钢加工废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_stainless_scrap 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_stainless_scrap`
- 来源:

###### 铝翅片边角废料 (`aluminium_scrap`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 铝翅片边角废料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_aluminium_scrap 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium_scrap`
- 来源:

###### 废金属加工切削油 (`spent_cutting_oil`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 废金属加工切削油
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_spent_cutting_oil 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_cutting_oil`
- 来源:

##### 基本流

###### 焊接产生的小于 2.5 微米颗粒物，排入空气 (`weld_pm25`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 焊接产生的小于 2.5 微米颗粒物，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_weld_pm25 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_weld_pm25`
- 来源:

### 过程：表面准备、涂装与固化 (`surface_finish`)

#### 输入

##### 产品流

###### 碱性脱脂用氢氧化钠 (`sodium_hydroxide`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 碱性脱脂用氢氧化钠
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_sodium_hydroxide 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sodium_hydroxide`
- 来源: `epa-other-metal-coating`

###### 表面预处理用磷酸 (`phosphoric_acid`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 表面预处理用磷酸
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_phosphoric_acid 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_phosphoric_acid`
- 来源: `epa-other-metal-coating`

###### 钢砂磨料 (`steel_grit`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 钢砂磨料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_steel_grit 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_grit`
- 来源: `epa-other-metal-coating`

###### 聚酯粉末涂料 (`polyester_powder`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 聚酯粉末涂料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_polyester_powder 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_polyester_powder`
- 来源: `epa-other-metal-coating`

###### 醇酸涂料 (`alkyd_paint`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 醇酸涂料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_alkyd_paint 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_alkyd_paint`
- 来源: `epa-other-metal-coating`

###### 涂装稀释用二甲苯 (`xylene`)

仅实际涂装/预处理配方采用时计入，保留浓度、固含及溶剂组成。除实际同时使用外，粉末与液体涂料为替代路线，其他化学品及溶剂逐项拆分。

- 选定流: 涂装稀释用二甲苯
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_xylene 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_xylene`
- 来源: `epa-other-metal-coating`

###### 购入工厂电力 (`surface_finish_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_surface_finish_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_surface_finish_electricity`
- 来源:

###### 涂层固化用天然气 (`cure_gas`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 涂层固化用天然气
- 流属性 / 单位: 低位热值 / MJ
- 数量规则: 由 cp_cure_gas 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cure_gas`
- 来源: `epa-other-metal-coating`

#### 输出

##### 废物流

###### 磷化表面处理污泥 (`pretreatment_sludge`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 磷化表面处理污泥
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_pretreatment_sludge 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pretreatment_sludge`
- 来源: `epa-other-metal-coating`

###### 废钢砂磨料 (`spent_grit`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 废钢砂磨料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_spent_grit 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_grit`
- 来源: `epa-other-metal-coating`

###### 醇酸涂料残渣 (`paint_residue`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 醇酸涂料残渣
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_paint_residue 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_paint_residue`
- 来源: `epa-other-metal-coating`

###### 未回收聚酯涂装粉末 (`powder_residue`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 未回收聚酯涂装粉末
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_powder_residue 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder_residue`
- 来源: `epa-other-metal-coating`

##### 基本流

###### 二甲苯，排入空气 (`xylene_air`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 二甲苯，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_xylene_air 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_xylene_air`
- 来源: `epa-other-metal-coating`

###### 化石二氧化碳，排入空气 (`cure_co2`)

仅实际燃料固化时，计治理后直接燃烧残余排放。电固化无场内燃烧交换。NOx 以 NO2 报告不构成纯 NO2 身份。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_cure_co2 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cure_co2`
- 来源:

###### 一氧化碳，排入空气 (`cure_co`)

仅实际燃料固化时，计治理后直接燃烧残余排放。电固化无场内燃烧交换。NOx 以 NO2 报告不构成纯 NO2 身份。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_cure_co 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cure_co`
- 来源:

###### 氮氧化物，以 NO2 计，排入空气 (`cure_nox`)

仅实际燃料固化时，计治理后直接燃烧残余排放。电固化无场内燃烧交换。NOx 以 NO2 报告不构成纯 NO2 身份。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_cure_nox 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cure_nox`
- 来源:

### 过程：风机、热源与控制装配 (`assembly`)

#### 输入

##### 产品流

###### 购入轴流风扇叶轮 (`fan_impeller`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入轴流风扇叶轮
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_fan_impeller 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fan_impeller`
- 来源: `reznor-udx-specification`

###### 购入离心鼓风机总成 (`blower`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入离心鼓风机总成
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_blower 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_blower`
- 来源: `reznor-udx-specification`

###### 购入电动风机电机 (`motor`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入电动风机电机
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_motor 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_motor`
- 来源: `reznor-udx-specification`

###### 购入加热器电子控制板 (`control_board`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入加热器电子控制板
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_control_board 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_control_board`
- 来源: `reznor-udx-specification`

###### 购入燃气燃烧器总成 (`gas_burner`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入燃气燃烧器总成
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_gas_burner 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gas_burner`
- 来源: `reznor-udx-specification`

###### 购入燃油燃烧器总成 (`oil_burner`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入燃油燃烧器总成
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_oil_burner 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_oil_burner`
- 来源: `reznor-udx-specification`

###### 购入燃气安全阀 (`gas_valve`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入燃气安全阀
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_gas_valve 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gas_valve`
- 来源: `reznor-udx-specification`

###### 购入钢制换热器总成 (`exchanger`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入钢制换热器总成
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_exchanger 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_exchanger`
- 来源: `reznor-udx-specification`

###### 购入已涂层钢制加热器壳体 (`housing`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 购入已涂层钢制加热器壳体
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_housing 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_housing`
- 来源: `reznor-udx-specification`

###### 钢螺栓 (`fasteners`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 钢螺栓
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_fasteners 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fasteners`
- 来源: `reznor-udx-specification`

###### 绝缘铜电线 (`wire`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 绝缘铜电线
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_wire 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wire`
- 来源: `reznor-udx-specification`

###### 硅橡胶密封垫 (`gasket`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 硅橡胶密封垫
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_gasket 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_gasket`
- 来源: `reznor-udx-specification`

###### 矿物棉隔热材料 (`insulation`)

仅计实际装配部件；风扇叶轮与购入完整鼓风机为替代部件范围，不重复。购入鼓风机已含电机时，不再单独投入电机。供应部件负荷各关联一次，含其材料与加工，不再将其中铜/钢/磁体作为原料重复投入。购入壳体/换热器替代相应场内路线。非燃烧分配器无燃烧器/燃气阀，记录实际物料清单。

- 选定流: 矿物棉隔热材料
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_insulation 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_insulation`
- 来源: `reznor-udx-specification`

###### 购入工厂电力 (`assembly_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_assembly_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assembly_electricity`
- 来源:

### 过程：工厂验收与返工 (`factory_acceptance`)

#### 输入

##### 产品流

###### 工厂燃烧测试用天然气 (`natural_gas`)

仅燃烧路线出厂前实际消耗测试燃料时计入。纯风机与水热设备无燃烧投入，排除后续安装/启动/使用燃料。

- 选定流: 工厂燃烧测试用天然气
- 流属性 / 单位: 低位热值 / MJ
- 数量规则: 由 cp_natural_gas 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_natural_gas`
- 来源: `dantherm-direct-indirect`

###### 工厂燃烧测试用丙烷 (`propane`)

仅燃烧路线出厂前实际消耗测试燃料时计入。纯风机与水热设备无燃烧投入，排除后续安装/启动/使用燃料。

- 选定流: 工厂燃烧测试用丙烷
- 流属性 / 单位: 低位热值 / MJ
- 数量规则: 由 cp_propane 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_propane`
- 来源: `dantherm-direct-indirect`

###### 工厂燃烧测试用燃料油 (`fuel_oil`)

仅燃烧路线出厂前实际消耗测试燃料时计入。纯风机与水热设备无燃烧投入，排除后续安装/启动/使用燃料。

- 选定流: 工厂燃烧测试用燃料油
- 流属性 / 单位: 低位热值 / MJ
- 数量规则: 由 cp_fuel_oil 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fuel_oil`
- 来源: `dantherm-direct-indirect`

###### 工厂回路泄漏测试供水 (`test_water`)

仅实际水介质泄漏/压力测试，测定补水及排水，不把循环量作外部投入。空气测试或仅分配设备可无水试验。

- 选定流: 工厂回路泄漏测试供水
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_test_water 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_water`
- 来源:

###### 购入工厂电力 (`factory_acceptance_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_factory_acceptance_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_factory_acceptance_electricity`
- 来源:

###### 工厂测试用购入热水热量 (`supplied_hotwater_heat`)

仅计出厂前实际消耗的外供测试热水热量，供应热量负荷仅一次，与回路补水分开。不计寿命热需求。

- 选定流: 工厂测试用购入热水热量
- 流属性 / 单位: 低位热值 / MJ
- 数量规则: 由 cp_supplied_hotwater_heat 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_supplied_hotwater_heat`
- 来源:

###### 工厂测试用购入蒸汽 (`steam`)

仅实际蒸汽测试配置，记录压力、温度及凝结水回流状态，供应生产只计一次。

- 选定流: 工厂测试用购入蒸汽
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_steam 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steam`
- 来源:

#### 输出

##### 产品流

###### 返还工厂测试蒸汽凝结水 (`condensate`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 返还工厂测试蒸汽凝结水
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_condensate 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_condensate`
- 来源:

##### 废物流

###### 工厂回路测试废水 (`test_water_waste`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 工厂回路测试废水
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_test_water_waste 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_water_waste`
- 来源:

##### 基本流

###### 化石二氧化碳，排入空气 (`co2`)

仅实际工厂燃料燃烧发生时计入，区分直接/间接排气路径、捕集及烟囱/室内排放；未解决的 NOx 混合物不是纯 NO2。本处无使用阶段排气。

- 选定流: 化石二氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_co2 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2`
- 来源: `dantherm-direct-indirect`

###### 一氧化碳，排入空气 (`co`)

仅实际工厂燃料燃烧发生时计入，区分直接/间接排气路径、捕集及烟囱/室内排放；未解决的 NOx 混合物不是纯 NO2。本处无使用阶段排气。

- 选定流: 一氧化碳，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_co 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co`
- 来源: `dantherm-direct-indirect`

###### 氮氧化物，以 NO2 计，排入空气 (`nox`)

仅实际工厂燃料燃烧发生时计入，区分直接/间接排气路径、捕集及烟囱/室内排放；未解决的 NOx 混合物不是纯 NO2。本处无使用阶段排气。

- 选定流: 氮氧化物，以 NO2 计，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_nox 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_nox`
- 来源: `dantherm-direct-indirect`

###### 二氧化硫，排入空气 (`so2`)

仅实际工厂燃料燃烧发生时计入，区分直接/间接排气路径、捕集及烟囱/室内排放；未解决的 NOx 混合物不是纯 NO2。本处无使用阶段排气。

- 选定流: 二氧化硫，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_so2 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_so2`
- 来源: `dantherm-direct-indirect`

###### 小于 2.5 微米的颗粒物，排入空气 (`pm25`)

仅实际工厂燃料燃烧发生时计入，区分直接/间接排气路径、捕集及烟囱/室内排放；未解决的 NOx 混合物不是纯 NO2。本处无使用阶段排气。

- 选定流: 小于 2.5 微米的颗粒物，排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_pm25 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm25`
- 来源: `dantherm-direct-indirect`

### 过程：包装与出厂放行 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸板包装 (`cardboard`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 瓦楞纸板包装
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_cardboard 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cardboard`
- 来源:

###### 木制运输托盘 (`wood`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 木制运输托盘
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_wood 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wood`
- 来源:

###### 聚乙烯保护膜 (`pe_film`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 聚乙烯保护膜
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_pe_film 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pe_film`
- 来源:

###### 购入工厂电力 (`dispatch_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_dispatch_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_dispatch_electricity`
- 来源:

#### 输出

##### 产品流

###### 装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器 (`final_product`)

一台具有完整声明配置的出厂验收设备，净质量不含运输包装。

- 选定流: 装有马达驱动的风扇或鼓风机的铁或钢制非电热的空气加热器及热空气分配器 `bab3c9c3-6018-402d-835f-c56ee7db029c`
- 流属性 / 单位: 质量 / kg
- 数量规则: M 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源:

### 过程：共享公用工程及污染控制 (`site_services`)

#### 输入

##### 产品流

###### 购入工厂电力 (`site_services_electricity`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 购入工厂电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 由 cp_site_services_electricity 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_site_services_electricity`
- 来源:

###### 供应过程水 (`process_water`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 供应过程水
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_process_water 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_process_water`
- 来源:

###### 维护润滑油 (`lubricant`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 维护润滑油
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_lubricant 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lubricant`
- 来源:

#### 输出

##### 废物流

###### 金属加工及清洗废水 (`wastewater`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 金属加工及清洗废水
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_wastewater 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源:

###### 金属加工废水处理污泥 (`treatment_sludge`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 金属加工废水处理污泥
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_treatment_sludge 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_treatment_sludge`
- 来源:

###### 收集金属加工排气过滤粉尘 (`filter_dust`)

仅在声明配置/路线实际发生该具名交换时纳入，未知数量不是零。

- 选定流: 收集金属加工排气过滤粉尘
- 流属性 / 单位: 质量 / kg
- 数量规则: 由 cp_filter_dust 获取每台验收设备实际可归属交换量，保留路线特定分配及库存核对。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_filter_dust`
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared plant | 优先细分及计量，再采用有据物理因果。分配依据反映实际成形工时、涂装面积、固化负载或试验运行，不假设同等热输出。其他/经济分配须一致价格、期间及敏感性，保留未分配总量。 | `ef-allocation-2021` |
| allocation_scrap_rework | rework and scrap | 保留重复加工/测试负荷，回收粉末及内部废料再用是内部转移，不是新原料或抵扣。外送钢/铝废料及涂装残渣保留实测去向与处理，出售不证明联产品地位，不自动抵扣避免材料。披露所选回收约定。 | `ef-allocation-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 逐验收配置/批次 | 声明生产期 | 声明工厂 | 每台验收净质量 | 校准；称量及物料清单核对 |
| cp_carbon_steel_sheet | metal_fabrication | carbon_steel_sheet | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_stainless_tube | metal_fabrication | stainless_tube | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_aluminized_sheet | metal_fabrication | aluminized_sheet | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_aluminium_fin | metal_fabrication | aluminium_fin | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_weld_wire | metal_fabrication | weld_wire | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_braze_alloy | metal_fabrication | braze_alloy | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_braze_flux | metal_fabrication | braze_flux | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cutting_oil | metal_fabrication | cutting_oil | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_argon | metal_fabrication | argon | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_steel_scrap | metal_fabrication | steel_scrap | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_stainless_scrap | metal_fabrication | stainless_scrap | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_aluminium_scrap | metal_fabrication | aluminium_scrap | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_spent_cutting_oil | metal_fabrication | spent_cutting_oil | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_sodium_hydroxide | surface_finish | sodium_hydroxide | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_phosphoric_acid | surface_finish | phosphoric_acid | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_steel_grit | surface_finish | steel_grit | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_polyester_powder | surface_finish | polyester_powder | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_alkyd_paint | surface_finish | alkyd_paint | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_xylene | surface_finish | xylene | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_pretreatment_sludge | surface_finish | pretreatment_sludge | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_spent_grit | surface_finish | spent_grit | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_paint_residue | surface_finish | paint_residue | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_powder_residue | surface_finish | powder_residue | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_xylene_air | surface_finish | xylene_air | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 在扣除回收溶剂、涂层保留溶剂及收集废物后按物种做溶剂平衡，或测定捕集/烟囱流量；不得将总 VOC 映射为二甲苯。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_fan_impeller | assembly | fan_impeller | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_blower | assembly | blower | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_motor | assembly | motor | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_control_board | assembly | control_board | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_gas_burner | assembly | gas_burner | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_oil_burner | assembly | oil_burner | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_gas_valve | assembly | gas_valve | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_exchanger | assembly | exchanger | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_housing | assembly | housing | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_fasteners | assembly | fasteners | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_wire | assembly | wire | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_gasket | assembly | gasket | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_insulation | assembly | insulation | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_natural_gas | factory_acceptance | natural_gas | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量实际试验及复试消耗，保留燃料组成、压力/温度及实测低位热值。质量 × 低位热值得 MJ，不假设时长或消耗。 | MJ | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_propane | factory_acceptance | propane | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量实际试验及复试消耗，保留燃料组成、压力/温度及实测低位热值。质量 × 低位热值得 MJ，不假设时长或消耗。 | MJ | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_fuel_oil | factory_acceptance | fuel_oil | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量实际试验及复试消耗，保留燃料组成、压力/温度及实测低位热值。质量 × 低位热值得 MJ，不假设时长或消耗。 | MJ | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_co2 | factory_acceptance | co2 | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 匹配治理后污染物测量、气流、报告基准及试验时长；化石 CO2 可用实际燃料碳平衡。保留物种及空气介质，不采用通用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_co | factory_acceptance | co | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 匹配治理后污染物测量、气流、报告基准及试验时长；化石 CO2 可用实际燃料碳平衡。保留物种及空气介质，不采用通用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_nox | factory_acceptance | nox | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 匹配治理后污染物测量、气流、报告基准及试验时长；化石 CO2 可用实际燃料碳平衡。保留物种及空气介质，不采用通用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_so2 | factory_acceptance | so2 | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 匹配治理后污染物测量、气流、报告基准及试验时长；化石 CO2 可用实际燃料碳平衡。保留物种及空气介质，不采用通用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_pm25 | factory_acceptance | pm25 | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 匹配治理后污染物测量、气流、报告基准及试验时长；化石 CO2 可用实际燃料碳平衡。保留物种及空气介质，不采用通用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_test_water | factory_acceptance | test_water | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_test_water_waste | factory_acceptance | test_water_waste | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cardboard | dispatch | cardboard | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_wood | dispatch | wood | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_pe_film | dispatch | pe_film | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_metal_fabrication_electricity | metal_fabrication | metal_fabrication_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_surface_finish_electricity | surface_finish | surface_finish_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_assembly_electricity | assembly | assembly_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_factory_acceptance_electricity | factory_acceptance | factory_acceptance_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_dispatch_electricity | dispatch | dispatch_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_site_services_electricity | site_services | site_services_electricity | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 工序分表及共享服务分配，核对场址账单、电压、供电地域/年份及计量区间，排除寿命期风机用电。 | kWh | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cure_gas | surface_finish | cure_gas | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量实际固化炉燃料及实测低位热值，纯电固化无燃气投入。采用燃烧时须逐种补充实际燃烧排放行。 | MJ | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_process_water | site_services | process_water | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量清洗及治理实际外部补水，排除内部循环。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_lubricant | site_services | lubricant | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_wastewater | site_services | wastewater | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 计量送往实际场外处理的排水，记录固体/污染物；场内处理后排放物种须逐项增加受纳介质卡片。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_treatment_sludge | site_services | treatment_sludge | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_filter_dust | site_services | filter_dust | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_weld_pm25 | metal_fabrication | weld_pm25 | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 捕集后实际残余焊接烟尘，测定粒径基准，收集滤尘仍为废物交换。无粒径证据不得将总烟尘作 PM2.5。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_copper_tube | metal_fabrication | copper_tube | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_supplied_hotwater_heat | factory_acceptance | supplied_hotwater_heat | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 根据实际流量、进/回水温度及经核验流体热容计量热量，保留损失及循环边界。 | MJ | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_steam | factory_acceptance | steam | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_condensate | factory_acceptance | condensate | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 逐批称量实际外部数量，核对收料、期初/期末库存与退料，保留供应规格。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cure_co2 | surface_finish | cure_co2 | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 化石 CO2 燃料碳平衡须实测燃料碳、保留碳及已知其他碳产出，包括 CO、烃及烟炱；否则采用匹配物种监测或独立核验的适用因子。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cure_co | surface_finish | cure_co | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 采用治理后匹配的物种浓度、气流及固化时长，或经独立核验且匹配实际燃料/设备/控制条件的物种因子。燃料碳平衡本身不能确立 CO 或 NOx。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |
| cp_cure_nox | surface_finish | cure_nox | measurement_record | 配置；路线适用性；期间；原始数量及单位；计量或称量记录；库存；验收台数；不合格；返工；分配依据；不确定性 | 采用治理后匹配的物种浓度、气流及固化时长，或经独立核验且匹配实际燃料/设备/控制条件的物种因子。燃料碳平衡本身不能确立 CO 或 NOx。 | kg | 逐批次/测试或计量区间 | 完整年度或有据代表周期，含返工 | 工厂声明配置及共享服务 | 每台验收成品设备 | 原始记录；校准；供应证明；路线及去向证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_allocation | all inventory rows | 核对后的报告期外部交换分配给同一配置验收设备，采用实际验收台数。分子保留不合格/返工。每台验收设备产品产出为 M 千克。 | row protocols; accepted count; cp_mass | 每台验收成品设备 |  |
| material_balance | metal_fabrication; assembly | 逐材料牌号核对：期初库存 + 外部收料 = 期末库存 + 纳入产品材料 + 外送废料/废物 + 有记录实际损失。按批次/工序配对内部回收产生及再用，在工厂边界抵消匹配转移数量，回收物绝不是新增外部收料。完整机器质量与实际清单及保留涂层/液体核对，购入部件质量仅计一次。Fe 元素平衡采用牌号化验，绝不用钢材总质量。 | weighing; BOM; stocks; waste; assays | 平衡残差及测量不确定性 |  |
| coating_balance | surface_finish | 分别核对配方固体及每种溶剂：期初库存 + 外部收料 = 期末库存 + 保留配方组成 + 外送回收物/废物 + 直接空气排放。配对并抵消内部粉末/溶剂回收及再用，不将其作外部收料或外送回收产出。捕集废物与残余空气排放分别计量，不设通用 VOC 因子。 | formulation; application/capture records; stocks | 各组成平衡 | `epa-other-metal-coating` |
| energy_balance | utilities; factory_acceptance | 工序及分配辅助电量与供电表核对，记录配电损失。测试燃料碳/能量平衡采用实际实测燃料及试验记录，区分有效测试热、排气及损失。寿命热需求不在该平衡内。 | electric meters; fuel NCV/carbon; test records | 实测能量/平衡，不虚构容差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | reference and components | 型号及配置；铁/钢壳体及换热材料牌号；直燃、间接燃烧、水/蒸汽盘管或外供热空气分配技术；实际燃料或传热介质；风扇/鼓风机及电机规格；燃烧器及换热器有无；声明风量及测试条件；实际加热器额定热输出，外供热空气且无热源的分配器为 not_applicable；控制及安全装置；工厂验收程序；涂层；出厂状态；场址及报告期；实测净质量 M；供应方地域/年份 | 物料清单；图纸；型号；供应记录；工厂验收 |
| applicability | all rows | 区分实测零、不发生路线、未知及实测数量。最终数据前解决流类型、材料配方、属性/单位、地域/年份及排放介质。 | 路线审计；流直读记录；检验证据 |
| representativeness | production | 分层实际技术/型号/金属牌号及购入/场内制造，披露权重、不确定性、遗漏交换及证据限制。不施加经验强度范围。 | 期间总量及配置产量份额 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_mass | reference and inventory | 参考 M 须追溯同一配置 cp_mass 且排除包装。各行采用同一每台验收设备分母及声明协议，不假设设备重量。 |  |
| validation_route | factory_acceptance | 核对热源及部件配置，不强制所有型号有燃烧器、焊接/钎焊或燃烧检验。实际工厂燃烧时不得漏燃料或直接排放，制造中无寿命用能。 | `reznor-udx-specification`; `dantherm-direct-indirect`; `reznor-hydronic-manual` |
| validation_balance | all processes | 结合不确定性核对材料、库存、涂层、能量及返工平衡，核验供应负荷、运输及废物去向仅一次。未知 UUID 或物种证据不足保留明确缺口，不虚构匹配。不将通用焚烧发电数据作工厂供电。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为 process/lifecyclemodel 的制造设备输入，安装与使用情景分开 |
| excluded_use | 独立寿命供热评价；设备 kg 等同交付热量；无控制跨技术平均 |
| required_metadata | 型号及配置；铁/钢壳体及换热材料牌号；直燃、间接燃烧、水/蒸汽盘管或外供热空气分配技术；实际燃料或传热介质；风扇/鼓风机及电机规格；燃烧器及换热器有无；声明风量及测试条件；实际加热器额定热输出，外供热空气且无热源的分配器为 not_applicable；控制及安全装置；工厂验收程序；涂层；出厂状态；场址及报告期；实测净质量 M；供应方地域/年份 |
| required_quality_disclosure | 路线覆盖；供应起始状态；未解决身份；经验范围缺口；验收证据；不确定性及分配 |
| update_trigger | 技术/物料清单、热源、制造路线、供应方、涂层、验收试验或参考质量变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc3-air-heaters | official_guidance | UNSD, CPC Version 3.0, subclass 44824 and class 4482. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44824 | 身份限定：铁/钢、非电加热及电机驱动风扇/鼓风机；邻近子类区分散热器与锅炉。分类不规定燃烧器、质量、效率或制造路线。 |
| reznor-udx-specification | extension_guidance | Reznor, Model UDX Sample Specification, heat exchanger, burner and controls sections. https://assets.reznorhvac.com/download/150e5cee-9ce7-11ed-bfcb-0016e1e579b9 | 一种间接燃气加热器构型：钢换热器、轴流风扇、燃烧器、燃气阀及电子控制。压制换热器明确不焊接/钎焊，因此连接工序有条件，不普遍适用。厂商规格不是类别通用强度。 |
| dantherm-direct-indirect | extension_guidance | Dantherm Group, Heating for large-scale construction projects, direct versus indirect-fired heaters. https://www.danthermgroup.com/uk/solutions/construction/heating-for-large-scale-construction-projects | 独立厂商区分燃烧直接进入空气与间接换热隔离，不确立通用工厂测试时间、燃料、质量或寿命性能。 |
| reznor-hydronic-manual | handbook | Reznor, UWS Hydronic Unit Heater. https://www.reznorhvac.com/product/uws/ | 热水加热器反例采用铜换热管而非钢管，仅支持无燃烧器供热与材料路线差异。铁/钢类别适用性须实际壳体/产品记录确认，不采用运行数值。 |
| epa-other-metal-coating | official_guidance | US EPA, AP-42 section 4.2.2.4 Other Metal Coating, 1995. https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2d.pdf | 有条件液体/粉末涂层及溶剂损失路径；采用实际配方与捕集去向，不采用历史通用因子。 |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | 细分及有据的物理/其他分配层级，不宣称完全符合 PEF。 |
