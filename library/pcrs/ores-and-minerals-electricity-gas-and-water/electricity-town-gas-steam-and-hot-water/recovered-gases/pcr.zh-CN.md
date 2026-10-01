---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 回收煤气

## 1. 范围与适用性

本 PCR 覆盖固体含碳原料产生的工业副产可燃煤气的回收与供应，包括高炉煤气、氧气转炉煤气及其他逐一明确身份的回收工艺煤气。不包括焦炉煤气、煤气厂煤气、天然气、炼厂气、沼气，也不包括燃烧工艺煤气后仅输出热量而不输出燃料煤气产品的路线。中文类别名“回收煤气”表示回收的工业燃料煤气，并非所有循环利用的气体。产品定义依据 `un-energy-2026`；分类名称依据 `un-cpc-2025`。

具体参考清单表示高炉煤气回收中心，可按条件纳入转炉煤气联合供应。仅供应转炉煤气或其他覆盖煤气时，应构建独立的产品特定数据包，使用其具体参考身份、实测状态及路线特定的原子交换；不得替用高炉煤气 UUID。通用方法规则适用，但代表性清单不表示所有工厂均生产两种煤气。化石源空气排放行仅适用于化石碳部分；生物质来源碳须另列具有明确身份的生物源交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.electricity-town-gas-steam-and-hot-water.recovered-gases |
| classification_refs | CPC 3.0: 17203; `un-cpc-2025` |
| covered_products | 固体含碳原料产生的回收工业燃料煤气，包括高炉煤气与转炉煤气 |
| excluded_products | 焦炉煤气；煤气厂煤气；天然气；炼厂气；沼气；仅燃烧回收热量的路线 |
| representative_product | 净化后的高炉煤气 |
| production_route | 捕集；冷却与除尘；煤气输配；交付；按条件纳入火炬燃烧与余压回收 |
| market_state | 在回收中心计量出口交付的气态燃料 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为代表性回收煤气产品供应净化高炉煤气 |
| How much | 1 kg 合格净化干煤气；同时报告 273.15 K、绝对压力 101.325 kPa 下的干气体积 |
| How well | 符合声明的接收煤气管网要求；具备实测组成、高低位热值及交付压力 |
| How long or cycle | 一个声明的代表性运行期，包括正常运行、启动及停机 |
| reference_flow_link | reference_gas |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 高炉煤气 `67d9fe25-51ed-4d41-af35-f033a752d042` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 来源炉型及煤气类型；化石/生物源碳比例；干湿状态；计量温度及绝对压力；压缩因子；煤气组成；高低位热值基准；出口压力；含尘要求；上游分配；地域；时段；火炬燃烧；交付点 |

前景数据包须声明全部必需限定信息。单凭体积不得断言不同煤气功能等价。采用实测干气体积和密度，保留每参考质量的实测能量含量；向联合国统计报表提供高位热值基准能量时，不得将其当作低位热值。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| gas_state | reference_gas | 质量 | kg | 采用 cp_export 采集合格干煤气输出质量，使用同状态基准的修正干体积及实测煤气密度。用绝对压力、温度、含水状态及压缩因子修正仪表读数；不得假设运行条件下的湿煤气 m3 等于参考 m3。 |
| energy_basis | reference_gas; converter_gas | 能量含量 | MJ | 高低位热值须分开，并采用相同的干体积状态；能量按干体积乘实测热值报告。不提供固定煤气密度或热值默认值。 |
| electricity_units | recovery_electricity; pressure_recovery_electricity | 低位热值 | MJ | 计量电量由 kWh 乘 3.6 转为 MJ，并保留电表记录。电力身份记录的该属性不表示要对电力进行热值试验。 |
| solids_state | bf_dust; bf_sludge; bof_dust; bof_sludge | 质量 | kg | 分别保留交接湿质量及干固体含量。采用实测含水率换算；不得将湿污泥质量等同于干粉尘。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 由产气炉向回收系统交接的未净化副产煤气，附明确的上游负荷记录 |
| starting_condition_role | 物理前景入口，不表示零负荷假设 |
| product_classification_scope | 回收工业燃料煤气；CPC 17203 为分类背景 |
| recursive_input_rule | 使用实测交接量及一个明确的供应过程；外部交换总量扣除内部循环 |
| upstream_dataset_requirement | 关联相容的炉煤气供应、公用工程及外部处理数据集；披露无法取得的上游负荷 |
| disclosure | 声明产气炉与回收设施接口、净化路线、管网边界、储气设施、出口计量、火炬归属及上游分配 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_recovery | recovery | 纳入捕集、净化、冷却、压缩、储气、输配损失及声明出口前的交付过程。纳入边界内的旁路与火炬运行；排除下游用户燃烧。 | `eu-iron-steel-2013` |
| boundary_treatment | recovery | 记录移交外部处理的粉尘、污泥及废水并关联处理。内部回用煤气或水属于平衡项，不重复作为购入量。转炉煤气完全燃烧后的余热回收不属于回收燃料煤气输出。 | `eu-iron-steel-2013` |
| boundary_extend | foreground_package | 存在时须将每种实际辅助投入、处理药剂、粉尘流及基本污染物分别列为具有明确身份的交换。模板缺行不授权截断；任何遗漏均须通过 cp_scope 证明合理性。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | inclusion_condition | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| recovery | 煤气捕集、调质与交付集成过程 | required | 覆盖的燃料煤气回收中心 | foreground production | 每参考流 |

