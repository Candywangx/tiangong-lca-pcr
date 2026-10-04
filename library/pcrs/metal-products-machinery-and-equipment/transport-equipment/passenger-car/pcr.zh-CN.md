---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-car
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 纯电乘用汽车制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整配置纯电乘用汽车制造。范围窄于 CPC49113：排除内燃机、混合动力及增程车辆、公共运输车辆、雪地车辆、高尔夫车、货运车辆、备件及客户运输服务。识别车型、VIN／选装、车身、已装动力电池化学组成及内部件边界、驱动布局、充电／控制、车轮、座椅、玻璃、安全装置及保留工作液。纳入实际工厂充电、测功机或短程验收行驶、检漏、调整及返工和可归属交换。排除客户行驶、充电基础设施交付、维护、假定使用寿命及报废。计量表中设备指一辆完整合格纯电乘用汽车，不是部件、客公里或载荷单位。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.passenger-car |
| classification_refs | CPC 3.0 49113；较窄背景，不声明已接受映射 |
| covered_products | 新制完整配置纯电乘用汽车 |
| excluded_products | 内燃机、混合动力／增程、公共运输、雪地、高尔夫及货运车辆；备件及运输服务 |
| representative_product | 一辆声明配置的完整合格洁净空载纯电乘用汽车 |
| production_route | 接收坯料及成品模块；实际边界内车身落料／冲压、连接、水基前处理及液体涂装；完整电池／驱动／控制／内饰／底盘集成；工厂充电、检查及验收 |
| market_state | 工厂门新制完整合格车辆，无驾驶员／乘客／载荷；声明保留工作液及荷电状态；出货防护另计 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能 | 提供声明的完整纯电乘用汽车 |
| 数量 | 采用实测净质量 M 表示同一完整合格配置设备的 1 kg |
| 质量要求 | 符合实际配置特定图纸及工厂验收准则；按实际要求记录电池／驱动身份、绝缘及电安全、充电功能、转向／制动、已装约束／控制检查、玻璃／闭合件及工作液／制冷剂检漏，附校准仪表、试验时长及结果。目录容量及历史工厂公告不建立通用试验限值或制造强度。 |
| 时间或周期 | 一次制造交付；不假定行驶寿命或运输服务循环 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完整配置纯电乘用汽车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 车型及 VIN／批次；选装；已装动力电池化学组成、容量、序列号及内部件边界；驱动／充电机／变换器及控制配置；座椅／车轮／玻璃／安全装置；安装及声明交付附件；无驾驶员／乘客／载荷洁净空载状态；保留冷却液／制动液／制冷剂及荷电状态；实测 M；场址／报告期间；供应商及外包边界；覆盖工序；验收准则、充电仪表及试验时长 |

