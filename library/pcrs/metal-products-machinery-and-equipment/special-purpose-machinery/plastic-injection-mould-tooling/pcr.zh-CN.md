---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.plastic-injection-mould-tooling
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 完整钢制塑料注射模具工装制造

## 1. 范围与适用性

覆盖热塑性塑料注塑用新完整钢模具制造：一套配置定动模，含声明型腔型芯、模架、导向、顶出、冷却及浇注接口。代表路线使用常规钢镶件和冷流道；热流道仅作为实际安装选项纳入。本较窄 CPC44916 边界排除单售模架镶件备件、铸造砂箱模型、锭模及金属硬质合金玻璃矿物橡胶模具、吹塑压塑挤出工装、铝模、增材制造随形冷却镶件、翻新、注塑机及外部控制器机器人温控站。其他路线须明确展开。客户塑件生产、寿命模次、模具维护使用及报废在范围外。Uddeholm第17版2021年3月是历史牌号专属制造指导；未注明日期的HASCO海报是一套两腔热流道实例。均不确定通用部件、钢牌号、工厂数量、净质量或寿命。制造质量不代表等注塑性能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.plastic-injection-mould-tooling |
| classification_refs | CPC 3.0 44916; 较窄候选范围；不声明已接受映射 |
| covered_products | 新完整配置钢制热塑性塑料注射模具 |
| excluded_products | 独立工装部件；其他模塑技术材料路线；注塑机；客户塑料生产及使用 |
| representative_product | 一套完整定动模钢工装，含常规镶件及声明冷流道；热流道仅安装时 |
| production_route | 收货及证书配置控制；实际坯料加工；条件电火花热处理精整；采购组件装配；实际工厂验收及发运保护 |
| market_state | 声明工厂边界验收完整排水交付配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种声明完整钢制热塑性塑料注射模具配置 |
| How much | 1 kg 验收净完整模具；一台完整设备由物理实测 M kg 表示 |
| How well | 满足实际图样专属尺寸、分型顶出装配、冷却检漏及适用热流道电气试模验收计划。记录实际准则结果；不设通用硬度粗糙度压力模次 |
| How long or cycle | 一次制造交付；不推定客户注塑循环或寿命 |
| reference_flow_link | `finished_mould` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 金属铸造用砂箱，模座，模型，金属用模具（铸锭模除外）、金属碳化物用模具、玻璃用模具、矿物材料用模具、橡胶或塑料用模具 `da241301-584e-4c9c-baa7-2208878acd1d` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 工装序列图样清单修订；完整定动模；型腔数几何；钢牌号证书及交付热状态；本地外购镶件路线；模架导向顶出冷却浇注完整性；流道及安装热流道部件；供货内部件；实际验收准则结果；排水状态余留润滑；正值实测 M；工厂期间边界；样件试验水包装运输工装散装备件外部控制器排除 |