### 过程：煤气捕集、调质与交付（`recovery`）

#### 输入

##### 产品流

###### 未净化高炉煤气 (`raw_bf`)

记录炼铁过程转交的未净化煤气，注明含水与含尘状态。

- 选定流：未净化高炉煤气
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_gas 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 纳入条件：高炉煤气回收路线。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 未净化转炉煤气 (`raw_bof`)

记录除尘前捕集的转炉煤气，区分分流煤气与合格燃料煤气。

- 选定流：未净化转炉煤气
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_gas 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gas`
- 纳入条件：转炉煤气回收路线。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 交流电 (`recovery_electricity`)

计量捕集、煤气净化、冷却水泵、压缩及煤气柜用电；共享电表总量不得重复计入。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_utilities 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 纳入条件：所有运行的回收系统。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 工业生产用水 (`scrubber_water`)

记录工业供水补充量，排除系统内部循环水量。

- 选定流：工业生产用水 `72dcdee6-846a-455a-95d1-942aa7ad3730`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_utilities 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 纳入条件：湿式洗涤或采用工业供水补充冷却水。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 去离子水 (`cooling_deionised_water`)

记录单独供应的去离子水补充量。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_utilities 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 纳入条件：配置去离子水冷却回路。
- 来源：`eu-iron-steel-2013`

###### 氮气 (`purge_nitrogen`)

记录煤气回收管网吹扫所用外购氮气。

- 选定流：氮气 `92233c86-8e75-441c-94de-03cc91bc7c10`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_utilities 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 纳入条件：采用氮气吹扫。
- 来源：`eu-iron-steel-2013`

#### 输出

##### 产品流

###### 高炉煤气 (`reference_gas`)

在声明出口供应一千克合格的干高炉煤气。

- 选定流：高炉煤气 `67d9fe25-51ed-4d41-af35-f033a752d042`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_export`
- 纳入条件：代表性高炉煤气数据集。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 转炉煤气 (`converter_gas`)

记录同一回收中心输出的合格转炉煤气；分别保留质量、密度和能量记录。

- 选定流：转炉煤气 `631f9452-a270-4d64-9103-de9dede592d2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_export 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_export`
- 纳入条件：回收中心同时输出转炉煤气。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 交流电 (`pressure_recovery_electricity`)

记录煤气余压回收净外送电量，排除内部自用发电量。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_utilities 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 纳入条件：煤气余压回收装置向外输出电力。
- 来源：`eu-iron-steel-2013`

##### 废物流

###### 高炉煤气净化粉尘 (`bf_dust`)

在交接处称量分离的干粉尘，保留金属和含水率分析及去向。

- 选定流：高炉煤气净化粉尘
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：高炉路线采用干式粗除尘。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 高炉煤气净化污泥 (`bf_sludge`)

称量湿污泥并测定干固体及锌、铅含量；避免与废水中的固体重复计量。

- 选定流：高炉煤气净化污泥
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：湿式煤气净化产生分离污泥。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 转炉煤气净化粉尘 (`bof_dust`)

单独称量转炉干式煤气净化粉尘，不与高炉粉尘合并。

- 选定流：转炉煤气净化粉尘
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：采用转炉煤气干式除尘。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 转炉煤气净化污泥 (`bof_sludge`)

单独称量转炉湿式煤气净化污泥并报告干固体含量。