使用校准秤称量同一完整合格洁净空载设备，包含已装电池、声明保留工作液及交付附件，排除人员、载荷、运输防护及搬运夹具。M 是这一实测物理质量，不是目录值、包含驾驶员的法定整备质量约定或最大车辆总质量。一千克归一化不建立不同配置续航、容量、客运性能或影响等效。检索车辆记录的分类、路线或参考属性不符，参考 UUID 保持未解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `vehicle_delivery_state` | 交付配置 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将 cp_mass 绑定至同一 VIN／选装、已装电池及保留工作液／荷电状态。M 不含驾驶员、乘客、载荷或搬运皮重。拆除运输防护另记录，不由法定整备质量约定或目录质量推定 M。 |
| `energy_units` | 电力行 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表单位；以精确定义 1 kWh = 3.6 MJ 转为 MJ。不将电力属性名称解释为燃烧清单。 |
| `volume_units` | 地下水行 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 保留实测体积及条件；不得杜撰气体密度、水密度或热值进行质量／能量替换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 从已声明供应商边界接收材料及配置部件，前景不隐含上游炼钢或部件制造 |
| starting_condition_role | 完整合格车辆制造投入边界 |
| product_classification_scope | 较宽 CPC49113 背景下完整纯电乘用汽车 |
| recursive_input_rule | 购入完整设备作为投入时，作为单独声明的上游产品，不递归重建本类别；区分新制与翻修 |
| upstream_dataset_requirement | 连接与材料、成品部件边界、地区、电压及处理状态相符的投入特定上游数据集。缺失链接保留为覆盖缺口 |
| disclosure | 披露前景工厂阶段、外包工序、部件内容、来料运输覆盖、交付防护包装边界、资本设备政策及所有排除；未核验上游及物流闭合时不声称完整摇篮到门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `manufacturing_gate` | foreground | 纳入从声明的接收投入到工厂验收之间所有实际工序及可归属返工；区分采购零件与场内制造以避免重复，使用已记录路线。 |  |
| `conditional_finish` | finishing | 仅启用有记录的涂装工序及化学配方。制造商示例证明可能路线，不是通用要求或配方。 |  |
| `exclude_customer_driving` | vehicle_use | 排除客户行驶／充电、维护及报废。纳入实际工厂试验、充电及验收行驶，独立识别投入及废物。本参考不交付客运服务或客户充电基础设施。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `forming` | 坯料切割、成形及机加工 | conditional | 仅当场址制造这些零件；否则分列采购成品零件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `joining` | 车身连接及修整 | conditional | 仅当场址按记录路线连接车身件 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `wet_surface` | 水基清洗及前处理 | conditional | 仅当实际进行水基清洗或转化处理；按已记录配方启用各行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `paint` | 液体汽车涂装及干燥／固化 | conditional | 仅用于已记录液体电泳或喷涂；电固化投入仅在实际采用电加热时启用 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `assembly` | 配置纯电车辆装配 | required | 每台完整验收车辆；仅启用实际安装部件行 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `acceptance` | 工厂验收及净质量测定 | required | 每台完整验收车辆 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `packaging` | 工厂门交付防护 | conditional | 仅当交付边界包含出货防护；否则披露排除 | 前景制造 | 每 1 kg 参考流；采集基准为每台验收成品设备 |

各工序记录是同一最终合格输出的独立贡献，不是七种独立交易参考产品。保留可追溯内部零件转移和物料清单记录；内部转移在前景内抵消，不重复承接上游负荷。以下卡片是明确受路线条件约束的交换。实际存在的每项其他零件、化学品、燃料、包装件、废水流或实测基本流物质须分别以独立身份行补充；缺少卡片不构成截断许可。外包涂装时，用精确采购服务或成品零件记录替代场内化学品及能耗，披露其覆盖。

### 过程：坯料切割、成形及机加工（`forming`）

#### 输入

##### 产品流

###### 热浸镀锌冷轧汽车钢板（`steel_sheet`）

仅计实际领用车身板料，声明钢牌号、锌镀层、尺寸及交付表面。称量净领用扣退回及库存变化。镀锌瓦楞屋面板及镀锌服务不是这一汽车来料。

- 选定流: 热浸镀锌冷轧汽车钢板
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 交流电（`forming_electricity`）

计量声明场内实际车身板料落料、冲压、修边及机加工和可归属抽排／搬运用电。该 UUID 仅适用于采购边界的用户侧 1–35 kV 电网平均供电；内部低压用电不是另一份采购投入。其他供电条件须另核验身份。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 6016 铝合金车身板材（`aluminium_sheet`）

仅计实际用于场内车身冲压的 AA6016 板材；记录状态、厚度、表面及领用扣未用退回。并不要求每辆车均用此牌号。采购成品板件替代板材及场内成形；其他合金须独立行。

- 选定流: 6016 铝合金车身板材
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

#### 输出

##### 废物流

###### 工业后钢废料（`steel_offcut`）

称量未处理出厂的分流钢边角料，记录合金类别及去向；内部回用不是外送废物，含油切屑须另设清单行。

- 选定流: 工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