一台完整设备指一套有身份的定动模，不是注塑机，也不能将各半模分别当完整设备。在数据集元数据或等效注释声明限定。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `delivery_completeness` | delivery configuration | 质量 | kg | 排水状态纳入两个半模、指定镶件及安装选项和交付余留润滑。排除包装运输限位工装、可拆试模接头、样件聚合物试验水及独立备件控制器。分拆发运须保留原验收完整套称重及每个所含半模零件可追溯身份；运输重量及目录质量不能替代净称重。 |
| `electricity_energy` | electricity_machining; electricity_edm; electricity_thermal; electricity_finishing; electricity_assembly; electricity_tryout | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留表计 kWh；按1 kWh =3.6 MJ 换算。记录来源电压阶段实际时间负载。注塑机额定功率或杜撰加工时数不能确定工厂消耗。 |
| `fluid_mass` | coolant; dielectric; nitrogen; diwater; tap_water_machining; tap_water_tryout; spent_emulsion; spent_dielectric; spent_edm_water; test_wastewater | 质量 | kg | 测量单一指定交付配方状态或收集废物。体积须实际密度温压及有依据换算；采购混合物不又增加组分投入。气态氮不能继承液氮身份。 |
| `water_resource_volume` | groundwater | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 计量实际可再生淡水地下水取用并保留含水层场址依据。资源体积与采购工艺水及外运废水质量分开。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定钢坯耗材及分别指定成品模具组件收至工装工厂 |
| starting_condition_role | 前景收货；供货制造来料运输单独链接 |
| product_classification_scope | CPC44916完整钢制热塑性塑料注射模具子集 |
| recursive_input_rule | 采购成品模架镶件替代其坯料及本地制造；采购完整热流道总成替代所含加热器喷嘴分流板。内部转移是在制品，不重复投入 |
| upstream_dataset_requirement | 匹配实际钢状态、部件设计完整性、数控电火花热路线、化学配方、来源地区及供货接收边界 |
| disclosure | 仅前景制造模块。声明自制外购外包、实际公用工程试模路线及缺失供货运输处理链接；不声明完整摇篮到工厂门 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | manufacturing | 纳入实际收货检查、锯切铣削钻削、条件成形线切割电火花、牌号专属热处理精整、尺寸检查、配合及导向顶出冷却浇注装配、适用电气检漏、实际工厂试模、验收及应归属不合格返工。预硬坯不强制热处理；供货状态控制本地路线。实际存在清洗溶剂涂层防腐、本地电极制造、泵送去离子或外包服务时须在覆盖声明前展开交换。初始卡片不是通用清单。 | uddeholm-plastic-moulding-2021 |
| `boundary_tryout` | tryout | 验收必需，但物理注塑试模仅实际执行时纳入。记录注塑机模具树脂身份、实测进料电力、循环数、样件流道不合格外运、回收树脂及冷却水。声明边界后的客户生产试验在范围外。试模样件是独立产出，其聚合物不是模具质量。不设固定模次树脂量或模具寿命。 |  |
| `boundary_semantic` | reference_product | 现有金属加工中心方法覆盖交付机床并排除定制零件制造。农业犁中的犁壁用语指犁部件而非注塑模具。本基线无现有material PCR覆盖本完整模具边界。旧分类脚手架及ID保持只读；本记录不声明映射已接受。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `machining` | 坯料准备及数控机加工 | conditional | 实际本地指定钢坯铣削钻削 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `edm` | 声明电火花加工 | conditional | 仅实际成形或线切割电火花路线 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `thermal` | 声明钢热处理 | conditional | 实际牌号专属本地电加热真空淬冷回火路线 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `finishing` | 声明型腔型芯精整 | conditional | 实际图样专属打磨抛光 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `assembly` | 完整配置模具装配 | required | 一套声明完整定动模 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `tryout` | 工厂检查及验收 | required | 型号专属验收；注塑试模仅实际执行时 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| `packout` | 发运保护 | conditional | 实际指定保护 | 前景阶段；内部在制品保持模块内 | 每 1 kg 参考流；采集基准为每台验收成品设备 |

### 过程： 坯料准备及数控机加工 (`machining`)

#### 输入

##### 产品流

###### 预硬P20钢模具坯块 (`p20_stock`)

仅在实际厂内型芯型腔路线使用本单一证书声明牌号、状态及坯块几何时纳入。称量净收货领用及退回，记录余量及实际路线。采购成品镶件替代原料及本地加工。历史供货实例不规定这些牌号必需。

- 选定流： 预硬P20钢模具坯块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源： uddeholm-plastic-moulding-2021

###### 软退火H13钢模具坯块 (`h13_stock`)

仅在实际厂内型芯型腔路线使用本单一证书声明牌号、状态及坯块几何时纳入。称量净收货领用及退回，记录余量及实际路线。采购成品镶件替代原料及本地加工。历史供货实例不规定这些牌号必需。