- 选定流：转炉煤气净化污泥
- 流属性/单位：质量 / kg
- 数量规则：采用 cp_waste 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：采用转炉煤气湿式除尘。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 煤气洗涤废水 (`scrubber_effluent`)

计量移交废水处理的水相废水，保留悬浮固体、氰化物、氨及金属分析。

- 选定流：煤气洗涤废水
- 流属性/单位：体积 / m3
- 数量规则：采用 cp_waste 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 纳入条件：洗涤水排污跨越回收边界。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

##### 基本流

###### 一氧化碳（化石源） (`carbon_monoxide_air`)

测量或核算泄漏、放散及前景火炬不完全燃烧排放的化石源一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_air 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 纳入条件：化石碳煤气向空气排放。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

###### 二氧化碳（化石源） (`carbon_dioxide_air`)

测量或核算前景放散和火炬燃烧的化石源二氧化碳，计入放散煤气原有的二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用 cp_air 采集每参考流交换量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_air`
- 纳入条件：化石碳煤气发生放散或火炬燃烧。
- 来源：`un-energy-2026`; `eu-iron-steel-2013`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_upstream | raw_bf; raw_bof | 通过 cp_upstream 取得产气炉分配给每种交接煤气的负荷。回收行为不确立零负荷或避免排放抵扣。披露供应方分配；负荷不可取得时评估不确定性。 |  |
| allocation_shared | recovery | 专用计量直接归属。剩余共享调质服务采用明确的因果工程驱动量，在 cp_allocation 中记录实测驱动总量且分配份额之和为一。若无法证明因果驱动量合理，应声明按同期收入实施的经济分配情景并进行敏感性分析；不得默认质量、体积或热值为通用分配依据。 |  |
| allocation_outputs | converter_gas; pressure_recovery_electricity; bf_dust; bf_sludge; bof_dust; bof_sludge | 适用时将独立外送煤气和电力作为共产品。根据实际交接及质量记录确定粉尘或污泥的产品/废物地位，并相应调整物理流类型。不得对循环利用或余压回收重复抵扣；保留处理责任。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_export | recovery | reference_gas; converter_gas | 出口仪表与煤气实验室记录 | 煤气类型；合格干质量；合格干体积；温度；绝对压力；水蒸气；压缩因子；组成；密度；高低位热值；交付压力 | 核对经校准的出口仪表与代表性煤气采样；干质量由修正干体积乘同状态基准的实测密度获得。区分煤气类型及剔除的火炬分流。 | m3; kg; MJ | 连续计量；常规组成采样 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_gas | recovery | raw_bf; raw_bof | 产气炉交接记录 | 产气炉；入口体积/质量；状态；污染物；分流比例 | 按一致煤气状态基准核对交接仪表与炉运行日志。 | m3; kg | 连续计量并按每炉次记录 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_utilities | recovery | recovery_electricity; scrubber_water; cooling_deionised_water; purge_nitrogen; pressure_recovery_electricity | 专用仪表与供应记录 | 仪表编号；交换身份；总投入；自用量；外送量；分配驱动量；单位换算 | 读取专用电、水及氮气仪表并核对账单；体积转质量时采用实测密度。 | kWh; MJ; kg; m3 | 连续计量；按月核对 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_waste | recovery | bf_dust; bf_sludge; bof_dust; bof_sludge; scrubber_effluent | 地磅、废水流量计与分析记录 | 来源；质量/体积；含水率；干固体；金属；氰化物；氨；去向；废物地位 | 在外部处理交接处分别计量分离废物流；核对联单并保留实验室样品记录。 | kg; m3 | 逐次交接与代表性采样 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_air | recovery | carbon_monoxide_air; carbon_dioxide_air | 火炬、放散与泄漏清单 | 事件时长；煤气流量；组成；化石比例；火炬工况；监测结果；不确定性 | 采用烟道/放散监测或明确的逐事件碳平衡；保留方法及不确定性。分别计入残余一氧化碳与入口二氧化碳。 | kg | 连续或逐事件 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_upstream | recovery | raw_bf; raw_bof | 供应过程与分配档案 | 供应方；源数据集；炉边界；分配；煤气交接基准；未解决负荷 | 取得并核验相容的供应过程数据集及煤气分配；不得仅凭煤气价格推断负荷。 | m3; kg | 供应基准每次修订 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_allocation | recovery | recovery | 共享服务归属记录 | 服务；产品；驱动量；实测总量；份额；使用时的收入；敏感性 | 分离独立计量服务总量；说明剩余分配理由并保证份额之和为一。 | dimensionless | 每个核算期 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |
| cp_scope | recovery | recovery | 设备与交换完整性台账 | 单元操作；药剂；排放；水回路；遗漏交换；上游/处理链接 | 现场核查实际回收系统；核对所有物理边界交换，并证明条件性缺项及遗漏的合理性。 | not applicable | 配置每次修订 | 同一声明的代表期，包括启动及停机 | 声明的回收中心及交接点 | 每参考流 | 校准；日志；源记录；核对及不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_records | 所有清单行 | 在同一声明时段，将每种归属交换总量除以合格外送参考煤气干质量；参考输出为 1 kg。保留分子单位并在相除前说明分配。 | cp_export; cp_gas; cp_utilities; cp_waste; cp_air; cp_allocation | 每参考流交换数量 |  |
| correct_gas_volume | raw_bf; reference_gas | 采用实测含水状态和压缩因子，通过明确的气体状态计算或经校准的流量计算机记录，将实测煤气体积转为声明的干气温度/绝对压力基准。保留完整换算记录。 | cp_gas; cp_export | 参考条件下的干煤气体积 |  |
| gas_energy | reference_gas; converter_gas | 以干煤气体积乘同状态基准的实测高位或低位热值；保留两种结果，不得采用其他炉煤气因子。 | cp_export | 分别记录高位及低位能量含量 | `un-energy-2026` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| quality_balance | recovery | 按煤气类型核对入口、外送、自用、火炬、泄漏及煤气柜库存变化。结合测量误差传播解释差异。 | cp_gas; cp_export; cp_air |
| quality_state | reference_gas; converter_gas | 声明干湿体积和热值状态；转炉煤气质量与体积核对采用实测密度。 | cp_export |
| quality_completeness | recovery | 保留遗漏流说明；补充实际路线特定的原子交换，明确上游及外部处理缺口。不规定外部经验数量范围。 | cp_scope; cp_upstream |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | foreground_package | 要求具体煤气身份、合格参考数量、全部限定信息、状态修正、实测热值及一致时段/分母。拒绝将不同煤气或干湿体积互换。 | `un-energy-2026` |
| validate_exchanges | recovery | 各物理交换须为原子流；未解决 UUID 须保留具体物理名称及审查元数据。证明条件性缺项合理。拒绝重复计入内部循环、共产品或外送煤气燃烧。 |  |
| validate_balance | recovery | 要求明确的煤气/碳平衡、公用工程、废物去向、实测分配驱动量及上游负荷披露。调查负数量、无法解释的平衡及火炬时段缺失；标记估算与记录缺失。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 接收工业过程的煤气供应投入；下游 process 或 lifecyclemodel 投影 |
| allowed_use | 仅用于煤气类型、状态、地域、时段及上游分配相符的情景；能量换算采用实测热值 |
| excluded_use | 自动替代天然气或焦炉煤气；未经质量核验的单纯能量等价；根据回收行为推断零负荷或避免排放抵扣 |
| required_metadata | 煤气身份；状态；组成；实测能量；出口要求；来源炉；时段；场址；分配；边界；数据缺口 |
| required_quality_disclosure | 仪表校准；采样；平衡；不确定性；上游及废物处理链接；估算与未解决身份 |
| update_trigger | 产气炉原料、净化路线、煤气管网、热值基准、分配或供应过程变化 |

## 11. 数据源

| 来源标识 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc-2025 | official_guidance | UNSD, Central Product Classification Version 3.0 structure, 30 June 2025, rows 520-525. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 检索日期 2026-10-01 | 仅用于分类身份；独立性标识：unsd-cpc-3-structure-2025 |
| un-energy-2026 | official_guidance | UNSD, Guidelines for the 2024 Annual Questionnaire on Energy Statistics, May 2026, pp. 13-14. https://unstats.un.org/unsd/energystats/questionnaire/documents/Energy-Questionnaire-Guidelines.pdf; 检索日期 2026-10-01 | 回收煤气定义、排除范围及高位能量报告；独立性标识：unsd-energy-questionnaire-2026 |
| eu-iron-steel-2013 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for Iron and Steel Production, 2013, section 6.3.4 pp. 326-327 and section 7.2.2.1.2 pp. 372-373. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/IS_Adopted_03_2012.pdf; 检索日期 2026-10-01 | 煤气净化、干湿残余物、抑制燃烧及火炬分流；不采用经验范围；独立性标识：jrc-iron-steel-bref-2013 |