###### 废 AA6016 车身板边料（`aluminium_offcut`）

仅计分流未处理、作为废物外送的 AA6016 边料；称量并表征涂层及污染，记录接收路线。内部返回成形或出售成品板件不属于该废物。

- 选定流: 废 AA6016 车身板边料
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_forming。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_forming`

### 过程：车身连接及修整（`joining`）

#### 输入

##### 产品流

###### 镀铜实心碳钢焊丝（`solid_wire`）

仅用于有记录的实心焊丝路线，记录焊丝型号及消耗质量，不使用药芯焊丝 UUID。

- 选定流: 镀铜实心碳钢焊丝
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 焊接用氩气（`argon`）

仅在实际供应并消耗纯氩气时纳入，用气瓶净质量记录确定数量。氩气与二氧化碳混合气是不同配方气体，须以独立行记录组成。

- 选定流: 焊接用氩气
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 交流电（`joining_electricity`）

计量实际电阻、激光或电弧连接、修整及抽排设备用电，采购供电条件与 forming_electricity 相同；不重复计入同一工厂总表。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 环氧车身结构胶，声明供货配方（`body_adhesive`）

仅计实际供货配方结构胶，声明树脂、固化剂包含、填料及浓度；称量领用扣未用退回。单供固化剂须单列，不默认为已含。不规定每种连接路线均使用结构胶。

- 选定流: 环氧车身结构胶，声明供货配方
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 钢制车身自冲铆钉（`body_rivet`）

仅计实际安装钢制自冲铆钉，记录牌号、镀层及批次质量；采集安装数量及实测批次质量，不杜撰单件重量。其他紧固技术须独立行。

- 选定流: 钢制车身自冲铆钉
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

###### 成品 CuCrZr 电阻焊电极（`spot_electrode`）

仅计声明工装政策下实际电阻焊可归属净消耗／替换电极。记录合金、修磨损失、剩余库存及回收金属。资本焊接设备不是逐车电极投入。

- 选定流: 成品 CuCrZr 电阻焊电极
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_joining`

### 过程：水基清洗及前处理（`wet_surface`）

#### 输入

##### 产品流

###### 氢氧化钠清洗试剂，声明供货浓度（`caustic`）

仅在实际清洗配方使用氢氧化钠时纳入。采集供货溶液质量及浓度，不作为纯物质质量；不将 95–98% 牌号身份用于浓度未知的槽液。每项其他清洗化学品须有独立原子行。

- 选定流: 氢氧化钠清洗试剂，声明供货浓度
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 工艺用水（`supplied_water`）

仅计入外购清洗及漂洗工艺水，通过称量或供应商用水质量记录采集。记录处理状态及供应商边界；不将技术圈投入认作水资源，也不重复计入供应商取水。

- 选定流: 工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 交流电（`wet_electricity`）

按已声明的采购供电条件，计量边界内槽液循环、漂洗及水处理用电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

###### 磷酸锌转化涂层浓缩液（`phosphate`）

仅在实际前处理配方使用该供应商定义浓缩液时纳入；记录全部供货组分、浓度、消耗溶液质量、槽液回流及带出。其他转化化学组成须独立行；不规定通用磷化配方。

- 选定流: 磷酸锌转化涂层浓缩液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

##### 基本流

###### 地下水（`well_water`）

仅计入本前景场址为槽液和漂洗直接抽取的地下水。以 m3 计量总取水量，声明国家及水井；介质为资源／水资源／来自水的可再生物质资源。不声称稀缺等级，不同时将同一水量计入外购工艺水。

- 选定流: 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

#### 输出

##### 废物流

###### 废碱性水基清洗液（`alkaline_effluent`）

仅在这一液体废物流离开边界时纳入。测量溶液质量、pH 及成分，识别接收处理；这是废物转移，不是基本流排水。