- 选定流： 软退火H13钢模具坯块
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 低压电网电力 (`electricity_machining`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 可乳化矿物油切削液浓缩液 (`coolant`)

仅用于一种实际供货声明可乳化矿物油配方浓度。称量浓缩液净补加；本地添加水分开。将通用切削液身份限定为本实际产品并保留安全数据表及组成。采购预混乳化液替代本浓缩液及稀释水路线。不设通用稀释比。

- 选定流： 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 外供饮用水等级自来水 (`tap_water_machining`)

仅用于本阶段实际外供饮用水等级水：适用机加工乳化液配制或模具检漏冷却试验。计量新增补水并按实际密度温度换算体积；排除内部循环及供货混合液内水。不计客户冷却水清单。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

##### 基本流

###### 取用的可再生淡水地下水 (`groundwater`)

仅用于工厂实际井取水，水源含水层记录确认可再生淡水及声明国家场址。计量 m3 并展开泵送处理投入；相同水不能又计自来水采购，内部循环不是取水。

- 选定流： 地下水 `4f462198-40cd-4184-8733-86648a20dc3f`
- 流属性/单位： 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_water_resource。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_water_resource`
- 来源：

#### 输出

##### 废物流

###### 未处理洁净P20钢模具坯块边角料 (`p20_offcut`)

称量本单一经证实合金实际分类洁净且未经处理外运边角料。公开钢边角料身份限定为本牌号；内部回用不是外运，不自动抵扣避免原生钢。

- 选定流： 钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未处理洁净H13钢模具坯块边角料 (`h13_offcut`)

称量本单一经证实合金实际分类洁净且未经处理外运边角料。公开钢边角料身份限定为本牌号；内部回用不是外运，不自动抵扣避免原生钢。

- 选定流： 钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 洁净P20钢机加工切屑 (`p20_chips`)

仅用于声明分离后本合金实际分类洁净切屑。称量外运质量并记录残留污染；含油切屑须另一身份及行。公开洁净切屑类别限定使用，不采用其产率假设数量。

- 选定流： 钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 洁净H13钢机加工切屑 (`h13_chips`)

仅用于声明分离后本合金实际分类洁净切屑。称量外运质量并记录残留污染；含油切屑须另一身份及行。公开洁净切屑类别限定使用，不采用其产率假设数量。

- 选定流： 钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 含油P20钢机加工切屑 (`oily_p20_chips`)

仅用于实际外运含油切屑，保留合金证书、实测油水含量、湿质量及接收记录。与分离液及洁净切屑区分；不杜撰脱油效率。

- 选定流： 含油P20钢机加工切屑
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 废矿物油水基切削乳化液 (`spent_emulsion`)

称量实际收集且外运处理溶液，保留油浓度、金属污染及接收边界。公开废切削液身份限定为本乳化液。内部回用及金属切屑分开；不设默认加工液损失率。

- 选定流： 废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 声明电火花加工 (`edm`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_edm`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品成形铜电火花电极 (`copper_electrode`)

仅在实际声明电火花路线使用本单一设计配方时纳入。称量净领用或应归属更换消耗，保留规格、回用余量及服务工单。铜成形、石墨成形及黄铜丝路线按实际记录选择，不是同时必需投入。采购成形电极排除其供货原料加工另计本地领用。

- 选定流： 成品成形铜电火花电极
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品成形细晶石墨电火花电极 (`graphite_electrode`)

仅在实际声明电火花路线使用本单一设计配方时纳入。称量净领用或应归属更换消耗，保留规格、回用余量及服务工单。铜成形、石墨成形及黄铜丝路线按实际记录选择，不是同时必需投入。采购成形电极排除其供货原料加工另计本地领用。

- 选定流： 成品成形细晶石墨电火花电极
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品未镀层黄铜线切割电极丝 (`brass_wire`)

仅在实际声明电火花路线使用本单一设计配方时纳入。称量净领用或应归属更换消耗，保留规格、回用余量及服务工单。铜成形、石墨成形及黄铜丝路线按实际记录选择，不是同时必需投入。采购成形电极排除其供货原料加工另计本地领用。

- 选定流： 成品未镀层黄铜线切割电极丝
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 配方矿物油成形电火花工作液 (`dielectric`)

仅在实际声明电火花路线使用本单一设计配方时纳入。称量净领用或应归属更换消耗，保留规格、回用余量及服务工单。铜成形、石墨成形及黄铜丝路线按实际记录选择，不是同时必需投入。采购成形电极排除其供货原料加工另计本地领用。

- 选定流： 配方矿物油成形电火花工作液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品纤维素成形电火花油滤芯 (`filter`)

仅在实际声明电火花路线使用本单一设计配方时纳入。称量净领用或应归属更换消耗，保留规格、回用余量及服务工单。铜成形、石墨成形及黄铜丝路线按实际记录选择，不是同时必需投入。采购成形电极排除其供货原料加工另计本地领用。

- 选定流： 成品纤维素成形电火花油滤芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 采购去离子线切割工艺水 (`diwater`)

仅用于实际采购经离子交换或反渗透制得且匹配公开路线去离子水。称量新增补加；排除内部循环。厂内去离子替代采购为实际原水、树脂膜及能源，不能重复两个边界。记录实际电导率要求，不设通用纯度。

- 选定流： 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

##### 废物流

###### 废矿物油成形电火花工作液 (`spent_dielectric`)

仅用于实际分类外运至记录接收方。称量本一种废物流并保留组成、合金电极颗粒、油水含量及干湿状态。内部回收及工艺余留液不是外运；其他废物组成须分行。

- 选定流： 废矿物油成形电火花工作液
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 废水基线切割工艺水 (`spent_edm_water`)

仅用于实际分类外运至记录接收方。称量本一种废物流并保留组成、合金电极颗粒、油水含量及干湿状态。内部回收及工艺余留液不是外运；其他废物组成须分行。

- 选定流： 废水基线切割工艺水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 废纤维素成形电火花油滤芯 (`spent_filter`)

仅用于实际分类外运至记录接收方。称量本一种废物流并保留组成、合金电极颗粒、油水含量及干湿状态。内部回收及工艺余留液不是外运；其他废物组成须分行。

- 选定流： 废纤维素成形电火花油滤芯
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 声明钢热处理 (`thermal`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_thermal`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 外供模具钢淬冷气态氮 (`nitrogen`)

仅用于本场址实际氮气淬冷规程。称量气体或按有依据温压密度换算；液态供给及厂内汽化须各自独立边界。不规定必需淬冷气体、压力温度或钢热处理配方。

- 选定流： 外供模具钢淬冷气态氮
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

### 过程： 声明型腔型芯精整 (`finishing`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_finishing`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 矿物油载体金刚石抛光膏 (`diamond_paste`)

仅用于一种实际供货声明配方粒度或砂盘结合剂设计。称量膏净领用或服务工单实测砂盘更换，保留组成及实际表面要求。光学表面要求按型号，不规定必需抛光路线或通用磨料率。

- 选定流： 矿物油载体金刚石抛光膏
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 成品氧化铝磨料砂盘 (`abrasive_disc`)

仅用于一种实际供货声明配方粒度或砂盘结合剂设计。称量膏净领用或服务工单实测砂盘更换，保留组成及实际表面要求。光学表面要求按型号，不规定必需抛光路线或通用磨料率。

- 选定流： 成品氧化铝磨料砂盘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

##### 废物流

###### 废氧化铝磨料砂盘 (`spent_disc`)

称量实际外运砂盘，记录结合剂磨料附着钢；公开抛光介质类别限定为本设计，捕集粉尘分开。

- 选定流： 废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 捕集的干态模具钢抛光粉尘 (`captured_dust`)

仅用于实际收集且交付接收方粉尘；记录单一合金、磨料污染及干态。这不是空气颗粒排放或洁净边角料。

- 选定流： 捕集的干态模具钢抛光粉尘
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 排入空气的粒径未特指颗粒物 (`air_particulate`)

仅在实际治理后监测确认粒径及空气子介质未特指排放颗粒质量时纳入。按相同采样基准配对浓度及排气体积。捕集粉尘分开；指定粒径须匹配身份。不能因打磨抛光就推断排放。

- 选定流： 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_emission`
- 来源：

### 过程： 完整配置模具装配 (`assembly`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_assembly`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 成品钢制注射模架总成 (`mould_base`)

仅用于一种实际采购完整模架，声明板叠、导向顶出包含、钢牌号及实测交付质量。公开模具模座宽类别限定为本一种项，不是配全型腔完整模具。排除已含板导柱另计；本地模架制造须展开原料加工。

- 选定流： 金属铸造用砂箱，模座，模型，金属用模具（铸锭模除外）、金属碳化物用模具、玻璃用模具、矿物材料用模具、橡胶或塑料用模具 `da241301-584e-4c9c-baa7-2208878acd1d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品数控铣削P20钢型腔镶件 (`cavity_insert`)

仅用于一种单独采购装配前数控铣削钻削、实际声明预硬P20牌号设计镶件。称量交付 kg 并保留供货完整性；公开机加工部件身份限定为本角色。供货电火花热处理等路线须匹配身份；本地机加工在制品为内部，不是本投入。不用机加工工序时间质量因子。

- 选定流： 机加工模具或工装部件 `1a185678-4878-4d8d-b58e-6fc5fd0682e1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品数控铣削P20钢型芯镶件 (`core_insert`)

仅用于一种单独采购装配前数控铣削钻削、实际声明预硬P20牌号设计镶件。称量交付 kg 并保留供货完整性；公开机加工部件身份限定为本角色。供货电火花热处理等路线须匹配身份；本地机加工在制品为内部，不是本投入。不用机加工工序时间质量因子。

- 选定流： 机加工模具或工装部件 `1a185678-4878-4d8d-b58e-6fc5fd0682e1`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品淬硬钢模具导柱 (`guide_pillar`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品淬硬钢模具导柱
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品淬硬钢模具导套 (`guide_bush`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品淬硬钢模具导套
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品钢模具顶针 (`ejector_pin`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢模具顶针
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品钢模具浇口套 (`sprue_bush`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢模具浇口套
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品钢模具定位圈 (`locating_ring`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢模具定位圈
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品钢制内六角圆柱头螺钉 (`cap_screw`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢制内六角圆柱头螺钉
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品NBR橡胶冷却通道O形圈 (`o_ring`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品NBR橡胶冷却通道O形圈
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢制模具冷却快速接头 (`cooling_coupling`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢制模具冷却快速接头
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品钢热流道分流板总成 (`hot_manifold`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品钢热流道分流板总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品热流道喷嘴总成 (`hot_nozzle`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品热流道喷嘴总成
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 成品K型热流道热电偶 (`thermocouple`)

仅用于本配置实际安装一种单供设计。保留零件号、材料热状态、尺寸、数量、实测质量及包含子件。热流道项按条件纳入且排除供货已含加热传感内部件另计。实际冷流道冷却侧抽顶出设计确定适用性；不设通用HASCO部件数量或橡胶组成。

- 选定流： 成品K型热流道热电偶
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源：

###### 成品非碳管状热流道加热电阻 (`heater`)

仅用于一种实际单供金属护套非碳电阻设计；记录电气额定值、实测质量及安装位置。公开加热器类别限定为本设计，并排除分流板喷嘴总成供货已含加热器。额定值为配置，不是质量或消耗能量。

- 选定流： 加热电阻器，碳电阻器除外 `991da6ee-1a8a-4e77-8f9c-c50615e255e7`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_parts。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_parts`
- 来源： hasco-injection-mould-nut

###### 锂皂矿物油模具润滑脂 (`grease`)

仅用于工厂实际添加指定润滑脂，测量净领用退回。排除供货已润滑内部件，并记录 M 中交付余留润滑；客户使用期润滑在范围外。

- 选定流： 锂皂矿物油模具润滑脂
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

### 过程： 工厂检查及验收 (`tryout`)

#### 输入

##### 产品流

###### 低压电网电力 (`electricity_tryout`)

计量实际阶段及应归属返工。本公开身份为用户端低于1kV电网平均交流电；其他来源电压须匹配独立交换。外包工序不能又计本地电力。

- 选定流： 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位： 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_energy`
- 来源：

###### 外供饮用水等级自来水 (`tap_water_tryout`)

仅用于本阶段实际外供饮用水等级水：适用机加工乳化液配制或模具检漏冷却试验。计量新增补水并按实际密度温度换算体积；排除内部循环及供货混合液内水。不计客户冷却水清单。

- 选定流： 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 工厂模具试模用未填充聚丙烯粒料 (`trial_pp`)

仅在实际验收试模使用一种供货声明未填充PP牌号时纳入。元数据保留牌号及均聚共聚身份、证书、实测净进料、回收料及实际循环。公开聚合粒料类别限定为本牌号；其他聚合物混合须独立身份。不采用客户生产模次或寿命进料因子。

- 选定流： 聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

##### 产品流

###### 工厂注塑未填充PP验收样件 (`trial_sample`)

仅用于实际独立称量且离开工装制造模块至声明客户检查存档边界验收样件。保留样件形状牌号、处置及批次数；样件不是模具质量。不推断商业共产品或回收抵扣。模块内保留样件改计内部在制品。

- 选定流： 工厂注塑未填充PP验收样件
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_trial_output。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_trial_output`
- 来源：

###### 验收完整配置钢制塑料注射模具 (`finished_mould`)

适用实际尺寸、装配分型顶出、冷却检漏、热流道电气及型号专属验收后的参考产出。一套完整定动模，含声明镶件及安装选项；不能扣除杜撰样件水质量。称量排水交付状态及余留润滑；排除运输包装工装、试验样件、可拆试验接头及独立控制器备件。公开类别限定为本完整热塑性塑料工装。

- 选定流： 金属铸造用砂箱，模座，模型，金属用模具（铸锭模除外）、金属碳化物用模具、玻璃用模具、矿物材料用模具、橡胶或塑料用模具 `da241301-584e-4c9c-baa7-2208878acd1d`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： fixed_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： collected_record
- 采集协议： `cp_mass`
- 来源： hasco-injection-mould-nut

##### 废物流

###### 洁净未填充PP工厂试模流道废料 (`pp_runner`)

仅用于声明PP试模实际分类且外运至匹配公开路线记录机械回收接收方废物。单独称量本单一物理废物并保留树脂牌号污染；内部再粉碎不是外运。单独链接处理，不自动抵扣避免树脂。

- 选定流： 聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 未填充PP工厂试模不合格样件废料 (`pp_reject`)

仅用于声明PP试模实际分类且外运至匹配公开路线记录机械回收接收方废物。单独称量本单一物理废物并保留树脂牌号污染；内部再粉碎不是外运。单独链接处理，不自动抵扣避免树脂。

- 选定流： 聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

###### 收集的模具冷却检漏废水 (`test_wastewater`)

仅用于实际排出外运处理水；测量溶液质量并记录污染接收方。回用冷却水是内部；直接环境排放须分开物质介质。不设默认试验水体积。

- 选定流： 收集的模具冷却检漏废水
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_waste`
- 来源：

### 过程： 发运保护 (`packout`)

#### 输入

##### 产品流

###### 成品木制发运托盘 (`wood_pallet`)

仅用于本单一指定产品实际发运保护。称量应归属净领用且排除于 M。声明托盘设计树种含水处理回用；薄膜非自粘未增强；纸板为含再生纤维且纤维至少80%的C型瓦楞。其他规格须独立相符行，不设通用包装质量或一次性假设。

- 选定流： 木制托盘、箱式托盘和其他装载板，木制托盘套环 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### 非泡沫LDPE保护薄膜 (`ldpe_film`)

仅用于本单一指定产品实际发运保护。称量应归属净领用且排除于 M。声明托盘设计树种含水处理回用；薄膜非自粘未增强；纸板为含再生纤维且纤维至少80%的C型瓦楞。其他规格须独立相符行，不设通用包装质量或一次性假设。

- 选定流： 低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

###### C型瓦楞纸板 (`cardboard`)

仅用于本单一指定产品实际发运保护。称量应归属净领用且排除于 M。声明托盘设计树种含水处理回用；薄膜非自粘未增强；纸板为含再生纤维且纤维至少80%的C型瓦楞。其他规格须独立相符行，不设通用包装质量或一次性假设。

- 选定流： 瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式： calculated_value
- 适用范围： product_specific
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： reference_flow
- 证据类型： calculated_from_collection
- 采集协议： `cp_material`
- 来源：

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_causal` | shared_operations | 优先按工单路线直接分开测量。以实际阶段时间负载及领料、有记录因果驱动核对共享数控电火花精整装配试模公用工程实测总量，含待机不合格返工。实际热批次记录装炉钢质量、牌号配方及实际炉循环；说明向服务工单分配依据，不用通用炉因子。驱动不完善时报告不确定性敏感性。 |  |
| `allocation_trial` | tryout | 实际验收试模归属本模具制造工单。分别跟踪样件流道不合格废物、回收树脂及冷却液回用；不自动推定商业共产品或避免聚合物抵扣。样件实际有商业功能时，使用前声明改变的多产出边界及有依据分配。回用电极滤器寿命及余留液按实际更换服务工单归属，不按每套消耗完整一件。 |  |
| `allocation_balance` | manufacturing_batch | 在同一期间配置核对收货坯料、成品安装质量、外运、在制品及内部回收。将返工不合格负担归属完整验收设备。废料按记录接收边界离开；不自动替代抵扣、每台均分或按销售额分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | tryout | reference_product | 校准净称重 | 序列；配置；验收净质量 M；两个半模选项；秤皮重；验收；排水状态；排除包装 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每种完整验收配置 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 每台验收净质量 | 秤校准；净称重票；完整套验收 |
| cp_configuration | assembly; tryout | configuration | 图样清单及路线台账 | 序列；型腔型芯模架；牌号热证书；型腔数；导向顶出冷却浇注；流道选项；自制外购；实际精整验收；场址期间 | 将每个实际图样清单项及工序对应原子交换或有依据排除。核验供货内部件及完整定动模，不用海报部件数。记录实际公差硬度表面及试验结果，不设通用阈值。 | kg | 每次图样装配修订 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 一种可追溯完整配置 | 图样；证书；签认路线清单及检查 |
| cp_material | machining; edm; thermal; finishing; assembly; tryout; packout | individual stock/consumable | 净领用及称重 | 一种材料设计；牌号状态配方；交付质量；领用退回；回用；体积时密度温压；服务工单；验收数 | 分别称量实际净坯料、液体电极磨料润滑脂树脂保护。记录组成状态及实际回用更换。仅按实际有依据密度条件换算体积；排除采购混合物重复组分。试模树脂进料退回实测，不按模次推断。 | kg | 每次领用退回及生产批次 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属净物料质量 / 同一配置的验收设备数量 | 秤；证书安全数据表；库存及服务工单台账 |
| cp_parts | assembly | individual installed component | 称重及供货完整性 | 零件设计；钢状态；质量；供货已含内部件；安装数；验收数；选定时仅数控路线 | 称量供货成品组件或核验实际批次专属零件质量数量记录。核对模架、单供数控镶件、导向顶出、密封冷却浇注及安装热流道。排除采购总成已含部件及本地在制品；不使用标准目录部件质量因子。 | kg | 每批供货及装配 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属安装组件质量 / 同一配置的验收设备数量 | 秤；供货边界；零件证书及实际清单 |
| cp_energy | machining; edm; thermal; finishing; assembly; tryout | electricity | 表计及因果驱动台账 | 阶段；来源电压；表计kWh；时段；共享总量；实际负载时间；待机返工；验收数 | 计量实际阶段及仅按实际执行注塑机模具试模。按1 kWh =3.6 MJ 换算。以实测因果驱动归属共享总量并核对待机返工不合格。额定功率或供货加工时间实例不是能量数量。 | MJ | 每个实际阶段时段批次 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属电能 / 同一配置的验收设备数量 | 表计校准；账单；阶段负载分配记录 |
| cp_waste | machining; edm; finishing; tryout | individual exported waste | 分类称重及接收凭证 | 一种废物；合金组成；干湿；油水污染；外运质量；内部回收；接收处理；验收数 | 分别称量各实际合金边角料、洁净含油切屑、废液滤芯砂盘、捕集粉尘、PP流道不合格及收集试验水。保留实际浓度污染及处理边界。洁净切屑身份排除含油切屑；选定PP废物要求机械回收接收方。回用不是外运；实测直接排放须逐物质介质展开。 | kg | 每次外运及核对批次 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属外运废物质量 / 同一配置的验收设备数量 | 秤；组成；接收处理凭证 |
| cp_emission | finishing | single air particulate | 治理后监测 | 物质；介质子介质；粒径；浓度；排气体积；采样基准；时段；背景；验收数 | 仅实际治理后排放颗粒：按同一采样基准配对质量浓度及排气体积，保留修正不确定性。本UUID须确认粒径空气介质未特指。捕集粉尘不是排放。指定粒径或其他实测物质分开展开；不设必需排放因子。 | kg | 代表性实际排放时段 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属实测颗粒质量 / 同一配置的验收设备数量 | 监测；采样流量校准；介质粒径依据 |
| cp_water_resource | machining | groundwater | 井表计及水源记录 | 含水层可再生淡水；场址国家；m3；时段；泵送处理；阶段用途回用；验收数 | 在工厂计量实际可再生淡水地下水；核验含水层限定且单独展开泵送处理。内部循环不是取水；相同水不能又计为自来水采购。 | m3 | 每个计量时段批次 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属取水体积 / 同一配置的验收设备数量 | 表计；含水层场址记录；阶段水平衡 |
| cp_trial_output | tryout | one actual PP acceptance-sample output | 独立称重及去向 | 样件形状树脂牌号；批次；实际外运kg；留存样件；流道不合格区分；接收方；验收数 | 称量离开本模块的单一指定验收样件产品；记录实际客户检查存档边界。留存样件在制品及外运PP废物分开。样件质量不计入模具 M，不推定商业产出功能。 | kg | 每次实际验收样件外运 | 同一声明生产期间；披露缺口 | 声明工装制造场址 | 应归属外运样件质量 / 同一配置的验收设备数量 | 秤；树脂样件身份；验收及去向记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_configuration` | all inventory rows | 正值实测 M 及交换分子使用相同配置期间验收数。核对定动模、安装镶件流道选项、供货内部件及自制外购。保留牌号状态、实际精整验收、试模进料样件回收、排水交付及不确定性。 | cp_configuration; cp_mass; cp_parts; cp_material; cp_trial_output |
| `quality_coverage` | inventory_and_links | 披露缺失清单项路线、测量UUID及供货运输处理链接。场址依据控制可选电火花热处理精整物理试模。不设通用材料牌号加工产率热配方树脂量模次排放寿命因子。 | cp_configuration; cp_energy; cp_waste; cp_emission; cp_water_resource |
| `quality_sources` | design_evidence | Uddeholm第17版2021年3月第10–12页提供历史供货牌号机加工热处理精整实例，不是当前通用规定。HASCO未注明日期单页海报展示一套两腔热流道模具；PDF创建元数据不是出版日期。均不确定实际清单数量钢组成、必需热流道、实测 M 或寿命。 | uddeholm-plastic-moulding-2021; hasco-injection-mould-nut |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 要求一种完整定动模配置、正值物理实测 M kg及cp_mass称重验收记录。参考产出为1kg；以normalize_mass归一其他每条kg、MJ或m3交换。明确排水状态及交付排除。 |  |
| `validation_bom` | inventory | 按清单路线核查每个实际钢坯或成品模架镶件、导向顶出、冷却密封浇注及安装热流道项。核查本地外购替代、选定仅数控路线、加工液电极回用、样件废物平衡、不合格返工及接收边界。声明完整覆盖前展开缺失实际卡片。 |  |
| `validation_identity` | all inventory rows | 核验公开流类型、牌号配方、参考属性单位组、实际状态路线完整性及官方本地化名。洁净切屑排除含油切屑；炼钢石墨电极排除电火花电极；液氮排除气态产品。地下水资源、采购工艺水及收集废水不同。空气颗粒不是捕集粉尘。 |  |
| `validation_claims` | dataset_claims | 无实际路线及链接供货运输接收覆盖不能声明完整摇篮到工厂门。工装制造质量不证明型腔产能塑件等效、寿命法规符合或方法学批准。独立科学审查仍待完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置前景完整钢制塑料注射模具制造模块；标题不声明发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实测 M 放大的相同完整配置工装制造；单独披露链接上游运输处理 |
| excluded_use | 客户塑件制造、使用寿命、独立部件、其他模塑技术材料路线及方法学批准 |
| required_metadata | 全部参考限定；图样清单型腔流道修订；钢证书热状态；实际自制外购及供货内部件；电火花热精整试模路线；实测完整套 M 及交付排除；实际准则结果；试模树脂样件废物回收；场址期间边界因果分配及链接供货接收 |
| required_quality_disclosure | 缺失身份测量清单路线链接；不确定性、实际回用不合格返工、分配及历史未注明日期来源限制 |
| update_trigger | 工装型腔流道清单、钢交付状态、供货完整性、机加工电火花热精整路线、自制外购、试模验收、场址期间回用分配变化 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| uddeholm-plastic-moulding-2021 | handbook | Uddeholm, TOOL STEELS FOR PLASTIC MOULDING, Edition17,03.2021 (edition statement physical p.2); physical/printed pp.10–12. https://www.uddeholm.com/app/uploads/sites/230/2024/05/Tech-Uddeholm-Steel-for-moulds-EN-1.pdf | 历史制造商牌号交付机加工选择、预硬及软退火热路线区分、精整依赖及条件电火花表面效应。线切割实例涉及挤出模，不证明每套注塑模必需线切割。不采用温度硬度变形成本加工数量、模具净质量或寿命。URL目录日期不是版本日期。 |
| hasco-injection-mould-nut | handbook | HASCO, 2-cavity injection moulding tool “Nut”, undated one-page annotated poster, physical p.1 (unnumbered). https://media.hasco.com/marketing/Content/Mediathek/Poster/Form/Form_POST_EN.pdf | 一种特定定动模、导向顶出模架及热流道组件实例。用于识别配置问题，不确定通用清单数量组成、必需热流道、工厂投入、模具质量或寿命。PDF创建元数据2022不作为出版年份。 |