- 选定流: 废碱性水基清洗液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_wet_surface。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wet_surface`

### 过程：液体汽车涂装及干燥／固化（`paint`）

#### 输入

##### 产品流

###### 阴极环氧电泳涂料分散液（`electrocoat`）

仅计实际供货环氧分散液，声明固体、添加剂及水／溶剂组成。记录净新料领用、退回、槽液库存及内部超滤回收，不重复计循环。其他树脂体系须独立行。

- 选定流: 阴极环氧电泳涂料分散液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

###### 水基丙烯酸汽车色漆（`basecoat`）

仅计已确认配方色漆，指定树脂、颜料、溶剂／水及供货固含。称量净施加／领用配方；不使用干粉涂料身份。其他配方须独立行。

- 选定流: 水基丙烯酸汽车色漆
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

###### 羟基官能丙烯酸清漆 A 组分（`clearcoat_A`）

仅计实际供货 A 组分，声明树脂、溶剂及添加剂。配方消耗质量独立于 HDI 固化剂记录；制造商混合比例须为实际配方记录，不是通用假设。

- 选定流: 羟基官能丙烯酸清漆 A 组分
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

###### HDI 聚异氰酸酯清漆固化剂（`clearcoat_B`）

仅计实际供货六亚甲基二异氰酸酯基聚异氰酸酯固化剂，识别低聚物、溶剂及浓度。B 组分质量独立于 clearcoat_A；其他异氰酸酯化学组成是不同交换。

- 选定流: HDI 聚异氰酸酯清漆固化剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

###### 涂装线乙酸正丁酯溶剂（`butyl_acetate`）

仅计为稀释或清洗单供的实际乙酸正丁酯；称量净领用并记录纯度。配方涂料已含溶剂不是另一份采购。其他溶剂及混合清洗配方须独立行。

- 选定流: 涂装线乙酸正丁酯溶剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

###### 交流电（`paint_electricity`）

仅在实际使用时计量电泳沉积、喷涂／通风、可归属压缩空气及电干燥／固化，应用声明采购供电边界。燃气炉、外购热、热氧化及其他公用设施须有独立实测投入及实际排放；电固化不是通用路线。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

#### 输出

##### 废物流

###### 水基汽车喷漆室污泥废物（`paint_sludge`）

仅计实际作为废物转移、已表征湿污泥，测量干固体、水、溶剂及处理路线。这不是干粉过喷、废水或大气 VOC 排放。内部回收涂料另作核对。

- 选定流: 水基汽车喷漆室污泥废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

##### 基本流

###### 乙酸正丁酯排入大气，未指定子介质（`butyl_acetate_air`）

仅在实际组分出口监测识别捕集／处理后释放乙酸正丁酯，并记录大气子介质及可归属 kg 时纳入。不将总 VOC、捕集溶剂或甲苯／二甲苯身份替换到此交换；不由采购溶剂推定排放。

- 选定流: 乙酸正丁酯排入大气，未指定子介质
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_paint。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_paint`

### 过程：配置纯电车辆装配（`assembly`）

#### 输入

##### 产品流

###### 钢制径向滚珠轴承（`ball_bearing`）

仅记录这一具体安装轴承类型及质量；不使用风机变桨轴承或保持架身份。

- 选定流: 钢制径向滚珠轴承
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 碳钢螺栓（`fastener`）

记录安装螺栓的等级、镀层及质量；实际使用的螺母和垫圈须分列，不合并到螺栓行。

- 选定流: 碳钢螺栓
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 交流电（`assembly_electricity`）

按已声明的采购供电条件计量装配工具、提升设备及可归属公用设施，纳入合格车辆可归属返工。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整 NMC 锂离子动力电池包（`battery_nmc`）

仅计实际交付镍锰钴正极电池包，声明供应商化学组成、容量、电芯／模块／BMS／壳体／冷却包含、序列号、质量及荷电状态。历史 BMW 来源仅支持安装；NMC 化学组成取自实际供应商证据。成品包是一个实体总成，不重复投入其电芯、电解液或已含冷却液。容量是元数据，不是整车厂耗能。

- 选定流: 完整 NMC 锂离子动力电池包
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`
- 来源: `bmw-i4-plant-2020`

###### 完整 LFP 锂离子动力电池包（`battery_lfp`）

仅计实际交付磷酸铁锂正极电池包；声明相同内部件边界、容量、质量、序列号及荷电状态。这与 battery_nmc 的化学组成／配置不同，仅启用实际电池包配置；混合或其他化学组成须独立身份行。

- 选定流: 完整 LFP 锂离子动力电池包
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整电动乘用车驱动桥（`drive_axle`）

单个实际供货马达／减速／差速实体总成，指定所含逆变器、壳体及工作液并实测质量。不重复计已含马达、磁体、齿轮或逆变器。独立供货驱动技术须有自身部件行。

- 选定流: 完整电动乘用车驱动桥
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整汽车牵引逆变器（`traction_inverter`）

仅计单供已装逆变器，声明壳体、功率模块、控制及冷却液边界。排除 drive_axle 已含逆变器。记录供应商额定值及实测质量；额定值不是工厂能量。

- 选定流: 完整汽车牵引逆变器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整乘用车车载充电机（`onboard_charger`）

记录实际成品充电机及所含变换器／控制／冷却、供应商额定值、电压及质量。组合充电机／变换器替代独立内部件投入；外部充电站不属于车辆交付。

- 选定流: 完整乘用车车载充电机
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整汽车 DC-DC 变换器（`dc_converter`）

仅计充电机／逆变器边界外实际单供变换器，记录板卡、外壳及冷却包含并实测质量。不重复计集成电子件。

- 选定流: 完整汽车 DC-DC 变换器
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 点火接线装置和其他用于车辆、航空器或船只的点火接线装置（`wire_harness`）

仅计其他车辆接线装置类别下单个完整已电测、非点火回路铜导体汽车线束；记录回路、电压、导体、绝缘、连接器边界及实测质量。保留官方宽泛中文名，不据此规定本纯电车存在点火回路。不将完整线束作为纯铜；铝导体或混合边界须独立实体定义。

- 选定流: 点火接线装置和其他用于车辆、航空器或船只的点火接线装置 `4b3f48dd-97a6-427e-9baf-742d7eb6e9c2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整软包乘用车座椅（`seat`）

单个实际座椅总成，声明框架、泡沫／织物组成、调整马达、传感器及气囊包含。记录安装数量及实测总成质量，不另投入已含模块。

- 选定流: 完整软包乘用车座椅
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品夹层玻璃乘用车前风挡（`windscreen`）

记录实际成形夹层风挡的玻璃／中间层／涂层组成、尺寸及净质量。钢化侧窗及车顶玻璃是不同实体产品，须独立行。实际在窗口边界外单供安装胶时须单列。

- 选定流: 成品夹层玻璃乘用车前风挡
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 成品铸造铝合金乘用车车轮（`wheel`）

仅计合金、铸造路线、表面及净质量已确认实际车轮。记录安装数量及声明交付备轮；完整外购胎轮总成替代重复车轮及轮胎投入。锻造或钢轮须独立行。

- 选定流: 成品铸造铝合金乘用车车轮
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 汽车用的橡胶新充气轮胎（`tyre`）

仅用于成品汽车橡胶充气子午线轮胎；记录实际配方、增强层、轮胎尺寸及实测质量，不含轮辋。仅计安装及声明交付备胎，不再将供应商轮胎内部配料当作前景原料。

- 选定流: 汽车用的橡胶新充气轮胎 `8229da31-81e7-4fa4-8d3e-4ed5bcb8a575`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整液压乘用车盘式制动卡钳（`brake_caliper`）

单个实际卡钳总成，声明本体、活塞、密封及刹车片包含，记录类型及实测质量。供货边界外制动盘、单供片及制动液须有自身投入。

- 选定流: 完整液压乘用车盘式制动卡钳
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整乘用车悬架支柱（`suspension_strut`）

记录单个实际交付支柱，指定弹簧、减振器、支座及预充工作液边界并实测质量。悬臂及其他单供悬架件须独立行；工厂预充油不重复加入。

- 选定流: 完整乘用车悬架支柱
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 完整铅酸 12 V 汽车辅助蓄电池（`auxiliary_battery`）

仅计实际安装铅酸辅助电池，声明壳体／电解液包含、容量、质量及荷电状态。锂辅助系统须独立行；不再投入已含铅或酸。

- 选定流: 完整铅酸 12 V 汽车辅助蓄电池
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 水基乙二醇汽车冷却液，声明供货浓度（`vehicle_coolant`）

仅计实际单独充装溶液，记录乙二醇、水、添加剂及浓度。称量新料领退及保留充装；排除外购模块预充液。纯乙二醇或风场冷却液不是本配方。

- 选定流: 水基乙二醇汽车冷却液，声明供货浓度
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### DOT 4 乙二醇醚制动液（`brake_fluid`）

仅计实际供应商确认乙二醇醚／硼酸酯配方，声明组成及净充装质量。硅油 DOT5 及矿物液压油是不同交换。不重复计采购预充模块已含液。

- 选定流: DOT 4 乙二醇醚制动液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 车辆热管理用 HFO-1234yf 制冷剂（`hfo_charge`）

仅计实际单独充装 2,3,3,3-四氟丙烯，记录纯度、充装／退回及保留质量。其他制冷剂须独立行。工厂预充完整模块已含充装量，清单不重复充装。

- 选定流: 车辆热管理用 HFO-1234yf 制冷剂
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

###### 机动车辆的车体（`purchased_body`）

仅计这一声明乘用车型实际外购完整车身壳体。声明闭合件、涂装／未涂装状态、供应商边界、检查及实测质量。本投入替代其供应商边界已含车身坯料及制造负荷；仅启用实际后续场内工序，不重复落料／连接／涂装。它不代表完整车辆。

- 选定流: 机动车辆的车体 `68dcb7da-bb57-4730-94f3-ace5817da287`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

#### 输出

##### 基本流

###### HFO-1234yf 排入大气，未指定子介质（`hfo_air`）

仅计充装／检漏／返工实际实测前景释放，确定物质、kg 及大气子介质。不假定每千克充装均泄漏，不规定运行泄漏系数。捕集退回制冷剂不是大气排放。

- 选定流: HFO-1234yf 排入大气，未指定子介质
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_assembly。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assembly`

### 过程：工厂验收及净质量测定（`acceptance`）

#### 输入

##### 产品流

###### 交流电（`test_electricity`）

计量实际工厂充电及电气／绝缘、制动／转向、测功机或短程验收行驶、检漏及控制试验，包含充电损耗及辅助设施。记录外部交流电表期间、电池初末荷电状态、时长／距离及返工。安装容量不是外购电力；不重复计工厂公共总表，不由客户续航数据推定试验消耗。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_acceptance`

#### 输出

##### 产品流

###### 完整配置纯电乘用汽车（`finished_machine`）

同一完整合格纯电乘用汽车的一千克，包含实际安装电池、驱动／充电／控制、车身／底盘／内饰／玻璃／安全装置、声明交付附件及保留工作液。排除人员、载荷、夹具及运输包装。核对已装电池包及驱动模块内部件以防重复计数。UUID 未解决：检索车辆身份范围或属性不符。

- 选定流: 完整配置纯电乘用汽车
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 1 千克
- 数值来源模式: `fixed_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_mass`

### 过程：工厂门交付防护（`packaging`）

#### 输入

##### 产品流

###### 聚乙烯薄膜（`pack_film`）

仅在聚乙烯薄膜实际随产品出货时纳入。分别称量所用薄膜及废料；计入清单但不计入合格净车辆质量。

- 选定流: 聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

###### 瓦楞纸板防护垫（`pack_board`）

仅在实际使用时纳入；记录等级、再生成分及质量。不预设指定纤维配比纸箱可代表这一未指定配比防护垫。

- 选定流: 瓦楞纸板防护垫
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_packaging。
- 数值来源模式: `calculated_value`
- 适用范围: `product_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_packaging`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `direct_attribution` | shared_operations | 优先使用工单及分表直接归属。仍使用公共总表时，须对识别工序采用实测因果驱动量，如机时，并披露全部参与工单及空载负荷；质量归一化前，按同一配置合格台数确定每台可归属数量。 | `ghg-product-allocation-2011` |
| `coproduct_decision` | saleable_outputs | 不预设废钢为共产品，披露去向及法律／产品状态。实际产生多个可销售共产品时，优先细分；论证物理关系，无法建立时采用有记录的经济或其他分配并作敏感性分析。不规定通用质量份额或避免炼钢抵扣。 | `ghg-product-allocation-2011` |
| `rework_scrap` | manufacturing_losses | 保留合格报告批次可归属的返工及不合格品负荷。内部回收材料仅计一次，外送废物另列。分别披露上游再生含量方法及下游处理以避免双重抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | 验收净质量 | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收 | 报告期间内完整批次 | 同一型号及配置 | 每台验收净质量 | 校准、称重及签字验收记录 |
| `cp_forming` | `forming` | 坯料切割、成形及机加工 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_joining` | `joining` | 车身连接及修整 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_wet_surface` | `wet_surface` | 水基清洗及前处理 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_paint` | `paint` | 液体汽车涂装及干燥／固化 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件；供货树脂／溶剂组成及固含；A／B 领退；槽液库存及内部回收；喷涂转移及湿污泥；捕集／处理后出口组分监测；加热燃料路线 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_assembly` | `assembly` | 配置纯电车辆装配 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_acceptance` | `acceptance` | 工厂验收及净质量测定 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件；VIN／选装；已装电池化学组成／内部件边界及初末荷电状态；实际验收规格；外部交流充电计量期间及损耗；试验距离／时长及返工；绝缘、充电、转向／制动及约束／控制检查；保留工作液／制冷剂充装、退回及释放记录 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 保留实际试验准则及实测结果。kWh 容量是配置元数据，不是工厂电力。损耗／制冷剂释放仅按实测前景证据记录，不用客户使用或假定泄漏系数。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |
| `cp_packaging` | `packaging` | 工厂门交付防护 | meter_and_issue_records | 工单及配置；合格台数；各行领用／退回数量及原始单位；成分／牌号；仪表读数；分配驱动量；废物去向；路线条件 | 逐原子行使用校准仪表、称量领退记录、供应商单据及废物联单。保留属性：质量用 kg，电表转 MJ，直接抽取地下水用 m3。未实测密度及条件时，不将外购水质量转为体积。工序公用设施合计与工厂账单核对，部件和保留工作液包含情况与净质量记录核对。 | 各行分别 kg、MJ、m3 | 每工单及每计量期 | 报告期内完整同配置批次；季节性或混线须披露 | 已声明工厂、外包及采购边界 | 各行可归属数量 / 同一配置的验收设备数量 | 校准、供应商组成、工单、分配及处置证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

finished_machine 输出固定为 1 千克，不再次相除。对每个其他适用行使用同一配置及批次进行转换，数量分子单位保持不变。不同配置须拆分，不按台数混合平均后套用目录质量。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `configuration_trace` | all rows | 将各投入追溯至安装物料清单、路线及合格车辆；供应商成品零件不重复承担坯料负荷。其余部件在补充独立原子记录前披露为覆盖缺口。 | 图纸、物料清单、供应商单据 |
| `basis_quality` | cp_mass | M 必须是正的实测净质量，交付配置、工作液状态及验收边界与全部采集交换相同。 | 校准及称重记录 |
| `coverage_quality` | all processes | 记录完整批次时间覆盖、仪表重叠、不合格品、返工、库存变化、外包阶段及未测排放。缺失记录为未知，不是零或 not_applicable。 | 台账、覆盖表及测量不确定度 |
| `chemistry_quality` | wet_surface; paint | 逐供货配方化学品核验配方、浓度及安全数据表；表征各外送废物流并将处理与环境排放分开。 | 配方、安全数据表、化验及联单 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 拒绝限定信息缺失、驾驶员／载荷装载质量、法定整备质量约定或运输毛重替代、非正 M 或配置、cp_mass 与 finished_machine 不一致。要求 1 千克输出及各非参考适用行明确应用 normalize_mass。 |  |
| `validate_atomic` | inventory | 逐行要求一个物理交换、所填公开身份已核验、属性／单位正确、中文流名及介质相符。UUID 未解决不授权代理替代或混合行。 |  |
| `validate_balance` | coverage | 按实际物料清单核对安装质量、坯料、废物、保留工作液及采购零件；独立核对已装电池包／驱动／充电机内部件边界、保留工作液及 VIN／选装与实测车辆。核对充电损耗及初末荷电状态，不杜撰容量抵扣；核对涂料库存、回收溶剂、污泥及实际组分释放。逐阶段核对公用设施，内部转移抵消。结合记录的测量不确定度解释差异，不杜撰数值允差。 |  |
| `validate_completeness` | dataset | 逐条件阶段核对路线证据。声称清单完整前，须分列并采集缺失化学品、零件、试验介质及实际排放；上游或功能覆盖不完整时禁止摇篮到门或服务比较。 |  |
| `validate_allocation` | shared_operations | 要求完整驱动量记录及分配、废钢处理依据；其他可辩护分配可能改变结果时记录敏感性。 | `ghg-product-allocation-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置明确完整合格车辆的制造前景过程 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 作为配置一致、上游覆盖已披露的纯电乘用车制造模型投入 |
| excluded_use | 行驶／运输服务、客户充电，或未另做功能建模的跨电池化学组成、续航、座位及车辆类别生命周期比较 |
| required_metadata | 型号、配置、空载状态、M、保留工作液、制造商／场址、报告期间、工艺路线、电压／地区、供应商边界、运输／包装范围及分配 |
| required_quality_disclosure | 实测及估算数量；未解决身份；未测排放及部件；上游链接完整性；不确定度、数据年份及配置限制 |
| update_trigger | 电池化学组成／容量／内部件边界、驱动／充电／控制配置、VIN／选装、保留工作液、车身板料／涂装配方、供应商边界、工厂充电／试验路线、供电、验收准则或质量协议变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `vw-id3-plant-2019` | handbook | Volkswagen AG, Production start of Volkswagen ID.3: The plant (2019), Transformation during normal operation; body production, painting and assembly paragraphs. https://www.volkswagen-newsroom.com/en/production-start-of-volkswagen-id3-6348/the-plant-6351 | 历史定性车身／涂装／装配及座舱模块示例。不将未来计划、产能、自动化比例、可再生供电及碳中和声称采用为制造数量、现状或必需路线。 |
| `bmw-i4-plant-2020` | handbook | BMW Group, BMW Group Plant Munich gears up for fully electric future (22 July 2020), high-voltage battery body and assembly paragraphs. https://www.press.bmwgroup.com/global/article/detail/T0311207EN/bmw-group-plant-munich-gears-up-for-fully-electric-future | 历史高压电池与车身／整车装配集成。不指定 NMC／LFP 化学组成、现行路线、电芯制造强度或通用工厂配置；实际化学组成及供应商边界须有前景单据。 |
| `ghg-product-allocation-2011` | official_guidance | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p.63 / PDF p.65, tables9.1–9.2. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 历史分配层级；须有实际物理驱动量证据，不声称符合现行完整标准。 |
